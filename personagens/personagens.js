document.addEventListener("DOMContentLoaded", function () {
    // Variáveis globais para controlar o modal ativo e seu temporizador
    let activeModal = null;
    let modalTimeout = null;

    // Configuração dos boxes de personagem - Adicionei o chat para todos os personagens
    const characters = [
        {
            id: 1,
            image: 'personagem1.jpg',
            name: 'Personagem 1',
            info: ['Idade: 25', 'Habilidade: Super força', 'Origem: Terra'],
            link: 'https://camila12301540.github.io/Ninho/info_perso/info_perso1.html',
            chat: 'https://camila12301540.github.io/Ninho/chat/chat'
        },
        {
            id: 2,
            image: 'personagem2.jpg',
            name: 'Personagem 2',
            info: ['Idade: 30', 'Habilidade: Invisibilidade', 'Origem: Marte'],
            link: 'https://camila12301540.github.io/Ninho/info_perso/info_perso%202.html',
            chat: 'https://camila12301540.github.io/Ninho/chat/chat'
        },
        {
            id: 3,
            image: 'personagem3.jpg',
            name: 'Personagem 3',
            info: ['Idade: 22', 'Habilidade: Velocidade', 'Origem: Vênus'],
            link: 'https://camila12301540.github.io/Ninho/info_perso/info_perso%20-%203.html',
            chat: 'https://camila12301540.github.io/Ninho/chat/chat'
        },
        {
            id: 4,
            image: 'personagem4.jpg',
            name: 'Personagem 4',
            info: ['Idade: 28', 'Habilidade: Voar', 'Origem: Júpiter'],
            link: 'https://camila12301540.github.io/Ninho/info_perso/info_perso%20-%204.html',
            chat: 'https://camila12301540.github.io/Ninho/chat/chat'
        },
        {
            id: 5,
            image: 'personagem5.jpg',
            name: 'Personagem 5',
            info: ['Idade: 35', 'Habilidade: Telepatia', 'Origem: Saturno'],
            link: 'https://camila12301540.github.io/Ninho/info_perso/info_perso%20-%205.html',
            chat: 'https://camila12301540.github.io/Ninho/chat/chat'
        },
        {
            id: 6,
            image: 'personagem6.jpg',
            name: 'Personagem 6',
            info: ['Idade: 40', 'Habilidade: Teletransporte', 'Origem: Plutão'],
            link: 'https://camila12301540.github.io/Ninho/info_perso/info_perso%20-%206.html',
            chat: 'https://camila12301540.github.io/Ninho/chat/chat'
        }
    ];

    // Cria os expanded-boxes para cada personagem
    characters.forEach(character => {
        const box = document.querySelector(`.box[data-index="${character.id}"]`) || 
                    document.querySelector(`.box1[data-index="${character.id}"]`) || 
                    document.querySelector(`.box2[data-index="${character.id}"]`);
        
        if (box) {
            const expandedBox = document.createElement("div");
            expandedBox.classList.add("expanded-box");

            // Estrutura HTML do conteúdo expandido com link
            expandedBox.innerHTML = `
                <div class="character-container">
                    <div class="character-image">
                        <img src="${character.image}" alt="${character.name}">
                    </div>
                    <div class="character-info">
                        <h3>${character.name}</h3>
                        <ul>
                            ${character.info.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                        <div class="button-container">
                            <a href="${character.link}" class="character-link" target="_blank">
                                <button class="btn btn-primary">Ver mais</button>
                            </a>
                            <a href="${character.chat}" class="character-chat" target="_blank">
                                <button class="btn btn-chat">Conversar</button>
                            </a>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(expandedBox);

            box.addEventListener("mouseenter", function () {
                // Fecha o modal anterior (se existir) e limpa seu temporizador
                if (activeModal && activeModal !== expandedBox) {
                    activeModal.style.display = "none";
                    if (modalTimeout) {
                        clearTimeout(modalTimeout);
                    }
                }

                // Posiciona e exibe o novo modal
                const boxRect = box.getBoundingClientRect();
                expandedBox.style.left = `${boxRect.left + window.scrollX}px`;
                expandedBox.style.top = `${boxRect.top + window.scrollY - expandedBox.offsetHeight - 10}px`;
                expandedBox.style.display = "block";

                // Define este modal como o ativo
                activeModal = expandedBox;

                // Configura o temporizador para fechar após 5 segundos
                modalTimeout = setTimeout(() => {
                    expandedBox.style.display = "none";
                    activeModal = null;
                }, 5000);
            });

            box.addEventListener("mouseleave", function () {
                // Não faz nada aqui! O modal só some após os 5 segundos.
            });
        }
    });

    // Tema dark/light
    function checkTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return savedTheme || (systemPrefersDark ? 'dark' : 'light');
    }

    function applyTheme(theme) {
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(`${theme}-mode`);
        localStorage.setItem('theme', theme);
    }

    function toggleTheme() {
        const currentTheme = checkTheme();
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    // Inicialização
    applyTheme(checkTheme());
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Observador de preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
});
