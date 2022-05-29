import {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonButton, IonInput, useIonRouter
} from '@ionic/react';
import IonPageHeader from "../components/IonPageHeader";


const Login: React.FC = () => {
    const router = useIonRouter();
    const onLogin = ()=>{
        router.push('/board', "forward", "push")
    }
    return (
        <IonPage>
            <IonPageHeader title={"Connexion"}/>
            <IonContent>
                <form className="ion-padding">
                    <h1>
                        Connexion
                    </h1>
                    <IonItem>
                        <IonLabel position="floating">Username</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password"/>
                    </IonItem>
                    <IonButton className="ion-margin-top"color="white" fill={"outline"} expand="block" onClick={onLogin}>
                        J'accede a mon board
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Login;
