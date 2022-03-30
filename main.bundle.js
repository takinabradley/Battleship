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
    // also make an async function or something that loads the page after a
    // loading screen
    if (currentPlayer.gameboard.remainingShips.length > 0) {
      passDeviceAndLoadPage(renderShipPage, currentPlayer); // renderShipPage(currentPlayer)
    } else if (currentPlayer.gameboard.allShipsSunk) {
      // doesn't need a pass device page
      renderWinPage(nextPlayer); // probably needs to be opposite
    } else {
      // also needs to take current player, so that you can toggle a view
      // of where your own ships are (or needs to be told a variable to look
      // for placed ship coords)
      // also need to show places where the other player has hit already
      passDeviceAndLoadPage(renderHitPage, nextPlayer, currentPlayer); // renderHitPage(nextPlayer) // needs to be opposite
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

  function renderHitPage(player, currentPlayer) {
    console.log([player, currentPlayer]);
    body.innerHTML = "\n    <header>\n      <h1>Battleship</h1>\n    </header>\n\n    <section id=\"play-area\">\n      <div id=\"board\">\n        <div data-key=\"A1\" class=\"coord\"></div>\n        <div data-key=\"A2\" class=\"coord\"></div>\n        <div data-key=\"A3\" class=\"coord\"></div>\n        <div data-key=\"A4\" class=\"coord\"></div>\n        <div data-key=\"A5\" class=\"coord\"></div>\n        <div data-key=\"A6\" class=\"coord\"></div>\n        <div data-key=\"A7\" class=\"coord\"></div>\n        <div data-key=\"A8\" class=\"coord\"></div>\n        <div data-key=\"A9\" class=\"coord\"></div>\n        <div data-key=\"A10\" class=\"coord\"></div>\n\n        <div data-key=\"B1\" class=\"coord\"></div>\n        <div data-key=\"B2\" class=\"coord\"></div>\n        <div data-key=\"B3\" class=\"coord\"></div>\n        <div data-key=\"B4\" class=\"coord\"></div>\n        <div data-key=\"B5\" class=\"coord\"></div>\n        <div data-key=\"B6\" class=\"coord\"></div>\n        <div data-key=\"B7\" class=\"coord\"></div>\n        <div data-key=\"B8\" class=\"coord\"></div>\n        <div data-key=\"B9\" class=\"coord\"></div>\n        <div data-key=\"B10\" class=\"coord\"></div>\n\n        <div data-key=\"C1\" class=\"coord\"></div>\n        <div data-key=\"C2\" class=\"coord\"></div>\n        <div data-key=\"C3\" class=\"coord\"></div>\n        <div data-key=\"C4\" class=\"coord\"></div>\n        <div data-key=\"C5\" class=\"coord\"></div>\n        <div data-key=\"C6\" class=\"coord\"></div>\n        <div data-key=\"C7\" class=\"coord\"></div>\n        <div data-key=\"C8\" class=\"coord\"></div>\n        <div data-key=\"C9\" class=\"coord\"></div>\n        <div data-key=\"C10\" class=\"coord\"></div>\n\n        <div data-key=\"D1\" class=\"coord\"></div>\n        <div data-key=\"D2\" class=\"coord\"></div>\n        <div data-key=\"D3\" class=\"coord\"></div>\n        <div data-key=\"D4\" class=\"coord\"></div>\n        <div data-key=\"D5\" class=\"coord\"></div>\n        <div data-key=\"D6\" class=\"coord\"></div>\n        <div data-key=\"D7\" class=\"coord\"></div>\n        <div data-key=\"D8\" class=\"coord\"></div>\n        <div data-key=\"D9\" class=\"coord\"></div>\n        <div data-key=\"D10\" class=\"coord\"></div>\n\n        <div data-key=\"E1\" class=\"coord\"></div>\n        <div data-key=\"E2\" class=\"coord\"></div>\n        <div data-key=\"E3\" class=\"coord\"></div>\n        <div data-key=\"E4\" class=\"coord\"></div>\n        <div data-key=\"E5\" class=\"coord\"></div>\n        <div data-key=\"E6\" class=\"coord\"></div>\n        <div data-key=\"E7\" class=\"coord\"></div>\n        <div data-key=\"E8\" class=\"coord\"></div>\n        <div data-key=\"E9\" class=\"coord\"></div>\n        <div data-key=\"E10\" class=\"coord\"></div>\n\n        <div data-key=\"F1\" class=\"coord\"></div>\n        <div data-key=\"F2\" class=\"coord\"></div>\n        <div data-key=\"F3\" class=\"coord\"></div>\n        <div data-key=\"F4\" class=\"coord\"></div>\n        <div data-key=\"F5\" class=\"coord\"></div>\n        <div data-key=\"F6\" class=\"coord\"></div>\n        <div data-key=\"F7\" class=\"coord\"></div>\n        <div data-key=\"F8\" class=\"coord\"></div>\n        <div data-key=\"F9\" class=\"coord\"></div>\n        <div data-key=\"F10\" class=\"coord\"></div>\n\n        <div data-key=\"G1\" class=\"coord\"></div>\n        <div data-key=\"G2\" class=\"coord\"></div>\n        <div data-key=\"G3\" class=\"coord\"></div>\n        <div data-key=\"G4\" class=\"coord\"></div>\n        <div data-key=\"G5\" class=\"coord\"></div>\n        <div data-key=\"G6\" class=\"coord\"></div>\n        <div data-key=\"G7\" class=\"coord\"></div>\n        <div data-key=\"G8\" class=\"coord\"></div>\n        <div data-key=\"G9\" class=\"coord\"></div>\n        <div data-key=\"G10\" class=\"coord\"></div>\n\n        <div data-key=\"H1\" class=\"coord\"></div>\n        <div data-key=\"H2\" class=\"coord\"></div>\n        <div data-key=\"H3\" class=\"coord\"></div>\n        <div data-key=\"H4\" class=\"coord\"></div>\n        <div data-key=\"H5\" class=\"coord\"></div>\n        <div data-key=\"H6\" class=\"coord\"></div>\n        <div data-key=\"H7\" class=\"coord\"></div>\n        <div data-key=\"H8\" class=\"coord\"></div>\n        <div data-key=\"H9\" class=\"coord\"></div>\n        <div data-key=\"H10\" class=\"coord\"></div>\n\n        <div data-key=\"I1\" class=\"coord\"></div>\n        <div data-key=\"I2\" class=\"coord\"></div>\n        <div data-key=\"I3\" class=\"coord\"></div>\n        <div data-key=\"I4\" class=\"coord\"></div>\n        <div data-key=\"I5\" class=\"coord\"></div>\n        <div data-key=\"I6\" class=\"coord\"></div>\n        <div data-key=\"I7\" class=\"coord\"></div>\n        <div data-key=\"I8\" class=\"coord\"></div>\n        <div data-key=\"I9\" class=\"coord\"></div>\n        <div data-key=\"I10\" class=\"coord\"></div>\n\n        <div data-key=\"J1\" class=\"coord\"></div>\n        <div data-key=\"J2\" class=\"coord\"></div>\n        <div data-key=\"J3\" class=\"coord\"></div>\n        <div data-key=\"J4\" class=\"coord\"></div>\n        <div data-key=\"J5\" class=\"coord\"></div>\n        <div data-key=\"J6\" class=\"coord\"></div>\n        <div data-key=\"J7\" class=\"coord\"></div>\n        <div data-key=\"J8\" class=\"coord\"></div>\n        <div data-key=\"J9\" class=\"coord\"></div>\n        <div data-key=\"J10\" class=\"coord\"></div>\n      </div>\n    </section>\n\n    <button id='finish-button'>Finish</button>";
    highlightHitsAndMisses(player);
    placeHitListeners(player); // there should be a toggle view button
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

  function placeHitListeners(player) {
    var hitAbort = new AbortController();
    var hitStatus;
    var gameboard = document.querySelector("#board");
    gameboard.addEventListener("click", function (e) {
      // colors cells red (miss) or green (hit) when attacked
      var dataKey = e.target.getAttribute("data-key");
      if (dataKey === null) return;
      hitStatus = player.gameboard.recieveAttack(dataKey);
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
    var finishButton = document.querySelector("#finish-button");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUEwRiw4REFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcEZhY3RvcnkgZnJvbSBcIi4vU2hpcEZhY3RvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZEZhY3RvcnkoKSB7XG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IFNoaXBGYWN0b3J5KDUpLFxuICAgIGJhdHRsZXNoaXA6IFNoaXBGYWN0b3J5KDQpLFxuICAgIGNydWlzZXI6IFNoaXBGYWN0b3J5KDMpLFxuICAgIHN1Ym1hcmluZTogU2hpcEZhY3RvcnkoMyksXG4gICAgZGVzdHJveWVyOiBTaGlwRmFjdG9yeSgyKSxcbiAgfVxuXG4gIC8vIGJvYXJkcyBzdGFydCBvdXQgd2l0aG91dCBzaGlwcyBwbGFjZWQsIHRoZW4gYXJlIG1vdmVkIHRvIHBsYWNlZFNoaXBzXG4gIGxldCByZW1haW5pbmdTaGlwcyA9IE9iamVjdC5rZXlzKHNoaXBzKVxuICBsZXQgcGxhY2VkU2hpcHMgPSBbXVxuXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBib2FyZCA9IHtcbiAgICBBMTogJycsIEEyOiAnJywgQTM6ICcnLCBBNDogJycsIEE1OiAnJywgQTY6ICcnLCBBNzogJycsIEE4OiAnJywgQTk6ICcnLCBBMTA6ICcnLCBcbiAgICBCMTogJycsIEIyOiAnJywgQjM6ICcnLCBCNDogJycsIEI1OiAnJywgQjY6ICcnLCBCNzogJycsIEI4OiAnJywgQjk6ICcnLCBCMTA6ICcnLCBcbiAgICBDMTogJycsIEMyOiAnJywgQzM6ICcnLCBDNDogJycsIEM1OiAnJywgQzY6ICcnLCBDNzogJycsIEM4OiAnJywgQzk6ICcnLCBDMTA6ICcnLCBcbiAgICBEMTogJycsIEQyOiAnJywgRDM6ICcnLCBENDogJycsIEQ1OiAnJywgRDY6ICcnLCBENzogJycsIEQ4OiAnJywgRDk6ICcnLCBEMTA6ICcnLCBcbiAgICBFMTogJycsIEUyOiAnJywgRTM6ICcnLCBFNDogJycsIEU1OiAnJywgRTY6ICcnLCBFNzogJycsIEU4OiAnJywgRTk6ICcnLCBFMTA6ICcnLCBcbiAgICBGMTogJycsIEYyOiAnJywgRjM6ICcnLCBGNDogJycsIEY1OiAnJywgRjY6ICcnLCBGNzogJycsIEY4OiAnJywgRjk6ICcnLCBGMTA6ICcnLCBcbiAgICBHMTogJycsIEcyOiAnJywgRzM6ICcnLCBHNDogJycsIEc1OiAnJywgRzY6ICcnLCBHNzogJycsIEc4OiAnJywgRzk6ICcnLCBHMTA6ICcnLCBcbiAgICBIMTogJycsIEgyOiAnJywgSDM6ICcnLCBINDogJycsIEg1OiAnJywgSDY6ICcnLCBINzogJycsIEg4OiAnJywgSDk6ICcnLCBIMTA6ICcnLCBcbiAgICBJMTogJycsIEkyOiAnJywgSTM6ICcnLCBJNDogJycsIEk1OiAnJywgSTY6ICcnLCBJNzogJycsIEk4OiAnJywgSTk6ICcnLCBJMTA6ICcnLCBcbiAgICBKMTogJycsIEoyOiAnJywgSjM6ICcnLCBKNDogJycsIEo1OiAnJywgSjY6ICcnLCBKNzogJycsIEo4OiAnJywgSjk6ICcnLCBKMTA6ICcnLFxuICB9XG5cbiAgZnVuY3Rpb24gX2ZpbmRJbnZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gU2hpcHMgYXJlIHBsYWNlZCBmcm9tIHRoZSBtZWRpYW4gaW5kZXgsIG9yIGluIHRoZSBjYXNlIG9mIGV2ZW5cbiAgICAvLyBzaGlwTGVuZ3RocyBieSB0aGUgbWlkZGxlLWxlZnQgaW5kZXguXG4gICAgLy8gVGhpcyBmdW5jdGlvbjpcbiAgICAvLyAxKSBtYWtlcyBhbiBhcnJheSBvZiBhbGwgdGhlIGludmFsaWQgcGxhY2VtZW50cyBmb3IgdGhhdCBjZW50ZXIgaW5kZXhcbiAgICAvLyB0aGF0IHdvdWxkIGNhdXNlIHRoZSBzaGlwIHRvIGhhbmcgb2ZmIHRoZSBib2FyZC5cbiAgICAvLyAyKSB0aGVuIGFkZHMgdG8gdGhlIGFycmF5IG9mIGludmFsaWQgcGxhY2VtZW50cyBhbGwgYm9hcmQgaW5kZXhlcyB0aGF0XG4gICAgLy8gYXJlIGFscmVhZHkgb2NjdXBpZWRcbiAgICBjb25zdCBiYWRJbmRleGVzID0gW11cbiAgICBjb25zdCBleGNsdXNpb25zID0gW11cblxuICAgIC8vIGZpbmRzIHBsYWNlbWVudHMgdGhhdCB3b3VsZCBtYWtlIGEgaG9yaXpvbnRhbCBzaGlwIGhhbmcgb2ZmIHRoZSBib2FyZFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSBleGNsdXNpb25zLnB1c2goMSwgMiwgOSwgMTApXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkgZXhjbHVzaW9ucy5wdXNoKDEsIDksIDEwKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIGV4Y2x1c2lvbnMucHVzaCgxLCAxMClcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSBleGNsdXNpb25zLnB1c2goMTApXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBleGNsdXNpb24gPSBleGNsdXNpb25zW2ldXG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5LmVuZHNXaXRoKGV4Y2x1c2lvbikpIHtcbiAgICAgICAgICAgIGJhZEluZGV4ZXMucHVzaChrZXkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmluZHMgcGxhY2VtZW50cyB0aGF0IHdvdWxkIG1ha2UgYSB2ZXJpY2FsIHNoaXAgaGFuZyBvZmYgdGhlIGJvYXJkXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSBleGNsdXNpb25zLnB1c2goXCJBXCIsIFwiQlwiLCBcIklcIiwgXCJKXCIpXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkgZXhjbHVzaW9ucy5wdXNoKFwiQVwiLCBcIklcIiwgXCJKXCIpXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykgZXhjbHVzaW9ucy5wdXNoKFwiQVwiLCBcIkpcIilcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSBleGNsdXNpb25zLnB1c2goXCJKXCIpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBleGNsdXNpb24gPSBleGNsdXNpb25zW2ldXG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoZXhjbHVzaW9uKSkge1xuICAgICAgICAgICAgYmFkSW5kZXhlcy5wdXNoKGtleSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGRzIG9jY3VwaWVkIGJvYXJkIGluZGV4ZXMgdGhhdCBhcmUgbm90IGFscmVhZHkgaW4gdGhlIGxpc3RcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgaWYgKGJvYXJkW2tleV0gIT09IFwiXCIgJiYgYmFkSW5kZXhlcy5pbmNsdWRlcyhrZXkpID09PSBmYWxzZSkge1xuICAgICAgICBiYWRJbmRleGVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYWRJbmRleGVzXG4gIH1cblxuICBmdW5jdGlvbiBfZmluZFNoaXBJbmRleGVzKHNoaXBMZW5ndGgsIGdvb2RDb29yZHMsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gZGVzaWduZWQgdG8gYWNjZXB0IGNvb3JkcyB0aGF0IGFyZSBOT1QgaW52YWxpZCwgZmlsdGVyIGNvb3JkcyBhZ2FpbnN0IHRoZVxuICAgIC8vIGFycmF5IF9maW5kSW52YWxpZENvb3JkcygpIHJldHVybnMgYmVmb3JlIHBhc3NpbmcgdGhlbSBpbnRvIHRoaXMgZnVuY3Rpb25cbiAgICBjb25zdCBsZXR0ZXJzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXVxuICAgIGNvbnN0IGNoYXIgPSBnb29kQ29vcmRzLmNoYXJBdCgwKVxuICAgIGNvbnN0IG51bSA9IE51bWJlci5wYXJzZUludChnb29kQ29vcmRzLnN1YnN0cmluZygxKSlcbiAgICBjb25zdCBzaGlwQXJlYSA9IFtdXG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGNoYXIgKyAobnVtIC0gMSksXG4gICAgICAgICAgY2hhciArIChudW0gLSAyKSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMSksXG4gICAgICAgICAgY2hhciArIChudW0gKyAyKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgY2hhciArIChudW0gLSAxKSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMSksXG4gICAgICAgICAgY2hhciArIChudW0gKyAyKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goY2hhciArIChudW0gLSAxKSwgZ29vZENvb3JkcywgY2hhciArIChudW0gKyAxKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChnb29kQ29vcmRzLCBjaGFyICsgKG51bSArIDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAyXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGdvb2RDb29yZHMsIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaXBBcmVhXG4gIH1cblxuICBmdW5jdGlvbiBfY29sbGlzaW9uQ2hlY2soc2hpcExlbmd0aCwgZ29vZENvb3Jkcywgb3JpZW50YXRpb24pIHtcbiAgICAvLyBkZXNpZ25lZCB0byBhY2NlcHQgY29vcmRzIHRoYXQgYXJlIE5PVCBpbnZhbGlkLCBmaWx0ZXIgY29vcmRzIGFnYWluc3QgdGhlXG4gICAgLy8gYXJyYXkgX2ZpbmRJbnZhbGlkQ29vcmRzKCkgcmV0dXJucyBiZWZvcmUgcGFzc2luZyB0aGVtIGludG8gdGhpcyBmdW5jdGlvblxuXG4gICAgLy8gY2hlY2tzIGZvciBjb2xsaXNpb25zIGFsb25nIHRoZSBheGlzIGRlZmluZWQgYnkgJ29yaWVudGF0aW9uJyBmcm9tIHRoZVxuICAgIC8vIGNlbnRlciBvZiB0aGUgc2hpcC4gRG9lcyBub3QgY2hlY2sgdGhlIGNlbnRlciBvZiB0aGUgc2hpcCBpdHNlbGYuXG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl1cbiAgICBjb25zdCBjaGFyID0gZ29vZENvb3Jkcy5jaGFyQXQoMClcbiAgICBjb25zdCBudW0gPSBOdW1iZXIucGFyc2VJbnQoZ29vZENvb3Jkcy5zdWJzdHJpbmcoMSkpXG4gICAgY29uc3Qgc2hpcEFyZWEgPSBbXVxuICAgIGNvbnN0IGlzRW1wdHkgPSAoY29vcmRzKSA9PiBjb29yZHMgPT09IFwiXCJcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAyKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAyKV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtIC0gMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMildXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChib2FyZFtjaGFyICsgKG51bSAtIDEpXSwgYm9hcmRbY2hhciArIChudW0gKyAxKV0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goYm9hcmRbZ29vZENvb3Jkc10sIGJvYXJkW2NoYXIgKyAobnVtICsgMSldKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMl0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMl0gKyBudW1dXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDJdICsgbnVtXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaGlwQXJlYS5ldmVyeShpc0VtcHR5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlIC8vIG5vIGNvbGxpc2lvblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZSAvLyBjb2xsaXNpb25cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY2hlY2tQbGFjZW1lbnQoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwc1tzaGlwXS5oaXRib3hlcy5sZW5ndGhcbiAgICBjb25zdCB2YWxpZENvb3JkcyA9IF9maW5kVmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pXG4gICAgaWYgKHZhbGlkQ29vcmRzLmluY2x1ZGVzKGNvb3JkcykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9maW5kVmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBpbnZhbGlkQXJyYXkgPSBfZmluZEludmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pXG4gICAgY29uc3QgdmFsaWRNb3ZlcyA9IFtdXG5cbiAgICAvLyBhZGQgYW55IGtleXMgdGhhdCB3b3VsZCBoaXQgYW5vdGhlciBzaGlwIHRvIGludmFsaWQgYXJyYXlcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhaW52YWxpZEFycmF5LmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgX2NvbGxpc2lvbkNoZWNrKHNoaXBMZW5ndGgsIGtleSwgb3JpZW50YXRpb24pXG4gICAgICApIHtcbiAgICAgICAgaW52YWxpZEFycmF5LnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1ha2UgYW4gYXJyYXkgb3V0IG9mIGFsbCBjb29yZHMgdGhhdCBhcmUgbm90IGluIGludmFsaWRBcnJheVxuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBpZiAoIWludmFsaWRBcnJheS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHZhbGlkTW92ZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkTW92ZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wbGFjZVJhbmRvbSgpIHtcbiAgICBpZiAocmVtYWluaW5nU2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgY29uc3Qgb3JpZW50YXRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdXG4gICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildXG4gICAgY29uc3QgcmFuZG9tU2hpcCA9XG4gICAgICByZW1haW5pbmdTaGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1haW5pbmdTaGlwcy5sZW5ndGgpXVxuICAgIGNvbnN0IHZhbGlkQ29vcmRzID0gX2ZpbmRWYWxpZENvb3JkcyhcbiAgICAgIHNoaXBzW3JhbmRvbVNoaXBdLmhpdGJveGVzLmxlbmd0aCxcbiAgICAgIHJhbmRvbU9yaWVudGF0aW9uXG4gICAgKVxuICAgIGNvbnN0IHJhbmRvbVZhbGlkQ29vcmRzID1cbiAgICAgIHZhbGlkQ29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkQ29vcmRzLmxlbmd0aCldXG4gICAgcmV0dXJuIHBsYWNlU2hpcChyYW5kb21TaGlwLCByYW5kb21WYWxpZENvb3JkcywgcmFuZG9tT3JpZW50YXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbiwgcmFuZG9tID0gZmFsc2UpIHtcbiAgICAvLyByZXR1cm5zIGFycmF5IG9mIGNvb3JkcyAtIG9yIGFuIGVtcHR5IGFycmF5IGlmIGZhaWxlZCB0byBwbGFjZVxuICAgIGlmIChyYW5kb20gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBfcGxhY2VSYW5kb20oKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIFtzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uXS5zb21lKChhcmcpID0+IGFyZyA9PT0gdW5kZWZpbmVkKSB8fFxuICAgICAgIU9iamVjdC5rZXlzKHNoaXBzKS5pbmNsdWRlcyhzaGlwLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAhT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3Jkcy50b1VwcGVyQ2FzZSgpKSB8fFxuICAgICAgKG9yaWVudGF0aW9uICE9PSBcInZlcnRpY2FsXCIgJiYgb3JpZW50YXRpb24gIT09IFwiaG9yaXpvbnRhbFwiKVxuICAgICkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcEluZGV4ID0gcmVtYWluaW5nU2hpcHMuaW5kZXhPZihzaGlwKVxuICAgIGlmIChzaGlwSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gW10gLy8gcmV0dXJuIGZhbHNlIC0gc2hpcCBjYW5ub3QgYmUgcGxhY2VkIHRoZXJlXG4gICAgfSBlbHNlIGlmIChfY2hlY2tQbGFjZW1lbnQoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIHBsYWNlZFNoaXBzLnB1c2gocmVtYWluaW5nU2hpcHMuc3BsaWNlKHNoaXBJbmRleCwgMSlbMF0pXG4gICAgICBjb25zdCBzaGlwSW5kZXhlcyA9IF9maW5kU2hpcEluZGV4ZXMoXG4gICAgICAgIHNoaXBzW3NoaXBdLmhpdGJveGVzLmxlbmd0aCxcbiAgICAgICAgY29vcmRzLFxuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzW3NoaXBdLmhpdGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3NoaXBJbmRleGVzW2ldXSA9IHNoaXBzW3NoaXBdLmhpdGJveGVzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcEluZGV4ZXNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjaWV2ZUF0dGFjayhjb29yZHMpIHtcbiAgICAvLyBoaXQgMSwgbWlzcyAwLCBhbHJlYWR5IGhpdCAtMVxuICAgIGlmICh0eXBlb2YgYm9hcmRbY29vcmRzXSA9PT0gXCJvYmplY3RcIiAmJiAhYm9hcmRbY29vcmRzXS5pc0hpdCkge1xuICAgICAgYm9hcmRbY29vcmRzXS5oaXQoKVxuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKGJvYXJkW2Nvb3Jkc10gPT09IFwiXCIpIHtcbiAgICAgIGJvYXJkW2Nvb3Jkc10gPSBcIm1pc3NcIlxuICAgICAgcmV0dXJuIDBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZFtjb29yZHNdID09PSBcIm9iamVjdFwiICYmIGJvYXJkW2Nvb3Jkc10uaXNIaXQpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRzXSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBib2FyZFtrZXldID0gXCJcIlxuICAgIH1cblxuICAgIHNoaXBzLmNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KVxuICAgIHNoaXBzLmJhdHRsZXNoaXAgPSBTaGlwRmFjdG9yeSg0KVxuICAgIHNoaXBzLmNydWlzZXIgPSBTaGlwRmFjdG9yeSgzKVxuICAgIHNoaXBzLnN1Ym1hcmluZSA9IFNoaXBGYWN0b3J5KDMpXG4gICAgc2hpcHMuZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMilcblxuICAgIHJlbWFpbmluZ1NoaXBzID0gT2JqZWN0LmtleXMoc2hpcHMpXG4gICAgcGxhY2VkU2hpcHMgPSBbXVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkID0ge31cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmRba2V5XSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIG5ld0JvYXJkW2tleV0gPSBib2FyZFtrZXldXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW2tleV0gPT09IFwib2JqZWN0XCIgJiYgIWJvYXJkW2tleV0uaXNIaXQpIHtcbiAgICAgICAgICBuZXdCb2FyZFtrZXldID0gXCJcIlxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZFtrZXldID09PSBcIm9iamVjdFwiICYmIGJvYXJkW2tleV0uaXNIaXQpIHtcbiAgICAgICAgICBuZXdCb2FyZFtrZXldID0gXCJoaXRcIlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdCb2FyZFxuICAgIH0sXG4gICAgZ2V0IHJlbWFpbmluZ1NoaXBzKCkge1xuICAgICAgcmV0dXJuIFsuLi5yZW1haW5pbmdTaGlwc11cbiAgICB9LFxuICAgIGdldCBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC52YWx1ZXMoc2hpcHMpLmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoc2hpcC5oaXRib3hlcykuZXZlcnkoXG4gICAgICAgICAgICAoaGl0Ym94KSA9PiBoaXRib3guaXNIaXQgPT09IHRydWVcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgcmVzZXQsXG4gIH0pXG59XG4iLCJjb25zdCBET01Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gIGNvbnN0IHBsYXllcjFTaGlwQ29vcmRzID0gW11cbiAgY29uc3QgcGxheWVyMlNoaXBDb29yZHMgPSBbXVxuXG4gIGZ1bmN0aW9uIHJlbmRlcldpblBhZ2Uod2lubmVyKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgJHt3aW5uZXIubmFtZX0gd2lucyFgXG4gICAgY29uc29sZS5sb2coW3dpbm5lci5uYW1lLCB3aW5uZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3Vua10pXG4gIH1cblxuICAvLyBuZWVkcyBhbiBleHBlY3QgcGxheWVyIGRldGFpbD9cbiAgZnVuY3Rpb24gZmlyZUN1c3RvbUV2ZW50KG5hbWUsIGRldGFpbE9iaiwgY2FsbGJhY2tGdW5jKSB7XG4gICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBkZXRhaWw6IGRldGFpbE9iaixcbiAgICB9KVxuXG4gICAgaWYgKGNhbGxiYWNrRnVuYykge1xuICAgICAgZXZ0LmRldGFpbC5jYWxsYmFja0Z1bmMgPSBjYWxsYmFja0Z1bmNcbiAgICB9XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhc3NEZXZpY2VBbmRMb2FkUGFnZShwYWdlQ2FsbGJhY2ssIC4uLnBhZ2VBcmdzKSB7XG4gICAgLy8gcGFpbnQgc2NyZWVuXG4gICAgbGV0IGNvdW50ID0gM1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYGBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBQYXNzIFRoZSBEZXZpY2VcIlxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgY29uc3QgY291bnRkb3duRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY291bnRkb3duRWxlbS5pZCA9IFwiY291bnRkb3duXCJcbiAgICBjb3VudGRvd25FbGVtLnRleHRDb250ZW50ID0gY291bnRcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvdW50ZG93bkVsZW0pXG5cbiAgICAvLyBjb3VudGRvd24gc2NyZWVuXG4gICAgY29uc3QgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgICBwYWdlQ2FsbGJhY2soLi4ucGFnZUFyZ3MpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZG93bkVsZW0udGV4dENvbnRlbnQgPSAtLWNvdW50XG4gICAgICB9XG4gICAgfSwgMTAwMClcbiAgICAvLyBsb2FkIG5ldyBwYWdlIGF0IGVuZCBvZiBjb3VudGRvd25cbiAgfVxuXG4gIC8vIG5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gc2tpcCBsb2FkaW5nIHBhZ2VzIGJhc2VkIG9uIGlmIGN1cnJlbnRwbGF5ZXJcbiAgLy8gaXMgYSBjb21wdXRlciBvciBub3RcbiAgZnVuY3Rpb24gZGVjaWRlUGFnZVRvUmVuZGVyKGN1cnJlbnRQbGF5ZXIsIG5leHRQbGF5ZXIpIHtcbiAgICAvLyBhbHNvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gb3Igc29tZXRoaW5nIHRoYXQgbG9hZHMgdGhlIHBhZ2UgYWZ0ZXIgYVxuICAgIC8vIGxvYWRpbmcgc2NyZWVuXG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLnJlbWFpbmluZ1NoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHBhc3NEZXZpY2VBbmRMb2FkUGFnZShyZW5kZXJTaGlwUGFnZSwgY3VycmVudFBsYXllcilcbiAgICAgIC8vIHJlbmRlclNoaXBQYWdlKGN1cnJlbnRQbGF5ZXIpXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmspIHtcbiAgICAgIC8vIGRvZXNuJ3QgbmVlZCBhIHBhc3MgZGV2aWNlIHBhZ2VcbiAgICAgIHJlbmRlcldpblBhZ2UobmV4dFBsYXllcikgLy8gcHJvYmFibHkgbmVlZHMgdG8gYmUgb3Bwb3NpdGVcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWxzbyBuZWVkcyB0byB0YWtlIGN1cnJlbnQgcGxheWVyLCBzbyB0aGF0IHlvdSBjYW4gdG9nZ2xlIGEgdmlld1xuICAgICAgLy8gb2Ygd2hlcmUgeW91ciBvd24gc2hpcHMgYXJlIChvciBuZWVkcyB0byBiZSB0b2xkIGEgdmFyaWFibGUgdG8gbG9va1xuICAgICAgLy8gZm9yIHBsYWNlZCBzaGlwIGNvb3JkcylcbiAgICAgIC8vIGFsc28gbmVlZCB0byBzaG93IHBsYWNlcyB3aGVyZSB0aGUgb3RoZXIgcGxheWVyIGhhcyBoaXQgYWxyZWFkeVxuICAgICAgcGFzc0RldmljZUFuZExvYWRQYWdlKHJlbmRlckhpdFBhZ2UsIG5leHRQbGF5ZXIsIGN1cnJlbnRQbGF5ZXIpXG4gICAgICAvLyByZW5kZXJIaXRQYWdlKG5leHRQbGF5ZXIpIC8vIG5lZWRzIHRvIGJlIG9wcG9zaXRlXG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXJ0R2FtZVwiLCByZW5kZXJQbGF5ZXJQYWdlKVxuICBmdW5jdGlvbiByZW5kZXJQbGF5ZXJQYWdlKCkge1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxoMT5XZWxjb21lIHRvIEJhdHRsZVNoaXA8L2gxPlxuXG4gICAgPGZvcm0+XG4gICAgICA8bGFiZWwgZm9yPSdwbGF5ZXIxJz5QbGF5ZXIxPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD0ncGxheWVyMSc+XG5cbiAgICAgIDxsYWJlbCBmb3I9J3BsYXllcjInPlBsYXllcjI8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPSdwbGF5ZXIyJz5cblxuICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+YFxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpXG4gICAgY29uc3QgaW5wdXRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKV1cblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoaW5wdXRzLmV2ZXJ5KChpbnB1dCkgPT4gaW5wdXQudmFsdWUubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgZmlyZUN1c3RvbUV2ZW50KFxuICAgICAgICAgIFwiR2FtZS5pbml0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGxheWVyMTogaW5wdXRzWzBdLnZhbHVlLFxuICAgICAgICAgICAgcGxheWVyMjogaW5wdXRzWzFdLnZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVuZGVyU2hpcFBhZ2VcbiAgICAgICAgKVxuICAgICAgICAvKlxuICAgICAgICAvLyBpbml0R2FtZSBldmVudFxuICAgICAgICBjb25zdCBwbGF5ZXIxID0gUGxheWVyRmFjdG9yeShpbnB1dHNbMF0udmFsdWUpXG4gICAgICAgIGNvbnN0IHBsYXllcjIgPSBQbGF5ZXJGYWN0b3J5KGlucHV0c1sxXS52YWx1ZSlcbiAgICAgICAgR2FtZS5pbml0KHBsYXllcjEsIHBsYXllcjIpXG5cbiAgICAgICAgLy8gc3RhcnQgZ2FtZSBldmVudFxuICAgICAgICByZW5kZXJTaGlwUGFnZShHYW1lLmN1cnJlbnRQbGF5ZXIpXG4gICAgICAgICovXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclNoaXBQYWdlKHBsYXllcikge1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXI+XG4gICAgICA8aDE+QmF0dGxlc2hpcDwvaDE+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8c2VjdGlvbiBpZD1cInBsYXktYXJlYVwiPlxuICAgICAgPGRpdiBpZD1cImJvYXJkXCI+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkEyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cInNoaXBzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPmNhcnJpZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+YmF0dGxlc2hpcDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIj5jcnVpc2VyPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPnN1Ym1hcmluZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIj5kZXN0cm95ZXI8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yaWVudGF0aW9uLXRvZ2dsZVwiPmhvcml6b250YWw8L2J1dHRvbj5cbiAgICAgIDxoMj5CdXR0b25zIG4nIHN0dWZmPC9oMj5cbiAgICAgIDxidXR0b24gaWQ9J2ZpbmlzaC1idXR0b24nPkZpbmlzaDwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5gXG5cbiAgICBwbGFjZVNoaXBMaXN0ZW5lcnMocGxheWVyKVxuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlT3JpZW50YXRpb25UZXh0KGUpIHtcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwidmVydGljYWxcIlxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcImhvcml6b250YWxcIlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHR1cm5XaGl0ZUNlbGxzR3JheShlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkXCIpKSByZXR1cm5cbiAgICBpZiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBcIlwiKSB7XG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JheVwiXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHVybkdyYXlDZWxsc1doaXRlKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIikpIHJldHVyblxuICAgIGlmIChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwibGlnaHRncmF5XCIpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaENlbGxSZWQoZSkge1xuICAgIGxldCBjdXJyZW50Q29sb3IgPSBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICBpZiAoY3VycmVudENvbG9yID09PSBcImxpZ2h0Z3JheVwiKSBjdXJyZW50Q29sb3IgPSBcIlwiXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGNvcmFsXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjdXJyZW50Q29sb3IpLCAyNTApXG4gIH1cblxuICBmdW5jdGlvbiBoaWdobGlnaHRDb29yZHNHcmVlbihjb29yZHNUb0hpZ2hsaWdodCkge1xuICAgIGNvbnN0IGVsZW1zID0gW11cbiAgICBjb29yZHNUb0hpZ2hsaWdodC5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb29yZFtkYXRhLWtleT1cIiR7Y29vcmR9XCJdYClcbiAgICAgIGVsZW1zLnB1c2goZWxlbSlcbiAgICB9KVxuXG4gICAgZWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwTGlzdGVuZXJzKHBsYXllcikge1xuICAgIGxldCBkcmFnZ2VkXG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NoaXBzXCIpXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkXCIpXG4gICAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yaWVudGF0aW9uLXRvZ2dsZVwiKVxuICAgIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmluaXNoLWJ1dHRvblwiKVxuICAgIC8vIGNvbnN0IGFib3J0ID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgICBvcmllbnRhdGlvblRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlT3JpZW50YXRpb25UZXh0KVxuICAgIHNoaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IChkcmFnZ2VkID0gZS50YXJnZXQpKVxuXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCB0dXJuV2hpdGVDZWxsc0dyYXkpXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB0dXJuR3JheUNlbGxzV2hpdGUpXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gYm9hcmQpIHJldHVyblxuICAgICAgY29uc3QgZGF0YUtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpXG4gICAgICBjb25zdCBzaGlwTmFtZSA9IGRyYWdnZWQudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25Ub2dnbGUudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IGNvb3Jkc1RvSGlnaGxpZ2h0ID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgIHNoaXBOYW1lLFxuICAgICAgICBkYXRhS2V5LFxuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgKVxuXG4gICAgICBpZiAoY29vcmRzVG9IaWdobGlnaHQubGVuZ3RoID4gMCkge1xuICAgICAgICBoaWdobGlnaHRDb29yZHNHcmVlbihjb29yZHNUb0hpZ2hsaWdodClcbiAgICAgICAgLy8gcHVzaCB0byBlYWNoIHBsYXllcidzIHNoaXAgY29vcmRzLiBNYXggc2hpcHMgY29vcmRzID09PSA1XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGFzaENlbGxSZWQoZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5yZW1haW5pbmdTaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gc3dpdGNocGxheWVyIGV2ZW50XG4gICAgICAgIGZpcmVDdXN0b21FdmVudChcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHt9LCBkZWNpZGVQYWdlVG9SZW5kZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckhpdFBhZ2UocGxheWVyLCBjdXJyZW50UGxheWVyKSB7XG4gICAgY29uc29sZS5sb2coW3BsYXllciwgY3VycmVudFBsYXllcl0pXG4gICAgYm9keS5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlcj5cbiAgICAgIDxoMT5CYXR0bGVzaGlwPC9oMT5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxzZWN0aW9uIGlkPVwicGxheS1hcmVhXCI+XG4gICAgICA8ZGl2IGlkPVwiYm9hcmRcIj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxidXR0b24gaWQ9J2ZpbmlzaC1idXR0b24nPkZpbmlzaDwvYnV0dG9uPmBcblxuICAgIGhpZ2hsaWdodEhpdHNBbmRNaXNzZXMocGxheWVyKVxuICAgIHBsYWNlSGl0TGlzdGVuZXJzKHBsYXllcilcbiAgICAvLyB0aGVyZSBzaG91bGQgYmUgYSB0b2dnbGUgdmlldyBidXR0b25cblxuICAgIC8vIHRvIG1ha2UgdGhlIHRvZ2dsZSB2aWV3IHdvcmssIEkgaGF2ZSB0byBzYXZlIHRoZSBjb29yZHMgd2hlcmUgdGhlIHNoaXBzXG4gICAgLy8gYXJlIHBsYWNlZCBzb21ld2hlcmUgYmVmb3JlIHRoZSBoaXRwYWdlIGlzIHJlbmRlcmVkLlxuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0SGl0c0FuZE1pc3NlcyhwbGF5ZXIpIHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmRcblxuICAgIGZvciAoY29uc3QgY29vcmQgaW4gYm9hcmQpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29vcmRbZGF0YS1rZXk9JyR7Y29vcmR9J11gKVxuICAgICAgaWYgKGJvYXJkW2Nvb3JkXSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXG4gICAgICB9IGVsc2UgaWYgKGJvYXJkW2Nvb3JkXSA9PT0gXCJoaXRcIikge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlSGl0TGlzdGVuZXJzKHBsYXllcikge1xuICAgIGNvbnN0IGhpdEFib3J0ID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgbGV0IGhpdFN0YXR1c1xuXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZFwiKVxuICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKGUpID0+IHtcbiAgICAgICAgLy8gY29sb3JzIGNlbGxzIHJlZCAobWlzcykgb3IgZ3JlZW4gKGhpdCkgd2hlbiBhdHRhY2tlZFxuICAgICAgICBjb25zdCBkYXRhS2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIilcbiAgICAgICAgaWYgKGRhdGFLZXkgPT09IG51bGwpIHJldHVyblxuXG4gICAgICAgIGhpdFN0YXR1cyA9IHBsYXllci5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhkYXRhS2V5KVxuICAgICAgICBjb25zb2xlLmxvZyhoaXRTdGF0dXMpXG4gICAgICAgIGlmIChoaXRTdGF0dXMgPT09IDApIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXG4gICAgICAgICAgaGl0QWJvcnQuYWJvcnQoKVxuICAgICAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgIGhpdEFib3J0LmFib3J0KClcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbGFzaENlbGxSZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsOiBoaXRBYm9ydC5zaWduYWwgfVxuICAgIClcblxuICAgIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmluaXNoLWJ1dHRvblwiKVxuICAgIGZpbmlzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGhpdFN0YXR1cyA9PT0gMCB8fCBoaXRTdGF0dXMgPT09IDEpIHtcbiAgICAgICAgLy8gc3dpdGNocGxheWVyIGV2ZW50XG4gICAgICAgIGZpcmVDdXN0b21FdmVudChcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHt9LCBkZWNpZGVQYWdlVG9SZW5kZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBET01Db250cm9sbGVyXG4iLCJpbXBvcnQgUGxheWVyRmFjdG9yeSBmcm9tIFwiLi9QbGF5ZXJGYWN0b3J5XCJcblxuY29uc3QgR2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGF5ZXIxXG4gIGxldCBwbGF5ZXIyXG4gIGxldCBjdXJyZW50UGxheWVyXG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgY29uc3Qgc3RhcnRHYW1lID0gbmV3IEN1c3RvbUV2ZW50KFwic3RhcnRHYW1lXCIsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBkZXRhaWw6IHt9LFxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHN0YXJ0R2FtZSlcbiAgICAvLyBET01Db250cm9sbGVyLnJlbmRlclBsYXllcnBhZ2VcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJHYW1lLmluaXRcIiwgaW5pdClcbiAgZnVuY3Rpb24gaW5pdChlKSB7XG4gICAgcGxheWVyMSA9IFBsYXllckZhY3RvcnkoZS5kZXRhaWwucGxheWVyMSlcbiAgICBwbGF5ZXIyID0gUGxheWVyRmFjdG9yeShlLmRldGFpbC5wbGF5ZXIyKVxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgaWYgKGUuZGV0YWlsLmNhbGxiYWNrRnVuYykgZS5kZXRhaWwuY2FsbGJhY2tGdW5jKGN1cnJlbnRQbGF5ZXIpXG4gICAgLy8gRE9NQ29udHJvbGxlci5yZW5kZXJTaGlwUGFnZVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHN3aXRjaFBsYXllcilcbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKGUpIHtcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjIpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgfVxuXG4gICAgaWYgKGUuZGV0YWlsLmNhbGxiYWNrRnVuYykge1xuICAgICAgbGV0IG5leHRQbGF5ZXJcblxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgICAgbmV4dFBsYXllciA9IHBsYXllcjJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMikge1xuICAgICAgICBuZXh0UGxheWVyID0gcGxheWVyMVxuICAgICAgfVxuXG4gICAgICBlLmRldGFpbC5jYWxsYmFja0Z1bmMoY3VycmVudFBsYXllciwgbmV4dFBsYXllcilcbiAgICB9XG5cbiAgICAvLyBET01Db250cm9sbGVyLnJlbmRlclNoaXBQYWdlLCBET01Db250cm9sbGVyLnJlbmRlckhpdFBhZ2VcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQsXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVxuIiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9Cb2FyZEZhY3RvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXJGYWN0b3J5KG5hbWUsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xuICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGlzQ29tcHV0ZXIgIT09IFwiYm9vbGVhblwiKSByZXR1cm5cblxuICBjb25zdCBnYW1lYm9hcmQgPSBCb2FyZEZhY3RvcnkoKVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfSxcbiAgICBnZXQgaXNDb21wdXRlcigpIHtcbiAgICAgIHJldHVybiBpc0NvbXB1dGVyXG4gICAgfSxcbiAgICBnZXQgZ2FtZWJvYXJkKCkge1xuICAgICAgcmV0dXJuIGdhbWVib2FyZFxuICAgIH0sXG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwRmFjdG9yeShsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA8IDIgfHwgbGVuZ3RoID4gNSkgcmV0dXJuXG5cbiAgY29uc3QgaGl0Ym94ZXMgPSBfY3JlYXRlSGl0Ym94ZXMoKVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVIaXRib3hlcygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgaGl0OiAoKSA9PiBoaXQoaSksXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSBoaXRib3hlcy5sZW5ndGggfHwgaW5kZXggPCAwKSByZXR1cm5cbiAgICBoaXRib3hlc1tpbmRleF0uaXNIaXQgPSB0cnVlXG4gICAgcmV0dXJuIGhpdGJveGVzLm1hcCgoaGl0Ym94KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5oaXRib3ggfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IGhpdGJveGVzKCkge1xuICAgICAgcmV0dXJuIGhpdGJveGVzLm1hcCgoaGl0Ym94KSA9PiAoe1xuICAgICAgICBnZXQgaXNIaXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGhpdGJveC5pc0hpdFxuICAgICAgICB9LFxuICAgICAgICBoaXQ6IGhpdGJveC5oaXQsXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICBpZiAoaGl0Ym94ZXMuZXZlcnkoKGhpdGJveCkgPT4gaGl0Ym94LmlzSGl0ID09PSB0cnVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgfSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vbW9kdWxlcy9HYW1lLmpzXCJcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvRE9NQ29udHJvbGxlclwiXG5cbkdhbWUuc3RhcnQoKVxuLypcbkdhbWUucGxheWVyMSA9IFBsYXllckZhY3RvcnkoXCJwbGF5ZXIxXCIpXG5HYW1lLnBsYXllcjIgPSBQbGF5ZXJGYWN0b3J5KFwicGxheWVyMlwiKVxuR2FtZS5zdGFydEdhbWUoKVxuY29uc29sZS5sb2coR2FtZS5jdXJyZW50UGxheWVyKVxuKi9cbi8qXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3RhcnRnYW1lXCIsIERPTUNvbnRyb2xsZXIucmVuZGVyUGxheWVyUGFnZSlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwicGxheUFnYWluXCIsXG4gIERPTUNvbnRyb2xsZXIucmVuZGVyU2hpcFBhZ2UoR2FtZS5wbGF5ZXIxKVxuKVxuLy8gR2FtZS5zdGFydEdhbWUoKVxuKi9cbiJdLCJuYW1lcyI6WyJTaGlwRmFjdG9yeSIsIkJvYXJkRmFjdG9yeSIsInNoaXBzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwicmVtYWluaW5nU2hpcHMiLCJPYmplY3QiLCJrZXlzIiwicGxhY2VkU2hpcHMiLCJib2FyZCIsIkExIiwiQTIiLCJBMyIsIkE0IiwiQTUiLCJBNiIsIkE3IiwiQTgiLCJBOSIsIkExMCIsIkIxIiwiQjIiLCJCMyIsIkI0IiwiQjUiLCJCNiIsIkI3IiwiQjgiLCJCOSIsIkIxMCIsIkMxIiwiQzIiLCJDMyIsIkM0IiwiQzUiLCJDNiIsIkM3IiwiQzgiLCJDOSIsIkMxMCIsIkQxIiwiRDIiLCJEMyIsIkQ0IiwiRDUiLCJENiIsIkQ3IiwiRDgiLCJEOSIsIkQxMCIsIkUxIiwiRTIiLCJFMyIsIkU0IiwiRTUiLCJFNiIsIkU3IiwiRTgiLCJFOSIsIkUxMCIsIkYxIiwiRjIiLCJGMyIsIkY0IiwiRjUiLCJGNiIsIkY3IiwiRjgiLCJGOSIsIkYxMCIsIkcxIiwiRzIiLCJHMyIsIkc0IiwiRzUiLCJHNiIsIkc3IiwiRzgiLCJHOSIsIkcxMCIsIkgxIiwiSDIiLCJIMyIsIkg0IiwiSDUiLCJINiIsIkg3IiwiSDgiLCJIOSIsIkgxMCIsIkkxIiwiSTIiLCJJMyIsIkk0IiwiSTUiLCJJNiIsIkk3IiwiSTgiLCJJOSIsIkkxMCIsIkoxIiwiSjIiLCJKMyIsIko0IiwiSjUiLCJKNiIsIko3IiwiSjgiLCJKOSIsIkoxMCIsIl9maW5kSW52YWxpZENvb3JkcyIsInNoaXBMZW5ndGgiLCJvcmllbnRhdGlvbiIsImJhZEluZGV4ZXMiLCJleGNsdXNpb25zIiwicHVzaCIsImkiLCJsZW5ndGgiLCJleGNsdXNpb24iLCJrZXkiLCJlbmRzV2l0aCIsInN0YXJ0c1dpdGgiLCJpbmNsdWRlcyIsIl9maW5kU2hpcEluZGV4ZXMiLCJnb29kQ29vcmRzIiwibGV0dGVycyIsImNoYXIiLCJjaGFyQXQiLCJudW0iLCJOdW1iZXIiLCJwYXJzZUludCIsInN1YnN0cmluZyIsInNoaXBBcmVhIiwiaW5kZXhPZiIsIl9jb2xsaXNpb25DaGVjayIsImlzRW1wdHkiLCJjb29yZHMiLCJldmVyeSIsIl9jaGVja1BsYWNlbWVudCIsInNoaXAiLCJoaXRib3hlcyIsInZhbGlkQ29vcmRzIiwiX2ZpbmRWYWxpZENvb3JkcyIsImludmFsaWRBcnJheSIsInZhbGlkTW92ZXMiLCJfcGxhY2VSYW5kb20iLCJvcmllbnRhdGlvbnMiLCJyYW5kb21PcmllbnRhdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVNoaXAiLCJyYW5kb21WYWxpZENvb3JkcyIsInBsYWNlU2hpcCIsInNvbWUiLCJhcmciLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwic2hpcEluZGV4Iiwic3BsaWNlIiwic2hpcEluZGV4ZXMiLCJyZWNpZXZlQXR0YWNrIiwiaXNIaXQiLCJoaXQiLCJyZXNldCIsImZyZWV6ZSIsIm5ld0JvYXJkIiwiYWxsU2hpcHNTdW5rIiwidmFsdWVzIiwiaGl0Ym94IiwiRE9NQ29udHJvbGxlciIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXIxU2hpcENvb3JkcyIsInBsYXllcjJTaGlwQ29vcmRzIiwicmVuZGVyV2luUGFnZSIsIndpbm5lciIsImlubmVySFRNTCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZ2FtZWJvYXJkIiwiZmlyZUN1c3RvbUV2ZW50IiwiZGV0YWlsT2JqIiwiY2FsbGJhY2tGdW5jIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsInBhc3NEZXZpY2VBbmRMb2FkUGFnZSIsInBhZ2VDYWxsYmFjayIsInBhZ2VBcmdzIiwiY291bnQiLCJoZWFkZXIiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNvdW50ZG93bkVsZW0iLCJpZCIsImludGVydmFsSUQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkZWNpZGVQYWdlVG9SZW5kZXIiLCJjdXJyZW50UGxheWVyIiwibmV4dFBsYXllciIsInJlbmRlclNoaXBQYWdlIiwicmVuZGVySGl0UGFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJQbGF5ZXJQYWdlIiwiZm9ybSIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInZhbHVlIiwicGxheWVyMSIsInBsYXllcjIiLCJwbGF5ZXIiLCJwbGFjZVNoaXBMaXN0ZW5lcnMiLCJjaGFuZ2VPcmllbnRhdGlvblRleHQiLCJ0YXJnZXQiLCJ0dXJuV2hpdGVDZWxsc0dyYXkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInR1cm5HcmF5Q2VsbHNXaGl0ZSIsImZsYXNoQ2VsbFJlZCIsImN1cnJlbnRDb2xvciIsInNldFRpbWVvdXQiLCJoaWdobGlnaHRDb29yZHNHcmVlbiIsImNvb3Jkc1RvSGlnaGxpZ2h0IiwiZWxlbXMiLCJmb3JFYWNoIiwiY29vcmQiLCJlbGVtIiwiZHJhZ2dlZCIsIm9yaWVudGF0aW9uVG9nZ2xlIiwiZmluaXNoQnV0dG9uIiwiZGF0YUtleSIsImdldEF0dHJpYnV0ZSIsInNoaXBOYW1lIiwiaGlnaGxpZ2h0SGl0c0FuZE1pc3NlcyIsInBsYWNlSGl0TGlzdGVuZXJzIiwiY2VsbCIsImhpdEFib3J0IiwiQWJvcnRDb250cm9sbGVyIiwiaGl0U3RhdHVzIiwiYWJvcnQiLCJzaWduYWwiLCJQbGF5ZXJGYWN0b3J5IiwiR2FtZSIsInN0YXJ0Iiwic3RhcnRHYW1lIiwiaW5pdCIsInN3aXRjaFBsYXllciIsImlzQ29tcHV0ZXIiLCJfY3JlYXRlSGl0Ym94ZXMiLCJhcnJheSIsImluZGV4IiwibWFwIiwiaXNTdW5rIl0sInNvdXJjZVJvb3QiOiIifQ==