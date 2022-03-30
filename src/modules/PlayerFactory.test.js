import PlayerFactory from "./PlayerFactory"
/* global test, expect */

test("players have their own gameboard", () => {
  const player = PlayerFactory("player1", 1)

  expect(player).toHaveProperty("gameboard")
})

test("player.name is the name passed into PlayerFactory", () => {
  const player = PlayerFactory("george", 1)
  expect(player.name).toBe("george")
})

test("player.playerNum is the number passed into PlayerFactory", () => {
  const player = PlayerFactory("george", 1)
  expect(player.playerNum).toBe(1)

  const player2 = PlayerFactory("may", 2)
  expect(player2.playerNum).toBe(2)
})

test("player.isComputer is true when true is passed into the arguments", () => {
  const normalPlayer = PlayerFactory("greg", 1)
  const computer = PlayerFactory("computer", 2, true)

  expect(normalPlayer.isComputer).toBe(false)
  expect(computer.isComputer).toBe(true)
})

test("player objects are frozen", () => {
  const player = PlayerFactory("player", 1)
  expect(() => {
    player.gameboard = "{}"
  }).toThrow()
  expect(() => {
    player.name = "King Julian"
  }).toThrow()
  expect(() => {
    player.somethingNew = "ahhhh"
  }).toThrow()
  expect(() => {
    player.playerNum = "ahhhh"
  }).toThrow()
})

test("player gameboards are functional", () => {
  const player = PlayerFactory("greg", 1)

  expect(player.gameboard.placeShip("carrier", "A3", "horizontal")).toEqual([
    "A2",
    "A1",
    "A3",
    "A4",
    "A5",
  ])
  expect(player.gameboard.recieveAttack("A1")).toBe(1)
  expect(player.gameboard.board.A1).toBe("hit")
  expect(player.gameboard.reset()).toBeUndefined()
  expect(player.gameboard.board.A1).toBe("")
})
