// Controle básico de sessão
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const logoutButton = document.getElementById('logout-button');

// Função para armazenar sessão (simulação)
function login(username) {
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', username);
    window.location.href = 'home.html';
}

// Função de logout
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        sessionStorage.clear();
        window.location.href = 'index.html';
    });
}

// Verificação do formulário de login
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Login simples com usuário fixo (pode integrar com backend para login real)
        if (username === 'admin' && password === '1234') {
            login(username);
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Usuário ou senha incorretos!';
        }
    });
}

// Verificação de sessão ao carregar a página home.html
window.addEventListener('load', function() {
    if (window.location.pathname === '/home.html' && !sessionStorage.getItem('loggedIn')) {
        window.location.href = 'index.html';
    }
});