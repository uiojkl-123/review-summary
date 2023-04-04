import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase"

export const upload = async (category: string, productName: string, productLink: string) => {
    try {
        await setDoc(doc(db, "category", category, "products", productName), {
            productName,
            productLink
        })
    } catch (e) {
        console.log(e)
    }


}


export const getProductDataFromPage = async (page: any): Promise<Product> => {

    // 상품 이미지 url

    const imgUrl = await page.evaluate(() => {
        return document.querySelector('._367LI5Az0t ._2RYeHZAP_4')?.getAttribute('src');
    })

    // 상품 이름

    const name = await page.evaluate(() => {
        return document.querySelector('._22kNQuEXmb._copyable')?.textContent;
    })

    // 상품 가격

    const price = await page.evaluate(() => {
        return document.querySelector('.aICRqgP9zw ._1LY7DqCnwR')?.textContent;
    })

    // 상품 평점

    const score = await page.evaluate(() => {
        return document.querySelectorAll('._2pgHN-ntx6')[1]?.textContent;
    })


    return {
        imgUrl,
        name,
        price,
        score
    }
}



interface Product {
    imgUrl: string;
    name: string;
    price: string;
    score: string;


    keyword?: string;
    emotionScore?: string;
    summary?: string;
    analysis?: string;

    url?: string;
}