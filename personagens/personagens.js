document.addEventListener("DOMContentLoaded", function () {
    // Configuração dos boxes de personagem
    const characters = [
        {
            id: 1,
            image: 'personagem1.jpg',
            name: 'Personagem 1',
            info: ['Idade: 25', 'Habilidade: Super força', 'Origem: Terra']
        },
        {
            id: 2,
            image: 'personagem2.jpg',
            name: 'Personagem 2',
            info: ['Idade: 30', 'Habilidade: Invisibilidade', 'Origem: Marte']
        },
        // Adicione os outros 4 personagens aqui
        {
            id: 3,
            image: 'personagem3.jpg',
            name: 'Personagem 3',
            info: ['Idade: 22', 'Habilidade: Velocidade', 'Origem: Vênus']
        },
        {
            id: 4,
            image: 'personagem4.jpg',
            name: 'Personagem 4',
            info: ['Idade: 28', 'Habilidade: Voar', 'Origem: Júpiter']
        },
        {
            id: 5,
            image: 'personagem5.jpg',
            name: 'Personagem 5',
            info: ['Idade: 35', 'Habilidade: Telepatia', 'Origem: Saturno']
        },
        {
            id: 6,
            image: 'personagem6.jpg',
            name: 'Personagem 6',
            info: ['Idade: 40', 'Habilidade: Teletransporte', 'Origem: Plutão']
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
            
            // Estrutura HTML do conteúdo expandido
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
                    </div>
                </div>
            `;
            
            document.body.appendChild(expandedBox);

            box.addEventListener("mouseenter", function () {
                const boxRect = box.getBoundingClientRect();
                expandedBox.style.left = `${boxRect.left + window.scrollX}px`;
                expandedBox.style.top = `${boxRect.top + window.scrollY - expandedBox.offsetHeight - 10}px`;
                expandedBox.style.display = "block";
            });

            box.addEventListener("mouseleave", function () {
                expandedBox.style.display = "none";
            });
        }
    });

    // Restante do seu código (tema dark/light)...
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
