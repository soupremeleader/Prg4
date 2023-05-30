import {Actor, CollisionType, Input, Vector} from "excalibur";

const INPUT_INTERACT_KEY = Input.Keys.X;

export class StartButton extends Actor {
    nextScene;

    constructor(width, height, resource, nextScene) {
        super({
            height: resource.height,
            width: resource.width,
            collisionType: CollisionType.Fixed,
        });
        this.graphics.use(resource.toSprite())
        this.nextScene = nextScene;
        this.scale = new Vector(width / (resource.width), height / (resource.height));
    }

    onPostUpdate(_engine, _delta) {
        let isPressingInteractionKey = _engine.input.keyboard.wasPressed(INPUT_INTERACT_KEY);
        if (isPressingInteractionKey) {
            _engine.goToScene(this.nextScene);
        }
    }
}