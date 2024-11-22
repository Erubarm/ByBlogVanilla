// galleryScript.js
import { getGalleryItems } from './dataService.js'

let currentCategory = 'эпоксидная смола' // Начальная категория

document.addEventListener('DOMContentLoaded', async () => {
	const galleryList = document.getElementById('galleryList')

	const filterList = document.querySelectorAll('.galleryPage-title-block ul li')
	filterList.forEach((item, index) => {
		item.addEventListener('click', () => {
			filterList.forEach(el =>
				el.classList.remove('galleryPage-title-block__filter-active')
			)
			item.classList.add('galleryPage-title-block__filter-active')
			currentCategory = item.textContent.trim().toLowerCase()
			renderGalleryItems(currentCategory)
		})
	})

	const renderGalleryItems = async category => {
		galleryList.innerHTML = '' // Очистка списка перед добавлением новых элементов
		const items = await getGalleryItems()
		const filteredItems = items.filter(item => item.category === category)
		filteredItems.forEach(item => {
			const listItem = document.createElement('li')
			listItem.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.title}">
        <div class="galleryPage-gallery-item__description">
          <div class="galleryPage-gallery-item__description__eye">
            <img src="./assets/icons/eye.svg" alt="eye">
            <span>${item.views}</span>
          </div>
          <span>${item.title}</span>
          <img src="./assets/icons/heart-gallery.svg" alt="heart" class="galleryPage-gallery-item__description__heart">
        </div>
      `
			galleryList.appendChild(listItem)
		})
	}

	// Первоначальная загрузка данных
	renderGalleryItems(currentCategory)
})
