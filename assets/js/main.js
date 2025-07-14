// Main JavaScript for Primacy Lending Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initTabSwitching();
    initFormHandling();
    initAnimations();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
    `;
    
    // Add mobile menu styles
    const mobileStyles = `
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: #1f2937;
            cursor: pointer;
            padding: 0.5rem;
        }
        
        @media (max-width: 1024px) {
            .mobile-menu-btn {
                display: block;
            }
            
            .nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                border-top: 1px solid #e5e7eb;
                flex-direction: column;
                padding: 1rem;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            
            .nav.active {
                display: flex;
            }
            
            .nav-link {
                padding: 0.75rem 0;
                border-bottom: 1px solid #f3f4f6;
            }
            
            .nav-link:last-child {
                border-bottom: none;
            }
        }
    `;
    
    // Add styles to head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = mobileStyles;
    document.head.appendChild(styleSheet);
    
    // Insert mobile menu button
    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
        headerActions.insertBefore(mobileMenuBtn, headerActions.firstChild);
    }
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!header.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Tab Switching Functionality
function initTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab + '-tab');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Form Handling and CTA Interactions
function initFormHandling() {
    // Handle all CTA buttons
    const ctaButtons = document.querySelectorAll('.btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            
            // Only handle booking CTAs now, eligibility buttons link to quiz pages
            if (buttonText.includes('Book') || buttonText.includes('Schedule')) {
                handleBookingCTA(this);
            }
            // Phone calls and eligibility checks are handled by href
        });
    });
    
    // Handle phone number clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track phone call clicks
            console.log('Phone call initiated:', this.href);
        });
    });
}

// Handle Booking CTA Clicks
function handleBookingCTA(button) {
    // Check if button has href attribute (is a link)
    if (button.href) {
        // Let the link navigate naturally
        return;
    } else {
        // For buttons without href, scroll to calendar widget
        const calendarWidget = findNearestCalendarWidget(button);
        if (calendarWidget) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = calendarWidget.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Add a highlight effect to the calendar widget
            calendarWidget.style.borderColor = '#2563eb';
            calendarWidget.style.borderWidth = '3px';
            
            setTimeout(() => {
                calendarWidget.style.borderColor = '#d1d5db';
                calendarWidget.style.borderWidth = '2px';
            }, 3000);
        }
    }
}

// Find the nearest calendar widget to a button
function findNearestCalendarWidget(button) {
    // Look for calendar widgets in the same section first
    const section = button.closest('section');
    let calendarWidget = section ? section.querySelector('.ghl-calendar-placeholder') : null;
    
    // If not found in the same section, find the first one on the page
    if (!calendarWidget) {
        calendarWidget = document.querySelector('.ghl-calendar-placeholder');
    }
    
    return calendarWidget;
}

// Initialize Animations and Scroll Effects
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .benefit-card, .testimonial-card, .faq-item, .step, .process-step');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add transition to header
    header.style.transition = 'transform 0.3s ease-in-out';
}

// Utility Functions
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

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.remove('active');
    }
}, 250));

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden
        console.log('Page hidden');
    } else {
        // Page is visible
        console.log('Page visible');
    }
});

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Console welcome message
console.log('%cPrimacy Lending Website', 'color: #2563eb; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with modern web technologies for optimal performance and user experience.', 'color: #6b7280; font-size: 14px;');