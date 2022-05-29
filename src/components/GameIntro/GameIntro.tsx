import {IonButton, IonContent, IonFooter, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar} from '@ionic/react';
import {ReactChild} from "react";
import IonPageHeader from "../IonPageHeader";

type GameIntroProps = {
    title: string;
    content: ReactChild;
    baseline: string;
    onClick(): any;
}
const GameIntro: React.FC<GameIntroProps> = ({title, content, baseline, onClick}) => {
    return (
        <IonPage className="main gameIntro">
            <IonPageHeader title={title} />
            <IonContent fullscreen>
                <div className="title">{title}</div>
                <hr/>
                <div className="baseline">{baseline}</div>
                <hr/>
                <div className="brief">{content}</div>
                <hr/>
                <div className="center">
                    <IonButton color="white" fill={"outline"} expand="block" onClick={onClick}>Lancer</IonButton>
                </div>
            </IonContent>
        </IonPage>
);
};

export default GameIntro;
