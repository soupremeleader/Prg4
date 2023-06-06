import {ActionSequence, Animation, AnimationStrategy, EasingFunctions, SpriteSheet, Vector} from "excalibur";
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
        if (!this.hasDropped) {
            this.graphics.use(this.crowAnimation);
        }
    }

    onPostUpdate(_engine, _delta) {
        if (this.crowAnimation.done && !this.hasDropped) {
            _engine.add(this.child);
            let featherDrop = new ActionSequence(
                this.child,
                (actionContext) => {
                    actionContext
                        .easeTo(new Vector(965, 520), 200, EasingFunctions.EaseOutQuad)
                        .rotateTo(-1/6,1)
                        .easeTo(new Vector(970, 533), 200, EasingFunctions.EaseOutQuad)
                        .easeTo(new Vector(985, 530), 200, EasingFunctions.EaseInQuad)
                        .easeTo(new Vector(990, 527), 200, EasingFunctions.EaseOutQuad)
                        .easeTo(new Vector(993, 530), 200, EasingFunctions.EaseOutQuad)
                        .rotateTo(0,1)
                        .easeTo(new Vector(996, 533), 200, EasingFunctions.EaseOutQuad)
                }
            );
            this.child.actions.runAction(featherDrop);
            this.hasDropped = true;
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