import {NonPlayer} from "../../NonPlayer.js";

export class Collectable extends NonPlayer {
    constructor(name, width, height, spriteWidth, spriteHeight,  resource, collisionType) {
        super(name, width, height, spriteWidth, spriteHeight,  resource, collisionType);
        this.graphics.use(resource.toSprite());
    }

    interAct(engine, event) {
        localStorage.setItem(this.name, "true");
        this.kill();
        console.log(localStorage);
        console.log(engine.currentScene.actors)
    }
}