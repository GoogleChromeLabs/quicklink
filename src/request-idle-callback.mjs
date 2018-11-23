// RIC and shim for browsers setTimeout() without it
const requestIdleCallback = window.requestIdleCallback ||
  function (cb) {
    let start = Date.now();
    return setTimeout(function () {
      cb({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, 1);
  }

export default requestIdleCallback;