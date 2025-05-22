// Main JavaScript file for USET University Website

document.addEventListener('DOMContentLoaded', function() {
  // Load university information for footer and other components
  fetch('/data/university_info.json')
    .then(response => response.json())
    .then(data => {
      // Update elements with university info
      // Name, address, contact, etc.
      const universityName = document.querySelectorAll('.university-name');
      const universityShortName = document.querySelectorAll('.university-short-name');
      const universitySlogan = document.querySelectorAll('.university-slogan');
      const universityAddress = document.querySelectorAll('.university-address');
      const universityPhone = document.querySelectorAll('.university-phone');
      const universityEmail = document.querySelectorAll('.university-email');
      
      // Social media links
      const facebookLinks = document.querySelectorAll('.facebook-link');
      const twitterLinks = document.querySelectorAll('.twitter-link');
      const linkedinLinks = document.querySelectorAll('.linkedin-link');
      const instagramLinks = document.querySelectorAll('.instagram-link');
      
      // Update all elements with university information
      universityName.forEach(el => el.textContent = data.name);
      universityShortName.forEach(el => el.textContent = data.shortName);
      universitySlogan.forEach(el => el.textContent = data.slogan);
      
      const fullAddress = `${data.location.address}, ${data.location.city}, ${data.location.country}`;
      universityAddress.forEach(el => el.textContent = fullAddress);
      
      universityPhone.forEach(el => {
        el.textContent = data.contact.phone;
        if (el.tagName === 'A') {
          el.href = `tel:${data.contact.phone}`;
        }
      });
      
      universityEmail.forEach(el => {
        el.textContent = data.contact.email;
        if (el.tagName === 'A') {
          el.href = `mailto:${data.contact.email}`;
        }
      });
      
      // Update social media links
      facebookLinks.forEach(el => el.href = data.contact.facebook);
      twitterLinks.forEach(el => el.href = data.contact.twitter);
      linkedinLinks.forEach(el => el.href = data.contact.linkedin);
      instagramLinks.forEach(el => el.href = data.contact.instagram);
      
      // Set copyright year in footer
      const copyrightYear = document.querySelector('.copyright-year');
      if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
      }
    })
    .catch(error => console.error('Error loading university info:', error));
    
  // Initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();
  
  // Initialize popovers
  $('[data-toggle="popover"]').popover();
  
  // Animate stats numbers
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.stat-value').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            let count = 0;
            const updateCounter = () => {
              if (count < target) {
                count += Math.ceil(target / 20);
                if (count > target) count = target;
                counter.textContent = count;
                setTimeout(updateCounter, 50);
              } else {
                counter.textContent = target;
              }
            };
            updateCounter();
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
  }
});

$(document).ready(function(){
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });
});