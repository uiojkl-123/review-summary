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
`;

export const Home: React.FC = () => {
  return (
    <IonPage className="home">
      <HomeContainer>

        <Section>
          <div className="mainTopContainer">
            <div className="mainImageContainer ">
              <img src="assets/main_phone.png" alt="" />
            </div>

            <div className="tag">
              챗 GPT 땡땡땡, 앱 이름
            </div>

            <div className="mainTitleContainer">
              <h2 className="alignCenter" >
                <strong>AI 기반 리뷰 분석</strong>으로<br />
                빠른 쇼핑을 도와드려요
              </h2>
              <div className="description">
                앱에 대한 설명을 간략하게 한줄로 추가설명합니다.
              </div>
            </div>

          </div>
          <Link to="selectCategory">
            <Button widthType='small'>
              앱 이름 시작하기
            </Button>
          </Link>

        </Section>


        <Section>
          <h2 className='alignCenter'>
            상품 리뷰,<br />
            일일이 비교하기 힘드셨죠?
          </h2>

          <div className="mainImageContainer">
            <img src="assets/main_imgbox_1.png" alt="" />
          </div>
        </Section>

        <Section>
          <h2 className='alignCenter'>
            AI 가 필요한 리뷰만<br />딱! 알아서 깔끔하게<br /><strong>분석하고 요약</strong>해드려요.
          </h2>

          <div className="mainImageContainer">
            <img src="assets/main_imgbox_2.png" alt="" />
          </div>
        </Section>

        <Section>
          <h2 className='alignCenter'>
            AI 로 효율적인 쇼핑하기,<br />지금 바로 시작해 보세요!
          </h2>

          <Link to="selectCategory">
            <Button widthType='small'>
              앱 이름 시작하기
            </Button>
          </Link>
        </Section>

      </HomeContainer>
    </IonPage>
  );
};

