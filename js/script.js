function toggleMenu() {
  const navbarUl = document.querySelector('.navbar ul');
  const toggleButton = document.querySelector('.navbar-mobil');
  
  navbarUl.classList.toggle('active');
  toggleButton.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (navbarUl.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

document.addEventListener('click', function(event) {
  const navbarUl = document.querySelector('.navbar ul');
  const toggleButton = document.querySelector('.navbar-mobil');

  // Close menu when clicking outside
  if (navbarUl.classList.contains('active') && 
      !navbarUl.contains(event.target) && 
      !toggleButton.contains(event.target)) {
    navbarUl.classList.remove('active');
    toggleButton.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const navbarUl = document.querySelector('.navbar ul');
      const toggleButton = document.querySelector('.navbar-mobil');
      navbarUl.classList.remove('active');
      toggleButton.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});


