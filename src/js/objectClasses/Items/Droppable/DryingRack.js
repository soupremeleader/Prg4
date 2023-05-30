import {Droppable} from "./Droppable.js";
import {Collectable} from "../Collectable/Collectable.js";
import {Resources} from "../../../resources.js";
import {Animation, AnimationStrategy, CollisionType, SpriteSheet, Vector} from "excalibur";

let sprite0, sprite1, sprite2, sprite3, dryingRackAnimation;

export class DryingRack extends Droppable {
    hasBrowned;
    resource;
    constructor(name, width, height, spriteWidth, spriteHeight, resource, collisionType) {
        super(name, width, height, spriteWidth, spriteHeight, resource, collisionType);
        this.resource = resource;
        this.graphics.use(resource.toSprite());
        this.hasBrowned = false;
        this.initGraphics();
    }

    interAct(engine) {
        if (this.hasBrowned && !this.hasDropped) {
            let driedLeaf = new Collectable("leaf", 50, 50, 1, 1, Resources.DriedLeaf, CollisionType.Active);
            driedLeaf.pos = new Vector(350, 350);
            engine.add(driedLeaf);
            this.hasDropped = true;
            this.graphics.use(this.resource.toSprite());
        } else if (!this.hasBrowned && localStorage.getItem("inventorySlot") === "2" && localStorage.getItem("leaf") === "true") {
            this.graphics.use(dryingRackAnimation);
            localStorage.removeItem("leaf");
            localStorage.setItem("leaf", "false");
            this.hasBrowned = true;
            localStorage.setItem("hasBrowned", "true");
        }
    }

    initGraphics = () => {
        const dryingRackSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.ActiveDryingRack,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 316 / 4,
                spriteHeight: 132,
            },
        });

        sprite0 = dryingRackSpriteSheet.getSprite(0, 0);
        if (!sprite0) return;
        sprite0.width = 316 / 4;
        sprite0.height = 132;

        sprite1 = dryingRackSpriteSheet.getSprite(1, 0);
        if (!sprite1) return;
        sprite1.width = 316 / 4;
        sprite1.height = 132;

        sprite2 = dryingRackSpriteSheet.getSprite(2, 0);
        if (!sprite2) return;
        sprite2.width = 316 / 4;
        sprite2.height = 132;

        sprite3 = dryingRackSpriteSheet.getSprite(3, 0);
        if (!sprite3) return;
        sprite3.width = 316 / 4;
        sprite3.height = 132;


        dryingRackAnimation = new Animation({
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
                },
            ],
            strategy: AnimationStrategy.Freeze
        });

    }
}