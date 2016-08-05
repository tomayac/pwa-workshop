(() => {
  // Simulate slow image loading
  (() => {
    for (let img of document.querySelectorAll('img.offer-img')) {
      img.style.backgroundImage = `url(${img.dataset.src})`;
      setTimeout(() => {
        img.classList.remove('offer-img--blur');
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      }, Math.random() * 3000);
    }
  })();

  // Register Service Worker
  (() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
      .then(serviceWorkerRegistration => {
        console.log('[Main] Service Worker registered');
        console.log(serviceWorkerRegistration);
      }).catch(err => {
        console.log('[Main]', err);
      });
    }
  })();
})();
