import { IonContent, IonItem, IonList, IonPage, IonTitle } from "@ionic/react";
import "./Friends.css";
import React from "react";
import ProfileHeader from "../components/ProfileHeader";

const Friends: React.FC = () => {
  return (
    <IonPage>
      <ProfileHeader name={"John Smith"} email={"john.smith@email.com"} />
      <IonContent className="ion-padding">
        <div>
          <IonList className="friends">
            <IonItem>
              <img
                className="avatar"
                alt="Silhouette of a person's head"
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8WU5PdW9YLVNIMUF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              />

              <IonTitle>Gearalt Avrashin</IonTitle>
            </IonItem>
            <IonItem>
              <img
                className="avatar"
                alt="Silhouette of a person's head"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
              />
              <IonTitle>Kennan Scaice</IonTitle>
            </IonItem>
            <IonItem>
              <img
                className="avatar"
                alt="Silhouette of a person's head"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODUzNjY5M3x8ZW58MHx8fHx8&dpr=1&auto=format&fit=crop&w=294&h=294&q=60"
              />
              <IonTitle>Diahann Lewsam</IonTitle>
            </IonItem>
            <IonItem>
              <img
                className="avatar"
                alt="Silhouette of a person's head"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
              />
              <IonTitle>Dag Lambdean</IonTitle>
            </IonItem>
            <IonItem>
              <img
                className="avatar"
                alt="Silhouette of a person's head"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8SDBaMjVFN2FQN0V8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&h=294&q=60"
              />
              <IonTitle>Elianora Silcock</IonTitle>
            </IonItem>
            <IonItem>
              <img
                className="avatar"
                alt="Silhouette of a person's head"
                src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8WU5PdW9YLVNIMUF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
              />
              <IonTitle>Darius Gaylor</IonTitle>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Friends;
