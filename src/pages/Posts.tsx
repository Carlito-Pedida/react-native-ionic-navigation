import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonImg,
  IonPage
} from "@ionic/react";
import React from "react";
import ProfileHeader from "../components/ProfileHeader";

const Posts: React.FC = () => {
  return (
    <IonPage>
      <ProfileHeader name={"John Smith"} email={"john.smith@email.com"} />
      <IonContent>
        <div>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>My Trip to Maui</IonCardTitle>
              <IonCardSubtitle>May 12 2023</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonImg
                alt="Silhouette of mountains"
                src="https://images.unsplash.com/photo-1556206079-747a7a424d3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hdWl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              />
              Volutpat odio facilisis mauris sit. Facilisis sed odio morbi quis
              commodo odio. Auctor neque vitae tempus quam. Quam pellentesque
              nec nam aliquam sem et tortor consequat. Amet massa vitae tortor
              condimentum.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>My Daughter's 16th Birthday</IonCardTitle>
              <IonCardSubtitle>March 25 2023</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonImg
                alt="Silhouette of mountains"
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
              />
              Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Tortor
              vitae purus faucibus ornare suspendisse sed nisi. At quis risus
              sed vulputate odio ut enim. Sit amet facilisis magna etiam. Ut
              enim blandit volutpat maecenas volutpat.
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Christmas Eve 2022</IonCardTitle>
              <IonCardSubtitle>December 24, 2022</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <IonImg
                alt="Silhouette of mountains"
                src="https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
              />
              Here's a small text description for the card content. Nothing
              more, nothing less.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Posts;
