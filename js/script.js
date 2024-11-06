function toggleMenu() {
  const navbarUl = document.querySelector('.navbar ul');
  navbarUl.classList.toggle('active');
};

document.addEventListener('click', function(event) {
  const navbarUl = document.querySelector('.navbar ul');
  const toggleButton = document.querySelector('.navbar-mobil');

  if (!navbarUl.contains(event.target) && !toggleButton.contains(event.target)) {
    navbarUl.classList.remove('active');
  }
});


