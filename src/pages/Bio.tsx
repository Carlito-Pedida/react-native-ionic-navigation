import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./Bio.css";
import ProfileHeader from "../components/ProfileHeader";

const Bio = () => (
  <IonPage>
    <ProfileHeader name={"John Smith"} email={"john.smith@email.com"} />

    <IonContent className="ion-padding" id="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non tellus orci ac
        auctor augue mauris augue. Dictum non consectetur a erat nam at. Odio eu
        feugiat pretium nibh ipsum consequat. Id ornare arcu odio ut sem. Mattis
        aliquam faucibus purus in.
      </p>
      <p>
        Volutpat odio facilisis mauris sit. Facilisis sed odio morbi quis
        commodo odio. Auctor neque vitae tempus quam. Quam pellentesque nec nam
        aliquam sem et tortor consequat. Amet massa vitae tortor condimentum.
        Sed nisi lacus sed viverra tellus in hac habitasse platea. Fames ac
        turpis egestas maecenas.
      </p>

      <p>
        Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Tortor vitae
        purus faucibus ornare suspendisse sed nisi. At quis risus sed vulputate
        odio ut enim.
      </p>

      <p>
        In metus vulputate eu scelerisque felis imperdiet proin fermentum. Amet
        nisl purus in mollis nunc sed. Fringilla urna porttitor rhoncus dolor
        purus non enim praesent. Gravida arcu ac tortor dignissim convallis
        aenean et tortor at. Et sollicitudin ac orci phasellus. Ante in nibh
        mauris cursus mattis molestie. Aliquet nibh praesent tristique magna.
        Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.
      </p>
    </IonContent>
  </IonPage>
);
export default Bio;
