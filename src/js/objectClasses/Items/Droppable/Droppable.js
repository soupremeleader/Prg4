import {NonPlayer} from "../../NonPlayer.js";

export class Droppable extends NonPlayer {
    child;
    hasDropped;
    constructor(name, width, height, spriteWidth, spriteHeight, resource, collisionType, child) {
        super(name, width, height, spriteWidth, spriteHeight, resource, collisionType);
        this.child = child;
        this.graphics.use(resource.toSprite());
        this.hasDropped = false;
    }

    interAct(engine, event) {
        if (!this.hasDropped) {
            engine.add(this.child);
            this.hasDropped = true;
        }
    }
}