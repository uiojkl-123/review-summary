import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.scss';
import styled from '@emotion/styled';
import { Container, Section } from '../theme/theme';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const HomeContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
overflow-y: auto;
padding: 0;
`;

export const Home: React.FC = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '기록하며 성장하기',
        text: 'Hello World',
        url: 'https://shinsangeun.github.io',
      });
    } else {
      alert("공유하기가 지원되지 않는 환경 입니다.")
    }
  }
  return (
    <IonPage className="home">
      <HomeContainer>

        <Section>
          <div className="mainTopContainer">
            <div className="mainImageContainer " style={{ width: "400px" }}>
              <img src="assets/main_phone.png" alt="" />
            </div>
            <div className="tag">
							챗gpt 기반 리뷰지니어스
            </div>
            <div className="mainTitleContainer">
              <h2 className="alignCenter" >
                <strong>AI 기반 리뷰 분석</strong>으로<br />
                빠른 쇼핑을 도와드려요
              </h2>
            </div>
          </div>
          <Link to="selectCategory">
            <Button widthType='small'>
						리뷰 지니어스 시작하기
            </Button>
          </Link>
        </Section>

        <Section>
          <h2 className='alignCenter'>
            상품 리뷰,<br />
            일일이 비교하기 힘드셨죠?
          </h2>
          <div className="mainImageContainer" style={{ width: "400px" }}>
            <img src="assets/main_imgbox_1.png" alt="" />
          </div>
        </Section>

        <Section>
          <h2 className='alignCenter'>
            AI 가 필요한 리뷰만<br />딱! 알아서 깔끔하게<br /><strong>분석하고 요약</strong>해드려요.
          </h2>
          <div className="mainImageContainer" style={{ width: "400px" }}>
            <img src="assets/main_imgbox_2.png" alt="" />
          </div>
        </Section>

        <Section>
          <h2 className='alignCenter'>
            AI 로 효율적인 쇼핑하기,<br />지금 바로 시작해 보세요!
          </h2>

          <Link to="selectCategory">
            <Button widthType='small'>
							리뷰 지니어스 시작하기
            </Button>
          </Link>
        </Section>


        <div className='mainBottom'>

          <Section className='shareContainer'>
            <div className='shareTitle alignCenter light'>
              더 많은 분들이 볼 수 있도록<br />친구에게 공유해 보세요!
            </div>

            <div className="shareButton">
              <img src="assets/asset_share.png" alt="" onClick={handleShare} />
              <div className="caption">공유하기</div>
            </div>
          </Section>

          <Section className='mainFooter'>
            <div className='footerTitle'>리뷰지니어스</div>
            <div className='footerText'>대표 이메일 : qudvkfzoqtyd1@gmail.com</div>
          </Section>

        </div>

      </HomeContainer>
    </IonPage>
  );
};

