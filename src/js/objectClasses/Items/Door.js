import {NonPlayer} from "../NonPlayer.js";

export class Door extends NonPlayer {
    doorLeadsToScene
    constructor(name, width, height, spriteWidth, spriteHeight,  resource, collisionType, doorLeadsToScene) {
        super(name, width, height, spriteWidth, spriteHeight, resource, collisionType);
        this.doorLeadsToScene = doorLeadsToScene;
        this.graphics.use(resource.toSprite());
    }

    onInitialize(engine) {
        super.onInitialize(engine);
    }

    interAct(engine, event) {
        console.log(engine.currentScene);
        engine.goToScene(this.doorLeadsToScene);
    }
}