import './Home.css';
import {
    IonContent,
    IonPage,
    IonTitle,
    IonButton, IonHeader, useIonRouter
} from '@ionic/react';


const Board: React.FC = () => {
    const router = useIonRouter();
    const onHome = ()=>{
        router.push('/home', "forward", "push")
    }
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Board</IonTitle>
            </IonHeader>
            <IonContent>
                <h1>Vous avez fait gagner 12 ans, 4 mois et 20 heures à la recherche !</h1>
                <div className="center">
                    <IonButton color="light" onClick={onHome}>Home</IonButton>
                </div>
                <h2>Mes datas</h2>
                <ul>
                    <li>Juliette MAC KINSEY</li>
                    <li>20 ans</li>
                    <li>Célibataire</li>
                    <li>Etudiante</li>
                    <li>28 Rue des Geeks<br/>45 783 INFLUENCEUSE</li>
                    <li>Myope</li>
                    <li>Non sportive</li>
                    <li>Vos centres d’intérêts : climat, biologie du cancer</li>
                </ul>
                <h2>Mon Implication</h2>
                <div>
                    <ul>
                        <li>Classement global : 5698 / 245 983</li>
                        <li>Communauté : 15 amis dont 7 parrainages</li>
                        <li>Jeux finalisés : 10</li>
                        <li>Jeux non finalisés :3 <IonButton color="light" >Continuer</IonButton></li>
                        <li>Votes réalisés : 3</li>
                    </ul>
                    <h3>DATA</h3>
                    <ul>
                        <li>Data générées : 16 Mo</li>
                        <li>Data traitées : 50 Mo</li>
                    </ul>
                </div>
                <h2>Titres</h2>
                <ul>
                    <li>
                        <h3>Augmentation des tempêtes de sable</h3>
                        <div>En Irak, il y a une augmentation de 50% du nombre de tempêtes de sable dans l’année. En 2000, 20j de tempêtes de sable. 2022 :  50j ! lire plus...</div>
                        <div>Thématique: Climat</div>
                    </li>
                    <li>
                        <h3>Augmentation des tempêtes de sable</h3>
                        <div>En France, entre 2000 et 2020, une augmentation de 20% des cancers de la tyroïde a été mesuré. Une cause serait le nuage de tchernobyl ! lire plus...</div>
                        <div>Thématique: Biologie cancer</div>
                    </li>
                    <li>
                        <h3>Corrélation entre jeu d’argent et consommation de tabac</h3>
                        <div>En France, 15% des joueurs à risque consomment quotidiennement du tabac. Est-ce suffisant pour en déduire une corrélation ? lire plus...</div>
                        <div>Thématique: Science comportementale</div>
                    </li>
                </ul>
                <div className="center">
                    <IonButton color="light" onClick={onHome}>Home</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Board;
