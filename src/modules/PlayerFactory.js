import BoardFactory from "./BoardFactory"

export default function PlayerFactory(name) {
  // players take turns attacking the enemy gameboard
  // players might each have their own gameboard and ships

  // computer players should be able to make random, legal plays

  /* 
Player = {
  name,
  Gameboard
}
*/
  const gameboard = BoardFactory()

  return {
    get name() {
      return name
    },
    gameboard,
  }
}
