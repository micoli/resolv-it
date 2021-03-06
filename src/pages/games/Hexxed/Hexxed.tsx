import {
    IonButton,
    IonContent,
    IonFooter,
    IonPage,
    useIonViewWillLeave
} from '@ionic/react';
import GameIntro from "../../../components/GameIntro/GameIntro";
import {Fragment, useEffect, useRef, useState} from "react";
import GameResult from "../../../components/GameResult/GameResult";
import Game from "./Game";
import {GameInstance, IonPhaser} from "@ion-phaser/react";
import Phaser from "phaser";
import BoardPlugin from "phaser3-rex-plugins/plugins/board-plugin";
import IonPageHeader from "../../../components/IonPageHeader";

const gameConfig: GameInstance = {
    type: Phaser.AUTO,
    parent: 'phaser-hexxed',
    width: 400,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Game,
    plugins: {
        scene: [{
            plugin: BoardPlugin,
            mapping: 'rexBoard'
        }]
    }
}

const Hexxed: React.FC = () => {
    const gameRef = useRef<HTMLIonPhaserElement | any>(null)
    const [game, setGame] = useState<GameInstance>()
    const [initialize, setInitialize] = useState(false)
    const [displayMode, setDisplayMode] = useState('INTRO');

    const destroy = () => {
        gameRef.current?.destroy()
        setInitialize(false)
        setGame(undefined)
    }

    useEffect(() => {
        if (initialize) {
            console.log('init', gameConfig)
            const game = Object.assign({}, gameConfig);
            // @ts-ignore
            game.plugins.scene[0].key = (Math.random() + 1).toString(36).substring(7);
            setGame(game)
        }
    }, [initialize])

    useEffect(() => {
        return () => {
            destroy()
        }
    }, []);
    useIonViewWillLeave(destroy)
    const title: string = 'Hexxed';

    if (displayMode === 'INTRO') {
        return (
            <GameIntro
                title={title}
                content={(<Fragment>
                    <h2>Enjeu</h2>
                    <div>Etude de la perception humaine des couleurs et des nuances.</div>
                    <hr/>
                    <h2>Briefing mission</h2>
                    <div>Franchir la porte dont la couleur se rapproche le plus de celle du ciel.</div>
                </Fragment>)}
                baseline="Resoudre cette enigme pour dejouer la m??canique infernale"
                onClick={() => {
                    setDisplayMode('GAME')
                    setTimeout(() => setInitialize(true), 200);
                }}
            />
        );
    }

    if (displayMode === 'GAME_RESULT') {
        return (
            <GameResult
                title={title}
                gameTime={123}
                ranking={12333}
                rankingBase={153786}
                dataImpact={"1 Mo de donn??es r??colt??s"}
                collectedPoints={12}
            />
        );
    }

    return (
        <IonPage className="main">
            <IonPageHeader title={title}/>
            <IonContent fullscreen className="center black-background">
                {initialize && (<div className="center">
                    <IonButton
                        color="white"
                        fill={"outline"}
                        expand="block"
                        onClick={() => setDisplayMode('GAME_RESULT')}
                    >
                        Fin de jeu
                    </IonButton>
                </div>)}
                <div id="phaser-hexxed"></div>
                {initialize && <IonPhaser ref={gameRef} game={game} initialize={initialize}/>}
            </IonContent>
            <IonFooter>
            </IonFooter>
        </IonPage>
    );
}

export default Hexxed;
