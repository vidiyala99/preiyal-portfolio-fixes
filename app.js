// Email: let the mailto open the mail app (the default), and also copy the address,
// so it works for people who use webmail too. Same behavior at every width.
(() => {
  const toast = document.querySelector('.toast');
  let toastTimer;

  function showToast(text) {
    toast.textContent = text;
    toast.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-on'), 2600);
  }

  function swapLabel(link, key) {
    const done = key === 'done';
    const icon = link.querySelector('i.ph');
    if (icon) {
      // Icon button: envelope -> check, tooltip text follows.
      icon.classList.toggle('ph-envelope-simple', !done);
      icon.classList.toggle('ph-check', done);
      const tip = link.querySelector('.tip');
      if (tip) tip.textContent = tip.dataset[key];
      link.classList.toggle('is-done', done);
      return;
    }
    const label = link.querySelector('.email-label');
    link.classList.add('is-swapping');
    setTimeout(() => {
      label.textContent = label.dataset[key];
      link.classList.toggle('is-done', done);
      link.classList.remove('is-swapping');
    }, 180);
  }

  document.querySelectorAll('a.email').forEach((link) => {
    let resetTimer;
    link.addEventListener('click', async () => {
      const address = link.dataset.email;
      let copied = false;
      try {
        await navigator.clipboard.writeText(address);
        copied = true;
      } catch (_) { /* clipboard blocked: the mailto still opens */ }
      swapLabel(link, 'done');
      showToast(copied ? `${address} copied` : `Opening mail to ${address}`);
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => swapLabel(link, 'default'), 2400);
      // No preventDefault: the browser follows the mailto link.
    });
  });

  // Resume: view in place (Drive embed), with Download and open-in-tab. Modified clicks keep the Drive link.
  const dialog = document.querySelector('dialog.resume');
  const resumeLink = document.querySelector('[data-resume]');
  if (dialog && resumeLink && typeof dialog.showModal === 'function') {
    const frame = dialog.querySelector('iframe');
    const loading = dialog.querySelector('.resume-loading');
    frame.addEventListener('load', () => { loading.hidden = true; });
    resumeLink.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      if (!frame.src) frame.src = frame.dataset.src;
      dialog.showModal();
      dialog.querySelector('.resume-close').focus();
    });
    dialog.querySelector('.resume-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => resumeLink.focus());
  }

  // Hero video: play only when motion is welcome.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const videos = document.querySelectorAll('video');
  function sync() {
    videos.forEach((v) => {
      if (reduce.matches) { v.pause(); v.removeAttribute('autoplay'); }
      else { v.play().catch(() => {}); }
    });
  }
  sync();
  reduce.addEventListener('change', sync);
})();
