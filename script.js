document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================
    // 1. INITIALIZE 3D ANIMATED BACKGROUND
    // =========================================
    // Uses Vanta.js to create a glowing 3D network effect
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3b82f6,      // Blue connecting lines
            backgroundColor: 0x020617, // Deep dark background
            points: 15.00,
            maxDistance: 25.00,
            spacing: 18.00
        });
    }

    // =========================================
    // 2. FUNCTIONAL RATINGS SYSTEM
    // =========================================
    const stars = document.querySelectorAll('.star-rating i');
    const feedbackText = document.getElementById('rating-feedback-text');
    const submitBtn = document.getElementById('submit-rating-btn');
    const ratingUI = document.getElementById('rating-ui');
    const ratingSuccess = document.getElementById('rating-success');
    const finalRatingText = document.getElementById('user-final-rating');

    let currentRating = 0;

    // A. Check if user already rated before (LocalStorage)
    const savedRating = localStorage.getItem('ncoe_user_rating');
    if (savedRating) {
        // If already rated, hide UI and show success directly
        ratingUI.style.display = 'none';
        finalRatingText.innerText = savedRating;
        ratingSuccess.style.display = 'block';
    }

    // B. Star Hover and Click Logic
    stars.forEach((star, index) => {
        // Hover effect
        star.addEventListener('mouseover', () => {
            updateStars(index + 1);
        });

        // Mouse out effect
        star.addEventListener('mouseout', () => {
            updateStars(currentRating);
        });

        // Click effect
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStars(currentRating);
            submitBtn.disabled = false; // Enable submit button

            // Fun feedback texts
            const feedbacks = [
                "1 Star - We will work harder! 😞",
                "2 Stars - Needs Improvement 😐",
                "3 Stars - Good, but can be better 🙂",
                "4 Stars - Great Experience! 😃",
                "5 Stars - Absolutely Awesome! 🌟"
            ];
            feedbackText.innerText = feedbacks[currentRating - 1];
            feedbackText.style.color = "#fff";
        });
    });

    function updateStars(count) {
        stars.forEach((s, i) => {
            if (i < count) {
                s.classList.remove('fa-regular');
                s.classList.add('fa-solid', 'active');
            } else {
                s.classList.remove('fa-solid', 'active');
                s.classList.add('fa-regular');
            }
        });
    }

    // C. Submit Rating Logic
    submitBtn.addEventListener('click', () => {
        if(currentRating > 0) {
            // Save to LocalStorage (Simulating a backend save)
            localStorage.setItem('ncoe_user_rating', currentRating);
            
            // UI Transition
            ratingUI.style.opacity = '0';
            setTimeout(() => {
                ratingUI.style.display = 'none';
                finalRatingText.innerText = currentRating;
                ratingSuccess.style.display = 'block';
                ratingSuccess.style.animation = 'fadeIn 0.5s ease-in';
            }, 300);
        }
    });

    // =========================================
    // 3. FORM SUBMISSION DEMO
    // =========================================
    const form = document.getElementById('registration-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Application Submitted Successfully!");
            form.reset();
        });
    }
});
