/**
 * Shop Page Functionality
 * Product filtering and interactions
 */

(function () {
  'use strict';

  function initProductFilters() {
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    const productItems = document.querySelectorAll('.product-item');
    const productGrid = document.querySelector('.product-grid');

    // activeParents: Set of parent keys active (e.g. "lifting-blocks", "hangboards")
    // activeSubs: Map of parent key → Set of active sub-filters
    // activeStandalone: Set of standalone filter keys (e.g. "accessories")
    const activeParents = new Set();
    const activeSubs = new Map();
    const activeStandalone = new Set();

    function hasAnyFilter() {
      return activeParents.size > 0 || activeStandalone.size > 0;
    }

    function applyFilters() {
      productGrid.classList.add('filtering');

      productItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
      });

      setTimeout(() => {
        productItems.forEach(item => {
          const categories = (item.getAttribute('data-category') || '').split(' ');
          let show = false;

          if (!hasAnyFilter()) {
            show = true;
          } else {
            // Check standalone filters
            activeStandalone.forEach(f => {
              if (categories.includes(f)) show = true;
            });

            // Check parent filters
            activeParents.forEach(parent => {
              if (!categories.includes(parent)) return;
              const subs = activeSubs.get(parent);
              if (!subs || subs.size === 0) {
                // Parent active, no sub selected — show all products in this parent
                show = true;
              } else {
                // Sub(s) active — product must also match a sub
                subs.forEach(sub => {
                  if (categories.includes(sub)) show = true;
                });
              }
            });
          }

          item.style.display = show ? 'flex' : 'none';
        });

        setTimeout(() => {
          productItems.forEach(item => {
            if (item.style.display !== 'none') {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }
          });
          productGrid.classList.remove('filtering');
        }, 50);
      }, 300);
    }

    function updateAllBtn() {
      allBtn.classList.toggle('active', !hasAnyFilter());
    }

    function clearAll() {
      activeParents.clear();
      activeSubs.clear();
      activeStandalone.clear();
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.filter-group-sub').forEach(sub => sub.classList.remove('open'));
      allBtn.classList.add('active');
    }

    // "All Products"
    allBtn.addEventListener('click', function () {
      clearAll();
      applyFilters();
    });

    // Group toggles (Lifting Blocks, Hangboards)
    document.querySelectorAll('.filter-group-toggle').forEach(toggle => {
      toggle.addEventListener('click', function () {
        const parent = this.getAttribute('data-filter');
        const sub = this.parentElement.querySelector('.filter-group-sub');

        if (activeParents.has(parent)) {
          // Deactivate parent and its subs
          activeParents.delete(parent);
          activeSubs.delete(parent);
          this.classList.remove('active');
          sub.classList.remove('open');
          // Clear sub button states for this group
          this.parentElement.querySelectorAll('.filter-sub-btn').forEach(b => b.classList.remove('active'));
        } else {
          // Activate parent and expand subs
          activeParents.add(parent);
          activeSubs.set(parent, new Set());
          this.classList.add('active');
          sub.classList.add('open');
        }

        updateAllBtn();
        applyFilters();
      });
    });

    // Sub-buttons — narrow within their parent group
    document.querySelectorAll('.filter-sub-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const sub = this.getAttribute('data-filter');
        const parent = this.closest('.filter-group').querySelector('.filter-group-toggle').getAttribute('data-filter');

        // Ensure parent is active
        if (!activeParents.has(parent)) {
          activeParents.add(parent);
          activeSubs.set(parent, new Set());
          this.closest('.filter-group').querySelector('.filter-group-toggle').classList.add('active');
        }

        const subs = activeSubs.get(parent);

        if (subs.has(sub)) {
          subs.delete(sub);
          this.classList.remove('active');
        } else {
          subs.add(sub);
          this.classList.add('active');
        }

        updateAllBtn();
        applyFilters();
      });
    });

    // Standalone buttons (Accessories etc.)
    document.querySelectorAll('.filter-btn:not(.filter-group-toggle):not(.filter-sub-btn):not([data-filter="all"])').forEach(btn => {
      btn.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');
        if (activeStandalone.has(filter)) {
          activeStandalone.delete(filter);
          this.classList.remove('active');
        } else {
          activeStandalone.add(filter);
          this.classList.add('active');
        }
        updateAllBtn();
        applyFilters();
      });
    });

    // Initialize transitions
    productItems.forEach(item => {
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initProductFilters();
  });

})();
