import { PRODUCTS } from './products';
import { getReviews } from './getReviews';
import fs from 'fs';
import { addDoc, collection, setDoc } from 'firebase/firestore';
import { appleWatchStrap, bluetoothEarphone, battery, laptop, Product } from './upload';

import { db } from './firebase'

// getReviews(PRODUCTS.appleWatchStrap);




const upload = async (product: Product) => {
    try {
        await addDoc(collection(db, "category", "battery", "products"), product)
        console.log(product.name, 'uploaded');
    } catch (e) {
        console.log(e)
    }
}


const main = async () => {
    battery.map(async (product) => {
        await upload(product)
    })
}

main();

export { };
