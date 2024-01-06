// Add JavaScript functionality here

document.addEventListener("DOMContentLoaded", function () {
    // Code to run after the DOM has loaded

    // Example: Add a smooth scroll effect to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Adjust the offset if you have a fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});
