// login.js
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('loginModal');
    const loginBtn = document.querySelector('.login-btn');

    // Toggle modal function
    function toggleLoginModal() {
        modal.classList.toggle('show');
    }

    // Show modal when login button is clicked
    loginBtn.addEventListener('click', toggleLoginModal);

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            toggleLoginModal();
        }
    });

    // Form submission handling
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(loginForm);
        const email = formData.get('email');
        const password = formData.get('password');
        
        // Here you would typically handle the login logic
        console.log('Login attempted with:', { email, password });
        
        // For demonstration purposes, we'll just close the modal
        toggleLoginModal();
    });

    // Social login handlers
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const provider = this.classList[1]; // google, facebook, apple, or linkedin
            console.log(`${provider} login attempted`);
            // Here you would implement the social login logic
        });
    });

    // Forgot password handler
    const forgotPasswordLink = document.querySelector('.forgot-password');
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Forgot password clicked');
        // Here you would implement the forgot password logic
    });
});