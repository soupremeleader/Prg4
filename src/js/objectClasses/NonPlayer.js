import {Actor, CollisionType, Input, Vector} from "excalibur";
import {Player} from "./Player.js";

const INPUT_INTERACT_KEY = Input.Keys.X;

export class NonPlayer extends Actor {
    name;

    constructor(name, width, height, spriteWidth, spriteHeight, resource) {
        super({
            height: resource.height/spriteHeight,
            width: resource.width/spriteWidth,
            collisionType: CollisionType.Passive,
        });

        this.name = name;
        this.scale = new Vector(width / (resource.width / spriteWidth), height / (resource.height / spriteHeight));
    }

    interAct(engine) {
        throw new Error("Interact is an abstract function and must be implemented.");
    }

    onInitialize(engine) {
        this.on('precollision', (event) => {
            let isPressingInteractionKey = engine.input.keyboard.wasPressed(INPUT_INTERACT_KEY);
            if (isPressingInteractionKey && event.other instanceof Player) {
                this.interAct(engine, event);
            }
        })
    }
}