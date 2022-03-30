import PlayerFactory from "./PlayerFactory"

const Game = (function () {
  let player1
  let player2
  let currentPlayer

  function start() {
    const startGame = new CustomEvent("startGame", {
      bubbles: true,
      detail: {},
    })

    document.dispatchEvent(startGame)
    // DOMController.renderPlayerpage
  }

  document.addEventListener("Game.init", init)
  function init(e) {
    player1 = PlayerFactory(e.detail.player1)
    player2 = PlayerFactory(e.detail.player2)
    currentPlayer = player1
    if (e.detail.callbackFunc) e.detail.callbackFunc(currentPlayer)
    // DOMController.renderShipPage
  }

  document.addEventListener("Game.switchPlayer", switchPlayer)
  function switchPlayer(e) {
    if (currentPlayer === player1) {
      currentPlayer = player2
    } else if (currentPlayer === player2) {
      currentPlayer = player1
    }

    if (e.detail.callbackFunc) {
      let nextPlayer

      if (currentPlayer === player1) {
        nextPlayer = player2
      } else if (currentPlayer === player2) {
        nextPlayer = player1
      }

      e.detail.callbackFunc(currentPlayer, nextPlayer)
    }

    // DOMController.renderShipPage, DOMController.renderHitPage
  }

  return {
    start,
  }
})()

export default Game
