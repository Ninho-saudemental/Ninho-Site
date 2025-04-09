document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const expandedBox = document.createElement("div");
        expandedBox.classList.add("expanded-box");
        expandedBox.textContent = box.dataset.content || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        document.body.appendChild(expandedBox);

        box.addEventListener("mouseenter", function () {
            const boxRect = box.getBoundingClientRect();
            expandedBox.style.left = `${boxRect.left + window.scrollX}px`;
            expandedBox.style.top = `${boxRect.top + window.scrollY - expandedBox.offsetHeight - 10}px`; // Ajustado para cima da caixa
            expandedBox.style.display = "block";
        });

        box.addEventListener("mouseleave", function () {
            expandedBox.style.display = "none";
        });
    });
});
// Verifica o tema salvo ou preferência do sistema
function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');
}

// Aplica o tema
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
    const currentTheme = checkTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Configuração inicial
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(checkTheme());
    
    // Evento de clique
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});

// Observa mudanças no sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});
function applyTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme);
    
    // Não é mais necessário atualizar o texto do botão, pois os SVGs são controlados por CSS
}
