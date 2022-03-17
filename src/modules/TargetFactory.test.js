import TargetFactory from "./TargetFactory"
import ShipFactory from "./ShipFactory"
/* global test, expect */

test("creates a target object for each of a ship's hitboxes", () => {
  const Ship = ShipFactory(5)
  const targets = TargetFactory(Ship)
  expect(targets.length).toBe(5)
})

test("target objects are identical to the ships hitboxes", () => {
  const Ship = ShipFactory(5)
  const targets = TargetFactory(Ship)
  expect(Ship.hitboxes).toEqual(targets)
})

test("the approprate hitbox of a ship is hit when target.hit() is called", () => {
  const Ship = ShipFactory(5)
  const targets = TargetFactory(Ship)
  targets[0].hit()
  expect(targets[0].isHit).toBe(true)
  expect(Ship.hitboxes[0].isHit).toBe(true)
})

test("ship is sunk after all targets are hit", () => {
  const Ship = ShipFactory(2)
  const targets = TargetFactory(Ship)
  targets[0].hit()
  expect(Ship.isSunk).toBe(false)
  targets[1].hit()
  expect(Ship.isSunk).toBe(true)
})
