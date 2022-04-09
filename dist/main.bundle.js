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
    body.innerHTML = "";
    var winMessage;

    if (winner.name === "You") {
      winMessage = "You win!";
    } else {
      winMessage = "".concat(winner.name, " wins!");
    }

    var playAgain = document.createElement("section");
    playAgain.classList.add("play-again");
    body.appendChild(playAgain);
    var winnerElem = document.createElement("h2");
    winnerElem.classList.add("winner");
    winnerElem.textContent = winMessage;
    var playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.classList.add("againBtn");
    playAgain.append(winnerElem, playAgainButton);
    playAgainButton.addEventListener("click", playGameAgain);
    console.log([winner.name, winner.gameboard.allShipsSunk]);
  }

  function playGameAgain() {
    player1ShipCoords.length = 0;
    player2ShipCoords.length = 0;
    fireCustomEvent("startGame", {});
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
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    setTimeout(function () {
      return callbackFunc.apply(void 0, args);
    }, 1000);
  }

  function passDeviceAndLoadPage(pageCallback) {
    for (var _len2 = arguments.length, pageArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      pageArgs[_key2 - 1] = arguments[_key2];
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
    body.innerHTML = "\n    <header>\n      <h1>Battleship</h1>\n    </header>\n\n    <section id=\"play-area\">\n      <div id=\"board\">\n        <div data-key=\"A1\" class=\"coord\"></div>\n        <div data-key=\"A2\" class=\"coord\"></div>\n        <div data-key=\"A3\" class=\"coord\"></div>\n        <div data-key=\"A4\" class=\"coord\"></div>\n        <div data-key=\"A5\" class=\"coord\"></div>\n        <div data-key=\"A6\" class=\"coord\"></div>\n        <div data-key=\"A7\" class=\"coord\"></div>\n        <div data-key=\"A8\" class=\"coord\"></div>\n        <div data-key=\"A9\" class=\"coord\"></div>\n        <div data-key=\"A10\" class=\"coord\"></div>\n\n        <div data-key=\"B1\" class=\"coord\"></div>\n        <div data-key=\"B2\" class=\"coord\"></div>\n        <div data-key=\"B3\" class=\"coord\"></div>\n        <div data-key=\"B4\" class=\"coord\"></div>\n        <div data-key=\"B5\" class=\"coord\"></div>\n        <div data-key=\"B6\" class=\"coord\"></div>\n        <div data-key=\"B7\" class=\"coord\"></div>\n        <div data-key=\"B8\" class=\"coord\"></div>\n        <div data-key=\"B9\" class=\"coord\"></div>\n        <div data-key=\"B10\" class=\"coord\"></div>\n\n        <div data-key=\"C1\" class=\"coord\"></div>\n        <div data-key=\"C2\" class=\"coord\"></div>\n        <div data-key=\"C3\" class=\"coord\"></div>\n        <div data-key=\"C4\" class=\"coord\"></div>\n        <div data-key=\"C5\" class=\"coord\"></div>\n        <div data-key=\"C6\" class=\"coord\"></div>\n        <div data-key=\"C7\" class=\"coord\"></div>\n        <div data-key=\"C8\" class=\"coord\"></div>\n        <div data-key=\"C9\" class=\"coord\"></div>\n        <div data-key=\"C10\" class=\"coord\"></div>\n\n        <div data-key=\"D1\" class=\"coord\"></div>\n        <div data-key=\"D2\" class=\"coord\"></div>\n        <div data-key=\"D3\" class=\"coord\"></div>\n        <div data-key=\"D4\" class=\"coord\"></div>\n        <div data-key=\"D5\" class=\"coord\"></div>\n        <div data-key=\"D6\" class=\"coord\"></div>\n        <div data-key=\"D7\" class=\"coord\"></div>\n        <div data-key=\"D8\" class=\"coord\"></div>\n        <div data-key=\"D9\" class=\"coord\"></div>\n        <div data-key=\"D10\" class=\"coord\"></div>\n\n        <div data-key=\"E1\" class=\"coord\"></div>\n        <div data-key=\"E2\" class=\"coord\"></div>\n        <div data-key=\"E3\" class=\"coord\"></div>\n        <div data-key=\"E4\" class=\"coord\"></div>\n        <div data-key=\"E5\" class=\"coord\"></div>\n        <div data-key=\"E6\" class=\"coord\"></div>\n        <div data-key=\"E7\" class=\"coord\"></div>\n        <div data-key=\"E8\" class=\"coord\"></div>\n        <div data-key=\"E9\" class=\"coord\"></div>\n        <div data-key=\"E10\" class=\"coord\"></div>\n\n        <div data-key=\"F1\" class=\"coord\"></div>\n        <div data-key=\"F2\" class=\"coord\"></div>\n        <div data-key=\"F3\" class=\"coord\"></div>\n        <div data-key=\"F4\" class=\"coord\"></div>\n        <div data-key=\"F5\" class=\"coord\"></div>\n        <div data-key=\"F6\" class=\"coord\"></div>\n        <div data-key=\"F7\" class=\"coord\"></div>\n        <div data-key=\"F8\" class=\"coord\"></div>\n        <div data-key=\"F9\" class=\"coord\"></div>\n        <div data-key=\"F10\" class=\"coord\"></div>\n\n        <div data-key=\"G1\" class=\"coord\"></div>\n        <div data-key=\"G2\" class=\"coord\"></div>\n        <div data-key=\"G3\" class=\"coord\"></div>\n        <div data-key=\"G4\" class=\"coord\"></div>\n        <div data-key=\"G5\" class=\"coord\"></div>\n        <div data-key=\"G6\" class=\"coord\"></div>\n        <div data-key=\"G7\" class=\"coord\"></div>\n        <div data-key=\"G8\" class=\"coord\"></div>\n        <div data-key=\"G9\" class=\"coord\"></div>\n        <div data-key=\"G10\" class=\"coord\"></div>\n\n        <div data-key=\"H1\" class=\"coord\"></div>\n        <div data-key=\"H2\" class=\"coord\"></div>\n        <div data-key=\"H3\" class=\"coord\"></div>\n        <div data-key=\"H4\" class=\"coord\"></div>\n        <div data-key=\"H5\" class=\"coord\"></div>\n        <div data-key=\"H6\" class=\"coord\"></div>\n        <div data-key=\"H7\" class=\"coord\"></div>\n        <div data-key=\"H8\" class=\"coord\"></div>\n        <div data-key=\"H9\" class=\"coord\"></div>\n        <div data-key=\"H10\" class=\"coord\"></div>\n\n        <div data-key=\"I1\" class=\"coord\"></div>\n        <div data-key=\"I2\" class=\"coord\"></div>\n        <div data-key=\"I3\" class=\"coord\"></div>\n        <div data-key=\"I4\" class=\"coord\"></div>\n        <div data-key=\"I5\" class=\"coord\"></div>\n        <div data-key=\"I6\" class=\"coord\"></div>\n        <div data-key=\"I7\" class=\"coord\"></div>\n        <div data-key=\"I8\" class=\"coord\"></div>\n        <div data-key=\"I9\" class=\"coord\"></div>\n        <div data-key=\"I10\" class=\"coord\"></div>\n\n        <div data-key=\"J1\" class=\"coord\"></div>\n        <div data-key=\"J2\" class=\"coord\"></div>\n        <div data-key=\"J3\" class=\"coord\"></div>\n        <div data-key=\"J4\" class=\"coord\"></div>\n        <div data-key=\"J5\" class=\"coord\"></div>\n        <div data-key=\"J6\" class=\"coord\"></div>\n        <div data-key=\"J7\" class=\"coord\"></div>\n        <div data-key=\"J8\" class=\"coord\"></div>\n        <div data-key=\"J9\" class=\"coord\"></div>\n        <div data-key=\"J10\" class=\"coord\"></div>\n      </div>\n\n      <div id=\"ships\">\n        <div class=\"ship\" draggable=\"true\" data-ship='carrier'>carrier</div>\n        <div class=\"ship\" draggable=\"true\" data-ship='battleship'>battleship</div>\n        <div class=\"ship\" draggable=\"true\" data-ship='cruiser'>cruiser</div>\n        <div class=\"ship\" draggable=\"true\" data-ship='submarine'>submarine</div>\n        <div class=\"ship\" draggable=\"true\" data-ship='destroyer'>destroyer</div>\n      </div>\n    </section>\n\n    <section class=\"buttons\">\n      <button class=\"orientation-toggle\">horizontal</button>\n      <button id='finish-button'>Finish</button>\n    </section>";
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
    body.innerHTML = "\n    <section class='board-headings'>\n      <h1>Your Board</h1>\n      <h1>Enemy Board</h1>\n    </section>\n\n    <section id=\"play-area\">\n      <div id=\"board\">\n        <div data-key=\"A1\" class=\"coord\"></div>\n        <div data-key=\"A2\" class=\"coord\"></div>\n        <div data-key=\"A3\" class=\"coord\"></div>\n        <div data-key=\"A4\" class=\"coord\"></div>\n        <div data-key=\"A5\" class=\"coord\"></div>\n        <div data-key=\"A6\" class=\"coord\"></div>\n        <div data-key=\"A7\" class=\"coord\"></div>\n        <div data-key=\"A8\" class=\"coord\"></div>\n        <div data-key=\"A9\" class=\"coord\"></div>\n        <div data-key=\"A10\" class=\"coord\"></div>\n\n        <div data-key=\"B1\" class=\"coord\"></div>\n        <div data-key=\"B2\" class=\"coord\"></div>\n        <div data-key=\"B3\" class=\"coord\"></div>\n        <div data-key=\"B4\" class=\"coord\"></div>\n        <div data-key=\"B5\" class=\"coord\"></div>\n        <div data-key=\"B6\" class=\"coord\"></div>\n        <div data-key=\"B7\" class=\"coord\"></div>\n        <div data-key=\"B8\" class=\"coord\"></div>\n        <div data-key=\"B9\" class=\"coord\"></div>\n        <div data-key=\"B10\" class=\"coord\"></div>\n\n        <div data-key=\"C1\" class=\"coord\"></div>\n        <div data-key=\"C2\" class=\"coord\"></div>\n        <div data-key=\"C3\" class=\"coord\"></div>\n        <div data-key=\"C4\" class=\"coord\"></div>\n        <div data-key=\"C5\" class=\"coord\"></div>\n        <div data-key=\"C6\" class=\"coord\"></div>\n        <div data-key=\"C7\" class=\"coord\"></div>\n        <div data-key=\"C8\" class=\"coord\"></div>\n        <div data-key=\"C9\" class=\"coord\"></div>\n        <div data-key=\"C10\" class=\"coord\"></div>\n\n        <div data-key=\"D1\" class=\"coord\"></div>\n        <div data-key=\"D2\" class=\"coord\"></div>\n        <div data-key=\"D3\" class=\"coord\"></div>\n        <div data-key=\"D4\" class=\"coord\"></div>\n        <div data-key=\"D5\" class=\"coord\"></div>\n        <div data-key=\"D6\" class=\"coord\"></div>\n        <div data-key=\"D7\" class=\"coord\"></div>\n        <div data-key=\"D8\" class=\"coord\"></div>\n        <div data-key=\"D9\" class=\"coord\"></div>\n        <div data-key=\"D10\" class=\"coord\"></div>\n\n        <div data-key=\"E1\" class=\"coord\"></div>\n        <div data-key=\"E2\" class=\"coord\"></div>\n        <div data-key=\"E3\" class=\"coord\"></div>\n        <div data-key=\"E4\" class=\"coord\"></div>\n        <div data-key=\"E5\" class=\"coord\"></div>\n        <div data-key=\"E6\" class=\"coord\"></div>\n        <div data-key=\"E7\" class=\"coord\"></div>\n        <div data-key=\"E8\" class=\"coord\"></div>\n        <div data-key=\"E9\" class=\"coord\"></div>\n        <div data-key=\"E10\" class=\"coord\"></div>\n\n        <div data-key=\"F1\" class=\"coord\"></div>\n        <div data-key=\"F2\" class=\"coord\"></div>\n        <div data-key=\"F3\" class=\"coord\"></div>\n        <div data-key=\"F4\" class=\"coord\"></div>\n        <div data-key=\"F5\" class=\"coord\"></div>\n        <div data-key=\"F6\" class=\"coord\"></div>\n        <div data-key=\"F7\" class=\"coord\"></div>\n        <div data-key=\"F8\" class=\"coord\"></div>\n        <div data-key=\"F9\" class=\"coord\"></div>\n        <div data-key=\"F10\" class=\"coord\"></div>\n\n        <div data-key=\"G1\" class=\"coord\"></div>\n        <div data-key=\"G2\" class=\"coord\"></div>\n        <div data-key=\"G3\" class=\"coord\"></div>\n        <div data-key=\"G4\" class=\"coord\"></div>\n        <div data-key=\"G5\" class=\"coord\"></div>\n        <div data-key=\"G6\" class=\"coord\"></div>\n        <div data-key=\"G7\" class=\"coord\"></div>\n        <div data-key=\"G8\" class=\"coord\"></div>\n        <div data-key=\"G9\" class=\"coord\"></div>\n        <div data-key=\"G10\" class=\"coord\"></div>\n\n        <div data-key=\"H1\" class=\"coord\"></div>\n        <div data-key=\"H2\" class=\"coord\"></div>\n        <div data-key=\"H3\" class=\"coord\"></div>\n        <div data-key=\"H4\" class=\"coord\"></div>\n        <div data-key=\"H5\" class=\"coord\"></div>\n        <div data-key=\"H6\" class=\"coord\"></div>\n        <div data-key=\"H7\" class=\"coord\"></div>\n        <div data-key=\"H8\" class=\"coord\"></div>\n        <div data-key=\"H9\" class=\"coord\"></div>\n        <div data-key=\"H10\" class=\"coord\"></div>\n\n        <div data-key=\"I1\" class=\"coord\"></div>\n        <div data-key=\"I2\" class=\"coord\"></div>\n        <div data-key=\"I3\" class=\"coord\"></div>\n        <div data-key=\"I4\" class=\"coord\"></div>\n        <div data-key=\"I5\" class=\"coord\"></div>\n        <div data-key=\"I6\" class=\"coord\"></div>\n        <div data-key=\"I7\" class=\"coord\"></div>\n        <div data-key=\"I8\" class=\"coord\"></div>\n        <div data-key=\"I9\" class=\"coord\"></div>\n        <div data-key=\"I10\" class=\"coord\"></div>\n\n        <div data-key=\"J1\" class=\"coord\"></div>\n        <div data-key=\"J2\" class=\"coord\"></div>\n        <div data-key=\"J3\" class=\"coord\"></div>\n        <div data-key=\"J4\" class=\"coord\"></div>\n        <div data-key=\"J5\" class=\"coord\"></div>\n        <div data-key=\"J6\" class=\"coord\"></div>\n        <div data-key=\"J7\" class=\"coord\"></div>\n        <div data-key=\"J8\" class=\"coord\"></div>\n        <div data-key=\"J9\" class=\"coord\"></div>\n        <div data-key=\"J10\" class=\"coord\"></div>\n      </div>\n    </section>";
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
        cell.style.backgroundColor = "darkred";
      } else if (board[coord] === "hit") {
        cell.style.backgroundColor = "darkgreen";
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
        e.target.style.backgroundColor = "darkred";
        hitAbort.abort();
        waitOneSecond(fireCustomEvent, "Game.switchPlayer", {}, decidePageToRender);
      } else if (hitStatus === 1) {
        hitAbort.abort();
        e.target.style.backgroundColor = "darkgreen";
        waitOneSecond(fireCustomEvent, "Game.switchPlayer", {}, decidePageToRender);
      } else {
        console.log("flash");
        flashCellRed(e);
      }
    }, {
      signal: hitAbort.signal
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjs7QUFJL0JHLFVBQUFBLEdBQUcsRUFBRU0sTUFBTSxDQUFDTjtBQUptQixTQUFiO0FBQUEsT0FBYixDQUFQO0FBTUQsS0FSa0I7O0FBU25CLFFBQUlzSCxNQUFKLEdBQWE7QUFDWCxVQUFJakosUUFBUSxDQUFDSCxLQUFULENBQWUsVUFBQ29DLE1BQUQ7QUFBQSxlQUFZQSxNQUFNLENBQUNULEtBQVAsS0FBaUIsSUFBN0I7QUFBQSxPQUFmLENBQUosRUFBdUQ7QUFDckQsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFma0IsR0FBZCxDQUFQO0FBaUJEOzs7Ozs7VUN6Q0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUFnSCw4REFBQSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0JvYXJkRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRE9NQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvU2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXBGYWN0b3J5IGZyb20gXCIuL1NoaXBGYWN0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9hcmRGYWN0b3J5KCkge1xuICBjb25zdCBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiBTaGlwRmFjdG9yeSg1KSxcbiAgICBiYXR0bGVzaGlwOiBTaGlwRmFjdG9yeSg0KSxcbiAgICBjcnVpc2VyOiBTaGlwRmFjdG9yeSgzKSxcbiAgICBzdWJtYXJpbmU6IFNoaXBGYWN0b3J5KDMpLFxuICAgIGRlc3Ryb3llcjogU2hpcEZhY3RvcnkoMiksXG4gIH1cblxuICAvLyBib2FyZHMgc3RhcnQgb3V0IHdpdGhvdXQgc2hpcHMgcGxhY2VkLCB0aGVuIGFyZSBtb3ZlZCB0byBwbGFjZWRTaGlwc1xuICBsZXQgcmVtYWluaW5nU2hpcHMgPSBPYmplY3Qua2V5cyhzaGlwcylcbiAgbGV0IHBsYWNlZFNoaXBzID0gW11cblxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgY29uc3QgYm9hcmQgPSB7XG4gICAgQTE6ICcnLCBBMjogJycsIEEzOiAnJywgQTQ6ICcnLCBBNTogJycsIEE2OiAnJywgQTc6ICcnLCBBODogJycsIEE5OiAnJywgQTEwOiAnJywgXG4gICAgQjE6ICcnLCBCMjogJycsIEIzOiAnJywgQjQ6ICcnLCBCNTogJycsIEI2OiAnJywgQjc6ICcnLCBCODogJycsIEI5OiAnJywgQjEwOiAnJywgXG4gICAgQzE6ICcnLCBDMjogJycsIEMzOiAnJywgQzQ6ICcnLCBDNTogJycsIEM2OiAnJywgQzc6ICcnLCBDODogJycsIEM5OiAnJywgQzEwOiAnJywgXG4gICAgRDE6ICcnLCBEMjogJycsIEQzOiAnJywgRDQ6ICcnLCBENTogJycsIEQ2OiAnJywgRDc6ICcnLCBEODogJycsIEQ5OiAnJywgRDEwOiAnJywgXG4gICAgRTE6ICcnLCBFMjogJycsIEUzOiAnJywgRTQ6ICcnLCBFNTogJycsIEU2OiAnJywgRTc6ICcnLCBFODogJycsIEU5OiAnJywgRTEwOiAnJywgXG4gICAgRjE6ICcnLCBGMjogJycsIEYzOiAnJywgRjQ6ICcnLCBGNTogJycsIEY2OiAnJywgRjc6ICcnLCBGODogJycsIEY5OiAnJywgRjEwOiAnJywgXG4gICAgRzE6ICcnLCBHMjogJycsIEczOiAnJywgRzQ6ICcnLCBHNTogJycsIEc2OiAnJywgRzc6ICcnLCBHODogJycsIEc5OiAnJywgRzEwOiAnJywgXG4gICAgSDE6ICcnLCBIMjogJycsIEgzOiAnJywgSDQ6ICcnLCBINTogJycsIEg2OiAnJywgSDc6ICcnLCBIODogJycsIEg5OiAnJywgSDEwOiAnJywgXG4gICAgSTE6ICcnLCBJMjogJycsIEkzOiAnJywgSTQ6ICcnLCBJNTogJycsIEk2OiAnJywgSTc6ICcnLCBJODogJycsIEk5OiAnJywgSTEwOiAnJywgXG4gICAgSjE6ICcnLCBKMjogJycsIEozOiAnJywgSjQ6ICcnLCBKNTogJycsIEo2OiAnJywgSjc6ICcnLCBKODogJycsIEo5OiAnJywgSjEwOiAnJyxcbiAgfVxuXG4gIGZ1bmN0aW9uIF9maW5kSW52YWxpZENvb3JkcyhzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIC8vIFNoaXBzIGFyZSBwbGFjZWQgZnJvbSB0aGUgbWVkaWFuIGluZGV4LCBvciBpbiB0aGUgY2FzZSBvZiBldmVuXG4gICAgLy8gc2hpcExlbmd0aHMgYnkgdGhlIG1pZGRsZS1sZWZ0IGluZGV4LlxuICAgIC8vIFRoaXMgZnVuY3Rpb246XG4gICAgLy8gMSkgbWFrZXMgYW4gYXJyYXkgb2YgYWxsIHRoZSBpbnZhbGlkIHBsYWNlbWVudHMgZm9yIHRoYXQgY2VudGVyIGluZGV4XG4gICAgLy8gdGhhdCB3b3VsZCBjYXVzZSB0aGUgc2hpcCB0byBoYW5nIG9mZiB0aGUgYm9hcmQuXG4gICAgLy8gMikgdGhlbiBhZGRzIHRvIHRoZSBhcnJheSBvZiBpbnZhbGlkIHBsYWNlbWVudHMgYWxsIGJvYXJkIGluZGV4ZXMgdGhhdFxuICAgIC8vIGFyZSBhbHJlYWR5IG9jY3VwaWVkXG4gICAgY29uc3QgYmFkSW5kZXhlcyA9IFtdXG4gICAgY29uc3QgZXhjbHVzaW9ucyA9IFtdXG5cbiAgICAvLyBmaW5kcyBwbGFjZW1lbnRzIHRoYXQgd291bGQgbWFrZSBhIGhvcml6b250YWwgc2hpcCBoYW5nIG9mZiB0aGUgYm9hcmRcbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkgZXhjbHVzaW9ucy5wdXNoKDEsIDIsIDksIDEwKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIGV4Y2x1c2lvbnMucHVzaCgxLCA5LCAxMClcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSBleGNsdXNpb25zLnB1c2goMSwgMTApXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikgZXhjbHVzaW9ucy5wdXNoKDEwKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4Y2x1c2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZXhjbHVzaW9uID0gZXhjbHVzaW9uc1tpXVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICAgICAgaWYgKGtleS5lbmRzV2l0aChleGNsdXNpb24pKSB7XG4gICAgICAgICAgICBiYWRJbmRleGVzLnB1c2goa2V5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZpbmRzIHBsYWNlbWVudHMgdGhhdCB3b3VsZCBtYWtlIGEgdmVyaWNhbCBzaGlwIGhhbmcgb2ZmIHRoZSBib2FyZFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkgZXhjbHVzaW9ucy5wdXNoKFwiQVwiLCBcIkJcIiwgXCJJXCIsIFwiSlwiKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIGV4Y2x1c2lvbnMucHVzaChcIkFcIiwgXCJJXCIsIFwiSlwiKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIGV4Y2x1c2lvbnMucHVzaChcIkFcIiwgXCJKXCIpXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikgZXhjbHVzaW9ucy5wdXNoKFwiSlwiKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4Y2x1c2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZXhjbHVzaW9uID0gZXhjbHVzaW9uc1tpXVxuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGV4Y2x1c2lvbikpIHtcbiAgICAgICAgICAgIGJhZEluZGV4ZXMucHVzaChrZXkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkcyBvY2N1cGllZCBib2FyZCBpbmRleGVzIHRoYXQgYXJlIG5vdCBhbHJlYWR5IGluIHRoZSBsaXN0XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgIGlmIChib2FyZFtrZXldICE9PSBcIlwiICYmIGJhZEluZGV4ZXMuaW5jbHVkZXMoa2V5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYmFkSW5kZXhlcy5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmFkSW5kZXhlc1xuICB9XG5cbiAgZnVuY3Rpb24gX2ZpbmRTaGlwSW5kZXhlcyhzaGlwTGVuZ3RoLCBnb29kQ29vcmRzLCBvcmllbnRhdGlvbikge1xuICAgIC8vIGRlc2lnbmVkIHRvIGFjY2VwdCBjb29yZHMgdGhhdCBhcmUgTk9UIGludmFsaWQsIGZpbHRlciBjb29yZHMgYWdhaW5zdCB0aGVcbiAgICAvLyBhcnJheSBfZmluZEludmFsaWRDb29yZHMoKSByZXR1cm5zIGJlZm9yZSBwYXNzaW5nIHRoZW0gaW50byB0aGlzIGZ1bmN0aW9uXG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl1cbiAgICBjb25zdCBjaGFyID0gZ29vZENvb3Jkcy5jaGFyQXQoMClcbiAgICBjb25zdCBudW0gPSBOdW1iZXIucGFyc2VJbnQoZ29vZENvb3Jkcy5zdWJzdHJpbmcoMSkpXG4gICAgY29uc3Qgc2hpcEFyZWEgPSBbXVxuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBjaGFyICsgKG51bSAtIDEpLFxuICAgICAgICAgIGNoYXIgKyAobnVtIC0gMiksXG4gICAgICAgICAgZ29vZENvb3JkcyxcbiAgICAgICAgICBjaGFyICsgKG51bSArIDEpLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMilcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGNoYXIgKyAobnVtIC0gMSksXG4gICAgICAgICAgZ29vZENvb3JkcyxcbiAgICAgICAgICBjaGFyICsgKG51bSArIDEpLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMilcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGNoYXIgKyAobnVtIC0gMSksIGdvb2RDb29yZHMsIGNoYXIgKyAobnVtICsgMSkpXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goZ29vZENvb3JkcywgY2hhciArIChudW0gKyAxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMl0gKyBudW0sXG4gICAgICAgICAgZ29vZENvb3JkcyxcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMl0gKyBudW1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW0sXG4gICAgICAgICAgZ29vZENvb3JkcyxcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMl0gKyBudW1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW0sXG4gICAgICAgICAgZ29vZENvb3JkcyxcbiAgICAgICAgICBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChnb29kQ29vcmRzLCBsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzaGlwQXJlYVxuICB9XG5cbiAgZnVuY3Rpb24gX2NvbGxpc2lvbkNoZWNrKHNoaXBMZW5ndGgsIGdvb2RDb29yZHMsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gZGVzaWduZWQgdG8gYWNjZXB0IGNvb3JkcyB0aGF0IGFyZSBOT1QgaW52YWxpZCwgZmlsdGVyIGNvb3JkcyBhZ2FpbnN0IHRoZVxuICAgIC8vIGFycmF5IF9maW5kSW52YWxpZENvb3JkcygpIHJldHVybnMgYmVmb3JlIHBhc3NpbmcgdGhlbSBpbnRvIHRoaXMgZnVuY3Rpb25cblxuICAgIC8vIGNoZWNrcyBmb3IgY29sbGlzaW9ucyBhbG9uZyB0aGUgYXhpcyBkZWZpbmVkIGJ5ICdvcmllbnRhdGlvbicgZnJvbSB0aGVcbiAgICAvLyBjZW50ZXIgb2YgdGhlIHNoaXAuIERvZXMgbm90IGNoZWNrIHRoZSBjZW50ZXIgb2YgdGhlIHNoaXAgaXRzZWxmLlxuICAgIGNvbnN0IGxldHRlcnMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLCBcIklcIiwgXCJKXCJdXG4gICAgY29uc3QgY2hhciA9IGdvb2RDb29yZHMuY2hhckF0KDApXG4gICAgY29uc3QgbnVtID0gTnVtYmVyLnBhcnNlSW50KGdvb2RDb29yZHMuc3Vic3RyaW5nKDEpKVxuICAgIGNvbnN0IHNoaXBBcmVhID0gW11cbiAgICBjb25zdCBpc0VtcHR5ID0gKGNvb3JkcykgPT4gY29vcmRzID09PSBcIlwiXG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtIC0gMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtIC0gMildLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMildXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSAtIDEpXSxcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSArIDEpXSxcbiAgICAgICAgICBib2FyZFtjaGFyICsgKG51bSArIDIpXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goYm9hcmRbY2hhciArIChudW0gLSAxKV0sIGJvYXJkW2NoYXIgKyAobnVtICsgMSldKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGJvYXJkW2dvb2RDb29yZHNdLCBib2FyZFtjaGFyICsgKG51bSArIDEpXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDUpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDJdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDJdICsgbnVtXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtXSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2hpcEFyZWEuZXZlcnkoaXNFbXB0eSkpIHtcbiAgICAgIHJldHVybiBmYWxzZSAvLyBubyBjb2xsaXNpb25cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWUgLy8gY29sbGlzaW9uXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NoZWNrUGxhY2VtZW50KHNoaXAsIGNvb3Jkcywgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcHNbc2hpcF0uaGl0Ym94ZXMubGVuZ3RoXG4gICAgY29uc3QgdmFsaWRDb29yZHMgPSBfZmluZFZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKVxuICAgIGlmICh2YWxpZENvb3Jkcy5pbmNsdWRlcyhjb29yZHMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZmluZFZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgaW52YWxpZEFycmF5ID0gX2ZpbmRJbnZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKVxuICAgIGNvbnN0IHZhbGlkTW92ZXMgPSBbXVxuXG4gICAgLy8gYWRkIGFueSBrZXlzIHRoYXQgd291bGQgaGl0IGFub3RoZXIgc2hpcCB0byBpbnZhbGlkIGFycmF5XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWludmFsaWRBcnJheS5pbmNsdWRlcyhrZXkpICYmXG4gICAgICAgIF9jb2xsaXNpb25DaGVjayhzaGlwTGVuZ3RoLCBrZXksIG9yaWVudGF0aW9uKVxuICAgICAgKSB7XG4gICAgICAgIGludmFsaWRBcnJheS5wdXNoKGtleSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYWtlIGFuIGFycmF5IG91dCBvZiBhbGwgY29vcmRzIHRoYXQgYXJlIG5vdCBpbiBpbnZhbGlkQXJyYXlcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgaWYgKCFpbnZhbGlkQXJyYXkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICB2YWxpZE1vdmVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZE1vdmVzXG4gIH1cblxuICBmdW5jdGlvbiBfcGxhY2VSYW5kb20oKSB7XG4gICAgaWYgKHJlbWFpbmluZ1NoaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXVxuICAgIGNvbnN0IHJhbmRvbU9yaWVudGF0aW9uID0gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXVxuICAgIGNvbnN0IHJhbmRvbVNoaXAgPVxuICAgICAgcmVtYWluaW5nU2hpcHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVtYWluaW5nU2hpcHMubGVuZ3RoKV1cbiAgICBjb25zdCB2YWxpZENvb3JkcyA9IF9maW5kVmFsaWRDb29yZHMoXG4gICAgICBzaGlwc1tyYW5kb21TaGlwXS5oaXRib3hlcy5sZW5ndGgsXG4gICAgICByYW5kb21PcmllbnRhdGlvblxuICAgIClcbiAgICBjb25zdCByYW5kb21WYWxpZENvb3JkcyA9XG4gICAgICB2YWxpZENvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZENvb3Jkcy5sZW5ndGgpXVxuICAgIHJldHVybiBwbGFjZVNoaXAocmFuZG9tU2hpcCwgcmFuZG9tVmFsaWRDb29yZHMsIHJhbmRvbU9yaWVudGF0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXAsIGNvb3Jkcywgb3JpZW50YXRpb24sIHJhbmRvbSA9IGZhbHNlKSB7XG4gICAgLy8gcmV0dXJucyBhcnJheSBvZiBjb29yZHMgLSBvciBhbiBlbXB0eSBhcnJheSBpZiBmYWlsZWQgdG8gcGxhY2VcbiAgICBpZiAocmFuZG9tID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gX3BsYWNlUmFuZG9tKClcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBbc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbl0uc29tZSgoYXJnKSA9PiBhcmcgPT09IHVuZGVmaW5lZCkgfHxcbiAgICAgICFPYmplY3Qua2V5cyhzaGlwcykuaW5jbHVkZXMoc2hpcC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgIU9iamVjdC5rZXlzKGJvYXJkKS5pbmNsdWRlcyhjb29yZHMudG9VcHBlckNhc2UoKSkgfHxcbiAgICAgIChvcmllbnRhdGlvbiAhPT0gXCJ2ZXJ0aWNhbFwiICYmIG9yaWVudGF0aW9uICE9PSBcImhvcml6b250YWxcIilcbiAgICApIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBJbmRleCA9IHJlbWFpbmluZ1NoaXBzLmluZGV4T2Yoc2hpcClcbiAgICBpZiAoc2hpcEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIFtdIC8vIHJldHVybiBmYWxzZSAtIHNoaXAgY2Fubm90IGJlIHBsYWNlZCB0aGVyZVxuICAgIH0gZWxzZSBpZiAoX2NoZWNrUGxhY2VtZW50KHNoaXAsIGNvb3Jkcywgb3JpZW50YXRpb24pKSB7XG4gICAgICBwbGFjZWRTaGlwcy5wdXNoKHJlbWFpbmluZ1NoaXBzLnNwbGljZShzaGlwSW5kZXgsIDEpWzBdKVxuICAgICAgY29uc3Qgc2hpcEluZGV4ZXMgPSBfZmluZFNoaXBJbmRleGVzKFxuICAgICAgICBzaGlwc1tzaGlwXS5oaXRib3hlcy5sZW5ndGgsXG4gICAgICAgIGNvb3JkcyxcbiAgICAgICAgb3JpZW50YXRpb25cbiAgICAgIClcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwc1tzaGlwXS5oaXRib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFtzaGlwSW5kZXhlc1tpXV0gPSBzaGlwc1tzaGlwXS5oaXRib3hlc1tpXVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNoaXBJbmRleGVzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9hdHRhY2tSYW5kb21Db29yZCgpIHtcbiAgICBjb25zdCB2YWxpZENvb3JkcyA9IFtdXG4gICAgZm9yIChjb25zdCBwcm9wIGluIGJvYXJkKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGJvYXJkW3Byb3BdID09PSBcIlwiIHx8XG4gICAgICAgICh0eXBlb2YgYm9hcmRbcHJvcF0gPT09IFwib2JqZWN0XCIgJiYgYm9hcmRbcHJvcF0uaXNIaXQgPT09IGZhbHNlKVxuICAgICAgKSB7XG4gICAgICAgIHZhbGlkQ29vcmRzLnB1c2gocHJvcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByYW5kb21WYWxpZENvb3JkID1cbiAgICAgIHZhbGlkQ29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkQ29vcmRzLmxlbmd0aCldXG4gICAgcmV0dXJuIHJlY2lldmVBdHRhY2socmFuZG9tVmFsaWRDb29yZClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2lldmVBdHRhY2soY29vcmRzKSB7XG4gICAgaWYgKGNvb3JkcyA9PT0gXCJyYW5kb21cIikge1xuICAgICAgcmV0dXJuIF9hdHRhY2tSYW5kb21Db29yZCgpXG4gICAgfVxuICAgIC8vIGhpdCAxLCBtaXNzIDAsIGFscmVhZHkgaGl0IC0xXG4gICAgaWYgKHR5cGVvZiBib2FyZFtjb29yZHNdID09PSBcIm9iamVjdFwiICYmICFib2FyZFtjb29yZHNdLmlzSGl0KSB7XG4gICAgICBib2FyZFtjb29yZHNdLmhpdCgpXG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRzXSA9PT0gXCJcIikge1xuICAgICAgYm9hcmRbY29vcmRzXSA9IFwibWlzc1wiXG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW2Nvb3Jkc10gPT09IFwib2JqZWN0XCIgJiYgYm9hcmRbY29vcmRzXS5pc0hpdCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmIChib2FyZFtjb29yZHNdID09PSBcIm1pc3NcIikge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBib2FyZFtrZXldID0gXCJcIlxuICAgIH1cblxuICAgIHNoaXBzLmNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KVxuICAgIHNoaXBzLmJhdHRsZXNoaXAgPSBTaGlwRmFjdG9yeSg0KVxuICAgIHNoaXBzLmNydWlzZXIgPSBTaGlwRmFjdG9yeSgzKVxuICAgIHNoaXBzLnN1Ym1hcmluZSA9IFNoaXBGYWN0b3J5KDMpXG4gICAgc2hpcHMuZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMilcblxuICAgIHJlbWFpbmluZ1NoaXBzID0gT2JqZWN0LmtleXMoc2hpcHMpXG4gICAgcGxhY2VkU2hpcHMgPSBbXVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldCBib2FyZCgpIHtcbiAgICAgIGNvbnN0IG5ld0JvYXJkID0ge31cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9hcmRba2V5XSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIG5ld0JvYXJkW2tleV0gPSBib2FyZFtrZXldXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW2tleV0gPT09IFwib2JqZWN0XCIgJiYgIWJvYXJkW2tleV0uaXNIaXQpIHtcbiAgICAgICAgICBuZXdCb2FyZFtrZXldID0gXCJcIlxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2FyZFtrZXldID09PSBcIm9iamVjdFwiICYmIGJvYXJkW2tleV0uaXNIaXQpIHtcbiAgICAgICAgICBuZXdCb2FyZFtrZXldID0gXCJoaXRcIlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdCb2FyZFxuICAgIH0sXG4gICAgZ2V0IHJlbWFpbmluZ1NoaXBzKCkge1xuICAgICAgcmV0dXJuIFsuLi5yZW1haW5pbmdTaGlwc11cbiAgICB9LFxuICAgIGdldCBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIE9iamVjdC52YWx1ZXMoc2hpcHMpLmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoc2hpcC5oaXRib3hlcykuZXZlcnkoXG4gICAgICAgICAgICAoaGl0Ym94KSA9PiBoaXRib3guaXNIaXQgPT09IHRydWVcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgcmVzZXQsXG4gIH0pXG59XG4iLCJjb25zdCBET01Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpXG4gIGNvbnN0IHBsYXllcjFTaGlwQ29vcmRzID0gW11cbiAgY29uc3QgcGxheWVyMlNoaXBDb29yZHMgPSBbXVxuXG4gIGZ1bmN0aW9uIHJlbmRlcldpblBhZ2Uod2lubmVyKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IHdpbk1lc3NhZ2VcbiAgICBpZiAod2lubmVyLm5hbWUgPT09IFwiWW91XCIpIHtcbiAgICAgIHdpbk1lc3NhZ2UgPSBcIllvdSB3aW4hXCJcbiAgICB9IGVsc2Uge1xuICAgICAgd2luTWVzc2FnZSA9IGAke3dpbm5lci5uYW1lfSB3aW5zIWBcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5QWdhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHBsYXlBZ2Fpbi5jbGFzc0xpc3QuYWRkKFwicGxheS1hZ2FpblwiKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocGxheUFnYWluKVxuICAgIGNvbnN0IHdpbm5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICB3aW5uZXJFbGVtLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJcIilcbiAgICB3aW5uZXJFbGVtLnRleHRDb250ZW50ID0gd2luTWVzc2FnZVxuICAgIGNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBwbGF5QWdhaW5CdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5cIlxuICAgIHBsYXlBZ2FpbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWdhaW5CdG5cIilcbiAgICBwbGF5QWdhaW4uYXBwZW5kKHdpbm5lckVsZW0sIHBsYXlBZ2FpbkJ1dHRvbilcblxuICAgIHBsYXlBZ2FpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheUdhbWVBZ2FpbilcbiAgICBjb25zb2xlLmxvZyhbd2lubmVyLm5hbWUsIHdpbm5lci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlHYW1lQWdhaW4oKSB7XG4gICAgcGxheWVyMVNoaXBDb29yZHMubGVuZ3RoID0gMFxuICAgIHBsYXllcjJTaGlwQ29vcmRzLmxlbmd0aCA9IDBcblxuICAgIGZpcmVDdXN0b21FdmVudChcInN0YXJ0R2FtZVwiLCB7fSlcbiAgfVxuXG4gIC8vIG5lZWRzIGFuIGV4cGVjdCBwbGF5ZXIgZGV0YWlsP1xuICBmdW5jdGlvbiBmaXJlQ3VzdG9tRXZlbnQobmFtZSwgZGV0YWlsT2JqLCBjYWxsYmFja0Z1bmMpIHtcbiAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGRldGFpbDogZGV0YWlsT2JqLFxuICAgIH0pXG5cbiAgICBpZiAoY2FsbGJhY2tGdW5jKSB7XG4gICAgICBldnQuZGV0YWlsLmNhbGxiYWNrRnVuYyA9IGNhbGxiYWNrRnVuY1xuICAgIH1cblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICB9XG5cbiAgZnVuY3Rpb24gd2FpdE9uZVNlY29uZChjYWxsYmFja0Z1bmMsIC4uLmFyZ3MpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrRnVuYyguLi5hcmdzKSwgMTAwMClcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhc3NEZXZpY2VBbmRMb2FkUGFnZShwYWdlQ2FsbGJhY2ssIC4uLnBhZ2VBcmdzKSB7XG4gICAgLy8gcGFpbnQgc2NyZWVuXG4gICAgbGV0IGNvdW50ID0gM1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYGBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBQYXNzIFRoZSBEZXZpY2VcIlxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgY29uc3QgY291bnRkb3duRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY291bnRkb3duRWxlbS5pZCA9IFwiY291bnRkb3duXCJcbiAgICBjb3VudGRvd25FbGVtLnRleHRDb250ZW50ID0gY291bnRcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvdW50ZG93bkVsZW0pXG5cbiAgICAvLyBjb3VudGRvd24gc2NyZWVuXG4gICAgY29uc3QgaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgICBwYWdlQ2FsbGJhY2soLi4ucGFnZUFyZ3MpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50ZG93bkVsZW0udGV4dENvbnRlbnQgPSAtLWNvdW50XG4gICAgICB9XG4gICAgfSwgMTAwMClcbiAgICAvLyBsb2FkIG5ldyBwYWdlIGF0IGVuZCBvZiBjb3VudGRvd25cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcyhjb21wdXRlclBsYXllcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBjb25zdCBjb21wdXRlckNvb3JkID0gY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgICAgcGxheWVyMlNoaXBDb29yZHMucHVzaChjb21wdXRlckNvb3JkKVxuICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMgaXMgcmVhbGx5IGdyb3NzLlxuICBmdW5jdGlvbiBkZWNpZGVQYWdlVG9SZW5kZXIoY3VycmVudFBsYXllciwgbmV4dFBsYXllcikge1xuICAgIGlmIChjdXJyZW50UGxheWVyLmdhbWVib2FyZC5yZW1haW5pbmdTaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoY3VycmVudFBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgICAgIHBsYWNlQ29tcHV0ZXJTaGlwcyhjdXJyZW50UGxheWVyKVxuICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXCJHYW1lLnN3aXRjaFBsYXllclwiLCB7fSwgZGVjaWRlUGFnZVRvUmVuZGVyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5leHRQbGF5ZXIuaXNDb21wdXRlcikge1xuICAgICAgICAgIHJlbmRlclNoaXBQYWdlKGN1cnJlbnRQbGF5ZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFzc0RldmljZUFuZExvYWRQYWdlKHJlbmRlclNoaXBQYWdlLCBjdXJyZW50UGxheWVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmspIHtcbiAgICAgIHJlbmRlcldpblBhZ2UobmV4dFBsYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuaXNDb21wdXRlcikge1xuICAgICAgICBuZXh0UGxheWVyLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKFwicmFuZG9tXCIpXG4gICAgICAgIGZpcmVDdXN0b21FdmVudChcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHt9LCBkZWNpZGVQYWdlVG9SZW5kZXIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV4dFBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgcmVuZGVySGl0UGFnZShjdXJyZW50UGxheWVyLCBuZXh0UGxheWVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhc3NEZXZpY2VBbmRMb2FkUGFnZShyZW5kZXJIaXRQYWdlLCBjdXJyZW50UGxheWVyLCBuZXh0UGxheWVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN0YXJ0R2FtZVwiLCByZW5kZXJQbGF5ZXJQYWdlKVxuICBmdW5jdGlvbiByZW5kZXJQbGF5ZXJQYWdlKCkge1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxoZWFkZXI+XG4gICAgICA8aDE+V2VsY29tZSB0byBCYXR0bGVTaGlwPC9oMT5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxmb3JtPlxuICAgICAgPGxhYmVsIGZvcj0ncGxheWVyMScgaGlkZGVuPlBsYXllcjE8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPSdwbGF5ZXIxJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nUGxheWVyIDEnPlxuXG4gICAgICA8bGFiZWwgZm9yPSdwbGF5ZXIyJyBoaWRkZW4+UGxheWVyMjwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9J3BsYXllcjInIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdQbGF5ZXIgMic+XG5cbiAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+UGxheSBBZ2FpbnN0IENvbXB1dGVyPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIFxuICAgIGBcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuICAgIGNvbnN0IGlucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIildXG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGlucHV0cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnZhbHVlLmxlbmd0aCA+IDApKSB7XG4gICAgICAgIGZpcmVDdXN0b21FdmVudChcbiAgICAgICAgICBcIkdhbWUuaW5pdFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBsYXllcjE6IFtpbnB1dHNbMF0udmFsdWUsIDFdLFxuICAgICAgICAgICAgLy8gcGxheWVyMjogW2lucHV0c1sxXS52YWx1ZSwgMiwgdHJ1ZV0gLy90cnVlIGNhbiBiZSBwYXNzZWQgdG8gbWFrZSBhIGNvbXB1dGVyIHBsYXllclxuICAgICAgICAgICAgcGxheWVyMjogW2lucHV0c1sxXS52YWx1ZSwgMl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW5kZXJTaGlwUGFnZVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCAhPT0gXCJQbGF5IEFnYWluc3QgQ29tcHV0ZXJcIikgcmV0dXJuXG4gICAgICBmaXJlQ3VzdG9tRXZlbnQoXG4gICAgICAgIFwiR2FtZS5pbml0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBwbGF5ZXIxOiBbXCJZb3VcIiwgMSwgZmFsc2VdLFxuICAgICAgICAgIC8vIHBsYXllcjI6IFtpbnB1dHNbMV0udmFsdWUsIDIsIHRydWVdIC8vdHJ1ZSBjYW4gYmUgcGFzc2VkIHRvIG1ha2UgYSBjb21wdXRlciBwbGF5ZXJcbiAgICAgICAgICBwbGF5ZXIyOiBbXCJDb21wdXRlclwiLCAyLCB0cnVlXSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVuZGVyU2hpcFBhZ2VcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2hpcFBhZ2UocGxheWVyKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlcj5cbiAgICAgIDxoMT5CYXR0bGVzaGlwPC9oMT5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxzZWN0aW9uIGlkPVwicGxheS1hcmVhXCI+XG4gICAgICA8ZGl2IGlkPVwiYm9hcmRcIj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGlkPVwic2hpcHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1zaGlwPSdjYXJyaWVyJz5jYXJyaWVyPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIGRhdGEtc2hpcD0nYmF0dGxlc2hpcCc+YmF0dGxlc2hpcDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLXNoaXA9J2NydWlzZXInPmNydWlzZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1zaGlwPSdzdWJtYXJpbmUnPnN1Ym1hcmluZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLXNoaXA9J2Rlc3Ryb3llcic+ZGVzdHJveWVyPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJvcmllbnRhdGlvbi10b2dnbGVcIj5ob3Jpem9udGFsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGlkPSdmaW5pc2gtYnV0dG9uJz5GaW5pc2g8L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+YFxuXG4gICAgcGxhY2VTaGlwTGlzdGVuZXJzKHBsYXllcilcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZU9yaWVudGF0aW9uVGV4dChlKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIilcblxuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJ2ZXJ0aWNhbFwiXG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKSlcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJob3Jpem9udGFsXCJcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHR1cm5XaGl0ZUNlbGxzR3JheShlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkXCIpKSByZXR1cm5cbiAgICBpZiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBcIlwiKSB7XG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JheVwiXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHVybkdyYXlDZWxsc1doaXRlKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIikpIHJldHVyblxuICAgIGlmIChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwibGlnaHRncmF5XCIpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaENlbGxSZWQoZSkge1xuICAgIGxldCBjdXJyZW50Q29sb3IgPSBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICBpZiAoY3VycmVudENvbG9yID09PSBcImxpZ2h0Z3JheVwiKSBjdXJyZW50Q29sb3IgPSBcIlwiXG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGNvcmFsXCJcbiAgICBzZXRUaW1lb3V0KCgpID0+IChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjdXJyZW50Q29sb3IpLCAyNTApXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXBMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgbGV0IGRyYWdnZWRcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hpcHNcIilcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIilcbiAgICBjb25zdCBvcmllbnRhdGlvblRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JpZW50YXRpb24tdG9nZ2xlXCIpXG4gICAgY29uc3QgZmluaXNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW5pc2gtYnV0dG9uXCIpXG4gICAgLy8gY29uc3QgYWJvcnQgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICAgIG9yaWVudGF0aW9uVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VPcmllbnRhdGlvblRleHQpXG4gICAgc2hpcHMuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZSkgPT4gKGRyYWdnZWQgPSBlLnRhcmdldCkpXG5cbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIHR1cm5XaGl0ZUNlbGxzR3JheSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIHR1cm5HcmF5Q2VsbHNXaGl0ZSlcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBib2FyZCkgcmV0dXJuXG4gICAgICBjb25zdCBkYXRhS2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIilcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gZHJhZ2dlZC50ZXh0Q29udGVudFxuICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvblRvZ2dsZS50ZXh0Q29udGVudFxuICAgICAgY29uc3QgY29vcmRzVG9IaWdobGlnaHQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIGRhdGFLZXksXG4gICAgICAgIG9yaWVudGF0aW9uXG4gICAgICApXG5cbiAgICAgIGlmIChjb29yZHNUb0hpZ2hsaWdodC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChwbGF5ZXIucGxheWVyTnVtID09PSAxKSB7XG4gICAgICAgICAgcGxheWVyMVNoaXBDb29yZHMucHVzaChjb29yZHNUb0hpZ2hsaWdodClcbiAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXIxU2hpcENvb3JkcylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIyU2hpcENvb3Jkcy5wdXNoKGNvb3Jkc1RvSGlnaGxpZ2h0KVxuICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllcjJTaGlwQ29vcmRzKVxuICAgICAgICB9XG5cbiAgICAgICAgaGlnaGxpZ2h0U2hpcHNHcmF5KHBsYXllcilcbiAgICAgICAgZHJhZ2dlZC5yZW1vdmUoKVxuICAgICAgICAvLyBwdXNoIHRvIGVhY2ggcGxheWVyJ3Mgc2hpcCBjb29yZHMuIE1heCBzaGlwcyBjb29yZHMgPT09IDVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsYXNoQ2VsbFJlZChlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmaW5pc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLnJlbWFpbmluZ1NoaXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBzd2l0Y2hwbGF5ZXIgZXZlbnRcbiAgICAgICAgZmlyZUN1c3RvbUV2ZW50KFwiR2FtZS5zd2l0Y2hQbGF5ZXJcIiwge30sIGRlY2lkZVBhZ2VUb1JlbmRlcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVySGl0UGFnZShjdXJyZW50UGxheWVyLCBuZXh0UGxheWVyKSB7XG4gICAgYm9keS5pbm5lckhUTUwgPSBgXG4gICAgPHNlY3Rpb24gY2xhc3M9J2JvYXJkLWhlYWRpbmdzJz5cbiAgICAgIDxoMT5Zb3VyIEJvYXJkPC9oMT5cbiAgICAgIDxoMT5FbmVteSBCb2FyZDwvaDE+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwbGF5LWFyZWFcIj5cbiAgICAgIDxkaXYgaWQ9XCJib2FyZFwiPlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkEzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkczXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkozXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPmBcblxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZFwiKVxuICAgIGNvbnN0IGhpdEJvYXJkID0gYm9hcmQuY2xvbmVOb2RlKHRydWUpXG4gICAgaGl0Qm9hcmQuaWQgPSBcImhpdC1ib2FyZFwiXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5LWFyZWFcIikuYXBwZW5kQ2hpbGQoaGl0Qm9hcmQpXG5cbiAgICBoaWdobGlnaHRTaGlwc0dyYXkoY3VycmVudFBsYXllcilcbiAgICBoaWdobGlnaHRIaXRzQW5kTWlzc2VzKGN1cnJlbnRQbGF5ZXIsIGJvYXJkKVxuICAgIGhpZ2hsaWdodEhpdHNBbmRNaXNzZXMobmV4dFBsYXllciwgaGl0Qm9hcmQpXG4gICAgcGxhY2VIaXRMaXN0ZW5lcnMobmV4dFBsYXllciwgaGl0Qm9hcmQpXG4gIH1cblxuICBmdW5jdGlvbiBoaWdobGlnaHRIaXRzQW5kTWlzc2VzKHBsYXllciwgZG9tYm9hcmQpIHtcbiAgICBjb25zdCBib2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmRcblxuICAgIGZvciAoY29uc3QgY29vcmQgaW4gYm9hcmQpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb21ib2FyZC5xdWVyeVNlbGVjdG9yKGAuY29vcmRbZGF0YS1rZXk9JyR7Y29vcmR9J11gKVxuICAgICAgaWYgKGJvYXJkW2Nvb3JkXSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtyZWRcIlxuICAgICAgfSBlbHNlIGlmIChib2FyZFtjb29yZF0gPT09IFwiaGl0XCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtncmVlblwiXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0U2hpcHNHcmF5KHBsYXllcikge1xuICAgIGlmIChwbGF5ZXIucGxheWVyTnVtID09PSAxKSB7XG4gICAgICBwbGF5ZXIxU2hpcENvb3Jkcy5mb3JFYWNoKChzaGlwQ29vcmRzKSA9PiB7XG4gICAgICAgIHNoaXBDb29yZHMuZm9yRWFjaCgoaGl0Ym94Q29vcmQpID0+IHtcbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuY29vcmRbZGF0YS1rZXk9JyR7aGl0Ym94Q29vcmR9J11gXG4gICAgICAgICAgKVxuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCJcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllcjJTaGlwQ29vcmRzLmZvckVhY2goKHNoaXBDb29yZHMpID0+IHtcbiAgICAgICAgc2hpcENvb3Jkcy5mb3JFYWNoKChoaXRib3hDb29yZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jb29yZFtkYXRhLWtleT0nJHtoaXRib3hDb29yZH0nXWBcbiAgICAgICAgICApXG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyYXlcIlxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZUhpdExpc3RlbmVycyhuZXh0UGxheWVyLCBoaXRCb2FyZCkge1xuICAgIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmluaXNoLWJ1dHRvblwiKVxuICAgIGNvbnN0IGhpdEFib3J0ID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgbGV0IGhpdFN0YXR1c1xuXG4gICAgLy8gYWxsb3dzIGF0dGFja2luZyBhbmQgY29sb3JzIGNlbGxzIHJlZCAobWlzcykgb3IgZ3JlZW4gKGhpdClcblxuICAgIGhpdEJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhS2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIilcbiAgICAgICAgaWYgKGRhdGFLZXkgPT09IG51bGwpIHJldHVyblxuXG4gICAgICAgIGhpdFN0YXR1cyA9IG5leHRQbGF5ZXIuZ2FtZWJvYXJkLnJlY2lldmVBdHRhY2soZGF0YUtleSlcbiAgICAgICAgY29uc29sZS5sb2coaGl0U3RhdHVzKVxuICAgICAgICBpZiAoaGl0U3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrcmVkXCJcbiAgICAgICAgICBoaXRBYm9ydC5hYm9ydCgpXG4gICAgICAgICAgd2FpdE9uZVNlY29uZChcbiAgICAgICAgICAgIGZpcmVDdXN0b21FdmVudCxcbiAgICAgICAgICAgIFwiR2FtZS5zd2l0Y2hQbGF5ZXJcIixcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgZGVjaWRlUGFnZVRvUmVuZGVyXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgIGhpdEFib3J0LmFib3J0KClcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtncmVlblwiXG4gICAgICAgICAgd2FpdE9uZVNlY29uZChcbiAgICAgICAgICAgIGZpcmVDdXN0b21FdmVudCxcbiAgICAgICAgICAgIFwiR2FtZS5zd2l0Y2hQbGF5ZXJcIixcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgZGVjaWRlUGFnZVRvUmVuZGVyXG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmxhc2hcIilcbiAgICAgICAgICBmbGFzaENlbGxSZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsOiBoaXRBYm9ydC5zaWduYWwgfVxuICAgIClcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBET01Db250cm9sbGVyXG4iLCJpbXBvcnQgUGxheWVyRmFjdG9yeSBmcm9tIFwiLi9QbGF5ZXJGYWN0b3J5XCJcblxuY29uc3QgR2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwbGF5ZXIxXG4gIGxldCBwbGF5ZXIyXG4gIGxldCBjdXJyZW50UGxheWVyXG5cbiAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgY29uc3Qgc3RhcnRHYW1lID0gbmV3IEN1c3RvbUV2ZW50KFwic3RhcnRHYW1lXCIsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBkZXRhaWw6IHt9LFxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHN0YXJ0R2FtZSlcbiAgICAvLyBET01Db250cm9sbGVyLnJlbmRlclBsYXllcnBhZ2VcbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJHYW1lLmluaXRcIiwgaW5pdClcbiAgZnVuY3Rpb24gaW5pdChlKSB7XG4gICAgcGxheWVyMSA9IFBsYXllckZhY3RvcnkoLi4uZS5kZXRhaWwucGxheWVyMSlcbiAgICBwbGF5ZXIyID0gUGxheWVyRmFjdG9yeSguLi5lLmRldGFpbC5wbGF5ZXIyKVxuICAgIGNvbnNvbGUubG9nKHBsYXllcjEpXG4gICAgY3VycmVudFBsYXllciA9IHBsYXllcjFcbiAgICBpZiAoZS5kZXRhaWwuY2FsbGJhY2tGdW5jKSBlLmRldGFpbC5jYWxsYmFja0Z1bmMoY3VycmVudFBsYXllcilcbiAgICAvLyBET01Db250cm9sbGVyLnJlbmRlclNoaXBQYWdlXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiR2FtZS5zd2l0Y2hQbGF5ZXJcIiwgc3dpdGNoUGxheWVyKVxuICBmdW5jdGlvbiBzd2l0Y2hQbGF5ZXIoZSkge1xuICAgIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyMlxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMikge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjFcbiAgICB9XG5cbiAgICBpZiAoZS5kZXRhaWwuY2FsbGJhY2tGdW5jKSB7XG4gICAgICBsZXQgbmV4dFBsYXllclxuXG4gICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgICBuZXh0UGxheWVyID0gcGxheWVyMlxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyID09PSBwbGF5ZXIyKSB7XG4gICAgICAgIG5leHRQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgICB9XG5cbiAgICAgIGUuZGV0YWlsLmNhbGxiYWNrRnVuYyhjdXJyZW50UGxheWVyLCBuZXh0UGxheWVyKVxuICAgIH1cblxuICAgIC8vIERPTUNvbnRyb2xsZXIucmVuZGVyU2hpcFBhZ2UsIERPTUNvbnRyb2xsZXIucmVuZGVySGl0UGFnZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydCxcbiAgfVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lXG4iLCJpbXBvcnQgQm9hcmRGYWN0b3J5IGZyb20gXCIuL0JvYXJkRmFjdG9yeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllckZhY3RvcnkobmFtZSwgcGxheWVyTnVtLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIGlzQ29tcHV0ZXIgIT09IFwiYm9vbGVhblwiIHx8XG4gICAgKHBsYXllck51bSAhPT0gMSAmJiBwbGF5ZXJOdW0gIT09IDIpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZ2FtZWJvYXJkID0gQm9hcmRGYWN0b3J5KClcblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZVxuICAgIH0sXG4gICAgZ2V0IHBsYXllck51bSgpIHtcbiAgICAgIHJldHVybiBwbGF5ZXJOdW1cbiAgICB9LFxuICAgIGdldCBpc0NvbXB1dGVyKCkge1xuICAgICAgcmV0dXJuIGlzQ29tcHV0ZXJcbiAgICB9LFxuICAgIGdldCBnYW1lYm9hcmQoKSB7XG4gICAgICByZXR1cm4gZ2FtZWJvYXJkXG4gICAgfSxcbiAgfSlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXBGYWN0b3J5KGxlbmd0aCkge1xuICBpZiAobGVuZ3RoIDwgMiB8fCBsZW5ndGggPiA1KSByZXR1cm5cblxuICBjb25zdCBoaXRib3hlcyA9IF9jcmVhdGVIaXRib3hlcygpXG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUhpdGJveGVzKCkge1xuICAgIGNvbnN0IGFycmF5ID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnJheS5wdXNoKHtcbiAgICAgICAgaXNIaXQ6IGZhbHNlLFxuICAgICAgICBoaXQ6ICgpID0+IGhpdChpKSxcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBhcnJheVxuICB9XG5cbiAgZnVuY3Rpb24gaGl0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IGhpdGJveGVzLmxlbmd0aCB8fCBpbmRleCA8IDApIHJldHVyblxuICAgIGhpdGJveGVzW2luZGV4XS5pc0hpdCA9IHRydWVcbiAgICByZXR1cm4gaGl0Ym94ZXMubWFwKChoaXRib3gpID0+IHtcbiAgICAgIHJldHVybiB7IC4uLmhpdGJveCB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKHtcbiAgICBnZXQgaGl0Ym94ZXMoKSB7XG4gICAgICByZXR1cm4gaGl0Ym94ZXMubWFwKChoaXRib3gpID0+ICh7XG4gICAgICAgIGdldCBpc0hpdCgpIHtcbiAgICAgICAgICByZXR1cm4gaGl0Ym94LmlzSGl0XG4gICAgICAgIH0sXG4gICAgICAgIGhpdDogaGl0Ym94LmhpdCxcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgIGlmIChoaXRib3hlcy5ldmVyeSgoaGl0Ym94KSA9PiBoaXRib3guaXNIaXQgPT09IHRydWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICB9KVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9tb2R1bGVzL0dhbWUuanNcIlxuaW1wb3J0IERPTUNvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9ET01Db250cm9sbGVyXCJcblxuR2FtZS5zdGFydCgpXG4iXSwibmFtZXMiOlsiU2hpcEZhY3RvcnkiLCJCb2FyZEZhY3RvcnkiLCJzaGlwcyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsInJlbWFpbmluZ1NoaXBzIiwiT2JqZWN0Iiwia2V5cyIsInBsYWNlZFNoaXBzIiwiYm9hcmQiLCJBMSIsIkEyIiwiQTMiLCJBNCIsIkE1IiwiQTYiLCJBNyIsIkE4IiwiQTkiLCJBMTAiLCJCMSIsIkIyIiwiQjMiLCJCNCIsIkI1IiwiQjYiLCJCNyIsIkI4IiwiQjkiLCJCMTAiLCJDMSIsIkMyIiwiQzMiLCJDNCIsIkM1IiwiQzYiLCJDNyIsIkM4IiwiQzkiLCJDMTAiLCJEMSIsIkQyIiwiRDMiLCJENCIsIkQ1IiwiRDYiLCJENyIsIkQ4IiwiRDkiLCJEMTAiLCJFMSIsIkUyIiwiRTMiLCJFNCIsIkU1IiwiRTYiLCJFNyIsIkU4IiwiRTkiLCJFMTAiLCJGMSIsIkYyIiwiRjMiLCJGNCIsIkY1IiwiRjYiLCJGNyIsIkY4IiwiRjkiLCJGMTAiLCJHMSIsIkcyIiwiRzMiLCJHNCIsIkc1IiwiRzYiLCJHNyIsIkc4IiwiRzkiLCJHMTAiLCJIMSIsIkgyIiwiSDMiLCJINCIsIkg1IiwiSDYiLCJINyIsIkg4IiwiSDkiLCJIMTAiLCJJMSIsIkkyIiwiSTMiLCJJNCIsIkk1IiwiSTYiLCJJNyIsIkk4IiwiSTkiLCJJMTAiLCJKMSIsIkoyIiwiSjMiLCJKNCIsIko1IiwiSjYiLCJKNyIsIko4IiwiSjkiLCJKMTAiLCJfZmluZEludmFsaWRDb29yZHMiLCJzaGlwTGVuZ3RoIiwib3JpZW50YXRpb24iLCJiYWRJbmRleGVzIiwiZXhjbHVzaW9ucyIsInB1c2giLCJpIiwibGVuZ3RoIiwiZXhjbHVzaW9uIiwia2V5IiwiZW5kc1dpdGgiLCJzdGFydHNXaXRoIiwiaW5jbHVkZXMiLCJfZmluZFNoaXBJbmRleGVzIiwiZ29vZENvb3JkcyIsImxldHRlcnMiLCJjaGFyIiwiY2hhckF0IiwibnVtIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJzaGlwQXJlYSIsImluZGV4T2YiLCJfY29sbGlzaW9uQ2hlY2siLCJpc0VtcHR5IiwiY29vcmRzIiwiZXZlcnkiLCJfY2hlY2tQbGFjZW1lbnQiLCJzaGlwIiwiaGl0Ym94ZXMiLCJ2YWxpZENvb3JkcyIsIl9maW5kVmFsaWRDb29yZHMiLCJpbnZhbGlkQXJyYXkiLCJ2YWxpZE1vdmVzIiwiX3BsYWNlUmFuZG9tIiwib3JpZW50YXRpb25zIiwicmFuZG9tT3JpZW50YXRpb24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21TaGlwIiwicmFuZG9tVmFsaWRDb29yZHMiLCJwbGFjZVNoaXAiLCJzb21lIiwiYXJnIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInNoaXBJbmRleCIsInNwbGljZSIsInNoaXBJbmRleGVzIiwiX2F0dGFja1JhbmRvbUNvb3JkIiwicHJvcCIsImlzSGl0IiwicmFuZG9tVmFsaWRDb29yZCIsInJlY2lldmVBdHRhY2siLCJoaXQiLCJyZXNldCIsImZyZWV6ZSIsIm5ld0JvYXJkIiwiYWxsU2hpcHNTdW5rIiwidmFsdWVzIiwiaGl0Ym94IiwiRE9NQ29udHJvbGxlciIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXIxU2hpcENvb3JkcyIsInBsYXllcjJTaGlwQ29vcmRzIiwicmVuZGVyV2luUGFnZSIsIndpbm5lciIsImlubmVySFRNTCIsIndpbk1lc3NhZ2UiLCJuYW1lIiwicGxheUFnYWluIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwid2lubmVyRWxlbSIsInRleHRDb250ZW50IiwicGxheUFnYWluQnV0dG9uIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXlHYW1lQWdhaW4iLCJjb25zb2xlIiwibG9nIiwiZ2FtZWJvYXJkIiwiZmlyZUN1c3RvbUV2ZW50IiwiZGV0YWlsT2JqIiwiY2FsbGJhY2tGdW5jIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIndhaXRPbmVTZWNvbmQiLCJhcmdzIiwic2V0VGltZW91dCIsInBhc3NEZXZpY2VBbmRMb2FkUGFnZSIsInBhZ2VDYWxsYmFjayIsInBhZ2VBcmdzIiwiY291bnQiLCJoZWFkZXIiLCJjb3VudGRvd25FbGVtIiwiaWQiLCJpbnRlcnZhbElEIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGxhY2VDb21wdXRlclNoaXBzIiwiY29tcHV0ZXJQbGF5ZXIiLCJjb21wdXRlckNvb3JkIiwiZGVjaWRlUGFnZVRvUmVuZGVyIiwiY3VycmVudFBsYXllciIsIm5leHRQbGF5ZXIiLCJpc0NvbXB1dGVyIiwicmVuZGVyU2hpcFBhZ2UiLCJyZW5kZXJIaXRQYWdlIiwicmVuZGVyUGxheWVyUGFnZSIsImZvcm0iLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwidGFyZ2V0IiwicGxheWVyIiwicGxhY2VTaGlwTGlzdGVuZXJzIiwiY2hhbmdlT3JpZW50YXRpb25UZXh0IiwiZm9yRWFjaCIsInRvZ2dsZSIsInR1cm5XaGl0ZUNlbGxzR3JheSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidHVybkdyYXlDZWxsc1doaXRlIiwiZmxhc2hDZWxsUmVkIiwiY3VycmVudENvbG9yIiwiZHJhZ2dlZCIsIm9yaWVudGF0aW9uVG9nZ2xlIiwiZmluaXNoQnV0dG9uIiwiZGF0YUtleSIsImdldEF0dHJpYnV0ZSIsInNoaXBOYW1lIiwiY29vcmRzVG9IaWdobGlnaHQiLCJwbGF5ZXJOdW0iLCJoaWdobGlnaHRTaGlwc0dyYXkiLCJyZW1vdmUiLCJoaXRCb2FyZCIsImNsb25lTm9kZSIsImhpZ2hsaWdodEhpdHNBbmRNaXNzZXMiLCJwbGFjZUhpdExpc3RlbmVycyIsImRvbWJvYXJkIiwiY29vcmQiLCJjZWxsIiwic2hpcENvb3JkcyIsImhpdGJveENvb3JkIiwiaGl0QWJvcnQiLCJBYm9ydENvbnRyb2xsZXIiLCJoaXRTdGF0dXMiLCJhYm9ydCIsInNpZ25hbCIsIlBsYXllckZhY3RvcnkiLCJHYW1lIiwic3RhcnQiLCJzdGFydEdhbWUiLCJpbml0Iiwic3dpdGNoUGxheWVyIiwiX2NyZWF0ZUhpdGJveGVzIiwiYXJyYXkiLCJpbmRleCIsIm1hcCIsImlzU3VuayJdLCJzb3VyY2VSb290IjoiIn0=