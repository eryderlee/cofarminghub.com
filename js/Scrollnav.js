document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("nav");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        navbar.style.display = "block";
      } else {
        navbar.style.display = "none";
      }
    });
  });
  