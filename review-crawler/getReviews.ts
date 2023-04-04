import puppeteer from 'puppeteer';
import { WOWOW } from './index'

import { createObjectCsvWriter, createArrayCsvStringifier } from 'csv-writer'
import fs from 'fs';
import { runInThisContext } from 'vm';

export const getReviews = async (categoryProductsString: string) => {
    process.setMaxListeners(20);
    const 카테고리Top20Products = categoryProductsString.split('\n').map((product) => {
        return {
            productName: product.split(',')[0],
            productLink: product.split(',')[1]
        }
    });

    // console.log(카테고리Top20Products);

    const promiseList = 카테고리Top20Products.map(async (product, index) => {
        try {
            await 리뷰불러오고csv만드는함수(product.productName, product.productLink);
            console.log(index, product.productName);
        } catch (e) {
            console.log(e, product.productName, product.productLink);
        }
    });

    // .5초씩 쉬면서 promiseList의 promise들을 실행
    for (let i = 0; i < promiseList.length; i++) {
        await promiseList[i];
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return

    async function 리뷰불러오고csv만드는함수(productName: string, productLink: string) {
        const browser = await puppeteer.launch(); // ❶ 헤드리스 브라우저 실행
        const page = await browser.newPage();     // ❷ 브라우저에 새 페이지 생성

        const pageUrl = productLink;
        await page.goto(pageUrl, {
            // ❸ 모든 네트워크 연결이 500ms 이상 유휴 상태가 될 때까지 기다림
            waitUntil: 'networkidle0',
        });

        await page.waitForFunction(() => {
            // ➎ 함수가 웹브라우저의 컨텍스트에서 실행되기 때문에 document 객체에 접근 가능
            return document.getElementById('content')!.innerHTML.length > 0;
        });

        // const pageDown = async (page: any) => {
        //     const scrollHeight = 'document.body.scrollHeight';
        //     let previousHeight = await page.evaluate(scrollHeight);
        //     await page.evaluate(`window.scrollTo(0, ${scrollHeight})`);
        //     await page.evaluate(`window.scrollTo(0, ${scrollHeight})`);
        //     await page.evaluate(`window.scrollTo(0, ${scrollHeight})`);
        //     await page.waitForFunction(`${scrollHeight} > ${previousHeight}`, {
        //         timeout: 3000
        //     });
        // };


        // await pageDown(page);


        let revivewList: string[] = [];

        // 2개 페이지만 크롤링
        for (let pageNo = 1; pageNo <= 2; pageNo++) {

            // ➏ 특정 셀렉터에 대해 제공된 함수를 수행한 값 반환
            // same as document.querySelectorAll('.reviewItems_text__XrSSf')
            const content = await page.$$eval(
                '.reviewItems_text__XrSSf',
                //@ts-ignore
                (elements) => elements.map((el) => el.innerText),
            );

            if (content.length === 0) {

                const content2 = await page.$$eval(
                    '._2389dRohZq ._3QDEeS6NLn',
                    //@ts-ignore
                    (elements) => elements.map((el) => el.innerText),
                );

                revivewList = revivewList.concat(content2);

            } else {
                //@ts-ignore
                revivewList = revivewList.concat(content);
            }

            if(revivewList.length === 0) {
                console.log('리뷰가 없습니다.');
                break;
            }

            if (pageNo === 2) {
                break;
            }

            // ➐ 다음 페이지로 이동   
            const isPaginationExist = await page.$(`.pagination_pagination__JW7zT > a:nth-child(${pageNo + 1})`);

            if (isPaginationExist) {

                const innerText = await page.$eval(`.pagination_pagination__JW7zT > a:nth-child(${pageNo + 1})`, el => el!.innerHTML);
                if (innerText !== '2') {
                    const innerText2 = await page.$eval(`.pagination_pagination__JW7zT > a:nth-child(${pageNo + 2})`, el => el!.innerHTML);
                    if (innerText2 !== '2') {

                        console.log(productName, '다음 페이지 버튼을 찾을 수 없습니다.');
                        break;

                        await page.click(`.pagination_pagination__JW7zT > a:nth-child(${pageNo + 3})`);
                        console.log('클릭한 페이지', await page.$eval(`.pagination_pagination__JW7zT > a:nth-child(${pageNo + 3})`, el => el!.innerHTML));
                    } else {
                        await page.click(`.pagination_pagination__JW7zT > a:nth-child(${pageNo + 2})`);
                        console.log('클릭한 페이지', await page.$eval(`.pagination_pagination__JW7zT > a:nth-child(${pageNo + 2})`, el => el!.innerHTML));

                    }
                } else {
                    await page.click(`.pagination_pagination__JW7zT > a:nth-child(${pageNo + 1})`);
                    console.log('클릭한 페이지', await page.$eval(`.pagination_pagination__JW7zT > a:nth-child(${pageNo + 1})`, el => el!.innerHTML));
                }

            } else if (await page.$(`._1HJarNZHiI._2UJrM31-Ry > a:nth-child(${pageNo + 1})`)) {
                const isPagination2Exist = await page.$eval(`._1HJarNZHiI._2UJrM31-Ry > a:nth-child(${pageNo + 1})`, el => el!.innerHTML);
                if (isPagination2Exist !== '2') {
                    const isPagination2Exist2 = await page.$eval(`._1HJarNZHiI._2UJrM31-Ry > a:nth-child(${pageNo + 2})`, el => el!.innerHTML);
                    if (isPagination2Exist2 !== '2') {
                        console.log(productName, '다음 페이지 버튼을 찾을 수 없습니다.');
                        break;

                        await page.click(`._1HJarNZHiI._2UJrM31-Ry > a:nth-child(${pageNo + 3})`);
                        console.log('클릭한 페이지', await page.$eval(`._1HJarNZHiI._2UJrM31-Ry > a:nth-child(${pageNo + 3})`, el => el!.innerHTML));
                    } else {
                        await page.click(`._1HJarNZHiI._2UJrM31-Ry > a:nth-child(${pageNo + 2})`);
                        console.log('클릭한 페이지', await page.$eval(`._1HJarNZHiI._2UJrM31-Ry > a:nth-child(${pageNo + 2})`, el => el!.innerHTML));
                    }
                } else {
                    console.log('클릭한 페이지', isPagination2Exist);
                    await page.click(`._1HJarNZHiI._2UJrM31-Ry > a:nth-child(${pageNo + 1})`);
                }
            } else {
                console.log(productName, '다음 페이지 버튼을 찾을 수 없습니다.');
                break;
            }
        }


        // change a array to id, review_text
        const wow2 = revivewList.slice(0, 25).map((review, index) => {
            return [index + 1, review]
        });


        // add header 
        wow2.unshift(['id', 'review_text']);


        const csvWriter = createArrayCsvStringifier
            ({
                header: ['id', 'review_text']
            });


        const csvContent = csvWriter.stringifyRecords(wow2);

        const fileNameNormalizer = (name: string) => {
            return name.replace(/[/\\?%*:|"<>]/g, '_');
        }

        fs.writeFile(`./data/${WOWOW}/${fileNameNormalizer(productName)}.csv`, csvContent, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });




        // let csvContent = "data:text/csv;charset=utf-8,"
        //     + wow2.map(e => e.join(",")).join("\n");

        await browser.close(); // ➐ 작업이 완료되면 브라우저 종료

    }
}