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

interface Product {
    imgUrl: string;
    name: string;
    price: string;
    score: string;

    keywords: string;
    summary: string;
    positive: string;
    negative: string;
    analysis: string;

    url?: string;
}



const appleWatchStrap: Product[] = [{
    imgUrl: 'https://shopping-phinf.pstatic.net/main_2632399/26323997522.20210830191926.jpg?type=f640',
    name: '로랜텍 애플워치 스트랩 마그네틱 메탈 시계줄 밴드',
    price: '5,800',
    score: '4.8',

    keywords: '메탈, 자석, 색상',
    summary: '메탈 시계줄로 시원하고 고급스러운 느낌이고  자석으로 여닫기 편리함. 또한 다양한 색상 선택 가능',
    positive: '퀄리티가 높아 고급스럽고 자석으로 편리한 착용. 또한 다양한 색상 선택 가능',
    negative: '옷 소재와 매끄러운 마감 처리가 맞지 않아 옷 소재가 찢어지는 경우가 있음',
    analysis: '로랜텍 애플워치 스트랩 마그네틱 메탈 시계줄 밴드는 고급스러움과 편리함이 높게 평가되는 제품이다. 다양한 색상 선택이 가능하며, 자석으로 착용이 편리하다. 단, 일부 사용자는 옷 소재와 매끄러운 마감 처리가 맞지 않아 옷 소재가 찢어지는 경우가 있어 주의가 필요하다. 전반적으로, 퀄리티가 높아 만족도가 높은 제품이다.',

    url: 'https://search.shopping.naver.com/catalog/26323997522?query=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%B9%98%20%EC%8A%A4%ED%8A%B8%EB%9E%A9&NaPm=ct%3Dlg8vi768%7Cci%3D7f73b0075512b3da4bf7f864914ecda138735b38%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D6ab31ba59dfb6e2c78bfbf20d8bb0a4ce39b37d8'
}, {
    imgUrl: 'https://shop-phinf.pstatic.net/20230126_169/16747071406281PNxM_JPEG/75842983337217843_1574091914.jpg?type=m510',
    name: '오하이마켓 애플워치 스트랩 라이트 메탈 밴드 8 7 6 SE 2 호환 시계줄 줄질',
    price: '8,900',
    score: '4.8',

    keywords: '가격, 품질, 디자인',
    summary: '상품 설명 사진이랑 동일하고 가볍게 바꿔 다니기 좋음. 도장 마감 품질에 약간 아쉬움 있음',
    positive: '가격 대비 만족도 높고 가볍게 착용 가능함. 다양한 컬러와 디자인 선택 가능',
    negative: ' 일부 부분에서 도장 벗김 현상 발생 가능성 있음. 도장 마감 품질에 개선 필요. 시곗줄 마디마다 접혀서 잘 안 보임',
    analysis: '오헤이마켓 애플워치 스타일 메탈 밴드는 가격 대비 품질이 높으며 가볍게 착용할 수 있는 디자인이 특징입니다. 다양한 컬러와 디자인 선택이 가능하나 도장 마감 품질이 개선되면 더욱 만족스러운 제품이 될 것입니다.',

    url: 'https://smartstore.naver.com/ohi_company/products/5493321289?NaPm=ct%3Dlg8vo5og%7Cci%3Dbb9857df0d4f153db6dc0a7ae97a5853a1b929de%7Ctr%3Dslsl%7Csn%3D3314369%7Chk%3Da0ad0f820263b07ece078ea2fb7e258dbab2adad'
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_2796941/27969415522.20210729225743.jpg?type=f640',
    name: '로랜텍 애플워치 스포츠 루프 스트랩 줄질 밴드',
    price: '5,900',
    score: '4.8',

    keywords: '색상, 착용감, 가격',
    summary: '다양한 색상, 착용감이 편안하고 가격이 저렴한 제품',
    positive: '스트랩 퀄리티가 우수하며 편안하고 다양한 색상 선택 가능, 착용감이 편안하고 부드러움, 가격이 저렴하고 만족스러움',
    negative: '벨크로 부분이 조금 두껍고, 줄이 살짝김.오래쓰니 자석력이 약간 떨어진다.',
    analysis: '로랜텍 애플워치 스포츠 루프 스트랩 줄질 밴드는 가격 대비 훌륭한 품질과 편안한 착용감을 제공한다는 긍정적인 평가가 많이 나오고 있음. 하지만 벨크로 부분이 조금 두껍고, 줄이 살짝 김 또한 자석력이 떨어지는 경우도 있음.  색상 선택과 가격, 착용감 등 중요한 요소를 고려하면 구매에 대한 판단 기준으로 적절한 제품입니다.',

    url: 'https://search.shopping.naver.com/catalog/27969415522?query=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%B9%98%20%EC%8A%A4%ED%8A%B8%EB%9E%A9&NaPm=ct%3Dlg8vu2n4%7Cci%3D4f76e8aca033ac4d305edfd07271c1fcc348184c%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Dee64d4da87576dd05255d7762ce9763c10fb807a'
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_2759859/27598597522.20230308102537.jpg?type=f640',
    name: '뷰씨 애플워치 스트랩 메탈 링크브레이슬릿 시계줄 밴드',
    price: '24,800',
    score: '4.7',

    keywords: '가성비, 줄 조절, 디자인',
    summary: '가격대비 퀄리티가 좋고 줄 조절이 쉽다. 또한 디자인이 고급스럽다.',
    positive: '가격대비 퀄리티가 높고 줄 조절이 쉽다.  정품 대비 저렴하며 디자인이 고급스럽다.',
    negative: '한칸 한칸 사이에 도색이 덜 됐거나 간격이 넓어서 이음쇠가 잘 보인다. 시계를 찰때 잠금 푸는 버튼을 같이 누르면서 차야한다는 점이 좀 불편하다. 마감이 완벽하지 않아 날카로운 면이 바깥쪽에 있다.',
    analysis: '이 제품은 가격 대비 퀄리티가 높아 많은 사람들이 만족하며, 디자인도 고급스러워 스마트워치와 잘 어울리는 것이 장점이다. 또한, 줄 조절이 쉽고 정품 대비 저렴하다는 것도 구매자들이 매우 만족한 부분이다. 단점으로는 도색이 덜 되어 이음쇠가 잘 보이는 점과 마감이 완벽하지 않아 날카로운 면이 바깥쪽에 있어 불편함을 느끼는 사람들이 있었다',

    url: 'https://search.shopping.naver.com/catalog/27598597522?query=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%B9%98%20%EC%8A%A4%ED%8A%B8%EB%9E%A9&NaPm=ct%3Dlg8vxjn4%7Cci%3D426459e5dc2d2c45faf7cf8b8a2059139cf8a091%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Df8a82bd7daa93ebdf7f730da91f68571c4f67d01'
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_2972522/29725221618.20211117150231.jpg?type=f640',
    name: '신지모루 애플워치 8 울트라 7 6 5 4 3 2 1 SE2 SE세대용 실리콘 스트랩 밴드',
    price: '6,900',
    score: '4.7',

    keywords: '착용감, 디자인, 가성비',
    summary: '디자인이 깔끔하고 무게감이 가벼워 편안한 착용감. 가격대비 퀄리티가 높아 만족. 연결부분이 뻑뻑하고 더 큰 사이즈를 보내는 경우가 있어 주의가 필요.',
    positive: '깔끔한 디자인과 가벼운 무게로 편안한 착용감. 가격대비 퀄리티가 높아 만족스러움. 스트랩이 꼬이거나 미끄러지는 경우가 없음. 또한 길이 조절이 쉬움',
    negative: '연결부분이 뻑뻑하여 워치를 상하게 할 우려가 있고 길이 늘어짐이 있을 수도 있음. 특정 색상이 오염에 취약한 경우가 있어 사용에 주의가 필요함.',
    analysis: '신지모루 애플워치 스트랩 밴드는 깔끔한 디자인과 가벼운 무게로 편안한 착용감을 제공합니다. 또한 길이 조절이 쉽고 가격대비 퀄리티가 높아 만족스러운 제품임을 알 수 있습니다. 하지만 연결부분이 뻑뻑하고 길이 늘어짐이 있을 수도 있어 사용에 주의가 필요합니다. 또한, 특정 색상이 오염에 취약한 경우가 있어 선택할 때 주의가 필요합니다.',

    url: 'https://search.shopping.naver.com/catalog/29725221618?query=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%B9%98%20%EC%8A%A4%ED%8A%B8%EB%9E%A9&NaPm=ct%3Dlg8w0508%7Cci%3D3791d53256af95fae8699931bc1932ffd102a1b4%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D421a27fceb293ee315710e7ceb1ea8e3fb7c465e'
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_2960737/29607374618.20211112083044.jpg?type=f640',
    name: '신지모루 애플워치용 밀레니즈 루프 스트랩 밴드',
    price: '8,900',
    score: '4.8',

    keywords: '퀄리티, 고급스러움, 편안함',
    summary: '통기성이 좋고 마그네틱 흡착으로 길이 조절도 자유로움. 광택이 적당하여 고급스러움 더해짐. 무겁지 않아 장시간 착용에도 불편하지 않음',
    positive: '가격대비 퀄리티가 높고 디자인이 고급스러움',
    negative: '자성이 강해 자석 부분이 다른 자석과 닿고 잘못하면 떨어질 수 있음.',
    analysis: '가격 대비 퀄리티가 뛰어나며, 광택이 적당하여 고급스러움이 더해진다. 통기성이 좋아 땀이 차지 않고, 무겁지 않아 장시간 착용에도 불편하지 않다. 다만, 자석 부분이 다른 자석과 닿으면 떨어질 수 있다는 점이 아쉽다. 전체적으로 고급스럽고 편안한 스트랩이다.',

    url: 'https://search.shopping.naver.com/catalog/29607374618?query=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%B9%98%20%EC%8A%A4%ED%8A%B8%EB%9E%A9&NaPm=ct%3Dlg8w1q3s%7Cci%3D5da3c54e21defd2355d5dc02f00e8f927ab67b09%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Da8a4d3b28c6ab54fee90bbe20abe43d3bf504fb6'
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_2622042/26220426522.20210511164214.jpg?type=f640',
    name: '아이엠듀 애플워치 스트랩 메탈 쥬빌레 루프 밴드 시계줄 44mm',
    price: '9,900',
    score: '4.7',

    keywords: '광나는 메탈, 가볍고 튼튼, 만족',
    summary: '광나는 메탈이라 이뻐고 가볍고 튼튼해서 매우 만족함. 또한 착용감이 너무 좋고, 가볍고, 이쁩니다',
    positive: '메탈 느낌이 좋고 가벼우면서 튼튼함. 착용감이 좋다',
    negative: '조절기가 플라스틱이라 약함. 쇠 냄새가 남. 길이가 있어서 어느정도 조절해야함',
    analysis: '이 제품은 메탈 느낌이 좋고 가벼우면서 튼튼하며, 착용감이 좋다는 긍정적인 점이 많이 언급되었습니다. 그러나, 몇몇 리뷰에서는 조절기가 플라스틱이라 약하다는 점과 길이가 길어서 조절해야 한다는 불만이 있었습니다. 냄새가 난다는 리뷰도 있었으나, 이는 소수의 의견이므로 크게 고려하지 않아도 됩니다. 전반적으로 이 제품은 가성비가 좋으며, 가벼우면서 튼튼하며 착용감이 좋은 제품으로 추천할 만합니다.',

    url: 'https://search.shopping.naver.com/catalog/26220426522?query=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%B9%98%20%EC%8A%A4%ED%8A%B8%EB%9E%A9&NaPm=ct%3Dlg8w3pv4%7Cci%3D23606c26dc400de82f96d6466509be5523bc8420%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3Daac9af2cb6bc0315b5e9dc101fd73d7cf163cbf5'
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_3847243/38472438618.20230307155923.jpg?type=f640',
    name: '아이엠듀 애플워치 스트랩 알파인루프 스포츠 루프 밴드 시계줄',
    price: '12,900',
    score: '4.8',

    keywords: '부드러움, 깔끔함, 내구성',
    summary: '부드럽고 깔끔한 디자인, 내구성이 강한 제품, 가볍고 편안한 착용감',
    positive: '부드러운 소재, 마감이 깔끔하고 디자인이 심플하며 가볍고 편안한 착용감이 좋다',
    negative: '실망적인 리뷰 없음',
    analysis: '디자인이 깔끔하며 내구성이 강하고 부드러운 소재로 가볍고 편안한 착용감이 좋다',

    url: 'https://search.shopping.naver.com/catalog/38472438618?query=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%B9%98%20%EC%8A%A4%ED%8A%B8%EB%9E%A9&NaPm=ct%3Dlg8w56c0%7Cci%3Dd9a7170796c201f46f2c7beddf530ed22531c31a%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D32b6d80fdddcd0b00b7a0008e94dad269bcecb5d'
}, {
    imgUrl: 'https://shop-phinf.pstatic.net/20221225_129/1671923106500RAHT6_JPEG/73059005146255589_16485396.jpg?type=m510',
    name: '애플워치 메탈 케이스 일체형 스트랩 명품 케이스 럭셔리 밴드 줄질 JE01',
    price: '79,000',
    score: '4.9',

    keywords: '고급스러움, 이쁨, 가성비',
    summary: '이쁘고 퀄리티 좋다. 가성비 좋음',
    positive: '제품 외관이 아름답고, 퀄리티가 좋아서 만족스러움. 가격 대비 가성비가 좋음.',
    negative: '부정적인 리뷰 요약이 없음.',
    analysis: '애플워치 메탈 케이스 일반 사용 목적 스트랩 록시땅 JE01 제품은 디자인적으로 아름답고 퀄리티가 좋으며, 가격 대비 가성비가 우수하다는 평가가 많습니다. 이 제품을 구매하는 것은 만족스러운 선택일 수 있습니다.',

    url: 'https://smartstore.naver.com/je0517/products/7147398558?NaPm=ct%3Dlg8w6nko%7Cci%3D8abbe59f934ef32071e3328a16af9bb3001e379b%7Ctr%3Dslsl%7Csn%3D6561324%7Chk%3D7a89c3a91dc83e471f0652f89fd923c39c8b3ccf'
}, {
    imgUrl: 'https://shop-phinf.pstatic.net/20221210_55/1670646275641O3FBv_JPEG/71782103461962767_1779411595.jpg?type=m510',
    name: '애플워치 스트랩 브레이드 솔로루프 울트라 호환',
    price: '4,800',
    score: '4.8',

    keywords: '색감, 착용감, 퀄리티',
    summary: '다양한 색상으로 선택의 폭이 넓음. 착용감이 좋고 끼었을 때 편함. 퀄리티가 높음',
    positive: '다양한 색상 중 맘에 드는 색상을 고를 수 있어서 좋음. 착용감이 매우 좋고 끼었을 때 편안하며 퀄리티가 높아 만족스러움. 또한 탄성이 매우 좋음',
    negative: '부정적인 리뷰 요약이 없음.',
    analysis: '다양한 색상으로 선택이 가능하며, 착용감이 좋고 퀄리티가 높은 제품입니다. 탄력성이 강하고, 만족도가 높은 제품입니다.',

    url: 'https://smartstore.naver.com/entercon/products/7004679989?NaPm=ct%3Dlg8w8ge0%7Cci%3D4baabc4c570c102136381b1ebd27f362c462843e%7Ctr%3Dslsl%7Csn%3D938784%7Chk%3Dd013341b6dd8de61dfe85e658f79a1dcd27d6613'
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_3635544/36355442618.20230303181032.jpg?type=f640',
    name: '폰트리 힐링쉴드 애플워치 버클 브레이드 솔로루프 스트랩',
    price: '8,800',
    score: '4.6',

    keywords: '디자인, 가격, 착용감',
    summary: '여성분들도 사용하기 좋은 가격 적당한 디자인, 착용감이 좋음, 길이가 조절 가능해서 편리함',
    positive: '색상이 예쁘고 부드러워서 편안하게 착용할 수 있음, 가격 대비 품질이 좋음, 연결 부분이 부드러워서 끼는 것도 쉬움',
    negative: '일부 사용자는 길이가 조절되어도 남아서 부적합한 경우가 있음',
    analysis: '폰트리 힐링싱글즈 애플워치 밴드 브레이드 솔로루프 스트랩은 여성분들도 사용하기 좋은 가격 대비 품질이 좋은 제품입니다. 가격이 적당하면서도 색상과 디자인이 예쁘고, 부드러운 소재와 조절 가능한 길이로 착용감이 좋다는 리뷰가 많이 있습니다. 하지만 일부 사용자들은 길이가 조절되어도 남아서 부적합한 경우가 있으니, 사이즈를 잘 확인하여 구매하시는 것이 좋겠습니다.',

    url: 'https://search.shopping.naver.com/catalog/36355442618?query=%EC%95%A0%ED%94%8C%EC%9B%8C%EC%B9%98%20%EC%8A%A4%ED%8A%B8%EB%9E%A9&NaPm=ct%3Dlg8waels%7Cci%3Df628964ba151a436f0c317ae01bfa6c503f60b00%7Ctr%3Dslsl%7Csn%3D95694%7Chk%3D0723f6cc217caa37a5c4aa6e6c31b4341edb59c1'
}
]

const wow = {
    bluetoothEarphone: `
    // 삼성전자 갤럭시 버즈2 프로 SM-R510,https://cr.shopping.naver.com/adcr.nhn?x=h%2BMxksSPZggyhokFet3V%2Bv%2F%2F%2Fw%3D%3Ds2zJEduYEuEB1T%2BpNAxkIiXCQBy%2Bon9E88NSK8UBXmgNYR8p2%2BCB2z%2Bg3UYEK0lVxysh%2FmR1uIKqS%2FBqKVTLbYNM4dfaGkGP9gqr6mKsHT2oTUjNyNiUjjL9L%2F3HaLNowHinNrx5sg4hc%2Bs%2BwYZL3l6Tq%2FbD2MGowZHhNOyBhpCfgpei%2FKaF%2FEVSUs9sQ7N91%2B9Ve451caZaurnPu%2FKRrzunMLdRxrntIrQAcp2GWdCWk6v2w9jBqMGR4TTsgYaQnOgoJMFPBFPATEeqUjMSJHBf3wXxHtpqXVA1TWM7DJMBrsogkw0vEBVZiFX9aTl0B%2BYnTpLBgb2Sn8vnu71ut%2Bqv8zCgXrXTwdX%2BAYrLcHcLdSWh9EcRAN4G8kvAaz7ShS13L%2FQM%2BCZuq6rpKOfI%2BgwhTAPOH0yYSvlzphUJRBIprZkHn5ixF%2FBJdHPjkthssy0OZyLikGtYvyCsQlTYwrC%2FNBPpV9deVRz%2FlGZfjzztI1zxPoTTr%2BqYVQvwK%2FrkJv4YGjJCSIW1IvBxXT1wG94QfkytJ2KfrSwdVHMaghygDfkLIyuldBS3f8m8e6nLmkbc3JLYpcanHDEQPEU2fIQ%3D%3D&nvMid=34108100618&catId=50002334
Apple 에어팟 프로 2세대 (MQD83KH/A),https://cr.shopping.naver.com/adcr.nhn?x=cBUZNa1kb4ibPhw5nbbD%2Fv%2F%2F%2Fw%3D%3Dss7MMN%2BkSb2%2FWawGlqgyxYjQJkXzjm4jW9Vi%2FDFo71%2BpMXDVQIfR7povrDDUwPe8PvjiZVMCQ2dr27U6QLNO1EM1GrnjQ3l8eJAvL6ChHcgWtut8hRANgPyL9fxEqSvL62h%2FqNbmMd3P9tE5jamCbKQuIB8ncdehaYvLTVmrbJlFTCdSwC1WIMbPihx1s5D%2Fx444iuXlz%2BdQ0CFqwAcOyf6Uc7oJ0GV8I0vt0%2FsC%2BQlQHs%2F2PHkpmvWjL2qy1nHubEKK%2FkpYkwP7L1JPwnXYdgV2wk7dcZE2QiawVTwCBene5iAntKmqDGw%2FScr%2BO%2Fn%2F0Ydttpd%2FeGdUo8GFKs7ozEFyzZSQ3cVHgWzaWokt4AwYdqZdrcgc11lkWQyKAuMz8BHNOS04mwbf2sLSii8Aqp92ZUHWH3Sy7z5wHyef%2BehNcHEeeZk1uNf3BCjix1MAFVlaH2AbLvpBHaYxODaW5KauxrKWTz401FOLgVq5UrKDXdRBtM8TsP5%2B8B%2BzM%2B3ZFHT9vTxuIXVwoPszuw84fDBmwLkdyq3WnSS%2BjomAeFvGlXaOIRCeNLDr7CGJOaKh5LZpwR2bqZ0umqjBbn%2ByEDg%3D%3D&nvMid=34563199618&catId=50002334
Apple 에어팟 프로 2세대 (MQD83KH/A),https://cr.shopping.naver.com/adcr.nhn?x=19AkzCTIySh%2BPs%2FS%2BPzHx%2F%2F%2F%2Fw%3D%3Ds%2FhICdcs3BCwC8pch7%2Bnxpg9jQc%2BDWLV%2F0xkKKXinvMR5HzST%2Bvrf7AAuvSWiBZ7zQea07KFk51eDmUWSd2C7sApqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2Fbt7aJIeLYUGpVwhiluHuYDQz16bg6UHLjACcTW4mkggUqg%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVJA0AHtHNApBmvw%2Bcrq%2BhgHiuhFf%2BMwq%2B6KJnC5odiYLArNDSbHU%2FS0YkYGoebcIPCz1Gy0DVrM1ATlv6PV7gNKD%2FDwTprq5Z9qsRwIB8qsiSrGiurM74EaOV%2BVwtR51snkraozn36IU53N30VLo48u6Zz0cGOU8MDxBzAjhXvGXTgUvbXcZOxJOKT%2FvexsWBnLUqigmaar8OPJriyOMxwGUVuVowT8H43LXQ8QEyclsXzW0QKRuzcD6WMcLhSquo9uwP8vVnM%2BxFO9j8%2BhBBj3eM4oKvOsYZkEKT%2FVccOP0i8PREhL5jWWo0nOhXh2YQA%3D%3D&nvMid=34925507621&catId=50002334
// 삼성전자 갤럭시 버즈2 SM-R177,https://cr.shopping.naver.com/adcr.nhn?x=Hj0GQKla1iKwET8VzAjnyP%2F%2F%2Fw%3D%3Ds%2BSms7kmXKhZCj%2FnXPrDcZySswDWL3caVWd8iOo%2FEAOJSS6a08ssJNiKcweJeFss5FdxJ%2Bd%2F0xUnZ5m6ZMxPthQpqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2Fbsr3B6brrzSkBu0EqJCBsGa1YyiIAN%2BYdInuQUbybX5FKg%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVPHFwxCtWIIrNeUo7JDVixJdvsRsX1vfWdNspgkRY7ItArNDSbHU%2FS0YkYGoebcIPOWqmjH2ywlZi%2Fplj1uVC%2FDYGVlwOV0T2t%2F1h8HtM3%2FUSrGiurM74EaOV%2BVwtR51smKo4vocv9G8BUaw2xLy62aOnHabfhR2mgK8MMbydPTVy0OZyLikGtYvyCsQlTYwrAQV9IhG3W9K5isduvB8aiBYm9JbPNm3Bi1of7Z3C6wVQh2atsvoh%2FQ2HnQRxYfioLxtNBImYRApa0adFAeAbmCYXV1lmgFUrkG46h9qGDDwJXSFlseqJb%2BD9y1uadTE7g%3D%3D&nvMid=28555335556&catId=50002334
Apple 에어팟 3세대 맥세이프 충전 케이스 모델 (MME73KH/A),https://cr.shopping.naver.com/adcr.nhn?x=lPYfJclP5tz7HPrqeFt5E%2F%2F%2F%2Fw%3D%3DsctRDBCc8XYdsYbXIuoQdfMfajAANEos08uxgEOoqdo%2BY9pgEhfoQYrQNyTTOyqehyVRcq3eKahqNdLV76qHDqwpqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2Fbtyl0%2BOkS9U2DtFOKPwQB69PWtGiteeiuxCaxfVu%2Fcbuqg%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVE1S%2B1xT1RByiqfq7sXxztfzs6SpmOcWw%2FEsTzQOcF1WArNDSbHU%2FS0YkYGoebcIPA4%2F11Bf%2Fsrphoz5%2BzhKhfQ3OSF5IXOFcGNSvYs0ljsxSrGiurM74EaOV%2BVwtR51smUZA3XxIO1aEhOufSQJgx%2FqUu09VnfE%2BPUn%2FPoHzOy6y8RGMPlr41BYOPsq6cA35pX4AN38rzkpe0bQjROBpxL1o0M6fRXPaU09SCnS6Zs7HcAbbdHFaCLpMPYR%2Flbz05wGLitbpxwRlgcGIqjL8BjCbGjSaUIlbWsc5iOExL2f8tCn4W6BMAjnm6mplduDLNkCnLZSenfmQEo7f3ZB5L4Nt6ILgHaPWkLkHW077J4W&nvMid=29413009627&catId=50002334
QCY T13APP,https://cr.shopping.naver.com/adcr.nhn?x=pullrGx2fiKBpPPMQI%2BTpf%2F%2F%2Fw%3D%3DspchnAEZIUgdtsZ%2FABXqiWFeWcujiaitgdRyJcnqGrrb1pv4Uz4%2BD7pX3ZIOhSdJS9WwLTg214V9VQpbCMc7TqApqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2FbsY2cvy9O%2FqBAjzsCQF%2BLkn9ts8nroYwkmaI9O%2F7mxW1qg%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVBrgBB%2BRjOuRlsnd%2FTqHlEwxeo%2F5yOUKXdjaPn2UrG7nArNDSbHU%2FS0YkYGoebcIPKGbCgF%2FXS%2FWnyQqvwnaphCRiFuVUKB%2BKz1JpKHSiKfhSrGiurM74EaOV%2BVwtR51sts30Tu2tjil8bRvGueb8MAB8S3HaVSbU6Bx0U7Eiv%2BnPsGEjeUoBlLsW8i3et2ojoP3%2BIQJh7%2BNx7cXPWD3AH9%2B20UPz5pE6meqerLXJCYce8k8olHzEuSTYhqtlzHZPGU4uCjkToMEWS16aBzeGtk%3D&nvMid=28473903554&catId=50002334
QCY T13 ANC,https://cr.shopping.naver.com/adcr.nhn?x=3qRvhi33uBReOD5lOo7Tkf%2F%2F%2Fw%3D%3DsN1OvMY9jprE%2Fz3rYU9GxD8L9Ll0VyRvedjndImJVadE%2FGcKwdxDZ7bX2KPRv9abtyKk8XiFCS1%2FtBE4Kj9NzMwpqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2FbuMpsrzIiQM0e0kJDyXDTGwoORS9XmYIGvs5MxOehw8UKg%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVB8hhfi3H6m9VJFtyx6TDWS4ejJQ7cJ4nY%2FuX%2FjnLTuVArNDSbHU%2FS0YkYGoebcIPEorZjkkAUdNiMuhHwXCzlZNtMloOEuDdpZ9YwqZh3HRSrGiurM74EaOV%2BVwtR51snmSPQ9u6VllJozP0zBIV8taIkCeyXNd17zuWwrL4NhZhF1fGTWd1tYkdX4Qd4G8HYDzHUU4dq6Zw8WAUheXi2B5Io6FPgLaz7p5TcIaRl2d5wmZf66fqc9NSSoKnyahLJyBkNiYD2cS5RJHkpejHxI%3D&nvMid=38222443623&catId=50002334
Apple 에어팟 2세대 유선충전 모델 (MV7N2KH/A),https://cr.shopping.naver.com/adcr.nhn?x=gLp5vdtSWnc9uY3EgPlpWv%2F%2F%2Fw%3D%3DsBx5NCWxyzB2C9idO7x5T01RbfIoG1LxOLQtU%2FsqROjT011mdjCmyM4LFTD19kMeV8fYKot%2F3D%2BtO%2FRcyuFcZcdM4dfaGkGP9gqr6mKsHT2oTUjNyNiUjjL9L%2F3HaLNowHinNrx5sg4hc%2Bs%2BwYZL3l6Tq%2FbD2MGowZHhNOyBhpCdwOg5dL0PjquXW6AWXgTKNlre9HqdzdIwmuGubgWdSIenMLdRxrntIrQAcp2GWdCWk6v2w9jBqMGR4TTsgYaQnOgoJMFPBFPATEeqUjMSJHBf3wXxHtpqXVA1TWM7DJMBueqmz%2F751CAfQxLwr0i5g%2BYnTpLBgb2Sn8vnu71ut%2Bg09o71ScNZgAjbapovXx%2BRg2%2FMEXoTqm%2BS%2FTSCf1R8mS13L%2FQM%2BCZuq6rpKOfI%2BgzOWnuYj6PPsRmule3OmeRGPpICZ4JV3lZWqEf8A9k%2BB6INJn%2B6vWuHbbdQAvF3mFhsgYW0dH7C%2FbkI6s2nkHcbnFJbNL1ohmM8rma7uUhFBwmkKyL4v%2FZSvU8Oj0sWF8181tECkbs3A%2BljHC4UqrqNoZKXGNAM0DBvpPxuzDJwNY39eOtCWBSutjaGQp6UOeYvD0RIS%2BY1lqNJzoV4dmEA%3D&nvMid=18622086330&catId=50002334
삼성전자 갤럭시 버즈 라이브 SM-R180,https://cr.shopping.naver.com/adcr.nhn?x=QK3EKAilJAvpWLJKEVUUY%2F%2F%2F%2Fw%3D%3DsaQQu%2FjE5gzZ0T0PyUIJ9e7FzOLrsmg0h%2FjdMUWPaKzfyn1MTcfJiFt9r2B0RI3ZWCNpF1uq0zOeHZWhqHHmYIwpqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2Fbu0%2B%2FKGuZewGxS96fErxsHXnY%2FDt4Byayn0jTQxTdgeP6g%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVE1S%2B1xT1RByiqfq7sXxzte%2FXVkqbetr59pCv2%2BXfJo8ArNDSbHU%2FS0YkYGoebcIPMp%2FhYmhtjMq2KZ%2Bj5HE0VVNgYyyKQopA%2BxvrTI4T102SrGiurM74EaOV%2BVwtR51sgGJa5IyW9cQ32EMIsfsPFEw8ZPG59gTFBMSRMrljAke%2BuawfN0zKDZ9tvWvKMcNAxss3gyRjf0v7QlvWLg0aiJyguKbvBZAgjVOPYVrmoZxZGiqzfMkYHifkUP%2B8HSXTHQuQPHdfxBpbbO8x0VVjYaeGdj9lkfASi8OM3DZdy6xaSaZTsUu2pirA9az%2FK%2B%2Bs8fWVZ6vRKi%2F5buFehsUiNw%3D&nvMid=23702664490&catId=50002334
// 애프터샥 샥즈 오픈런 프로 S810,https://cr.shopping.naver.com/adcr.nhn?x=mJ51eA8sOLntlOwzxQKuJv%2F%2F%2Fw%3D%3DsmAsQmRopxjOzV%2B0P3Nff30GuIWOPpegpVihLUTveH0YGq7oSyToEGvF0OglObZ54fzPrxQBtBWYlppBn4Rj0HgpqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2FbuUW5H2zHGSX6XHXLpqjdTI30iqF0t%2BvVKJwmE1BqrYh6g%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVBrgBB%2BRjOuRlsnd%2FTqHlExpKHogplKAKHOpL4CTvJ4MArNDSbHU%2FS0YkYGoebcIPPvmW%2Fv4wjLHPnUK3o0kyctdq5yyRV6nHBJ7%2B7BkSc5XSrGiurM74EaOV%2BVwtR51souopT4bF7vypQ3p3YxhXi276cJCuWhxBOxpOn7zArQDuwP9L0j7YvHB2OKNn2rLcDcWcDTEAna4svWUDg1GTQqvjZtZfeQ%2Bsf5gVe0BghZDeJ26R9TtMPll%2BLXuLl0Ul0C1Gedfk3%2FKy8heMaDc%2BUna5bSY0T1s0lMURSOlWdDHpfCjQTTDsASjlKIoyTvnQA%3D%3D&nvMid=31349749626&catId=50002334
Apple 에어팟 3세대 라이트닝 충전 케이스 모델 (MPNY3KH/A),https://cr.shopping.naver.com/adcr.nhn?x=eLoPqTI%2Be3Lm62k6HS6Ocv%2F%2F%2Fw%3D%3DsZLITz%2Fj6EDl%2BEaLl444iDe%2BgxJG8H7cFSeBt3UdHEdoZNp%2FWK%2FBXt3EKiSS5o8NMTJLxMmFGkYSQtFNvi5CcRwpqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2Fbuld5C%2BRhExmqEDWDdOnkZXDok9CePzHNAETwWbggE6Lag%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVAMVUXe34gkbFSfhLtfIYa5Enl7ZiHp8pMS3e36bpmwjArNDSbHU%2FS0YkYGoebcIPAX%2Bypp4lHxFfFADGWnMFvI%2Besjx8qv6hxeWuspj7%2BQ4SrGiurM74EaOV%2BVwtR51smUZA3XxIO1aEhOufSQJgx%2FA8ekU4xHwYJSfM%2BW5Yct6y8RGMPlr41BYOPsq6cA35sO3UvHWVHdNy0DceImUCdL1o0M6fRXPaU09SCnS6Zs7jPEZFxffltXzogzM1PAaEEFSWYX5y4qhiw8FHNIHkuXCbGjSaUIlbWsc5iOExL2f51xJ9cR0bmWSDtj%2BfWoexEKHMoAs%2BroHUhGdf4z%2BbaAH%2Fu6qS%2B6u3uJCp%2FO6oMc9&nvMid=35326957618&catId=50002334
// 삼성전자 JBL TUNE230NC,https://cr.shopping.naver.com/adcr.nhn?x=Sk3vckEkjj2LYaM0Xog9F%2F%2F%2F%2Fw%3D%3DsgPPENb6Mn%2BeiyRw10ZrGcebL0Gkc%2Fw1asvNe0hbrDWxhYiJbWtk8v4aDXqUrBCbg1q%2FoGBDdbO6jKHRdhxmw%2FgpqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2FbvaKcPCjOWD%2FFGdGRSypJhcDok9CePzHNAETwWbggE6Lag%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVBrgBB%2BRjOuRlsnd%2FTqHlEwHPPKdII%2FCyxH70RQXpiX8ArNDSbHU%2FS0YkYGoebcIPInM1mDopW%2FiiSZFr0Zi%2Fb23RfzfBGhTwjyOgNsfMaGUSrGiurM74EaOV%2BVwtR51sofLhe5H3eVulLCWBYFjd2XLQ5nIuKQa1i%2FIKxCVNjCs%2BX9E2t0U50bBl6feZWMK41ib0ls82bcGLWh%2FtncLrBV7N0%2BKs0gSFTdhwMrBXaDkRTp8hAJngnHT%2FpudWeeyVAN%2BQsjK6V0FLd%2Fybx7qcuaRtzcktilxqccMRA8RTZ8h&nvMid=31804560618&catId=50002334
// 애프터샥 샥즈 오픈런 S803,https://cr.shopping.naver.com/adcr.nhn?x=K4EVn8rFqqJJZ45y9gsaQ%2F%2F%2F%2Fw%3D%3DsSrQ7qWiDo2ePHsATk59yDpocVmpOMwlCIIbN1hKsNtpAG6J1OKziXxAg5mO%2FD8iaEW5zzsQp3Df7NVDBTc5TjNM4dfaGkGP9gqr6mKsHT2oTUjNyNiUjjL9L%2F3HaLNowHinNrx5sg4hc%2Bs%2BwYZL3l6Tq%2FbD2MGowZHhNOyBhpCdiOmEnFBAJDZVZ89oOAfKLwi6sjh0PMeA%2BDgo8f4MjUunMLdRxrntIrQAcp2GWdCWk6v2w9jBqMGR4TTsgYaQnOgoJMFPBFPATEeqUjMSJHBf3wXxHtpqXVA1TWM7DJMDPvgHYR%2FmG9o2EB8FnCgWQ%2BYnTpLBgb2Sn8vnu71ut%2Bqv8zCgXrXTwdX%2BAYrLcHcJsUTAlPPXkwQxtNMyh%2FyVuS13L%2FQM%2BCZuq6rpKOfI%2Bg2%2FyOKq0IuMsbRP4KBvwMOOYDED%2F8pJSp1BVhbtGew8Uu4tDqsIdpExaj2RyasaBHM7soBZkVVpPgBJDGeC1NM2AQT95aqKOzYpI6ecUSfsYezdPirNIEhU3YcDKwV2g5GSH7pkkVC5n%2BezTZxiAGloDfkLIyuldBS3f8m8e6nLmkbc3JLYpcanHDEQPEU2fIQ%3D%3D&nvMid=30451078626&catId=50002334
애플 에어팟 프로 2세대 에어팟프로2 국내정품 MQD83KH/A 당일배송,https://cr.shopping.naver.com/adcr.nhn?x=pMcwa4BoOomfJu%2FXYRQbk%2F%2F%2F%2Fw%3D%3DsGJ6j8fLnvsggVavaaL4DraDmN%2BDBpkmoXL%2Fi1ssgtbuxA0PlNoPpLGET1Jq8AciNKjj311ffYeaEa2cMWljF8wpqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DrFRN%2BLM1yJAr78kyjmQeuVavFoQZioHQNBzgV6NBWA7OfZHPztgRNbWSvxinHeM9lL58Xlqpw3%2BXNvphxuqeMq1Cqyjs5LbuT1envBA0qxvBz7%2BORHa%2BX777%2F5U82WuFWUPMCsUZQYxV%2FGrGvGjY3vbuY00sseOzf9Lo59ppb%2FiYeq%2Bz0Z0rwbQ7MffGPmxiMrpfQ8W09VYqBSSjvbUiMVnUcqEq4HBDKkwCG%2FWKnQ0SRpcK0VvMmFvGoIEiLzeW%2BGiFa2XxLLGv%2BQzPUXU5Xd2ZUHWH3Sy7z5wHyef%2BehOb7dQ8CswMJtvMshw4oEl0o2qYAZzLFmuJTRT5TF7te9pQSVZQ6OdoDZzLhRndxcFYmmYU8RTHxEqWSH0aqZU2E74%2BCl2d5FDN%2BIkqid%2F0mnqohx%2BWfYSE3dGwgzs1ZSILnJYF1qDL20SiO%2B5B%2FrIz9Je%2FW6bY1xJPyIJa5eXRce%2FNUhkkLvvuCNjd%2Fr0AudOBAI%2F9sQRO2Am9a%2BRTB%2Fq9pfCjQTTDsASjlKIoyTvnQA%3D%3D&nvMid=84913794097&catId=50002334
QCY HT05,https://cr.shopping.naver.com/adcr.nhn?x=fcspyiJGqTUbQdBB2qTAbP%2F%2F%2Fw%3D%3DscSSQM6s0WUzDqcOQd16idfxfvYFaQFD5n2IDxZQhPjXsmeRDMyJk0PZb0%2FPCRY8aY4cHR28aDRK1PpIKJfb0rM1GrnjQ3l8eJAvL6ChHcgWtut8hRANgPyL9fxEqSvL62h%2FqNbmMd3P9tE5jamCbKQuIB8ncdehaYvLTVmrbJlGEEBHTF%2F5Rz3wMVd9wBW2ePuQC%2BrOSNgTvoBIgkvkpkKUc7oJ0GV8I0vt0%2FsC%2BQlQHs%2F2PHkpmvWjL2qy1nHubEKK%2FkpYkwP7L1JPwnXYdgWn06PEdiYpvyF%2BR3rSPDmSr9hSXVIVIkQ42CxckQ5OTYdttpd%2FeGdUo8GFKs7ozEBpRAMKI4PkUrh%2B%2BaaQmVljv5gPElYYf90KhL6iaZuLv5LmKDPyJI3k0n6cPOqUaB4i%2FnFH%2BG%2BsTAZpNIdnHUr4xhdukYQCIhdCHkhfxOpekBb4vSTgb63KXPqjHfH7b6ZvfrQJd09kelQ7HvPjqYWPuTVSVOjFJ5KLRTFBNLKm6jTTf4OzeMBF1D1oCUXOhCS2acEdm6mdLpqowW5%2FshA4%3D&nvMid=33560948620&catId=50002334
엠지텍 이어프리 G5,https://cr.shopping.naver.com/adcr.nhn?x=4zjMFQJA%2Fy5ahz23au3jNf%2F%2F%2Fw%3D%3DsnL1kuLXQ78meO1l8iX2iTKSQY5qwCWr%2F%2FVWkVWdU4UrhJJWNecbCNsIoHv8KCtxE5HJ9JlIME4vBxvKskr0qMM1GrnjQ3l8eJAvL6ChHcgWtut8hRANgPyL9fxEqSvL62h%2FqNbmMd3P9tE5jamCbKQuIB8ncdehaYvLTVmrbJlFd%2BZp7MgDu0rPdyLi9lTmgxtU6UAHbedKYkoIBiPZxNaUc7oJ0GV8I0vt0%2FsC%2BQlQHs%2F2PHkpmvWjL2qy1nHubEKK%2FkpYkwP7L1JPwnXYdgWHbBlisNnPIbfKqq144G2UXhVYpyi0G4KwL2sjFKhK4Ydttpd%2FeGdUo8GFKs7ozEK6p1HBCxzwgWa37zv20oxSrdHBtoXAsJcY93TQfc8wBBHNOS04mwbf2sLSii8Aqp%2FsnfzzsHUFNYOpnRACY7N27A%2F0vSPti8cHY4o2fastwNR9YckG3qJlOhPEo5dgb1Ru9tQCoJfudbPhkUYJbDyl4nbpH1O0w%2BWX4te4uXRSX9PCxVD8LNc98YodbxQwwuvKalATZrXeY5u5tiFLbFNml8KNBNMOwBKOUoijJO%2BdA&nvMid=27214296522&catId=50002334
LG전자 톤플러스 HBS-PL5,https://cr.shopping.naver.com/adcr.nhn?x=Woe8c7Xgg7%2FHQsVqvTrbvP%2F%2F%2Fw%3D%3Ds5%2BdLnsp4inDYzKlU6xZrdWThcNU%2F94yuDjGZN7nFh9ZE5dKwOMTleY1JnaHOjonKYSXW2a01Zb%2BH1%2FIFqMT6Z9M4dfaGkGP9gqr6mKsHT2oTUjNyNiUjjL9L%2F3HaLNowHinNrx5sg4hc%2Bs%2BwYZL3l6Tq%2FbD2MGowZHhNOyBhpCcv5uhlcVPV3BxTe5OM1%2BpecAGG0Zt%2FVGiFHZ%2FqJnxmaOnMLdRxrntIrQAcp2GWdCWk6v2w9jBqMGR4TTsgYaQnOgoJMFPBFPATEeqUjMSJHBf3wXxHtpqXVA1TWM7DJMCSyQaA89kVVAXpAIlROYom%2BYnTpLBgb2Sn8vnu71ut%2BkpfHrVUgMkYqki4cbUF1OSr7HFTg%2Bs4t7A1fdDyY0qBS13L%2FQM%2BCZuq6rpKOfI%2Bg7aO%2Blw6b%2F%2BxWBL06vl0WU%2FOFbgBM14elHhIl0RtArkvCHqa%2Bk4Jfe83FmkWo%2BOVnPAmPLqFPnZaR7igQVT70u6%2FhgaMkJIhbUi8HFdPXAb3mM7lso0sDDreO9T7wtOAhG9TZjqEQTAbFzUBl8432wsZPQdlwDfle51IC5%2B3EtWg&nvMid=20966833707&catId=50002334
QCY AilyPods APP T20,https://cr.shopping.naver.com/adcr.nhn?x=vOjW3LXrG1N9q%2BFx3bjJP%2F%2F%2F%2Fw%3D%3Ds2qp9DuPgfJgbzylfLIPy9pkrUiPkvcUezsKhAbGK%2FLm7WUZwHIO%2FNagz0KQ%2FDD1FgRuzgOHPT2Wi0sxilKH0yc1GrnjQ3l8eJAvL6ChHcgWtut8hRANgPyL9fxEqSvL62h%2FqNbmMd3P9tE5jamCbKQuIB8ncdehaYvLTVmrbJlEEfDHHfqWTXzrqa%2FytPakG444iuXlz%2BdQ0CFqwAcOyf6Uc7oJ0GV8I0vt0%2FsC%2BQlQHs%2F2PHkpmvWjL2qy1nHubEKK%2FkpYkwP7L1JPwnXYdgXA%2F81s%2FtbLiM64R1CtXvszicpeQ0o8gt8iTuAHKS9axYdttpd%2FeGdUo8GFKs7ozEGK0c2MsQutSxJngX%2BvpyWwXIS8XKzWFt%2FKBGQZHZvfN0VUPuWm9hgEJVqfQDM%2B5EPdoXRq9L8WDqRnhox8PMIPyNHyBUXwWVD2ki0TxnNzydQQDH4F9W3WU0R7ofAvKHYL3hs1Y3P3oGV6jGhSZJtJ4nbpH1O0w%2BWX4te4uXRSXFNQ9Wv%2FNNy8snMEcxvSqUZc98uQzEdzlOH5wUxb8yICl8KNBNMOwBKOUoijJO%2BdA&nvMid=34649314618&catId=50002334
QCY T13,https://cr.shopping.naver.com/adcr.nhn?x=eyn31hp61UQdenFis1sgx%2F%2F%2F%2Fw%3D%3Dsxrlm4%2B1UOqlwQoBoNXQMAKHza9Pv0r1JVzI1kmSPOjKi6oBYhFTpTf%2BbTKm2OZCuHbMBj%2FII4u5%2F53b0jHvWrs1GrnjQ3l8eJAvL6ChHcgWtut8hRANgPyL9fxEqSvL62h%2FqNbmMd3P9tE5jamCbKQuIB8ncdehaYvLTVmrbJlGsb6hFyG1SsPNtw96coXs5aCtiiDDUN6Js61BMosdxSaUc7oJ0GV8I0vt0%2FsC%2BQlQHs%2F2PHkpmvWjL2qy1nHubEKK%2FkpYkwP7L1JPwnXYdgchlBvSxSGvUxy9lfMRCNqtpdlFTIfspcrztZEj6%2BzS9Ydttpd%2FeGdUo8GFKs7ozECDm%2BYnbZ56n28wqHq2%2B%2BNdj72Z%2BEkHwp8J2j6aEGBRK0eJsRaz4drYSEelqJ%2Be8h%2FmANFJSfZV98ARoy6T0pWWYB%2B0iTWiD8ZjU7Kbe2OIiyEpMu6UATL4sVS3GeIj39nQuQPHdfxBpbbO8x0VVjYY1VcG7HihW67zEbfEYtpwahOhVRqyyWAtTWGOpWR2aJl2%2B%2FxyXlCSAWzA7%2BLQj8t8%3D&nvMid=27698150524&catId=50002334
피에스이벤처스 PENTON 펜톤 TSX 다이아팟,https://cr.shopping.naver.com/adcr.nhn?x=gJ6fzvxYdOJfUT9ub4Zk9f%2F%2F%2Fw%3D%3DsiA6Sx2bYHIg2%2BOWkNvp7JNt6VbMq9ipPFgbRh48oikW%2BaPMyN4hy9yMm%2BcCL3UWsxVyNFYRXTsFLy4EN58RCr9M4dfaGkGP9gqr6mKsHT2oTUjNyNiUjjL9L%2F3HaLNowHinNrx5sg4hc%2Bs%2BwYZL3l6Tq%2FbD2MGowZHhNOyBhpCcgZvYxXE%2FwCsCZQAJaep1YqQetMh%2F6EBN9ePIDoC%2ByQ%2BnMLdRxrntIrQAcp2GWdCWk6v2w9jBqMGR4TTsgYaQnOgoJMFPBFPATEeqUjMSJHBf3wXxHtpqXVA1TWM7DJMBNq4zOly2XSeGdWf1ZiAUy%2BYnTpLBgb2Sn8vnu71ut%2BkpfHrVUgMkYqki4cbUF1OTtSni7mrLXnUwWGqWfePsDS13L%2FQM%2BCZuq6rpKOfI%2BgylZSmwygQlh%2FKRELrY0%2FJEMoQb4Tih14tHiTt93zT9RzhW4ATNeHpR4SJdEbQK5L%2FweLbuibzfTpjUHdmuiiCNWj0Tq5MqPx1IypyDKL6OYv4YGjJCSIW1IvBxXT1wG91wyWDeCX88ihaqJ1onU8W1vU2Y6hEEwGxc1AZfON9sLGT0HZcA35XudSAuftxLVoA%3D%3D&nvMid=21311163787&catId=50002334`}


const bluetoothEarphone: Product[] = [{
    imgUrl: 'https://shopping-phinf.pstatic.net/main_2370266/23702664490.20200825144312.jpg?type=f640',
    name: '삼성전자 갤럭시 버즈 라이브 SM-R180',
    price: '84,500',
    score: '4.8',

    keywords: '디자인, 음질, 착용감',
    summary: '색상이 깔끔하고 예쁘다. 고음질이며 음질이 좋다. 착용감이 좋고 안정적이다.',
    positive: '디자인이 매우 깔끔하고 세련되어 보인다. 고음질이며 음질이 매우 좋다. 착용감이 매우 좋고 안정적이다.',
    negative: '유광 부위에 지문이 쉽게 생긴다. 장시간 착용시 귓바퀴가 조금 아플 수 있다. 오픈형이라 노이즈 캔슬링이 그렇게 좋진 않음.',
    analysis: '갤럭시 라이브 SM-R180은 깔끔하고 예쁜 디자인, 고음질이며 음질이 좋으며, 안정적인 착용감이 특징이다. 단, 유광 부위에 지문이 쉽게 생긴다는 것과 장시간 착용시 귓바퀴가 조금 아플 수 있다는 점, 오픈형이라 노이즈 캔슬링이 그렇게 좋진 않은 점이 단점이다. 전반적으로 갤럭시 라이브 SM-R180은 높은 만족도를 제공하는 제품으로, 음악 감상이나 통화에 사용하기 좋은 제품이다.',

    url: 'https://cr.shopping.naver.com/adcr.nhn?x=QK3EKAilJAvpWLJKEVUUY%2F%2F%2F%2Fw%3D%3DsaQQu%2FjE5gzZ0T0PyUIJ9e7FzOLrsmg0h%2FjdMUWPaKzfyn1MTcfJiFt9r2B0RI3ZWCNpF1uq0zOeHZWhqHHmYIwpqVBENkvk%2Fr3M%2Bf8Rq21S6bWht5mIXi0PLdh6xf36DRsCh5GS%2BklokEzA%2FJ0VszxCGSQdcrj%2BZJHLmJxgT%2Fbu0%2B%2FKGuZewGxS96fErxsHXnY%2FDt4Byayn0jTQxTdgeP6g%2BxArVq%2FBrPJKx2LY27KIQhkkHXK4%2FmSRy5icYE%2F27H6nXvxvhE2NIIN9%2Fg4xyVE1S%2B1xT1RByiqfq7sXxzte%2FXVkqbetr59pCv2%2BXfJo8ArNDSbHU%2FS0YkYGoebcIPMp%2FhYmhtjMq2KZ%2Bj5HE0VVNgYyyKQopA%2BxvrTI4T102SrGiurM74EaOV%2BVwtR51sgGJa5IyW9cQ32EMIsfsPFEw8ZPG59gTFBMSRMrljAke%2BuawfN0zKDZ9tvWvKMcNAxss3gyRjf0v7QlvWLg0aiJyguKbvBZAgjVOPYVrmoZxZGiqzfMkYHifkUP%2B8HSXTHQuQPHdfxBpbbO8x0VVjYaeGdj9lkfASi8OM3DZdy6xaSaZTsUu2pirA9az%2FK%2B%2Bs8fWVZ6vRKi%2F5buFehsUiNw%3D&nvMid=23702664490&catId=50002334',
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_3410810/34108100618.20220816172630.jpg?type=f640',
    name: '삼성전자 갤럭시 버즈2 프로 SM-R510',
    price: '178,990',
    score: '4.9',

    keywords: '착용감, 무게, 노캔 기능',
    summary: '착용감이 좋고 무게가 가볍습니다. 노캔 기능은 아쉽지만 전반적으로 좋은 제품입니다.',
    positive: '착용감이 에어팟보다 우수하고 가벼워서 휴대성이 좋습니다. 무광의 촉감과 고급스러운 디자인도 좋습니다.',
    negative: '귀에 고쳐 끼울 때 바깥 터치가 눌러져 귀찮고, 노캔 기능이 아쉽습니다.',
    analysis: '삼성전자 갤럭시 버즈2 프로 SM-R510은 착용감이 좋고 무게가 가벼워 휴대성이 우수합니다. 노캔 기능이 아쉽지만 무광의 촉감과 고급스러운 디자인으로 디자인적인 측면에서도 좋은 제품입니다. 바깥 터치가 눌러져 귀찮은 점과 노캔 기능이 아쉬운 점이 있지만, 전반적으로 좋은 제품으로 판단됩니다.',

    url: 'https://search.shopping.naver.com/catalog/34108100618?&NaPm=ct%3Dlg8xqlgo%7Cci%3Dac886e8940b1b23688f766673ebc382b1b5caf79%7Ctr%3Dslcc%7Csn%3D95694%7Chk%3D509357e9652253431098f7e69b78e46a9b65b259',
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_2855533/28555335556.20220429100509.jpg?type=f640',
    name: '삼성전자 갤럭시 버즈2 SM-R177',
    price: '95,450',
    score: '4.8',

    keywords: '노이즈캔슬링, 통화품질, 음악품질',
    summary: '디자인은 그다지 고급스럽지 않지만 귀여운 맛이 있음. 노이즈캔슬링 성능이 꽤 만족스러움. 통화품질은 대체로 좋으나 상대방에 따라 잡음이 들림. 음악품질은 좋음.',
    positive: '노이즈캔슬링 성능이 만족스러움. 귀에 끼우면 차량소음 등을 막아주어 편리함. 통화품질과 음악품질도 대체로 좋음.',
    negative: '디자인이 그다지 고급스럽지 않음. 상대방에 따라 통화 시 잡음이 들릴 수 있음.',
    analysis: '삼성 갤럭시 버즈2 SM-R177은 노이즈캔슬링 성능이 만족스러우며, 음악품질과 통화품질도 대체로 좋다는 긍정적인 평가가 많다. 다만 디자인이 고급스럽지 않고, 일부 상대방에 따라 통화 시 잡음이 들릴 수 있어 구매를 고민하는 사람들에게는 실망스러운 요소가 될 수 있다. 그러나 전반적으로 살펴보면 이 제품은 무선 이어폰 중에서도 경제적이면서 성능이 괜찮은 제품이라는 평가가 많이 나오고 있어, 구매를 고려하는 사람들에게 도움이 될 것으로 보인다.',

    url: 'https://search.shopping.naver.com/catalog/28555335556?&NaPm=ct%3Dlg8xsuhc%7Cci%3Dc7e85b6198316dc4248e488f2f02d5124f4b5d94%7Ctr%3Dslcc%7Csn%3D95694%7Chk%3Df1eea4b46507e956a1b7fe1e7dec9d91a571df2a',
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_3180456/31804560618.20220413161727.jpg?type=f640',
    name: '삼성전자 JBL TUNE230NC',
    price: '68,900',
    score: '4.8',

    keywords: 'ANC 기능, 음질, 노이즈캔슬링',
    summary: '높은 기능성과 합리적인 가격이 장점이다. 음질과 ANC 성능이 우수하다. 통화 품질도 좋다.',
    positive: 'ANC 기능이 뛰어나서 시끄러운 환경에서도 쾌적한 청음 환경을 제공한다. 음질이 전체적으로 준수하며 밸런스가 잘 맞아서 음악 감상에 좋다. 통화 품질이 좋아서 보이스톡이나 디스코드 음성채팅 등에서도 상대방 목소리를 깔끔하게 들을 수 있다.',
    negative: '기본 음질은 별로이므로 JBL 헤드폰 앱을 설치하고 이퀄라이저를 설정해줘야함',
    analysis: 'JBL TUNE230NC는 높은 기능성과 합리적인 가격을 갖춘 제품으로, ANC 기능과 음질, 통화 품질 등이 모두 좋아 구매를 고려할 만하다. 또한, ANC 성능이 좋아서 시끄러운 환경에서도 쾌적한 청음 환경을 제공하며, 음악 감상에도 좋다. 하지만 기본 음질은 별로이므로 JBL 헤드폰 앱을 설치하고 이퀄라이저를 설정해줘야함. 이 제품은 블루투스 이어폰을 처음 사용하는 분들에게 추천할 만하다.',
    url: 'https://search.shopping.naver.com/catalog/31804560618?&NaPm=ct%3Dlg8xuhw8%7Cci%3D2bcdc79b6e4af6f558472a4149d0a5e1d611ee21%7Ctr%3Dslcc%7Csn%3D95694%7Chk%3D9ec7f575e65a63375da30a877c2edd5cb0e6115f',
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_3134974/31349749626.20220317133324.jpg?type=f640',
    name: '애프터샥 샥즈 오픈런 프로 S810',
    price: '207,890',
    score: '4.8',

    keywords: '음질, 착용감, 가성비',
    summary: '음질과 착용감이 우수하며, 가격 대비 만족스러운 제품입니다. 저음이 강조되어 조금 더 큰 볼륨이 필요할 수 있습니다. 이전 모델과 비교해서 블루투스 연결 속도가 월등히 빠르고 무게와 착용감이 좋아졌습니다.',
    positive: '음질이 매우 좋으며 착용감도 편안합니다. 가격 대비 성능이 우수하여 만족스러운 제품입니다. 블루투스 연결 속도가 매우 빠르고, 무게와 착용감이 좋아져 사용하기 편리합니다.',
    negative: '저음이 강조되어 음악을 들을 때 볼륨을 좀 더 높여야 잘 들을 수 있습니다. 상대적으로 가격이 비쌉니다.',
    analysis: '애블텍사의 오픈런 프로 S810은 가성비가 뛰어나고 음질과 착용감이 우수한 제품입니다. 이전 모델과 비교해서 블루투스 연결 속도가 월등히 빠르고 무게와 착용감이 좋아졌습니다. 단, 저음이 강조되어 볼륨을 좀 더 높여야  음악을 들을 수 있으며 가격이 비싸다는 단점이 있습니다. 하지만, 가성비를 고려한다면 추천할 만한 제품입니다.',
    url: 'https://search.shopping.naver.com/catalog/31349749626?&NaPm=ct%3Dlg8xw9xs%7Cci%3D985c402227fd62123f59637058ae12daf9688ea3%7Ctr%3Dslcc%7Csn%3D95694%7Chk%3D2415e6df589e4ad1d970cc169a39c874ed938f4c',
}, {
    imgUrl: 'https://shopping-phinf.pstatic.net/main_3045107/30451078626.20220315115533.jpg?type=f640',
    name: '애프터샥 샥즈 오픈런 S803',
    price: '152,150',
    score: '4.8',

    keywords: '무선이어폰, 통화품질, 업무용',
    summary: '하루종일 사용에 배터리가 오래감. 업무용으로 좋고 상당히 우수한 통화품질',
    positive: '충전이 용이하고 배터리 수명이 좋습니다. 통화품질이 매우 우수하며, 또렷한 음질을 제공합니다. 업무용으로 적합하며, 오픈컴이므로 일할 때 소리를 듣기 편리합니다.',
    negative: '긴 착용 시 골전도 부위에 땀이 차고 불편할 수 있습니다.',
    analysis: '애프터샥 샥즈 오픈런 S803"는 무선이어폰으로서 뛰어난 통화 소음 제거 기능을 제공하며, 충전이 용이하고 배터리 수명이 좋습니다. 통화품질이 우수하며 또렷한 음질을 제공합니다. 또한, 업무용으로 적합하며, 오픈컴이므로 소리를 듣기 편리합니다. 단, 긴 착용 시 골전도 부위에 땀이 차서 불편할 수 있습니다. 총평으로는, 업무용으로 뛰어난 선택이 될 수 있습니다.',
    url: 'https://search.shopping.naver.com/catalog/30451078626?&NaPm=ct%3Dlg8xxo3c%7Cci%3D6e7f951f82f3aaef1704908b22b631cd09852a7e%7Ctr%3Dslcc%7Csn%3D95694%7Chk%3Dbaba24c100cc70938dd26e4c58ac6cf15a008511',
}
]

const battery: Product[] = [
    {
        imgUrl: '',
        name: '',
        price: '',
        score: '',

        keywords: '',
        summary: '',
        positive: '',
        negative: '',
        analysis: '',
        url: ''
    }, {
        imgUrl: '',
        name: '',
        price: '',
        score: '',

        keywords: '',
        summary: '',
        positive: '',
        negative: '',
        analysis: '',
        url: ''
    }, {
        imgUrl: '',
        name: '',
        price: '',
        score: '',

        keywords: '',
        summary: '',
        positive: '',
        negative: '',
        analysis: '',
        url: ''
    }, {
        imgUrl: '',
        name: '',
        price: '',
        score: '',

        keywords: '',
        summary: '',
        positive: '',
        negative: '',
        analysis: '',
        url: ''
    }, {
        imgUrl: '',
        name: '',
        price: '',
        score: '',

        keywords: '',
        summary: '',
        positive: '',
        negative: '',
        analysis: '',
        url: ''
    }, {
        imgUrl: '',
        name: '',
        price: '',
        score: '',

        keywords: '',
        summary: '',
        positive: '',
        negative: '',
        analysis: '',
        url: ''
    }, {
        imgUrl: '',
        name: '',
        price: '',
        score: '',

        keywords: '',
        summary: '',
        positive: '',
        negative: '',
        analysis: '',
        url: ''
    }, {
        imgUrl: '',
        name: '',
        price: '',
        score: '',

        keywords: '',
        summary: '',
        positive: '',
        negative: '',
        analysis: '',
        url: ''
    }, {
        imgUrl: '',
        name: '',
        price: '',
        score: '',

        keywords: '',
        summary: '',
        positive: '',
        negative: '',
        analysis: '',
        url: ''
    }

]
