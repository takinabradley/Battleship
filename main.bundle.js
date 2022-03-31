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
  var player1ShipCoords = [];
  var player2ShipCoords = [];

  function renderWinPage(winner) {
    body.innerHTML = "".concat(winner.name, " wins!");
    console.log([winner.name, winner.gameboard.allShipsSunk]);
  } // needs an expect player detail?


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

  function passDeviceAndLoadPage(pageCallback) {
    for (var _len = arguments.length, pageArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pageArgs[_key - 1] = arguments[_key];
    }

    // paint screen
    var count = 3;
    body.innerHTML = "";
    var header = document.createElement("h1");
    header.textContent = "Please Pass The Device";
    body.appendChild(header);
    var countdownElem = document.createElement("p");
    countdownElem.id = "countdown";
    countdownElem.textContent = count;
    body.appendChild(countdownElem); // countdown screen

    var intervalID = setInterval(function () {
      if (count === 1) {
        pageCallback.apply(void 0, pageArgs);
        clearInterval(intervalID);
      } else {
        countdownElem.textContent = --count;
      }
    }, 1000); // load new page at end of countdown
  } // need to figure out how to skip loading pages based on if currentplayer
  // is a computer or not


  function decidePageToRender(currentPlayer, nextPlayer) {
    if (currentPlayer.gameboard.remainingShips.length > 0) {
      passDeviceAndLoadPage(renderShipPage, currentPlayer);
    } else if (currentPlayer.gameboard.allShipsSunk) {
      renderWinPage(nextPlayer);
    } else {
      passDeviceAndLoadPage(renderHitPage, currentPlayer, nextPlayer);
    }
  }

  document.addEventListener("startGame", renderPlayerPage);

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
      }
    });
  }

  function renderShipPage(player) {
    body.innerHTML = "\n    <header>\n      <h1>Battleship</h1>\n    </header>\n\n    <section id=\"play-area\">\n      <div id=\"board\">\n        <div data-key=\"A1\" class=\"coord\"></div>\n        <div data-key=\"A2\" class=\"coord\"></div>\n        <div data-key=\"A3\" class=\"coord\"></div>\n        <div data-key=\"A4\" class=\"coord\"></div>\n        <div data-key=\"A5\" class=\"coord\"></div>\n        <div data-key=\"A6\" class=\"coord\"></div>\n        <div data-key=\"A7\" class=\"coord\"></div>\n        <div data-key=\"A8\" class=\"coord\"></div>\n        <div data-key=\"A9\" class=\"coord\"></div>\n        <div data-key=\"A10\" class=\"coord\"></div>\n\n        <div data-key=\"B1\" class=\"coord\"></div>\n        <div data-key=\"B2\" class=\"coord\"></div>\n        <div data-key=\"B3\" class=\"coord\"></div>\n        <div data-key=\"B4\" class=\"coord\"></div>\n        <div data-key=\"B5\" class=\"coord\"></div>\n        <div data-key=\"B6\" class=\"coord\"></div>\n        <div data-key=\"B7\" class=\"coord\"></div>\n        <div data-key=\"B8\" class=\"coord\"></div>\n        <div data-key=\"B9\" class=\"coord\"></div>\n        <div data-key=\"B10\" class=\"coord\"></div>\n\n        <div data-key=\"C1\" class=\"coord\"></div>\n        <div data-key=\"C2\" class=\"coord\"></div>\n        <div data-key=\"C3\" class=\"coord\"></div>\n        <div data-key=\"C4\" class=\"coord\"></div>\n        <div data-key=\"C5\" class=\"coord\"></div>\n        <div data-key=\"C6\" class=\"coord\"></div>\n        <div data-key=\"C7\" class=\"coord\"></div>\n        <div data-key=\"C8\" class=\"coord\"></div>\n        <div data-key=\"C9\" class=\"coord\"></div>\n        <div data-key=\"C10\" class=\"coord\"></div>\n\n        <div data-key=\"D1\" class=\"coord\"></div>\n        <div data-key=\"D2\" class=\"coord\"></div>\n        <div data-key=\"D3\" class=\"coord\"></div>\n        <div data-key=\"D4\" class=\"coord\"></div>\n        <div data-key=\"D5\" class=\"coord\"></div>\n        <div data-key=\"D6\" class=\"coord\"></div>\n        <div data-key=\"D7\" class=\"coord\"></div>\n        <div data-key=\"D8\" class=\"coord\"></div>\n        <div data-key=\"D9\" class=\"coord\"></div>\n        <div data-key=\"D10\" class=\"coord\"></div>\n\n        <div data-key=\"E1\" class=\"coord\"></div>\n        <div data-key=\"E2\" class=\"coord\"></div>\n        <div data-key=\"E3\" class=\"coord\"></div>\n        <div data-key=\"E4\" class=\"coord\"></div>\n        <div data-key=\"E5\" class=\"coord\"></div>\n        <div data-key=\"E6\" class=\"coord\"></div>\n        <div data-key=\"E7\" class=\"coord\"></div>\n        <div data-key=\"E8\" class=\"coord\"></div>\n        <div data-key=\"E9\" class=\"coord\"></div>\n        <div data-key=\"E10\" class=\"coord\"></div>\n\n        <div data-key=\"F1\" class=\"coord\"></div>\n        <div data-key=\"F2\" class=\"coord\"></div>\n        <div data-key=\"F3\" class=\"coord\"></div>\n        <div data-key=\"F4\" class=\"coord\"></div>\n        <div data-key=\"F5\" class=\"coord\"></div>\n        <div data-key=\"F6\" class=\"coord\"></div>\n        <div data-key=\"F7\" class=\"coord\"></div>\n        <div data-key=\"F8\" class=\"coord\"></div>\n        <div data-key=\"F9\" class=\"coord\"></div>\n        <div data-key=\"F10\" class=\"coord\"></div>\n\n        <div data-key=\"G1\" class=\"coord\"></div>\n        <div data-key=\"G2\" class=\"coord\"></div>\n        <div data-key=\"G3\" class=\"coord\"></div>\n        <div data-key=\"G4\" class=\"coord\"></div>\n        <div data-key=\"G5\" class=\"coord\"></div>\n        <div data-key=\"G6\" class=\"coord\"></div>\n        <div data-key=\"G7\" class=\"coord\"></div>\n        <div data-key=\"G8\" class=\"coord\"></div>\n        <div data-key=\"G9\" class=\"coord\"></div>\n        <div data-key=\"G10\" class=\"coord\"></div>\n\n        <div data-key=\"H1\" class=\"coord\"></div>\n        <div data-key=\"H2\" class=\"coord\"></div>\n        <div data-key=\"H3\" class=\"coord\"></div>\n        <div data-key=\"H4\" class=\"coord\"></div>\n        <div data-key=\"H5\" class=\"coord\"></div>\n        <div data-key=\"H6\" class=\"coord\"></div>\n        <div data-key=\"H7\" class=\"coord\"></div>\n        <div data-key=\"H8\" class=\"coord\"></div>\n        <div data-key=\"H9\" class=\"coord\"></div>\n        <div data-key=\"H10\" class=\"coord\"></div>\n\n        <div data-key=\"I1\" class=\"coord\"></div>\n        <div data-key=\"I2\" class=\"coord\"></div>\n        <div data-key=\"I3\" class=\"coord\"></div>\n        <div data-key=\"I4\" class=\"coord\"></div>\n        <div data-key=\"I5\" class=\"coord\"></div>\n        <div data-key=\"I6\" class=\"coord\"></div>\n        <div data-key=\"I7\" class=\"coord\"></div>\n        <div data-key=\"I8\" class=\"coord\"></div>\n        <div data-key=\"I9\" class=\"coord\"></div>\n        <div data-key=\"I10\" class=\"coord\"></div>\n\n        <div data-key=\"J1\" class=\"coord\"></div>\n        <div data-key=\"J2\" class=\"coord\"></div>\n        <div data-key=\"J3\" class=\"coord\"></div>\n        <div data-key=\"J4\" class=\"coord\"></div>\n        <div data-key=\"J5\" class=\"coord\"></div>\n        <div data-key=\"J6\" class=\"coord\"></div>\n        <div data-key=\"J7\" class=\"coord\"></div>\n        <div data-key=\"J8\" class=\"coord\"></div>\n        <div data-key=\"J9\" class=\"coord\"></div>\n        <div data-key=\"J10\" class=\"coord\"></div>\n      </div>\n\n      <div id=\"ships\">\n        <div class=\"ship\" draggable=\"true\">carrier</div>\n        <div class=\"ship\" draggable=\"true\">battleship</div>\n        <div class=\"ship\" draggable=\"true\">cruiser</div>\n        <div class=\"ship\" draggable=\"true\">submarine</div>\n        <div class=\"ship\" draggable=\"true\">destroyer</div>\n      </div>\n    </section>\n\n    <section class=\"buttons\">\n      <button class=\"orientation-toggle\">horizontal</button>\n      <h2>Buttons n' stuff</h2>\n      <button id='finish-button'>Finish</button>\n    </section>";
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
    var finishButton = document.querySelector("#finish-button"); // const abort = new AbortController()

    orientationToggle.addEventListener("click", changeOrientationText);
    ships.addEventListener("dragstart", function (e) {
      return dragged = e.target;
    });
    board.addEventListener("dragover", function (e) {
      return e.preventDefault();
    });
    board.addEventListener("dragenter", turnWhiteCellsGray);
    board.addEventListener("dragleave", turnGrayCellsWhite);
    board.addEventListener("drop", function (e) {
      if (e.target === board) return;
      var dataKey = e.target.getAttribute("data-key");
      var shipName = dragged.textContent;
      var orientation = orientationToggle.textContent;
      var coordsToHighlight = player.gameboard.placeShip(shipName, dataKey, orientation);

      if (coordsToHighlight.length > 0) {
        if (player.playerNum === 1) {
          player1ShipCoords.push(coordsToHighlight);
          console.log(player1ShipCoords);
        } else {
          player2ShipCoords.push(coordsToHighlight);
          console.log(player2ShipCoords);
        }

        highlightCoordsGreen(coordsToHighlight); // push to each player's ship coords. Max ships coords === 5
      } else {
        flashCellRed(e);
      }
    });
    finishButton.addEventListener("click", function () {
      if (player.gameboard.remainingShips.length === 0) {
        // switchplayer event
        fireCustomEvent("Game.switchPlayer", {}, decidePageToRender);
      }
    });
  }

  function renderHitPage(currentPlayer, nextPlayer) {
    body.innerHTML = "\n    <header>\n      <h1>Battleship</h1>\n    </header>\n\n    <section id=\"play-area\">\n      <div id=\"board\">\n        <div data-key=\"A1\" class=\"coord\"></div>\n        <div data-key=\"A2\" class=\"coord\"></div>\n        <div data-key=\"A3\" class=\"coord\"></div>\n        <div data-key=\"A4\" class=\"coord\"></div>\n        <div data-key=\"A5\" class=\"coord\"></div>\n        <div data-key=\"A6\" class=\"coord\"></div>\n        <div data-key=\"A7\" class=\"coord\"></div>\n        <div data-key=\"A8\" class=\"coord\"></div>\n        <div data-key=\"A9\" class=\"coord\"></div>\n        <div data-key=\"A10\" class=\"coord\"></div>\n\n        <div data-key=\"B1\" class=\"coord\"></div>\n        <div data-key=\"B2\" class=\"coord\"></div>\n        <div data-key=\"B3\" class=\"coord\"></div>\n        <div data-key=\"B4\" class=\"coord\"></div>\n        <div data-key=\"B5\" class=\"coord\"></div>\n        <div data-key=\"B6\" class=\"coord\"></div>\n        <div data-key=\"B7\" class=\"coord\"></div>\n        <div data-key=\"B8\" class=\"coord\"></div>\n        <div data-key=\"B9\" class=\"coord\"></div>\n        <div data-key=\"B10\" class=\"coord\"></div>\n\n        <div data-key=\"C1\" class=\"coord\"></div>\n        <div data-key=\"C2\" class=\"coord\"></div>\n        <div data-key=\"C3\" class=\"coord\"></div>\n        <div data-key=\"C4\" class=\"coord\"></div>\n        <div data-key=\"C5\" class=\"coord\"></div>\n        <div data-key=\"C6\" class=\"coord\"></div>\n        <div data-key=\"C7\" class=\"coord\"></div>\n        <div data-key=\"C8\" class=\"coord\"></div>\n        <div data-key=\"C9\" class=\"coord\"></div>\n        <div data-key=\"C10\" class=\"coord\"></div>\n\n        <div data-key=\"D1\" class=\"coord\"></div>\n        <div data-key=\"D2\" class=\"coord\"></div>\n        <div data-key=\"D3\" class=\"coord\"></div>\n        <div data-key=\"D4\" class=\"coord\"></div>\n        <div data-key=\"D5\" class=\"coord\"></div>\n        <div data-key=\"D6\" class=\"coord\"></div>\n        <div data-key=\"D7\" class=\"coord\"></div>\n        <div data-key=\"D8\" class=\"coord\"></div>\n        <div data-key=\"D9\" class=\"coord\"></div>\n        <div data-key=\"D10\" class=\"coord\"></div>\n\n        <div data-key=\"E1\" class=\"coord\"></div>\n        <div data-key=\"E2\" class=\"coord\"></div>\n        <div data-key=\"E3\" class=\"coord\"></div>\n        <div data-key=\"E4\" class=\"coord\"></div>\n        <div data-key=\"E5\" class=\"coord\"></div>\n        <div data-key=\"E6\" class=\"coord\"></div>\n        <div data-key=\"E7\" class=\"coord\"></div>\n        <div data-key=\"E8\" class=\"coord\"></div>\n        <div data-key=\"E9\" class=\"coord\"></div>\n        <div data-key=\"E10\" class=\"coord\"></div>\n\n        <div data-key=\"F1\" class=\"coord\"></div>\n        <div data-key=\"F2\" class=\"coord\"></div>\n        <div data-key=\"F3\" class=\"coord\"></div>\n        <div data-key=\"F4\" class=\"coord\"></div>\n        <div data-key=\"F5\" class=\"coord\"></div>\n        <div data-key=\"F6\" class=\"coord\"></div>\n        <div data-key=\"F7\" class=\"coord\"></div>\n        <div data-key=\"F8\" class=\"coord\"></div>\n        <div data-key=\"F9\" class=\"coord\"></div>\n        <div data-key=\"F10\" class=\"coord\"></div>\n\n        <div data-key=\"G1\" class=\"coord\"></div>\n        <div data-key=\"G2\" class=\"coord\"></div>\n        <div data-key=\"G3\" class=\"coord\"></div>\n        <div data-key=\"G4\" class=\"coord\"></div>\n        <div data-key=\"G5\" class=\"coord\"></div>\n        <div data-key=\"G6\" class=\"coord\"></div>\n        <div data-key=\"G7\" class=\"coord\"></div>\n        <div data-key=\"G8\" class=\"coord\"></div>\n        <div data-key=\"G9\" class=\"coord\"></div>\n        <div data-key=\"G10\" class=\"coord\"></div>\n\n        <div data-key=\"H1\" class=\"coord\"></div>\n        <div data-key=\"H2\" class=\"coord\"></div>\n        <div data-key=\"H3\" class=\"coord\"></div>\n        <div data-key=\"H4\" class=\"coord\"></div>\n        <div data-key=\"H5\" class=\"coord\"></div>\n        <div data-key=\"H6\" class=\"coord\"></div>\n        <div data-key=\"H7\" class=\"coord\"></div>\n        <div data-key=\"H8\" class=\"coord\"></div>\n        <div data-key=\"H9\" class=\"coord\"></div>\n        <div data-key=\"H10\" class=\"coord\"></div>\n\n        <div data-key=\"I1\" class=\"coord\"></div>\n        <div data-key=\"I2\" class=\"coord\"></div>\n        <div data-key=\"I3\" class=\"coord\"></div>\n        <div data-key=\"I4\" class=\"coord\"></div>\n        <div data-key=\"I5\" class=\"coord\"></div>\n        <div data-key=\"I6\" class=\"coord\"></div>\n        <div data-key=\"I7\" class=\"coord\"></div>\n        <div data-key=\"I8\" class=\"coord\"></div>\n        <div data-key=\"I9\" class=\"coord\"></div>\n        <div data-key=\"I10\" class=\"coord\"></div>\n\n        <div data-key=\"J1\" class=\"coord\"></div>\n        <div data-key=\"J2\" class=\"coord\"></div>\n        <div data-key=\"J3\" class=\"coord\"></div>\n        <div data-key=\"J4\" class=\"coord\"></div>\n        <div data-key=\"J5\" class=\"coord\"></div>\n        <div data-key=\"J6\" class=\"coord\"></div>\n        <div data-key=\"J7\" class=\"coord\"></div>\n        <div data-key=\"J8\" class=\"coord\"></div>\n        <div data-key=\"J9\" class=\"coord\"></div>\n        <div data-key=\"J10\" class=\"coord\"></div>\n      </div>\n    </section>\n\n    <button id='board-toggle'>Toggle Board</button>\n    <button id='finish-button'>Finish</button>";
    highlightHitsAndMisses(nextPlayer);
    placeHitListeners(currentPlayer, nextPlayer); // there should be a toggle view button
    // to make the toggle view work, I have to save the coords where the ships
    // are placed somewhere before the hitpage is rendered.
  }

  function highlightHitsAndMisses(player) {
    var board = player.gameboard.board;

    for (var coord in board) {
      var cell = document.querySelector(".coord[data-key='".concat(coord, "']"));

      if (board[coord] === "miss") {
        cell.style.backgroundColor = "red";
      } else if (board[coord] === "hit") {
        cell.style.backgroundColor = "green";
      }
    }
  }

  function highlightShipsGray(player) {
    if (player.playerNum === 1) {
      player1ShipCoords.forEach(function (shipCoords) {
        shipCoords.forEach(function (hitboxCoord) {
          var cell = document.querySelector(".coord[data-key='".concat(hitboxCoord, "']"));
          cell.style.backgroundColor = "gray";
        });
      });
    } else {
      player2ShipCoords.forEach(function (shipCoords) {
        shipCoords.forEach(function (hitboxCoord) {
          var cell = document.querySelector(".coord[data-key='".concat(hitboxCoord, "']"));
          cell.style.backgroundColor = "gray";
        });
      });
    }
  }

  function placeHitListeners(currentPlayer, nextPlayer) {
    var gameboard = document.querySelector("#board");
    var boardToggle = document.querySelector("#board-toggle");
    var finishButton = document.querySelector("#finish-button");
    var hitAbort = new AbortController();
    var hitStatus; // allows attacking and colors cells red (miss) or green (hit)

    var addGameboardListeners = function addGameboardListeners() {
      gameboard.addEventListener("click", function (e) {
        var dataKey = e.target.getAttribute("data-key");
        if (dataKey === null) return;
        hitStatus = nextPlayer.gameboard.recieveAttack(dataKey);
        console.log(hitStatus);

        if (hitStatus === 0) {
          e.target.style.backgroundColor = "red";
          hitAbort.abort();
        } else if (hitStatus === 1) {
          hitAbort.abort();
          e.target.style.backgroundColor = "green";
        } else {
          flashCellRed(e);
        }
      }, {
        signal: hitAbort.signal
      });
    };

    addGameboardListeners();
    boardToggle.addEventListener("click", function () {
      boardToggle.classList.toggle("active");
      var cells = document.querySelectorAll(".coord");
      cells.forEach(function (cell) {
        cell.style.backgroundColor = "";
      });

      if (boardToggle.classList.contains("active")) {
        // shows your board and dissallows attacking
        highlightShipsGray(currentPlayer);
        highlightHitsAndMisses(currentPlayer);
        hitAbort.abort();
      } else if (boardToggle.classList.contains("active") === false && hitStatus === undefined) {
        // hides your baord and allows attacking again
        highlightHitsAndMisses(nextPlayer);
        hitAbort = new AbortController();
        addGameboardListeners();
      } else {
        // hides your board and disallows attacking if player already attacked
        highlightHitsAndMisses(nextPlayer);
      }
    });
    finishButton.addEventListener("click", function () {
      if (hitStatus === 0 || hitStatus === 1) {
        // switchplayer event
        fireCustomEvent("Game.switchPlayer", {}, decidePageToRender);
      }
    });
  }
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
    player1 = (0,_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(e.detail.player1, 1);
    player2 = (0,_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(e.detail.player2, 2);
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

    if (e.detail.callbackFunc) {
      var nextPlayer;

      if (currentPlayer === player1) {
        nextPlayer = player2;
      } else if (currentPlayer === player2) {
        nextPlayer = player1;
      }

      e.detail.callbackFunc(currentPlayer, nextPlayer);
    } // DOMController.renderShipPage, DOMController.renderHitPage

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

function PlayerFactory(name, playerNum) {
  var isComputer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (typeof name !== "string" || typeof isComputer !== "boolean" || playerNum !== 1 && playerNum !== 2) {
    return;
  }

  var gameboard = (0,_BoardFactory__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return Object.freeze({
    get name() {
      return name;
    },

    get playerNum() {
      return playerNum;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUFvRyw4REFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcEZhY3RvcnkgZnJvbSBcIi4vU2hpcEZhY3RvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZEZhY3RvcnkoKSB7XG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IFNoaXBGYWN0b3J5KDUpLFxuICAgIGJhdHRsZXNoaXA6IFNoaXBGYWN0b3J5KDQpLFxuICAgIGNydWlzZXI6IFNoaXBGYWN0b3J5KDMpLFxuICAgIHN1Ym1hcmluZTogU2hpcEZhY3RvcnkoMyksXG4gICAgZGVzdHJveWVyOiBTaGlwRmFjdG9yeSgyKSxcbiAgfVxuXG4gIC8vIGJvYXJkcyBzdGFydCBvdXQgd2l0aG91dCBzaGlwcyBwbGFjZWQsIHRoZW4gYXJlIG1vdmVkIHRvIHBsYWNlZFNoaXBzXG4gIGxldCByZW1haW5pbmdTaGlwcyA9IE9iamVjdC5rZXlzKHNoaXBzKVxuICBsZXQgcGxhY2VkU2hpcHMgPSBbXVxuXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBib2FyZCA9IHtcbiAgICBBMTogJycsIEEyOiAnJywgQTM6ICcnLCBBNDogJycsIEE1OiAnJywgQTY6ICcnLCBBNzogJycsIEE4OiAnJywgQTk6ICcnLCBBMTA6ICcnLCBcbiAgICBCMTogJycsIEIyOiAnJywgQjM6ICcnLCBCNDogJycsIEI1OiAnJywgQjY6ICcnLCBCNzogJycsIEI4OiAnJywgQjk6ICcnLCBCMTA6ICcnLCBcbiAgICBDMTogJycsIEMyOiAnJywgQzM6ICcnLCBDNDogJycsIEM1OiAnJywgQzY6ICcnLCBDNzogJycsIEM4OiAnJywgQzk6ICcnLCBDMTA6ICcnLCBcbiAgICBEMTogJycsIEQyOiAnJywgRDM6ICcnLCBENDogJycsIEQ1OiAnJywgRDY6ICcnLCBENzogJycsIEQ4OiAnJywgRDk6ICcnLCBEMTA6ICcnLCBcbiAgICBFMTogJycsIEUyOiAnJywgRTM6ICcnLCBFNDogJycsIEU1OiAnJywgRTY6ICcnLCBFNzogJycsIEU4OiAnJywgRTk6ICcnLCBFMTA6ICcnLCBcbiAgICBGMTogJycsIEYyOiAnJywgRjM6ICcnLCBGNDogJycsIEY1OiAnJywgRjY6ICcnLCBGNzogJycsIEY4OiAnJywgRjk6ICcnLCBGMTA6ICcnLCBcbiAgICBHMTogJycsIEcyOiAnJywgRzM6ICcnLCBHNDogJycsIEc1OiAnJywgRzY6ICcnLCBHNzogJycsIEc4OiAnJywgRzk6ICcnLCBHMTA6ICcnLCBcbiAgICBIMTogJycsIEgyOiAnJywgSDM6ICcnLCBINDogJycsIEg1OiAnJywgSDY6ICcnLCBINzogJycsIEg4OiAnJywgSDk6ICcnLCBIMTA6ICcnLCBcbiAgICBJMTogJycsIEkyOiAnJywgSTM6ICcnLCBJNDogJycsIEk1OiAnJywgSTY6ICcnLCBJNzogJycsIEk4OiAnJywgSTk6ICcnLCBJMTA6ICcnLCBcbiAgICBKMTogJycsIEoyOiAnJywgSjM6ICcnLCBKNDogJycsIEo1OiAnJywgSjY6ICcnLCBKNzogJycsIEo4OiAnJywgSjk6ICcnLCBKMTA6ICcnLFxuICB9XG5cbiAgZnVuY3Rpb24gX2ZpbmRJbnZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gU2hpcHMgYXJlIHBsYWNlZCBmcm9tIHRoZSBtZWRpYW4gaW5kZXgsIG9yIGluIHRoZSBjYXNlIG9mIGV2ZW5cbiAgICAvLyBzaGlwTGVuZ3RocyBieSB0aGUgbWlkZGxlLWxlZnQgaW5kZXguXG4gICAgLy8gVGhpcyBmdW5jdGlvbjpcbiAgICAvLyAxKSBtYWtlcyBhbiBhcnJheSBvZiBhbGwgdGhlIGludmFsaWQgcGxhY2VtZW50cyBmb3IgdGhhdCBjZW50ZXIgaW5kZXhcbiAgICAvLyB0aGF0IHdvdWxkIGNhdXNlIHRoZSBzaGlwIHRvIGhhbmcgb2ZmIHRoZSBib2FyZC5cbiAgICAvLyAyKSB0aGVuIGFkZHMgdG8gdGhlIGFycmF5IG9mIGludmFsaWQgcGxhY2VtZW50cyBhbGwgYm9hcmQgaW5kZXhlcyB0aGF0XG4gICAgLy8gYXJlIGFscmVhZHkgb2NjdXBpZWRcbiAgICBjb25zdCBiYWRJbmRleGVzID0gW11cbiAgICBjb25zdCBleGNsdXNpb25zID0gW11cblxuICAgIC8vIGZpbmRzIHBsYWNlbWVudHMgdGhhdCB3b3VsZCBtYWtlIGEgaG9yaXpvbnRhbCBzaGlwIGhhbmcgb2ZmIHRoZSBib2FyZFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSBleGNsdXNpb25zLnB1c2goMSwgMiwgOSwgMTApXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkgZXhjbHVzaW9ucy5wdXNoKDEsIDksIDEwKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIGV4Y2x1c2lvbnMucHVzaCgxLCAxMClcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSBleGNsdXNpb25zLnB1c2goMTApXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBleGNsdXNpb24gPSBleGNsdXNpb25zW2ldXG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5LmVuZHNXaXRoKGV4Y2x1c2lvbikpIHtcbiAgICAgICAgICAgIGJhZEluZGV4ZXMucHVzaChrZXkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmluZHMgcGxhY2VtZW50cyB0aGF0IHdvdWxkIG1ha2UgYSB2ZXJpY2FsIHNoaXAgaGFuZyBvZmYgdGhlIGJvYXJkXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSBleGNsdXNpb25zLnB1c2goXCJBXCIsIFwiQlwiLCBcIklcIiwgXCJKXCIpXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkgZXhjbHVzaW9ucy5wdXNoKFwiQVwiLCBcIklcIiwgXCJKXCIpXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykgZXhjbHVzaW9ucy5wdXNoKFwiQVwiLCBcIkpcIilcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSBleGNsdXNpb25zLnB1c2goXCJKXCIpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBleGNsdXNpb24gPSBleGNsdXNpb25zW2ldXG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoZXhjbHVzaW9uKSkge1xuICAgICAgICAgICAgYmFkSW5kZXhlcy5wdXNoKGtleSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGRzIG9jY3VwaWVkIGJvYXJkIGluZGV4ZXMgdGhhdCBhcmUgbm90IGFscmVhZHkgaW4gdGhlIGxpc3RcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgaWYgKGJvYXJkW2tleV0gIT09IFwiXCIgJiYgYmFkSW5kZXhlcy5pbmNsdWRlcyhrZXkpID09PSBmYWxzZSkge1xuICAgICAgICBiYWRJbmRleGVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYWRJbmRleGVzXG4gIH1cblxuICBmdW5jdGlvbiBfZmluZFNoaXBJbmRleGVzKHNoaXBMZW5ndGgsIGdvb2RDb29yZHMsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gZGVzaWduZWQgdG8gYWNjZXB0IGNvb3JkcyB0aGF0IGFyZSBOT1QgaW52YWxpZCwgZmlsdGVyIGNvb3JkcyBhZ2FpbnN0IHRoZVxuICAgIC8vIGFycmF5IF9maW5kSW52YWxpZENvb3JkcygpIHJldHVybnMgYmVmb3JlIHBhc3NpbmcgdGhlbSBpbnRvIHRoaXMgZnVuY3Rpb25cbiAgICBjb25zdCBsZXR0ZXJzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXVxuICAgIGNvbnN0IGNoYXIgPSBnb29kQ29vcmRzLmNoYXJBdCgwKVxuICAgIGNvbnN0IG51bSA9IE51bWJlci5wYXJzZUludChnb29kQ29vcmRzLnN1YnN0cmluZygxKSlcbiAgICBjb25zdCBzaGlwQXJlYSA9IFtdXG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGNoYXIgKyAobnVtIC0gMSksXG4gICAgICAgICAgY2hhciArIChudW0gLSAyKSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMSksXG4gICAgICAgICAgY2hhciArIChudW0gKyAyKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgY2hhciArIChudW0gLSAxKSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMSksXG4gICAgICAgICAgY2hhciArIChudW0gKyAyKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goY2hhciArIChudW0gLSAxKSwgZ29vZENvb3JkcywgY2hhciArIChudW0gKyAxKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChnb29kQ29vcmRzLCBjaGFyICsgKG51bSArIDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAyXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGdvb2RDb29yZHMsIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaXBBcmVhXG4gIH1cblxuICBmdW5jdGlvbiBfY29sbGlzaW9uQ2hlY2soc2hpcExlbmd0aCwgZ29vZENvb3Jkcywgb3JpZW50YXRpb24pIHtcbiAgICAvLyBkZXNpZ25lZCB0byBhY2NlcHQgY29vcmRzIHRoYXQgYXJlIE5PVCBpbnZhbGlkLCBmaWx0ZXIgY29vcmRzIGFnYWluc3QgdGhlXG4gICAgLy8gYXJyYXkgX2ZpbmRJbnZhbGlkQ29vcmRzKCkgcmV0dXJucyBiZWZvcmUgcGFzc2luZyB0aGVtIGludG8gdGhpcyBmdW5jdGlvblxuXG4gICAgLy8gY2hlY2tzIGZvciBjb2xsaXNpb25zIGFsb25nIHRoZSBheGlzIGRlZmluZWQgYnkgJ29yaWVudGF0aW9uJyBmcm9tIHRoZVxuICAgIC8vIGNlbnRlciBvZiB0aGUgc2hpcC4gRG9lcyBub3QgY2hlY2sgdGhlIGNlbnRlciBvZiB0aGUgc2hpcCBpdHNlbGYuXG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl1cbiAgICBjb25zdCBjaGFyID0gZ29vZENvb3Jkcy5jaGFyQXQoMClcbiAgICBjb25zdCBudW0gPSBOdW1iZXIucGFyc2VJbnQoZ29vZENvb3Jkcy5zdWJzdHJpbmcoMSkpXG4gICAgY29uc3Qgc2hpcEFyZWEgPSBbXVxuICAgIGNvbnN0IGlzRW1wdHkgPSAoY29vcmRzKSA9PiBjb29yZHMgPT09IFwiXCJcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAyKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAyKV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtIC0gMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMildXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChib2FyZFtjaGFyICsgKG51bSAtIDEpXSwgYm9hcmRbY2hhciArIChudW0gKyAxKV0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goYm9hcmRbZ29vZENvb3Jkc10sIGJvYXJkW2NoYXIgKyAobnVtICsgMSldKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMl0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMl0gKyBudW1dXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDJdICsgbnVtXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaGlwQXJlYS5ldmVyeShpc0VtcHR5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlIC8vIG5vIGNvbGxpc2lvblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZSAvLyBjb2xsaXNpb25cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY2hlY2tQbGFjZW1lbnQoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwc1tzaGlwXS5oaXRib3hlcy5sZW5ndGhcbiAgICBjb25zdCB2YWxpZENvb3JkcyA9IF9maW5kVmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pXG4gICAgaWYgKHZhbGlkQ29vcmRzLmluY2x1ZGVzKGNvb3JkcykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9maW5kVmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBpbnZhbGlkQXJyYXkgPSBfZmluZEludmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pXG4gICAgY29uc3QgdmFsaWRNb3ZlcyA9IFtdXG5cbiAgICAvLyBhZGQgYW55IGtleXMgdGhhdCB3b3VsZCBoaXQgYW5vdGhlciBzaGlwIHRvIGludmFsaWQgYXJyYXlcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhaW52YWxpZEFycmF5LmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgX2NvbGxpc2lvbkNoZWNrKHNoaXBMZW5ndGgsIGtleSwgb3JpZW50YXRpb24pXG4gICAgICApIHtcbiAgICAgICAgaW52YWxpZEFycmF5LnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1ha2UgYW4gYXJyYXkgb3V0IG9mIGFsbCBjb29yZHMgdGhhdCBhcmUgbm90IGluIGludmFsaWRBcnJheVxuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBpZiAoIWludmFsaWRBcnJheS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHZhbGlkTW92ZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkTW92ZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wbGFjZVJhbmRvbSgpIHtcbiAgICBpZiAocmVtYWluaW5nU2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgY29uc3Qgb3JpZW50YXRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdXG4gICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildXG4gICAgY29uc3QgcmFuZG9tU2hpcCA9XG4gICAgICByZW1haW5pbmdTaGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1haW5pbmdTaGlwcy5sZW5ndGgpXVxuICAgIGNvbnN0IHZhbGlkQ29vcmRzID0gX2ZpbmRWYWxpZENvb3JkcyhcbiAgICAgIHNoaXBzW3JhbmRvbVNoaXBdLmhpdGJveGVzLmxlbmd0aCxcbiAgICAgIHJhbmRvbU9yaWVudGF0aW9uXG4gICAgKVxuICAgIGNvbnN0IHJhbmRvbVZhbGlkQ29vcmRzID1cbiAgICAgIHZhbGlkQ29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkQ29vcmRzLmxlbmd0aCldXG4gICAgcmV0dXJuIHBsYWNlU2hpcChyYW5kb21TaGlwLCByYW5kb21WYWxpZENvb3JkcywgcmFuZG9tT3JpZW50YXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbiwgcmFuZG9tID0gZmFsc2UpIHtcbiAgICAvLyByZXR1cm5zIGFycmF5IG9mIGNvb3JkcyAtIG9yIGFuIGVtcHR5IGFycmF5IGlmIGZhaWxlZCB0byBwbGFjZVxuICAgIGlmIChyYW5kb20gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBfcGxhY2VSYW5kb20oKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIFtzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uXS5zb21lKChhcmcpID0+IGFyZyA9PT0gdW5kZWZpbmVkKSB8fFxuICAgICAgIU9iamVjdC5rZXlzKHNoaXBzKS5pbmNsdWRlcyhzaGlwLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAhT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3Jkcy50b1VwcGVyQ2FzZSgpKSB8fFxuICAgICAgKG9yaWVudGF0aW9uICE9PSBcInZlcnRpY2FsXCIgJiYgb3JpZW50YXRpb24gIT09IFwiaG9yaXpvbnRhbFwiKVxuICAgICkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcEluZGV4ID0gcmVtYWluaW5nU2hpcHMuaW5kZXhPZihzaGlwKVxuICAgIGlmIChzaGlwSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gW10gLy8gcmV0dXJuIGZhbHNlIC0gc2hpcCBjYW5ub3QgYmUgcGxhY2VkIHRoZXJlXG4gICAgfSBlbHNlIGlmIChfY2hlY2tQbGFjZW1lbnQoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIHBsYWNlZFNoaXBzLnB1c2gocmVtYWluaW5nU2hpcHMuc3BsaWNlKHNoaXBJbmRleCwgMSlbMF0pXG4gICAgICBjb25zdCBzaGlwSW5kZXhlcyA9IF9maW5kU2hpcEluZGV4ZXMoXG4gICAgICAgIHNoaXBzW3NoaXBdLmhpdGJveGVzLmxlbmd0aCxcbiAgICAgICAgY29vcmRzLFxuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzW3NoaXBdLmhpdGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3NoaXBJbmRleGVzW2ldXSA9IHNoaXBzW3NoaXBdLmhpdGJveGVzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcEluZGV4ZXNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjaWV2ZUF0dGFjayhjb29yZHMpIHtcbiAgICAvLyBoaXQgMSwgbWlzcyAwLCBhbHJlYWR5IGhpdCAtMVxuICAgIGlmICh0eXBlb2YgYm9hcmRbY29vcmRzXSA9PT0gXCJvYmplY3RcIiAmJiAhYm9hcmRbY29vcmRzXS5pc0hpdCkge1xuICAgICAgYm9hcmRbY29vcmRzXS5oaXQoKVxuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKGJvYXJkW2Nvb3Jkc10gPT09IFwiXCIpIHtcbiAgICAgIGJvYXJkW2Nvb3Jkc10gPSBcIm1pc3NcIlxuICAgICAgcmV0dXJuIDBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZFtjb29yZHNdID09PSBcIm9iamVjdFwiICYmIGJvYXJkW2Nvb3Jkc10uaXNIaXQpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRzXSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBib2FyZFtrZXldID0gXCJcIlxuICAgIH1cblxuICAgIHNoaXBzLmNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KVxuICAgIHNoaXBzLmJhdHRsZXNoaXAgPSBTaGlwRmFjdG9yeSg0KVxuICAgIHNoaXBzLmNydWlzZXIgPSBTaGlwRmFjdG9yeSgzKVxuICAgIHNoaXBzLnN1Ym1hcmluZSA9IFNoaXBGYWN0b3J5KDMpXG4gICAgc2hpcHMuZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMilcblxuICAgIHJlbWFpbmluZ1NoaXBzID0gT2JqZWN0LmtleXMoc2hpcHMpXG4gICAgcGxhY2VkU2hpcHMgPSBbXVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkID0ge31cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmRba2V5XSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIG5ld0JvYXJkW2tleV0gPSBib2FyZFtrZXldXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW2tleV0gPT09IFwib2JqZWN0XCIgJiYgIWJvYXJkW2tleV0uaXNIaXQpIHtcbiAgICAgICAgICBuZXdCb2FyZFtrZXldID0gXCJcIlxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZFtrZXldID09PSBcIm9iamVjdFwiICYmIGJvYXJkW2tleV0uaXNIaXQpIHtcbiAgICAgICAgICBuZXdCb2FyZFtrZXldID0gXCJoaXRcIlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdCb2FyZFxuICAgIH0sXG4gICAgZ2V0IHJlbWFpbmluZ1NoaXBzKCkge1xuICAgICAgcmV0dXJuIFsuLi5yZW1haW5pbmdTaGlwc11cbiAgICB9LFxuICAgIGdldCBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC52YWx1ZXMoc2hpcHMpLmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoc2hpcC5oaXRib3hlcykuZXZlcnkoXG4gICAgICAgICAgICAoaGl0Ym94KSA9PiBoaXRib3guaXNIaXQgPT09IHRydWVcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgcmVzZXQsXG4gIH0pXG59XG4iLCJjb25zdCBET01Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gIGNvbnN0IHBsYXllcjFTaGlwQ29vcmRzID0gW11cbiAgY29uc3QgcGxheWVyMlNoaXBDb29yZHMgPSBbXVxuXG4gIGZ1bmN0aW9uIHJlbmRlcldpblBhZ2Uod2lubmVyKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgJHt3aW5uZXIubmFtZX0gd2lucyFgXG4gICAgY29uc29sZS5sb2coW3dpbm5lci5uYW1lLCB3aW5uZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3Vua10pXG4gIH1cblxuICAvLyBuZWVkcyBhbiBleHBlY3QgcGxheWVyIGRldGFpbD9cbiAgZnVuY3Rpb24gZmlyZUN1c3RvbUV2ZW50KG5hbWUsIGRldGFpbE9iaiwgY2FsbGJhY2tGdW5jKSB7XG4gICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBkZXRhaWw6IGRldGFpbE9iaixcbiAgICB9KVxuXG4gICAgaWYgKGNhbGxiYWNrRnVuYykge1xuICAgICAgZXZ0LmRldGFpbC5jYWxsYmFja0Z1bmMgPSBjYWxsYmFja0Z1bmNcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhc3NEZXZpY2VBbmRMb2FkUGFnZShwYWdlQ2FsbGJhY2ssIC4uLnBhZ2VBcmdzKSB7XG4gICAgLy8gcGFpbnQgc2NyZWVuXG4gICAgbGV0IGNvdW50ID0gM1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYGBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBQYXNzIFRoZSBEZXZpY2VcIlxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgY29uc3QgY291bnRkb3duRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY291bnRkb3duRWxlbS5pZCA9IFwiY291bnRkb3duXCJcbiAgICBjb3VudGRvd25FbGVtLnRleHRDb250ZW50ID0gY291bnRcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvdW50ZG93bkVsZW0pXG5cbiAgICAvLyBjb3VudGRvd24gc2NyZWVuXG4gICAgY29uc3QgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgICBwYWdlQ2FsbGJhY2soLi4ucGFnZUFyZ3MpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZG93bkVsZW0udGV4dENvbnRlbnQgPSAtLWNvdW50XG4gICAgICB9XG4gICAgfSwgMTAwMClcbiAgICAvLyBsb2FkIG5ldyBwYWdlIGF0IGVuZCBvZiBjb3VudGRvd25cbiAgfVxuXG4gIC8vIG5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gc2tpcCBsb2FkaW5nIHBhZ2VzIGJhc2VkIG9uIGlmIGN1cnJlbnRwbGF5ZXJcbiAgLy8gaXMgYSBjb21wdXRlciBvciBub3RcbiAgZnVuY3Rpb24gZGVjaWRlUGFnZVRvUmVuZGVyKGN1cnJlbnRQbGF5ZXIsIG5leHRQbGF5ZXIpIHtcbiAgICBpZiAoY3VycmVudFBsYXllci5nYW1lYm9hcmQucmVtYWluaW5nU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgcGFzc0RldmljZUFuZExvYWRQYWdlKHJlbmRlclNoaXBQYWdlLCBjdXJyZW50UGxheWVyKVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKSB7XG4gICAgICByZW5kZXJXaW5QYWdlKG5leHRQbGF5ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3NEZXZpY2VBbmRMb2FkUGFnZShyZW5kZXJIaXRQYWdlLCBjdXJyZW50UGxheWVyLCBuZXh0UGxheWVyKVxuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdGFydEdhbWVcIiwgcmVuZGVyUGxheWVyUGFnZSlcbiAgZnVuY3Rpb24gcmVuZGVyUGxheWVyUGFnZSgpIHtcbiAgICBib2R5LmlubmVySFRNTCA9IGBcbiAgICA8aDE+V2VsY29tZSB0byBCYXR0bGVTaGlwPC9oMT5cblxuICAgIDxmb3JtPlxuICAgICAgPGxhYmVsIGZvcj0ncGxheWVyMSc+UGxheWVyMTwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9J3BsYXllcjEnPlxuXG4gICAgICA8bGFiZWwgZm9yPSdwbGF5ZXIyJz5QbGF5ZXIyPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD0ncGxheWVyMic+XG5cbiAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPmBcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuICAgIGNvbnN0IGlucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIildXG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGlucHV0cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbHVlLmxlbmd0aCA+IDApKSB7XG4gICAgICAgIGZpcmVDdXN0b21FdmVudChcbiAgICAgICAgICBcIkdhbWUuaW5pdFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllcjE6IGlucHV0c1swXS52YWx1ZSxcbiAgICAgICAgICAgIHBsYXllcjI6IGlucHV0c1sxXS52YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbmRlclNoaXBQYWdlXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2hpcFBhZ2UocGxheWVyKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlcj5cbiAgICAgIDxoMT5CYXR0bGVzaGlwPC9oMT5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxzZWN0aW9uIGlkPVwicGxheS1hcmVhXCI+XG4gICAgICA8ZGl2IGlkPVwiYm9hcmRcIj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGlkPVwic2hpcHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+Y2FycmllcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIj5iYXR0bGVzaGlwPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPmNydWlzZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+c3VibWFyaW5lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPmRlc3Ryb3llcjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwib3JpZW50YXRpb24tdG9nZ2xlXCI+aG9yaXpvbnRhbDwvYnV0dG9uPlxuICAgICAgPGgyPkJ1dHRvbnMgbicgc3R1ZmY8L2gyPlxuICAgICAgPGJ1dHRvbiBpZD0nZmluaXNoLWJ1dHRvbic+RmluaXNoPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPmBcblxuICAgIHBsYWNlU2hpcExpc3RlbmVycyhwbGF5ZXIpXG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VPcmllbnRhdGlvblRleHQoZSkge1xuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJ2ZXJ0aWNhbFwiXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiaG9yaXpvbnRhbFwiXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHVybldoaXRlQ2VsbHNHcmF5KGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIikpIHJldHVyblxuICAgIGlmIChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwiXCIpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmF5XCJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0dXJuR3JheUNlbGxzV2hpdGUoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZFwiKSkgcmV0dXJuXG4gICAgaWYgKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gXCJsaWdodGdyYXlcIikge1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXNoQ2VsbFJlZChlKSB7XG4gICAgbGV0IGN1cnJlbnRDb2xvciA9IGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgIGlmIChjdXJyZW50Q29sb3IgPT09IFwibGlnaHRncmF5XCIpIGN1cnJlbnRDb2xvciA9IFwiXCJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Y29yYWxcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4gKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGN1cnJlbnRDb2xvciksIDI1MClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodENvb3Jkc0dyZWVuKGNvb3Jkc1RvSGlnaGxpZ2h0KSB7XG4gICAgY29uc3QgZWxlbXMgPSBbXVxuICAgIGNvb3Jkc1RvSGlnaGxpZ2h0LmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvb3JkW2RhdGEta2V5PVwiJHtjb29yZH1cIl1gKVxuICAgICAgZWxlbXMucHVzaChlbGVtKVxuICAgIH0pXG5cbiAgICBlbGVtcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIlxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXBMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgbGV0IGRyYWdnZWRcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hpcHNcIilcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIilcbiAgICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JpZW50YXRpb24tdG9nZ2xlXCIpXG4gICAgY29uc3QgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW5pc2gtYnV0dG9uXCIpXG4gICAgLy8gY29uc3QgYWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICAgIG9yaWVudGF0aW9uVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VPcmllbnRhdGlvblRleHQpXG4gICAgc2hpcHMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4gKGRyYWdnZWQgPSBlLnRhcmdldCkpXG5cbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIHR1cm5XaGl0ZUNlbGxzR3JheSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIHR1cm5HcmF5Q2VsbHNXaGl0ZSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBib2FyZCkgcmV0dXJuXG4gICAgICBjb25zdCBkYXRhS2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIilcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gZHJhZ2dlZC50ZXh0Q29udGVudFxuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvblRvZ2dsZS50ZXh0Q29udGVudFxuICAgICAgY29uc3QgY29vcmRzVG9IaWdobGlnaHQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIGRhdGFLZXksXG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICApXG5cbiAgICAgIGlmIChjb29yZHNUb0hpZ2hsaWdodC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChwbGF5ZXIucGxheWVyTnVtID09PSAxKSB7XG4gICAgICAgICAgcGxheWVyMVNoaXBDb29yZHMucHVzaChjb29yZHNUb0hpZ2hsaWdodClcbiAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxU2hpcENvb3JkcylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIyU2hpcENvb3Jkcy5wdXNoKGNvb3Jkc1RvSGlnaGxpZ2h0KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjJTaGlwQ29vcmRzKVxuICAgICAgICB9XG4gICAgICAgIGhpZ2hsaWdodENvb3Jkc0dyZWVuKGNvb3Jkc1RvSGlnaGxpZ2h0KVxuICAgICAgICAvLyBwdXNoIHRvIGVhY2ggcGxheWVyJ3Mgc2hpcCBjb29yZHMuIE1heCBzaGlwcyBjb29yZHMgPT09IDVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsYXNoQ2VsbFJlZChlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmaW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLnJlbWFpbmluZ1NoaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBzd2l0Y2hwbGF5ZXIgZXZlbnRcbiAgICAgICAgZmlyZUN1c3RvbUV2ZW50KFwiR2FtZS5zd2l0Y2hQbGF5ZXJcIiwge30sIGRlY2lkZVBhZ2VUb1JlbmRlcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySGl0UGFnZShjdXJyZW50UGxheWVyLCBuZXh0UGxheWVyKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlcj5cbiAgICAgIDxoMT5CYXR0bGVzaGlwPC9oMT5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxzZWN0aW9uIGlkPVwicGxheS1hcmVhXCI+XG4gICAgICA8ZGl2IGlkPVwiYm9hcmRcIj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxidXR0b24gaWQ9J2JvYXJkLXRvZ2dsZSc+VG9nZ2xlIEJvYXJkPC9idXR0b24+XG4gICAgPGJ1dHRvbiBpZD0nZmluaXNoLWJ1dHRvbic+RmluaXNoPC9idXR0b24+YFxuXG4gICAgaGlnaGxpZ2h0SGl0c0FuZE1pc3NlcyhuZXh0UGxheWVyKVxuICAgIHBsYWNlSGl0TGlzdGVuZXJzKGN1cnJlbnRQbGF5ZXIsIG5leHRQbGF5ZXIpXG4gICAgLy8gdGhlcmUgc2hvdWxkIGJlIGEgdG9nZ2xlIHZpZXcgYnV0dG9uXG5cbiAgICAvLyB0byBtYWtlIHRoZSB0b2dnbGUgdmlldyB3b3JrLCBJIGhhdmUgdG8gc2F2ZSB0aGUgY29vcmRzIHdoZXJlIHRoZSBzaGlwc1xuICAgIC8vIGFyZSBwbGFjZWQgc29tZXdoZXJlIGJlZm9yZSB0aGUgaGl0cGFnZSBpcyByZW5kZXJlZC5cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodEhpdHNBbmRNaXNzZXMocGxheWVyKSB7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkXG5cbiAgICBmb3IgKGNvbnN0IGNvb3JkIGluIGJvYXJkKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvb3JkW2RhdGEta2V5PScke2Nvb3JkfSddYClcbiAgICAgIGlmIChib2FyZFtjb29yZF0gPT09IFwibWlzc1wiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxuICAgICAgfSBlbHNlIGlmIChib2FyZFtjb29yZF0gPT09IFwiaGl0XCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWdobGlnaHRTaGlwc0dyYXkocGxheWVyKSB7XG4gICAgaWYgKHBsYXllci5wbGF5ZXJOdW0gPT09IDEpIHtcbiAgICAgIHBsYXllcjFTaGlwQ29vcmRzLmZvckVhY2goKHNoaXBDb29yZHMpID0+IHtcbiAgICAgICAgc2hpcENvb3Jkcy5mb3JFYWNoKChoaXRib3hDb29yZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jb29yZFtkYXRhLWtleT0nJHtoaXRib3hDb29yZH0nXWBcbiAgICAgICAgICApXG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIlxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMlNoaXBDb29yZHMuZm9yRWFjaCgoc2hpcENvb3JkcykgPT4ge1xuICAgICAgICBzaGlwQ29vcmRzLmZvckVhY2goKGhpdGJveENvb3JkKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNvb3JkW2RhdGEta2V5PScke2hpdGJveENvb3JkfSddYFxuICAgICAgICAgIClcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlSGl0TGlzdGVuZXJzKGN1cnJlbnRQbGF5ZXIsIG5leHRQbGF5ZXIpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkXCIpXG4gICAgY29uc3QgYm9hcmRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXRvZ2dsZVwiKVxuICAgIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmluaXNoLWJ1dHRvblwiKVxuICAgIGxldCBoaXRBYm9ydCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgIGxldCBoaXRTdGF0dXNcblxuICAgIC8vIGFsbG93cyBhdHRhY2tpbmcgYW5kIGNvbG9ycyBjZWxscyByZWQgKG1pc3MpIG9yIGdyZWVuIChoaXQpXG4gICAgY29uc3QgYWRkR2FtZWJvYXJkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhS2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIilcbiAgICAgICAgICBpZiAoZGF0YUtleSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgICAgICBoaXRTdGF0dXMgPSBuZXh0UGxheWVyLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKGRhdGFLZXkpXG4gICAgICAgICAgY29uc29sZS5sb2coaGl0U3RhdHVzKVxuICAgICAgICAgIGlmIChoaXRTdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcbiAgICAgICAgICAgIGhpdEFib3J0LmFib3J0KClcbiAgICAgICAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgaGl0QWJvcnQuYWJvcnQoKVxuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZsYXNoQ2VsbFJlZChlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgeyBzaWduYWw6IGhpdEFib3J0LnNpZ25hbCB9XG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkR2FtZWJvYXJkTGlzdGVuZXJzKClcblxuICAgIGJvYXJkVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBib2FyZFRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29vcmRcIilcbiAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG4gICAgICB9KVxuXG4gICAgICBpZiAoYm9hcmRUb2dnbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIC8vIHNob3dzIHlvdXIgYm9hcmQgYW5kIGRpc3NhbGxvd3MgYXR0YWNraW5nXG4gICAgICAgIGhpZ2hsaWdodFNoaXBzR3JheShjdXJyZW50UGxheWVyKVxuICAgICAgICBoaWdobGlnaHRIaXRzQW5kTWlzc2VzKGN1cnJlbnRQbGF5ZXIpXG4gICAgICAgIGhpdEFib3J0LmFib3J0KClcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGJvYXJkVG9nZ2xlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSA9PT0gZmFsc2UgJiZcbiAgICAgICAgaGl0U3RhdHVzID09PSB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICAvLyBoaWRlcyB5b3VyIGJhb3JkIGFuZCBhbGxvd3MgYXR0YWNraW5nIGFnYWluXG4gICAgICAgIGhpZ2hsaWdodEhpdHNBbmRNaXNzZXMobmV4dFBsYXllcilcbiAgICAgICAgaGl0QWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgYWRkR2FtZWJvYXJkTGlzdGVuZXJzKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGhpZGVzIHlvdXIgYm9hcmQgYW5kIGRpc2FsbG93cyBhdHRhY2tpbmcgaWYgcGxheWVyIGFscmVhZHkgYXR0YWNrZWRcbiAgICAgICAgaGlnaGxpZ2h0SGl0c0FuZE1pc3NlcyhuZXh0UGxheWVyKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmaW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChoaXRTdGF0dXMgPT09IDAgfHwgaGl0U3RhdHVzID09PSAxKSB7XG4gICAgICAgIC8vIHN3aXRjaHBsYXllciBldmVudFxuICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXCJHYW1lLnN3aXRjaFBsYXllclwiLCB7fSwgZGVjaWRlUGFnZVRvUmVuZGVyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlclxuIiwiaW1wb3J0IFBsYXllckZhY3RvcnkgZnJvbSBcIi4vUGxheWVyRmFjdG9yeVwiXG5cbmNvbnN0IEdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcGxheWVyMVxuICBsZXQgcGxheWVyMlxuICBsZXQgY3VycmVudFBsYXllclxuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IG5ldyBDdXN0b21FdmVudChcInN0YXJ0R2FtZVwiLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgZGV0YWlsOiB7fSxcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChzdGFydEdhbWUpXG4gICAgLy8gRE9NQ29udHJvbGxlci5yZW5kZXJQbGF5ZXJwYWdlXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiR2FtZS5pbml0XCIsIGluaXQpXG4gIGZ1bmN0aW9uIGluaXQoZSkge1xuICAgIHBsYXllcjEgPSBQbGF5ZXJGYWN0b3J5KGUuZGV0YWlsLnBsYXllcjEsIDEpXG4gICAgcGxheWVyMiA9IFBsYXllckZhY3RvcnkoZS5kZXRhaWwucGxheWVyMiwgMilcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyMVxuICAgIGlmIChlLmRldGFpbC5jYWxsYmFja0Z1bmMpIGUuZGV0YWlsLmNhbGxiYWNrRnVuYyhjdXJyZW50UGxheWVyKVxuICAgIC8vIERPTUNvbnRyb2xsZXIucmVuZGVyU2hpcFBhZ2VcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJHYW1lLnN3aXRjaFBsYXllclwiLCBzd2l0Y2hQbGF5ZXIpXG4gIGZ1bmN0aW9uIHN3aXRjaFBsYXllcihlKSB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIyKSB7XG4gICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyMVxuICAgIH1cblxuICAgIGlmIChlLmRldGFpbC5jYWxsYmFja0Z1bmMpIHtcbiAgICAgIGxldCBuZXh0UGxheWVyXG5cbiAgICAgIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgICAgIG5leHRQbGF5ZXIgPSBwbGF5ZXIyXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjIpIHtcbiAgICAgICAgbmV4dFBsYXllciA9IHBsYXllcjFcbiAgICAgIH1cblxuICAgICAgZS5kZXRhaWwuY2FsbGJhY2tGdW5jKGN1cnJlbnRQbGF5ZXIsIG5leHRQbGF5ZXIpXG4gICAgfVxuXG4gICAgLy8gRE9NQ29udHJvbGxlci5yZW5kZXJTaGlwUGFnZSwgRE9NQ29udHJvbGxlci5yZW5kZXJIaXRQYWdlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0LFxuICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVcbiIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vQm9hcmRGYWN0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyRmFjdG9yeShuYW1lLCBwbGF5ZXJOdW0sIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xuICBpZiAoXG4gICAgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHxcbiAgICB0eXBlb2YgaXNDb21wdXRlciAhPT0gXCJib29sZWFuXCIgfHxcbiAgICAocGxheWVyTnVtICE9PSAxICYmIHBsYXllck51bSAhPT0gMilcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBnYW1lYm9hcmQgPSBCb2FyZEZhY3RvcnkoKVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfSxcbiAgICBnZXQgcGxheWVyTnVtKCkge1xuICAgICAgcmV0dXJuIHBsYXllck51bVxuICAgIH0sXG4gICAgZ2V0IGlzQ29tcHV0ZXIoKSB7XG4gICAgICByZXR1cm4gaXNDb21wdXRlclxuICAgIH0sXG4gICAgZ2V0IGdhbWVib2FyZCgpIHtcbiAgICAgIHJldHVybiBnYW1lYm9hcmRcbiAgICB9LFxuICB9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hpcEZhY3RvcnkobGVuZ3RoKSB7XG4gIGlmIChsZW5ndGggPCAyIHx8IGxlbmd0aCA+IDUpIHJldHVyblxuXG4gIGNvbnN0IGhpdGJveGVzID0gX2NyZWF0ZUhpdGJveGVzKClcblxuICBmdW5jdGlvbiBfY3JlYXRlSGl0Ym94ZXMoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICAgIGhpdDogKCkgPT4gaGl0KGkpLFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5XG4gIH1cblxuICBmdW5jdGlvbiBoaXQoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gaGl0Ym94ZXMubGVuZ3RoIHx8IGluZGV4IDwgMCkgcmV0dXJuXG4gICAgaGl0Ym94ZXNbaW5kZXhdLmlzSGl0ID0gdHJ1ZVxuICAgIHJldHVybiBoaXRib3hlcy5tYXAoKGhpdGJveCkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4uaGl0Ym94IH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldCBoaXRib3hlcygpIHtcbiAgICAgIHJldHVybiBoaXRib3hlcy5tYXAoKGhpdGJveCkgPT4gKHtcbiAgICAgICAgZ2V0IGlzSGl0KCkge1xuICAgICAgICAgIHJldHVybiBoaXRib3guaXNIaXRcbiAgICAgICAgfSxcbiAgICAgICAgaGl0OiBoaXRib3guaGl0LFxuICAgICAgfSkpXG4gICAgfSxcbiAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgaWYgKGhpdGJveGVzLmV2ZXJ5KChoaXRib3gpID0+IGhpdGJveC5pc0hpdCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gIH0pXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYW1lIGZyb20gXCIuL21vZHVsZXMvR2FtZS5qc1wiXG5pbXBvcnQgRE9NQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL0RPTUNvbnRyb2xsZXJcIlxuXG5HYW1lLnN0YXJ0KClcbi8qXG5HYW1lLnBsYXllcjEgPSBQbGF5ZXJGYWN0b3J5KFwicGxheWVyMVwiKVxuR2FtZS5wbGF5ZXIyID0gUGxheWVyRmFjdG9yeShcInBsYXllcjJcIilcbkdhbWUuc3RhcnRHYW1lKClcbmNvbnNvbGUubG9nKEdhbWUuY3VycmVudFBsYXllcilcbiovXG4vKlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXJ0Z2FtZVwiLCBET01Db250cm9sbGVyLnJlbmRlclBsYXllclBhZ2UpXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICBcInBsYXlBZ2FpblwiLFxuICBET01Db250cm9sbGVyLnJlbmRlclNoaXBQYWdlKEdhbWUucGxheWVyMSlcbilcbi8vIEdhbWUuc3RhcnRHYW1lKClcbiovXG4iXSwibmFtZXMiOlsiU2hpcEZhY3RvcnkiLCJCb2FyZEZhY3RvcnkiLCJzaGlwcyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsInJlbWFpbmluZ1NoaXBzIiwiT2JqZWN0Iiwia2V5cyIsInBsYWNlZFNoaXBzIiwiYm9hcmQiLCJBMSIsIkEyIiwiQTMiLCJBNCIsIkE1IiwiQTYiLCJBNyIsIkE4IiwiQTkiLCJBMTAiLCJCMSIsIkIyIiwiQjMiLCJCNCIsIkI1IiwiQjYiLCJCNyIsIkI4IiwiQjkiLCJCMTAiLCJDMSIsIkMyIiwiQzMiLCJDNCIsIkM1IiwiQzYiLCJDNyIsIkM4IiwiQzkiLCJDMTAiLCJEMSIsIkQyIiwiRDMiLCJENCIsIkQ1IiwiRDYiLCJENyIsIkQ4IiwiRDkiLCJEMTAiLCJFMSIsIkUyIiwiRTMiLCJFNCIsIkU1IiwiRTYiLCJFNyIsIkU4IiwiRTkiLCJFMTAiLCJGMSIsIkYyIiwiRjMiLCJGNCIsIkY1IiwiRjYiLCJGNyIsIkY4IiwiRjkiLCJGMTAiLCJHMSIsIkcyIiwiRzMiLCJHNCIsIkc1IiwiRzYiLCJHNyIsIkc4IiwiRzkiLCJHMTAiLCJIMSIsIkgyIiwiSDMiLCJINCIsIkg1IiwiSDYiLCJINyIsIkg4IiwiSDkiLCJIMTAiLCJJMSIsIkkyIiwiSTMiLCJJNCIsIkk1IiwiSTYiLCJJNyIsIkk4IiwiSTkiLCJJMTAiLCJKMSIsIkoyIiwiSjMiLCJKNCIsIko1IiwiSjYiLCJKNyIsIko4IiwiSjkiLCJKMTAiLCJfZmluZEludmFsaWRDb29yZHMiLCJzaGlwTGVuZ3RoIiwib3JpZW50YXRpb24iLCJiYWRJbmRleGVzIiwiZXhjbHVzaW9ucyIsInB1c2giLCJpIiwibGVuZ3RoIiwiZXhjbHVzaW9uIiwia2V5IiwiZW5kc1dpdGgiLCJzdGFydHNXaXRoIiwiaW5jbHVkZXMiLCJfZmluZFNoaXBJbmRleGVzIiwiZ29vZENvb3JkcyIsImxldHRlcnMiLCJjaGFyIiwiY2hhckF0IiwibnVtIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJzaGlwQXJlYSIsImluZGV4T2YiLCJfY29sbGlzaW9uQ2hlY2siLCJpc0VtcHR5IiwiY29vcmRzIiwiZXZlcnkiLCJfY2hlY2tQbGFjZW1lbnQiLCJzaGlwIiwiaGl0Ym94ZXMiLCJ2YWxpZENvb3JkcyIsIl9maW5kVmFsaWRDb29yZHMiLCJpbnZhbGlkQXJyYXkiLCJ2YWxpZE1vdmVzIiwiX3BsYWNlUmFuZG9tIiwib3JpZW50YXRpb25zIiwicmFuZG9tT3JpZW50YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21TaGlwIiwicmFuZG9tVmFsaWRDb29yZHMiLCJwbGFjZVNoaXAiLCJzb21lIiwiYXJnIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInNoaXBJbmRleCIsInNwbGljZSIsInNoaXBJbmRleGVzIiwicmVjaWV2ZUF0dGFjayIsImlzSGl0IiwiaGl0IiwicmVzZXQiLCJmcmVlemUiLCJuZXdCb2FyZCIsImFsbFNoaXBzU3VuayIsInZhbHVlcyIsImhpdGJveCIsIkRPTUNvbnRyb2xsZXIiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyMVNoaXBDb29yZHMiLCJwbGF5ZXIyU2hpcENvb3JkcyIsInJlbmRlcldpblBhZ2UiLCJ3aW5uZXIiLCJpbm5lckhUTUwiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImdhbWVib2FyZCIsImZpcmVDdXN0b21FdmVudCIsImRldGFpbE9iaiIsImNhbGxiYWNrRnVuYyIsImV2dCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJwYXNzRGV2aWNlQW5kTG9hZFBhZ2UiLCJwYWdlQ2FsbGJhY2siLCJwYWdlQXJncyIsImNvdW50IiwiaGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJjb3VudGRvd25FbGVtIiwiaWQiLCJpbnRlcnZhbElEIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGVjaWRlUGFnZVRvUmVuZGVyIiwiY3VycmVudFBsYXllciIsIm5leHRQbGF5ZXIiLCJyZW5kZXJTaGlwUGFnZSIsInJlbmRlckhpdFBhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyUGxheWVyUGFnZSIsImZvcm0iLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwicGxheWVyIiwicGxhY2VTaGlwTGlzdGVuZXJzIiwiY2hhbmdlT3JpZW50YXRpb25UZXh0IiwidGFyZ2V0IiwidHVybldoaXRlQ2VsbHNHcmF5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0dXJuR3JheUNlbGxzV2hpdGUiLCJmbGFzaENlbGxSZWQiLCJjdXJyZW50Q29sb3IiLCJzZXRUaW1lb3V0IiwiaGlnaGxpZ2h0Q29vcmRzR3JlZW4iLCJjb29yZHNUb0hpZ2hsaWdodCIsImVsZW1zIiwiZm9yRWFjaCIsImNvb3JkIiwiZWxlbSIsImRyYWdnZWQiLCJvcmllbnRhdGlvblRvZ2dsZSIsImZpbmlzaEJ1dHRvbiIsImRhdGFLZXkiLCJnZXRBdHRyaWJ1dGUiLCJzaGlwTmFtZSIsInBsYXllck51bSIsImhpZ2hsaWdodEhpdHNBbmRNaXNzZXMiLCJwbGFjZUhpdExpc3RlbmVycyIsImNlbGwiLCJoaWdobGlnaHRTaGlwc0dyYXkiLCJzaGlwQ29vcmRzIiwiaGl0Ym94Q29vcmQiLCJib2FyZFRvZ2dsZSIsImhpdEFib3J0IiwiQWJvcnRDb250cm9sbGVyIiwiaGl0U3RhdHVzIiwiYWRkR2FtZWJvYXJkTGlzdGVuZXJzIiwiYWJvcnQiLCJzaWduYWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjZWxscyIsImNvbnRhaW5zIiwiUGxheWVyRmFjdG9yeSIsIkdhbWUiLCJzdGFydCIsInN0YXJ0R2FtZSIsImluaXQiLCJzd2l0Y2hQbGF5ZXIiLCJpc0NvbXB1dGVyIiwiX2NyZWF0ZUhpdGJveGVzIiwiYXJyYXkiLCJpbmRleCIsIm1hcCIsImlzU3VuayJdLCJzb3VyY2VSb290IjoiIn0=