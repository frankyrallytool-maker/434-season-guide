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
  const brandMark = document.querySelector('.brand-mark');

  const guideSearch = document.getElementById('guideSearch');
  const clearSearch = document.getElementById('clearSearch');
  const searchResults = document.getElementById('searchResults');

  const itemFilters = Array.from(document.querySelectorAll('.item-filter'));
  const itemGrid = document.getElementById('itemGrid');
  const itemEmpty = document.getElementById('itemEmpty');
  const itemCount = document.getElementById('itemCount');

  if (brandMark) brandMark.textContent = '434';

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
    if (progressValue) progressValue.textContent = `${completed} / ${checks.length}`;
    if (progressFill) progressFill.style.width = `${checks.length ? (completed / checks.length) * 100 : 0}%`;
    if (progressHint) {
      progressHint.textContent = completed === checks.length
        ? 'First steps complete. You are ready to push the season.'
        : 'Complete the five first-season actions.';
    }
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
      const completed = checks
        .filter((item) => item.checked)
        .map((item) => String(item.dataset.progress));
      writeProgress(completed);
      renderProgress();
    });
  });

  if (resetProgress) {
    resetProgress.addEventListener('click', () => {
      checks.forEach((box) => { box.checked = false; });
      writeProgress([]);
      renderProgress();
    });
  }

  if (navToggle && mobileNav) {
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
  }

  function normalizeSearchText(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function makeSearchEntry(element, kind, titleSelector, fallbackTitle) {
    const titleNode = titleSelector ? element.querySelector(titleSelector) : null;
    const title = (titleNode && titleNode.textContent.trim()) || fallbackTitle || 'Guide entry';
    const text = normalizeSearchText(element.textContent);
    return { element, kind, title, text };
  }

  function buildSearchIndex() {
    const entries = [];

    document.querySelectorAll('.step-card').forEach((el) => {
      entries.push(makeSearchEntry(el, 'STEP', '.step-title-wrap strong', 'Guide step'));
    });

    document.querySelectorAll('.item-card').forEach((el) => {
      entries.push(makeSearchEntry(el, 'ITEM', '.item-card-name h3', 'Item'));
    });

    document.querySelectorAll('.feature-card').forEach((el) => {
      entries.push(makeSearchEntry(el, 'RUINS', 'h3', 'Divine Ruins'));
    });

    document.querySelectorAll('.daily-item').forEach((el) => {
      entries.push(makeSearchEntry(el, 'DAILY', 'strong', 'Daily routine'));
    });

    document.querySelectorAll('.tips-grid article').forEach((el, index) => {
      entries.push(makeSearchEntry(el, 'TIP', null, `Quick tip ${index + 1}`));
    });

    document.querySelectorAll('main > section[id]').forEach((el) => {
      const heading = el.querySelector('h2');
      if (heading) {
        entries.push({
          element: el,
          kind: 'SECTION',
          title: heading.textContent.trim(),
          text: normalizeSearchText(heading.textContent + ' ' + (el.querySelector('.eyebrow')?.textContent || ''))
        });
      }
    });

    return entries;
  }

  let searchIndex = buildSearchIndex();

  function getResultDescription(entry) {
    const raw = entry.element.textContent.replace(/\s+/g, ' ').trim();
    const withoutTitle = raw.replace(entry.title, '').trim();
    return withoutTitle.slice(0, 95) || entry.kind;
  }

  function closeSearchResults() {
    if (!searchResults) return;
    searchResults.hidden = true;
    searchResults.replaceChildren();
  }

  function revealSearchTarget(entry) {
    const target = entry.element;

    if (target.classList.contains('step-card')) {
      const toggle = target.querySelector('.step-toggle');
      const body = target.querySelector('.step-body');
      if (toggle && body) {
        toggle.setAttribute('aria-expanded', 'true');
        body.hidden = false;
      }
    }

    if (target.classList.contains('item-card') && target.hidden) {
      const allButton = document.querySelector('.item-filter[data-item-filter="all"]');
      if (allButton) allButton.click();
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.remove('search-hit-flash');
    void target.offsetWidth;
    target.classList.add('search-hit-flash');
    window.setTimeout(() => target.classList.remove('search-hit-flash'), 1400);

    closeSearchResults();
  }

  function renderSearchResults(query) {
    if (!searchResults || !guideSearch || !clearSearch) return;

    const normalized = normalizeSearchText(query);
    clearSearch.hidden = !normalized;

    if (!normalized) {
      closeSearchResults();
      return;
    }

    const tokens = normalized.split(' ').filter(Boolean);
    const matches = searchIndex
      .filter((entry) => tokens.every((token) => entry.text.includes(token)))
      .slice(0, 8);

    searchResults.replaceChildren();
    searchResults.hidden = false;

    if (!matches.length) {
      const empty = document.createElement('div');
      empty.className = 'search-empty';
      empty.textContent = 'No result yet — try another word or item name.';
      searchResults.appendChild(empty);
      return;
    }

    matches.forEach((entry) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'search-result';

      const icon = document.createElement('span');
      icon.className = 'search-result-icon';
      icon.textContent = entry.kind;

      const copy = document.createElement('span');
      copy.className = 'search-result-copy';

      const title = document.createElement('strong');
      title.textContent = entry.title;

      const description = document.createElement('small');
      description.textContent = getResultDescription(entry);

      const arrow = document.createElement('span');
      arrow.className = 'search-result-arrow';
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '→';

      copy.append(title, description);
      button.append(icon, copy, arrow);
      button.addEventListener('click', () => revealSearchTarget(entry));
      searchResults.appendChild(button);
    });
  }

  if (guideSearch && clearSearch) {
    guideSearch.addEventListener('input', () => renderSearchResults(guideSearch.value));
    guideSearch.addEventListener('focus', () => {
      if (guideSearch.value.trim()) renderSearchResults(guideSearch.value);
    });

    clearSearch.addEventListener('click', () => {
      guideSearch.value = '';
      clearSearch.hidden = true;
      closeSearchResults();
      guideSearch.focus();
    });

    document.addEventListener('click', (event) => {
      const searchArea = document.querySelector('.guide-search');
      if (searchArea && !searchArea.contains(event.target)) closeSearchResults();
    });
  }

  function getItemCards() {
    return itemGrid ? Array.from(itemGrid.querySelectorAll('.item-card')) : [];
  }

  function applyItemFilter(filter) {
    const cards = getItemCards();
    let visible = 0;

    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.available === filter;
      card.hidden = !show;
      if (show) visible += 1;
    });

    itemFilters.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.itemFilter === filter);
    });

    if (itemEmpty) itemEmpty.hidden = cards.length > 0;
    if (itemCount) {
      const total = cards.length;
      itemCount.textContent = total === 1 ? '1 item documented' : `${total} items documented`;
      if (total > 0 && visible !== total) {
        itemCount.textContent += ` · ${visible} shown`;
      }
    }
  }

  itemFilters.forEach((button) => {
    button.addEventListener('click', () => applyItemFilter(button.dataset.itemFilter || 'all'));
  });

  applyItemFilter('all');
  syncFromStorage();

  // Rebuild automatically after future static item cards are added to the page.
  searchIndex = buildSearchIndex();
})();