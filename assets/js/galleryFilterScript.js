const filterList = document.querySelectorAll('.galleryPage-title-block ul li')

filterList.forEach((item, index) => {
	item.addEventListener('click', () => {
		filterList.forEach(el =>
			el.classList.remove('galleryPage-title-block__filter-active')
		)

		item.classList.add('galleryPage-title-block__filter-active')
	})
})
