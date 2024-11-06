document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.querySelector(".content form:nth-child(1)");
    const formLogin = document.querySelector(".content form:nth-child(2)");

    // Validação de formulário de cadastro
    formCadastro.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = formCadastro.querySelector("input[placeholder='Nome Completo']").value;
        const cpf = formCadastro.querySelector("input[placeholder='CPF']").value;
        const email = formCadastro.querySelector("input[placeholder='E-mail']").value;
        const senha = formCadastro.querySelector("input[placeholder='Senha']").value;
        const telefone = formCadastro.querySelector("input[placeholder='Telefone']").value;

        if (!nome || !cpf || !email || !senha || !telefone) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, insira um e-mail válido!");
            return;
        }

        alert("Cadastro realizado com sucesso!");
    });

    // Validação de formulário de login
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailLogin = formLogin.querySelector("input[placeholder='E-mail']").value;
        const senhaLogin = formLogin.querySelector("input[placeholder='Senha']").value;

        if (!emailLogin || !senhaLogin) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        alert("Login realizado com sucesso!");
    });

    // Função para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery img");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".modal .close");

    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            modal.style.display = "block";
            modalImage.src = image.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Simulação do status de login do usuário
    let isLoggedIn = false;

    // Formulário de login
    const loginForm = document.querySelector(".content form:nth-child(2)");

    // Função de login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        isLoggedIn = true;
        alert("Login realizado com sucesso!");
        // Armazena o status de login
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "quartos.html"; // Redireciona para a página de quartos
    });

    // Botão para acessar a página de quartos
    const btnQuartos = document.getElementById("btnQuartos");

    // Evento ao clicar no botão "Quartos"
    btnQuartos.addEventListener("click", (e) => {
        e.preventDefault();
        if (sessionStorage.getItem("isLoggedIn") === "true") {
            window.location.href = "quartos.html";
        } else {
            alert("Por favor, faça login para acessar a página de quartos.");
        }
    });

    // Verificação de login ao carregar a página de quartos
    if (window.location.pathname.includes("quartos.html") && sessionStorage.getItem("isLoggedIn") !== "true") {
        alert("Você precisa estar logado para acessar a página de quartos.");
        window.location.href = "index.html";
    }

    // Ações de seleção de quarto na página de quartos
    const selectButtons = document.querySelectorAll(".btn-select-room");
    selectButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const roomType = e.target.getAttribute("data-room");
            alert(`Você selecionou o quarto: ${roomType}`);
        });
    });
});
