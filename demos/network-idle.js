// This script is a localized version of the upstream
// https://github.com/pastelsky/network-idle-callback
// which fixes isssues with browser importing of the
// above dependency. It is hopefully temporary.

const DOMContentLoad = new Promise(resolve => {
  document.addEventListener('DOMContentLoaded', resolve);
});

navigator.serviceWorker.getRegistration()
    .then(registration => {
      if (!registration) {
        console.warn('`networkIdleCallback` was called before a service worker was registered.');
        console.warn('`networkIdleCallback` is ineffective without a working service worker');
      }
    });

/**
 * networkIdleCallback works similar to requestIdleCallback,
 * detecting and notifying you when network activity goes idle
 * in your current tab.
 * @param {*} fn - A valid function
 * @param {*} options - An options object
 */
function networkIdleCallback(fn, options = {timeout: 0}) {
  // Call the function immediately if required features are absent
  if (
    !('MessageChannel' in window) ||
    !('serviceWorker' in navigator) ||
    !navigator.serviceWorker.controller
  ) {
    DOMContentLoad.then(() => fn({didTimeout: false}));
    return;
  }

  const messageChannel = new MessageChannel();
  navigator.serviceWorker.controller
      .postMessage(
          'NETWORK_IDLE_ENQUIRY',
          [messageChannel.port2],
      );

  const timeoutId = setTimeout(() => {
    const cbToPop = networkIdleCallback.__callbacks__
        .find(cb => cb.id === timeoutId);

    networkIdleCallback.__popCallback__(cbToPop, true);
  }, options.timeout);

  networkIdleCallback.__callbacks__.push({
    id: timeoutId,
    fn,
    timeout: options.timeout,
  });

  messageChannel.port1.addEventListener('message', handleMessage);
  messageChannel.port1.start();
}

/*
function cancelNetworkIdleCallback(callbackId) {
  clearTimeout(callbackId);

  networkIdleCallback.__callbacks__ = networkIdleCallback.__callbacks__
      .find(cb => cb.id === callbackId);
}
*/

networkIdleCallback.__popCallback__ = (callback, didTimeout) => {
  DOMContentLoad.then(() => {
    const cbToPop = networkIdleCallback.__callbacks__
        .find(cb => cb.id === callback.id);

    if (cbToPop) {
      cbToPop.fn({didTimeout});
      clearTimeout(cbToPop.id);
      networkIdleCallback.__callbacks__ = networkIdleCallback.__callbacks__.filter(
          cb => cb.id !== callback.id);
    }
  });
};

networkIdleCallback.__callbacks__ = [];

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', handleMessage);
}

/**
 * Handle message passing
 * @param {*} event - A valid event
 */
function handleMessage(event) {
  if (!event.data) {
    return;
  }

  switch (event.data) {
    case 'NETWORK_IDLE_ENQUIRY_RESULT_IDLE':
    case 'NETWORK_IDLE_CALLBACK':
      networkIdleCallback.__callbacks__.forEach(callback => {
        networkIdleCallback.__popCallback__(callback, false);
      });
      break;
  }
}
