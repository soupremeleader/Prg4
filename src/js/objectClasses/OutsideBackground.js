import {Actor, Vector} from "excalibur";
export class OutsideBackground extends Actor {

    constructor(width, height, spriteWidth, spriteHeight, resource, collisionType) {
        super({
            height: resource.height/spriteHeight,
            width: resource.width/spriteWidth,
            collisionType: collisionType,
        });
        this.graphics.use(resource.toSprite());
        this.scale = new Vector(width / (resource.width / spriteWidth), height / (resource.height / spriteHeight));
    }
}