document.addEventListener("DOMContentLoaded", function () {
    // Função para alternar entre temas claro e escuro
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

    // Inicialização do tema
    applyTheme(checkTheme());
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Observador de preferência do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Lógica do chat
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Função para adicionar mensagem ao chat
    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'character-message');
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        
        // Rolagem automática para a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Função para gerar uma resposta aleatória do personagem
    function getRandomResponse() {
        const responses = [
            "Interessante! Conte-me mais sobre isso.",
            "Eu entendo o que você está dizendo.",
            "Isso é algo que me faz pensar...",
            "Você já considerou outras perspectivas sobre esse assunto?",
            "Estou aprendendo muito com nossa conversa!",
            "Essa é uma ótima observação.",
            "Como você se sente sobre isso?",
            "Vamos explorar esse tópico mais a fundo.",
            "Isso me lembra de algo que aconteceu comigo...",
            "Você tem alguma dúvida específica sobre esse assunto?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Enviar mensagem quando o botão for clicado
    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, true);
            messageInput.value = '';
            
            // Resposta automática após um pequeno atraso
            setTimeout(() => {
                addMessage(getRandomResponse(), false);
            }, 1000);
        }
    });

    // Enviar mensagem quando Enter for pressionado
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});