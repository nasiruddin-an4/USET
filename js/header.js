// JavaScript for the header/navbar functionality

document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for scroll to change navbar styling
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('py-2', 'shadow');
      navbar.classList.remove('py-3');
    } else {
      navbar.classList.remove('py-2', 'shadow');
      navbar.classList.add('py-3');
    }
  });

  // Add active class to current navigation item based on URL
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Check if current path matches the link or if it's a subpath
    if (linkPath === '/' && currentLocation === '/') {
      link.classList.add('active');
    } else if (linkPath !== '/' && currentLocation.startsWith(linkPath)) {
      link.classList.add('active');
    }
  });
});