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
        const toggleTile = (tile) =>{
            if (tile.fillColor === 0x00ffff) {
                tile.setFillStyle(0xffff00, 1)
            } else {
                tile.setFillStyle(0x00ffff, 1)
            }
        }
        var board = this.rexBoard.add.board({
            grid: {
                gridType: 'hexagonGrid',
                x: 20,
                y: 20,
                size: 28,
                staggeraxis: 'y',
                staggerindex: 'odd'
            }
        })
            .setInteractive()
            .on('tiledown', function (pointer, tileXY) {
                var tile = board.tileXYZToChess(tileXY.x, tileXY.y, 0);
                if (tile) {
                    print.text = `${tileXY.x},${tileXY.y}`;
                    toggleTile(tile);
                }
            })
            .on('tileover', function (pointer, tileXY) {
                var tile = board.tileXYZToChess(tileXY.x, tileXY.y, 0);
                if (tile) {
                    print.text = `${tileXY.x},${tileXY.y}`;
                    toggleTile(tile);
                    tile.setAlpha(.5)
                }
            })
            .on('tileout', function (pointer, tileXY) {
                var tile = board.tileXYZToChess(tileXY.x, tileXY.y, 0);
                if (tile) {
                    print.text = `${tileXY.x},${tileXY.y}`;
                    toggleTile(tile);
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
            rexBoardAdd.shape(board, x, y, 0, Random(0,0xffffff));
        })

        this.rexBoard.createTileTexture(board, 'tile', 0xffffff);
    }

    update() { }
}

export default Game;
