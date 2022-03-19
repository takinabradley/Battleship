import BoardFactory from "./BoardFactory"

/* global test, expect, describe, beforeEach */

test("returns an object with board,remainingShips, placeShip, recieveAttack, and allShipsSunk properties", () => {
  expect(BoardFactory()).toHaveProperty("board")
  expect(BoardFactory()).toHaveProperty("remainingShips")
  expect(BoardFactory()).toHaveProperty("placeShip")
  expect(BoardFactory()).toHaveProperty("recieveAttack")
  expect(BoardFactory()).toHaveProperty("allShipsSunk")
})

test("board has properties from from A1-J10 ", () => {
  // prettier-ignore
  const boardKeys = [
    'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 
    'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 
    'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 
    'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 
    'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 
    'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 
    'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 
    'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 
    'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10', 
    'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10',
  ]
  expect(Object.keys(BoardFactory().board)).toEqual(boardKeys)
})

test("board shows unplaced ships", () => {
  const Gameboard = BoardFactory()

  expect(Gameboard.remainingShips).toEqual([
    "carrier",
    "battleship",
    "cruiser",
    "submarine",
    "destroyer",
  ])
})

test("placeShip removes ship from remainingShips array", () => {
  const Gameboard = BoardFactory()

  Gameboard.placeShip("carrier", "C1", "vertical")
  expect(Gameboard.remainingShips).toEqual([
    "battleship",
    "cruiser",
    "submarine",
    "destroyer",
  ])
})

test("placeship returns undefined if coords don't exist", () => {
  const Gameboard = BoardFactory()
  expect(Gameboard.placeShip("carrier", "A0", "horizontal")).toBeUndefined()
  expect(Gameboard.placeShip("cruiser", "K15", "vertical")).toBeUndefined()
})

test("placeship returns undefined if ship doesn't exist", () => {
  const Gameboard = BoardFactory()
  expect(Gameboard.placeShip("kerberer", "A1", "horizontal")).toBeUndefined()
  expect(Gameboard.placeShip("platofrakaan", "B10", "vertical")).toBeUndefined()
})

test("placeship returns undefined if horizontal or vertical isn't passed", () => {
  const Gameboard = BoardFactory()
  expect(Gameboard.placeShip("carrier", "A1", "updown")).toBeUndefined()
  expect(Gameboard.placeShip("cruiser", "B10", "leftright")).toBeUndefined()
})

test("placeShip returns false if ship has already been placed", () => {
  const Gameboard = BoardFactory()

  expect(Gameboard.placeShip("cruiser", "B1", "vertical")).toBe(true)
  expect(Gameboard.remainingShips).toEqual([
    "carrier",
    "battleship",
    "submarine",
    "destroyer",
  ])

  expect(Gameboard.placeShip("cruiser", "B1", "vertical")).toBe(false)
  expect(Gameboard.remainingShips).toEqual([
    "carrier",
    "battleship",
    "submarine",
    "destroyer",
  ])
})

// tests for invalid positions on a blank board

describe("placeShips can only place ships on valid positions of the board", () => {
  let Gameboard = BoardFactory()
  const array = []
  beforeEach(() => (array.length = 0))

  test("carrier cannot be placed at 1, 2, 9, or 10 horizontally", () => {
    expect(Gameboard.placeShip("carrier", "A1", "horizontal")).toBe(false)
    expect(Gameboard.placeShip("carrier", "B2", "horizontal")).toBe(false)
    expect(Gameboard.placeShip("carrier", "I9", "horizontal")).toBe(false)
    expect(Gameboard.placeShip("carrier", "J10", "horizontal")).toBe(false)
  })
  test("carrier can be placed ar or between 3 and 8 horizontally", () => {
    for (let i = 3; i <= 8; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "A" + i, "horizontal"))
    }
    expect(array.every((value) => value === true)).toBe(true)
  })

  test("battleship cannot be placed at 1, 9, or 10 horizontally", () => {
    expect(Gameboard.placeShip("battleship", "C1", "horizontal")).toBe(false)
    expect(Gameboard.placeShip("battleship", "G9", "horizontal")).toBe(false)
    expect(Gameboard.placeShip("battleship", "H10", "horizontal")).toBe(false)
  })
  test("battleship can be placed at or between 2 and 8 horizontally", () => {
    for (let i = 2; i <= 8; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "B" + i, "horizontal"))
    }
    expect(array.every((value) => value === true)).toBe(true)
  })

  test("cruiser and submarine cannot be placed at 1 or 10 horizontally", () => {
    expect(Gameboard.placeShip("cruiser", "D1", "horizontal")).toBe(false)
    expect(Gameboard.placeShip("cruiser", "F10", "horizontal")).toBe(false)

    expect(Gameboard.placeShip("submarine", "E1", "horizontal")).toBe(false)
    expect(Gameboard.placeShip("submarine", "G10", "horizontal")).toBe(false)
  })
  test("cruiser and submarine can be placed at or between 2 and 9 horizontally", () => {
    for (let i = 2; i <= 9; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "C" + i, "horizontal"))
    }
    expect(array.every((value) => value === true)).toBe(true)

    const array2 = []
    for (let i = 2; i <= 9; i++) {
      Gameboard = BoardFactory()
      array2.push(Gameboard.placeShip("submarine", "D" + i, "horizontal"))
    }
    expect(array2.every((value) => value === true)).toBe(true)
  })

  test("destroyer cannot be placed at 10 horizontally", () => {
    expect(Gameboard.placeShip("destroyer", "H10", "horizontal")).toBe(false)
  })
  test("destroyer can be placed at or between 1 and 9 horizontally", () => {
    for (let i = 1; i <= 9; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "E" + i, "horizontal"))
    }
    expect(array.every((value) => value === true)).toBe(true)
  })

  // now I have to do vertical tests, blegh
  test("carrier cannot be placed at A, B, I, or J vertically", () => {
    for (let i = 1; i <= 10; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "A" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "B" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "I" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "J" + i, "vertical"))
    }

    expect(array.every((value) => value === false)).toBe(true)
  })
  test("carrier can be placed at or between C and H vertically", () => {
    for (let i = 1; i <= 10; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "C" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "D" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "E" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "F" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "G" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("carrier", "H" + i, "vertical"))
    }
    expect(array.every((value) => value === true)).toBe(true)
  })

  test("battleship cannot be placed at A, I, or J vertically", () => {
    for (let i = 1; i <= 10; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "A" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "I" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "J" + i, "vertical"))
    }

    expect(array.every((value) => value === false)).toBe(true)
  })
  test("battleship can be placed at or between B and H vertically", () => {
    for (let i = 1; i <= 10; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "B" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "C" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "D" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "E" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "F" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "G" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("battleship", "H" + i, "vertical"))
    }
    expect(array.every((value) => value === true)).toBe(true)
  })

  test("cruiser and submarine cannot be placed at A or J vertically", () => {
    for (let i = 1; i <= 10; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "A" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "J" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "A" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "J" + i, "vertical"))
    }

    expect(array.every((value) => value === false)).toBe(true)
  })
  test("cruiser and submarine can be placed at or between B and I vertically", () => {
    for (let i = 1; i <= 10; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "B" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "C" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "D" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "E" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "F" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "G" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "H" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "I" + i, "vertical"))

      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "B" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "C" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "D" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "E" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "F" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "G" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "H" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("submarine", "I" + i, "vertical"))
    }
    expect(array.every((value) => value === true)).toBe(true)
  })

  test("destroyer cannot be placed at J vertically", () => {
    for (let i = 1; i <= 10; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("cruiser", "J" + i, "vertical"))
    }

    expect(array.every((value) => value === false)).toBe(true)
  })
  test("destroyer can be placed at or between A and I vertically", () => {
    for (let i = 1; i <= 10; i++) {
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "A" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "B" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "C" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "D" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "E" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "F" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "G" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "H" + i, "vertical"))
      Gameboard = BoardFactory()
      array.push(Gameboard.placeShip("destroyer", "I" + i, "vertical"))
    }
    expect(array.every((value) => value === true)).toBe(true)
  })
})

test("placeShip cannot place ships on top of other ships", () => {
  const Gameboard = BoardFactory()

  expect(Gameboard.placeShip("carrier", "A3", "horizontal")).toBe(true)
  expect(Gameboard.placeShip("battleship", "A3", "horizontal")).toBe(false)
  expect(Gameboard.placeShip("battleship", "A4", "horizontal")).toBe(false)
  expect(Gameboard.placeShip("battleship", "A5", "horizontal")).toBe(false)
  expect(Gameboard.placeShip("battleship", "A6", "horizontal")).toBe(false)
  expect(Gameboard.placeShip("battleship", "A7", "horizontal")).toBe(true)

  expect(Gameboard.placeShip("cruiser", "B10", "vertical")).toBe(true)
  expect(Gameboard.placeShip("submarine", "B10", "vertical")).toBe(false)
  expect(Gameboard.placeShip("submarine", "C10", "vertical")).toBe(false)
  expect(Gameboard.placeShip("submarine", "D10", "vertical")).toBe(false)
  expect(Gameboard.placeShip("submarine", "E10", "vertical")).toBe(true)

  expect(Gameboard.placeShip("destroyer", "F10", "vertical")).toBe(false)
  expect(Gameboard.placeShip("destroyer", "G10", "vertical")).toBe(true)
})

test("recieveAttack returns 1 on a hit, 0 on a miss, and -1 if space has already been attacked", () => {
  const Gameboard = BoardFactory()
  Gameboard.placeShip("carrier", "A3", "horizontal")
  expect(Gameboard.recieveAttack("A1")).toBe(1)
  expect(Gameboard.recieveAttack("A2")).toBe(1)
  expect(Gameboard.recieveAttack("A3")).toBe(1)
  expect(Gameboard.recieveAttack("A4")).toBe(1)
  expect(Gameboard.recieveAttack("A5")).toBe(1)
  expect(Gameboard.recieveAttack("A5")).toBe(-1)
  expect(Gameboard.recieveAttack("A6")).toBe(0)
  expect(Gameboard.recieveAttack("A6")).toBe(-1)
})

test("Gameboard.board shows hits and misses", () => {
  const Gameboard = BoardFactory()
  Gameboard.placeShip("carrier", "A3", "horizontal")
  expect(Gameboard.recieveAttack("A1")).toBe(1)
  expect(Gameboard.recieveAttack("A2")).toBe(1)
  expect(Gameboard.recieveAttack("A3")).toBe(1)
  expect(Gameboard.recieveAttack("A4")).toBe(1)
  expect(Gameboard.recieveAttack("A5")).toBe(1)
  expect(Gameboard.recieveAttack("A5")).toBe(-1)
  expect(Gameboard.recieveAttack("A6")).toBe(0)
  expect(Gameboard.recieveAttack("A6")).toBe(-1)

  expect(Gameboard.board.A1).toBe("hit")
  expect(Gameboard.board.A2).toBe("hit")
  expect(Gameboard.board.A3).toBe("hit")
  expect(Gameboard.board.A4).toBe("hit")
  expect(Gameboard.board.A5).toBe("hit")
  expect(Gameboard.board.A6).toBe("miss")
})

test("Gameboard.allShipsSunk returns true when all ships are sunk", () => {
  const Gameboard = BoardFactory()
  const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

  expect(Gameboard.allShipsSunk).toBe(false)
  expect(Gameboard.placeShip("carrier", "A3", "horizontal")).toBe(true)
  expect(Gameboard.placeShip("battleship", "A7", "horizontal")).toBe(true)
  expect(Gameboard.placeShip("cruiser", "B10", "vertical")).toBe(true)
  expect(Gameboard.placeShip("submarine", "E10", "vertical")).toBe(true)
  expect(Gameboard.placeShip("destroyer", "G10", "vertical")).toBe(true)

  Gameboard.recieveAttack("A1")
  for (let i = 0; i < 10; i++) {
    Gameboard.recieveAttack("A" + i)
  }

  for (let i = 0; i < 10; i++) {
    Gameboard.recieveAttack(chars[i] + 10)
  }
  expect(Gameboard.allShipsSunk).toBe(true)
})

test("reset gameboard resets the gameboard", () => {
  const Gameboard = BoardFactory()

  expect(Gameboard.placeShip("carrier", "A3", "horizontal")).toBe(true)
  expect(Gameboard.placeShip("carrier", "A3", "horizontal")).toBe(false)
  Gameboard.reset()
  expect(Gameboard.placeShip("carrier", "A3", "horizontal")).toBe(true)
})
