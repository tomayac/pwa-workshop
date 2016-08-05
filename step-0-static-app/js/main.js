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
})();
