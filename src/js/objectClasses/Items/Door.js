import {NonPlayer} from "../NonPlayer.js";

export class Door extends NonPlayer {
    doorLeadsToScene
    constructor(name, width, height, spriteWidth, spriteHeight,  collisionType, doorLeadsToScene) {
        super(name, width, height, spriteWidth, spriteHeight, collisionType);
        this.doorLeadsToScene = doorLeadsToScene;
    }

    onInitialize(engine) {
        super.onInitialize(engine);
    }

    interAct(engine, event) {
        console.log(engine.currentScene);
        engine.goToScene(this.doorLeadsToScene);
    }
}