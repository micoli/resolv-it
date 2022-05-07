import './Home.css';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonGrid, IonRow, IonCol, IonButton
} from '@ionic/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import '@ionic/react/css/ionic-swiper.css';

import GamePreview from "../components/GamePreview/GamePreview";
import {useIonRouter} from "@ionic/react";

const Home: React.FC = () => {
    const games = [{
        target: "/games/hexxed",
        previewUrl: "/assets/hexxedPreview.png",
        title: "Hexxed",
    }, {
        target: "/games/apetopia",
        previewUrl: "/assets/apetopiaPreview.png",
        title: "Apetopia",
    }, {
        target: "/games/quantumMinds",
        previewUrl: "/assets/quantumMindsPreview.png",
        title: "Quantum Minds",
    }]
    const router = useIonRouter();
    const onRegister = ()=>{
        router.push('/registration', "forward", "push")
    }
    const onLogin = ()=>{
        router.push('/login', "forward", "push")
    }

    const onGameClick = (target:string) => {
        router.push(target, "forward", "push");
    }
    return (
        <IonPage className={"homepage"}>
            <IonHeader>
            </IonHeader>
            <IonContent fullscreen>
                <h1>Resol'Vite</h1>
                <h2>PLAY FOR SCIENCE, PLAY FOR GOOD !</h2>
                <IonGrid>
                    <IonRow>
                        {games.map((game, index) =>
                            <IonCol sizeLg="4" sizeMd="4" sizeXs="6" key={game.target}>
                                <GamePreview
                                    previewUrl={game.previewUrl}
                                    title={game.title}
                                    onClick={()=>onGameClick(game.target)}
                                />
                            </IonCol>
                        )}
                    </IonRow>
                </IonGrid>
                <div className={"center"}>
                    <IonButton color="light" onClick={onRegister}>S'inscire</IonButton>
                    <IonButton color="light" onClick={onLogin}>Se connecter</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
