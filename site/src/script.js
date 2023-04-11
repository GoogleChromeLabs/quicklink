window.addEventListener('load', () => {
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
  };

  initGoToTopBtn();

  const clipboard = new ClipboardJS('#copy-snippet-button');
  clipboard.on('success', function (e) {
    console.info('[clipboard success] Action:', e.action);
    console.info('[clipboard success] Text:', e.text);
    console.info('[clipboard success] Trigger:', e.trigger);

    e.clearSelection();
    e.trigger.blur();
    const notifyCopiedSnippet = document.querySelector('.notify-copied-snippet');
    notifyCopiedSnippet.classList.add('notify-copied-snippet--displayed');
  });

  clipboard.on('error', function (e) {
    console.error('[clipboard error] Action:', e.action);
    console.error('[clipboard error] Trigger:', e.trigger);
  });
});
