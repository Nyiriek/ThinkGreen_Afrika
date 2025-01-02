function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

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
    ('/community.html'); // Redirect to the community page
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


// Function to handle the dropdown menu
document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    const dropdownMenu = this.nextElementSibling;  // Select the dropdown menu after the button
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// close the dropdown if clicked outside of it
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // Close dropdown if clicked outside
    if (!dropdown.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

// Scrollable Arrows
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.testimonial-cards');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    // Calculate cards visible
    const cardWidth = document.querySelector('.testimonial-card').offsetWidth;
    const containerWidth = container.offsetWidth;
    const cardsVisible = Math.floor(containerWidth / cardWidth);
    
    // Calculate scroll amount (one card width plus gap)
    const scrollAmount = cardWidth + 20; // 15px is the gap between cards

    let currentPosition = 0;
    const maxScroll = container.scrollWidth - container.clientWidth;

    leftArrow.addEventListener('click', () => {
        currentPosition = Math.max(currentPosition - scrollAmount, 0);
        container.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
        updateArrowVisibility();
    });

    rightArrow.addEventListener('click', () => {
        currentPosition = Math.min(currentPosition + scrollAmount, maxScroll);
        container.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
        updateArrowVisibility();
    });

    function updateArrowVisibility() {
        // Hide left arrow if at the start
        leftArrow.style.opacity = currentPosition <= 0 ? '0.5' : '1';
        leftArrow.style.cursor = currentPosition <= 0 ? 'default' : 'pointer';

        // Hide right arrow if at the end
        rightArrow.style.opacity = currentPosition >= maxScroll ? '0.5' : '1';
        rightArrow.style.cursor = currentPosition >= maxScroll ? 'default' : 'pointer';
    }

    // Initial arrow visibility
    updateArrowVisibility();

    // Update on window resize
    window.addEventListener('resize', () => {
        maxScroll = container.scrollWidth - container.clientWidth;
        updateArrowVisibility();
    });
});