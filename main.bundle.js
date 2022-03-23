/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/BoardFactory.js":
/*!*************************************!*\
  !*** ./src/modules/BoardFactory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardFactory)
/* harmony export */ });
/* harmony import */ var _ShipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipFactory */ "./src/modules/ShipFactory.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


function BoardFactory() {
  var ships = {
    carrier: (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(5),
    battleship: (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(4),
    cruiser: (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(3),
    submarine: (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(3),
    destroyer: (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(2)
  }; // boards start out without ships placed

  var remainingShips = Object.keys(ships); // when all ships are placed, recieveAttack should be available

  var placedShips = []; // prettier-ignore

  var board = {
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    A6: '',
    A7: '',
    A8: '',
    A9: '',
    A10: '',
    B1: '',
    B2: '',
    B3: '',
    B4: '',
    B5: '',
    B6: '',
    B7: '',
    B8: '',
    B9: '',
    B10: '',
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    C7: '',
    C8: '',
    C9: '',
    C10: '',
    D1: '',
    D2: '',
    D3: '',
    D4: '',
    D5: '',
    D6: '',
    D7: '',
    D8: '',
    D9: '',
    D10: '',
    E1: '',
    E2: '',
    E3: '',
    E4: '',
    E5: '',
    E6: '',
    E7: '',
    E8: '',
    E9: '',
    E10: '',
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    F7: '',
    F8: '',
    F9: '',
    F10: '',
    G1: '',
    G2: '',
    G3: '',
    G4: '',
    G5: '',
    G6: '',
    G7: '',
    G8: '',
    G9: '',
    G10: '',
    H1: '',
    H2: '',
    H3: '',
    H4: '',
    H5: '',
    H6: '',
    H7: '',
    H8: '',
    H9: '',
    H10: '',
    I1: '',
    I2: '',
    I3: '',
    I4: '',
    I5: '',
    I6: '',
    I7: '',
    I8: '',
    I9: '',
    I10: '',
    J1: '',
    J2: '',
    J3: '',
    J4: '',
    J5: '',
    J6: '',
    J7: '',
    J8: '',
    J9: '',
    J10: ''
  };

  function _findInvalidCoords(shipLength, orientation) {
    // Ships are placed from the median index, or in the case of even
    // shipLengths by the middle-left index.
    // This function:
    // 1) makes an array of all the invalid placements for that center index
    // that would cause the ship to hang off the board.
    // 2) then adds to the array of invalid placements all board indexes that
    // are already occupied
    var badIndexes = [];
    var exclusions = []; // finds placements that would make a horizontal ship hang off the board

    if (orientation === "horizontal") {
      if (shipLength === 5) exclusions.push(1, 2, 9, 10);
      if (shipLength === 4) exclusions.push(1, 9, 10);
      if (shipLength === 3) exclusions.push(1, 10);
      if (shipLength === 2) exclusions.push(10);

      for (var i = 0; i < exclusions.length; i++) {
        var exclusion = exclusions[i];

        for (var key in board) {
          if (key.endsWith(exclusion)) {
            badIndexes.push(key);
          }
        }
      }
    } // finds placements that would make a verical ship hang off the board


    if (orientation === "vertical") {
      if (shipLength === 5) exclusions.push("A", "B", "I", "J");
      if (shipLength === 4) exclusions.push("A", "I", "J");
      if (shipLength === 3) exclusions.push("A", "J");
      if (shipLength === 2) exclusions.push("J");

      for (var _i = 0; _i < exclusions.length; _i++) {
        var _exclusion = exclusions[_i];

        for (var _key in board) {
          if (_key.startsWith(_exclusion)) {
            badIndexes.push(_key);
          }
        }
      }
    } // adds occupied board indexes that are not already in the list


    for (var _key2 in board) {
      if (board[_key2] !== "" && badIndexes.includes(_key2) === false) {
        badIndexes.push(_key2);
      }
    }

    return badIndexes;
  }

  function _findShipIndexes(shipLength, goodCoords, orientation) {
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var char = goodCoords.charAt(0);
    var num = Number.parseInt(goodCoords.substring(1));
    var shipArea = []; // I could probably make this include center if I were to just add
    // board[char + num] to each

    if (orientation === "horizontal") {
      // do something with the numbers?
      if (shipLength === 5) {
        shipArea.push(char + (num - 1), char + (num - 2), goodCoords, char + (num + 1), char + (num + 2));
      }

      if (shipLength === 4) {
        shipArea.push(char + (num - 1), goodCoords, char + (num + 1), char + (num + 2));
      }

      if (shipLength === 3) {
        shipArea.push(char + (num - 1), goodCoords, char + (num + 1));
      }

      if (shipLength === 2) {
        shipArea.push(goodCoords, char + (num + 1));
      }
    }

    if (orientation === "vertical") {
      // do something with the letters?
      if (shipLength === 5) {
        shipArea.push(letters[letters.indexOf(char) - 1] + num, letters[letters.indexOf(char) - 2] + num, goodCoords, letters[letters.indexOf(char) + 1] + num, letters[letters.indexOf(char) + 2] + num);
      }

      if (shipLength === 4) {
        shipArea.push(letters[letters.indexOf(char) - 1] + num, goodCoords, letters[letters.indexOf(char) + 1] + num, letters[letters.indexOf(char) + 2] + num);
      }

      if (shipLength === 3) {
        shipArea.push(letters[letters.indexOf(char) - 1] + num, goodCoords, letters[letters.indexOf(char) + 1] + num);
      }

      if (shipLength === 2) {
        shipArea.push(goodCoords, letters[letters.indexOf(char) + 1] + num);
      }
    }

    return shipArea;
  }

  function _collisionCheck(shipLength, goodCoords, orientation) {
    // designed to accept coords that are NOT invalid, filter coords against the
    // array _findInvalidCoords() returns before passing them into this function
    // checks for collisions along the axis defined by 'orientation' from the
    // center of the ship. Does not check the center of the ship itself.
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var char = goodCoords.charAt(0);
    var num = Number.parseInt(goodCoords.substring(1));
    var shipArea = [];

    var isEmpty = function isEmpty(coords) {
      return coords === "";
    }; // I could probably make this include center if I were to just add
    // board[char + num] to each


    if (orientation === "horizontal") {
      // do something with the numbers?
      if (shipLength === 5) {
        shipArea.push(board[char + (num - 1)], board[char + (num - 2)], board[char + (num + 1)], board[char + (num + 2)]);
      }

      if (shipLength === 4) {
        shipArea.push(board[char + (num - 1)], board[char + (num + 1)], board[char + (num + 2)]);
      }

      if (shipLength === 3) {
        shipArea.push(board[char + (num - 1)], board[char + (num + 1)]);
      }

      if (shipLength === 2) {
        shipArea.push(board[goodCoords], board[char + (num + 1)]);
      }
    }

    if (orientation === "vertical") {
      // do something with the letters?
      if (shipLength === 5) {
        shipArea.push(board[letters[letters.indexOf(char) - 1] + num], board[letters[letters.indexOf(char) - 2] + num], board[letters[letters.indexOf(char) + 1] + num], board[letters[letters.indexOf(char) + 2] + num]);
      }

      if (shipLength === 4) {
        shipArea.push(board[letters[letters.indexOf(char) - 1] + num], board[letters[letters.indexOf(char) + 1] + num], board[letters[letters.indexOf(char) + 2] + num]);
      }

      if (shipLength === 3) {
        shipArea.push(board[letters[letters.indexOf(char) - 1] + num], board[letters[letters.indexOf(char) + 1] + num]);
      }

      if (shipLength === 2) {
        shipArea.push(board[letters[letters.indexOf(char) + 1] + num]);
      }
    }

    if (shipArea.every(isEmpty)) {
      return false; // no collision
    } else {
      return true; // collision
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
    var shipLength = ships[ship].hitboxes.length;

    var validCoords = _findValidCoords(shipLength, orientation);

    if (validCoords.includes(coords)) {
      return true;
    } else {
      return false;
    }
  }

  function _findValidCoords(shipLength, orientation) {
    var invalidArray = _findInvalidCoords(shipLength, orientation);

    var validMoves = []; // add any keys that would hit another ship to invalid array
    //

    for (var key in board) {
      if (!invalidArray.includes(key) && _collisionCheck(shipLength, key, orientation)) {
        invalidArray.push(key);
      }
    } // make an array out of all coords that are not in invalidArray


    for (var _key3 in board) {
      if (!invalidArray.includes(_key3)) {
        validMoves.push(_key3);
      }
    }

    return validMoves;
  }

  function _placeRandom() {
    if (remainingShips.length === 0) {
      return [];
    }

    var orientations = ["horizontal", "vertical"];
    var randomOrientation = orientations[Math.floor(Math.random() * 2)];
    var randomShip = remainingShips[Math.floor(Math.random() * remainingShips.length)];

    var validCoords = _findValidCoords(ships[randomShip].hitboxes.length, randomOrientation);

    var randomValidCoords = validCoords[Math.floor(Math.random() * validCoords.length)];
    return placeShip(randomShip, randomValidCoords, randomOrientation);
  }

  function placeShip(ship, coords, orientation) {
    var random = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    // return undefined - failed to place ship
    if (random === true) {
      return _placeRandom();
    }

    if ([ship, coords, orientation].some(function (arg) {
      return arg === undefined;
    }) || !Object.keys(ships).includes(ship.toLowerCase()) || !Object.keys(board).includes(coords.toUpperCase()) || orientation !== "vertical" && orientation !== "horizontal") {
      return [];
    }

    var shipIndex = remainingShips.indexOf(ship);

    if (shipIndex === -1) {
      return []; // return false - ship cannot be placed there
    } else if (_checkPlacement(ship, coords, orientation)) {
      placedShips.push(remainingShips.splice(shipIndex, 1)[0]);

      var shipIndexes = _findShipIndexes(ships[ship].hitboxes.length, coords, orientation);

      for (var i = 0; i < ships[ship].hitboxes.length; i++) {
        board[shipIndexes[i]] = ships[ship].hitboxes[i];
      }

      return shipIndexes; // ship placed
    } else {
      return [];
    }
  }

  function recieveAttack(coords) {
    if (_typeof(board[coords]) === "object" && !board[coords].isHit) {
      board[coords].hit();
      return 1;
    } else if (board[coords] === "") {
      board[coords] = "miss";
      return 0;
    } else if (_typeof(board[coords]) === "object" && board[coords].isHit) {
      return -1;
    } else if (board[coords] === "miss") {
      return -1;
    } // hit 1, miss 0, already hit -1

  }

  function reset() {
    for (var key in board) {
      board[key] = "";
    }

    ships.carrier = (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(5);
    ships.battleship = (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(4);
    ships.cruiser = (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(3);
    ships.submarine = (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(3);
    ships.destroyer = (0,_ShipFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(2);
    remainingShips = Object.keys(ships);
    placedShips = [];
  }

  return Object.freeze({
    get board() {
      var newBoard = {};

      for (var key in board) {
        if (typeof board[key] === "string") {
          newBoard[key] = board[key];
        } else if (_typeof(board[key]) === "object" && !board[key].isHit) {
          newBoard[key] = "";
        } else if (_typeof(board[key]) === "object" && board[key].isHit) {
          newBoard[key] = "hit";
        }
      }

      return newBoard;
    },

    get remainingShips() {
      return _toConsumableArray(remainingShips);
    },

    get allShipsSunk() {
      // untested
      if (Object.values(ships).every(function (ship) {
        return Object.values(ship.hitboxes).every(function (hitbox) {
          return hitbox.isHit === true;
        });
      })) {
        return true;
      } else {
        return false;
      }
    },

    placeShip: placeShip,
    recieveAttack: recieveAttack,
    reset: reset
  });
} // gameboards need to be able to place ships at specific coordinates
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

/***/ }),

/***/ "./src/modules/DOMController.js":
/*!**************************************!*\
  !*** ./src/modules/DOMController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DOMController = function () {
  function renderPlayerPage() {}

  function renderShipPage(player) {}

  function placeShipListeners(player) {
    var dragged;
    var ships = document.querySelector("#ships");
    var board = document.querySelector("#board");
    var orientationToggle = document.querySelector(".orientation-toggle");
    orientationToggle.addEventListener("click", function (e) {
      if (e.target.textContent === "horizontal") {
        e.target.textContent = "vertical";
      } else if (e.target.textContent === "vertical") {
        e.target.textContent = "horizontal";
      }
    });
    ships.addEventListener("dragstart", function (e) {
      dragged = e.target;
    });
    board.addEventListener("dragover", function (e) {
      return e.preventDefault();
    });
    board.addEventListener("dragenter", function (e) {
      if (e.target.style.backgroundColor === "") {
        e.target.style.backgroundColor = "lightgray";
      }
    });
    board.addEventListener("dragleave", function (e) {
      if (e.target.style.backgroundColor === "lightgray") {
        e.target.style.backgroundColor = "";
      }
    });
    board.addEventListener("drop", function (e) {
      var dataKey = e.target.getAttribute("data-key");
      var shipName = dragged.textContent;
      var orientation = orientationToggle.textContent;
      var coordsToHighlight = player.gameboard.placeShip(shipName, dataKey, orientation);

      if (coordsToHighlight.length) {
        var elems = [];
        coordsToHighlight.forEach(function (coord) {
          var elem = document.querySelector(".coord[data-key=\"".concat(coord, "\"]"));
          elems.push(elem);
        });
        elems.forEach(function (elem) {
          elem.style.backgroundColor = "green";
        });
      } else {
        var currentColor = e.target.style.backgroundColor;
        if (currentColor === "lightgray") currentColor = "";
        e.target.style.backgroundColor = "lightcoral";
        setTimeout(function () {
          return e.target.style.backgroundColor = currentColor;
        }, 250);
      }
    });
  }

  function renderHitPage(player) {}

  function renderWinPage(winner) {}

  return {
    renderPlayerPage: renderPlayerPage,
    renderShipPage: renderShipPage,
    placeShipListeners: placeShipListeners,
    renderHitPage: renderHitPage,
    renderWinPage: renderWinPage
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMController);

/***/ }),

/***/ "./src/modules/GameLoop.js":
/*!*********************************!*\
  !*** ./src/modules/GameLoop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var Game = function () {
  var player1;
  var player2;
  return {
    get player1() {
      return player1;
    },

    get player2() {
      return player2;
    },

    set player1(playerObj) {
      if (_typeof(playerObj) !== "object") return;
      player1 = playerObj;
    },

    set player2(playerObj) {
      if (_typeof(playerObj) !== "object") return;
      player2 = playerObj;
    },

    get winner() {
      if (!player1.gameboard.allShipsSunk && !player2.gameboard.allShipsSunk) {
        return false;
      } else if (player1.gameboard.allShipsSunk) {
        return player1;
      } else if (player2.gameboard.allShipsSunk) {
        return player2;
      }
    }

  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/modules/PlayerFactory.js":
/*!**************************************!*\
  !*** ./src/modules/PlayerFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerFactory)
/* harmony export */ });
/* harmony import */ var _BoardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardFactory */ "./src/modules/BoardFactory.js");

function PlayerFactory(name) {
  var isComputer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof name !== "string") return; // players take turns attacking the enemy gameboard
  // players might each have their own gameboard and ships
  // computer players should be able to make random, legal plays

  var gameboard = (0,_BoardFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return Object.freeze({
    get name() {
      return name;
    },

    get isComputer() {
      return isComputer;
    },

    get gameboard() {
      return gameboard;
    }

  });
}

/***/ }),

/***/ "./src/modules/ShipFactory.js":
/*!************************************!*\
  !*** ./src/modules/ShipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShipFactory)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ShipFactory(length) {
  if (length < 2 || length > 5) return;

  var hitboxes = _createHitboxes();

  function _createHitboxes() {
    var array = [];

    var _loop = function _loop(i) {
      array.push({
        isHit: false,
        hit: function hit() {
          return _hit(i);
        }
      });
    };

    for (var i = 0; i < length; i++) {
      _loop(i);
    }

    return array;
  }

  function _hit(index) {
    if (index >= hitboxes.length || index < 0) return;
    hitboxes[index].isHit = true;
    return hitboxes.map(function (hitbox) {
      return _objectSpread({}, hitbox);
    });
  }

  return Object.freeze({
    get hitboxes() {
      return hitboxes.map(function (hitbox) {
        // return { ...hitbox }

        /* This might make it so I don't need to use TargetFactory */
        return {
          get isHit() {
            return hitbox.isHit;
          },

          hit: hitbox.hit
        };
      });
    },

    get isSunk() {
      if (hitboxes.every(function (hitbox) {
        return hitbox.isHit === true;
      })) {
        return true;
      } else {
        return false;
      }
    }

  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/PlayerFactory */ "./src/modules/PlayerFactory.js");
/* harmony import */ var _modules_DOMController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOMController */ "./src/modules/DOMController.js");
/* harmony import */ var _modules_GameLoop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/GameLoop.js */ "./src/modules/GameLoop.js");



_modules_GameLoop_js__WEBPACK_IMPORTED_MODULE_2__["default"].player1 = (0,_modules_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])("player1");
_modules_DOMController__WEBPACK_IMPORTED_MODULE_1__["default"].placeShipListeners(_modules_GameLoop_js__WEBPACK_IMPORTED_MODULE_2__["default"].player1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFPTyxNQUFNLENBQUNQLEtBQWQ7QUFDRCxXQUhJOztBQUlMQyxVQUFBQSxHQUFHLEVBQUVNLE1BQU0sQ0FBQ047QUFKUCxTQUFQO0FBTUQsT0FUTSxDQUFQO0FBVUQsS0Faa0I7O0FBYW5CLFFBQUlnRCxNQUFKLEdBQWE7QUFDWCxVQUFJeEUsUUFBUSxDQUFDSCxLQUFULENBQWUsVUFBQ2lDLE1BQUQ7QUFBQSxlQUFZQSxNQUFNLENBQUNQLEtBQVAsS0FBaUIsSUFBN0I7QUFBQSxPQUFmLENBQUosRUFBdUQ7QUFDckQsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFuQmtCLEdBQWQsQ0FBUDtBQXFCRDs7Ozs7O1VDN0NEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBc0Msb0VBQUEsR0FBZUksa0VBQWEsQ0FBQyxTQUFELENBQTVCO0FBQ0FsQyxpRkFBQSxDQUFpQzhCLG9FQUFqQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0JvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwRmFjdG9yeSBmcm9tIFwiLi9TaGlwRmFjdG9yeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkRmFjdG9yeSgpIHtcbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgY2FycmllcjogU2hpcEZhY3RvcnkoNSksXG4gICAgYmF0dGxlc2hpcDogU2hpcEZhY3RvcnkoNCksXG4gICAgY3J1aXNlcjogU2hpcEZhY3RvcnkoMyksXG4gICAgc3VibWFyaW5lOiBTaGlwRmFjdG9yeSgzKSxcbiAgICBkZXN0cm95ZXI6IFNoaXBGYWN0b3J5KDIpLFxuICB9XG4gIC8vIGJvYXJkcyBzdGFydCBvdXQgd2l0aG91dCBzaGlwcyBwbGFjZWRcbiAgbGV0IHJlbWFpbmluZ1NoaXBzID0gT2JqZWN0LmtleXMoc2hpcHMpXG4gIC8vIHdoZW4gYWxsIHNoaXBzIGFyZSBwbGFjZWQsIHJlY2lldmVBdHRhY2sgc2hvdWxkIGJlIGF2YWlsYWJsZVxuICBsZXQgcGxhY2VkU2hpcHMgPSBbXVxuXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBib2FyZCA9IHtcbiAgICBBMTogJycsIEEyOiAnJywgQTM6ICcnLCBBNDogJycsIEE1OiAnJywgQTY6ICcnLCBBNzogJycsIEE4OiAnJywgQTk6ICcnLCBBMTA6ICcnLCBcbiAgICBCMTogJycsIEIyOiAnJywgQjM6ICcnLCBCNDogJycsIEI1OiAnJywgQjY6ICcnLCBCNzogJycsIEI4OiAnJywgQjk6ICcnLCBCMTA6ICcnLCBcbiAgICBDMTogJycsIEMyOiAnJywgQzM6ICcnLCBDNDogJycsIEM1OiAnJywgQzY6ICcnLCBDNzogJycsIEM4OiAnJywgQzk6ICcnLCBDMTA6ICcnLCBcbiAgICBEMTogJycsIEQyOiAnJywgRDM6ICcnLCBENDogJycsIEQ1OiAnJywgRDY6ICcnLCBENzogJycsIEQ4OiAnJywgRDk6ICcnLCBEMTA6ICcnLCBcbiAgICBFMTogJycsIEUyOiAnJywgRTM6ICcnLCBFNDogJycsIEU1OiAnJywgRTY6ICcnLCBFNzogJycsIEU4OiAnJywgRTk6ICcnLCBFMTA6ICcnLCBcbiAgICBGMTogJycsIEYyOiAnJywgRjM6ICcnLCBGNDogJycsIEY1OiAnJywgRjY6ICcnLCBGNzogJycsIEY4OiAnJywgRjk6ICcnLCBGMTA6ICcnLCBcbiAgICBHMTogJycsIEcyOiAnJywgRzM6ICcnLCBHNDogJycsIEc1OiAnJywgRzY6ICcnLCBHNzogJycsIEc4OiAnJywgRzk6ICcnLCBHMTA6ICcnLCBcbiAgICBIMTogJycsIEgyOiAnJywgSDM6ICcnLCBINDogJycsIEg1OiAnJywgSDY6ICcnLCBINzogJycsIEg4OiAnJywgSDk6ICcnLCBIMTA6ICcnLCBcbiAgICBJMTogJycsIEkyOiAnJywgSTM6ICcnLCBJNDogJycsIEk1OiAnJywgSTY6ICcnLCBJNzogJycsIEk4OiAnJywgSTk6ICcnLCBJMTA6ICcnLCBcbiAgICBKMTogJycsIEoyOiAnJywgSjM6ICcnLCBKNDogJycsIEo1OiAnJywgSjY6ICcnLCBKNzogJycsIEo4OiAnJywgSjk6ICcnLCBKMTA6ICcnLFxuICB9XG5cbiAgZnVuY3Rpb24gX2ZpbmRJbnZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gU2hpcHMgYXJlIHBsYWNlZCBmcm9tIHRoZSBtZWRpYW4gaW5kZXgsIG9yIGluIHRoZSBjYXNlIG9mIGV2ZW5cbiAgICAvLyBzaGlwTGVuZ3RocyBieSB0aGUgbWlkZGxlLWxlZnQgaW5kZXguXG4gICAgLy8gVGhpcyBmdW5jdGlvbjpcbiAgICAvLyAxKSBtYWtlcyBhbiBhcnJheSBvZiBhbGwgdGhlIGludmFsaWQgcGxhY2VtZW50cyBmb3IgdGhhdCBjZW50ZXIgaW5kZXhcbiAgICAvLyB0aGF0IHdvdWxkIGNhdXNlIHRoZSBzaGlwIHRvIGhhbmcgb2ZmIHRoZSBib2FyZC5cbiAgICAvLyAyKSB0aGVuIGFkZHMgdG8gdGhlIGFycmF5IG9mIGludmFsaWQgcGxhY2VtZW50cyBhbGwgYm9hcmQgaW5kZXhlcyB0aGF0XG4gICAgLy8gYXJlIGFscmVhZHkgb2NjdXBpZWRcbiAgICBjb25zdCBiYWRJbmRleGVzID0gW11cbiAgICBjb25zdCBleGNsdXNpb25zID0gW11cblxuICAgIC8vIGZpbmRzIHBsYWNlbWVudHMgdGhhdCB3b3VsZCBtYWtlIGEgaG9yaXpvbnRhbCBzaGlwIGhhbmcgb2ZmIHRoZSBib2FyZFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSBleGNsdXNpb25zLnB1c2goMSwgMiwgOSwgMTApXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkgZXhjbHVzaW9ucy5wdXNoKDEsIDksIDEwKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIGV4Y2x1c2lvbnMucHVzaCgxLCAxMClcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSBleGNsdXNpb25zLnB1c2goMTApXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBleGNsdXNpb24gPSBleGNsdXNpb25zW2ldXG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5LmVuZHNXaXRoKGV4Y2x1c2lvbikpIHtcbiAgICAgICAgICAgIGJhZEluZGV4ZXMucHVzaChrZXkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmluZHMgcGxhY2VtZW50cyB0aGF0IHdvdWxkIG1ha2UgYSB2ZXJpY2FsIHNoaXAgaGFuZyBvZmYgdGhlIGJvYXJkXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSBleGNsdXNpb25zLnB1c2goXCJBXCIsIFwiQlwiLCBcIklcIiwgXCJKXCIpXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkgZXhjbHVzaW9ucy5wdXNoKFwiQVwiLCBcIklcIiwgXCJKXCIpXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykgZXhjbHVzaW9ucy5wdXNoKFwiQVwiLCBcIkpcIilcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSBleGNsdXNpb25zLnB1c2goXCJKXCIpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBleGNsdXNpb24gPSBleGNsdXNpb25zW2ldXG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoZXhjbHVzaW9uKSkge1xuICAgICAgICAgICAgYmFkSW5kZXhlcy5wdXNoKGtleSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGRzIG9jY3VwaWVkIGJvYXJkIGluZGV4ZXMgdGhhdCBhcmUgbm90IGFscmVhZHkgaW4gdGhlIGxpc3RcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgaWYgKGJvYXJkW2tleV0gIT09IFwiXCIgJiYgYmFkSW5kZXhlcy5pbmNsdWRlcyhrZXkpID09PSBmYWxzZSkge1xuICAgICAgICBiYWRJbmRleGVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYWRJbmRleGVzXG4gIH1cblxuICBmdW5jdGlvbiBfZmluZFNoaXBJbmRleGVzKHNoaXBMZW5ndGgsIGdvb2RDb29yZHMsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl1cbiAgICBjb25zdCBjaGFyID0gZ29vZENvb3Jkcy5jaGFyQXQoMClcbiAgICBjb25zdCBudW0gPSBOdW1iZXIucGFyc2VJbnQoZ29vZENvb3Jkcy5zdWJzdHJpbmcoMSkpXG4gICAgY29uc3Qgc2hpcEFyZWEgPSBbXVxuXG4gICAgLy8gSSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgaW5jbHVkZSBjZW50ZXIgaWYgSSB3ZXJlIHRvIGp1c3QgYWRkXG4gICAgLy8gYm9hcmRbY2hhciArIG51bV0gdG8gZWFjaFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBudW1iZXJzP1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBjaGFyICsgKG51bSAtIDEpLFxuICAgICAgICAgIGNoYXIgKyAobnVtIC0gMiksXG4gICAgICAgICAgZ29vZENvb3JkcyxcbiAgICAgICAgICBjaGFyICsgKG51bSArIDEpLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMilcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGNoYXIgKyAobnVtIC0gMSksXG4gICAgICAgICAgZ29vZENvb3JkcyxcbiAgICAgICAgICBjaGFyICsgKG51bSArIDEpLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMilcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGNoYXIgKyAobnVtIC0gMSksIGdvb2RDb29yZHMsIGNoYXIgKyAobnVtICsgMSkpXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goZ29vZENvb3JkcywgY2hhciArIChudW0gKyAxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIGxldHRlcnM/XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAyXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGdvb2RDb29yZHMsIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaXBBcmVhXG4gIH1cblxuICBmdW5jdGlvbiBfY29sbGlzaW9uQ2hlY2soc2hpcExlbmd0aCwgZ29vZENvb3Jkcywgb3JpZW50YXRpb24pIHtcbiAgICAvLyBkZXNpZ25lZCB0byBhY2NlcHQgY29vcmRzIHRoYXQgYXJlIE5PVCBpbnZhbGlkLCBmaWx0ZXIgY29vcmRzIGFnYWluc3QgdGhlXG4gICAgLy8gYXJyYXkgX2ZpbmRJbnZhbGlkQ29vcmRzKCkgcmV0dXJucyBiZWZvcmUgcGFzc2luZyB0aGVtIGludG8gdGhpcyBmdW5jdGlvblxuXG4gICAgLy8gY2hlY2tzIGZvciBjb2xsaXNpb25zIGFsb25nIHRoZSBheGlzIGRlZmluZWQgYnkgJ29yaWVudGF0aW9uJyBmcm9tIHRoZVxuICAgIC8vIGNlbnRlciBvZiB0aGUgc2hpcC4gRG9lcyBub3QgY2hlY2sgdGhlIGNlbnRlciBvZiB0aGUgc2hpcCBpdHNlbGYuXG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl1cbiAgICBjb25zdCBjaGFyID0gZ29vZENvb3Jkcy5jaGFyQXQoMClcbiAgICBjb25zdCBudW0gPSBOdW1iZXIucGFyc2VJbnQoZ29vZENvb3Jkcy5zdWJzdHJpbmcoMSkpXG4gICAgY29uc3Qgc2hpcEFyZWEgPSBbXVxuICAgIGNvbnN0IGlzRW1wdHkgPSAoY29vcmRzKSA9PiBjb29yZHMgPT09IFwiXCJcblxuICAgIC8vIEkgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIGluY2x1ZGUgY2VudGVyIGlmIEkgd2VyZSB0byBqdXN0IGFkZFxuICAgIC8vIGJvYXJkW2NoYXIgKyBudW1dIHRvIGVhY2hcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgbnVtYmVycz9cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAyKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAyKV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtIC0gMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMildXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChib2FyZFtjaGFyICsgKG51bSAtIDEpXSwgYm9hcmRbY2hhciArIChudW0gKyAxKV0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goYm9hcmRbZ29vZENvb3Jkc10sIGJvYXJkW2NoYXIgKyAobnVtICsgMSldKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgbGV0dGVycz9cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAyXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMl0gKyBudW1dXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNoaXBBcmVhLmV2ZXJ5KGlzRW1wdHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2UgLy8gbm8gY29sbGlzaW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlIC8vIGNvbGxpc2lvblxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jaGVja1BsYWNlbWVudChzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uKSB7XG4gICAgLypcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcHNbc2hpcF0uaGl0Ym94ZXMubGVuZ3RoXG4gICAgY29uc3QgaW52YWxpZENvb3JkcyA9IF9maW5kSW52YWxpZENvb3JkcyhzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbilcbiAgICBpZiAoaW52YWxpZENvb3Jkcy5pbmNsdWRlcyhjb29yZHMpKSByZXR1cm4gZmFsc2VcbiAgICBpZiAoX2NvbGxpc2lvbkNoZWNrKHNoaXBMZW5ndGgsIGNvb3Jkcywgb3JpZW50YXRpb24pID09PSB0cnVlKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gdHJ1ZVxuICAgIC8vIHJldHVybiBmYWxzZSAtIHNoaXAgY2Fubm90IGJlIHBsYWNlZCB0aGVyZVxuICAgIC8vIHJldHVybiB0cnVlIC0gdmFsaWQgcGxhY2VtZW50XG4gICAgKi9cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcHNbc2hpcF0uaGl0Ym94ZXMubGVuZ3RoXG4gICAgY29uc3QgdmFsaWRDb29yZHMgPSBfZmluZFZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKVxuICAgIGlmICh2YWxpZENvb3Jkcy5pbmNsdWRlcyhjb29yZHMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZmluZFZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgaW52YWxpZEFycmF5ID0gX2ZpbmRJbnZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKVxuICAgIGNvbnN0IHZhbGlkTW92ZXMgPSBbXVxuXG4gICAgLy8gYWRkIGFueSBrZXlzIHRoYXQgd291bGQgaGl0IGFub3RoZXIgc2hpcCB0byBpbnZhbGlkIGFycmF5XG4gICAgLy9cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhaW52YWxpZEFycmF5LmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgX2NvbGxpc2lvbkNoZWNrKHNoaXBMZW5ndGgsIGtleSwgb3JpZW50YXRpb24pXG4gICAgICApIHtcbiAgICAgICAgaW52YWxpZEFycmF5LnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1ha2UgYW4gYXJyYXkgb3V0IG9mIGFsbCBjb29yZHMgdGhhdCBhcmUgbm90IGluIGludmFsaWRBcnJheVxuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBpZiAoIWludmFsaWRBcnJheS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHZhbGlkTW92ZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkTW92ZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wbGFjZVJhbmRvbSgpIHtcbiAgICBpZiAocmVtYWluaW5nU2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgY29uc3Qgb3JpZW50YXRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdXG4gICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildXG4gICAgY29uc3QgcmFuZG9tU2hpcCA9XG4gICAgICByZW1haW5pbmdTaGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1haW5pbmdTaGlwcy5sZW5ndGgpXVxuICAgIGNvbnN0IHZhbGlkQ29vcmRzID0gX2ZpbmRWYWxpZENvb3JkcyhcbiAgICAgIHNoaXBzW3JhbmRvbVNoaXBdLmhpdGJveGVzLmxlbmd0aCxcbiAgICAgIHJhbmRvbU9yaWVudGF0aW9uXG4gICAgKVxuICAgIGNvbnN0IHJhbmRvbVZhbGlkQ29vcmRzID1cbiAgICAgIHZhbGlkQ29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkQ29vcmRzLmxlbmd0aCldXG4gICAgcmV0dXJuIHBsYWNlU2hpcChyYW5kb21TaGlwLCByYW5kb21WYWxpZENvb3JkcywgcmFuZG9tT3JpZW50YXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbiwgcmFuZG9tID0gZmFsc2UpIHtcbiAgICAvLyByZXR1cm4gdW5kZWZpbmVkIC0gZmFpbGVkIHRvIHBsYWNlIHNoaXBcbiAgICBpZiAocmFuZG9tID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gX3BsYWNlUmFuZG9tKClcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBbc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbl0uc29tZSgoYXJnKSA9PiBhcmcgPT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICFPYmplY3Qua2V5cyhzaGlwcykuaW5jbHVkZXMoc2hpcC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgIU9iamVjdC5rZXlzKGJvYXJkKS5pbmNsdWRlcyhjb29yZHMudG9VcHBlckNhc2UoKSkgfHxcbiAgICAgIChvcmllbnRhdGlvbiAhPT0gXCJ2ZXJ0aWNhbFwiICYmIG9yaWVudGF0aW9uICE9PSBcImhvcml6b250YWxcIilcbiAgICApIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBJbmRleCA9IHJlbWFpbmluZ1NoaXBzLmluZGV4T2Yoc2hpcClcbiAgICBpZiAoc2hpcEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIFtdIC8vIHJldHVybiBmYWxzZSAtIHNoaXAgY2Fubm90IGJlIHBsYWNlZCB0aGVyZVxuICAgIH0gZWxzZSBpZiAoX2NoZWNrUGxhY2VtZW50KHNoaXAsIGNvb3Jkcywgb3JpZW50YXRpb24pKSB7XG4gICAgICBwbGFjZWRTaGlwcy5wdXNoKHJlbWFpbmluZ1NoaXBzLnNwbGljZShzaGlwSW5kZXgsIDEpWzBdKVxuICAgICAgY29uc3Qgc2hpcEluZGV4ZXMgPSBfZmluZFNoaXBJbmRleGVzKFxuICAgICAgICBzaGlwc1tzaGlwXS5oaXRib3hlcy5sZW5ndGgsXG4gICAgICAgIGNvb3JkcyxcbiAgICAgICAgb3JpZW50YXRpb25cbiAgICAgIClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1tzaGlwXS5oaXRib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFtzaGlwSW5kZXhlc1tpXV0gPSBzaGlwc1tzaGlwXS5oaXRib3hlc1tpXVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBJbmRleGVzIC8vIHNoaXAgcGxhY2VkXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2lldmVBdHRhY2soY29vcmRzKSB7XG4gICAgaWYgKHR5cGVvZiBib2FyZFtjb29yZHNdID09PSBcIm9iamVjdFwiICYmICFib2FyZFtjb29yZHNdLmlzSGl0KSB7XG4gICAgICBib2FyZFtjb29yZHNdLmhpdCgpXG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRzXSA9PT0gXCJcIikge1xuICAgICAgYm9hcmRbY29vcmRzXSA9IFwibWlzc1wiXG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW2Nvb3Jkc10gPT09IFwib2JqZWN0XCIgJiYgYm9hcmRbY29vcmRzXS5pc0hpdCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmIChib2FyZFtjb29yZHNdID09PSBcIm1pc3NcIikge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuXG4gICAgLy8gaGl0IDEsIG1pc3MgMCwgYWxyZWFkeSBoaXQgLTFcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBib2FyZFtrZXldID0gXCJcIlxuICAgIH1cblxuICAgIHNoaXBzLmNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KVxuICAgIHNoaXBzLmJhdHRsZXNoaXAgPSBTaGlwRmFjdG9yeSg0KVxuICAgIHNoaXBzLmNydWlzZXIgPSBTaGlwRmFjdG9yeSgzKVxuICAgIHNoaXBzLnN1Ym1hcmluZSA9IFNoaXBGYWN0b3J5KDMpXG4gICAgc2hpcHMuZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMilcblxuICAgIHJlbWFpbmluZ1NoaXBzID0gT2JqZWN0LmtleXMoc2hpcHMpXG4gICAgcGxhY2VkU2hpcHMgPSBbXVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkID0ge31cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmRba2V5XSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIG5ld0JvYXJkW2tleV0gPSBib2FyZFtrZXldXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW2tleV0gPT09IFwib2JqZWN0XCIgJiYgIWJvYXJkW2tleV0uaXNIaXQpIHtcbiAgICAgICAgICBuZXdCb2FyZFtrZXldID0gXCJcIlxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZFtrZXldID09PSBcIm9iamVjdFwiICYmIGJvYXJkW2tleV0uaXNIaXQpIHtcbiAgICAgICAgICBuZXdCb2FyZFtrZXldID0gXCJoaXRcIlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdCb2FyZFxuICAgIH0sXG4gICAgZ2V0IHJlbWFpbmluZ1NoaXBzKCkge1xuICAgICAgcmV0dXJuIFsuLi5yZW1haW5pbmdTaGlwc11cbiAgICB9LFxuICAgIGdldCBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAvLyB1bnRlc3RlZFxuICAgICAgaWYgKFxuICAgICAgICBPYmplY3QudmFsdWVzKHNoaXBzKS5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHNoaXAuaGl0Ym94ZXMpLmV2ZXJ5KFxuICAgICAgICAgICAgKGhpdGJveCkgPT4gaGl0Ym94LmlzSGl0ID09PSB0cnVlXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIHJlc2V0LFxuICB9KVxufVxuXG4vLyBnYW1lYm9hcmRzIG5lZWQgdG8gYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlc1xuLy8gKGJ5IGNhbGxpbmcgdGhlIHNoaXAgZmFjdG9yeSBmdW5jdGlvbj8pXG4vLyBnYW1lYm9hcmRzIHNob3VsZCBoYXZlIGEgcmVjaWV2ZWF0dGFjaygpIGZ1bmN0aW9uIHRoYXQgdGFrZXMgY29vcmRpbmF0ZXMsXG4vLyBkZXRlcm1pbmVkIGlmIGEgc2hpcCB3YXMgaGl0IGEgaGl0IG9yIGEgbWlzcywgYW5kIHNlbmQgYSBoaXQoKSBmdW5jdGlvblxuLy8gdG8gdGhlIGNvcnJlY3Qgc2hpcFxuLy8gZ2FtZWJvYXJkcyBrZWVwIHRyYWNrIG9mIG1pc3NlZCBoaXRzIHRvIGRpc3BsYXlcbi8vIGdhbWVib2FyZHMgc2hvdWxkIGtub3cgd2hldGhlciBvciBub3QgYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rXG5cbi8qIFRoaXMgbWlnaHQgYmUgdXNlZCBmb3IgVUkgbGF0ZXJcbiAgZnVuY3Rpb24gX2ZpbmRDZW50ZXJJbmRleChzaGlwTGVuZ3RoKSB7XG4gICAgLy8gcGxhY2VtZW50IGlzIGRldGVybWluZWQgZnJvbSBjZW50ZXIgLSB0aGUgbWVkaWFuIGZvciBvZGQgbnVtYmVycyAtXG4gICAgLy8gb3IgdGhlIG1lYW4gcm91bmRlZCBkb3duIHRvIGFuIGludCBmb3IgZXZlbiBudW1iZXJzXG4gICAgLy8gZmluZENlbnRlckluZGV4KCkgd29ya3MgZm9yIG51bWJlcnMgdXAgdG8gNSwgYnV0IEkgd291bGRuJ3QgdHJ1c3QgaXQgdG8gYWx3YXlzXG4gICAgLy8gZmluZCB0aGUgY29ycmVjdCBtZWRpYW4vbWVhblxuICAgIC8vIDAgMSAyIDMgNFxuICAgIC8vIDAgMSAyIDNcbiAgICAvLyAwIDEgMlxuICAgIC8vIDAgMVxuICAgIC8vIDEgMiAzIDQgNVxuICAgIGxldCBjZW50ZXIgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNlbnRlciA9IGNlbnRlciArIGlcbiAgICAgIGlmIChpID09PSBzaGlwTGVuZ3RoIC0gMSkgY2VudGVyID0gTnVtYmVyLnBhcnNlSW50KGNlbnRlciAvIHNoaXBMZW5ndGgpXG4gICAgfVxuICAgIHJldHVybiBjZW50ZXJcbiAgfVxuICAqL1xuIiwiY29uc3QgRE9NQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHJlbmRlclBsYXllclBhZ2UoKSB7fVxuXG4gIGZ1bmN0aW9uIHJlbmRlclNoaXBQYWdlKHBsYXllcikge31cblxuICBmdW5jdGlvbiBwbGFjZVNoaXBMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgbGV0IGRyYWdnZWRcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hpcHNcIilcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIilcbiAgICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JpZW50YXRpb24tdG9nZ2xlXCIpXG5cbiAgICBvcmllbnRhdGlvblRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcInZlcnRpY2FsXCJcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiaG9yaXpvbnRhbFwiXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNoaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRyYWdnZWQgPSBlLnRhcmdldFxuICAgIH0pXG5cbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBcIlwiKSB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmF5XCJcbiAgICAgIH1cbiAgICB9KVxuICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwibGlnaHRncmF5XCIpIHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuICAgICAgfVxuICAgIH0pXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IGRhdGFLZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKVxuICAgICAgY29uc3Qgc2hpcE5hbWUgPSBkcmFnZ2VkLnRleHRDb250ZW50XG4gICAgICBjb25zdCBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uVG9nZ2xlLnRleHRDb250ZW50XG4gICAgICBjb25zdCBjb29yZHNUb0hpZ2hsaWdodCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgZGF0YUtleSxcbiAgICAgICAgb3JpZW50YXRpb25cbiAgICAgIClcbiAgICAgIGlmIChjb29yZHNUb0hpZ2hsaWdodC5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBbXVxuICAgICAgICBjb29yZHNUb0hpZ2hsaWdodC5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29vcmRbZGF0YS1rZXk9XCIke2Nvb3JkfVwiXWApXG4gICAgICAgICAgZWxlbXMucHVzaChlbGVtKVxuICAgICAgICB9KVxuXG4gICAgICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIlxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDb2xvciA9IGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICBpZiAoY3VycmVudENvbG9yID09PSBcImxpZ2h0Z3JheVwiKSBjdXJyZW50Q29sb3IgPSBcIlwiXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRjb3JhbFwiXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGN1cnJlbnRDb2xvciksIDI1MClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySGl0UGFnZShwbGF5ZXIpIHt9XG5cbiAgZnVuY3Rpb24gcmVuZGVyV2luUGFnZSh3aW5uZXIpIHt9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXJQbGF5ZXJQYWdlLFxuICAgIHJlbmRlclNoaXBQYWdlLFxuICAgIHBsYWNlU2hpcExpc3RlbmVycyxcbiAgICByZW5kZXJIaXRQYWdlLFxuICAgIHJlbmRlcldpblBhZ2UsXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlclxuIiwiY29uc3QgR2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGF5ZXIxXG4gIGxldCBwbGF5ZXIyXG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcGxheWVyMSgpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIxXG4gICAgfSxcbiAgICBnZXQgcGxheWVyMigpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIyXG4gICAgfSxcbiAgICBzZXQgcGxheWVyMShwbGF5ZXJPYmopIHtcbiAgICAgIGlmICh0eXBlb2YgcGxheWVyT2JqICE9PSBcIm9iamVjdFwiKSByZXR1cm5cbiAgICAgIHBsYXllcjEgPSBwbGF5ZXJPYmpcbiAgICB9LFxuICAgIHNldCBwbGF5ZXIyKHBsYXllck9iaikge1xuICAgICAgaWYgKHR5cGVvZiBwbGF5ZXJPYmogIT09IFwib2JqZWN0XCIpIHJldHVyblxuICAgICAgcGxheWVyMiA9IHBsYXllck9ialxuICAgIH0sXG4gICAgZ2V0IHdpbm5lcigpIHtcbiAgICAgIGlmICghcGxheWVyMS5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rICYmICFwbGF5ZXIyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmspIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHBsYXllcjEuZ2FtZWJvYXJkLmFsbFNoaXBzU3Vuaykge1xuICAgICAgICByZXR1cm4gcGxheWVyMVxuICAgICAgfSBlbHNlIGlmIChwbGF5ZXIyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmspIHtcbiAgICAgICAgcmV0dXJuIHBsYXllcjJcbiAgICAgIH1cbiAgICB9LFxuICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVcbiIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vQm9hcmRGYWN0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyRmFjdG9yeShuYW1lLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiKSByZXR1cm5cbiAgLy8gcGxheWVycyB0YWtlIHR1cm5zIGF0dGFja2luZyB0aGUgZW5lbXkgZ2FtZWJvYXJkXG4gIC8vIHBsYXllcnMgbWlnaHQgZWFjaCBoYXZlIHRoZWlyIG93biBnYW1lYm9hcmQgYW5kIHNoaXBzXG5cbiAgLy8gY29tcHV0ZXIgcGxheWVycyBzaG91bGQgYmUgYWJsZSB0byBtYWtlIHJhbmRvbSwgbGVnYWwgcGxheXNcblxuICBjb25zdCBnYW1lYm9hcmQgPSBCb2FyZEZhY3RvcnkoKVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfSxcbiAgICBnZXQgaXNDb21wdXRlcigpIHtcbiAgICAgIHJldHVybiBpc0NvbXB1dGVyXG4gICAgfSxcbiAgICBnZXQgZ2FtZWJvYXJkKCkge1xuICAgICAgcmV0dXJuIGdhbWVib2FyZFxuICAgIH0sXG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwRmFjdG9yeShsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA8IDIgfHwgbGVuZ3RoID4gNSkgcmV0dXJuXG5cbiAgY29uc3QgaGl0Ym94ZXMgPSBfY3JlYXRlSGl0Ym94ZXMoKVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVIaXRib3hlcygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgaGl0OiAoKSA9PiBoaXQoaSksXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSBoaXRib3hlcy5sZW5ndGggfHwgaW5kZXggPCAwKSByZXR1cm5cbiAgICBoaXRib3hlc1tpbmRleF0uaXNIaXQgPSB0cnVlXG4gICAgcmV0dXJuIGhpdGJveGVzLm1hcCgoaGl0Ym94KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5oaXRib3ggfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IGhpdGJveGVzKCkge1xuICAgICAgcmV0dXJuIGhpdGJveGVzLm1hcCgoaGl0Ym94KSA9PiB7XG4gICAgICAgIC8vIHJldHVybiB7IC4uLmhpdGJveCB9XG4gICAgICAgIC8qIFRoaXMgbWlnaHQgbWFrZSBpdCBzbyBJIGRvbid0IG5lZWQgdG8gdXNlIFRhcmdldEZhY3RvcnkgKi9cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBnZXQgaXNIaXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gaGl0Ym94LmlzSGl0XG4gICAgICAgICAgfSxcbiAgICAgICAgICBoaXQ6IGhpdGJveC5oaXQsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgaWYgKGhpdGJveGVzLmV2ZXJ5KChoaXRib3gpID0+IGhpdGJveC5pc0hpdCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gIH0pXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQbGF5ZXJGYWN0b3J5IGZyb20gXCIuL21vZHVsZXMvUGxheWVyRmFjdG9yeVwiXG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL0RPTUNvbnRyb2xsZXJcIlxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vbW9kdWxlcy9HYW1lTG9vcC5qc1wiXG5cbkdhbWUucGxheWVyMSA9IFBsYXllckZhY3RvcnkoXCJwbGF5ZXIxXCIpXG5ET01Db250cm9sbGVyLnBsYWNlU2hpcExpc3RlbmVycyhHYW1lLnBsYXllcjEpXG4iXSwibmFtZXMiOlsiU2hpcEZhY3RvcnkiLCJCb2FyZEZhY3RvcnkiLCJzaGlwcyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsInJlbWFpbmluZ1NoaXBzIiwiT2JqZWN0Iiwia2V5cyIsInBsYWNlZFNoaXBzIiwiYm9hcmQiLCJBMSIsIkEyIiwiQTMiLCJBNCIsIkE1IiwiQTYiLCJBNyIsIkE4IiwiQTkiLCJBMTAiLCJCMSIsIkIyIiwiQjMiLCJCNCIsIkI1IiwiQjYiLCJCNyIsIkI4IiwiQjkiLCJCMTAiLCJDMSIsIkMyIiwiQzMiLCJDNCIsIkM1IiwiQzYiLCJDNyIsIkM4IiwiQzkiLCJDMTAiLCJEMSIsIkQyIiwiRDMiLCJENCIsIkQ1IiwiRDYiLCJENyIsIkQ4IiwiRDkiLCJEMTAiLCJFMSIsIkUyIiwiRTMiLCJFNCIsIkU1IiwiRTYiLCJFNyIsIkU4IiwiRTkiLCJFMTAiLCJGMSIsIkYyIiwiRjMiLCJGNCIsIkY1IiwiRjYiLCJGNyIsIkY4IiwiRjkiLCJGMTAiLCJHMSIsIkcyIiwiRzMiLCJHNCIsIkc1IiwiRzYiLCJHNyIsIkc4IiwiRzkiLCJHMTAiLCJIMSIsIkgyIiwiSDMiLCJINCIsIkg1IiwiSDYiLCJINyIsIkg4IiwiSDkiLCJIMTAiLCJJMSIsIkkyIiwiSTMiLCJJNCIsIkk1IiwiSTYiLCJJNyIsIkk4IiwiSTkiLCJJMTAiLCJKMSIsIkoyIiwiSjMiLCJKNCIsIko1IiwiSjYiLCJKNyIsIko4IiwiSjkiLCJKMTAiLCJfZmluZEludmFsaWRDb29yZHMiLCJzaGlwTGVuZ3RoIiwib3JpZW50YXRpb24iLCJiYWRJbmRleGVzIiwiZXhjbHVzaW9ucyIsInB1c2giLCJpIiwibGVuZ3RoIiwiZXhjbHVzaW9uIiwia2V5IiwiZW5kc1dpdGgiLCJzdGFydHNXaXRoIiwiaW5jbHVkZXMiLCJfZmluZFNoaXBJbmRleGVzIiwiZ29vZENvb3JkcyIsImxldHRlcnMiLCJjaGFyIiwiY2hhckF0IiwibnVtIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJzaGlwQXJlYSIsImluZGV4T2YiLCJfY29sbGlzaW9uQ2hlY2siLCJpc0VtcHR5IiwiY29vcmRzIiwiZXZlcnkiLCJfY2hlY2tQbGFjZW1lbnQiLCJzaGlwIiwiaGl0Ym94ZXMiLCJ2YWxpZENvb3JkcyIsIl9maW5kVmFsaWRDb29yZHMiLCJpbnZhbGlkQXJyYXkiLCJ2YWxpZE1vdmVzIiwiX3BsYWNlUmFuZG9tIiwib3JpZW50YXRpb25zIiwicmFuZG9tT3JpZW50YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21TaGlwIiwicmFuZG9tVmFsaWRDb29yZHMiLCJwbGFjZVNoaXAiLCJzb21lIiwiYXJnIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInNoaXBJbmRleCIsInNwbGljZSIsInNoaXBJbmRleGVzIiwicmVjaWV2ZUF0dGFjayIsImlzSGl0IiwiaGl0IiwicmVzZXQiLCJmcmVlemUiLCJuZXdCb2FyZCIsImFsbFNoaXBzU3VuayIsInZhbHVlcyIsImhpdGJveCIsIkRPTUNvbnRyb2xsZXIiLCJyZW5kZXJQbGF5ZXJQYWdlIiwicmVuZGVyU2hpcFBhZ2UiLCJwbGF5ZXIiLCJwbGFjZVNoaXBMaXN0ZW5lcnMiLCJkcmFnZ2VkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib3JpZW50YXRpb25Ub2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInRleHRDb250ZW50IiwicHJldmVudERlZmF1bHQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImRhdGFLZXkiLCJnZXRBdHRyaWJ1dGUiLCJzaGlwTmFtZSIsImNvb3Jkc1RvSGlnaGxpZ2h0IiwiZ2FtZWJvYXJkIiwiZWxlbXMiLCJmb3JFYWNoIiwiY29vcmQiLCJlbGVtIiwiY3VycmVudENvbG9yIiwic2V0VGltZW91dCIsInJlbmRlckhpdFBhZ2UiLCJyZW5kZXJXaW5QYWdlIiwid2lubmVyIiwiR2FtZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwicGxheWVyT2JqIiwiUGxheWVyRmFjdG9yeSIsIm5hbWUiLCJpc0NvbXB1dGVyIiwiX2NyZWF0ZUhpdGJveGVzIiwiYXJyYXkiLCJpbmRleCIsIm1hcCIsImlzU3VuayJdLCJzb3VyY2VSb290IjoiIn0=