document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Star Rating Logic ---
    const stars = document.querySelectorAll('.star-rating i');
    const ratingMessage = document.getElementById('rating-message');
    
    let selectedRating = 0;

    stars.forEach((star, index) => {
        // Hover Effect
        star.addEventListener('mouseover', () => {
            highlightStars(index);
        });

        // Mouse Leave (Reset to clicked rating)
        star.addEventListener('mouseout', () => {
            highlightStars(selectedRating - 1);
        });

        // Click to set rating
        star.addEventListener('click', () => {
            selectedRating = index + 1;
            highlightStars(index);
            
            // Set message based on rating
            const messages = [
                "Poor experience. We will improve! 😞",
                "Fair experience. Thanks for feedback! 😐",
                "Good experience. Thank you! 🙂",
                "Great experience! Glad you liked it. 😃",
                "Awesome! Thanks for the 5 stars! 🌟"
            ];
            ratingMessage.textContent = messages[selectedRating - 1];
            
            // Optional: You can send this 'selectedRating' to your backend via fetch/AJAX here
        });
    });

    function highlightStars(index) {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.remove('fa-regular');
                s.classList.add('fa-solid', 'active');
            } else {
                s.classList.remove('fa-solid', 'active');
                s.classList.add('fa-regular');
            }
        });
    }

    // --- 2. Form Submission Alert (Demo) ---
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents page reload
            alert("Registration Submitted Successfully! (This is a demo)");
            form.reset(); // Clears the form after submission
        });
    }

});
