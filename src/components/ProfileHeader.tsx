import {
  IonButton,
  IonCol,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./ProfileHeader.css";

interface ContainerProps {
  name: string;
  email: string;
}

const ProfileHeader: React.FC<ContainerProps> = ({ name, email }) => {
  return (
    <>
      <div id="container">
        <IonHeader>
          <IonToolbar color={"primary"}>
            <IonTitle id="user-toolbar">User Profile</IonTitle>
          </IonToolbar>

          <div className="profcard">
            <img
              className="profimg"
              src="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
            ></img>
            <div className="name">
              <strong>{name}</strong>
              <p>{email}</p>
            </div>
          </div>
        </IonHeader>
      </div>
      <IonRow id="nav">
        <IonCol>
          <IonButton routerLink="/profile/bio" fill="clear">
            Bio
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton routerLink="/profile/posts" fill="clear">
            Posts
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton routerLink="/profile/friends" fill="clear">
            Friends
          </IonButton>
        </IonCol>
        <IonCol>
          <IonButton routerLink="/profile/photos" fill="clear">
            Photos
          </IonButton>
        </IonCol>
      </IonRow>
    </>
  );
};

export default ProfileHeader;
