import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar,
    useIonRouter
} from '@ionic/react';
import './GameResult.css';

type GameResultProps = {
    title: string;
    gameTime: number;
    ranking: number;
    rankingBase: number;
    dataImpact: string;
    collectedPoints: number;
}
const GameResult: React.FC<GameResultProps> =
    ({
         title,
         gameTime,
         ranking,
         rankingBase,
         dataImpact,
         collectedPoints,
     }) => {
        const router = useIonRouter();
        const onRegister = ()=>{
            router.push('/registration', "forward", "push")
        }
        const onLogin = ()=>{
            router.push('/login', "forward", "push")
        }
        return (
            <IonPage className="gameResult">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{title}</IonTitle>
                        <IonRouterLink routerLink={"/"}>Home</IonRouterLink>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <div className="title">{title}</div>
                    <div className="background">
                        <h2>Temps de jeu</h2>
                        <div>{gameTime} secondes</div>

                        <h2>Classement</h2>
                        <div>{ranking}/{rankingBase}</div>

                        <h2>Impact sur la science</h2>
                        <div>{dataImpact}</div>

                        <h2>Points Resol'vite</h2>
                        <div>{collectedPoints}</div>
                    </div>
                    <div className={"center"}>
                        <IonButton color="light" onClick={onRegister}>S'inscire</IonButton>
                        <IonButton color="light" onClick={onLogin}>Se connecter</IonButton>
                    </div>
                </IonContent>
            </IonPage>
        );
    };

export default GameResult;
