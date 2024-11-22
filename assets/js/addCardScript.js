// addCardScript.js
import { addGalleryItem } from './dataService.js'

document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('addCardForm')

	form.addEventListener('submit', async event => {
		event.preventDefault()

		const category = form.category.value
		const title = form.title.value
		const imageUrl = form.imageUrl.value // Получаем ссылку на изображение из поля ввода
		const views = parseInt(form.views.value, 10)

		if (!imageUrl) {
			alert('Пожалуйста, введите ссылку на изображение.')
			return
		}

		try {
			const newItem = {
				category,
				title,
				imageUrl,
				views,
			}

			console.log(newItem) // Проверка данных

			await addGalleryItem(newItem)
			alert('Карточка успешно добавлена!')
			form.reset()
		} catch (error) {
			console.error('Error adding card:', error)
			alert('Произошла ошибка при добавлении карточки.')
		}
	})
})
