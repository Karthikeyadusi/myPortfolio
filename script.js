// scripts.js
let visitorname = prompt('Hey there! What is your name?');
let visitorName = visitorname ? visitorname.toUpperCase() : 'Visitor';
if (visitorName) {
    document.getElementById('visitorName').textContent = `Hello, ${visitorName}! This is My PORTFOLIO!`;

}
document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.getElementById('about').classList.toggle('dark-mode');
    document.getElementById('skills').classList.toggle('dark-mode');
    document.getElementById('projects').classList.toggle('dark-mode');
    document.getElementById('resume').classList.toggle('dark-mode');
    document.getElementById('contact').classList.toggle('dark-mode');
    document.getElementById('visitorName').classList.toggle('dark-mode');
    // Toggle dark mode for contact icons
    document.querySelectorAll('.contact-icons a').forEach(function(icon) {
        icon.classList.toggle('dark-mode');
    });
});

document.getElementById('downloadResumeBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const resumeLink = this.href;
    const resumeName = 'Karthikeya_Dusi_Resume.pdf';

    if (localStorage.getItem('resumeDownloaded')) {
        const userConfirmed = confirm('The resume already exists. Do you want to download it again?');
        if (userConfirmed) {
            downloadFile(resumeLink, resumeName);
        }
    } else {
        downloadFile(resumeLink, resumeName);
        localStorage.setItem('resumeDownloaded', 'true');
    }
});

function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
