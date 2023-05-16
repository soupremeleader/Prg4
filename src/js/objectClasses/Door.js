import {NonPlayer} from "./NonPlayer.js";

export class Door extends NonPlayer {
    doorLeadsToScene
    constructor(newWidth, newHeight, doorLeadsToScene) {
        super(newWidth, newHeight);
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