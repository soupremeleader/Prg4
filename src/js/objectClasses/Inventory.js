import {Actor} from "excalibur";

export class Inventory extends Actor {
    inventory;

    constructor() {
        super();
        this.inventory = {feather: false, flowers: false, leaf: false};
    }
}