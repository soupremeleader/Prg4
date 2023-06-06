import { ImageSource, Loader } from 'excalibur'
import playerImage from '../images/spritesheet witch.png'
import idlePlayerImage from '../images/spritesheet witch idle.png'
import toolBarImage from '../images/toolbar.png'
import featherImage from '../images/feather.png'
import greenLeafImage from '../images/green leaf.png'
import driedLeafImage from '../images/dried leaf.png'
import wateringCanImage from '../images/watering can.png'
import starsImage from '../images/stars.png'
import fallenStarsImage from '../images/fallen stars.png'
import glassImage from '../images/glass bottle.png'
import plantImage from '../images/plant.png'
import telescopeImage from '../images/telescope.png'
import doorImage from '../images/door.png'
import brownLeafImage from '../images/browning leaf.png'
import dryingRackImage from '../images/drying rack.png'
import growingPlantImage from '../images/plant growing.png'
import activeDryingRackImage from '../images/drying rack spritesheet.png'
import crowImage from '../images/crow.png'
import startSkyImage from '../images/bg sky start screen.png'
import startGrassImage from '../images/bg grass start screen.png'
import sunImage from '../images/sun.png'
import startButtonImage from '../images/start button.png'
import gamePlayBackgroundImage from '../images/outside temp.png'
import outsideSkyImage from '../images/sky bg.png'
import tileBlockImage from '../images/tilemap block.png'
import treeBackgroundImage from '../images/tree bg.png'
import blinkingStarImage from '../images/star blinks.png'
import insideBackgroundImage from '../images/inside bg.png'

const Resources = {
    Player: new ImageSource(playerImage),
    IdlePlayer: new ImageSource(idlePlayerImage),
    ToolBar: new ImageSource(toolBarImage),
    Feather: new ImageSource(featherImage),
    DriedLeaf: new ImageSource(driedLeafImage),
    WateringCan: new ImageSource(wateringCanImage),
    Stars: new ImageSource(starsImage),
    FallenStars: new ImageSource(fallenStarsImage),
    Glass: new ImageSource(glassImage),
    Plant: new ImageSource(plantImage),
    Telescope: new ImageSource(telescopeImage),
    Door: new ImageSource(doorImage),
    BrownLeaf: new ImageSource(brownLeafImage),
    DryingRack: new ImageSource(dryingRackImage),
    GrowingPlant: new ImageSource(growingPlantImage),
    GreenLeaf: new ImageSource(greenLeafImage),
    ActiveDryingRack: new ImageSource(activeDryingRackImage),
    Crow: new ImageSource(crowImage),
    StartSky: new ImageSource(startSkyImage),
    StartGrass: new ImageSource(startGrassImage),
    Sun: new ImageSource(sunImage),
    StartButton: new ImageSource(startButtonImage),
    OutsideBackground: new ImageSource(gamePlayBackgroundImage),
    OutsideSky: new ImageSource(outsideSkyImage),
    TileBlock: new ImageSource(tileBlockImage),
    TreeBackground: new ImageSource(treeBackgroundImage),
    BlinkingStar: new ImageSource(blinkingStarImage),
    InsideBackground: new ImageSource(insideBackgroundImage),

}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.IdlePlayer,
    Resources.ToolBar,
    Resources.Feather,
    Resources.DriedLeaf,
    Resources.WateringCan,
    Resources.Stars,
    Resources.FallenStars,
    Resources.Glass,
    Resources.Plant,
    Resources.Telescope,
    Resources.Door,
    Resources.BrownLeaf,
    Resources.DryingRack,
    Resources.GrowingPlant,
    Resources.GreenLeaf,
    Resources.ActiveDryingRack,
    Resources.Crow,
    Resources.StartSky,
    Resources.StartGrass,
    Resources.Sun,
    Resources.StartButton,
    Resources.OutsideBackground,
    Resources.OutsideSky,
    Resources.TileBlock,
    Resources.TreeBackground,
    Resources.BlinkingStar,
    Resources.InsideBackground,
])

ResourceLoader.suppressPlayButton = true;

export { Resources, ResourceLoader }