function openModal(card) {
	// Отримуємо ім'я класу модального вікна з атрибута data-modal
	const modalClass = card.getAttribute('data-modal');

	// Знаходимо модальне вікно за його класом
	const modalElement = document.querySelector(`.${modalClass}`);

	// Додаємо клас .open, щоб показати модальне вікно
	modalElement.classList.add('open');
}

function closeModal(modalElement) {
	// Видаляємо клас .open, щоб закрити модальне вікно
	modalElement.classList.remove('open');
}

// Отримуємо всі елементи services__card
const cardElements = document.querySelectorAll('.services__card');

// Додаємо подію кліку до кожної карточки
cardElements.forEach((card) => {
	card.addEventListener('click', (event) => {
	// Відкриваємо модальне вікно
	openModal(card);
	});
});

// Отримуємо всі елементи з класом .modal__btn-remove
const closeButtonElements = document.querySelectorAll('.modal__btn-remove');

// Додаємо подію кліку до кожної кнопки закриття модального вікна
closeButtonElements.forEach((closeButton) => {
	closeButton.addEventListener('click', (event) => {
	// Закриваємо модальне вікно
	closeModal(closeButton.closest('.modal'));
	});
});

document.querySelectorAll('.modal__wrap').forEach(elem => {
	elem.addEventListener('click', event => {
		event._isClickWithModal = true;
	})
})

document.querySelectorAll('.modal').forEach(elem => {
	elem.addEventListener('click', event => {
		if (event.target.classList.contains('modal__wrap')) return;
		event.currentTarget.classList.remove('open');
	})
})

function openModal(card) {
	const modalClass = card.getAttribute('data-modal');
	const modalElement = document.querySelector(`.${modalClass}`);
	modalElement.classList.add('open');
 
	// Додаємо стиль overflow: hidden на елемент body під час відкриття модального вікна
	document.body.style.overflow = 'hidden';
 }
 
 function closeModal(modalElement) {
	modalElement.classList.remove('open');
 
	// Видаляємо стиль overflow: hidden з елементу body під час закриття модального вікна
	document.body.style.overflow = 'auto';
 }
 