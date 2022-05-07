import {IonButton, IonContent, IonFooter, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar} from '@ionic/react';
import GameIntro from "../../../components/GameIntro/GameIntro";
import {Fragment, useState} from "react";
import YoutubeEmbed from "../../../components/YoutubeEmbed";
import GameResult from "../../../components/GameResult/GameResult";
import './QuantumMinds.css';

const QuantumMinds: React.FC = () => {
    const [displayMode, setDisplayMode] = useState('INTRO');
    const title: string = 'Quantum Minds';
    const videoId: string = '7iuT3h0Zx18';
    if (displayMode === 'INTRO') {
        return (
            <GameIntro
                title={title}
                content={(<Fragment>
                    <h2>Enjeu</h2>
                    <div>Etude de la perception humaine des couleurs et des nuances.</div>
                    <h2>Briefing mission</h2>
                    <div>Franchir la porte dont la couleur se rapproche le plus de celle du ciel.</div>
                </Fragment>)}
                baseline="Resoudre cette enigme pour dejouer la mécanique infernale"
                onClick={() => setDisplayMode('GAME')}
            />
        );
    }

    if (displayMode === 'GAME_RESULT') {
        return (
            <GameResult
                title={title}
                gameTime={231}
                ranking={133}
                rankingBase={153786}
                dataImpact={"1.5 Mo de données récoltés"}
                collectedPoints={6}
            />
        );
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{title}</IonTitle>
                    <IonRouterLink routerLink={"/"}>Home</IonRouterLink>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="center">
                <YoutubeEmbed embedId={videoId}/>
                <div className={"center"}>
                    <IonButton color="light" onClick={() => setDisplayMode('GAME_RESULT')}>Fin de jeu</IonButton>
                </div>
            </IonContent>
            <IonFooter>
            </IonFooter>
        </IonPage>
    );
};

export default QuantumMinds;
