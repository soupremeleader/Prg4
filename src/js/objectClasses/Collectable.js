import {NonPlayer} from "./NonPlayer.js";
import {Vector} from "excalibur";

export class Collectable extends NonPlayer {
    name;
    constructor(name, newWidth, newHeight, resource) {
        super(resource);
        this.name = name;
        this.graphics.use(resource.toSprite());
        this.scale = new Vector(newWidth/resource.width, newHeight/resource.height);
    }

    interAct(engine, event) {
        localStorage.setItem(this.name, "true");
        this.kill();
        console.log(localStorage);
        console.log(engine.currentScene.actors)
    }
}