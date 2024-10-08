// scripts.js

document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.getElementById('about').classList.toggle('dark-mode');
    document.getElementById('skills').classList.toggle('dark-mode');
    document.getElementById('projects').classList.toggle('dark-mode');
    document.getElementById('resume').classList.toggle('dark-mode');
    document.getElementById('contact').classList.toggle('dark-mode');
    // Toggle dark mode for contact icons
    document.querySelectorAll('.contact-icons a').forEach(function(icon) {
        icon.classList.toggle('dark-mode');
    });
});
