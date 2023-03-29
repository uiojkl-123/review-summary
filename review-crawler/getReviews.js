const puppeteer = require('puppeteer');

async function main() {
    const browser = await puppeteer.launch(); // ❶ 헤드리스 브라우저 실행
    const page = await browser.newPage();     // ❷ 브라우저에 새 페이지 생성

    const pageUrl = 'https://search.shopping.naver.com/catalog/30890745618?query=%EB%B3%B4%EC%A1%B0%EB%B0%B0%ED%84%B0%EB%A6%AC&NaPm=ct%3Dlfqln6fs%7Cci%3D52ba006c7e4566b6f0ad549c312371b35eea46fc%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D152bde71908b26dc651f02bf36a54f8b361a6973';
    await page.goto(pageUrl, {
        // ❸ 모든 네트워크 연결이 500ms 이상 유휴 상태가 될 때까지 기다림
        waitUntil: 'networkidle0',
    });

    await page.waitForFunction(() => {
        // ➎ 함수가 웹브라우저의 컨텍스트에서 실행되기 때문에 document 객체에 접근 가능
        return document.getElementById('content').innerHTML.length > 0;
    });


    // ➍ 페이지 번호를 2부터 10까지 반복
    for (let pageNo = 2; pageNo <= 10; pageNo++) {


        // ➏ 특정 셀렉터에 대해 제공된 함수를 수행한 값 반환
        // same as document.querySelectorAll('.reviewItems_text__XrSSf')
        const content = await page.$$eval(
            '.reviewItems_text__XrSSf',
            (elements) => elements.map((el) => el.innerText),
        );

        console.log(content);

        // ➐ 다음 페이지로 이동   
        await page.click(`.pagination_pagination__JW7zT > a:nth-child(${pageNo})`);
    }

    await browser.close(); // ➐ 작업이 완료되면 브라우저 종료
}

main();