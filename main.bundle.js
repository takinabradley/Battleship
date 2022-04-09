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

  function _attackRandomCoord() {
    var validCoords = [];

    for (var prop in board) {
      if (board[prop] === "" || _typeof(board[prop]) === "object" && board[prop].isHit === false) {
        validCoords.push(prop);
      }
    }

    var randomValidCoord = validCoords[Math.floor(Math.random() * validCoords.length)];
    return recieveAttack(randomValidCoord);
  }

  function recieveAttack(coords) {
    if (coords === "random") {
      return _attackRandomCoord();
    } // hit 1, miss 0, already hit -1


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
    } else {
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

  function waitOneSecond(callbackFunc) {
    setTimeout(function () {
      return callbackFunc();
    }, 1000);
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
  }

  function placeComputerShips(computerPlayer) {
    for (var i = 0; i < 5; i++) {
      var computerCoord = computerPlayer.gameboard.placeShip(null, null, null, true);
      player2ShipCoords.push(computerCoord);
    }
  } // this is really gross.


  function decidePageToRender(currentPlayer, nextPlayer) {
    if (currentPlayer.gameboard.remainingShips.length > 0) {
      if (currentPlayer.isComputer) {
        placeComputerShips(currentPlayer);
        fireCustomEvent("Game.switchPlayer", {}, decidePageToRender);
      } else {
        if (nextPlayer.isComputer) {
          renderShipPage(currentPlayer);
        } else {
          passDeviceAndLoadPage(renderShipPage, currentPlayer);
        }
      }
    } else if (currentPlayer.gameboard.allShipsSunk) {
      renderWinPage(nextPlayer);
    } else {
      if (currentPlayer.isComputer) {
        nextPlayer.gameboard.recieveAttack("random");
        fireCustomEvent("Game.switchPlayer", {}, decidePageToRender);
      } else {
        if (nextPlayer.isComputer) {
          renderHitPage(currentPlayer, nextPlayer);
        } else {
          passDeviceAndLoadPage(renderHitPage, currentPlayer, nextPlayer);
        }
      }
    }
  }

  document.addEventListener("startGame", renderPlayerPage);

  function renderPlayerPage() {
    body.innerHTML = "\n    <header>\n      <h1>Welcome to BattleShip</h1>\n    </header>\n\n    <form>\n      <label for='player1' hidden>Player1</label>\n      <input id='player1' type='text' placeholder='Player 1'>\n\n      <label for='player2' hidden>Player2</label>\n      <input id='player2' type='text' placeholder='Player 2'>\n\n      <button>Submit</button>\n      <button type='button'>Play Against Computer</button>\n    </form>\n    \n    ";
    var form = document.querySelector("form");

    var inputs = _toConsumableArray(document.querySelectorAll("input"));

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (inputs.every(function (input) {
        return input.value.length > 0;
      })) {
        fireCustomEvent("Game.init", {
          player1: [inputs[0].value, 1],
          // player2: [inputs[1].value, 2, true] //true can be passed to make a computer player
          player2: [inputs[1].value, 2]
        }, renderShipPage);
      }
    });
    form.addEventListener("click", function (e) {
      console.log(e.target);
      if (e.target.textContent !== "Play Against Computer") return;
      fireCustomEvent("Game.init", {
        player1: ["You", 1, false],
        // player2: [inputs[1].value, 2, true] //true can be passed to make a computer player
        player2: ["Computer", 2, true]
      }, renderShipPage);
    });
  }

  function renderShipPage(player) {
    body.innerHTML = "\n    <header>\n      <h1>Battleship</h1>\n    </header>\n\n    <section id=\"play-area\">\n      <div id=\"board\">\n        <div data-key=\"A1\" class=\"coord\"></div>\n        <div data-key=\"A2\" class=\"coord\"></div>\n        <div data-key=\"A3\" class=\"coord\"></div>\n        <div data-key=\"A4\" class=\"coord\"></div>\n        <div data-key=\"A5\" class=\"coord\"></div>\n        <div data-key=\"A6\" class=\"coord\"></div>\n        <div data-key=\"A7\" class=\"coord\"></div>\n        <div data-key=\"A8\" class=\"coord\"></div>\n        <div data-key=\"A9\" class=\"coord\"></div>\n        <div data-key=\"A10\" class=\"coord\"></div>\n\n        <div data-key=\"B1\" class=\"coord\"></div>\n        <div data-key=\"B2\" class=\"coord\"></div>\n        <div data-key=\"B3\" class=\"coord\"></div>\n        <div data-key=\"B4\" class=\"coord\"></div>\n        <div data-key=\"B5\" class=\"coord\"></div>\n        <div data-key=\"B6\" class=\"coord\"></div>\n        <div data-key=\"B7\" class=\"coord\"></div>\n        <div data-key=\"B8\" class=\"coord\"></div>\n        <div data-key=\"B9\" class=\"coord\"></div>\n        <div data-key=\"B10\" class=\"coord\"></div>\n\n        <div data-key=\"C1\" class=\"coord\"></div>\n        <div data-key=\"C2\" class=\"coord\"></div>\n        <div data-key=\"C3\" class=\"coord\"></div>\n        <div data-key=\"C4\" class=\"coord\"></div>\n        <div data-key=\"C5\" class=\"coord\"></div>\n        <div data-key=\"C6\" class=\"coord\"></div>\n        <div data-key=\"C7\" class=\"coord\"></div>\n        <div data-key=\"C8\" class=\"coord\"></div>\n        <div data-key=\"C9\" class=\"coord\"></div>\n        <div data-key=\"C10\" class=\"coord\"></div>\n\n        <div data-key=\"D1\" class=\"coord\"></div>\n        <div data-key=\"D2\" class=\"coord\"></div>\n        <div data-key=\"D3\" class=\"coord\"></div>\n        <div data-key=\"D4\" class=\"coord\"></div>\n        <div data-key=\"D5\" class=\"coord\"></div>\n        <div data-key=\"D6\" class=\"coord\"></div>\n        <div data-key=\"D7\" class=\"coord\"></div>\n        <div data-key=\"D8\" class=\"coord\"></div>\n        <div data-key=\"D9\" class=\"coord\"></div>\n        <div data-key=\"D10\" class=\"coord\"></div>\n\n        <div data-key=\"E1\" class=\"coord\"></div>\n        <div data-key=\"E2\" class=\"coord\"></div>\n        <div data-key=\"E3\" class=\"coord\"></div>\n        <div data-key=\"E4\" class=\"coord\"></div>\n        <div data-key=\"E5\" class=\"coord\"></div>\n        <div data-key=\"E6\" class=\"coord\"></div>\n        <div data-key=\"E7\" class=\"coord\"></div>\n        <div data-key=\"E8\" class=\"coord\"></div>\n        <div data-key=\"E9\" class=\"coord\"></div>\n        <div data-key=\"E10\" class=\"coord\"></div>\n\n        <div data-key=\"F1\" class=\"coord\"></div>\n        <div data-key=\"F2\" class=\"coord\"></div>\n        <div data-key=\"F3\" class=\"coord\"></div>\n        <div data-key=\"F4\" class=\"coord\"></div>\n        <div data-key=\"F5\" class=\"coord\"></div>\n        <div data-key=\"F6\" class=\"coord\"></div>\n        <div data-key=\"F7\" class=\"coord\"></div>\n        <div data-key=\"F8\" class=\"coord\"></div>\n        <div data-key=\"F9\" class=\"coord\"></div>\n        <div data-key=\"F10\" class=\"coord\"></div>\n\n        <div data-key=\"G1\" class=\"coord\"></div>\n        <div data-key=\"G2\" class=\"coord\"></div>\n        <div data-key=\"G3\" class=\"coord\"></div>\n        <div data-key=\"G4\" class=\"coord\"></div>\n        <div data-key=\"G5\" class=\"coord\"></div>\n        <div data-key=\"G6\" class=\"coord\"></div>\n        <div data-key=\"G7\" class=\"coord\"></div>\n        <div data-key=\"G8\" class=\"coord\"></div>\n        <div data-key=\"G9\" class=\"coord\"></div>\n        <div data-key=\"G10\" class=\"coord\"></div>\n\n        <div data-key=\"H1\" class=\"coord\"></div>\n        <div data-key=\"H2\" class=\"coord\"></div>\n        <div data-key=\"H3\" class=\"coord\"></div>\n        <div data-key=\"H4\" class=\"coord\"></div>\n        <div data-key=\"H5\" class=\"coord\"></div>\n        <div data-key=\"H6\" class=\"coord\"></div>\n        <div data-key=\"H7\" class=\"coord\"></div>\n        <div data-key=\"H8\" class=\"coord\"></div>\n        <div data-key=\"H9\" class=\"coord\"></div>\n        <div data-key=\"H10\" class=\"coord\"></div>\n\n        <div data-key=\"I1\" class=\"coord\"></div>\n        <div data-key=\"I2\" class=\"coord\"></div>\n        <div data-key=\"I3\" class=\"coord\"></div>\n        <div data-key=\"I4\" class=\"coord\"></div>\n        <div data-key=\"I5\" class=\"coord\"></div>\n        <div data-key=\"I6\" class=\"coord\"></div>\n        <div data-key=\"I7\" class=\"coord\"></div>\n        <div data-key=\"I8\" class=\"coord\"></div>\n        <div data-key=\"I9\" class=\"coord\"></div>\n        <div data-key=\"I10\" class=\"coord\"></div>\n\n        <div data-key=\"J1\" class=\"coord\"></div>\n        <div data-key=\"J2\" class=\"coord\"></div>\n        <div data-key=\"J3\" class=\"coord\"></div>\n        <div data-key=\"J4\" class=\"coord\"></div>\n        <div data-key=\"J5\" class=\"coord\"></div>\n        <div data-key=\"J6\" class=\"coord\"></div>\n        <div data-key=\"J7\" class=\"coord\"></div>\n        <div data-key=\"J8\" class=\"coord\"></div>\n        <div data-key=\"J9\" class=\"coord\"></div>\n        <div data-key=\"J10\" class=\"coord\"></div>\n      </div>\n\n      <div id=\"ships\">\n        <div class=\"ship\" draggable=\"true\" data-ship='carrier'>carrier</div>\n        <div class=\"ship\" draggable=\"true\" data-ship='battleship'>battleship</div>\n        <div class=\"ship\" draggable=\"true\" data-ship='cruiser'>cruiser</div>\n        <div class=\"ship\" draggable=\"true\" data-ship='submarine'>submarine</div>\n        <div class=\"ship\" draggable=\"true\" data-ship='destroyer'>destroyer</div>\n      </div>\n    </section>\n\n    <section class=\"buttons\">\n      <button class=\"orientation-toggle\">horizontal</button>\n      <h2>Buttons n' stuff</h2>\n      <button id='finish-button'>Finish</button>\n    </section>";
    placeShipListeners(player);
  }

  function changeOrientationText(e) {
    var ships = document.querySelectorAll(".ship");

    if (e.target.textContent === "horizontal") {
      e.target.textContent = "vertical";
      ships.forEach(function (ship) {
        return ship.classList.toggle("vertical");
      });
    } else if (e.target.textContent === "vertical") {
      e.target.textContent = "horizontal";
      ships.forEach(function (ship) {
        return ship.classList.toggle("vertical");
      });
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

        highlightShipsGray(player);
        dragged.remove(); // push to each player's ship coords. Max ships coords === 5
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
    body.innerHTML = "\n    <header>\n      <h1>Battleship</h1>\n    </header>\n\n    <section id=\"play-area\">\n      <div id=\"board\">\n        <div data-key=\"A1\" class=\"coord\"></div>\n        <div data-key=\"A2\" class=\"coord\"></div>\n        <div data-key=\"A3\" class=\"coord\"></div>\n        <div data-key=\"A4\" class=\"coord\"></div>\n        <div data-key=\"A5\" class=\"coord\"></div>\n        <div data-key=\"A6\" class=\"coord\"></div>\n        <div data-key=\"A7\" class=\"coord\"></div>\n        <div data-key=\"A8\" class=\"coord\"></div>\n        <div data-key=\"A9\" class=\"coord\"></div>\n        <div data-key=\"A10\" class=\"coord\"></div>\n\n        <div data-key=\"B1\" class=\"coord\"></div>\n        <div data-key=\"B2\" class=\"coord\"></div>\n        <div data-key=\"B3\" class=\"coord\"></div>\n        <div data-key=\"B4\" class=\"coord\"></div>\n        <div data-key=\"B5\" class=\"coord\"></div>\n        <div data-key=\"B6\" class=\"coord\"></div>\n        <div data-key=\"B7\" class=\"coord\"></div>\n        <div data-key=\"B8\" class=\"coord\"></div>\n        <div data-key=\"B9\" class=\"coord\"></div>\n        <div data-key=\"B10\" class=\"coord\"></div>\n\n        <div data-key=\"C1\" class=\"coord\"></div>\n        <div data-key=\"C2\" class=\"coord\"></div>\n        <div data-key=\"C3\" class=\"coord\"></div>\n        <div data-key=\"C4\" class=\"coord\"></div>\n        <div data-key=\"C5\" class=\"coord\"></div>\n        <div data-key=\"C6\" class=\"coord\"></div>\n        <div data-key=\"C7\" class=\"coord\"></div>\n        <div data-key=\"C8\" class=\"coord\"></div>\n        <div data-key=\"C9\" class=\"coord\"></div>\n        <div data-key=\"C10\" class=\"coord\"></div>\n\n        <div data-key=\"D1\" class=\"coord\"></div>\n        <div data-key=\"D2\" class=\"coord\"></div>\n        <div data-key=\"D3\" class=\"coord\"></div>\n        <div data-key=\"D4\" class=\"coord\"></div>\n        <div data-key=\"D5\" class=\"coord\"></div>\n        <div data-key=\"D6\" class=\"coord\"></div>\n        <div data-key=\"D7\" class=\"coord\"></div>\n        <div data-key=\"D8\" class=\"coord\"></div>\n        <div data-key=\"D9\" class=\"coord\"></div>\n        <div data-key=\"D10\" class=\"coord\"></div>\n\n        <div data-key=\"E1\" class=\"coord\"></div>\n        <div data-key=\"E2\" class=\"coord\"></div>\n        <div data-key=\"E3\" class=\"coord\"></div>\n        <div data-key=\"E4\" class=\"coord\"></div>\n        <div data-key=\"E5\" class=\"coord\"></div>\n        <div data-key=\"E6\" class=\"coord\"></div>\n        <div data-key=\"E7\" class=\"coord\"></div>\n        <div data-key=\"E8\" class=\"coord\"></div>\n        <div data-key=\"E9\" class=\"coord\"></div>\n        <div data-key=\"E10\" class=\"coord\"></div>\n\n        <div data-key=\"F1\" class=\"coord\"></div>\n        <div data-key=\"F2\" class=\"coord\"></div>\n        <div data-key=\"F3\" class=\"coord\"></div>\n        <div data-key=\"F4\" class=\"coord\"></div>\n        <div data-key=\"F5\" class=\"coord\"></div>\n        <div data-key=\"F6\" class=\"coord\"></div>\n        <div data-key=\"F7\" class=\"coord\"></div>\n        <div data-key=\"F8\" class=\"coord\"></div>\n        <div data-key=\"F9\" class=\"coord\"></div>\n        <div data-key=\"F10\" class=\"coord\"></div>\n\n        <div data-key=\"G1\" class=\"coord\"></div>\n        <div data-key=\"G2\" class=\"coord\"></div>\n        <div data-key=\"G3\" class=\"coord\"></div>\n        <div data-key=\"G4\" class=\"coord\"></div>\n        <div data-key=\"G5\" class=\"coord\"></div>\n        <div data-key=\"G6\" class=\"coord\"></div>\n        <div data-key=\"G7\" class=\"coord\"></div>\n        <div data-key=\"G8\" class=\"coord\"></div>\n        <div data-key=\"G9\" class=\"coord\"></div>\n        <div data-key=\"G10\" class=\"coord\"></div>\n\n        <div data-key=\"H1\" class=\"coord\"></div>\n        <div data-key=\"H2\" class=\"coord\"></div>\n        <div data-key=\"H3\" class=\"coord\"></div>\n        <div data-key=\"H4\" class=\"coord\"></div>\n        <div data-key=\"H5\" class=\"coord\"></div>\n        <div data-key=\"H6\" class=\"coord\"></div>\n        <div data-key=\"H7\" class=\"coord\"></div>\n        <div data-key=\"H8\" class=\"coord\"></div>\n        <div data-key=\"H9\" class=\"coord\"></div>\n        <div data-key=\"H10\" class=\"coord\"></div>\n\n        <div data-key=\"I1\" class=\"coord\"></div>\n        <div data-key=\"I2\" class=\"coord\"></div>\n        <div data-key=\"I3\" class=\"coord\"></div>\n        <div data-key=\"I4\" class=\"coord\"></div>\n        <div data-key=\"I5\" class=\"coord\"></div>\n        <div data-key=\"I6\" class=\"coord\"></div>\n        <div data-key=\"I7\" class=\"coord\"></div>\n        <div data-key=\"I8\" class=\"coord\"></div>\n        <div data-key=\"I9\" class=\"coord\"></div>\n        <div data-key=\"I10\" class=\"coord\"></div>\n\n        <div data-key=\"J1\" class=\"coord\"></div>\n        <div data-key=\"J2\" class=\"coord\"></div>\n        <div data-key=\"J3\" class=\"coord\"></div>\n        <div data-key=\"J4\" class=\"coord\"></div>\n        <div data-key=\"J5\" class=\"coord\"></div>\n        <div data-key=\"J6\" class=\"coord\"></div>\n        <div data-key=\"J7\" class=\"coord\"></div>\n        <div data-key=\"J8\" class=\"coord\"></div>\n        <div data-key=\"J9\" class=\"coord\"></div>\n        <div data-key=\"J10\" class=\"coord\"></div>\n      </div>\n    </section>\n\n    <button id='finish-button'>Finish</button>";
    var board = document.querySelector("#board");
    var hitBoard = board.cloneNode(true);
    hitBoard.id = "hit-board";
    document.querySelector("#play-area").appendChild(hitBoard);
    highlightShipsGray(currentPlayer);
    highlightHitsAndMisses(currentPlayer, board);
    highlightHitsAndMisses(nextPlayer, hitBoard);
    placeHitListeners(nextPlayer, hitBoard);
  }

  function highlightHitsAndMisses(player, domboard) {
    var board = player.gameboard.board;

    for (var coord in board) {
      var cell = domboard.querySelector(".coord[data-key='".concat(coord, "']"));

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

  function placeHitListeners(nextPlayer, hitBoard) {
    var finishButton = document.querySelector("#finish-button");
    var hitAbort = new AbortController();
    var hitStatus; // allows attacking and colors cells red (miss) or green (hit)

    hitBoard.addEventListener("click", function (e) {
      var dataKey = e.target.getAttribute("data-key");
      if (dataKey === null) return;
      hitStatus = nextPlayer.gameboard.recieveAttack(dataKey);
      console.log(hitStatus);

      if (hitStatus === 0) {
        e.target.style.backgroundColor = "red";
        hitAbort.abort();
        waitOneSecond(function () {
          return fireCustomEvent("Game.switchPlayer", {}, decidePageToRender);
        });
      } else if (hitStatus === 1) {
        hitAbort.abort();
        e.target.style.backgroundColor = "green";
        waitOneSecond(function () {
          return fireCustomEvent("Game.switchPlayer", {}, decidePageToRender);
        });
      } else {
        console.log("flash");
        flashCellRed(e);
      }
    }, {
      signal: hitAbort.signal
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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
    player1 = _PlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0, _toConsumableArray(e.detail.player1));
    player2 = _PlayerFactory__WEBPACK_IMPORTED_MODULE_0__["default"].apply(void 0, _toConsumableArray(e.detail.player2));
    console.log(player1);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtCQUFZQSxNQUFaO0FBQ0QsS0FGTSxDQUFQO0FBR0Q7O0FBRUQsU0FBT3ZLLE1BQU0sQ0FBQ21LLE1BQVAsQ0FBYztBQUNuQixRQUFJN0IsUUFBSixHQUFlO0FBQ2IsYUFBT0EsUUFBUSxDQUFDd0ksR0FBVCxDQUFhLFVBQUN2RyxNQUFEO0FBQUEsZUFBYTtBQUMvQixjQUFJVCxLQUFKLEdBQVk7QUFDVixtQkFBT1MsTUFBTSxDQUFDVCxLQUFkO0FBQ0QsV0FIOEI7O0FBSS9CRyxVQUFBQSxHQUFHLEVBQUVNLE1BQU0sQ0FBQ047QUFKbUIsU0FBYjtBQUFBLE9BQWIsQ0FBUDtBQU1ELEtBUmtCOztBQVNuQixRQUFJOEcsTUFBSixHQUFhO0FBQ1gsVUFBSXpJLFFBQVEsQ0FBQ0gsS0FBVCxDQUFlLFVBQUNvQyxNQUFEO0FBQUEsZUFBWUEsTUFBTSxDQUFDVCxLQUFQLEtBQWlCLElBQTdCO0FBQUEsT0FBZixDQUFKLEVBQXVEO0FBQ3JELGVBQU8sSUFBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBZmtCLEdBQWQsQ0FBUDtBQWlCRDs7Ozs7O1VDekNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBd0csOERBQUEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9Cb2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RPTUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwRmFjdG9yeSBmcm9tIFwiLi9TaGlwRmFjdG9yeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkRmFjdG9yeSgpIHtcbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgY2FycmllcjogU2hpcEZhY3RvcnkoNSksXG4gICAgYmF0dGxlc2hpcDogU2hpcEZhY3RvcnkoNCksXG4gICAgY3J1aXNlcjogU2hpcEZhY3RvcnkoMyksXG4gICAgc3VibWFyaW5lOiBTaGlwRmFjdG9yeSgzKSxcbiAgICBkZXN0cm95ZXI6IFNoaXBGYWN0b3J5KDIpLFxuICB9XG5cbiAgLy8gYm9hcmRzIHN0YXJ0IG91dCB3aXRob3V0IHNoaXBzIHBsYWNlZCwgdGhlbiBhcmUgbW92ZWQgdG8gcGxhY2VkU2hpcHNcbiAgbGV0IHJlbWFpbmluZ1NoaXBzID0gT2JqZWN0LmtleXMoc2hpcHMpXG4gIGxldCBwbGFjZWRTaGlwcyA9IFtdXG5cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIGNvbnN0IGJvYXJkID0ge1xuICAgIEExOiAnJywgQTI6ICcnLCBBMzogJycsIEE0OiAnJywgQTU6ICcnLCBBNjogJycsIEE3OiAnJywgQTg6ICcnLCBBOTogJycsIEExMDogJycsIFxuICAgIEIxOiAnJywgQjI6ICcnLCBCMzogJycsIEI0OiAnJywgQjU6ICcnLCBCNjogJycsIEI3OiAnJywgQjg6ICcnLCBCOTogJycsIEIxMDogJycsIFxuICAgIEMxOiAnJywgQzI6ICcnLCBDMzogJycsIEM0OiAnJywgQzU6ICcnLCBDNjogJycsIEM3OiAnJywgQzg6ICcnLCBDOTogJycsIEMxMDogJycsIFxuICAgIEQxOiAnJywgRDI6ICcnLCBEMzogJycsIEQ0OiAnJywgRDU6ICcnLCBENjogJycsIEQ3OiAnJywgRDg6ICcnLCBEOTogJycsIEQxMDogJycsIFxuICAgIEUxOiAnJywgRTI6ICcnLCBFMzogJycsIEU0OiAnJywgRTU6ICcnLCBFNjogJycsIEU3OiAnJywgRTg6ICcnLCBFOTogJycsIEUxMDogJycsIFxuICAgIEYxOiAnJywgRjI6ICcnLCBGMzogJycsIEY0OiAnJywgRjU6ICcnLCBGNjogJycsIEY3OiAnJywgRjg6ICcnLCBGOTogJycsIEYxMDogJycsIFxuICAgIEcxOiAnJywgRzI6ICcnLCBHMzogJycsIEc0OiAnJywgRzU6ICcnLCBHNjogJycsIEc3OiAnJywgRzg6ICcnLCBHOTogJycsIEcxMDogJycsIFxuICAgIEgxOiAnJywgSDI6ICcnLCBIMzogJycsIEg0OiAnJywgSDU6ICcnLCBINjogJycsIEg3OiAnJywgSDg6ICcnLCBIOTogJycsIEgxMDogJycsIFxuICAgIEkxOiAnJywgSTI6ICcnLCBJMzogJycsIEk0OiAnJywgSTU6ICcnLCBJNjogJycsIEk3OiAnJywgSTg6ICcnLCBJOTogJycsIEkxMDogJycsIFxuICAgIEoxOiAnJywgSjI6ICcnLCBKMzogJycsIEo0OiAnJywgSjU6ICcnLCBKNjogJycsIEo3OiAnJywgSjg6ICcnLCBKOTogJycsIEoxMDogJycsXG4gIH1cblxuICBmdW5jdGlvbiBfZmluZEludmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICAvLyBTaGlwcyBhcmUgcGxhY2VkIGZyb20gdGhlIG1lZGlhbiBpbmRleCwgb3IgaW4gdGhlIGNhc2Ugb2YgZXZlblxuICAgIC8vIHNoaXBMZW5ndGhzIGJ5IHRoZSBtaWRkbGUtbGVmdCBpbmRleC5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uOlxuICAgIC8vIDEpIG1ha2VzIGFuIGFycmF5IG9mIGFsbCB0aGUgaW52YWxpZCBwbGFjZW1lbnRzIGZvciB0aGF0IGNlbnRlciBpbmRleFxuICAgIC8vIHRoYXQgd291bGQgY2F1c2UgdGhlIHNoaXAgdG8gaGFuZyBvZmYgdGhlIGJvYXJkLlxuICAgIC8vIDIpIHRoZW4gYWRkcyB0byB0aGUgYXJyYXkgb2YgaW52YWxpZCBwbGFjZW1lbnRzIGFsbCBib2FyZCBpbmRleGVzIHRoYXRcbiAgICAvLyBhcmUgYWxyZWFkeSBvY2N1cGllZFxuICAgIGNvbnN0IGJhZEluZGV4ZXMgPSBbXVxuICAgIGNvbnN0IGV4Y2x1c2lvbnMgPSBbXVxuXG4gICAgLy8gZmluZHMgcGxhY2VtZW50cyB0aGF0IHdvdWxkIG1ha2UgYSBob3Jpem9udGFsIHNoaXAgaGFuZyBvZmYgdGhlIGJvYXJkXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIGV4Y2x1c2lvbnMucHVzaCgxLCAyLCA5LCAxMClcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSBleGNsdXNpb25zLnB1c2goMSwgOSwgMTApXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykgZXhjbHVzaW9ucy5wdXNoKDEsIDEwKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIGV4Y2x1c2lvbnMucHVzaCgxMClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGNsdXNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGV4Y2x1c2lvbiA9IGV4Y2x1c2lvbnNbaV1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgICAgIGlmIChrZXkuZW5kc1dpdGgoZXhjbHVzaW9uKSkge1xuICAgICAgICAgICAgYmFkSW5kZXhlcy5wdXNoKGtleSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmaW5kcyBwbGFjZW1lbnRzIHRoYXQgd291bGQgbWFrZSBhIHZlcmljYWwgc2hpcCBoYW5nIG9mZiB0aGUgYm9hcmRcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIGV4Y2x1c2lvbnMucHVzaChcIkFcIiwgXCJCXCIsIFwiSVwiLCBcIkpcIilcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSBleGNsdXNpb25zLnB1c2goXCJBXCIsIFwiSVwiLCBcIkpcIilcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSBleGNsdXNpb25zLnB1c2goXCJBXCIsIFwiSlwiKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIGV4Y2x1c2lvbnMucHVzaChcIkpcIilcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGNsdXNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGV4Y2x1c2lvbiA9IGV4Y2x1c2lvbnNbaV1cblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChleGNsdXNpb24pKSB7XG4gICAgICAgICAgICBiYWRJbmRleGVzLnB1c2goa2V5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZHMgb2NjdXBpZWQgYm9hcmQgaW5kZXhlcyB0aGF0IGFyZSBub3QgYWxyZWFkeSBpbiB0aGUgbGlzdFxuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBpZiAoYm9hcmRba2V5XSAhPT0gXCJcIiAmJiBiYWRJbmRleGVzLmluY2x1ZGVzKGtleSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJhZEluZGV4ZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhZEluZGV4ZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIF9maW5kU2hpcEluZGV4ZXMoc2hpcExlbmd0aCwgZ29vZENvb3Jkcywgb3JpZW50YXRpb24pIHtcbiAgICAvLyBkZXNpZ25lZCB0byBhY2NlcHQgY29vcmRzIHRoYXQgYXJlIE5PVCBpbnZhbGlkLCBmaWx0ZXIgY29vcmRzIGFnYWluc3QgdGhlXG4gICAgLy8gYXJyYXkgX2ZpbmRJbnZhbGlkQ29vcmRzKCkgcmV0dXJucyBiZWZvcmUgcGFzc2luZyB0aGVtIGludG8gdGhpcyBmdW5jdGlvblxuICAgIGNvbnN0IGxldHRlcnMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdXG4gICAgY29uc3QgY2hhciA9IGdvb2RDb29yZHMuY2hhckF0KDApXG4gICAgY29uc3QgbnVtID0gTnVtYmVyLnBhcnNlSW50KGdvb2RDb29yZHMuc3Vic3RyaW5nKDEpKVxuICAgIGNvbnN0IHNoaXBBcmVhID0gW11cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgY2hhciArIChudW0gLSAxKSxcbiAgICAgICAgICBjaGFyICsgKG51bSAtIDIpLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgY2hhciArIChudW0gKyAxKSxcbiAgICAgICAgICBjaGFyICsgKG51bSArIDIpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBjaGFyICsgKG51bSAtIDEpLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgY2hhciArIChudW0gKyAxKSxcbiAgICAgICAgICBjaGFyICsgKG51bSArIDIpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChjaGFyICsgKG51bSAtIDEpLCBnb29kQ29vcmRzLCBjaGFyICsgKG51bSArIDEpKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGdvb2RDb29yZHMsIGNoYXIgKyAobnVtICsgMSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDJdICsgbnVtLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bSxcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDJdICsgbnVtXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bSxcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDJdICsgbnVtXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtLFxuICAgICAgICAgIGdvb2RDb29yZHMsXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goZ29vZENvb3JkcywgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2hpcEFyZWFcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jb2xsaXNpb25DaGVjayhzaGlwTGVuZ3RoLCBnb29kQ29vcmRzLCBvcmllbnRhdGlvbikge1xuICAgIC8vIGRlc2lnbmVkIHRvIGFjY2VwdCBjb29yZHMgdGhhdCBhcmUgTk9UIGludmFsaWQsIGZpbHRlciBjb29yZHMgYWdhaW5zdCB0aGVcbiAgICAvLyBhcnJheSBfZmluZEludmFsaWRDb29yZHMoKSByZXR1cm5zIGJlZm9yZSBwYXNzaW5nIHRoZW0gaW50byB0aGlzIGZ1bmN0aW9uXG5cbiAgICAvLyBjaGVja3MgZm9yIGNvbGxpc2lvbnMgYWxvbmcgdGhlIGF4aXMgZGVmaW5lZCBieSAnb3JpZW50YXRpb24nIGZyb20gdGhlXG4gICAgLy8gY2VudGVyIG9mIHRoZSBzaGlwLiBEb2VzIG5vdCBjaGVjayB0aGUgY2VudGVyIG9mIHRoZSBzaGlwIGl0c2VsZi5cbiAgICBjb25zdCBsZXR0ZXJzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXVxuICAgIGNvbnN0IGNoYXIgPSBnb29kQ29vcmRzLmNoYXJBdCgwKVxuICAgIGNvbnN0IG51bSA9IE51bWJlci5wYXJzZUludChnb29kQ29vcmRzLnN1YnN0cmluZygxKSlcbiAgICBjb25zdCBzaGlwQXJlYSA9IFtdXG4gICAgY29uc3QgaXNFbXB0eSA9IChjb29yZHMpID0+IGNvb3JkcyA9PT0gXCJcIlxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSAtIDEpXSxcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSAtIDIpXSxcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSArIDEpXSxcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSArIDIpXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAyKV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGJvYXJkW2NoYXIgKyAobnVtIC0gMSldLCBib2FyZFtjaGFyICsgKG51bSArIDEpXSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChib2FyZFtnb29kQ29vcmRzXSwgYm9hcmRbY2hhciArIChudW0gKyAxKV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAyXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMl0gKyBudW1dXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNoaXBBcmVhLmV2ZXJ5KGlzRW1wdHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2UgLy8gbm8gY29sbGlzaW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlIC8vIGNvbGxpc2lvblxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jaGVja1BsYWNlbWVudChzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBzW3NoaXBdLmhpdGJveGVzLmxlbmd0aFxuICAgIGNvbnN0IHZhbGlkQ29vcmRzID0gX2ZpbmRWYWxpZENvb3JkcyhzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbilcbiAgICBpZiAodmFsaWRDb29yZHMuaW5jbHVkZXMoY29vcmRzKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2ZpbmRWYWxpZENvb3JkcyhzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGludmFsaWRBcnJheSA9IF9maW5kSW52YWxpZENvb3JkcyhzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbilcbiAgICBjb25zdCB2YWxpZE1vdmVzID0gW11cblxuICAgIC8vIGFkZCBhbnkga2V5cyB0aGF0IHdvdWxkIGhpdCBhbm90aGVyIHNoaXAgdG8gaW52YWxpZCBhcnJheVxuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFpbnZhbGlkQXJyYXkuaW5jbHVkZXMoa2V5KSAmJlxuICAgICAgICBfY29sbGlzaW9uQ2hlY2soc2hpcExlbmd0aCwga2V5LCBvcmllbnRhdGlvbilcbiAgICAgICkge1xuICAgICAgICBpbnZhbGlkQXJyYXkucHVzaChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFrZSBhbiBhcnJheSBvdXQgb2YgYWxsIGNvb3JkcyB0aGF0IGFyZSBub3QgaW4gaW52YWxpZEFycmF5XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgIGlmICghaW52YWxpZEFycmF5LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgdmFsaWRNb3Zlcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRNb3Zlc1xuICB9XG5cbiAgZnVuY3Rpb24gX3BsYWNlUmFuZG9tKCkge1xuICAgIGlmIChyZW1haW5pbmdTaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl1cbiAgICBjb25zdCByYW5kb21PcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV1cbiAgICBjb25zdCByYW5kb21TaGlwID1cbiAgICAgIHJlbWFpbmluZ1NoaXBzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlbWFpbmluZ1NoaXBzLmxlbmd0aCldXG4gICAgY29uc3QgdmFsaWRDb29yZHMgPSBfZmluZFZhbGlkQ29vcmRzKFxuICAgICAgc2hpcHNbcmFuZG9tU2hpcF0uaGl0Ym94ZXMubGVuZ3RoLFxuICAgICAgcmFuZG9tT3JpZW50YXRpb25cbiAgICApXG4gICAgY29uc3QgcmFuZG9tVmFsaWRDb29yZHMgPVxuICAgICAgdmFsaWRDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRDb29yZHMubGVuZ3RoKV1cbiAgICByZXR1cm4gcGxhY2VTaGlwKHJhbmRvbVNoaXAsIHJhbmRvbVZhbGlkQ29vcmRzLCByYW5kb21PcmllbnRhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uLCByYW5kb20gPSBmYWxzZSkge1xuICAgIC8vIHJldHVybnMgYXJyYXkgb2YgY29vcmRzIC0gb3IgYW4gZW1wdHkgYXJyYXkgaWYgZmFpbGVkIHRvIHBsYWNlXG4gICAgaWYgKHJhbmRvbSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIF9wbGFjZVJhbmRvbSgpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgW3NoaXAsIGNvb3Jkcywgb3JpZW50YXRpb25dLnNvbWUoKGFyZykgPT4gYXJnID09PSB1bmRlZmluZWQpIHx8XG4gICAgICAhT2JqZWN0LmtleXMoc2hpcHMpLmluY2x1ZGVzKHNoaXAudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICFPYmplY3Qua2V5cyhib2FyZCkuaW5jbHVkZXMoY29vcmRzLnRvVXBwZXJDYXNlKCkpIHx8XG4gICAgICAob3JpZW50YXRpb24gIT09IFwidmVydGljYWxcIiAmJiBvcmllbnRhdGlvbiAhPT0gXCJob3Jpem9udGFsXCIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBzaGlwSW5kZXggPSByZW1haW5pbmdTaGlwcy5pbmRleE9mKHNoaXApXG4gICAgaWYgKHNoaXBJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBbXSAvLyByZXR1cm4gZmFsc2UgLSBzaGlwIGNhbm5vdCBiZSBwbGFjZWQgdGhlcmVcbiAgICB9IGVsc2UgaWYgKF9jaGVja1BsYWNlbWVudChzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uKSkge1xuICAgICAgcGxhY2VkU2hpcHMucHVzaChyZW1haW5pbmdTaGlwcy5zcGxpY2Uoc2hpcEluZGV4LCAxKVswXSlcbiAgICAgIGNvbnN0IHNoaXBJbmRleGVzID0gX2ZpbmRTaGlwSW5kZXhlcyhcbiAgICAgICAgc2hpcHNbc2hpcF0uaGl0Ym94ZXMubGVuZ3RoLFxuICAgICAgICBjb29yZHMsXG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICApXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHNbc2hpcF0uaGl0Ym94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbc2hpcEluZGV4ZXNbaV1dID0gc2hpcHNbc2hpcF0uaGl0Ym94ZXNbaV1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGlwSW5kZXhlc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfYXR0YWNrUmFuZG9tQ29vcmQoKSB7XG4gICAgY29uc3QgdmFsaWRDb29yZHMgPSBbXVxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBib2FyZCkge1xuICAgICAgaWYgKFxuICAgICAgICBib2FyZFtwcm9wXSA9PT0gXCJcIiB8fFxuICAgICAgICAodHlwZW9mIGJvYXJkW3Byb3BdID09PSBcIm9iamVjdFwiICYmIGJvYXJkW3Byb3BdLmlzSGl0ID09PSBmYWxzZSlcbiAgICAgICkge1xuICAgICAgICB2YWxpZENvb3Jkcy5wdXNoKHByb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tVmFsaWRDb29yZCA9XG4gICAgICB2YWxpZENvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZENvb3Jkcy5sZW5ndGgpXVxuICAgIHJldHVybiByZWNpZXZlQXR0YWNrKHJhbmRvbVZhbGlkQ29vcmQpXG4gIH1cblxuICBmdW5jdGlvbiByZWNpZXZlQXR0YWNrKGNvb3Jkcykge1xuICAgIGlmIChjb29yZHMgPT09IFwicmFuZG9tXCIpIHtcbiAgICAgIHJldHVybiBfYXR0YWNrUmFuZG9tQ29vcmQoKVxuICAgIH1cbiAgICAvLyBoaXQgMSwgbWlzcyAwLCBhbHJlYWR5IGhpdCAtMVxuICAgIGlmICh0eXBlb2YgYm9hcmRbY29vcmRzXSA9PT0gXCJvYmplY3RcIiAmJiAhYm9hcmRbY29vcmRzXS5pc0hpdCkge1xuICAgICAgYm9hcmRbY29vcmRzXS5oaXQoKVxuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKGJvYXJkW2Nvb3Jkc10gPT09IFwiXCIpIHtcbiAgICAgIGJvYXJkW2Nvb3Jkc10gPSBcIm1pc3NcIlxuICAgICAgcmV0dXJuIDBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZFtjb29yZHNdID09PSBcIm9iamVjdFwiICYmIGJvYXJkW2Nvb3Jkc10uaXNIaXQpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRzXSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgYm9hcmRba2V5XSA9IFwiXCJcbiAgICB9XG5cbiAgICBzaGlwcy5jYXJyaWVyID0gU2hpcEZhY3RvcnkoNSlcbiAgICBzaGlwcy5iYXR0bGVzaGlwID0gU2hpcEZhY3RvcnkoNClcbiAgICBzaGlwcy5jcnVpc2VyID0gU2hpcEZhY3RvcnkoMylcbiAgICBzaGlwcy5zdWJtYXJpbmUgPSBTaGlwRmFjdG9yeSgzKVxuICAgIHNoaXBzLmRlc3Ryb3llciA9IFNoaXBGYWN0b3J5KDIpXG5cbiAgICByZW1haW5pbmdTaGlwcyA9IE9iamVjdC5rZXlzKHNoaXBzKVxuICAgIHBsYWNlZFNoaXBzID0gW11cbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICBjb25zdCBuZXdCb2FyZCA9IHt9XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgICBpZiAodHlwZW9mIGJvYXJkW2tleV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBuZXdCb2FyZFtrZXldID0gYm9hcmRba2V5XVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZFtrZXldID09PSBcIm9iamVjdFwiICYmICFib2FyZFtrZXldLmlzSGl0KSB7XG4gICAgICAgICAgbmV3Qm9hcmRba2V5XSA9IFwiXCJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRba2V5XSA9PT0gXCJvYmplY3RcIiAmJiBib2FyZFtrZXldLmlzSGl0KSB7XG4gICAgICAgICAgbmV3Qm9hcmRba2V5XSA9IFwiaGl0XCJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3Qm9hcmRcbiAgICB9LFxuICAgIGdldCByZW1haW5pbmdTaGlwcygpIHtcbiAgICAgIHJldHVybiBbLi4ucmVtYWluaW5nU2hpcHNdXG4gICAgfSxcbiAgICBnZXQgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgaWYgKFxuICAgICAgICBPYmplY3QudmFsdWVzKHNoaXBzKS5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHNoaXAuaGl0Ym94ZXMpLmV2ZXJ5KFxuICAgICAgICAgICAgKGhpdGJveCkgPT4gaGl0Ym94LmlzSGl0ID09PSB0cnVlXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIHJlc2V0LFxuICB9KVxufVxuIiwiY29uc3QgRE9NQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxuICBjb25zdCBwbGF5ZXIxU2hpcENvb3JkcyA9IFtdXG4gIGNvbnN0IHBsYXllcjJTaGlwQ29vcmRzID0gW11cblxuICBmdW5jdGlvbiByZW5kZXJXaW5QYWdlKHdpbm5lcikge1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYCR7d2lubmVyLm5hbWV9IHdpbnMhYFxuICAgIGNvbnNvbGUubG9nKFt3aW5uZXIubmFtZSwgd2lubmVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmtdKVxuICB9XG5cbiAgLy8gbmVlZHMgYW4gZXhwZWN0IHBsYXllciBkZXRhaWw/XG4gIGZ1bmN0aW9uIGZpcmVDdXN0b21FdmVudChuYW1lLCBkZXRhaWxPYmosIGNhbGxiYWNrRnVuYykge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgZGV0YWlsOiBkZXRhaWxPYmosXG4gICAgfSlcblxuICAgIGlmIChjYWxsYmFja0Z1bmMpIHtcbiAgICAgIGV2dC5kZXRhaWwuY2FsbGJhY2tGdW5jID0gY2FsbGJhY2tGdW5jXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gIH1cblxuICBmdW5jdGlvbiB3YWl0T25lU2Vjb25kKGNhbGxiYWNrRnVuYykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2tGdW5jKCksIDEwMDApXG4gIH1cblxuICBmdW5jdGlvbiBwYXNzRGV2aWNlQW5kTG9hZFBhZ2UocGFnZUNhbGxiYWNrLCAuLi5wYWdlQXJncykge1xuICAgIC8vIHBhaW50IHNjcmVlblxuICAgIGxldCBjb3VudCA9IDNcbiAgICBib2R5LmlubmVySFRNTCA9IGBgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJQbGVhc2UgUGFzcyBUaGUgRGV2aWNlXCJcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcilcblxuICAgIGNvbnN0IGNvdW50ZG93bkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvdW50ZG93bkVsZW0uaWQgPSBcImNvdW50ZG93blwiXG4gICAgY291bnRkb3duRWxlbS50ZXh0Q29udGVudCA9IGNvdW50XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb3VudGRvd25FbGVtKVxuXG4gICAgLy8gY291bnRkb3duIHNjcmVlblxuICAgIGNvbnN0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY291bnQgPT09IDEpIHtcbiAgICAgICAgcGFnZUNhbGxiYWNrKC4uLnBhZ2VBcmdzKVxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGRvd25FbGVtLnRleHRDb250ZW50ID0gLS1jb3VudFxuICAgICAgfVxuICAgIH0sIDEwMDApXG4gICAgLy8gbG9hZCBuZXcgcGFnZSBhdCBlbmQgb2YgY291bnRkb3duXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXJQbGF5ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3QgY29tcHV0ZXJDb29yZCA9IGNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICAgIHBsYXllcjJTaGlwQ29vcmRzLnB1c2goY29tcHV0ZXJDb29yZClcbiAgICB9XG4gIH1cblxuICAvLyB0aGlzIGlzIHJlYWxseSBncm9zcy5cbiAgZnVuY3Rpb24gZGVjaWRlUGFnZVRvUmVuZGVyKGN1cnJlbnRQbGF5ZXIsIG5leHRQbGF5ZXIpIHtcbiAgICBpZiAoY3VycmVudFBsYXllci5nYW1lYm9hcmQucmVtYWluaW5nU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuaXNDb21wdXRlcikge1xuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoY3VycmVudFBsYXllcilcbiAgICAgICAgZmlyZUN1c3RvbUV2ZW50KFwiR2FtZS5zd2l0Y2hQbGF5ZXJcIiwge30sIGRlY2lkZVBhZ2VUb1JlbmRlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0UGxheWVyLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgICByZW5kZXJTaGlwUGFnZShjdXJyZW50UGxheWVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhc3NEZXZpY2VBbmRMb2FkUGFnZShyZW5kZXJTaGlwUGFnZSwgY3VycmVudFBsYXllcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKSB7XG4gICAgICByZW5kZXJXaW5QYWdlKG5leHRQbGF5ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50UGxheWVyLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgbmV4dFBsYXllci5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhcInJhbmRvbVwiKVxuICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXCJHYW1lLnN3aXRjaFBsYXllclwiLCB7fSwgZGVjaWRlUGFnZVRvUmVuZGVyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5leHRQbGF5ZXIuaXNDb21wdXRlcikge1xuICAgICAgICAgIHJlbmRlckhpdFBhZ2UoY3VycmVudFBsYXllciwgbmV4dFBsYXllcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXNzRGV2aWNlQW5kTG9hZFBhZ2UocmVuZGVySGl0UGFnZSwgY3VycmVudFBsYXllciwgbmV4dFBsYXllcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdGFydEdhbWVcIiwgcmVuZGVyUGxheWVyUGFnZSlcbiAgZnVuY3Rpb24gcmVuZGVyUGxheWVyUGFnZSgpIHtcbiAgICBib2R5LmlubmVySFRNTCA9IGBcbiAgICA8aGVhZGVyPlxuICAgICAgPGgxPldlbGNvbWUgdG8gQmF0dGxlU2hpcDwvaDE+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8Zm9ybT5cbiAgICAgIDxsYWJlbCBmb3I9J3BsYXllcjEnIGhpZGRlbj5QbGF5ZXIxPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD0ncGxheWVyMScgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1BsYXllciAxJz5cblxuICAgICAgPGxhYmVsIGZvcj0ncGxheWVyMicgaGlkZGVuPlBsYXllcjI8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPSdwbGF5ZXIyJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nUGxheWVyIDInPlxuXG4gICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPlBsYXkgQWdhaW5zdCBDb21wdXRlcjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICBcbiAgICBgXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBjb25zdCBpbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpXVxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChpbnB1dHMuZXZlcnkoKGlucHV0KSA9PiBpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSkge1xuICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXG4gICAgICAgICAgXCJHYW1lLmluaXRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXIxOiBbaW5wdXRzWzBdLnZhbHVlLCAxXSxcbiAgICAgICAgICAgIC8vIHBsYXllcjI6IFtpbnB1dHNbMV0udmFsdWUsIDIsIHRydWVdIC8vdHJ1ZSBjYW4gYmUgcGFzc2VkIHRvIG1ha2UgYSBjb21wdXRlciBwbGF5ZXJcbiAgICAgICAgICAgIHBsYXllcjI6IFtpbnB1dHNbMV0udmFsdWUsIDJdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVuZGVyU2hpcFBhZ2VcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgIT09IFwiUGxheSBBZ2FpbnN0IENvbXB1dGVyXCIpIHJldHVyblxuICAgICAgZmlyZUN1c3RvbUV2ZW50KFxuICAgICAgICBcIkdhbWUuaW5pdFwiLFxuICAgICAgICB7XG4gICAgICAgICAgcGxheWVyMTogW1wiWW91XCIsIDEsIGZhbHNlXSxcbiAgICAgICAgICAvLyBwbGF5ZXIyOiBbaW5wdXRzWzFdLnZhbHVlLCAyLCB0cnVlXSAvL3RydWUgY2FuIGJlIHBhc3NlZCB0byBtYWtlIGEgY29tcHV0ZXIgcGxheWVyXG4gICAgICAgICAgcGxheWVyMjogW1wiQ29tcHV0ZXJcIiwgMiwgdHJ1ZV0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlclNoaXBQYWdlXG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclNoaXBQYWdlKHBsYXllcikge1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXI+XG4gICAgICA8aDE+QmF0dGxlc2hpcDwvaDE+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8c2VjdGlvbiBpZD1cInBsYXktYXJlYVwiPlxuICAgICAgPGRpdiBpZD1cImJvYXJkXCI+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkEyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cInNoaXBzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIGRhdGEtc2hpcD0nY2Fycmllcic+Y2FycmllcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLXNoaXA9J2JhdHRsZXNoaXAnPmJhdHRsZXNoaXA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1zaGlwPSdjcnVpc2VyJz5jcnVpc2VyPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIGRhdGEtc2hpcD0nc3VibWFyaW5lJz5zdWJtYXJpbmU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1zaGlwPSdkZXN0cm95ZXInPmRlc3Ryb3llcjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwib3JpZW50YXRpb24tdG9nZ2xlXCI+aG9yaXpvbnRhbDwvYnV0dG9uPlxuICAgICAgPGgyPkJ1dHRvbnMgbicgc3R1ZmY8L2gyPlxuICAgICAgPGJ1dHRvbiBpZD0nZmluaXNoLWJ1dHRvbic+RmluaXNoPC9idXR0b24+XG4gICAgPC9zZWN0aW9uPmBcblxuICAgIHBsYWNlU2hpcExpc3RlbmVycyhwbGF5ZXIpXG4gIH1cblxuICBmdW5jdGlvbiBjaGFuZ2VPcmllbnRhdGlvblRleHQoZSkge1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpXG5cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwidmVydGljYWxcIlxuICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5jbGFzc0xpc3QudG9nZ2xlKFwidmVydGljYWxcIikpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiaG9yaXpvbnRhbFwiXG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0dXJuV2hpdGVDZWxsc0dyYXkoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZFwiKSkgcmV0dXJuXG4gICAgaWYgKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gXCJcIikge1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyYXlcIlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHR1cm5HcmF5Q2VsbHNXaGl0ZShlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkXCIpKSByZXR1cm5cbiAgICBpZiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBcImxpZ2h0Z3JheVwiKSB7XG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmxhc2hDZWxsUmVkKGUpIHtcbiAgICBsZXQgY3VycmVudENvbG9yID0gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yXG4gICAgaWYgKGN1cnJlbnRDb2xvciA9PT0gXCJsaWdodGdyYXlcIikgY3VycmVudENvbG9yID0gXCJcIlxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRjb3JhbFwiXG4gICAgc2V0VGltZW91dCgoKSA9PiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY3VycmVudENvbG9yKSwgMjUwKVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwTGlzdGVuZXJzKHBsYXllcikge1xuICAgIGxldCBkcmFnZ2VkXG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NoaXBzXCIpXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkXCIpXG4gICAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yaWVudGF0aW9uLXRvZ2dsZVwiKVxuICAgIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmluaXNoLWJ1dHRvblwiKVxuICAgIC8vIGNvbnN0IGFib3J0ID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgICBvcmllbnRhdGlvblRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlT3JpZW50YXRpb25UZXh0KVxuICAgIHNoaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IChkcmFnZ2VkID0gZS50YXJnZXQpKVxuXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCB0dXJuV2hpdGVDZWxsc0dyYXkpXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB0dXJuR3JheUNlbGxzV2hpdGUpXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gYm9hcmQpIHJldHVyblxuICAgICAgY29uc3QgZGF0YUtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpXG4gICAgICBjb25zdCBzaGlwTmFtZSA9IGRyYWdnZWQudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25Ub2dnbGUudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IGNvb3Jkc1RvSGlnaGxpZ2h0ID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgIHNoaXBOYW1lLFxuICAgICAgICBkYXRhS2V5LFxuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgKVxuXG4gICAgICBpZiAoY29vcmRzVG9IaWdobGlnaHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAocGxheWVyLnBsYXllck51bSA9PT0gMSkge1xuICAgICAgICAgIHBsYXllcjFTaGlwQ29vcmRzLnB1c2goY29vcmRzVG9IaWdobGlnaHQpXG4gICAgICAgICAgY29uc29sZS5sb2cocGxheWVyMVNoaXBDb29yZHMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyMlNoaXBDb29yZHMucHVzaChjb29yZHNUb0hpZ2hsaWdodClcbiAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIyU2hpcENvb3JkcylcbiAgICAgICAgfVxuXG4gICAgICAgIGhpZ2hsaWdodFNoaXBzR3JheShwbGF5ZXIpXG4gICAgICAgIGRyYWdnZWQucmVtb3ZlKClcbiAgICAgICAgLy8gcHVzaCB0byBlYWNoIHBsYXllcidzIHNoaXAgY29vcmRzLiBNYXggc2hpcHMgY29vcmRzID09PSA1XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGFzaENlbGxSZWQoZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5yZW1haW5pbmdTaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gc3dpdGNocGxheWVyIGV2ZW50XG4gICAgICAgIGZpcmVDdXN0b21FdmVudChcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHt9LCBkZWNpZGVQYWdlVG9SZW5kZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckhpdFBhZ2UoY3VycmVudFBsYXllciwgbmV4dFBsYXllcikge1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXI+XG4gICAgICA8aDE+QmF0dGxlc2hpcDwvaDE+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8c2VjdGlvbiBpZD1cInBsYXktYXJlYVwiPlxuICAgICAgPGRpdiBpZD1cImJvYXJkXCI+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkEyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8YnV0dG9uIGlkPSdmaW5pc2gtYnV0dG9uJz5GaW5pc2g8L2J1dHRvbj5gXG5cbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIilcbiAgICBjb25zdCBoaXRCb2FyZCA9IGJvYXJkLmNsb25lTm9kZSh0cnVlKVxuICAgIGhpdEJvYXJkLmlkID0gXCJoaXQtYm9hcmRcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheS1hcmVhXCIpLmFwcGVuZENoaWxkKGhpdEJvYXJkKVxuXG4gICAgaGlnaGxpZ2h0U2hpcHNHcmF5KGN1cnJlbnRQbGF5ZXIpXG4gICAgaGlnaGxpZ2h0SGl0c0FuZE1pc3NlcyhjdXJyZW50UGxheWVyLCBib2FyZClcbiAgICBoaWdobGlnaHRIaXRzQW5kTWlzc2VzKG5leHRQbGF5ZXIsIGhpdEJvYXJkKVxuICAgIHBsYWNlSGl0TGlzdGVuZXJzKG5leHRQbGF5ZXIsIGhpdEJvYXJkKVxuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0SGl0c0FuZE1pc3NlcyhwbGF5ZXIsIGRvbWJvYXJkKSB7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkXG5cbiAgICBmb3IgKGNvbnN0IGNvb3JkIGluIGJvYXJkKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9tYm9hcmQucXVlcnlTZWxlY3RvcihgLmNvb3JkW2RhdGEta2V5PScke2Nvb3JkfSddYClcbiAgICAgIGlmIChib2FyZFtjb29yZF0gPT09IFwibWlzc1wiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIlxuICAgICAgfSBlbHNlIGlmIChib2FyZFtjb29yZF0gPT09IFwiaGl0XCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWdobGlnaHRTaGlwc0dyYXkocGxheWVyKSB7XG4gICAgaWYgKHBsYXllci5wbGF5ZXJOdW0gPT09IDEpIHtcbiAgICAgIHBsYXllcjFTaGlwQ29vcmRzLmZvckVhY2goKHNoaXBDb29yZHMpID0+IHtcbiAgICAgICAgc2hpcENvb3Jkcy5mb3JFYWNoKChoaXRib3hDb29yZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jb29yZFtkYXRhLWtleT0nJHtoaXRib3hDb29yZH0nXWBcbiAgICAgICAgICApXG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIlxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyMlNoaXBDb29yZHMuZm9yRWFjaCgoc2hpcENvb3JkcykgPT4ge1xuICAgICAgICBzaGlwQ29vcmRzLmZvckVhY2goKGhpdGJveENvb3JkKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNvb3JkW2RhdGEta2V5PScke2hpdGJveENvb3JkfSddYFxuICAgICAgICAgIClcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlSGl0TGlzdGVuZXJzKG5leHRQbGF5ZXIsIGhpdEJvYXJkKSB7XG4gICAgY29uc3QgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW5pc2gtYnV0dG9uXCIpXG4gICAgY29uc3QgaGl0QWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICBsZXQgaGl0U3RhdHVzXG5cbiAgICAvLyBhbGxvd3MgYXR0YWNraW5nIGFuZCBjb2xvcnMgY2VsbHMgcmVkIChtaXNzKSBvciBncmVlbiAoaGl0KVxuXG4gICAgaGl0Qm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFLZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKVxuICAgICAgICBpZiAoZGF0YUtleSA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgICAgaGl0U3RhdHVzID0gbmV4dFBsYXllci5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhkYXRhS2V5KVxuICAgICAgICBjb25zb2xlLmxvZyhoaXRTdGF0dXMpXG4gICAgICAgIGlmIChoaXRTdGF0dXMgPT09IDApIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXG4gICAgICAgICAgaGl0QWJvcnQuYWJvcnQoKVxuICAgICAgICAgIHdhaXRPbmVTZWNvbmQoKCkgPT5cbiAgICAgICAgICAgIGZpcmVDdXN0b21FdmVudChcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHt9LCBkZWNpZGVQYWdlVG9SZW5kZXIpXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgIGhpdEFib3J0LmFib3J0KClcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICB3YWl0T25lU2Vjb25kKCgpID0+XG4gICAgICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXCJHYW1lLnN3aXRjaFBsYXllclwiLCB7fSwgZGVjaWRlUGFnZVRvUmVuZGVyKVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZsYXNoXCIpXG4gICAgICAgICAgZmxhc2hDZWxsUmVkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbDogaGl0QWJvcnQuc2lnbmFsIH1cbiAgICApXG5cbiAgICBmaW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChoaXRTdGF0dXMgPT09IDAgfHwgaGl0U3RhdHVzID09PSAxKSB7XG4gICAgICAgIC8vIHN3aXRjaHBsYXllciBldmVudFxuICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXCJHYW1lLnN3aXRjaFBsYXllclwiLCB7fSwgZGVjaWRlUGFnZVRvUmVuZGVyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlclxuIiwiaW1wb3J0IFBsYXllckZhY3RvcnkgZnJvbSBcIi4vUGxheWVyRmFjdG9yeVwiXG5cbmNvbnN0IEdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcGxheWVyMVxuICBsZXQgcGxheWVyMlxuICBsZXQgY3VycmVudFBsYXllclxuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IG5ldyBDdXN0b21FdmVudChcInN0YXJ0R2FtZVwiLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgZGV0YWlsOiB7fSxcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChzdGFydEdhbWUpXG4gICAgLy8gRE9NQ29udHJvbGxlci5yZW5kZXJQbGF5ZXJwYWdlXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiR2FtZS5pbml0XCIsIGluaXQpXG4gIGZ1bmN0aW9uIGluaXQoZSkge1xuICAgIHBsYXllcjEgPSBQbGF5ZXJGYWN0b3J5KC4uLmUuZGV0YWlsLnBsYXllcjEpXG4gICAgcGxheWVyMiA9IFBsYXllckZhY3RvcnkoLi4uZS5kZXRhaWwucGxheWVyMilcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIxKVxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgaWYgKGUuZGV0YWlsLmNhbGxiYWNrRnVuYykgZS5kZXRhaWwuY2FsbGJhY2tGdW5jKGN1cnJlbnRQbGF5ZXIpXG4gICAgLy8gRE9NQ29udHJvbGxlci5yZW5kZXJTaGlwUGFnZVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHN3aXRjaFBsYXllcilcbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKGUpIHtcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjIpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgfVxuXG4gICAgaWYgKGUuZGV0YWlsLmNhbGxiYWNrRnVuYykge1xuICAgICAgbGV0IG5leHRQbGF5ZXJcblxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgICAgbmV4dFBsYXllciA9IHBsYXllcjJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMikge1xuICAgICAgICBuZXh0UGxheWVyID0gcGxheWVyMVxuICAgICAgfVxuXG4gICAgICBlLmRldGFpbC5jYWxsYmFja0Z1bmMoY3VycmVudFBsYXllciwgbmV4dFBsYXllcilcbiAgICB9XG5cbiAgICAvLyBET01Db250cm9sbGVyLnJlbmRlclNoaXBQYWdlLCBET01Db250cm9sbGVyLnJlbmRlckhpdFBhZ2VcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQsXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVxuIiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9Cb2FyZEZhY3RvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXJGYWN0b3J5KG5hbWUsIHBsYXllck51bSwgaXNDb21wdXRlciA9IGZhbHNlKSB7XG4gIGlmIChcbiAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiBpc0NvbXB1dGVyICE9PSBcImJvb2xlYW5cIiB8fFxuICAgIChwbGF5ZXJOdW0gIT09IDEgJiYgcGxheWVyTnVtICE9PSAyKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGdhbWVib2FyZCA9IEJvYXJkRmFjdG9yeSgpXG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWVcbiAgICB9LFxuICAgIGdldCBwbGF5ZXJOdW0oKSB7XG4gICAgICByZXR1cm4gcGxheWVyTnVtXG4gICAgfSxcbiAgICBnZXQgaXNDb21wdXRlcigpIHtcbiAgICAgIHJldHVybiBpc0NvbXB1dGVyXG4gICAgfSxcbiAgICBnZXQgZ2FtZWJvYXJkKCkge1xuICAgICAgcmV0dXJuIGdhbWVib2FyZFxuICAgIH0sXG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwRmFjdG9yeShsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA8IDIgfHwgbGVuZ3RoID4gNSkgcmV0dXJuXG5cbiAgY29uc3QgaGl0Ym94ZXMgPSBfY3JlYXRlSGl0Ym94ZXMoKVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVIaXRib3hlcygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgaGl0OiAoKSA9PiBoaXQoaSksXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSBoaXRib3hlcy5sZW5ndGggfHwgaW5kZXggPCAwKSByZXR1cm5cbiAgICBoaXRib3hlc1tpbmRleF0uaXNIaXQgPSB0cnVlXG4gICAgcmV0dXJuIGhpdGJveGVzLm1hcCgoaGl0Ym94KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5oaXRib3ggfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IGhpdGJveGVzKCkge1xuICAgICAgcmV0dXJuIGhpdGJveGVzLm1hcCgoaGl0Ym94KSA9PiAoe1xuICAgICAgICBnZXQgaXNIaXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGhpdGJveC5pc0hpdFxuICAgICAgICB9LFxuICAgICAgICBoaXQ6IGhpdGJveC5oaXQsXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICBpZiAoaGl0Ym94ZXMuZXZlcnkoKGhpdGJveCkgPT4gaGl0Ym94LmlzSGl0ID09PSB0cnVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgfSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vbW9kdWxlcy9HYW1lLmpzXCJcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvRE9NQ29udHJvbGxlclwiXG5cbkdhbWUuc3RhcnQoKVxuIl0sIm5hbWVzIjpbIlNoaXBGYWN0b3J5IiwiQm9hcmRGYWN0b3J5Iiwic2hpcHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJyZW1haW5pbmdTaGlwcyIsIk9iamVjdCIsImtleXMiLCJwbGFjZWRTaGlwcyIsImJvYXJkIiwiQTEiLCJBMiIsIkEzIiwiQTQiLCJBNSIsIkE2IiwiQTciLCJBOCIsIkE5IiwiQTEwIiwiQjEiLCJCMiIsIkIzIiwiQjQiLCJCNSIsIkI2IiwiQjciLCJCOCIsIkI5IiwiQjEwIiwiQzEiLCJDMiIsIkMzIiwiQzQiLCJDNSIsIkM2IiwiQzciLCJDOCIsIkM5IiwiQzEwIiwiRDEiLCJEMiIsIkQzIiwiRDQiLCJENSIsIkQ2IiwiRDciLCJEOCIsIkQ5IiwiRDEwIiwiRTEiLCJFMiIsIkUzIiwiRTQiLCJFNSIsIkU2IiwiRTciLCJFOCIsIkU5IiwiRTEwIiwiRjEiLCJGMiIsIkYzIiwiRjQiLCJGNSIsIkY2IiwiRjciLCJGOCIsIkY5IiwiRjEwIiwiRzEiLCJHMiIsIkczIiwiRzQiLCJHNSIsIkc2IiwiRzciLCJHOCIsIkc5IiwiRzEwIiwiSDEiLCJIMiIsIkgzIiwiSDQiLCJINSIsIkg2IiwiSDciLCJIOCIsIkg5IiwiSDEwIiwiSTEiLCJJMiIsIkkzIiwiSTQiLCJJNSIsIkk2IiwiSTciLCJJOCIsIkk5IiwiSTEwIiwiSjEiLCJKMiIsIkozIiwiSjQiLCJKNSIsIko2IiwiSjciLCJKOCIsIko5IiwiSjEwIiwiX2ZpbmRJbnZhbGlkQ29vcmRzIiwic2hpcExlbmd0aCIsIm9yaWVudGF0aW9uIiwiYmFkSW5kZXhlcyIsImV4Y2x1c2lvbnMiLCJwdXNoIiwiaSIsImxlbmd0aCIsImV4Y2x1c2lvbiIsImtleSIsImVuZHNXaXRoIiwic3RhcnRzV2l0aCIsImluY2x1ZGVzIiwiX2ZpbmRTaGlwSW5kZXhlcyIsImdvb2RDb29yZHMiLCJsZXR0ZXJzIiwiY2hhciIsImNoYXJBdCIsIm51bSIsIk51bWJlciIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwic2hpcEFyZWEiLCJpbmRleE9mIiwiX2NvbGxpc2lvbkNoZWNrIiwiaXNFbXB0eSIsImNvb3JkcyIsImV2ZXJ5IiwiX2NoZWNrUGxhY2VtZW50Iiwic2hpcCIsImhpdGJveGVzIiwidmFsaWRDb29yZHMiLCJfZmluZFZhbGlkQ29vcmRzIiwiaW52YWxpZEFycmF5IiwidmFsaWRNb3ZlcyIsIl9wbGFjZVJhbmRvbSIsIm9yaWVudGF0aW9ucyIsInJhbmRvbU9yaWVudGF0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tU2hpcCIsInJhbmRvbVZhbGlkQ29vcmRzIiwicGxhY2VTaGlwIiwic29tZSIsImFyZyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiLCJzaGlwSW5kZXgiLCJzcGxpY2UiLCJzaGlwSW5kZXhlcyIsIl9hdHRhY2tSYW5kb21Db29yZCIsInByb3AiLCJpc0hpdCIsInJhbmRvbVZhbGlkQ29vcmQiLCJyZWNpZXZlQXR0YWNrIiwiaGl0IiwicmVzZXQiLCJmcmVlemUiLCJuZXdCb2FyZCIsImFsbFNoaXBzU3VuayIsInZhbHVlcyIsImhpdGJveCIsIkRPTUNvbnRyb2xsZXIiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyMVNoaXBDb29yZHMiLCJwbGF5ZXIyU2hpcENvb3JkcyIsInJlbmRlcldpblBhZ2UiLCJ3aW5uZXIiLCJpbm5lckhUTUwiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImdhbWVib2FyZCIsImZpcmVDdXN0b21FdmVudCIsImRldGFpbE9iaiIsImNhbGxiYWNrRnVuYyIsImV2dCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJ3YWl0T25lU2Vjb25kIiwic2V0VGltZW91dCIsInBhc3NEZXZpY2VBbmRMb2FkUGFnZSIsInBhZ2VDYWxsYmFjayIsInBhZ2VBcmdzIiwiY291bnQiLCJoZWFkZXIiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImNvdW50ZG93bkVsZW0iLCJpZCIsImludGVydmFsSUQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwbGFjZUNvbXB1dGVyU2hpcHMiLCJjb21wdXRlclBsYXllciIsImNvbXB1dGVyQ29vcmQiLCJkZWNpZGVQYWdlVG9SZW5kZXIiLCJjdXJyZW50UGxheWVyIiwibmV4dFBsYXllciIsImlzQ29tcHV0ZXIiLCJyZW5kZXJTaGlwUGFnZSIsInJlbmRlckhpdFBhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyUGxheWVyUGFnZSIsImZvcm0iLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwidGFyZ2V0IiwicGxheWVyIiwicGxhY2VTaGlwTGlzdGVuZXJzIiwiY2hhbmdlT3JpZW50YXRpb25UZXh0IiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInR1cm5XaGl0ZUNlbGxzR3JheSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidHVybkdyYXlDZWxsc1doaXRlIiwiZmxhc2hDZWxsUmVkIiwiY3VycmVudENvbG9yIiwiZHJhZ2dlZCIsIm9yaWVudGF0aW9uVG9nZ2xlIiwiZmluaXNoQnV0dG9uIiwiZGF0YUtleSIsImdldEF0dHJpYnV0ZSIsInNoaXBOYW1lIiwiY29vcmRzVG9IaWdobGlnaHQiLCJwbGF5ZXJOdW0iLCJoaWdobGlnaHRTaGlwc0dyYXkiLCJyZW1vdmUiLCJoaXRCb2FyZCIsImNsb25lTm9kZSIsImhpZ2hsaWdodEhpdHNBbmRNaXNzZXMiLCJwbGFjZUhpdExpc3RlbmVycyIsImRvbWJvYXJkIiwiY29vcmQiLCJjZWxsIiwic2hpcENvb3JkcyIsImhpdGJveENvb3JkIiwiaGl0QWJvcnQiLCJBYm9ydENvbnRyb2xsZXIiLCJoaXRTdGF0dXMiLCJhYm9ydCIsInNpZ25hbCIsIlBsYXllckZhY3RvcnkiLCJHYW1lIiwic3RhcnQiLCJzdGFydEdhbWUiLCJpbml0Iiwic3dpdGNoUGxheWVyIiwiX2NyZWF0ZUhpdGJveGVzIiwiYXJyYXkiLCJpbmRleCIsIm1hcCIsImlzU3VuayJdLCJzb3VyY2VSb290IjoiIn0=