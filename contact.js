// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values for validation
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!firstName || !lastName || !email || !service || !message) {
                showMessage(formError);
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage(formError);
                return;
            }

            // Submit to FormSpree
            fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showMessage(formSuccess);
                    contactForm.reset();
                } else {
                    showMessage(formError);
                }
            })
            .catch(error => {
                showMessage(formError);
            });
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

});
