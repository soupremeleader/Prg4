import {Animation, AnimationStrategy, SpriteSheet} from "excalibur";
import {Resources} from "../../../resources.js";
import {Droppable} from "./Droppable.js";

let sprite0, sprite1;

export class Crow extends Droppable {
    crowAnimation;

    constructor(name, width, height, spriteWidth, spriteHeight, resource, collisionType, child) {
        super(name, width, height, spriteWidth, spriteHeight, resource, collisionType, child);
        this.initGraphics()
        this.graphics.use(sprite0);
    }

    interAct(engine) {
        this.graphics.use(this.crowAnimation);
    }

    onPostUpdate(_engine, _delta) {
        if (this.crowAnimation.done) {
            super.interAct(_engine);
        }
    }

    initGraphics = () => {
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.Crow,
            grid: {
                rows: 1,
                columns: 2,
                spriteWidth: 392/2,
                spriteHeight: 147,
            },
        });
        sprite0 = spriteSheet.getSprite(0, 0);
        if (!sprite0) return;
        sprite0.width = 392/2;
        sprite0.height = 147;

        sprite1 = spriteSheet.getSprite(1, 0);
        if (!sprite1) return;
        sprite1.width = 392/2;
        sprite1.height = 147;


        this.crowAnimation = new Animation({
            frames: [
                {
                    graphic: sprite0,
                    duration: 500,
                },
                {
                    graphic: sprite1,
                    duration: 500,
                },
                {
                    graphic: sprite0,
                    duration: 500,
                },
                {
                    graphic: sprite1,
                    duration: 500,
                },
                {
                    graphic: sprite0,
                    duration: 500,
                },
            ],
            strategy: AnimationStrategy.Freeze
        })
    }
}