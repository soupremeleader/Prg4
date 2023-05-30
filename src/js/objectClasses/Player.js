import {Actor, Animation, CollisionType, Input, SpriteSheet, Vector} from "excalibur";
import {Resources} from "../resources";

const INPUT_KEY_UP = Input.Keys.W;
const INPUT_KEY_LEFT = Input.Keys.A;
const INPUT_KEY_RIGHT = Input.Keys.D;
const INPUT_KEY_DOWN = Input.Keys.S;

const UP_VELOCITY = -50;
const LEFT_VELOCITY = -50;
const RIGHT_VELOCITY = 50;
const DOWN_VELOCITY = 50;

let isLeftFacing = true;

let sprite0, sprite1, sprite2, sprite3, sprite4;

export class Player extends Actor {
    idleAnimation;
    walkingLeftAnimation;
    walkingRightAnimation;
    sceneName;
    constructor(scene) {
        super({
            collisionType: CollisionType.Active,
            height: 131,
            width: 108,
        });
        this.sceneName = scene;
        this.initGraphics();
    }

    onPostUpdate(_engine, _delta) {
        if (this.sceneName === "startScreen") {
            this.graphics.use(this.walkingRightAnimation)
        } else {
            let isPressingMoveUpKey = _engine.input.keyboard.isHeld(INPUT_KEY_UP);
            let isPressingMoveLeftKey = _engine.input.keyboard.isHeld(INPUT_KEY_LEFT);
            let isPressingMoveRightKey = _engine.input.keyboard.isHeld(INPUT_KEY_RIGHT);
            let isPressingMoveDownKey = _engine.input.keyboard.isHeld(INPUT_KEY_DOWN);

            let x = 0;
            let y = 0;
            if (isPressingMoveUpKey) {
                y = UP_VELOCITY;
                isLeftFacing ? this.graphics.use(this.walkingLeftAnimation) : this.graphics.use(this.walkingRightAnimation);
            }

            if (isPressingMoveLeftKey) {
                x = LEFT_VELOCITY;
                this.graphics.use(this.walkingLeftAnimation);

                if (!isLeftFacing) {
                    isLeftFacing = !isLeftFacing;
                }
            }

            if (isPressingMoveRightKey) {
                x = RIGHT_VELOCITY;
                this.graphics.use(this.walkingRightAnimation);

                if (isLeftFacing) {
                    isLeftFacing = !isLeftFacing;
                }
            }

            if (isPressingMoveDownKey) {
                y = DOWN_VELOCITY;

                isLeftFacing ? this.graphics.use(this.walkingLeftAnimation) : this.graphics.use(this.walkingRightAnimation);
            }

            if (x === 0 && y === 0) {
                this.graphics.use(this.idleAnimation);
            }

            this.vel = new Vector(x, y);
        }
    }

    initGraphics = () => {
        const spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: {
                rows: 1,
                columns: 3,
                spriteWidth: 108,
                spriteHeight: 131,
            },
        });
        sprite0 = spriteSheet.getSprite(0, 0);
        if (!sprite0) return;
        sprite0.width = 108;
        sprite0.height = 131;
        sprite1 = spriteSheet.getSprite(1, 0);
        if (!sprite1) return;
        sprite1.width = 108;
        sprite1.height = 131;
        sprite2 = spriteSheet.getSprite(2, 0);
        if (!sprite2) return;
        sprite2.width = 108;
        sprite2.height = 131;

        const spriteSheetIdle = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: {
                rows: 1,
                columns: 3,
                spriteWidth: 108,
                spriteHeight: 131,
            },
        });
        sprite3 = spriteSheetIdle.getSprite(0, 0);
        if (!sprite3) return;
        sprite3.width = 108;
        sprite3.height = 131;
        sprite4 = spriteSheetIdle.getSprite(1, 0);
        if (!sprite4) return;
        sprite4.width = 108;
        sprite4.height = 131;

        this.walkingLeftAnimation = new Animation({
            frames: [
                {
                    graphic: sprite0,
                    duration: 250,
                },
                {
                    graphic: sprite1,
                    duration: 250,
                },
                {
                    graphic: sprite2,
                    duration: 250,
                },
                {
                    graphic: sprite1,
                    duration: 250,
                },
            ],
        });

        this.walkingRightAnimation = this.walkingLeftAnimation.clone();
        this.walkingRightAnimation.flipHorizontal = true;

        this.idleAnimation = new Animation({
            frames: [
                {
                    graphic: sprite3,
                    duration: 1000,
                },
                {
                    graphic: sprite4,
                    duration: 1000,
                },
            ]
        });
    };
}