import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  gridSharp,
  imageOutline,
  peopleSharp,
  personSharp
} from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Bio from "./pages/Bio";
import Posts from "./pages/Posts";
import Friends from "./pages/Friends";
import Photos from "./pages/Photos";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/profile/bio">
            <Bio />
          </Route>
          <Route exact path="/profile/posts">
            <Posts />
          </Route>
          <Route path="/profile/friends">
            <Friends />
          </Route>
          <Route path="/profile/photos">
            <Photos />
          </Route>
          <Route exact path="/">
            <Redirect to="/profile/bio" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/profile/bio">
            <IonIcon aria-hidden="true" icon={personSharp} />
            <IonLabel>Bio</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/profile/posts">
            <IonIcon aria-hidden="true" icon={gridSharp} />
            <IonLabel>Posts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/profile/friends">
            <IonIcon aria-hidden="true" icon={peopleSharp} />
            <IonLabel>Friends</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/profile/photos">
            <IonIcon aria-hidden="true" icon={imageOutline} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
