import Phaser, {Scene} from "phaser";

export default class Game extends Scene {
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('ball', '../../../assets/luckyclover.png');
    }

    create ()
    {
        this.group1 = this.add.group({ key: 'ball', frameQuantity: 24 });
        this.group2 = this.add.group({ key: 'ball', frameQuantity: 16 });
        this.group3 = this.add.group({ key: 'ball', frameQuantity: 12 });
        this.group4 = this.add.group({ key: 'ball', frameQuantity: 8 });

        this.circle1 = new Phaser.Geom.Circle(200, 300, 200);
        this.circle2 = new Phaser.Geom.Circle(200, 300, 160);
        this.circle3 = new Phaser.Geom.Circle(200, 300, 120);
        this.circle4 = new Phaser.Geom.Circle(200, 300, 80);

        Phaser.Actions.PlaceOnCircle(this.group1.getChildren(), this.circle1);
        Phaser.Actions.PlaceOnCircle(this.group2.getChildren(), this.circle2);
        Phaser.Actions.PlaceOnCircle(this.group3.getChildren(), this.circle3);
        Phaser.Actions.PlaceOnCircle(this.group4.getChildren(), this.circle4);
    }

    update ()
    {
        Phaser.Actions.RotateAroundDistance(this.group1.getChildren(), this.circle1, -0.008, this.circle1.radius);
        Phaser.Actions.RotateAroundDistance(this.group2.getChildren(), this.circle2, 0.015, this.circle2.radius);
        Phaser.Actions.RotateAroundDistance(this.group3.getChildren(), this.circle3, -0.020, this.circle3.radius);
        Phaser.Actions.RotateAroundDistance(this.group4.getChildren(), this.circle4, 0.005, this.circle4.radius);
    }
}
