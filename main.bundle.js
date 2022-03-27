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
  }; // boards start out without ships placed, then are moved to placedShips

  var remainingShips = Object.keys(ships);
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
    // designed to accept coords that are NOT invalid, filter coords against the
    // array _findInvalidCoords() returns before passing them into this function
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    var char = goodCoords.charAt(0);
    var num = Number.parseInt(goodCoords.substring(1));
    var shipArea = [];

    if (orientation === "horizontal") {
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
    };

    if (orientation === "horizontal") {
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

    // returns array of coords - or an empty array if failed to place
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

      return shipIndexes;
    } else {
      return [];
    }
  }

  function recieveAttack(coords) {
    // hit 1, miss 0, already hit -1
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
    }
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
}

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DOMController = function () {
  var body = document.querySelector("body");
  document.addEventListener("startGame", renderPlayerPage);

  function fireCustomEvent(name, detailObj, callbackFunc) {
    var evt = new CustomEvent(name, {
      bubbles: true,
      detail: detailObj
    });

    if (callbackFunc) {
      evt.detail.callbackFunc = callbackFunc;
    }

    document.dispatchEvent(evt);
  }

  function renderPlayerPage() {
    body.innerHTML = "\n    <h1>Welcome to BattleShip</h1>\n\n    <form>\n      <label for='player1'>Player1</label>\n      <input id='player1'>\n\n      <label for='player2'>Player2</label>\n      <input id='player2'>\n\n      <button>Submit</button>\n    </form>";
    var form = document.querySelector("form");

    var inputs = _toConsumableArray(document.querySelectorAll("input"));

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (inputs.every(function (input) {
        return input.value.length > 0;
      })) {
        fireCustomEvent("Game.init", {
          player1: inputs[0].value,
          player2: inputs[1].value
        }, renderShipPage);
        /*
        // initGame event
        const player1 = PlayerFactory(inputs[0].value)
        const player2 = PlayerFactory(inputs[1].value)
        Game.init(player1, player2)
         // start game event
        renderShipPage(Game.currentPlayer)
        */
      }
    });
  }

  function renderShipPage(player) {
    body.innerHTML = "\n    <header>\n      <h1>Battleship</h1>\n    </header>\n\n    <section id=\"play-area\">\n      <div id=\"board\">\n        <div data-key=\"A1\" class=\"coord\"></div>\n        <div data-key=\"A2\" class=\"coord\"></div>\n        <div data-key=\"A3\" class=\"coord\"></div>\n        <div data-key=\"A4\" class=\"coord\"></div>\n        <div data-key=\"A5\" class=\"coord\"></div>\n        <div data-key=\"A6\" class=\"coord\"></div>\n        <div data-key=\"A7\" class=\"coord\"></div>\n        <div data-key=\"A8\" class=\"coord\"></div>\n        <div data-key=\"A9\" class=\"coord\"></div>\n        <div data-key=\"A10\" class=\"coord\"></div>\n\n        <div data-key=\"B1\" class=\"coord\"></div>\n        <div data-key=\"B2\" class=\"coord\"></div>\n        <div data-key=\"B3\" class=\"coord\"></div>\n        <div data-key=\"B4\" class=\"coord\"></div>\n        <div data-key=\"B5\" class=\"coord\"></div>\n        <div data-key=\"B6\" class=\"coord\"></div>\n        <div data-key=\"B7\" class=\"coord\"></div>\n        <div data-key=\"B8\" class=\"coord\"></div>\n        <div data-key=\"B9\" class=\"coord\"></div>\n        <div data-key=\"B10\" class=\"coord\"></div>\n\n        <div data-key=\"C1\" class=\"coord\"></div>\n        <div data-key=\"C2\" class=\"coord\"></div>\n        <div data-key=\"C3\" class=\"coord\"></div>\n        <div data-key=\"C4\" class=\"coord\"></div>\n        <div data-key=\"C5\" class=\"coord\"></div>\n        <div data-key=\"C6\" class=\"coord\"></div>\n        <div data-key=\"C7\" class=\"coord\"></div>\n        <div data-key=\"C8\" class=\"coord\"></div>\n        <div data-key=\"C9\" class=\"coord\"></div>\n        <div data-key=\"C10\" class=\"coord\"></div>\n\n        <div data-key=\"D1\" class=\"coord\"></div>\n        <div data-key=\"D2\" class=\"coord\"></div>\n        <div data-key=\"D3\" class=\"coord\"></div>\n        <div data-key=\"D4\" class=\"coord\"></div>\n        <div data-key=\"D5\" class=\"coord\"></div>\n        <div data-key=\"D6\" class=\"coord\"></div>\n        <div data-key=\"D7\" class=\"coord\"></div>\n        <div data-key=\"D8\" class=\"coord\"></div>\n        <div data-key=\"D9\" class=\"coord\"></div>\n        <div data-key=\"D10\" class=\"coord\"></div>\n\n        <div data-key=\"E1\" class=\"coord\"></div>\n        <div data-key=\"E2\" class=\"coord\"></div>\n        <div data-key=\"E3\" class=\"coord\"></div>\n        <div data-key=\"E4\" class=\"coord\"></div>\n        <div data-key=\"E5\" class=\"coord\"></div>\n        <div data-key=\"E6\" class=\"coord\"></div>\n        <div data-key=\"E7\" class=\"coord\"></div>\n        <div data-key=\"E8\" class=\"coord\"></div>\n        <div data-key=\"E9\" class=\"coord\"></div>\n        <div data-key=\"E10\" class=\"coord\"></div>\n\n        <div data-key=\"F1\" class=\"coord\"></div>\n        <div data-key=\"F2\" class=\"coord\"></div>\n        <div data-key=\"F3\" class=\"coord\"></div>\n        <div data-key=\"F4\" class=\"coord\"></div>\n        <div data-key=\"F5\" class=\"coord\"></div>\n        <div data-key=\"F6\" class=\"coord\"></div>\n        <div data-key=\"F7\" class=\"coord\"></div>\n        <div data-key=\"F8\" class=\"coord\"></div>\n        <div data-key=\"F9\" class=\"coord\"></div>\n        <div data-key=\"F10\" class=\"coord\"></div>\n\n        <div data-key=\"G1\" class=\"coord\"></div>\n        <div data-key=\"G2\" class=\"coord\"></div>\n        <div data-key=\"G3\" class=\"coord\"></div>\n        <div data-key=\"G4\" class=\"coord\"></div>\n        <div data-key=\"G5\" class=\"coord\"></div>\n        <div data-key=\"G6\" class=\"coord\"></div>\n        <div data-key=\"G7\" class=\"coord\"></div>\n        <div data-key=\"G8\" class=\"coord\"></div>\n        <div data-key=\"G9\" class=\"coord\"></div>\n        <div data-key=\"G10\" class=\"coord\"></div>\n\n        <div data-key=\"H1\" class=\"coord\"></div>\n        <div data-key=\"H2\" class=\"coord\"></div>\n        <div data-key=\"H3\" class=\"coord\"></div>\n        <div data-key=\"H4\" class=\"coord\"></div>\n        <div data-key=\"H5\" class=\"coord\"></div>\n        <div data-key=\"H6\" class=\"coord\"></div>\n        <div data-key=\"H7\" class=\"coord\"></div>\n        <div data-key=\"H8\" class=\"coord\"></div>\n        <div data-key=\"H9\" class=\"coord\"></div>\n        <div data-key=\"H10\" class=\"coord\"></div>\n\n        <div data-key=\"I1\" class=\"coord\"></div>\n        <div data-key=\"I2\" class=\"coord\"></div>\n        <div data-key=\"I3\" class=\"coord\"></div>\n        <div data-key=\"I4\" class=\"coord\"></div>\n        <div data-key=\"I5\" class=\"coord\"></div>\n        <div data-key=\"I6\" class=\"coord\"></div>\n        <div data-key=\"I7\" class=\"coord\"></div>\n        <div data-key=\"I8\" class=\"coord\"></div>\n        <div data-key=\"I9\" class=\"coord\"></div>\n        <div data-key=\"I10\" class=\"coord\"></div>\n\n        <div data-key=\"J1\" class=\"coord\"></div>\n        <div data-key=\"J2\" class=\"coord\"></div>\n        <div data-key=\"J3\" class=\"coord\"></div>\n        <div data-key=\"J4\" class=\"coord\"></div>\n        <div data-key=\"J5\" class=\"coord\"></div>\n        <div data-key=\"J6\" class=\"coord\"></div>\n        <div data-key=\"J7\" class=\"coord\"></div>\n        <div data-key=\"J8\" class=\"coord\"></div>\n        <div data-key=\"J9\" class=\"coord\"></div>\n        <div data-key=\"J10\" class=\"coord\"></div>\n      </div>\n\n      <div id=\"ships\">\n        <div class=\"ship\" draggable=\"true\">carrier</div>\n        <div class=\"ship\" draggable=\"true\">battleship</div>\n        <div class=\"ship\" draggable=\"true\">cruiser</div>\n        <div class=\"ship\" draggable=\"true\">submarine</div>\n        <div class=\"ship\" draggable=\"true\">destroyer</div>\n      </div>\n    </section>\n\n    <section class=\"buttons\">\n      <button class=\"orientation-toggle\">horizontal</button>\n      <h2>Buttons n' stuff</h2>\n      <button id='finish-button'>Finish</button>\n    </section>";
    console.log(body);
    placeShipListeners(player);
  }

  function changeOrientationText(e) {
    if (e.target.textContent === "horizontal") {
      e.target.textContent = "vertical";
    } else if (e.target.textContent === "vertical") {
      e.target.textContent = "horizontal";
    }
  }

  function turnWhiteCellsGray(e) {
    if (e.target === document.querySelector("#board")) return;

    if (e.target.style.backgroundColor === "") {
      e.target.style.backgroundColor = "lightgray";
    }
  }

  function turnGrayCellsWhite(e) {
    if (e.target === document.querySelector("#board")) return;

    if (e.target.style.backgroundColor === "lightgray") {
      e.target.style.backgroundColor = "";
    }
  }

  function flashCellRed(e) {
    var currentColor = e.target.style.backgroundColor;
    if (currentColor === "lightgray") currentColor = "";
    e.target.style.backgroundColor = "lightcoral";
    setTimeout(function () {
      return e.target.style.backgroundColor = currentColor;
    }, 250);
  }

  function highlightCoordsGreen(coordsToHighlight) {
    var elems = [];
    coordsToHighlight.forEach(function (coord) {
      var elem = document.querySelector(".coord[data-key=\"".concat(coord, "\"]"));
      elems.push(elem);
    });
    elems.forEach(function (elem) {
      elem.style.backgroundColor = "green";
    });
  }

  function placeShipListeners(player) {
    var dragged;
    var ships = document.querySelector("#ships");
    var board = document.querySelector("#board");
    var orientationToggle = document.querySelector(".orientation-toggle");
    var finishButton = document.querySelector("#finish-button");
    var abort = new AbortController();
    orientationToggle.addEventListener("click", changeOrientationText, {
      signal: abort.signal
    });
    ships.addEventListener("dragstart", function (e) {
      return dragged = e.target;
    }, {
      signal: abort.signal
    });
    board.addEventListener("dragover", function (e) {
      return e.preventDefault();
    }, {
      signal: abort.signal
    });
    board.addEventListener("dragenter", turnWhiteCellsGray, {
      signal: abort.signal
    });
    board.addEventListener("dragleave", turnGrayCellsWhite, {
      signal: abort.signal
    });
    board.addEventListener("drop", function (e) {
      if (e.target === board) return;
      var dataKey = e.target.getAttribute("data-key");
      var shipName = dragged.textContent;
      var orientation = orientationToggle.textContent;
      var coordsToHighlight = player.gameboard.placeShip(shipName, dataKey, orientation);

      if (coordsToHighlight.length > 0) {
        highlightCoordsGreen(coordsToHighlight);
      } else {
        flashCellRed(e);
      }
    }, {
      signal: abort.signal
    });
    finishButton.addEventListener("click", function () {
      if (player.gameboard.remainingShips.length === 0) {
        // switchplayer event
        fireCustomEvent("Game.switchPlayer", {}, decidePageToRender);
        abort.abort();
      }
    }, {
      signal: abort.signal
    });
  }

  function decidePageToRender(newPlayer) {
    if (newPlayer.gameboard.remainingShips.length > 0) {
      renderShipPage(newPlayer);
    } else {
      renderHitPage(newPlayer);
    }
  }

  function renderHitPage(player) {
    body.innerHTML = "";
  }

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

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlayerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerFactory */ "./src/modules/PlayerFactory.js");


var Game = function () {
  var player1;
  var player2;
  var currentPlayer;

  function start() {
    var startGame = new CustomEvent("startGame", {
      bubbles: true,
      detail: {}
    });
    document.dispatchEvent(startGame); // DOMController.renderPlayerpage
  }

  document.addEventListener("Game.init", init);

  function init(e) {
    player1 = (0,_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(e.detail.player1);
    player2 = (0,_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(e.detail.player2);
    currentPlayer = player1;
    if (e.detail.callbackFunc) e.detail.callbackFunc(currentPlayer); // DOMController.renderShipPage
  }

  document.addEventListener("Game.switchPlayer", switchPlayer);

  function switchPlayer(e) {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else if (currentPlayer === player2) {
      currentPlayer = player1;
    }

    if (e.detail.callbackFunc) e.detail.callbackFunc(currentPlayer); // DOMController.renderShipPage, DOMController.renderHitPage
  }

  return {
    start: start
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
  if (typeof name !== "string" || typeof isComputer !== "boolean") return;
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
/* harmony import */ var _modules_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Game.js */ "./src/modules/Game.js");
/* harmony import */ var _modules_DOMController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOMController */ "./src/modules/DOMController.js");


_modules_Game_js__WEBPACK_IMPORTED_MODULE_0__["default"].start();
/*
Game.player1 = PlayerFactory("player1")
Game.player2 = PlayerFactory("player2")
Game.startGame()
console.log(Game.currentPlayer)
*/

/*
document.addEventListener("startgame", DOMController.renderPlayerPage)
document.addEventListener(
  "playAgain",
  DOMController.renderShipPage(Game.player1)
)
// Game.startGame()
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVJrQjs7QUFTbkIsUUFBSWdGLE1BQUosR0FBYTtBQUNYLFVBQUl4RyxRQUFRLENBQUNILEtBQVQsQ0FBZSxVQUFDaUMsTUFBRDtBQUFBLGVBQVlBLE1BQU0sQ0FBQ1AsS0FBUCxLQUFpQixJQUE3QjtBQUFBLE9BQWYsQ0FBSixFQUF1RDtBQUNyRCxlQUFPLElBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLEtBQVA7QUFDRDtBQUNGOztBQWZrQixHQUFkLENBQVA7QUFpQkQ7Ozs7OztVQ3pDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQXNFLDhEQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9Cb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwRmFjdG9yeSBmcm9tIFwiLi9TaGlwRmFjdG9yeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkRmFjdG9yeSgpIHtcbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgY2FycmllcjogU2hpcEZhY3RvcnkoNSksXG4gICAgYmF0dGxlc2hpcDogU2hpcEZhY3RvcnkoNCksXG4gICAgY3J1aXNlcjogU2hpcEZhY3RvcnkoMyksXG4gICAgc3VibWFyaW5lOiBTaGlwRmFjdG9yeSgzKSxcbiAgICBkZXN0cm95ZXI6IFNoaXBGYWN0b3J5KDIpLFxuICB9XG5cbiAgLy8gYm9hcmRzIHN0YXJ0IG91dCB3aXRob3V0IHNoaXBzIHBsYWNlZCwgdGhlbiBhcmUgbW92ZWQgdG8gcGxhY2VkU2hpcHNcbiAgbGV0IHJlbWFpbmluZ1NoaXBzID0gT2JqZWN0LmtleXMoc2hpcHMpXG4gIGxldCBwbGFjZWRTaGlwcyA9IFtdXG5cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGNvbnN0IGJvYXJkID0ge1xuICAgIEExOiAnJywgQTI6ICcnLCBBMzogJycsIEE0OiAnJywgQTU6ICcnLCBBNjogJycsIEE3OiAnJywgQTg6ICcnLCBBOTogJycsIEExMDogJycsIFxuICAgIEIxOiAnJywgQjI6ICcnLCBCMzogJycsIEI0OiAnJywgQjU6ICcnLCBCNjogJycsIEI3OiAnJywgQjg6ICcnLCBCOTogJycsIEIxMDogJycsIFxuICAgIEMxOiAnJywgQzI6ICcnLCBDMzogJycsIEM0OiAnJywgQzU6ICcnLCBDNjogJycsIEM3OiAnJywgQzg6ICcnLCBDOTogJycsIEMxMDogJycsIFxuICAgIEQxOiAnJywgRDI6ICcnLCBEMzogJycsIEQ0OiAnJywgRDU6ICcnLCBENjogJycsIEQ3OiAnJywgRDg6ICcnLCBEOTogJycsIEQxMDogJycsIFxuICAgIEUxOiAnJywgRTI6ICcnLCBFMzogJycsIEU0OiAnJywgRTU6ICcnLCBFNjogJycsIEU3OiAnJywgRTg6ICcnLCBFOTogJycsIEUxMDogJycsIFxuICAgIEYxOiAnJywgRjI6ICcnLCBGMzogJycsIEY0OiAnJywgRjU6ICcnLCBGNjogJycsIEY3OiAnJywgRjg6ICcnLCBGOTogJycsIEYxMDogJycsIFxuICAgIEcxOiAnJywgRzI6ICcnLCBHMzogJycsIEc0OiAnJywgRzU6ICcnLCBHNjogJycsIEc3OiAnJywgRzg6ICcnLCBHOTogJycsIEcxMDogJycsIFxuICAgIEgxOiAnJywgSDI6ICcnLCBIMzogJycsIEg0OiAnJywgSDU6ICcnLCBINjogJycsIEg3OiAnJywgSDg6ICcnLCBIOTogJycsIEgxMDogJycsIFxuICAgIEkxOiAnJywgSTI6ICcnLCBJMzogJycsIEk0OiAnJywgSTU6ICcnLCBJNjogJycsIEk3OiAnJywgSTg6ICcnLCBJOTogJycsIEkxMDogJycsIFxuICAgIEoxOiAnJywgSjI6ICcnLCBKMzogJycsIEo0OiAnJywgSjU6ICcnLCBKNjogJycsIEo3OiAnJywgSjg6ICcnLCBKOTogJycsIEoxMDogJycsXG4gIH1cblxuICBmdW5jdGlvbiBfZmluZEludmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICAvLyBTaGlwcyBhcmUgcGxhY2VkIGZyb20gdGhlIG1lZGlhbiBpbmRleCwgb3IgaW4gdGhlIGNhc2Ugb2YgZXZlblxuICAgIC8vIHNoaXBMZW5ndGhzIGJ5IHRoZSBtaWRkbGUtbGVmdCBpbmRleC5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uOlxuICAgIC8vIDEpIG1ha2VzIGFuIGFycmF5IG9mIGFsbCB0aGUgaW52YWxpZCBwbGFjZW1lbnRzIGZvciB0aGF0IGNlbnRlciBpbmRleFxuICAgIC8vIHRoYXQgd291bGQgY2F1c2UgdGhlIHNoaXAgdG8gaGFuZyBvZmYgdGhlIGJvYXJkLlxuICAgIC8vIDIpIHRoZW4gYWRkcyB0byB0aGUgYXJyYXkgb2YgaW52YWxpZCBwbGFjZW1lbnRzIGFsbCBib2FyZCBpbmRleGVzIHRoYXRcbiAgICAvLyBhcmUgYWxyZWFkeSBvY2N1cGllZFxuICAgIGNvbnN0IGJhZEluZGV4ZXMgPSBbXVxuICAgIGNvbnN0IGV4Y2x1c2lvbnMgPSBbXVxuXG4gICAgLy8gZmluZHMgcGxhY2VtZW50cyB0aGF0IHdvdWxkIG1ha2UgYSBob3Jpem9udGFsIHNoaXAgaGFuZyBvZmYgdGhlIGJvYXJkXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIGV4Y2x1c2lvbnMucHVzaCgxLCAyLCA5LCAxMClcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSBleGNsdXNpb25zLnB1c2goMSwgOSwgMTApXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykgZXhjbHVzaW9ucy5wdXNoKDEsIDEwKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIGV4Y2x1c2lvbnMucHVzaCgxMClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGNsdXNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGV4Y2x1c2lvbiA9IGV4Y2x1c2lvbnNbaV1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgICAgIGlmIChrZXkuZW5kc1dpdGgoZXhjbHVzaW9uKSkge1xuICAgICAgICAgICAgYmFkSW5kZXhlcy5wdXNoKGtleSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmaW5kcyBwbGFjZW1lbnRzIHRoYXQgd291bGQgbWFrZSBhIHZlcmljYWwgc2hpcCBoYW5nIG9mZiB0aGUgYm9hcmRcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIGV4Y2x1c2lvbnMucHVzaChcIkFcIiwgXCJCXCIsIFwiSVwiLCBcIkpcIilcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSBleGNsdXNpb25zLnB1c2goXCJBXCIsIFwiSVwiLCBcIkpcIilcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSBleGNsdXNpb25zLnB1c2goXCJBXCIsIFwiSlwiKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIGV4Y2x1c2lvbnMucHVzaChcIkpcIilcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGNsdXNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGV4Y2x1c2lvbiA9IGV4Y2x1c2lvbnNbaV1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChleGNsdXNpb24pKSB7XG4gICAgICAgICAgICBiYWRJbmRleGVzLnB1c2goa2V5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZHMgb2NjdXBpZWQgYm9hcmQgaW5kZXhlcyB0aGF0IGFyZSBub3QgYWxyZWFkeSBpbiB0aGUgbGlzdFxuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBpZiAoYm9hcmRba2V5XSAhPT0gXCJcIiAmJiBiYWRJbmRleGVzLmluY2x1ZGVzKGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJhZEluZGV4ZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhZEluZGV4ZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIF9maW5kU2hpcEluZGV4ZXMoc2hpcExlbmd0aCwgZ29vZENvb3Jkcywgb3JpZW50YXRpb24pIHtcbiAgICAvLyBkZXNpZ25lZCB0byBhY2NlcHQgY29vcmRzIHRoYXQgYXJlIE5PVCBpbnZhbGlkLCBmaWx0ZXIgY29vcmRzIGFnYWluc3QgdGhlXG4gICAgLy8gYXJyYXkgX2ZpbmRJbnZhbGlkQ29vcmRzKCkgcmV0dXJucyBiZWZvcmUgcGFzc2luZyB0aGVtIGludG8gdGhpcyBmdW5jdGlvblxuICAgIGNvbnN0IGxldHRlcnMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdXG4gICAgY29uc3QgY2hhciA9IGdvb2RDb29yZHMuY2hhckF0KDApXG4gICAgY29uc3QgbnVtID0gTnVtYmVyLnBhcnNlSW50KGdvb2RDb29yZHMuc3Vic3RyaW5nKDEpKVxuICAgIGNvbnN0IHNoaXBBcmVhID0gW11cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgY2hhciArIChudW0gLSAxKSxcbiAgICAgICAgICBjaGFyICsgKG51bSAtIDIpLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgY2hhciArIChudW0gKyAxKSxcbiAgICAgICAgICBjaGFyICsgKG51bSArIDIpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBjaGFyICsgKG51bSAtIDEpLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgY2hhciArIChudW0gKyAxKSxcbiAgICAgICAgICBjaGFyICsgKG51bSArIDIpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChjaGFyICsgKG51bSAtIDEpLCBnb29kQ29vcmRzLCBjaGFyICsgKG51bSArIDEpKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGdvb2RDb29yZHMsIGNoYXIgKyAobnVtICsgMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDJdICsgbnVtLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bSxcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDJdICsgbnVtXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bSxcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDJdICsgbnVtXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goZ29vZENvb3JkcywgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2hpcEFyZWFcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jb2xsaXNpb25DaGVjayhzaGlwTGVuZ3RoLCBnb29kQ29vcmRzLCBvcmllbnRhdGlvbikge1xuICAgIC8vIGRlc2lnbmVkIHRvIGFjY2VwdCBjb29yZHMgdGhhdCBhcmUgTk9UIGludmFsaWQsIGZpbHRlciBjb29yZHMgYWdhaW5zdCB0aGVcbiAgICAvLyBhcnJheSBfZmluZEludmFsaWRDb29yZHMoKSByZXR1cm5zIGJlZm9yZSBwYXNzaW5nIHRoZW0gaW50byB0aGlzIGZ1bmN0aW9uXG5cbiAgICAvLyBjaGVja3MgZm9yIGNvbGxpc2lvbnMgYWxvbmcgdGhlIGF4aXMgZGVmaW5lZCBieSAnb3JpZW50YXRpb24nIGZyb20gdGhlXG4gICAgLy8gY2VudGVyIG9mIHRoZSBzaGlwLiBEb2VzIG5vdCBjaGVjayB0aGUgY2VudGVyIG9mIHRoZSBzaGlwIGl0c2VsZi5cbiAgICBjb25zdCBsZXR0ZXJzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXVxuICAgIGNvbnN0IGNoYXIgPSBnb29kQ29vcmRzLmNoYXJBdCgwKVxuICAgIGNvbnN0IG51bSA9IE51bWJlci5wYXJzZUludChnb29kQ29vcmRzLnN1YnN0cmluZygxKSlcbiAgICBjb25zdCBzaGlwQXJlYSA9IFtdXG4gICAgY29uc3QgaXNFbXB0eSA9IChjb29yZHMpID0+IGNvb3JkcyA9PT0gXCJcIlxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSAtIDEpXSxcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSAtIDIpXSxcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSArIDEpXSxcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSArIDIpXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAyKV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGJvYXJkW2NoYXIgKyAobnVtIC0gMSldLCBib2FyZFtjaGFyICsgKG51bSArIDEpXSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChib2FyZFtnb29kQ29vcmRzXSwgYm9hcmRbY2hhciArIChudW0gKyAxKV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAyXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMl0gKyBudW1dXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNoaXBBcmVhLmV2ZXJ5KGlzRW1wdHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2UgLy8gbm8gY29sbGlzaW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlIC8vIGNvbGxpc2lvblxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jaGVja1BsYWNlbWVudChzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBzW3NoaXBdLmhpdGJveGVzLmxlbmd0aFxuICAgIGNvbnN0IHZhbGlkQ29vcmRzID0gX2ZpbmRWYWxpZENvb3JkcyhzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbilcbiAgICBpZiAodmFsaWRDb29yZHMuaW5jbHVkZXMoY29vcmRzKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2ZpbmRWYWxpZENvb3JkcyhzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGludmFsaWRBcnJheSA9IF9maW5kSW52YWxpZENvb3JkcyhzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbilcbiAgICBjb25zdCB2YWxpZE1vdmVzID0gW11cblxuICAgIC8vIGFkZCBhbnkga2V5cyB0aGF0IHdvdWxkIGhpdCBhbm90aGVyIHNoaXAgdG8gaW52YWxpZCBhcnJheVxuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFpbnZhbGlkQXJyYXkuaW5jbHVkZXMoa2V5KSAmJlxuICAgICAgICBfY29sbGlzaW9uQ2hlY2soc2hpcExlbmd0aCwga2V5LCBvcmllbnRhdGlvbilcbiAgICAgICkge1xuICAgICAgICBpbnZhbGlkQXJyYXkucHVzaChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFrZSBhbiBhcnJheSBvdXQgb2YgYWxsIGNvb3JkcyB0aGF0IGFyZSBub3QgaW4gaW52YWxpZEFycmF5XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgIGlmICghaW52YWxpZEFycmF5LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgdmFsaWRNb3Zlcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRNb3Zlc1xuICB9XG5cbiAgZnVuY3Rpb24gX3BsYWNlUmFuZG9tKCkge1xuICAgIGlmIChyZW1haW5pbmdTaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl1cbiAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV1cbiAgICBjb25zdCByYW5kb21TaGlwID1cbiAgICAgIHJlbWFpbmluZ1NoaXBzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlbWFpbmluZ1NoaXBzLmxlbmd0aCldXG4gICAgY29uc3QgdmFsaWRDb29yZHMgPSBfZmluZFZhbGlkQ29vcmRzKFxuICAgICAgc2hpcHNbcmFuZG9tU2hpcF0uaGl0Ym94ZXMubGVuZ3RoLFxuICAgICAgcmFuZG9tT3JpZW50YXRpb25cbiAgICApXG4gICAgY29uc3QgcmFuZG9tVmFsaWRDb29yZHMgPVxuICAgICAgdmFsaWRDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRDb29yZHMubGVuZ3RoKV1cbiAgICByZXR1cm4gcGxhY2VTaGlwKHJhbmRvbVNoaXAsIHJhbmRvbVZhbGlkQ29vcmRzLCByYW5kb21PcmllbnRhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uLCByYW5kb20gPSBmYWxzZSkge1xuICAgIC8vIHJldHVybnMgYXJyYXkgb2YgY29vcmRzIC0gb3IgYW4gZW1wdHkgYXJyYXkgaWYgZmFpbGVkIHRvIHBsYWNlXG4gICAgaWYgKHJhbmRvbSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIF9wbGFjZVJhbmRvbSgpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgW3NoaXAsIGNvb3Jkcywgb3JpZW50YXRpb25dLnNvbWUoKGFyZykgPT4gYXJnID09PSB1bmRlZmluZWQpIHx8XG4gICAgICAhT2JqZWN0LmtleXMoc2hpcHMpLmluY2x1ZGVzKHNoaXAudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICFPYmplY3Qua2V5cyhib2FyZCkuaW5jbHVkZXMoY29vcmRzLnRvVXBwZXJDYXNlKCkpIHx8XG4gICAgICAob3JpZW50YXRpb24gIT09IFwidmVydGljYWxcIiAmJiBvcmllbnRhdGlvbiAhPT0gXCJob3Jpem9udGFsXCIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwSW5kZXggPSByZW1haW5pbmdTaGlwcy5pbmRleE9mKHNoaXApXG4gICAgaWYgKHNoaXBJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBbXSAvLyByZXR1cm4gZmFsc2UgLSBzaGlwIGNhbm5vdCBiZSBwbGFjZWQgdGhlcmVcbiAgICB9IGVsc2UgaWYgKF9jaGVja1BsYWNlbWVudChzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uKSkge1xuICAgICAgcGxhY2VkU2hpcHMucHVzaChyZW1haW5pbmdTaGlwcy5zcGxpY2Uoc2hpcEluZGV4LCAxKVswXSlcbiAgICAgIGNvbnN0IHNoaXBJbmRleGVzID0gX2ZpbmRTaGlwSW5kZXhlcyhcbiAgICAgICAgc2hpcHNbc2hpcF0uaGl0Ym94ZXMubGVuZ3RoLFxuICAgICAgICBjb29yZHMsXG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICApXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNbc2hpcF0uaGl0Ym94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbc2hpcEluZGV4ZXNbaV1dID0gc2hpcHNbc2hpcF0uaGl0Ym94ZXNbaV1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGlwSW5kZXhlc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWNpZXZlQXR0YWNrKGNvb3Jkcykge1xuICAgIC8vIGhpdCAxLCBtaXNzIDAsIGFscmVhZHkgaGl0IC0xXG4gICAgaWYgKHR5cGVvZiBib2FyZFtjb29yZHNdID09PSBcIm9iamVjdFwiICYmICFib2FyZFtjb29yZHNdLmlzSGl0KSB7XG4gICAgICBib2FyZFtjb29yZHNdLmhpdCgpXG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRzXSA9PT0gXCJcIikge1xuICAgICAgYm9hcmRbY29vcmRzXSA9IFwibWlzc1wiXG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW2Nvb3Jkc10gPT09IFwib2JqZWN0XCIgJiYgYm9hcmRbY29vcmRzXS5pc0hpdCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmIChib2FyZFtjb29yZHNdID09PSBcIm1pc3NcIikge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgIGJvYXJkW2tleV0gPSBcIlwiXG4gICAgfVxuXG4gICAgc2hpcHMuY2FycmllciA9IFNoaXBGYWN0b3J5KDUpXG4gICAgc2hpcHMuYmF0dGxlc2hpcCA9IFNoaXBGYWN0b3J5KDQpXG4gICAgc2hpcHMuY3J1aXNlciA9IFNoaXBGYWN0b3J5KDMpXG4gICAgc2hpcHMuc3VibWFyaW5lID0gU2hpcEZhY3RvcnkoMylcbiAgICBzaGlwcy5kZXN0cm95ZXIgPSBTaGlwRmFjdG9yeSgyKVxuXG4gICAgcmVtYWluaW5nU2hpcHMgPSBPYmplY3Qua2V5cyhzaGlwcylcbiAgICBwbGFjZWRTaGlwcyA9IFtdXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgY29uc3QgbmV3Qm9hcmQgPSB7fVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtrZXldID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgbmV3Qm9hcmRba2V5XSA9IGJvYXJkW2tleV1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRba2V5XSA9PT0gXCJvYmplY3RcIiAmJiAhYm9hcmRba2V5XS5pc0hpdCkge1xuICAgICAgICAgIG5ld0JvYXJkW2tleV0gPSBcIlwiXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW2tleV0gPT09IFwib2JqZWN0XCIgJiYgYm9hcmRba2V5XS5pc0hpdCkge1xuICAgICAgICAgIG5ld0JvYXJkW2tleV0gPSBcImhpdFwiXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld0JvYXJkXG4gICAgfSxcbiAgICBnZXQgcmVtYWluaW5nU2hpcHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnJlbWFpbmluZ1NoaXBzXVxuICAgIH0sXG4gICAgZ2V0IGFsbFNoaXBzU3VuaygpIHtcbiAgICAgIGlmIChcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhzaGlwcykuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzaGlwLmhpdGJveGVzKS5ldmVyeShcbiAgICAgICAgICAgIChoaXRib3gpID0+IGhpdGJveC5pc0hpdCA9PT0gdHJ1ZVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICByZXNldCxcbiAgfSlcbn1cbiIsImNvbnN0IERPTUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3RhcnRHYW1lXCIsIHJlbmRlclBsYXllclBhZ2UpXG5cbiAgZnVuY3Rpb24gZmlyZUN1c3RvbUV2ZW50KG5hbWUsIGRldGFpbE9iaiwgY2FsbGJhY2tGdW5jKSB7XG4gICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBkZXRhaWw6IGRldGFpbE9iaixcbiAgICB9KVxuXG4gICAgaWYgKGNhbGxiYWNrRnVuYykge1xuICAgICAgZXZ0LmRldGFpbC5jYWxsYmFja0Z1bmMgPSBjYWxsYmFja0Z1bmNcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBsYXllclBhZ2UoKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgXG4gICAgPGgxPldlbGNvbWUgdG8gQmF0dGxlU2hpcDwvaDE+XG5cbiAgICA8Zm9ybT5cbiAgICAgIDxsYWJlbCBmb3I9J3BsYXllcjEnPlBsYXllcjE8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPSdwbGF5ZXIxJz5cblxuICAgICAgPGxhYmVsIGZvcj0ncGxheWVyMic+UGxheWVyMjwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9J3BsYXllcjInPlxuXG4gICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5gXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBjb25zdCBpbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpXVxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChpbnB1dHMuZXZlcnkoKGlucHV0KSA9PiBpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSkge1xuICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXG4gICAgICAgICAgXCJHYW1lLmluaXRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXIxOiBpbnB1dHNbMF0udmFsdWUsXG4gICAgICAgICAgICBwbGF5ZXIyOiBpbnB1dHNbMV0udmFsdWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW5kZXJTaGlwUGFnZVxuICAgICAgICApXG4gICAgICAgIC8qXG4gICAgICAgIC8vIGluaXRHYW1lIGV2ZW50XG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXJGYWN0b3J5KGlucHV0c1swXS52YWx1ZSlcbiAgICAgICAgY29uc3QgcGxheWVyMiA9IFBsYXllckZhY3RvcnkoaW5wdXRzWzFdLnZhbHVlKVxuICAgICAgICBHYW1lLmluaXQocGxheWVyMSwgcGxheWVyMilcblxuICAgICAgICAvLyBzdGFydCBnYW1lIGV2ZW50XG4gICAgICAgIHJlbmRlclNoaXBQYWdlKEdhbWUuY3VycmVudFBsYXllcilcbiAgICAgICAgKi9cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2hpcFBhZ2UocGxheWVyKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlcj5cbiAgICAgIDxoMT5CYXR0bGVzaGlwPC9oMT5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxzZWN0aW9uIGlkPVwicGxheS1hcmVhXCI+XG4gICAgICA8ZGl2IGlkPVwiYm9hcmRcIj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGlkPVwic2hpcHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+Y2FycmllcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIj5iYXR0bGVzaGlwPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPmNydWlzZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+c3VibWFyaW5lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPmRlc3Ryb3llcjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwib3JpZW50YXRpb24tdG9nZ2xlXCI+aG9yaXpvbnRhbDwvYnV0dG9uPlxuICAgICAgPGgyPkJ1dHRvbnMgbicgc3R1ZmY8L2gyPlxuICAgICAgPGJ1dHRvbiBpZD0nZmluaXNoLWJ1dHRvbic+RmluaXNoPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPmBcblxuICAgIGNvbnNvbGUubG9nKGJvZHkpXG4gICAgcGxhY2VTaGlwTGlzdGVuZXJzKHBsYXllcilcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZU9yaWVudGF0aW9uVGV4dChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcInZlcnRpY2FsXCJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJob3Jpem9udGFsXCJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0dXJuV2hpdGVDZWxsc0dyYXkoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZFwiKSkgcmV0dXJuXG4gICAgaWYgKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gXCJcIikge1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyYXlcIlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHR1cm5HcmF5Q2VsbHNXaGl0ZShlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkXCIpKSByZXR1cm5cbiAgICBpZiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBcImxpZ2h0Z3JheVwiKSB7XG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmxhc2hDZWxsUmVkKGUpIHtcbiAgICBsZXQgY3VycmVudENvbG9yID0gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yXG4gICAgaWYgKGN1cnJlbnRDb2xvciA9PT0gXCJsaWdodGdyYXlcIikgY3VycmVudENvbG9yID0gXCJcIlxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRjb3JhbFwiXG4gICAgc2V0VGltZW91dCgoKSA9PiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY3VycmVudENvbG9yKSwgMjUwKVxuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0Q29vcmRzR3JlZW4oY29vcmRzVG9IaWdobGlnaHQpIHtcbiAgICBjb25zdCBlbGVtcyA9IFtdXG4gICAgY29vcmRzVG9IaWdobGlnaHQuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29vcmRbZGF0YS1rZXk9XCIke2Nvb3JkfVwiXWApXG4gICAgICBlbGVtcy5wdXNoKGVsZW0pXG4gICAgfSlcblxuICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiXG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiBwbGFjZVNoaXBMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgbGV0IGRyYWdnZWRcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hpcHNcIilcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIilcbiAgICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JpZW50YXRpb24tdG9nZ2xlXCIpXG4gICAgY29uc3QgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW5pc2gtYnV0dG9uXCIpXG4gICAgY29uc3QgYWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICAgIG9yaWVudGF0aW9uVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VPcmllbnRhdGlvblRleHQsIHtcbiAgICAgIHNpZ25hbDogYWJvcnQuc2lnbmFsLFxuICAgIH0pXG4gICAgc2hpcHMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4gKGRyYWdnZWQgPSBlLnRhcmdldCksIHtcbiAgICAgIHNpZ25hbDogYWJvcnQuc2lnbmFsLFxuICAgIH0pXG5cbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSwge1xuICAgICAgc2lnbmFsOiBhYm9ydC5zaWduYWwsXG4gICAgfSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIHR1cm5XaGl0ZUNlbGxzR3JheSwge1xuICAgICAgc2lnbmFsOiBhYm9ydC5zaWduYWwsXG4gICAgfSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIHR1cm5HcmF5Q2VsbHNXaGl0ZSwge1xuICAgICAgc2lnbmFsOiBhYm9ydC5zaWduYWwsXG4gICAgfSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkcm9wXCIsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGJvYXJkKSByZXR1cm5cbiAgICAgICAgY29uc3QgZGF0YUtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpXG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZHJhZ2dlZC50ZXh0Q29udGVudFxuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uVG9nZ2xlLnRleHRDb250ZW50XG4gICAgICAgIGNvbnN0IGNvb3Jkc1RvSGlnaGxpZ2h0ID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgZGF0YUtleSxcbiAgICAgICAgICBvcmllbnRhdGlvblxuICAgICAgICApXG5cbiAgICAgICAgaWYgKGNvb3Jkc1RvSGlnaGxpZ2h0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBoaWdobGlnaHRDb29yZHNHcmVlbihjb29yZHNUb0hpZ2hsaWdodClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGFzaENlbGxSZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsOiBhYm9ydC5zaWduYWwgfVxuICAgIClcblxuICAgIGZpbmlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5yZW1haW5pbmdTaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBzd2l0Y2hwbGF5ZXIgZXZlbnRcbiAgICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXCJHYW1lLnN3aXRjaFBsYXllclwiLCB7fSwgZGVjaWRlUGFnZVRvUmVuZGVyKVxuICAgICAgICAgIGFib3J0LmFib3J0KClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsOiBhYm9ydC5zaWduYWwgfVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY2lkZVBhZ2VUb1JlbmRlcihuZXdQbGF5ZXIpIHtcbiAgICBpZiAobmV3UGxheWVyLmdhbWVib2FyZC5yZW1haW5pbmdTaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICByZW5kZXJTaGlwUGFnZShuZXdQbGF5ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlckhpdFBhZ2UobmV3UGxheWVyKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckhpdFBhZ2UocGxheWVyKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBcIlwiXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJXaW5QYWdlKHdpbm5lcikge31cblxuICByZXR1cm4ge1xuICAgIHJlbmRlclBsYXllclBhZ2UsXG4gICAgcmVuZGVyU2hpcFBhZ2UsXG4gICAgcGxhY2VTaGlwTGlzdGVuZXJzLFxuICAgIHJlbmRlckhpdFBhZ2UsXG4gICAgcmVuZGVyV2luUGFnZSxcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBET01Db250cm9sbGVyXG4iLCJpbXBvcnQgUGxheWVyRmFjdG9yeSBmcm9tIFwiLi9QbGF5ZXJGYWN0b3J5XCJcblxuY29uc3QgR2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGF5ZXIxXG4gIGxldCBwbGF5ZXIyXG4gIGxldCBjdXJyZW50UGxheWVyXG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgY29uc3Qgc3RhcnRHYW1lID0gbmV3IEN1c3RvbUV2ZW50KFwic3RhcnRHYW1lXCIsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBkZXRhaWw6IHt9LFxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHN0YXJ0R2FtZSlcbiAgICAvLyBET01Db250cm9sbGVyLnJlbmRlclBsYXllcnBhZ2VcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJHYW1lLmluaXRcIiwgaW5pdClcbiAgZnVuY3Rpb24gaW5pdChlKSB7XG4gICAgcGxheWVyMSA9IFBsYXllckZhY3RvcnkoZS5kZXRhaWwucGxheWVyMSlcbiAgICBwbGF5ZXIyID0gUGxheWVyRmFjdG9yeShlLmRldGFpbC5wbGF5ZXIyKVxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgaWYgKGUuZGV0YWlsLmNhbGxiYWNrRnVuYykgZS5kZXRhaWwuY2FsbGJhY2tGdW5jKGN1cnJlbnRQbGF5ZXIpXG4gICAgLy8gRE9NQ29udHJvbGxlci5yZW5kZXJTaGlwUGFnZVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHN3aXRjaFBsYXllcilcbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKGUpIHtcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjIpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgfVxuXG4gICAgaWYgKGUuZGV0YWlsLmNhbGxiYWNrRnVuYykgZS5kZXRhaWwuY2FsbGJhY2tGdW5jKGN1cnJlbnRQbGF5ZXIpXG4gICAgLy8gRE9NQ29udHJvbGxlci5yZW5kZXJTaGlwUGFnZSwgRE9NQ29udHJvbGxlci5yZW5kZXJIaXRQYWdlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0LFxuICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVcbiIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vQm9hcmRGYWN0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyRmFjdG9yeShuYW1lLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcbiAgaWYgKHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBpc0NvbXB1dGVyICE9PSBcImJvb2xlYW5cIikgcmV0dXJuXG5cbiAgY29uc3QgZ2FtZWJvYXJkID0gQm9hcmRGYWN0b3J5KClcblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZVxuICAgIH0sXG4gICAgZ2V0IGlzQ29tcHV0ZXIoKSB7XG4gICAgICByZXR1cm4gaXNDb21wdXRlclxuICAgIH0sXG4gICAgZ2V0IGdhbWVib2FyZCgpIHtcbiAgICAgIHJldHVybiBnYW1lYm9hcmRcbiAgICB9LFxuICB9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcEZhY3RvcnkobGVuZ3RoKSB7XG4gIGlmIChsZW5ndGggPCAyIHx8IGxlbmd0aCA+IDUpIHJldHVyblxuXG4gIGNvbnN0IGhpdGJveGVzID0gX2NyZWF0ZUhpdGJveGVzKClcblxuICBmdW5jdGlvbiBfY3JlYXRlSGl0Ym94ZXMoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIGhpdDogKCkgPT4gaGl0KGkpLFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gaGl0Ym94ZXMubGVuZ3RoIHx8IGluZGV4IDwgMCkgcmV0dXJuXG4gICAgaGl0Ym94ZXNbaW5kZXhdLmlzSGl0ID0gdHJ1ZVxuICAgIHJldHVybiBoaXRib3hlcy5tYXAoKGhpdGJveCkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uaGl0Ym94IH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldCBoaXRib3hlcygpIHtcbiAgICAgIHJldHVybiBoaXRib3hlcy5tYXAoKGhpdGJveCkgPT4gKHtcbiAgICAgICAgZ2V0IGlzSGl0KCkge1xuICAgICAgICAgIHJldHVybiBoaXRib3guaXNIaXRcbiAgICAgICAgfSxcbiAgICAgICAgaGl0OiBoaXRib3guaGl0LFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgaWYgKGhpdGJveGVzLmV2ZXJ5KChoaXRib3gpID0+IGhpdGJveC5pc0hpdCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gIH0pXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lIGZyb20gXCIuL21vZHVsZXMvR2FtZS5qc1wiXG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL0RPTUNvbnRyb2xsZXJcIlxuXG5HYW1lLnN0YXJ0KClcbi8qXG5HYW1lLnBsYXllcjEgPSBQbGF5ZXJGYWN0b3J5KFwicGxheWVyMVwiKVxuR2FtZS5wbGF5ZXIyID0gUGxheWVyRmFjdG9yeShcInBsYXllcjJcIilcbkdhbWUuc3RhcnRHYW1lKClcbmNvbnNvbGUubG9nKEdhbWUuY3VycmVudFBsYXllcilcbiovXG4vKlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXJ0Z2FtZVwiLCBET01Db250cm9sbGVyLnJlbmRlclBsYXllclBhZ2UpXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICBcInBsYXlBZ2FpblwiLFxuICBET01Db250cm9sbGVyLnJlbmRlclNoaXBQYWdlKEdhbWUucGxheWVyMSlcbilcbi8vIEdhbWUuc3RhcnRHYW1lKClcbiovXG4iXSwibmFtZXMiOlsiU2hpcEZhY3RvcnkiLCJCb2FyZEZhY3RvcnkiLCJzaGlwcyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsInJlbWFpbmluZ1NoaXBzIiwiT2JqZWN0Iiwia2V5cyIsInBsYWNlZFNoaXBzIiwiYm9hcmQiLCJBMSIsIkEyIiwiQTMiLCJBNCIsIkE1IiwiQTYiLCJBNyIsIkE4IiwiQTkiLCJBMTAiLCJCMSIsIkIyIiwiQjMiLCJCNCIsIkI1IiwiQjYiLCJCNyIsIkI4IiwiQjkiLCJCMTAiLCJDMSIsIkMyIiwiQzMiLCJDNCIsIkM1IiwiQzYiLCJDNyIsIkM4IiwiQzkiLCJDMTAiLCJEMSIsIkQyIiwiRDMiLCJENCIsIkQ1IiwiRDYiLCJENyIsIkQ4IiwiRDkiLCJEMTAiLCJFMSIsIkUyIiwiRTMiLCJFNCIsIkU1IiwiRTYiLCJFNyIsIkU4IiwiRTkiLCJFMTAiLCJGMSIsIkYyIiwiRjMiLCJGNCIsIkY1IiwiRjYiLCJGNyIsIkY4IiwiRjkiLCJGMTAiLCJHMSIsIkcyIiwiRzMiLCJHNCIsIkc1IiwiRzYiLCJHNyIsIkc4IiwiRzkiLCJHMTAiLCJIMSIsIkgyIiwiSDMiLCJINCIsIkg1IiwiSDYiLCJINyIsIkg4IiwiSDkiLCJIMTAiLCJJMSIsIkkyIiwiSTMiLCJJNCIsIkk1IiwiSTYiLCJJNyIsIkk4IiwiSTkiLCJJMTAiLCJKMSIsIkoyIiwiSjMiLCJKNCIsIko1IiwiSjYiLCJKNyIsIko4IiwiSjkiLCJKMTAiLCJfZmluZEludmFsaWRDb29yZHMiLCJzaGlwTGVuZ3RoIiwib3JpZW50YXRpb24iLCJiYWRJbmRleGVzIiwiZXhjbHVzaW9ucyIsInB1c2giLCJpIiwibGVuZ3RoIiwiZXhjbHVzaW9uIiwia2V5IiwiZW5kc1dpdGgiLCJzdGFydHNXaXRoIiwiaW5jbHVkZXMiLCJfZmluZFNoaXBJbmRleGVzIiwiZ29vZENvb3JkcyIsImxldHRlcnMiLCJjaGFyIiwiY2hhckF0IiwibnVtIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJzaGlwQXJlYSIsImluZGV4T2YiLCJfY29sbGlzaW9uQ2hlY2siLCJpc0VtcHR5IiwiY29vcmRzIiwiZXZlcnkiLCJfY2hlY2tQbGFjZW1lbnQiLCJzaGlwIiwiaGl0Ym94ZXMiLCJ2YWxpZENvb3JkcyIsIl9maW5kVmFsaWRDb29yZHMiLCJpbnZhbGlkQXJyYXkiLCJ2YWxpZE1vdmVzIiwiX3BsYWNlUmFuZG9tIiwib3JpZW50YXRpb25zIiwicmFuZG9tT3JpZW50YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21TaGlwIiwicmFuZG9tVmFsaWRDb29yZHMiLCJwbGFjZVNoaXAiLCJzb21lIiwiYXJnIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInNoaXBJbmRleCIsInNwbGljZSIsInNoaXBJbmRleGVzIiwicmVjaWV2ZUF0dGFjayIsImlzSGl0IiwiaGl0IiwicmVzZXQiLCJmcmVlemUiLCJuZXdCb2FyZCIsImFsbFNoaXBzU3VuayIsInZhbHVlcyIsImhpdGJveCIsIkRPTUNvbnRyb2xsZXIiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlclBsYXllclBhZ2UiLCJmaXJlQ3VzdG9tRXZlbnQiLCJuYW1lIiwiZGV0YWlsT2JqIiwiY2FsbGJhY2tGdW5jIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsImlubmVySFRNTCIsImZvcm0iLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwicmVuZGVyU2hpcFBhZ2UiLCJwbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwicGxhY2VTaGlwTGlzdGVuZXJzIiwiY2hhbmdlT3JpZW50YXRpb25UZXh0IiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJ0dXJuV2hpdGVDZWxsc0dyYXkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInR1cm5HcmF5Q2VsbHNXaGl0ZSIsImZsYXNoQ2VsbFJlZCIsImN1cnJlbnRDb2xvciIsInNldFRpbWVvdXQiLCJoaWdobGlnaHRDb29yZHNHcmVlbiIsImNvb3Jkc1RvSGlnaGxpZ2h0IiwiZWxlbXMiLCJmb3JFYWNoIiwiY29vcmQiLCJlbGVtIiwiZHJhZ2dlZCIsIm9yaWVudGF0aW9uVG9nZ2xlIiwiZmluaXNoQnV0dG9uIiwiYWJvcnQiLCJBYm9ydENvbnRyb2xsZXIiLCJzaWduYWwiLCJkYXRhS2V5IiwiZ2V0QXR0cmlidXRlIiwic2hpcE5hbWUiLCJnYW1lYm9hcmQiLCJkZWNpZGVQYWdlVG9SZW5kZXIiLCJuZXdQbGF5ZXIiLCJyZW5kZXJIaXRQYWdlIiwicmVuZGVyV2luUGFnZSIsIndpbm5lciIsIlBsYXllckZhY3RvcnkiLCJHYW1lIiwiY3VycmVudFBsYXllciIsInN0YXJ0Iiwic3RhcnRHYW1lIiwiaW5pdCIsInN3aXRjaFBsYXllciIsImlzQ29tcHV0ZXIiLCJfY3JlYXRlSGl0Ym94ZXMiLCJhcnJheSIsImluZGV4IiwibWFwIiwiaXNTdW5rIl0sInNvdXJjZVJvb3QiOiIifQ==