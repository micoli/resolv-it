import Phaser from 'phaser'

class Game extends Phaser.Scene{
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() { }

    create() {
        var print = this.add.text(0, 0, 'Click any tile');
        var board = this.rexBoard.add.board({
            grid: {
                gridType: 'hexagonGrid',
                x: 60,
                y: 60,
                size: 30,
                staggeraxis: 'y',
                staggerindex: 'odd'
            }
        })
            .setInteractive()
            .on('tiledown', function (pointer, tileXY) {
                print.text = `${tileXY.x},${tileXY.y}`;
            })
            .on('tileover', function (pointer, tileXY) {
                var tile = board.tileXYZToChess(tileXY.x, tileXY.y, 0);
                if (tile) {
                    tile.setAlpha(.5)
                }
            })
            .on('tileout', function (pointer, tileXY) {
                var tile = board.tileXYZToChess(tileXY.x, tileXY.y, 0);
                if (tile) {
                    tile.setAlpha(1)
                }
            })

        var tiles = board.fit(this.rexBoard.hexagonMap.hexagon(board, 4));

        var graphics = this.add.graphics({
            lineStyle: {
                width: 2,
                color: '0xffffff',
                alpha: 1
            }
        });
        var worldXY;
        const Random = Phaser.Math.Between;
        var rexBoardAdd = this.rexBoard.add;

        tiles.forEach(({ x, y }) => {
            graphics.strokePoints(board.getGridPoints(x, y, true), true);

            worldXY = board.tileXYToWorldXY(x, y);
            rexBoardAdd.shape(board, x, y, 0, Random(0, 0xffffff));
        })

        this.rexBoard.createTileTexture(board, 'tile', 0xffffff);
    }

    update() { }
}

export default Game;
