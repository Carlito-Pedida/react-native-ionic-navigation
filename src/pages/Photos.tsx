import { IonCol, IonContent, IonImg, IonPage, IonRow } from "@ionic/react";
import React from "react";
import "./Photos.css";
import ProfileHeader from "../components/ProfileHeader";

const Photos: React.FC = () => {
  return (
    <IonPage>
      <ProfileHeader name={"John Smith"} email={"john.smith@email.com"} />
      <IonContent>
        <div className="gallery-wrap">
          <IonRow>
            <IonCol id="gallery" size-xs="6">
              <IonImg src="https://images.unsplash.com/photo-1584221428599-35de2deb7ab1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MTA4MHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" />
              <IonImg src="https://images.unsplash.com/photo-1528988296565-3cd70e150617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDEwODBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" />
              <IonImg src="https://images.unsplash.com/photo-1628961189347-d3874538bc75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDEwODBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" />
              <IonImg src="https://media.istockphoto.com/id/820952768/photo/griesgletscher.webp?s=170667a&w=0&k=20&c=DFN4yPrlai-u9xVf4U0BoT09Q3KyjKBM2kJM_rOesdY=" />
              <IonImg src="https://media.istockphoto.com/id/1331754814/photo/amazing-hiking-day-to-the-top-of-the-whistlers-peak-above-jasper-in-the-national-park.webp?s=170667a&w=0&k=20&c=tqpPJ7FRbu9ZRj4LjqRJNpyEl-Qn0QdpawPrTfIoSSM=" />
            </IonCol>
            <IonCol id="gallery" size-xs="6">
              <IonImg src="https://images.unsplash.com/photo-1567712282264-021d8259e0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTA4MHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" />
              <IonImg src="https://media.istockphoto.com/id/1331754814/photo/amazing-hiking-day-to-the-top-of-the-whistlers-peak-above-jasper-in-the-national-park.webp?s=170667a&w=0&k=20&c=tqpPJ7FRbu9ZRj4LjqRJNpyEl-Qn0QdpawPrTfIoSSM=" />
              <IonImg src="https://plus.unsplash.com/premium_photo-1674500770994-2b22180e05be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60" />
              <IonImg src="https://plus.unsplash.com/premium_photo-1674500771072-60edfa7f80cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" />
              <IonImg src="https://images.unsplash.com/photo-1567712282264-021d8259e0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTA4MHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" />
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Photos;
