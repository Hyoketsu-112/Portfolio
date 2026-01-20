// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading screen
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }
    }, 1500);

    // Initialize everything
    initPortfolio();
});

function initPortfolio() {
    // Initialize particles background
    initParticles();
    
    // Initialize custom cursor
    initCustomCursor();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize form
    initContactForm();
    
    // Initialize grid lines
    initGridLines();
    
    // Initialize back to top
    initBackToTop();
    
    // Initialize mobile menu
    initMobileMenu();
}

// Particles Background
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#6C63FF" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6C63FF",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (window.innerWidth > 768 && cursor && follower) {
        // Show cursor on desktop
        cursor.style.display = 'block';
        follower.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Smooth follow with delay
            requestAnimationFrame(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            });
        });
        
        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .contact-item, .social-link, .tech-tag');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.borderColor = 'var(--primary)';
                follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
                follower.style.opacity = '0.7';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.borderColor = 'var(--primary)';
                follower.style.transform = 'translate(-50%, -50%) scale(1)';
                follower.style.opacity = '1';
            });
        });
    } else if (cursor && follower) {
        // Hide custom cursor on mobile
        cursor.style.display = 'none';
        follower.style.display = 'none';
    }
}

// Scroll Animations
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(el => observer.observe(el));
    
    // Parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-decoration');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${-scrolled * speed}px) translateY(-50%)`;
        });
    });
}

// Navigation
function initNavigation() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    if (!header) return;
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinksContainer = document.querySelector('.nav-links');
                if (navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    const menuBtnIcon = document.querySelector('.mobile-menu-btn i');
                    if (menuBtnIcon) {
                        menuBtnIcon.className = 'fas fa-bars';
                    }
                }
            }
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenuBtn || !navLinks) return;
    
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        }
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        });
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    if (savedTheme === 'light') {
        enableLightTheme();
    } else {
        enableDarkTheme();
    }
    
    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            enableDarkTheme();
        } else {
            enableLightTheme();
        }
    });
    
    function enableLightTheme() {
        document.body.classList.add('light-theme');
        icon.className = 'fas fa-sun';
        localStorage.setItem('portfolio-theme', 'light');
        
        // Update particles for light theme
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 60, density: { enable: true, value_area: 800 } },
                    color: { value: "#6C63FF" },
                    line_linked: {
                        color: "#6C63FF",
                        opacity: 0.3
                    }
                }
            });
        }
    }
    
    function enableDarkTheme() {
        document.body.classList.remove('light-theme');
        icon.className = 'fas fa-moon';
        localStorage.setItem('portfolio-theme', 'dark');
        
        // Update particles for dark theme
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#6C63FF" },
                    line_linked: {
                        color: "#6C63FF",
                        opacity: 0.2
                    }
                }
            });
        }
    }
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const notification = document.getElementById('notification');
    
    if (!form || !notification) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success notification
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            form.reset();
            
        } catch (error) {
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = `notification ${type} show`;
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }
}

// Grid Lines
function initGridLines() {
    const gridLines = document.querySelector('.grid-lines');
    if (!gridLines) return;
    
    // Clear existing lines
    gridLines.innerHTML = '';
    
    const columns = Math.floor(window.innerWidth / 100);
    const rows = Math.floor(document.documentElement.scrollHeight / 100);
    
    // Add vertical lines
    for (let i = 0; i <= columns; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line vertical';
        line.style.left = `${(i * 100) - 0.5}px`;
        gridLines.appendChild(line);
    }
    
    // Add horizontal lines
    for (let i = 0; i <= rows; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line horizontal';
        line.style.top = `${(i * 100) - 0.5}px`;
        gridLines.appendChild(line);
    }
}

// Back to Top
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle resize
window.addEventListener('resize', debounce(() => {
    // Reinitialize grid lines
    initGridLines();
    
    // Reinitialize cursor for mobile/desktop switching
    initCustomCursor();
}, 250));

// Handle page load errors
window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.error);
});

// Handle images that fail to load
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => {
            console.warn(`Image failed to load: ${img.src}`);
            img.style.display = 'none';
        });
    });
});