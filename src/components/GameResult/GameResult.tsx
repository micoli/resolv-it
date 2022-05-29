import {
    IonButton,
    IonContent,
    IonPage,
    useIonRouter
} from '@ionic/react';
import IonPageHeader from "../IonPageHeader";

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
            <IonPage className="main gameResult">
                <IonPageHeader title={""} />
                <IonContent fullscreen>
                    <div className="title">{title}</div>
                    <div className="brief">
                        <h2>Temps de jeu</h2>
                        <div>{gameTime} secondes</div>
                        <hr/>

                        <h2>Classement</h2>
                        <div>{ranking}/{rankingBase}</div>
                        <hr/>

                        <h2>Impact sur la science</h2>
                        <div>{dataImpact}</div>
                        <hr/>

                        <h2>Points Resol'vite</h2>
                        <div>{collectedPoints}</div>
                        <hr/>
                    </div>
                    <div className={"center"}>
                        <IonButton color="white" fill={"outline"} expand="block" onClick={onRegister}>S'inscrire</IonButton>
                        <IonButton color="white" fill={"outline"} expand="block" onClick={onLogin}>Se connecter</IonButton>
                    </div>
                </IonContent>
            </IonPage>
        );
    };

export default GameResult;
