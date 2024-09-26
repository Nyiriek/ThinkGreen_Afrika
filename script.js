// script.js

// Function to handle the "Read More" button clicks
const readMoreButtons = document.querySelectorAll('.read-more-btn');
readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('More information coming soon!');
    });
});

// Function to handle "Explore" button click in the community section
const exploreButton = document.querySelector('.explore-btn');
exploreButton.addEventListener('click', () => {
    alert('Exploring community features...');
});

// Function to handle "Get Started" button click
const getStartedButton = document.querySelector('.white-btn');
getStartedButton.addEventListener('click', () => {
    window.location.href = 'get-started.html'; // Redirect to a new page
});

// Function to handle "See All" button click
const seeAllButton = document.querySelector('.see-all-btn');
seeAllButton.addEventListener('click', () => {
    window.location.href = 'all-resources.html'; // Redirect to all resources
});

// Function to handle "Login" button click
const loginButton = document.querySelector('.login-btn');
loginButton.addEventListener('click', () => {
    window.location.href = 'login.html'; // Redirect to login page
});

// Function to handle newsletter signup
const signupButton = document.querySelector('.signup-btn');
signupButton.addEventListener('click', () => {
    const emailInput = document.querySelector('input[type="text"]');
    const email = emailInput.value;
    if (email) {
        alert(`Thank you for subscribing, ${email}!`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter your email!');
    }
});
