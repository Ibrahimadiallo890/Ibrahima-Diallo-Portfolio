// Navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky" , window.scrollY > 0);
})

// Light & Dark Mode
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("save-them", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
