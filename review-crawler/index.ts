import { PRODUCTS } from './products';
import { getReviews } from './getReviews';
import fs from 'fs';
import { addDoc, collection, setDoc } from 'firebase/firestore';

import { db } from './firebase'

// getReviews(PRODUCTS.appleWatchStrap);

const uploadData = async () => {
    try {
        await addDoc(collection(db, "test"), {
            first: "Ada",
        })
    } catch (e) {
        console.log(e)
    }
}


export const upload = async (product: Product) => {
    try {
        await addDoc(collection(db, "category", "appleWatchStrap", "products"), {
        })
    } catch (e) {
        console.log(e)
    }
}



export { };

export const WOWOW = "appleWatchStrap"