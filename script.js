// Smooth scroll on "Hire Me" button
document.getElementById("contactBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
  
  // Typing text animation
  const typingText = document.querySelector(".typing-text");
  const roles = ["Web Developer", "UI/UX Designer", "Frontend Specialist", "Freelancer"];
  let index = 0;
  let charIndex = 0;
  let currentRole = "";
  let isDeleting = false;
  
  function typeEffect() {
    if (index >= roles.length) index = 0;
    currentRole = roles[index];
    
    typingText.textContent = isDeleting 
      ? currentRole.substring(0, charIndex--) 
      : currentRole.substring(0, charIndex++);
  
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index++;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }
  
  typeEffect();
  // Experience Scroll Animation
const expCards = document.querySelectorAll(".exp-card");

window.addEventListener("scroll", () => {
  expCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
    }
  });
});
