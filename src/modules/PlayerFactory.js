import BoardFactory from "./BoardFactory"

export default function PlayerFactory(name, isComputer = false) {
  if (typeof name !== "string" || typeof isComputer !== "boolean") return

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
