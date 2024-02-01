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

        const loader = document.getElementById('loader');
        const overlay = document.getElementById('overlay');

        if (loader && overlay) {
            // Oculta o loader
            loader.style.display = 'none';
            // Oculta a camada de fundo
            overlay.style.display = 'none';
        }
});

document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById('contactButton');

    if (contactButton) {
        contactButton.addEventListener('click', function () {
            // Adicione a ação desejada aqui
            alert('Botão clicado!'); // Exemplo: exibe um alerta
            // Você pode abrir um formulário de contato, redirecionar para outra página, etc.
        });
    }
});
