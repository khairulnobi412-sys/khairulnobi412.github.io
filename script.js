document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PRELOADER & NAVBAR SCROLL EFFECT
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }, 1200); // Premium delay
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    // 2. PREMIUM 3D TILT EFFECT ON CARDS
    const tiltCards = document.querySelectorAll('.glass-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            let rect = card.getBoundingClientRect();
            let x = e.clientX - rect.left; 
            let y = e.clientY - rect.top;
            
            // Calculate rotation limits (max 15 degrees)
            let xOffset = ((x / rect.width) - 0.5) * 30; 
            let yOffset = ((y / rect.height) - 0.5) * -30;
            
            card.style.transform = `perspective(1000px) rotateY(${xOffset}deg) rotateX(${yOffset}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)`;
            card.style.transition = `transform 0.5s ease`; 
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = `transform 0.1s ease`; // Quick snap when entering
        });
    });

    // 3. PARTICLES.JS (Ensure library is linked in HTML)
    if(typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#0ea5e9" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.6, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#0ea5e9", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { 
                    "onhover": { "enable": true, "mode": "grab" }, 
                    "onclick": { "enable": true, "mode": "push" } 
                },
                "modes": { "grab": { "distance": 200, "line_linked": { "opacity": 0.8 } }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // 4. SCROLL REVEAL ANIMATION (Smooth Fade-in)
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        reveals.forEach(element => {
            var windowHeight = window.innerHeight;
            var elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", reveal);
    reveal(); // Fire once on load

    // 5. ANIMATED NUMBER COUNTERS
    const counters = document.querySelectorAll('.counter');
    const startCounters = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / 150; // Speed adjustment
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    };
    const counterObserver = new IntersectionObserver(startCounters, { threshold: 0.5 });
    counters.forEach(counter => counterObserver.observe(counter));

    // 6. CUSTOM TOAST NOTIFICATION & FORM SUBMIT
    const form = document.getElementById('premium-form');
    
    // Create Toast Element dynamically
    const toast = document.createElement('div');
    toast.id = "custom-toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="font-size: 1.5rem;"></i> Application Submitted Successfully!`;
    document.body.appendChild(toast);

    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            // Loading State
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Securely...';
            btn.style.opacity = '0.8';
            btn.style.pointerEvents = 'none';
            
            setTimeout(() => {
                // Show Custom Toast (No more ugly alerts)
                toast.classList.add('show');
                
                setTimeout(() => { toast.classList.remove('show'); }, 4000); // Hide after 4s

                this.reset(); // Reset form
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'all';
            }, 2000); // Fake API delay
        });
    }

    // 7. RATING SYSTEM
    const submitRatingBtn = document.getElementById('submit-rating');
    const starInputs = document.querySelectorAll('.stars input');
    let selectedRating = 0;

    starInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            selectedRating = e.target.value;
        });
    });

    if(submitRatingBtn) {
        submitRatingBtn.addEventListener('click', () => {
            if(selectedRating === 0) {
                alert("Please select a star rating first!"); // This one stays alert for error catching
                return;
            }
            document.getElementById('rating-form-area').style.display = 'none';
            document.getElementById('final-star-count').innerText = selectedRating;
            const successDiv = document.getElementById('rating-success');
            successDiv.style.display = 'block';
        });
    }
});
