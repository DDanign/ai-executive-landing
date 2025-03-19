
// Main JavaScript for the AI course landing page

document.addEventListener('DOMContentLoaded', function() {
  // Cursor follow effect (only on desktop)
  const cursorFollower = document.querySelector('.cursor-follow');
  
  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      cursorFollower.style.opacity = '1';
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mouseout', () => {
      cursorFollower.style.opacity = '0';
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Reveal animations on scroll
  const revealItems = document.querySelectorAll('.reveal-item');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < windowHeight - 100) {
        item.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  // Trigger once on load
  revealOnScroll();
  
  // Animate progress circles
  const progressCircles = document.querySelectorAll('.progress-ring__circle:not(.progress-ring__circle--bg)');
  progressCircles.forEach(circle => {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    
    setTimeout(() => {
      const percent = parseInt(circle.dataset.percent || 0);
      const offset = circumference - (percent / 100 * circumference);
      circle.style.strokeDashoffset = offset;
    }, 500);
  });
  
  // Mobile navigation toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  
  if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
    
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
    
    // Close mobile menu when clicking on mobile menu links
    mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }
  
  // Fix SVG attributes for React compatibility (convert stroke-width to strokeWidth)
  document.querySelectorAll('circle[stroke-width]').forEach(circle => {
    const strokeWidth = circle.getAttribute('stroke-width');
    circle.setAttribute('strokeWidth', strokeWidth);
    circle.removeAttribute('stroke-width');
  });
  
  // Typewriter effect for hero text
  const heroText = document.querySelector('.typewriter');
  if (heroText) {
    const originalText = heroText.textContent;
    heroText.textContent = '';
    
    let charIndex = 0;
    const typeEffect = setInterval(() => {
      if (charIndex < originalText.length) {
        heroText.textContent += originalText.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeEffect);
      }
    }, 50);
  }
});
