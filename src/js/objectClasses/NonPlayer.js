import {Actor, CollisionType, Input} from "excalibur";

const INPUT_INTERACT_KEY = Input.Keys.X;

export class NonPlayer extends Actor {
    constructor(resource) {
        super({
            collisionType: CollisionType.Fixed,
            height: resource.height,
            width: resource.width,
        });
    }

    interAct(engine) {
        throw new Error("Interact is an abstract function and must be implemented.");
    }

    onInitialize(engine) {
        this.on('precollision', (event) => {
            let isPressingInteractionKey = engine.input.keyboard.wasPressed(INPUT_INTERACT_KEY);
            if (isPressingInteractionKey) {
                this.interAct(engine, event);
            }
        })
    }
}