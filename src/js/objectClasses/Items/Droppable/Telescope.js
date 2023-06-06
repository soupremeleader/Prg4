import {
    ActionSequence,
    Animation,
    AnimationStrategy,
    EasingFunctions,
    SpriteSheet,
    Vector
} from "excalibur";
import {Resources} from "../../../resources.js";
import {Droppable} from "./Droppable.js";

let sprite0, sprite1, sprite2, sprite3, sprite4;

export class Telescope extends Droppable {
    blinkingStarAnimation;
    child;

    constructor(name, width, height, spriteWidth, spriteHeight, resource, collisionType, child) {
        super(name, width, height, spriteWidth, spriteHeight, resource, collisionType, child);
        this.initGraphics()
        this.child = child;
    }

    interAct(engine) {
        if (!this.hasDropped) {
            engine.add(this.child);
            this.child.graphics.use(this.blinkingStarAnimation);
        }
    }

    onPostUpdate(_engine, _delta) {
        if (this.blinkingStarAnimation.done && !this.hasDropped) {
            this.child.graphics.use(Resources.FallenStars.toSprite());
            this.child.scale = new Vector(101/(1.2 * Resources.FallenStars.width), 112/(1.2* Resources.FallenStars.height));

            let starDrop = new ActionSequence(
                this.child,
                (actionContext) => {
                    actionContext
                        .rotateTo(-1/6, 1)
                        .easeTo(new Vector(1295, 600), 500, EasingFunctions.EaseInQuad)
                        .easeTo(new Vector(1308, 565), 100, EasingFunctions.EaseInQuad)
                        .easeTo(new Vector(1320, 550), 100, EasingFunctions.EaseInQuad)
                        .rotateTo(0, 1)
                        .easeTo(new Vector(1332, 565), 100, EasingFunctions.EaseOutQuad)
                        .easeTo(new Vector(1345, 610), 150, EasingFunctions.EaseOutQuad)
                        .easeTo(new Vector(1370, 625), 150, EasingFunctions.EaseOutQuad)
                        .easeTo(new Vector(1390, 610), 150, EasingFunctions.EaseInQuad)
                        .easeTo(new Vector(1400, 625), 150, EasingFunctions.EaseOutQuad)
                }
            );
            this.child.actions.runAction(starDrop);
            this.hasDropped = true;
        }
    }

    initGraphics = () => {
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.BlinkingStar,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 101,
                spriteHeight: 112,
            },
        });
        sprite0 = spriteSheet.getSprite(0, 0);
        if (!sprite0) return;
        sprite0.width = 101;
        sprite0.height = 112;
        sprite1 = spriteSheet.getSprite(1, 0);
        if (!sprite1) return;
        sprite1.width = 101;
        sprite1.height = 112;
        sprite2 = spriteSheet.getSprite(2, 0);
        if (!sprite2) return;
        sprite2.width = 101;
        sprite2.height = 112;
        sprite3 = spriteSheet.getSprite(3, 0);
        if (!sprite3) return;
        sprite3.width = 101;
        sprite3.height = 112;
        sprite4 = spriteSheet.getSprite(4, 0);
        if (!sprite4) return;
        sprite4.width = 101;
        sprite4.height = 112;

        this.blinkingStarAnimation = new Animation({
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
                    graphic: sprite3,
                    duration: 1000,
                },
                {
                    graphic: sprite4,
                    duration: 1000,
                },
            ],
            strategy: AnimationStrategy.Freeze
        })
    }

}