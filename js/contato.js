document.addEventListener("DOMContentLoaded", function() {
    // Inicialização do AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Carregar Navbar e Footer dinamicamente
    fetch("header-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data.split("<!-- Footer -->")[0];
            document.getElementById("footer-placeholder").innerHTML = data.split("<!-- Footer -->")[1];
        });

    // Inicialização do EmailJS
    emailjs.init("20cRrQ4dAZbvLspAY");

    // Manipulação do formulário
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();  // Evita o recarregamento da página

        const btn = document.querySelector("button[type='submit']");
        const btnText = document.getElementById("btn-text");
        const btnLoader = document.getElementById("btn-loader");

        btnText.textContent = 'Enviando...';
        btnLoader.style.display = 'inline-block';

        // Envio usando o EmailJS
        emailjs.sendForm('default_service', 'template_44w5ggi', this)
            .then(() => {
                alert("Mensagem enviada com sucesso!");
                btn.textContent = 'Enviar Mensagem';
                document.getElementById("contact-form").reset();  // Limpa o formulário
            }, (err) => {
                alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
                btn.textContent = 'Enviar Mensagem';
            });
    });
});
