import './Home.css';
import {
    IonContent,
    IonPage,
    IonTitle,
    IonItem,
    IonLabel,
    IonButton, IonInput, IonHeader, useIonRouter
} from '@ionic/react';


const Registration: React.FC = () => {
    const router = useIonRouter();
    const onRegister = ()=>{
        router.push('/board', "forward", "push")
    }
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Creer un compte</IonTitle>
            </IonHeader>
            <IonContent>
                <form className="ion-padding">
                    <IonItem>
                        <IonLabel position="floating">Username</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password"/>
                    </IonItem>
                    <IonButton onClick={onRegister} className="ion-margin-top">
                        Je m'engage
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Registration;
