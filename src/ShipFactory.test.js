import ShipFactory from "./ShipFactory"
/* global test, expect */

test('outputs an object with "hitboxes", "isSunk", and "hit" properties/methods', () => {
  expect(ShipFactory(1)).toHaveProperty("isSunk")
  expect(ShipFactory(1)).toHaveProperty("hitboxes")
  expect(ShipFactory(1)).toHaveProperty("hit")

  expect(ShipFactory(2)).toHaveProperty("isSunk")
  expect(ShipFactory(2)).toHaveProperty("hitboxes")
  expect(ShipFactory(2)).toHaveProperty("hit")

  expect(ShipFactory(3)).toHaveProperty("isSunk")
  expect(ShipFactory(3)).toHaveProperty("hitboxes")
  expect(ShipFactory(3)).toHaveProperty("hit")

  expect(ShipFactory(4)).toHaveProperty("isSunk")
  expect(ShipFactory(4)).toHaveProperty("hitboxes")
  expect(ShipFactory(4)).toHaveProperty("hit")

  expect(ShipFactory(5)).toHaveProperty("isSunk")
  expect(ShipFactory(5)).toHaveProperty("hitboxes")
  expect(ShipFactory(5)).toHaveProperty("hit")
})

test("rejects an number less than 1 and more than 5", () => {
  expect(ShipFactory(0)).toBeUndefined()
  expect(ShipFactory(6)).toBeUndefined()
})

test('object created has "length" number of hitboxes', () => {
  const hitboxes1 = ShipFactory(1).hitboxes
  const hitboxes2 = ShipFactory(2).hitboxes
  const hitboxes3 = ShipFactory(3).hitboxes
  const hitboxes4 = ShipFactory(4).hitboxes
  const hitboxes5 = ShipFactory(5).hitboxes

  expect(hitboxes1).toEqual([{ hit: false }])
  expect(hitboxes2).toEqual([{ hit: false }, { hit: false }])
  expect(hitboxes3).toEqual([{ hit: false }, { hit: false }, { hit: false }])
  expect(hitboxes4).toEqual([
    { hit: false },
    { hit: false },
    { hit: false },
    { hit: false },
  ])
  expect(hitboxes5).toEqual([
    { hit: false },
    { hit: false },
    { hit: false },
    { hit: false },
    { hit: false },
  ])
})

test("Ship is not sunk when it is created", () => {
  const ship1 = ShipFactory(1)
  const ship2 = ShipFactory(2)
  const ship3 = ShipFactory(3)
  const ship4 = ShipFactory(4)
  const ship5 = ShipFactory(5)

  expect(ship1.isSunk).toBe(false)
  expect(ship2.isSunk).toBe(false)
  expect(ship3.isSunk).toBe(false)
  expect(ship4.isSunk).toBe(false)
  expect(ship5.isSunk).toBe(false)
})

test("cannot reassign hitboxes", () => {
  const Ship = ShipFactory(3)

  expect(() => (Ship.hitboxes = [])).toThrowError()
})

test("cannot reassign individual hitboxes", () => {
  const Ship = ShipFactory(3)

  Ship.hitboxes[0] = []

  expect(Ship.hitboxes[0]).toEqual({ hit: false })
})

test("cannot reassing individial hitbox values", () => {
  const Ship = ShipFactory(3)

  Ship.hitboxes[0].hit = true
  Ship.hitboxes[0].newValue = "new value!"

  expect(Ship.hitboxes[0].hit).toEqual(false)
})

test("hit method can reassign hitbox values", () => {
  const Ship = ShipFactory(2)

  expect(Ship.hit(0)).toEqual([{ hit: true }, { hit: false }])
  expect(Ship.hitboxes).toEqual([{ hit: true }, { hit: false }])
  expect(Ship.hit(1)).toEqual([{ hit: true }, { hit: true }])
  expect(Ship.hitboxes).toEqual([{ hit: true }, { hit: true }])
})

test("isSunk getter returns true when all hitboxes 'hit' values are true", () => {
  const Ship = ShipFactory(2)
  expect(Ship.isSunk).toBe(false)
  expect(Ship.hit(0)).toEqual([{ hit: true }, { hit: false }])
  expect(Ship.isSunk).toBe(false)
  expect(Ship.hit(1)).toEqual([{ hit: true }, { hit: true }])
  expect(Ship.isSunk).toBe(true)
})
