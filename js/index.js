// Handle hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const menuItems = document.querySelector('.menu-items');

    // Toggle menu when burger icon is clicked
    burgerIcon.addEventListener('click', () => {
        menuItems.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerIcon.contains(e.target) && !menuItems.contains(e.target)) {
            menuItems.classList.remove('active');
        }
    });

    // Close menu when a link is clicked
    const menuLinks = menuItems.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuItems.classList.remove('active');
        });
    });
});
