import {NonPlayer} from "./NonPlayer.js";

export class Collectable extends NonPlayer {
    name;
    constructor(name, newWidth, newHeight) {
        super(newWidth, newHeight);
        this.name = name;
    }

    interAct(engine, event) {
        this.kill();
    }
}