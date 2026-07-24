// ===============================
// Sports Trials Portal
// JavaScript
// ===============================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Sports Trials Portal Loaded Successfully!");
});

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

            navLinks.classList.remove("active");
        }

    });

});

// ===============================
// Sticky Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>20){

navbar.style.boxShadow="0 8px 20px rgba(0,0,0,.20)";

}else{

navbar.style.boxShadow="0 4px 10px rgba(0,0,0,.15)";

}

});

// ===============================
// Back To Top Button
// ===============================

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.right="20px";
topButton.style.bottom="20px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#0b3d91";
topButton.style.color="#fff";
topButton.style.fontSize="20px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===============================
// Fade Animation
// ===============================

const cards=document.querySelectorAll(".card,.trial-card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="all .6s ease";

observer.observe(card);

});

// ===============================
// Register Buttons
// ===============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

if(btn.textContent.includes("Register")){

alert("Registration Portal Coming Soon!");

}

});

});

// ===============================
// Dynamic Year
// ===============================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Sports Trials Portal | All Rights Reserved`;

}

console.log("Sports Trials Portal Ready");
