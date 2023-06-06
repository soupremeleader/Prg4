import {Scene} from "excalibur";
import {Resources} from "../resources.js";

export class InsideScene extends Scene {
    leaf;
    ink;
    feather;

    constructor(leaf, ink , feather) {
        super();
        this.leaf = leaf;
        this.ink = ink;
        this.feather = feather;
    }
    onPostUpdate(_engine, _delta) {
        if (_engine.input.keyboard.wasPressed('Escape')) {
            _engine.goToScene("outsideScene");
        }

        if (localStorage.getItem("leaf") === "true" && localStorage.getItem("hasBrowned") === "true") {
            this.leaf.graphics.use(Resources.DriedLeaf.toSprite());
        }

        if (localStorage.getItem("fallen star") === "true") {
            this.ink.graphics.use(Resources.InsideInkBottle.toSprite());
        }

        if (localStorage.getItem("feather") === "true") {
            this.feather.graphics.use(Resources.Feather.toSprite());
        }
    }
}