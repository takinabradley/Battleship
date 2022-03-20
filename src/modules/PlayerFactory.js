import BoardFactory from "./BoardFactory"

export default function PlayerFactory(name, isComputer = false) {
  if (typeof name !== "string") return
  // players take turns attacking the enemy gameboard
  // players might each have their own gameboard and ships

  // computer players should be able to make random, legal plays

  const gameboard = BoardFactory()

  return Object.freeze({
    get name() {
      return name
    },
    get isComputer() {
      return isComputer
    },
    get gameboard() {
      return gameboard
    },
  })
}
