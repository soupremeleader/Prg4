import {Collectable} from "./Collectable.js";

export class FallenStar extends Collectable {
    constructor(name, width, height, spriteWidth, spriteHeight, resource, collisionType) {
        super(name, width, height, spriteWidth, spriteHeight, resource, collisionType);
        this.graphics.use(resource.toSprite());
    }

    interAct(engine) {
        if (localStorage.getItem("inventorySlot") === "3" && localStorage.getItem("glass bottle") === "true") {
            localStorage.setItem(this.name, "true");
            this.kill();
        }
    }
}

