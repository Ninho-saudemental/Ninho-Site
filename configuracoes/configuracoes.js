// Obtém os elementos do DOM
const openModalBtnUser = document.getElementById('user');
const myModalUser = document.getElementById('myModalUser');
const closeModalBtnInsideUser = document.getElementById('closeModalBtnInsideUser');

const openModalBtnChat = document.getElementById('chat');
const myModalChat = document.getElementById('myModalChat');
const closeModalBtnInsideChat = document.getElementById('closeModalBtnInsideChat');

const openModalBtnTema = document.getElementById('tema');
const myModalTema = document.getElementById('myModalTema');
const closeModalBtnInsideTema = document.getElementById('closeModalBtnInsideTema');

// Função para fechar todos os modais
function closeAllModals() {
    myModalUser.style.display = 'none';
    myModalChat.style.display = 'none';
    myModalTema.style.display = 'none';
}

// Função para abrir o modal do usuário
function openModal() {
    closeAllModals(); // Fecha todos os modais antes de abrir
    myModalUser.style.display = 'flex';
}

// Função para abrir o modal do chat
function openModalChat() {
    closeAllModals(); // Fecha todos os modais antes de abrir
    myModalChat.style.display = 'flex';
}

function openModalTema() {
    closeAllModals(); // Fecha todos os modais antes de abrir
    myModalTema.style.display = 'flex';
}

// Funções para fechar modais individuais
function closeModal() {
    myModalUser.style.display = 'none';
}

function closeModalChat() {
    myModalChat.style.display = 'none';
}

function closeModalTema() {
    myModalTema.style.display = 'none';
}

// Event Listeners
openModalBtnUser.addEventListener('click', openModal);
closeModalBtnInsideUser.addEventListener('click', closeModal);

openModalBtnChat.addEventListener('click', openModalChat);
closeModalBtnInsideChat.addEventListener('click', closeModalChat);

openModalBtnTema.addEventListener('click', openModalTema);
closeModalBtnInsideTema.addEventListener('click', closeModalTema);

// Fechar ao clicar fora
window.addEventListener('click', (event) => {
    if (event.target === myModalUser) {
        closeModal();
    }
    if (event.target === myModalChat) {
        closeModalChat();
    }
    if (event.target === myModalTema) {
        closeModalTema();
    }
});