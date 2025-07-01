document.addEventListener("DOMContentLoaded", function() {
    // Carregar Navbar e Footer dinamicamente
    fetch("header-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data.split("<!-- Footer -->")[0];
            document.getElementById("footer-placeholder").innerHTML = data.split("<!-- Footer -->")[1];
        })
        .catch(error => {
            console.error("Erro ao carregar header/footer:", error);
            // Fallback: inserir conteúdo diretamente se o fetch falhar
            const headerContent = `
                <header class="navbar navbar-expand-lg shadow">
                    <div class="container">
                        <a class="navbar-brand" href="index.html">
                            <i class="fas fa-code"></i> 
                            <div class="brand-text">
                                <span class="brand-name">Mauricio Dall Igna</span>
                                <span class="brand-profession">/ Desenvolvedor Web</span>
                            </div>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item"><a class="nav-link" href="index.html">Sobre Mim</a></li>
                                <li class="nav-item"><a class="nav-link" href="curriculo.html">Currículo</a></li>
                                <li class="nav-item"><a class="nav-link" href="portifolio.html">Projetos</a></li>
                                <li class="nav-item"><a class="nav-link" href="contato.html">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            `;
            
            const footerContent = `
                <footer class="footer py-4">
                    <div class="container">
                        <div class="footer-contact text-center mb-4">
                            <p><strong>Email:</strong> <a href="mailto:mauriciodalligna@gmail.com">mauriciodalligna@gmail.com</a></p>
                            <p><strong>Telefone:</strong> <a href="tel:+5554999247528">(54) 99924-7528</a></p>
                        </div>
                        <div class="footer-social mt-4 text-center">
                            <a href="https://github.com/Mauriciodalligna" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
                            <a href="https://wa.me/5554999247528" target="_blank" class="social-icon"><i class="fab fa-whatsapp"></i></a>
                            <a href="https://www.linkedin.com/in/mauricio-durante-dall-igna" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                        </div>
                        <div class="text-center mt-4">
                            <hr class="footer-divider">
                            <p>© 2025 por Mauricio Durante Dall Igna. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </footer>
            `;
            
            document.getElementById("header-placeholder").innerHTML = headerContent;
            document.getElementById("footer-placeholder").innerHTML = footerContent;
        });
}); 