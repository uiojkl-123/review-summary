const puppeteer = require('puppeteer');

async function main() {
    const browser = await puppeteer.launch(); // ❶ 헤드리스 브라우저 실행
    const page = await browser.newPage();     // ❷ 브라우저에 새 페이지 생성

    const pageUrl = '카테고리_URL';
    await page.goto(pageUrl, {
        // ❸ 모든 네트워크 연결이 500ms 이상 유휴 상태가 될 때까지 기다림
        waitUntil: 'networkidle0',
    });

    await page.waitForFunction(() => {
        // ➎ 함수가 웹브라우저의 컨텍스트에서 실행되기 때문에 document 객체에 접근 가능
        return document.getElementById('content').innerHTML.length > 0;
    });

    // 네이버에서 스크롤해야 데이터가 더 불러와져서 스크롤을 끝까지 내리는 함수
    const pageDown = async page => {
        const scrollHeight = 'document.body.scrollHeight';
        let previousHeight = await page.evaluate(scrollHeight);
        await page.evaluate(`window.scrollTo(0, ${scrollHeight})`);
        await page.waitForFunction(`${scrollHeight} > ${previousHeight}`, {
            timeout: 3000
        });
    };


    await pageDown(page);

    // ➏ 특정 셀렉터에 대해 제공된 함수를 수행한 값 반환
    // same as document.querySelectorAll('.basicList_title__VfX3c > .basicList_link__JLQJf')
    const content = await page.$$eval(
        '.basicList_title__VfX3c > .basicList_link__JLQJf',
        (elements) => elements.slice(3,23).map((el) => `${el.innerText},${el.getAttribute('href')}`),
    );

    

    console.log(content.join('\n'));

    await browser.close(); // ➐ 작업이 완료되면 브라우저 종료
}

main();