const Game = (function () {
  let player1
  let player2

  return {
    get player1() {
      return player1
    },
    get player2() {
      return player2
    },
    set player1(playerObj) {
      if (typeof playerObj !== "object") return
      player1 = playerObj
    },
    set player2(playerObj) {
      if (typeof playerObj !== "object") return
      player2 = playerObj
    },
    get winner() {
      if (!player1.gameboard.allShipsSunk && !player2.gameboard.allShipsSunk) {
        return false
      } else if (player1.gameboard.allShipsSunk) {
        return player1
      } else if (player2.gameboard.allShipsSunk) {
        return player2
      }
    },
  }
})()

export default Game
