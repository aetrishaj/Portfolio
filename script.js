// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if(this.getAttribute('href').startsWith("#")){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formMessage");

  if(name && email && message){
    feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
    feedback.style.color = "green";
    this.reset();
  } else {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
  }
});
