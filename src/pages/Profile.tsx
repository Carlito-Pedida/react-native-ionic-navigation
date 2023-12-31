import { IonContent, IonPage } from "@ionic/react";

import "./Profile.css";
import ProfileHeader from "../components/ProfileHeader";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ProfileHeader name="John Smith" email="john.smith@email.com" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
