document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'All fields are required.';
                formMessage.style.color = 'red';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.color = 'red';
            } else {
                formMessage.textContent = 'Message sent successfully!';
                formMessage.style.color = 'green';
                form.reset();
            }
        });
    }
});