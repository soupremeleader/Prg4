import {Animation, AnimationStrategy, SpriteSheet} from "excalibur";
import {Resources} from "../../../resources.js";
import {Droppable} from "./Droppable.js";

let sprite0, sprite1, sprite2;

export class GrowingPlant extends Droppable {
    growingPlantAnimation;

    constructor(name, width, height, spriteWidth, spriteHeight,  resource, collisionType, child) {
        super(name, width, height, spriteWidth, spriteHeight,  resource, collisionType, child);
        this.initGraphics()
        this.graphics.use(sprite0);
    }

    interAct(engine) {
        if (localStorage.getItem("inventorySlot") === "5" && localStorage.getItem("watering can") === "true") {
            if (this.growingPlantAnimation.done) {
                super.interAct(engine);
            } else if (!this.hasDropped){
                this.graphics.use(this.growingPlantAnimation);
            }
        }
    }

    initGraphics = () => {
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.GrowingPlant,
            grid: {
                rows: 1,
                columns: 3,
                spriteWidth: 110,
                spriteHeight: 98,
            },
        });
        sprite0 = spriteSheet.getSprite(0, 0);
        if (!sprite0) return;
        sprite0.width = 110;
        sprite0.height = 98;
        sprite1 = spriteSheet.getSprite(1, 0);
        if (!sprite1) return;
        sprite1.width = 110;
        sprite1.height = 98;
        sprite2 = spriteSheet.getSprite(2, 0);
        if (!sprite2) return;
        sprite2.width = 110;
        sprite2.height = 98;

        this.growingPlantAnimation = new Animation( {
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
            ],
            strategy: AnimationStrategy.Freeze
        })
    }
}