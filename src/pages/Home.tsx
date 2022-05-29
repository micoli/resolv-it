import './App.scss';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonGrid, IonRow, IonCol, IonButton, IonImg
} from '@ionic/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import '@ionic/react/css/ionic-swiper.css';

import GamePreview from "../components/GamePreview/GamePreview";
import {useIonRouter} from "@ionic/react";
import {useEffect, useState} from "react";

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
    }, {
        target: "/games/invaders",
        previewUrl: "/assets/invadersPreview.png",
        title: "Invaders",
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
    const [displaySplash, setDisplaySplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplaySplash(false)
        }, 1200);
        return () => clearTimeout(timer);
    }, [displaySplash]);

    if(displaySplash){
        return (
            <IonPage className={"main homepage"}>
                <IonContent fullscreen>
                    <IonImg style={{width: "100%", paddingTop: 200}} src={"/assets/resol-vite.logo.png"}/>
                </IonContent>
            </IonPage>
        )
    }
    return (
        <IonPage className={"main homepage"}>
            <IonHeader>
                <IonImg style={{width:"50%"}} src={"/assets/resol-vite.logo.png"} />
            </IonHeader>
            <IonContent fullscreen>
                <hr />
                <h1>PLAY FOR SCIENCE,<br/>PLAY FOR GOOD !</h1>
                <hr />

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
                    <IonButton color="white" fill={"outline"} expand="block" onClick={onRegister}>S'inscire</IonButton>
                    <IonButton color="white" fill={"outline"} expand="block" onClick={onLogin}>Se connecter</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
