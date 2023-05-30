import {NonPlayer} from "../../NonPlayer.js";

export class InventoryItem extends NonPlayer {
    constructor(name, width, height, spriteWidth, spriteHeight, resource, collisionType) {
        super(name, width, height, spriteWidth, spriteHeight, resource, collisionType);
        this.graphics.use(resource.toSprite());
    }

    interAct(engine) {
        //TODO
    }

    onPostUpdate(_engine, _delta) {
        if (localStorage.getItem(this.name) === "false") {
            console.log("hello")
            this.kill();
        }
    }
}