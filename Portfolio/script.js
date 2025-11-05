// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll animations
function checkVisibility() {
    const elements = document.querySelectorAll('.about-image, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    
    // Toggle menu icon
    const menuIcon = this.querySelector('i');
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuIcon = mobileMenu.querySelector('i');
            
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Form validation enhancement
function validateForm() {
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'var(--secondary)';
            isValid = false;
        } else {
            input.style.borderColor = 'var(--primary)';
        }
    });
    
    return isValid;
}

// Add input event listeners for real-time validation
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.style.borderColor = 'var(--primary)';
        } else {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
});

// Update form submission to include validation
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Reset border colors
            document.querySelectorAll('.form-control').forEach(input => {
                input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            });
        }, 1500);
    }
});

// Add parallax effect to floating shapes
window.addEventListener('scroll', function() {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add typing effect to hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Initialize typing effect after page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    
    // Only apply typing effect if not on mobile
    if (window.innerWidth > 768) {
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }
});

// Add project filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    // This would be implemented if you add filter buttons
    console.log('Portfolio loaded successfully');
});