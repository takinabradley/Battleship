import BoardFactory from "./BoardFactory"

export default function PlayerFactory(name, playerNum, isComputer = false) {
  if (
    typeof name !== "string" ||
    typeof isComputer !== "boolean" ||
    (playerNum !== 1 && playerNum !== 2)
  ) {
    return
  }

  const gameboard = BoardFactory()

  return Object.freeze({
    get name() {
      return name
    },
    get playerNum() {
      return playerNum
    },
    get isComputer() {
      return isComputer
    },
    get gameboard() {
      return gameboard
    },
  })
}
