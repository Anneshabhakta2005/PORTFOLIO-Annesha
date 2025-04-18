document.addEventListener('DOMContentLoaded', function() {
    // Add animation to buttons on page load
    const buttons = document.querySelectorAll('.animated-btn');
    buttons.forEach(button => {
        button.style.animation = 'gradientShift 3s ease infinite';
    });
    
    // Form submission handler for contact page
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add hover effect to education timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.boxShadow = '0 4px 15px rgba(156, 39, 176, 0.4)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });
});
// Enhanced button click effects
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to all animated buttons
    const buttons = document.querySelectorAll('.animated-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove any existing click class
            this.classList.remove('btn-clicked');
            
            // Get mouse position relative to button
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create pseudo-element at click position
            this.style.setProperty('--x', x + 'px');
            this.style.setProperty('--y', y + 'px');
            
            // Add click class to trigger animation
            this.classList.add('btn-clicked');
            
            // Remove class after animation completes
            setTimeout(() => {
                this.classList.remove('btn-clicked');
            }, 600);
        });
        
        // Continuous gradient animation on hover
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'gradientShift 3s ease infinite';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
});