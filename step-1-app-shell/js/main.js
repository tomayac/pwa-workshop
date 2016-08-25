(() => {
  // Simulate slow image loading
  (() => {
    const offerImgs = document.querySelectorAll('img.offer-img');
    for (let i = 0, lenI = offerImgs.length; i < lenI; i++) {
      let img = offerImgs[i];
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
      }).catch(err => {
        console.log('[Main]', err);
      });
    }
  })();
})();
