import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>리뷰 요약</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        안녕하세여 리뷰 요약이빈다
      </IonContent>
    </IonPage>
  );
};

export default Home;
