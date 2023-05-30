import {Collectable} from "./Collectable.js";
import {Resources} from "../../../resources.js";
import {Animation, AnimationStrategy, SpriteSheet} from "excalibur";

let sprite0, sprite1, sprite2, sprite3;

export class BrowningLeaf extends Collectable {
    browningLeafAnimation;
    constructor(name, width, height, spriteWidth, spriteHeight, resource, collisionType) {
        super(name, width, height, spriteWidth, spriteHeight, resource, collisionType);
        this.initGraphics();
        if (localStorage.getItem("hasBrowned") === "true") {
            this.graphics.use(sprite3);
        } else {
            this.graphics.use(sprite0)
        }
    }

    onPostUpdate(_engine, _delta) {
        if (localStorage.getItem(this.name) === "false") {
            this.graphics.use(this.browningLeafAnimation);
        }
    }

    initGraphics = () => {
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.BrownLeaf,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 1342/4,
                spriteHeight: 375,
            },
        });
        sprite0 = spriteSheet.getSprite(0, 0);
        if (!sprite0) return;
        sprite0.width = 1342/4;
        sprite0.height = 375;
        sprite1 = spriteSheet.getSprite(1, 0);
        if (!sprite1) return;
        sprite1.width = 1342/4;
        sprite1.height = 375;
        sprite2 = spriteSheet.getSprite(2, 0);
        if (!sprite2) return;
        sprite2.width = 1342/4;
        sprite2.height = 375;
        sprite3 = spriteSheet.getSprite(3, 0);
        sprite3.width = 1342/4;
        sprite3.height = 375;

        this.browningLeafAnimation = new Animation( {
            frames: [
                {
                    graphic: sprite0,
                    duration: 1000,
                },
                {
                    graphic: sprite1,
                    duration: 1000,
                },
                {
                    graphic: sprite2,
                    duration: 1000,
                },
                {
                    graphic: sprite3,
                    duration: 1000,
                }
            ],
            strategy: AnimationStrategy.Freeze
        })
    }


}