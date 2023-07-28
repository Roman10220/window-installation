// const questionCardTitle = document.querySelectorAll('.question__card-title');
// questionCardTitle.forEach((questCardTitle) => {
// 	questCardTitle.addEventListener('click', () => {
// 		const height = questCardTitle.nextElementSibling.scrollHeight;
// 		questCardTitle.classList.toggle('question__card-title-active');
// 		if (questCardTitle.classList.contains('question__card-title-active')) {
// 			questCardTitle.nextElementSibling.style.maxHeight = `${height}px`;
// 		} else {
// 			questCardTitle.nextElementSibling.style.maxHeight = '0px';
// 		}
// 	});
// });

const questionCardItem = document.querySelectorAll('.question__card-item');
questionCardItem.forEach((questCardItem) => {
	questCardItem.addEventListener('click', () => {
		const questCardTitle = questCardItem.querySelector('.question__card-title');
		questCardTitle.classList.toggle('question__card-title-active');
		if (questCardTitle.classList.contains('question__card-title-active')) {
			questCardTitle.nextElementSibling.style.display = 'block'
		} else {
			questCardTitle.nextElementSibling.style.display = 'none';
		}
	});
});