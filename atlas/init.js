(() => {
  const parts = window.__ATLAS_PARTS || [];
  const b64 = parts.join('');
  if (!b64 || parts.length < 9) return;
  document.documentElement.style.setProperty(
    '--roadmap-atlas',
    'url("data:image/webp;base64,' + b64 + '")'
  );
  window.__ATLAS_READY = true;
})();