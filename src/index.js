import PlayerFactory from "./modules/PlayerFactory"
import DOMController from "./modules/DOMController"
import Game from "./modules/Game.js"

Game.player1 = PlayerFactory("player1")
DOMController.placeShipListeners(Game.player1)
