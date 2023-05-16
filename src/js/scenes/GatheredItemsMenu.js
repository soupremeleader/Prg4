import {Scene, Input} from "excalibur";

const INPUT_KEY_ESCAPE = Input.Keys.Esc;
export class GatheredItemsMenu extends Scene {
    previousScene;

    onActivate(context) {
        super.onActivate(context);
        console.log(context)
        console.log("----------------------------")
        console.log(context.previousScene);
        this.previousScene = context.previousScene;
    }

    update(engine, delta) {
        let isPressingEscapeKey = engine.input.keyboard.isHeld(INPUT_KEY_ESCAPE);

        if (isPressingEscapeKey) {
           // engine.goToScene(this.previousScene);
        }
    }
}