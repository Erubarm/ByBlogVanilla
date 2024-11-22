document.addEventListener('DOMContentLoaded', () => {
	const pathname = window.location.pathname

	if (pathname === '/' || pathname === '/index.html') {
		document.getElementById('nav-home').classList.add('active-page')
	} else if (pathname === '/gallery.html') {
		document.getElementById('nav-gallery').classList.add('active-page')
	} else if (pathname === '/articles.html') {
		document.getElementById('nav-articles').classList.add('active-page')
	} else if (pathname === '/questions.html') {
		document.getElementById('nav-questions').classList.add('active-page')
	}
})
