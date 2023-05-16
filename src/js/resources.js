import { ImageSource, Loader } from 'excalibur'
import playerImage from '../images/spritesheet witch.png'
import idlePlayerImage from '../images/spritesheet witch idle.png'

const Resources = {
    Player: new ImageSource(playerImage),
    IdlePlayer: new ImageSource(idlePlayerImage),
}
const ResourceLoader = new Loader([Resources.Player, Resources.IdlePlayer])

export { Resources, ResourceLoader }