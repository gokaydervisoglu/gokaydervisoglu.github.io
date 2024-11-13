function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('my_clock').textContent = timeString;
  }
  
  setInterval(updateClock, 1000);
  updateClock();


  function adjustFooterMargin() {
    const mainContent = document.querySelector('.main-content');
    const myfooter = document.querySelector('.my-footer');
    const windowHeight = window.innerHeight; 
    const mainContentHeight = mainContent.offsetHeight;

    if (window.innerWidth <= 768) {
        const marginTop = windowHeight - mainContentHeight - myfooter.offsetHeight - 100;
        myfooter.style.marginTop = marginTop > 0 ? `${marginTop}px` : '0px';
    } else {
        myfooter.style.marginTop = '0px';
    }
}

window.addEventListener('load', adjustFooterMargin);
window.addEventListener('resize', adjustFooterMargin);

