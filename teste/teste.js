// Verifica o tema salvo no localStorage ou prefere o tema do sistema
function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        return savedTheme;
    } else if (systemPrefersDark) {
        return 'dark';
    } else {
        return 'light';
    }
}

// Aplica o tema selecionado
function applyTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
    
    // Atualiza o ícone do botão
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    
    // Salva a preferência
    localStorage.setItem('theme', theme);
}

// Alterna entre temas
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Inicializa o tema quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    const theme = checkTheme();
    applyTheme(theme);
    
    // Adiciona o evento de clique ao botão
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});

// Observa mudanças na preferência do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
    }
});