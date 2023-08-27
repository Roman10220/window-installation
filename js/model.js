function openModal(card) {
    const modalClass = card.getAttribute('data-modal');
    const modalElement = document.querySelector(`.${modalClass}`);
    modalElement.classList.add('open');
}

function closeModal(modalElement) {
    modalElement.classList.remove('open');
}

const cardElements = document.querySelectorAll('.services__card');

cardElements.forEach((card) => {
    card.addEventListener('click', (event) => {
        openModal(card);
    });
});

const closeButtonElements = document.querySelectorAll('.modal__btn-remove');

closeButtonElements.forEach((closeButton) => {
    closeButton.addEventListener('click', (event) => {
        const modalElement = closeButton.closest('.modal');
        closeModal(modalElement);
    });
});

