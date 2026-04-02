/**
 * Square Appointments Popup Handler
 * Opens booking links in a centered popup window
 * Astur Climbing - 2026
 */

(function() {
  'use strict';

  // Popup window configuration
  const POPUP_CONFIG = {
    width: 900,
    height: 700,
    scrollbars: 'yes',
    resizable: 'yes',
    toolbar: 'no',
    menubar: 'no',
    location: 'no',
    directories: 'no',
    status: 'yes'
  };

  /**
   * Calculate centered position for popup
   */
  function getCenteredPosition(width, height) {
    const screenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const screenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
    
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || screen.width;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || screen.height;
    
    const left = ((screenWidth / 2) - (width / 2)) + screenLeft;
    const top = ((screenHeight / 2) - (height / 2)) + screenTop;
    
    return { left: left, top: top };
  }

  /**
   * Build window features string
   */
  function getWindowFeatures() {
    const position = getCenteredPosition(POPUP_CONFIG.width, POPUP_CONFIG.height);
    
    return [
      `width=${POPUP_CONFIG.width}`,
      `height=${POPUP_CONFIG.height}`,
      `left=${position.left}`,
      `top=${position.top}`,
      `scrollbars=${POPUP_CONFIG.scrollbars}`,
      `resizable=${POPUP_CONFIG.resizable}`,
      `toolbar=${POPUP_CONFIG.toolbar}`,
      `menubar=${POPUP_CONFIG.menubar}`,
      `location=${POPUP_CONFIG.location}`,
      `directories=${POPUP_CONFIG.directories}`,
      `status=${POPUP_CONFIG.status}`
    ].join(',');
  }

  /**
   * Open booking popup
   */
  function openBookingPopup(url, title) {
    const windowName = title || 'Square Appointments';
    const features = getWindowFeatures();
    
    const popup = window.open(url, windowName, features);
    
    if (popup) {
      popup.focus();
    } else {
      // Popup blocked - fallback to new tab
      console.warn('Popup blocked. Opening in new tab instead.');
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    
    return false; // Prevent default link behavior
  }

  /**
   * Initialize booking buttons
   */
  function initBookingButtons() {
    // Find all booking buttons (they contain 'book.squareup.com' in href)
    const bookingLinks = document.querySelectorAll('a[href*="book.squareup.com"]');
    
    bookingLinks.forEach(function(link) {
      // Remove target="_blank" since we're handling the click
      link.removeAttribute('target');
      
      // Add click handler
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const url = this.getAttribute('href');
        const title = this.textContent.trim() || 'Book Appointment';
        
        openBookingPopup(url, title);
      });
    });
    
    console.log(`Initialized ${bookingLinks.length} booking popup button(s)`);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBookingButtons);
  } else {
    initBookingButtons();
  }

})();
