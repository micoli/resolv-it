import {
    IonHeader,
    IonImg, IonRouterLink, IonTitle
} from '@ionic/react';

type PageHeaderProps = {
    title: string;
}

const IonPageHeader: React.FC<PageHeaderProps> = ({title}) => {
    return (
        <IonHeader className={"page-header"}>
            <IonRouterLink routerLink={"/"}>
                <IonImg style={{width:"33%"}} src={"/assets/resol-vite.logo.png"} />
            </IonRouterLink>
            <IonTitle>{title}</IonTitle>
        </IonHeader>
    );
};

export default IonPageHeader;
