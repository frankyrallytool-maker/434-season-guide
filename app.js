(() => {
  'use strict';

  const STORAGE_KEY = '434-season-guide-progress-v1';
  const toggles = Array.from(document.querySelectorAll('.step-toggle'));
  const checks = Array.from(document.querySelectorAll('[data-progress]'));
  const progressValue = document.getElementById('progressValue');
  const progressFill = document.getElementById('progressFill');
  const progressHint = document.getElementById('progressHint');
  const resetProgress = document.getElementById('resetProgress');
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');

  function readProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(saved) ? saved.map(String) : [];
    } catch (_) {
      return [];
    }
  }

  function writeProgress(values) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch (_) {
      // The guide still works when storage is blocked.
    }
  }

  function renderProgress() {
    const completed = checks.filter((box) => box.checked).length;
    progressValue.textContent = `${completed} / ${checks.length}`;
    progressFill.style.width = `${checks.length ? (completed / checks.length) * 100 : 0}%`;
    progressHint.textContent = completed === checks.length
      ? 'First steps complete. You are ready to push the season.'
      : 'Complete the five first-season actions.';
  }

  function syncFromStorage() {
    const completed = new Set(readProgress());
    checks.forEach((box) => {
      box.checked = completed.has(String(box.dataset.progress));
    });
    renderProgress();
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      const body = toggle.nextElementSibling;
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (body) body.hidden = expanded;
    });
  });

  checks.forEach((box) => {
    box.addEventListener('change', () => {
      const completed = checks.filter((item) => item.checked).map((item) => String(item.dataset.progress));
      writeProgress(completed);
      renderProgress();
    });
  });

  resetProgress.addEventListener('click', () => {
    checks.forEach((box) => { box.checked = false; });
    writeProgress([]);
    renderProgress();
  });

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.hidden = isOpen;
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
    });
  });

  syncFromStorage();
})();