// Vercel Speed Insights
// This script initializes Vercel Speed Insights for the site
// See: https://vercel.com/docs/speed-insights/quickstart

(function() {
  'use strict';
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Initialize the Speed Insights queue
  if (!window.si) {
    window.si = function() {
      if (!window.siq) window.siq = [];
      window.siq.push(arguments);
    };
  }
  
  // Detect environment
  var mode = 'production';
  try {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      mode = 'development';
    }
  } catch (e) {}
  
  window.sim = mode;
  
  // Create and inject the Speed Insights script
  var script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  
  // Inject script when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  } else {
    document.head.appendChild(script);
  }
})();
