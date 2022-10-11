const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const modalBody = document.querySelectorAll('[data-modal-body]')
const overlay = document.getElementById('overlay');
const resetButton = document.getElementById('resetButton');
const text = document.getElementById('text');
let counter = 0;

openModalButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
  
    })
})

resetButton.addEventListener('click', ()=>{
    counter = 0;
    text.innerText = `The button wasn't clicked yet.`;
    sessionStorage.setItem('clicks', counter);
    resetButton.classList.remove('active');
})

overlay.addEventListener('click',()=>{
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
    closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', ()=> {
    const modal = button.closest('.modal');
    closeModal(modal);
    })
})

function openModal(modal){
    if(modal === null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal){
    if(modal === null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

