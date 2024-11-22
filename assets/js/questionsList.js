const questionsItems = document.querySelectorAll('.questions-item')
const questionsContents = document.querySelectorAll(
	'.questions-item__content li'
)

questionsItems.forEach((item, index) => {
	item.addEventListener('click', () => {
		questionsItems.forEach(el => el.classList.remove('questions-item__active'))

		questionsContents.forEach(el =>
			el.classList.remove('questions-item__content__active')
		)

		item.classList.add('questions-item__active')
		questionsContents[index].classList.add('questions-item__content__active')
	})
})
