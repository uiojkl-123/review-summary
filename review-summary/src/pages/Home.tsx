import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.scss';
import { Container } from '../theme/theme';


export const Home: React.FC = () => {
  return (
    <IonPage class="home">
      <IonContent fullscreen>
				<Container>
        	안녕하세여 리뷰 요약이빈다
				</Container>
      </IonContent>
    </IonPage>
  );
};

