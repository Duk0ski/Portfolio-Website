//1. Automatically add today's date to posts
const today = new Date().toLocaleDateString(); 
const dateElements = document.querySelectorAll('[id^="date"]'); 
dateElements.forEach((element) => {
  element.textContent = today;
});