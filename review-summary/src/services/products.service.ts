import { Product } from "../models/model";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";


export const getProductsByCategory = async (category: string): Promise<Product[]> => {

    try {

        const products = await getDocs(collection(db, 'category', category, 'products'));

        const data = products.docs.map((doc) => doc.data() as Product)

        return data

    } catch (e) {
        console.error(e)
        throw e
    }
}