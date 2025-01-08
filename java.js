// Get the menu icon and side menu
const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
const closeIcon = document.getElementById('close-icon');

// Toggle side menu visibility
menuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});

// Close side menu when close icon is clicked
closeIcon.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});
