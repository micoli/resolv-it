import {IonImg} from '@ionic/react';
import './GamePreview.css';

type GamePreviewProps = {
    previewUrl: string;
    title: string;
    onClick(): any;
}
const GamePreview: React.FC<GamePreviewProps> = ({title, previewUrl, onClick}) => {
    return (
        <div onClick={onClick}>
            <IonImg className="preview" src={previewUrl} />
            <div className="title">{title}</div>
        </div>
    );
};

export default GamePreview;
