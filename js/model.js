// Отримуємо всі елементи services__card
const cardElements = document.querySelectorAll('.services__card');
// Додаємо подію кліку до кожної карточки
cardElements.forEach((card) => {
    card.addEventListener('click', () => {
        // Отримуємо ім'я класу модального вікна з атрибута data-modal
        const modalClass = card.getAttribute('data-modal');
        // Знаходимо модальне вікно за його класом
        const modalElement = document.querySelector(`.${modalClass}`);
        // Додаємо клас .open, щоб показати модальне вікно
        modalElement.classList.add('open');
    });
});

// Отримуємо всі елементи з класом .modal__btn-remove
const closeButtonElements = document.querySelectorAll('.modal__btn-remove');
// Додаємо подію кліку до кожної кнопки закриття модального вікна
closeButtonElements.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        // Знаходимо батьківський елемент кнопки (тобто .modal)
        const modalElement = closeButton.closest('.modal');
        // Видаляємо клас .open, щоб закрити модальне вікно
        modalElement.classList.remove('open');
    });
});