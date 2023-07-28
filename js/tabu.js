const menuItem = document.querySelectorAll('.menu__item');
const bodyContent = document.querySelectorAll('.products__body-content');

menuItem.forEach(onItemClick);

function onItemClick(item) {
	item.addEventListener('click', function() {
		let currentItem = item;
		let tabId = currentItem.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentItem.classList.contains('active')) {
			menuItem.forEach(function(item) {
				item.classList.remove('active');
			});
			bodyContent.forEach(function(item) {
				item.classList.remove('active');
			});
	
			currentItem.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}
document.querySelector('.menu__item').click();
/*-------------------------------------------------------*/
const companyMenuItem = document.querySelectorAll('.company__menu-item');
const companyBodyContent = document.querySelectorAll('.company__body-content');

companyMenuItem.forEach(companyOnItemClick);

function companyOnItemClick(item) {
	item.addEventListener('click', function() {
		let currentItem = item;
		let tabId = currentItem.getAttribute('data-tabTwo');
		let currentTab = document.querySelector(tabId);

		if (!currentItem.classList.contains('active')) {
			companyMenuItem.forEach(function(item) {
				item.classList.remove('active');
			});
			companyBodyContent.forEach(function(item) {
				item.classList.remove('active')
			});

			
			currentItem.classList.add('active');
			currentTab.classList.add('active');
		}
	});
}
document.querySelector('.company__menu-item').click();