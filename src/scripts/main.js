
// Main JavaScript for the AI course landing page

document.addEventListener('DOMContentLoaded', function() {
  // Cursor follow effect (only on desktop)
  const cursorFollower = document.createElement('div');
  cursorFollower.classList.add('cursor-follow');
  document.body.appendChild(cursorFollower);

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
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('open');
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
  }
  
  // FAQ accordions
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const content = item.querySelector('.faq-content');
    
    header.addEventListener('click', () => {
      // Close all other FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-content').style.maxHeight = '0px';
        }
      });
      
      // Toggle current FAQ
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0px';
      }
    });
  });
  
  // Typewriter effect for hero text
  const heroText = document.querySelector('.typewriter');
  if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    
    let charIndex = 0;
    const typeEffect = setInterval(() => {
      if (charIndex < text.length) {
        heroText.textContent += text.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeEffect);
      }
    }, 50);
  }
});
