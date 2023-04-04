import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <IonPage class="home">
      <IonContent fullscreen>
        안녕하세여 리뷰 요약이빈다
      </IonContent>
    </IonPage>
  );
};

