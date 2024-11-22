// dataService.js
import { addDoc, collection, db, getDocs } from './firebaseConfig.js'

const galleryCollection = collection(db, 'gallery')

export const addGalleryItem = async item => {
	await addDoc(galleryCollection, item)
}

export const getGalleryItems = async () => {
	const querySnapshot = await getDocs(galleryCollection)
	return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
