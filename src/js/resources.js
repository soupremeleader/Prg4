import { ImageSource, Loader } from 'excalibur'
import playerImage from '../images/spritesheet witch.png'
import idlePlayerImage from '../images/spritesheet witch idle.png'
import toolBarImage from '../images/toolbar.png'
import featherImage from '../images/feather.png'
import leafImage from '../images/leaf.png'
import wateringCanImage from '../images/watering can.png'
import starsImage from '../images/stars.png'
import fallenStarsImage from '../images/fallen stars.png'
import glassImage from '../images/glass bottle.png'
import plantImage from '../images/plant.png'
import telescopeImage from '../images/telescope.png'

const Resources = {
    Player: new ImageSource(playerImage),
    IdlePlayer: new ImageSource(idlePlayerImage),
    ToolBar: new ImageSource(toolBarImage),
    Feather: new ImageSource(featherImage),
    Leaf: new ImageSource(leafImage),
    WateringCan: new ImageSource(wateringCanImage),
    Stars: new ImageSource(starsImage),
    FallenStars: new ImageSource(fallenStarsImage),
    Glass: new ImageSource(glassImage),
    Plant: new ImageSource(plantImage),
    Telescope: new ImageSource(telescopeImage),

}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.IdlePlayer,
    Resources.ToolBar,
    Resources.Feather,
    Resources.Leaf,
    Resources.WateringCan,
    Resources.Stars,
    Resources.FallenStars,
    Resources.Glass,
    Resources.Plant,
    Resources.Telescope,
])

export { Resources, ResourceLoader }