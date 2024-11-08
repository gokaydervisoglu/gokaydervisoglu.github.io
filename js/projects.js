function filterProjects(category) {
    const items = document.querySelectorAll('.row .item');
  
    items.forEach((item) => {
      if (category === 'all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(category)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  }
  

  function myLightbox_open(imgSrc, description) {
    const lightbox = document.getElementById("lightbox");
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox-description").innerText = description;
    lightbox.style.display = "flex";
  }
  
  function myLightbox_close() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  