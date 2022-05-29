import {
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonButton, IonInput, useIonRouter
} from '@ionic/react';
import IonPageHeader from "../components/IonPageHeader";


const Registration: React.FC = () => {
    const router = useIonRouter();
    const onRegister = ()=>{
        router.push('/board', "forward", "push")
    }
    return (
        <IonPage className="main" >
            <IonPageHeader title={""}/>
            <IonContent>
                <form className="ion-padding">
                    <h1>
                        Créer un compte
                    </h1>
                    <IonItem>
                        <IonLabel position="floating">Username</IonLabel>
                        <IonInput/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput type="password"/>
                    </IonItem>
                    <IonButton className="ion-margin-top"color="white" fill={"outline"} expand="block" onClick={onRegister}>
                        Je m'engage
                    </IonButton>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Registration;
