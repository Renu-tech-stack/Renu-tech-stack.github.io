// Create an Intersection Observer to trigger the animation when the contact section is in view
const contactSection = document.querySelector('#contact-section');
const contactContainer = document.querySelector('.contact-container');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add class to trigger the animation when it comes into view
            contactContainer.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, {
    threshold: 0.5  // Trigger when 50% of the section is in view
});

// Observe the contact section
observer.observe(contactSection);