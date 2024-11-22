// firebaseConfig.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js'
import {
	addDoc,
	collection,
	getDocs,
	getFirestore,
} from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js'

const firebaseConfig = {
	apiKey: 'AIzaSyCOWU4k06kcx1IpAV6VWiIb0Y8Lro_VQF8',
	authDomain: 'byblogvanilla.firebaseapp.com',
	projectId: 'byblogvanilla',
	storageBucket: 'byblogvanilla.appspot.com',
	messagingSenderId: '372467038058',
	appId: '1:372467038058:web:d2bc7db11769ad084c9713',
	measurementId: 'G-TKZT49T2PQ',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { addDoc, collection, db, getDocs }
