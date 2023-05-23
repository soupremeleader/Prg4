import {NonPlayer} from "./NonPlayer.js";
import {Vector} from "excalibur";

export class InterActable extends NonPlayer {
    name;
    child;
    constructor(name, newWidth, newHeight, resource, child) {
        super(resource);
        this.name = name;
        this.graphics.use(resource.toSprite());
        this.scale = new Vector(newWidth/resource.width, newHeight/resource.height);
        this.child = child;
    }

    interAct(engine, event) {
        engine.add(this.child)
    }
}