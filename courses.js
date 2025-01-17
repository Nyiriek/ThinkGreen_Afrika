// Expandable sections for courses

document.addEventListener('DOMContentLoaded', function() {
    // Define how many cards to show initially and when expanded
    const initialCardCount = 3;
    const expandedCardCount = 6;  // Adjust this number based on how many additional cards you want to show

    // Function to create a course card
    function createCourseCard(imageUrl, title, description, level) {
        return `
            <div class="card" style="display: none;">
                <img src="${imageUrl}" alt="${title}">
                <h3>${title}</h3>
                <p>${description}</p>
                <small>${level}</small>
            </div>
        `;
    }

    // Function to handle section expansion
    function setupExpandableSection(sectionClass, buttonClass) {
        const section = document.querySelector(`.${sectionClass}`);
        if (!section) return;

        const cardsContainer = section.querySelector('.viewed-cards, .recommended-cards, .cert-cards');
        const seeAllButton = section.querySelector('.see-all-btn');
        const cards = cardsContainer.querySelectorAll('.card');
        let isExpanded = false;

        // Initially hide cards beyond the initial count
        cards.forEach((card, index) => {
            if (index >= initialCardCount) {
                card.style.display = 'none';
            }
        });

        // Add click handler to the See All button
        seeAllButton.addEventListener('click', function() {
            isExpanded = !isExpanded;
            
            cards.forEach((card, index) => {
                if (index >= initialCardCount) {
                    card.style.display = isExpanded ? 'block' : 'none';
                    
                    // Add animation classes
                    if (isExpanded) {
                        card.classList.add('fade-in');
                    } else {
                        card.classList.remove('fade-in');
                    }
                }
            });

            // Update button text
            this.textContent = isExpanded ? 'Show Less' : 'See all';

            // Smooth scroll if expanding
            if (isExpanded) {
                const lastCard = cards[cards.length - 1];
                lastCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }

    // Setup each expandable section
    setupExpandableSection('viewed-courses', 'see-all-btn');
    setupExpandableSection('recommended-courses', 'see-all-btn');
    setupExpandableSection('popular-certs', 'see-all-btn');
});
