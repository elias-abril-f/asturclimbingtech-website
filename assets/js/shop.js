/**
 * Shop Page Functionality
 * Product filtering — flat multi-select, OR logic.
 * Multiple active filters show the union of matching products.
 * Supports ?filter=tag or ?filter=tag1,tag2 URL params.
 */

(function () {
  'use strict';

  function initProductFilters() {
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    const filterBtns = document.querySelectorAll('.filter-btn:not([data-filter="all"])');
    const productItems = document.querySelectorAll('.product-item');
    const productGrid = document.querySelector('.product-grid');

    const activeFilters = new Set();

    function applyFilters() {
      productGrid.classList.add('filtering');

      productItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
      });

      setTimeout(() => {
        productItems.forEach(item => {
          const categories = (item.getAttribute('data-category') || '').split(' ');
          const show = activeFilters.size === 0
            || [...activeFilters].some(f => categories.includes(f));
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
      allBtn.classList.toggle('active', activeFilters.size === 0);
    }

    allBtn.addEventListener('click', function () {
      activeFilters.clear();
      filterBtns.forEach(b => b.classList.remove('active'));
      allBtn.classList.add('active');
      applyFilters();
    });

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');
        if (activeFilters.has(filter)) {
          activeFilters.delete(filter);
          this.classList.remove('active');
        } else {
          activeFilters.add(filter);
          this.classList.add('active');
        }
        updateAllBtn();
        applyFilters();
      });
    });

    productItems.forEach(item => {
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

    // Apply filter(s) from URL: ?filter=classic or ?filter=classic,ergo
    const urlParam = new URLSearchParams(window.location.search).get('filter');
    if (urlParam) {
      urlParam.split(',').forEach(tag => {
        const btn = document.querySelector(`.filter-btn[data-filter="${tag.trim()}"]`);
        if (btn) btn.click();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initProductFilters();
  });

})();
