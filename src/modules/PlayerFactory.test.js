import PlayerFactory from "./PlayerFactory"
/* global test, expect */

test("players have their own gameboard", () => {
  const player = PlayerFactory("player1")

  expect(player).toHaveProperty("gameboard")
})

test("player.name is the name passed into PlayerFactory", () => {
  const player = PlayerFactory("george")
  expect(player.name).toBe("george")
})

test("player objects are frozen", () => {
  const player = PlayerFactory("player")
  expect(() => {
    player.gameboard = "{}"
  }).toThrow()
  expect(() => {
    player.name = "King Julian"
  }).toThrow()
  expect(() => {
    player.somethingNew = "ahhhh"
  }).toThrow()
})

test("player gameboards are functional", () => {
  const player = PlayerFactory("greg")

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
