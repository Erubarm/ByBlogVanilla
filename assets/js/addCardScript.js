// addCardScript.js
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
} from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js'
import { addGalleryItem } from './dataService.js'

document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('addCardForm')
	const imageFileInput = document.getElementById('imageFile')

	form.addEventListener('submit', async event => {
		event.preventDefault()

		const category = form.category.value
		const title = form.title.value
		const file = imageFileInput.files[0]
		const views = parseInt(form.views.value, 10)

		if (!file) {
			alert('Пожалуйста, выберите изображение.')
			return
		}

		try {
			const imageUrl = await uploadImage(file)
			const newItem = {
				category,
				title,
				imageUrl,
				views,
			}

			await addGalleryItem(newItem)
			alert('Карточка успешно добавлена!')
			form.reset()
		} catch (error) {
			console.error('Error adding card:', error)
			alert('Произошла ошибка при добавлении карточки.')
		}
	})
})

const uploadImage = async file => {
	const storage = getStorage()
	const storageRef = ref(storage, 'images/' + file.name)
	await uploadBytes(storageRef, file)
	const url = await getDownloadURL(storageRef)
	return url
}
