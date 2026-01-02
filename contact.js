// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                catName: document.getElementById('catName').value,
                dates: document.getElementById('dates').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
                showMessage(formError);
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessage(formError);
                return;
            }

            // Simulate form submission
            // In a real application, you would send this data to a server
            console.log('Form submitted with data:', formData);

            // Show success message
            showMessage(formSuccess);

            // Reset form
            contactForm.reset();

            // Optional: Send to a backend or email service
            // submitToBackend(formData);
        });
    }

    function showMessage(messageElement) {
        // Hide both messages first
        formSuccess.style.display = 'none';
        formError.style.display = 'none';

        // Show the specified message
        messageElement.style.display = 'block';

        // Scroll to message
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide message after 5 seconds
        setTimeout(function() {
            messageElement.style.display = 'none';
        }, 5000);
    }

    // Optional: Function to submit to a backend service
    function submitToBackend(formData) {
        // Example using Fetch API
        /*
        fetch('YOUR_BACKEND_URL/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            showMessage(formSuccess);
            contactForm.reset();
        })
        .catch(error => {
            showMessage(formError);
        });
        */

        // Example using EmailJS or similar service
        /*
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
            .then(function(response) {
                showMessage(formSuccess);
                contactForm.reset();
            }, function(error) {
                showMessage(formError);
            });
        */
    }
});
