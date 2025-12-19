// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        researchType: document.getElementById('research-type').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a backend service
    // For now, we'll just show a confirmation message
    alert('Thank you for your enquiry. I will respond within 24 hours.');
    
    // Reset the form
    this.reset();
    
    // In production, you would integrate with a service like:
    // - Formspree (https://formspree.io/)
    // - EmailJS (https://www.emailjs.com/)
    // - Your own backend API
    // Example with fetch:
    /*
    fetch('YOUR_FORM_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for your enquiry. I will respond within 24 hours.');
        this.reset();
    })
    .catch(error => {
        alert('There was an error submitting the form. Please try again or email directly.');
    });
    */
});