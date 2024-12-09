document.addEventListener('DOMContentLoaded', function () {
	const authButton = document.getElementById('auth-button')
	const dropdownContent = document.getElementById('dropdown-content')
	const logoutButton = document.getElementById('logout-button')
	const token = document.cookie
		.split('; ')
		.find(row => row.startsWith('token='))

	console.log('Token:', token) // Отладочная информация

	if (token) {
		authButton.textContent = 'Профиль'
		authButton.href = '#' // Предотвращаем переход по ссылке
	} else {
		dropdownContent.style.display = 'none'
	}

	logoutButton.addEventListener('click', function (event) {
		event.preventDefault()
		document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
		authButton.textContent = 'Войти'
		authButton.href = '/auth.html'
		dropdownContent.style.display = 'none'
		window.location.href = '/index.html'
	})
})
