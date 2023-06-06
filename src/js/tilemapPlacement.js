import {Actor, CollisionType, Vector} from "excalibur";
import {Resources} from "./resources.js";

function placeTiles(_engine, scene) {
    for (let i = 0; i < 16; i++) {
        if (i > 8 && i < 10) {
            placeTile(_engine, scene, i, 1);
            placeTile(_engine, scene, (i + .5), 1);

        } else if (i === 8) {
            placeTile(_engine, scene, i, 3);
            placeTile(_engine, scene, i, 2);

        } else if (i === 10){
            placeTile(_engine, scene, (i + .5), 3);
            placeTile(_engine, scene, (i + .5), 2);

        } else {
            placeTile(_engine, scene, (i + .5), 3);
        }
    }

    placeTile(_engine, scene, 8.75, 7.25);

    for (let i = 8.25; i < 11.25; i++) {
        if (i < 9.25) {
            placeTile(_engine, scene, i, 7);
        } else {
            placeTile(_engine, scene, i, 7.5);
        }
    }

    for (let i = 10.75; i < 16; i++) {
        placeTile(_engine, scene, i, 4.5);
        placeTile(_engine, scene, i, 4.75);
    }

    placeTile(_engine, scene, 11.25, 4.75);
    placeTile(_engine, scene, 12, 5);

    // placeTile(_engine, scene, 1.66, 5.5);

}

function placeTile(_engine, scene, x, y) {
    let tileBlock = new Actor({collisionType: CollisionType.Fixed, height: Resources.TileBlock.height, width: Resources.TileBlock.width});
    tileBlock.pos = new Vector(x * Resources.TileBlock.width, (y * Resources.TileBlock.height));
    if (_engine.isDebug) {
        tileBlock.graphics.use(Resources.TileBlock.toSprite());
    }
    scene.add(tileBlock);
}

export { placeTiles }

