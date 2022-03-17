import ShipFactory from "./ShipFactory"
/* global test, expect */

test('outputs an object with "hitboxes", and "isSunk" properties/methods', () => {
  expect(ShipFactory(2)).toHaveProperty("isSunk")
  expect(ShipFactory(2)).toHaveProperty("hitboxes")

  expect(ShipFactory(3)).toHaveProperty("isSunk")
  expect(ShipFactory(3)).toHaveProperty("hitboxes")

  expect(ShipFactory(4)).toHaveProperty("isSunk")
  expect(ShipFactory(4)).toHaveProperty("hitboxes")

  expect(ShipFactory(5)).toHaveProperty("isSunk")
  expect(ShipFactory(5)).toHaveProperty("hitboxes")
})

test("hitboxes have a 'hit' method", () => {
  expect(typeof ShipFactory(2).hitboxes[0].hit).toBe("function")
})

test("rejects an number less than 2 and more than 5", () => {
  expect(ShipFactory(0)).toBeUndefined()
  expect(ShipFactory(1)).toBeUndefined()
  expect(ShipFactory(6)).toBeUndefined()
})

test('object created has "length" number of hitboxes', () => {
  const hitboxes2 = ShipFactory(2).hitboxes
  const hitboxes3 = ShipFactory(3).hitboxes
  const hitboxes4 = ShipFactory(4).hitboxes
  const hitboxes5 = ShipFactory(5).hitboxes

  expect(hitboxes2.length).toEqual(2)
  expect(hitboxes3.length).toEqual(3)
  expect(hitboxes4.length).toEqual(4)
  expect(hitboxes5.length).toEqual(5)

  /*
  expect(hitboxes2).toEqual([{ isHit: false }, { isHit: false }])
  expect(hitboxes3).toEqual([
    { isHit: false },
    { isHit: false },
    { isHit: false },
  ])
  expect(hitboxes4).toEqual([
    { isHit: false },
    { isHit: false },
    { isHit: false },
    { isHit: false },
  ])
  expect(hitboxes5).toEqual([
    { isHit: false },
    { isHit: false },
    { isHit: false },
    { isHit: false },
    { isHit: false },
  ])
  */
})

test("Ship is not sunk when it is created", () => {
  const ship2 = ShipFactory(2)
  const ship3 = ShipFactory(3)
  const ship4 = ShipFactory(4)
  const ship5 = ShipFactory(5)

  expect(ship2.isSunk).toBe(false)
  expect(ship3.isSunk).toBe(false)
  expect(ship4.isSunk).toBe(false)
  expect(ship5.isSunk).toBe(false)
})

test("cannot reassign hitboxes array", () => {
  const Ship = ShipFactory(3)

  expect(() => (Ship.hitboxes = [])).toThrowError()
})

test("cannot reassign individual hitboxes", () => {
  const Ship = ShipFactory(3)

  Ship.hitboxes[0] = []

  expect(Ship.hitboxes[0]).not.toEqual([])
})

test("cannot reassing individial hitbox values", () => {
  const Ship = ShipFactory(3)

  Ship.hitboxes[0].hit = true
  Ship.hitboxes[0].newValue = "new value!"

  expect(Ship.hitboxes[0].isHit).toEqual(false)
})

test("hit method can reassign hitbox values", () => {
  const Ship = ShipFactory(2)

  Ship.hitboxes[0].hit()
  expect(Ship.hitboxes[0].isHit).toBe(true)
  Ship.hitboxes[1].hit()
  expect(Ship.hitboxes[1].isHit).toBe(true)
  /*
  expect(Ship.hit(0)).toEqual([{ isHit: true }, { isHit: false }])
  expect(Ship.hitboxes).toEqual([{ isHit: true }, { isHit: false }])
  expect(Ship.hit(1)).toEqual([{ isHit: true }, { isHit: true }])
  expect(Ship.hitboxes).toEqual([{ isHit: true }, { isHit: true }])
  */
})

test("isSunk getter returns true when all hitboxes 'hit' values are true", () => {
  const Ship = ShipFactory(2)
  expect(Ship.isSunk).toBe(false)
  Ship.hitboxes[0].hit()
  expect(Ship.hitboxes[0].isHit).toEqual(true)
  expect(Ship.isSunk).toBe(false)
  Ship.hitboxes[1].hit()
  expect(Ship.hitboxes[1].isHit).toEqual(true)
  expect(Ship.isSunk).toBe(true)
})
