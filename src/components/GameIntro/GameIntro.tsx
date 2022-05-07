import {IonButton, IonContent, IonFooter, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar} from '@ionic/react';
import './GameIntro.css';
import {ReactChild} from "react";

type GameIntroProps = {
    title: string;
    content: ReactChild;
    baseline: string;
    onClick(): any;
}
const GameIntro: React.FC<GameIntroProps> = ({title, content, baseline, onClick}) => {
    return (
        <IonPage className="gameIntro">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                    <IonRouterLink routerLink={"/"}>Home</IonRouterLink>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="title">{title}</div>
                <div className="brief">
                    {content}
                </div>
                <div className="center">
                    <IonButton color="light" onClick={onClick}>Lancer</IonButton>
                </div>
            </IonContent>
            <IonFooter>
                <div className="baseline">{baseline}</div>
            </IonFooter>
        </IonPage>
);
};

export default GameIntro;
