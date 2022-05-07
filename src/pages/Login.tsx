import './Home.css';
import {
    IonContent,
    IonPage,
    IonTitle,
    IonItem,
    IonLabel,
    IonButton, IonInput, IonHeader, useIonRouter
} from '@ionic/react';


const Login: React.FC = () => {
    const router = useIonRouter();
    const onLogin = ()=>{
        router.push('/board', "forward", "push")
    }
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Connexion</IonTitle>
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
                    <IonButton onClick={onLogin} className="ion-margin-top">
                        J'accede a mon board
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Login;
