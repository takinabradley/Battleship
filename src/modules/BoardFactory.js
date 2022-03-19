import ShipFactory from "./ShipFactory"
import TargetFactory from "./TargetFactory"

export default function BoardFactory() {
  const ships = {
    carrier: ShipFactory(5),
    battleship: ShipFactory(4),
    cruiser: ShipFactory(3),
    submarine: ShipFactory(3),
    destroyer: ShipFactory(2),
  }
  // boards start out without ships placed
  let remainingShips = Object.keys(ships)
  // when all ships are placed, recieveAttack should be available
  let placedShips = []

  // prettier-ignore
  const board = {
    A1: '', A2: '', A3: '', A4: '', A5: '', A6: '', A7: '', A8: '', A9: '', A10: '', 
    B1: '', B2: '', B3: '', B4: '', B5: '', B6: '', B7: '', B8: '', B9: '', B10: '', 
    C1: '', C2: '', C3: '', C4: '', C5: '', C6: '', C7: '', C8: '', C9: '', C10: '', 
    D1: '', D2: '', D3: '', D4: '', D5: '', D6: '', D7: '', D8: '', D9: '', D10: '', 
    E1: '', E2: '', E3: '', E4: '', E5: '', E6: '', E7: '', E8: '', E9: '', E10: '', 
    F1: '', F2: '', F3: '', F4: '', F5: '', F6: '', F7: '', F8: '', F9: '', F10: '', 
    G1: '', G2: '', G3: '', G4: '', G5: '', G6: '', G7: '', G8: '', G9: '', G10: '', 
    H1: '', H2: '', H3: '', H4: '', H5: '', H6: '', H7: '', H8: '', H9: '', H10: '', 
    I1: '', I2: '', I3: '', I4: '', I5: '', I6: '', I7: '', I8: '', I9: '', I10: '', 
    J1: '', J2: '', J3: '', J4: '', J5: '', J6: '', J7: '', J8: '', J9: '', J10: '',
  }

  function _findInvalidCoords(shipLength, orientation) {
    // Ships are placed from the median index, or in the case of even
    // shipLengths by the middle-left index.
    // This function:
    // 1) makes an array of all the invalid placements for that center index
    // that would cause the ship to hang off the board.
    // 2) then adds to the array of invalid placements all board indexes that
    // are already occupied
    const badIndexes = []
    const exclusions = []

    // finds placements that would make a horizontal ship hang off the board
    if (orientation === "horizontal") {
      if (shipLength === 5) exclusions.push(1, 2, 9, 10)
      if (shipLength === 4) exclusions.push(1, 9, 10)
      if (shipLength === 3) exclusions.push(1, 10)
      if (shipLength === 2) exclusions.push(10)

      for (let i = 0; i < exclusions.length; i++) {
        const exclusion = exclusions[i]

        for (const key in board) {
          if (key.endsWith(exclusion)) {
            badIndexes.push(key)
          }
        }
      }
    }

    // finds placements that would make a verical ship hang off the board
    if (orientation === "vertical") {
      if (shipLength === 5) exclusions.push("A", "B", "I", "J")
      if (shipLength === 4) exclusions.push("A", "I", "J")
      if (shipLength === 3) exclusions.push("A", "J")
      if (shipLength === 2) exclusions.push("J")

      for (let i = 0; i < exclusions.length; i++) {
        const exclusion = exclusions[i]

        for (const key in board) {
          if (key.startsWith(exclusion)) {
            badIndexes.push(key)
          }
        }
      }
    }

    // adds occupied board indexes that are not already in the list
    for (const key in board) {
      if (board[key] !== "" && badIndexes.includes(key) === false) {
        badIndexes.push(key)
      }
    }

    return badIndexes
  }

  function _findShipIndexes(shipLength, goodCoords, orientation) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    const char = goodCoords.charAt(0)
    const num = Number.parseInt(goodCoords.substring(1))
    const shipArea = []

    // I could probably make this include center if I were to just add
    // board[char + num] to each
    if (orientation === "horizontal") {
      // do something with the numbers?
      if (shipLength === 5) {
        shipArea.push(
          char + (num - 1),
          char + (num - 2),
          goodCoords,
          char + (num + 1),
          char + (num + 2)
        )
      }

      if (shipLength === 4) {
        shipArea.push(
          char + (num - 1),
          goodCoords,
          char + (num + 1),
          char + (num + 2)
        )
      }

      if (shipLength === 3) {
        shipArea.push(char + (num - 1), goodCoords, char + (num + 1))
      }

      if (shipLength === 2) {
        shipArea.push(goodCoords, char + (num + 1))
      }
    }

    if (orientation === "vertical") {
      // do something with the letters?
      if (shipLength === 5) {
        shipArea.push(
          letters[letters.indexOf(char) - 1] + num,
          letters[letters.indexOf(char) - 2] + num,
          goodCoords,
          letters[letters.indexOf(char) + 1] + num,
          letters[letters.indexOf(char) + 2] + num
        )
      }

      if (shipLength === 4) {
        shipArea.push(
          letters[letters.indexOf(char) - 1] + num,
          goodCoords,
          letters[letters.indexOf(char) + 1] + num,
          letters[letters.indexOf(char) + 2] + num
        )
      }

      if (shipLength === 3) {
        shipArea.push(
          letters[letters.indexOf(char) - 1] + num,
          goodCoords,
          letters[letters.indexOf(char) + 1] + num
        )
      }

      if (shipLength === 2) {
        shipArea.push(goodCoords, letters[letters.indexOf(char) + 1] + num)
      }
    }

    return shipArea
  }

  function _collisionCheck(shipLength, goodCoords, orientation) {
    // designed to accept coords that are NOT invalid, filter coords against the
    // array _findInvalidCoords() returns before passing them into this function

    // checks for collisions along the axis defined by 'orientation' from the
    // center of the ship. Does not check the center of the ship itself.
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
    const char = goodCoords.charAt(0)
    const num = Number.parseInt(goodCoords.substring(1))
    const shipArea = []
    const isEmpty = (coords) => coords === ""

    // I could probably make this include center if I were to just add
    // board[char + num] to each
    if (orientation === "horizontal") {
      // do something with the numbers?
      if (shipLength === 5) {
        shipArea.push(
          board[char + (num - 1)],
          board[char + (num - 2)],
          board[char + (num + 1)],
          board[char + (num + 2)]
        )
      }

      if (shipLength === 4) {
        shipArea.push(
          board[char + (num - 1)],
          board[char + (num + 1)],
          board[char + (num + 2)]
        )
      }

      if (shipLength === 3) {
        shipArea.push(board[char + (num - 1)], board[char + (num + 1)])
      }

      if (shipLength === 2) {
        shipArea.push(board[goodCoords], board[char + (num + 1)])
      }
    }

    if (orientation === "vertical") {
      // do something with the letters?
      if (shipLength === 5) {
        shipArea.push(
          board[letters[letters.indexOf(char) - 1] + num],
          board[letters[letters.indexOf(char) - 2] + num],
          board[letters[letters.indexOf(char) + 1] + num],
          board[letters[letters.indexOf(char) + 2] + num]
        )
      }

      if (shipLength === 4) {
        shipArea.push(
          board[letters[letters.indexOf(char) - 1] + num],
          board[letters[letters.indexOf(char) + 1] + num],
          board[letters[letters.indexOf(char) + 2] + num]
        )
      }

      if (shipLength === 3) {
        shipArea.push(
          board[letters[letters.indexOf(char) - 1] + num],
          board[letters[letters.indexOf(char) + 1] + num]
        )
      }

      if (shipLength === 2) {
        shipArea.push(board[letters[letters.indexOf(char) + 1] + num])
      }
    }

    if (shipArea.every(isEmpty)) {
      return false // no collision
    } else {
      return true // collision
    }
  }

  function _checkPlacement(ship, coords, orientation) {
    /*
    const shipLength = ships[ship].hitboxes.length
    const invalidCoords = _findInvalidCoords(shipLength, orientation)
    if (invalidCoords.includes(coords)) return false
    if (_collisionCheck(shipLength, coords, orientation) === true) return false
    return true
    // return false - ship cannot be placed there
    // return true - valid placement
    */
    const shipLength = ships[ship].hitboxes.length
    const validCoords = _findValidCoords(shipLength, orientation)
    if (validCoords.includes(coords)) {
      return true
    } else {
      return false
    }
  }

  function _findValidCoords(shipLength, orientation) {
    const invalidArray = _findInvalidCoords(shipLength, orientation)
    const validMoves = []

    // add any keys that would hit another ship to invalid array
    //
    for (const key in board) {
      if (
        !invalidArray.includes(key) &&
        _collisionCheck(shipLength, key, orientation)
      ) {
        invalidArray.push(key)
      }
    }

    // make an array out of all coords that are not in invalidArray
    for (const key in board) {
      if (!invalidArray.includes(key)) {
        validMoves.push(key)
      }
    }

    return validMoves
  }

  function placeShip(ship, coords, orientation) {
    // return undefined - failed to place ship
    if (
      [ship, coords, orientation].some((arg) => arg === undefined) ||
      !Object.keys(ships).includes(ship.toLowerCase()) ||
      !Object.keys(board).includes(coords.toUpperCase()) ||
      (orientation !== "vertical" && orientation !== "horizontal")
    ) {
      return
    }

    const shipIndex = remainingShips.indexOf(ship)
    if (shipIndex === -1) {
      return false // return false - ship cannot be placed there
    } else if (_checkPlacement(ship, coords, orientation)) {
      placedShips.push(remainingShips.splice(shipIndex, 1)[0])
      const targets = TargetFactory(ships[ship])
      const shipIndexes = _findShipIndexes(
        ships[ship].hitboxes.length,
        coords,
        orientation
      )

      for (let i = 0; i < targets.length; i++) {
        board[shipIndexes[i]] = targets[i]
      }

      return true // return true, ship placed
    } else {
      return false
    }
  }

  function recieveAttack(coords) {
    if (typeof board[coords] === "object" && !board[coords].isHit) {
      board[coords].hit()
      return 1
    } else if (board[coords] === "") {
      board[coords] = "miss"
      return 0
    } else if (typeof board[coords] === "object" && board[coords].isHit) {
      return -1
    } else if (board[coords] === "miss") {
      return -1
    }

    // hit 1, miss 0, already hit -1
  }

  function reset() {
    for (const key in board) {
      board[key] = ""
    }

    ships.carrier = ShipFactory(5)
    ships.battleship = ShipFactory(4)
    ships.cruiser = ShipFactory(3)
    ships.submarine = ShipFactory(3)
    ships.destroyer = ShipFactory(2)

    remainingShips = Object.keys(ships)
    placedShips = []
  }

  return {
    get board() {
      const newBoard = {}
      for (const key in board) {
        if (typeof board[key] === "string") {
          newBoard[key] = board[key]
        } else if (typeof board[key] === "object" && !board[key].isHit) {
          newBoard[key] = ""
        } else if (typeof board[key] === "object" && board[key].isHit) {
          newBoard[key] = "hit"
        }
      }

      return newBoard
    },
    get remainingShips() {
      return [...remainingShips]
    },
    get allShipsSunk() {
      // untested
      if (
        Object.values(ships).every((ship) => {
          return Object.values(ship.hitboxes).every(
            (hitbox) => hitbox.isHit === true
          )
        })
      ) {
        return true
      } else {
        return false
      }
    },
    placeShip,
    recieveAttack,
    reset,
  }
}

// gameboards need to be able to place ships at specific coordinates
// (by calling the ship factory function?)
// gameboards should have a recieveattack() function that takes coordinates,
// determined if a ship was hit a hit or a miss, and send a hit() function
// to the correct ship
// gameboards keep track of missed hits to display
// gameboards should know whether or not all ships have been sunk

/* This might be used for UI later
  function _findCenterIndex(shipLength) {
    // placement is determined from center - the median for odd numbers -
    // or the mean rounded down to an int for even numbers
    // findCenterIndex() works for numbers up to 5, but I wouldn't trust it to always
    // find the correct median/mean
    // 0 1 2 3 4
    // 0 1 2 3
    // 0 1 2
    // 0 1
    // 1 2 3 4 5
    let center = 0
    for (let i = 0; i < shipLength; i++) {
      center = center + i
      if (i === shipLength - 1) center = Number.parseInt(center / shipLength)
    }
    return center
  }
  */
