// Welcome Message
window.onload = function () {
    console.log("Sports Trials Website Loaded Successfully!");
};

// Register Button
function registerNow() {
    alert("Registration portal will be available soon!");
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});
