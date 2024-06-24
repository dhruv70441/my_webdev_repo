document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
        const logo = document.querySelector('.logo');
        logo.classList.toggle('centered'); // Add centered class to logo
        if (navToggle.classList.contains('active')) {
            navToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close navigation menu when a link is clicked (optional)
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            const logo = document.querySelector('.logo');
            logo.classList.remove('centered'); // Remove centered class from logo
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});
