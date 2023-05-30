import {InventoryItem} from "./InventoryItem.js";

export class GlassBottleInventoryItem extends InventoryItem {
    constructor(name, width, height, spriteWidth, spriteHeight, resource, collisionType) {
        super(name, width, height, spriteWidth, spriteHeight, resource, collisionType);
        this.graphics.use(resource.toSprite());
    }

    interAct(engine) {
        //TODO
    }

    onPostUpdate(_engine, _delta) {
        if (localStorage.getItem("fallen star") === "true") {
            this.kill();
        }
    }
}