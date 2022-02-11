import {Application} from 'pixi.js'


console.log(PIXI)

// set canvans
const game = new Application({
    width: 750,
    height: 1080,
})
document.body.append(game.view)

console.log(game)

export function getRootContainer(){
    return game.stage
}