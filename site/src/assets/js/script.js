window.addEventListener('load', () => {
  'use strict';

  function initGoToTopBtn() {
    const goTopBtn = document.querySelector('.back-to-top');

    function trackScroll() {
      const scrolled = window.pageYOffset;
      const threshold = 400;

      if (scrolled > threshold) {
        goTopBtn.classList.remove('hidden');
      }
      if (scrolled < threshold) {
        goTopBtn.classList.add('hidden');
      }
    }

    function scrollToTop() {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        scrollToTop();
      }
    }

    window.addEventListener('scroll', trackScroll, {passive: true});
    goTopBtn.addEventListener('click', backToTop);
  }

  initGoToTopBtn();

  const clipboard = new ClipboardJS('#copy-snippet-button', {
    text: trigger => trigger.parentNode.previousElementSibling.textContent.trim(),
  });

  clipboard.on('success', event => {
    event.clearSelection();
    event.trigger.blur();
    const notifyCopiedSnippet = document.querySelector('.notify-copied-snippet');
    notifyCopiedSnippet.classList.add('notify-copied-snippet--displayed');
  });

  clipboard.on('error', event => {
    console.error('[clipboard error] Action:', event.action);
    console.error('[clipboard error] Trigger:', event.trigger);
  });
});
