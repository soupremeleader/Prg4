import { Actor, Vector, GraphicsGroup } from 'excalibur'


export class Background extends Actor {

    offset;
    resource;
    velocity;

    constructor(width, height, spriteWidth, resource, vel) {
        super({
            height: resource.height,
            width: resource.width/spriteWidth,
        });
        this.resource = resource;
        this.scale = new Vector(width / (resource.width / spriteWidth), height / (resource.height));
        this.velocity = vel;
    }

    onInitialize(engine){
        const spaceImage = this.resource.toSprite()
        this.offset = spaceImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: spaceImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: spaceImage,
                    pos: new Vector(spaceImage.width, 0),
                }
            ]
        })

        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)
        this.pos = new Vector(0, 0)
        this.vel = new Vector(this.velocity, 0)
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}