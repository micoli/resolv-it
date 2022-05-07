import {Redirect, Route} from 'react-router-dom';
import {
    IonApp,
    IonRouterOutlet,
    IonTabBar,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import Home from './pages/Home';

import '@ionic/react/css/core.css';

import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Hexxed from "./pages/games/Hexxed/Hexxed";
import Board from "./pages/Board";
import QuantumMinds from "./pages/games/QuantumMinds/QuantumMinds";
import Apetopia from "./pages/games/Apetopia/Apetopia";

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/games/hexxed">
                        <Hexxed/>
                    </Route>
                    <Route exact path="/games/apetopia">
                        <Apetopia/>
                    </Route>
                    <Route exact path="/games/quantumMinds">
                        <QuantumMinds/>
                    </Route>
                    <Route path="/registration">
                        <Registration/>
                    </Route>
                    <Route path="/board">
                        <Board/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
