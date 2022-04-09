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
    var countDownSection = document.createElement("section");
    countDownSection.classList.add("countdown");
    body.appendChild(countDownSection);
    var header = document.createElement("h1");
    header.textContent = "Please Pass The Device";
    var countdownElem = document.createElement("p");
    countdownElem.id = "countdown";
    countdownElem.textContent = count;
    countDownSection.append(header, countdownElem); // countdown screen

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
    var touchLocation;
    var ships = document.querySelector("#ships");
    var shipElems = document.querySelectorAll(".ship");
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
        } else {
          player2ShipCoords.push(coordsToHighlight);
        }

        highlightShipsGray(player);
        dragged.remove(); // push to each player's ship coords. Max ships coords === 5
      } else {
        flashCellRed(e);
      }
    });
    shipElems.forEach(function (ship) {
      ship.addEventListener("touchmove", function (e) {
        dragged = e.target;
        touchLocation = e.targetTouches[0];
        var allCoords = document.querySelectorAll(".coord");
        var hoveredElem = document.elementFromPoint(touchLocation.pageX, touchLocation.pageY);

        if (hoveredElem.classList.contains("coord")) {
          allCoords.forEach(function (coord) {
            if (coord.style.backgroundColor !== "gray") coord.style.backgroundColor = "";
          });
          var originalColor = hoveredElem.style.backgroundColor;
          if (originalColor !== "gray") hoveredElem.style.backgroundColor = "lightgray";
        } else {
          allCoords.forEach(function (coord) {
            if (coord.style.backgroundColor !== "gray") coord.style.backgroundColor = "";
          });
        }
      });
      ship.addEventListener("touchend", function () {
        var dropElem = document.elementFromPoint(touchLocation.pageX, touchLocation.pageY);

        if (dropElem.classList.contains("coord")) {
          var dataKey = dropElem.getAttribute("data-key");
          var shipName = dragged.textContent;
          var orientation = orientationToggle.textContent;
          var coordsToHighlight = player.gameboard.placeShip(shipName, dataKey, orientation);

          if (coordsToHighlight.length > 0) {
            if (player.playerNum === 1) {
              player1ShipCoords.push(coordsToHighlight);
            } else {
              player2ShipCoords.push(coordsToHighlight);
            }

            highlightShipsGray(player);
            dragged.remove(); // push to each player's ship coords. Max ships coords === 5
          } else {
            flashCellRed({
              target: dropElem
            });
          }
        }
      });
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

      if (hitStatus === 0) {
        e.target.style.backgroundColor = "darkred";
        hitAbort.abort();
        waitOneSecond(fireCustomEvent, "Game.switchPlayer", {}, decidePageToRender);
      } else if (hitStatus === 1) {
        hitAbort.abort();
        e.target.style.backgroundColor = "darkgreen";
        waitOneSecond(fireCustomEvent, "Game.switchPlayer", {}, decidePageToRender);
      } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNILEtBQVQsQ0FBZSxVQUFDb0MsTUFBRDtBQUFBLGVBQVlBLE1BQU0sQ0FBQ1QsS0FBUCxLQUFpQixJQUE3QjtBQUFBLE9BQWYsQ0FBSixFQUF1RDtBQUNyRCxlQUFPLElBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLEtBQVA7QUFDRDtBQUNGOztBQWZrQixHQUFkLENBQVA7QUFpQkQ7Ozs7OztVQ3pDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTBILDhEQUFBLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvQm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9ET01Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcEZhY3RvcnkgZnJvbSBcIi4vU2hpcEZhY3RvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZEZhY3RvcnkoKSB7XG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IFNoaXBGYWN0b3J5KDUpLFxuICAgIGJhdHRsZXNoaXA6IFNoaXBGYWN0b3J5KDQpLFxuICAgIGNydWlzZXI6IFNoaXBGYWN0b3J5KDMpLFxuICAgIHN1Ym1hcmluZTogU2hpcEZhY3RvcnkoMyksXG4gICAgZGVzdHJveWVyOiBTaGlwRmFjdG9yeSgyKSxcbiAgfVxuXG4gIC8vIGJvYXJkcyBzdGFydCBvdXQgd2l0aG91dCBzaGlwcyBwbGFjZWQsIHRoZW4gYXJlIG1vdmVkIHRvIHBsYWNlZFNoaXBzXG4gIGxldCByZW1haW5pbmdTaGlwcyA9IE9iamVjdC5rZXlzKHNoaXBzKVxuICBsZXQgcGxhY2VkU2hpcHMgPSBbXVxuXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuICBjb25zdCBib2FyZCA9IHtcbiAgICBBMTogJycsIEEyOiAnJywgQTM6ICcnLCBBNDogJycsIEE1OiAnJywgQTY6ICcnLCBBNzogJycsIEE4OiAnJywgQTk6ICcnLCBBMTA6ICcnLCBcbiAgICBCMTogJycsIEIyOiAnJywgQjM6ICcnLCBCNDogJycsIEI1OiAnJywgQjY6ICcnLCBCNzogJycsIEI4OiAnJywgQjk6ICcnLCBCMTA6ICcnLCBcbiAgICBDMTogJycsIEMyOiAnJywgQzM6ICcnLCBDNDogJycsIEM1OiAnJywgQzY6ICcnLCBDNzogJycsIEM4OiAnJywgQzk6ICcnLCBDMTA6ICcnLCBcbiAgICBEMTogJycsIEQyOiAnJywgRDM6ICcnLCBENDogJycsIEQ1OiAnJywgRDY6ICcnLCBENzogJycsIEQ4OiAnJywgRDk6ICcnLCBEMTA6ICcnLCBcbiAgICBFMTogJycsIEUyOiAnJywgRTM6ICcnLCBFNDogJycsIEU1OiAnJywgRTY6ICcnLCBFNzogJycsIEU4OiAnJywgRTk6ICcnLCBFMTA6ICcnLCBcbiAgICBGMTogJycsIEYyOiAnJywgRjM6ICcnLCBGNDogJycsIEY1OiAnJywgRjY6ICcnLCBGNzogJycsIEY4OiAnJywgRjk6ICcnLCBGMTA6ICcnLCBcbiAgICBHMTogJycsIEcyOiAnJywgRzM6ICcnLCBHNDogJycsIEc1OiAnJywgRzY6ICcnLCBHNzogJycsIEc4OiAnJywgRzk6ICcnLCBHMTA6ICcnLCBcbiAgICBIMTogJycsIEgyOiAnJywgSDM6ICcnLCBINDogJycsIEg1OiAnJywgSDY6ICcnLCBINzogJycsIEg4OiAnJywgSDk6ICcnLCBIMTA6ICcnLCBcbiAgICBJMTogJycsIEkyOiAnJywgSTM6ICcnLCBJNDogJycsIEk1OiAnJywgSTY6ICcnLCBJNzogJycsIEk4OiAnJywgSTk6ICcnLCBJMTA6ICcnLCBcbiAgICBKMTogJycsIEoyOiAnJywgSjM6ICcnLCBKNDogJycsIEo1OiAnJywgSjY6ICcnLCBKNzogJycsIEo4OiAnJywgSjk6ICcnLCBKMTA6ICcnLFxuICB9XG5cbiAgZnVuY3Rpb24gX2ZpbmRJbnZhbGlkQ29vcmRzKHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gU2hpcHMgYXJlIHBsYWNlZCBmcm9tIHRoZSBtZWRpYW4gaW5kZXgsIG9yIGluIHRoZSBjYXNlIG9mIGV2ZW5cbiAgICAvLyBzaGlwTGVuZ3RocyBieSB0aGUgbWlkZGxlLWxlZnQgaW5kZXguXG4gICAgLy8gVGhpcyBmdW5jdGlvbjpcbiAgICAvLyAxKSBtYWtlcyBhbiBhcnJheSBvZiBhbGwgdGhlIGludmFsaWQgcGxhY2VtZW50cyBmb3IgdGhhdCBjZW50ZXIgaW5kZXhcbiAgICAvLyB0aGF0IHdvdWxkIGNhdXNlIHRoZSBzaGlwIHRvIGhhbmcgb2ZmIHRoZSBib2FyZC5cbiAgICAvLyAyKSB0aGVuIGFkZHMgdG8gdGhlIGFycmF5IG9mIGludmFsaWQgcGxhY2VtZW50cyBhbGwgYm9hcmQgaW5kZXhlcyB0aGF0XG4gICAgLy8gYXJlIGFscmVhZHkgb2NjdXBpZWRcbiAgICBjb25zdCBiYWRJbmRleGVzID0gW11cbiAgICBjb25zdCBleGNsdXNpb25zID0gW11cblxuICAgIC8vIGZpbmRzIHBsYWNlbWVudHMgdGhhdCB3b3VsZCBtYWtlIGEgaG9yaXpvbnRhbCBzaGlwIGhhbmcgb2ZmIHRoZSBib2FyZFxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSBleGNsdXNpb25zLnB1c2goMSwgMiwgOSwgMTApXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkgZXhjbHVzaW9ucy5wdXNoKDEsIDksIDEwKVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIGV4Y2x1c2lvbnMucHVzaCgxLCAxMClcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSBleGNsdXNpb25zLnB1c2goMTApXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBleGNsdXNpb24gPSBleGNsdXNpb25zW2ldXG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5LmVuZHNXaXRoKGV4Y2x1c2lvbikpIHtcbiAgICAgICAgICAgIGJhZEluZGV4ZXMucHVzaChrZXkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmluZHMgcGxhY2VtZW50cyB0aGF0IHdvdWxkIG1ha2UgYSB2ZXJpY2FsIHNoaXAgaGFuZyBvZmYgdGhlIGJvYXJkXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSBleGNsdXNpb25zLnB1c2goXCJBXCIsIFwiQlwiLCBcIklcIiwgXCJKXCIpXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkgZXhjbHVzaW9ucy5wdXNoKFwiQVwiLCBcIklcIiwgXCJKXCIpXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMykgZXhjbHVzaW9ucy5wdXNoKFwiQVwiLCBcIkpcIilcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSBleGNsdXNpb25zLnB1c2goXCJKXCIpXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhjbHVzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBleGNsdXNpb24gPSBleGNsdXNpb25zW2ldXG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoZXhjbHVzaW9uKSkge1xuICAgICAgICAgICAgYmFkSW5kZXhlcy5wdXNoKGtleSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhZGRzIG9jY3VwaWVkIGJvYXJkIGluZGV4ZXMgdGhhdCBhcmUgbm90IGFscmVhZHkgaW4gdGhlIGxpc3RcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgaWYgKGJvYXJkW2tleV0gIT09IFwiXCIgJiYgYmFkSW5kZXhlcy5pbmNsdWRlcyhrZXkpID09PSBmYWxzZSkge1xuICAgICAgICBiYWRJbmRleGVzLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYWRJbmRleGVzXG4gIH1cblxuICBmdW5jdGlvbiBfZmluZFNoaXBJbmRleGVzKHNoaXBMZW5ndGgsIGdvb2RDb29yZHMsIG9yaWVudGF0aW9uKSB7XG4gICAgLy8gZGVzaWduZWQgdG8gYWNjZXB0IGNvb3JkcyB0aGF0IGFyZSBOT1QgaW52YWxpZCwgZmlsdGVyIGNvb3JkcyBhZ2FpbnN0IHRoZVxuICAgIC8vIGFycmF5IF9maW5kSW52YWxpZENvb3JkcygpIHJldHVybnMgYmVmb3JlIHBhc3NpbmcgdGhlbSBpbnRvIHRoaXMgZnVuY3Rpb25cbiAgICBjb25zdCBsZXR0ZXJzID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiwgXCJJXCIsIFwiSlwiXVxuICAgIGNvbnN0IGNoYXIgPSBnb29kQ29vcmRzLmNoYXJBdCgwKVxuICAgIGNvbnN0IG51bSA9IE51bWJlci5wYXJzZUludChnb29kQ29vcmRzLnN1YnN0cmluZygxKSlcbiAgICBjb25zdCBzaGlwQXJlYSA9IFtdXG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGNoYXIgKyAobnVtIC0gMSksXG4gICAgICAgICAgY2hhciArIChudW0gLSAyKSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMSksXG4gICAgICAgICAgY2hhciArIChudW0gKyAyKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgY2hhciArIChudW0gLSAxKSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGNoYXIgKyAobnVtICsgMSksXG4gICAgICAgICAgY2hhciArIChudW0gKyAyKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goY2hhciArIChudW0gLSAxKSwgZ29vZENvb3JkcywgY2hhciArIChudW0gKyAxKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChnb29kQ29vcmRzLCBjaGFyICsgKG51bSArIDEpKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAyXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA0KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0sXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAyXSArIG51bVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bSxcbiAgICAgICAgICBnb29kQ29vcmRzLFxuICAgICAgICAgIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGdvb2RDb29yZHMsIGxldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoaXBBcmVhXG4gIH1cblxuICBmdW5jdGlvbiBfY29sbGlzaW9uQ2hlY2soc2hpcExlbmd0aCwgZ29vZENvb3Jkcywgb3JpZW50YXRpb24pIHtcbiAgICAvLyBkZXNpZ25lZCB0byBhY2NlcHQgY29vcmRzIHRoYXQgYXJlIE5PVCBpbnZhbGlkLCBmaWx0ZXIgY29vcmRzIGFnYWluc3QgdGhlXG4gICAgLy8gYXJyYXkgX2ZpbmRJbnZhbGlkQ29vcmRzKCkgcmV0dXJucyBiZWZvcmUgcGFzc2luZyB0aGVtIGludG8gdGhpcyBmdW5jdGlvblxuXG4gICAgLy8gY2hlY2tzIGZvciBjb2xsaXNpb25zIGFsb25nIHRoZSBheGlzIGRlZmluZWQgYnkgJ29yaWVudGF0aW9uJyBmcm9tIHRoZVxuICAgIC8vIGNlbnRlciBvZiB0aGUgc2hpcC4gRG9lcyBub3QgY2hlY2sgdGhlIGNlbnRlciBvZiB0aGUgc2hpcCBpdHNlbGYuXG4gICAgY29uc3QgbGV0dGVycyA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIiwgXCJFXCIsIFwiRlwiLCBcIkdcIiwgXCJIXCIsIFwiSVwiLCBcIkpcIl1cbiAgICBjb25zdCBjaGFyID0gZ29vZENvb3Jkcy5jaGFyQXQoMClcbiAgICBjb25zdCBudW0gPSBOdW1iZXIucGFyc2VJbnQoZ29vZENvb3Jkcy5zdWJzdHJpbmcoMSkpXG4gICAgY29uc3Qgc2hpcEFyZWEgPSBbXVxuICAgIGNvbnN0IGlzRW1wdHkgPSAoY29vcmRzKSA9PiBjb29yZHMgPT09IFwiXCJcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSA1KSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gLSAyKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAxKV0sXG4gICAgICAgICAgYm9hcmRbY2hhciArIChudW0gKyAyKV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNCkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtIC0gMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMSldLFxuICAgICAgICAgIGJvYXJkW2NoYXIgKyAobnVtICsgMildXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDMpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChib2FyZFtjaGFyICsgKG51bSAtIDEpXSwgYm9hcmRbY2hhciArIChudW0gKyAxKV0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goYm9hcmRbZ29vZENvb3Jkc10sIGJvYXJkW2NoYXIgKyAobnVtICsgMSldKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gNSkge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpIC0gMl0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dLFxuICAgICAgICAgIGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMl0gKyBudW1dXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDQpIHtcbiAgICAgICAgc2hpcEFyZWEucHVzaChcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSAtIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDFdICsgbnVtXSxcbiAgICAgICAgICBib2FyZFtsZXR0ZXJzW2xldHRlcnMuaW5kZXhPZihjaGFyKSArIDJdICsgbnVtXVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHNoaXBBcmVhLnB1c2goXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgLSAxXSArIG51bV0sXG4gICAgICAgICAgYm9hcmRbbGV0dGVyc1tsZXR0ZXJzLmluZGV4T2YoY2hhcikgKyAxXSArIG51bV1cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMikge1xuICAgICAgICBzaGlwQXJlYS5wdXNoKGJvYXJkW2xldHRlcnNbbGV0dGVycy5pbmRleE9mKGNoYXIpICsgMV0gKyBudW1dKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaGlwQXJlYS5ldmVyeShpc0VtcHR5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlIC8vIG5vIGNvbGxpc2lvblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZSAvLyBjb2xsaXNpb25cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfY2hlY2tQbGFjZW1lbnQoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwc1tzaGlwXS5oaXRib3hlcy5sZW5ndGhcbiAgICBjb25zdCB2YWxpZENvb3JkcyA9IF9maW5kVmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pXG4gICAgaWYgKHZhbGlkQ29vcmRzLmluY2x1ZGVzKGNvb3JkcykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9maW5kVmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBpbnZhbGlkQXJyYXkgPSBfZmluZEludmFsaWRDb29yZHMoc2hpcExlbmd0aCwgb3JpZW50YXRpb24pXG4gICAgY29uc3QgdmFsaWRNb3ZlcyA9IFtdXG5cbiAgICAvLyBhZGQgYW55IGtleXMgdGhhdCB3b3VsZCBoaXQgYW5vdGhlciBzaGlwIHRvIGludmFsaWQgYXJyYXlcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBib2FyZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhaW52YWxpZEFycmF5LmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgX2NvbGxpc2lvbkNoZWNrKHNoaXBMZW5ndGgsIGtleSwgb3JpZW50YXRpb24pXG4gICAgICApIHtcbiAgICAgICAgaW52YWxpZEFycmF5LnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1ha2UgYW4gYXJyYXkgb3V0IG9mIGFsbCBjb29yZHMgdGhhdCBhcmUgbm90IGluIGludmFsaWRBcnJheVxuICAgIGZvciAoY29uc3Qga2V5IGluIGJvYXJkKSB7XG4gICAgICBpZiAoIWludmFsaWRBcnJheS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHZhbGlkTW92ZXMucHVzaChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkTW92ZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIF9wbGFjZVJhbmRvbSgpIHtcbiAgICBpZiAocmVtYWluaW5nU2hpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgY29uc3Qgb3JpZW50YXRpb25zID0gW1wiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdXG4gICAgY29uc3QgcmFuZG9tT3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildXG4gICAgY29uc3QgcmFuZG9tU2hpcCA9XG4gICAgICByZW1haW5pbmdTaGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1haW5pbmdTaGlwcy5sZW5ndGgpXVxuICAgIGNvbnN0IHZhbGlkQ29vcmRzID0gX2ZpbmRWYWxpZENvb3JkcyhcbiAgICAgIHNoaXBzW3JhbmRvbVNoaXBdLmhpdGJveGVzLmxlbmd0aCxcbiAgICAgIHJhbmRvbU9yaWVudGF0aW9uXG4gICAgKVxuICAgIGNvbnN0IHJhbmRvbVZhbGlkQ29vcmRzID1cbiAgICAgIHZhbGlkQ29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkQ29vcmRzLmxlbmd0aCldXG4gICAgcmV0dXJuIHBsYWNlU2hpcChyYW5kb21TaGlwLCByYW5kb21WYWxpZENvb3JkcywgcmFuZG9tT3JpZW50YXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXAoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbiwgcmFuZG9tID0gZmFsc2UpIHtcbiAgICAvLyByZXR1cm5zIGFycmF5IG9mIGNvb3JkcyAtIG9yIGFuIGVtcHR5IGFycmF5IGlmIGZhaWxlZCB0byBwbGFjZVxuICAgIGlmIChyYW5kb20gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBfcGxhY2VSYW5kb20oKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIFtzaGlwLCBjb29yZHMsIG9yaWVudGF0aW9uXS5zb21lKChhcmcpID0+IGFyZyA9PT0gdW5kZWZpbmVkKSB8fFxuICAgICAgIU9iamVjdC5rZXlzKHNoaXBzKS5pbmNsdWRlcyhzaGlwLnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAhT2JqZWN0LmtleXMoYm9hcmQpLmluY2x1ZGVzKGNvb3Jkcy50b1VwcGVyQ2FzZSgpKSB8fFxuICAgICAgKG9yaWVudGF0aW9uICE9PSBcInZlcnRpY2FsXCIgJiYgb3JpZW50YXRpb24gIT09IFwiaG9yaXpvbnRhbFwiKVxuICAgICkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgY29uc3Qgc2hpcEluZGV4ID0gcmVtYWluaW5nU2hpcHMuaW5kZXhPZihzaGlwKVxuICAgIGlmIChzaGlwSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gW10gLy8gcmV0dXJuIGZhbHNlIC0gc2hpcCBjYW5ub3QgYmUgcGxhY2VkIHRoZXJlXG4gICAgfSBlbHNlIGlmIChfY2hlY2tQbGFjZW1lbnQoc2hpcCwgY29vcmRzLCBvcmllbnRhdGlvbikpIHtcbiAgICAgIHBsYWNlZFNoaXBzLnB1c2gocmVtYWluaW5nU2hpcHMuc3BsaWNlKHNoaXBJbmRleCwgMSlbMF0pXG4gICAgICBjb25zdCBzaGlwSW5kZXhlcyA9IF9maW5kU2hpcEluZGV4ZXMoXG4gICAgICAgIHNoaXBzW3NoaXBdLmhpdGJveGVzLmxlbmd0aCxcbiAgICAgICAgY29vcmRzLFxuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgKVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzW3NoaXBdLmhpdGJveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3NoaXBJbmRleGVzW2ldXSA9IHNoaXBzW3NoaXBdLmhpdGJveGVzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gc2hpcEluZGV4ZXNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2F0dGFja1JhbmRvbUNvb3JkKCkge1xuICAgIGNvbnN0IHZhbGlkQ29vcmRzID0gW11cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gYm9hcmQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmRbcHJvcF0gPT09IFwiXCIgfHxcbiAgICAgICAgKHR5cGVvZiBib2FyZFtwcm9wXSA9PT0gXCJvYmplY3RcIiAmJiBib2FyZFtwcm9wXS5pc0hpdCA9PT0gZmFsc2UpXG4gICAgICApIHtcbiAgICAgICAgdmFsaWRDb29yZHMucHVzaChwcm9wKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbVZhbGlkQ29vcmQgPVxuICAgICAgdmFsaWRDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRDb29yZHMubGVuZ3RoKV1cbiAgICByZXR1cm4gcmVjaWV2ZUF0dGFjayhyYW5kb21WYWxpZENvb3JkKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjaWV2ZUF0dGFjayhjb29yZHMpIHtcbiAgICBpZiAoY29vcmRzID09PSBcInJhbmRvbVwiKSB7XG4gICAgICByZXR1cm4gX2F0dGFja1JhbmRvbUNvb3JkKClcbiAgICB9XG4gICAgLy8gaGl0IDEsIG1pc3MgMCwgYWxyZWFkeSBoaXQgLTFcbiAgICBpZiAodHlwZW9mIGJvYXJkW2Nvb3Jkc10gPT09IFwib2JqZWN0XCIgJiYgIWJvYXJkW2Nvb3Jkc10uaXNIaXQpIHtcbiAgICAgIGJvYXJkW2Nvb3Jkc10uaGl0KClcbiAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIGlmIChib2FyZFtjb29yZHNdID09PSBcIlwiKSB7XG4gICAgICBib2FyZFtjb29yZHNdID0gXCJtaXNzXCJcbiAgICAgIHJldHVybiAwXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRbY29vcmRzXSA9PT0gXCJvYmplY3RcIiAmJiBib2FyZFtjb29yZHNdLmlzSGl0KSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2UgaWYgKGJvYXJkW2Nvb3Jkc10gPT09IFwibWlzc1wiKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgIGJvYXJkW2tleV0gPSBcIlwiXG4gICAgfVxuXG4gICAgc2hpcHMuY2FycmllciA9IFNoaXBGYWN0b3J5KDUpXG4gICAgc2hpcHMuYmF0dGxlc2hpcCA9IFNoaXBGYWN0b3J5KDQpXG4gICAgc2hpcHMuY3J1aXNlciA9IFNoaXBGYWN0b3J5KDMpXG4gICAgc2hpcHMuc3VibWFyaW5lID0gU2hpcEZhY3RvcnkoMylcbiAgICBzaGlwcy5kZXN0cm95ZXIgPSBTaGlwRmFjdG9yeSgyKVxuXG4gICAgcmVtYWluaW5nU2hpcHMgPSBPYmplY3Qua2V5cyhzaGlwcylcbiAgICBwbGFjZWRTaGlwcyA9IFtdXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgY29uc3QgbmV3Qm9hcmQgPSB7fVxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gYm9hcmQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZFtrZXldID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgbmV3Qm9hcmRba2V5XSA9IGJvYXJkW2tleV1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9hcmRba2V5XSA9PT0gXCJvYmplY3RcIiAmJiAhYm9hcmRba2V5XS5pc0hpdCkge1xuICAgICAgICAgIG5ld0JvYXJkW2tleV0gPSBcIlwiXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvYXJkW2tleV0gPT09IFwib2JqZWN0XCIgJiYgYm9hcmRba2V5XS5pc0hpdCkge1xuICAgICAgICAgIG5ld0JvYXJkW2tleV0gPSBcImhpdFwiXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld0JvYXJkXG4gICAgfSxcbiAgICBnZXQgcmVtYWluaW5nU2hpcHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnJlbWFpbmluZ1NoaXBzXVxuICAgIH0sXG4gICAgZ2V0IGFsbFNoaXBzU3VuaygpIHtcbiAgICAgIGlmIChcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhzaGlwcykuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzaGlwLmhpdGJveGVzKS5ldmVyeShcbiAgICAgICAgICAgIChoaXRib3gpID0+IGhpdGJveC5pc0hpdCA9PT0gdHJ1ZVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICByZXNldCxcbiAgfSlcbn1cbiIsImNvbnN0IERPTUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcbiAgY29uc3QgcGxheWVyMVNoaXBDb29yZHMgPSBbXVxuICBjb25zdCBwbGF5ZXIyU2hpcENvb3JkcyA9IFtdXG5cbiAgZnVuY3Rpb24gcmVuZGVyV2luUGFnZSh3aW5uZXIpIHtcbiAgICBib2R5LmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgd2luTWVzc2FnZVxuICAgIGlmICh3aW5uZXIubmFtZSA9PT0gXCJZb3VcIikge1xuICAgICAgd2luTWVzc2FnZSA9IFwiWW91IHdpbiFcIlxuICAgIH0gZWxzZSB7XG4gICAgICB3aW5NZXNzYWdlID0gYCR7d2lubmVyLm5hbWV9IHdpbnMhYFxuICAgIH1cblxuICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgcGxheUFnYWluLmNsYXNzTGlzdC5hZGQoXCJwbGF5LWFnYWluXCIpXG4gICAgYm9keS5hcHBlbmRDaGlsZChwbGF5QWdhaW4pXG4gICAgY29uc3Qgd2lubmVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIHdpbm5lckVsZW0uY2xhc3NMaXN0LmFkZChcIndpbm5lclwiKVxuICAgIHdpbm5lckVsZW0udGV4dENvbnRlbnQgPSB3aW5NZXNzYWdlXG4gICAgY29uc3QgcGxheUFnYWluQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHBsYXlBZ2FpbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiXG4gICAgcGxheUFnYWluQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZ2FpbkJ0blwiKVxuICAgIHBsYXlBZ2Fpbi5hcHBlbmQod2lubmVyRWxlbSwgcGxheUFnYWluQnV0dG9uKVxuXG4gICAgcGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5R2FtZUFnYWluKVxuICB9XG5cbiAgZnVuY3Rpb24gcGxheUdhbWVBZ2FpbigpIHtcbiAgICBwbGF5ZXIxU2hpcENvb3Jkcy5sZW5ndGggPSAwXG4gICAgcGxheWVyMlNoaXBDb29yZHMubGVuZ3RoID0gMFxuXG4gICAgZmlyZUN1c3RvbUV2ZW50KFwic3RhcnRHYW1lXCIsIHt9KVxuICB9XG5cbiAgLy8gbmVlZHMgYW4gZXhwZWN0IHBsYXllciBkZXRhaWw/XG4gIGZ1bmN0aW9uIGZpcmVDdXN0b21FdmVudChuYW1lLCBkZXRhaWxPYmosIGNhbGxiYWNrRnVuYykge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgZGV0YWlsOiBkZXRhaWxPYmosXG4gICAgfSlcblxuICAgIGlmIChjYWxsYmFja0Z1bmMpIHtcbiAgICAgIGV2dC5kZXRhaWwuY2FsbGJhY2tGdW5jID0gY2FsbGJhY2tGdW5jXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gIH1cblxuICBmdW5jdGlvbiB3YWl0T25lU2Vjb25kKGNhbGxiYWNrRnVuYywgLi4uYXJncykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2tGdW5jKC4uLmFyZ3MpLCAxMDAwKVxuICB9XG5cbiAgZnVuY3Rpb24gcGFzc0RldmljZUFuZExvYWRQYWdlKHBhZ2VDYWxsYmFjaywgLi4ucGFnZUFyZ3MpIHtcbiAgICAvLyBwYWludCBzY3JlZW5cbiAgICBsZXQgY291bnQgPSAzXG4gICAgYm9keS5pbm5lckhUTUwgPSBgYFxuICAgIGNvbnN0IGNvdW50RG93blNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIGNvdW50RG93blNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvdW50ZG93blwiKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY291bnREb3duU2VjdGlvbilcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiUGxlYXNlIFBhc3MgVGhlIERldmljZVwiXG5cbiAgICBjb25zdCBjb3VudGRvd25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb3VudGRvd25FbGVtLmlkID0gXCJjb3VudGRvd25cIlxuICAgIGNvdW50ZG93bkVsZW0udGV4dENvbnRlbnQgPSBjb3VudFxuXG4gICAgY291bnREb3duU2VjdGlvbi5hcHBlbmQoaGVhZGVyLCBjb3VudGRvd25FbGVtKVxuXG4gICAgLy8gY291bnRkb3duIHNjcmVlblxuICAgIGNvbnN0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY291bnQgPT09IDEpIHtcbiAgICAgICAgcGFnZUNhbGxiYWNrKC4uLnBhZ2VBcmdzKVxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudGRvd25FbGVtLnRleHRDb250ZW50ID0gLS1jb3VudFxuICAgICAgfVxuICAgIH0sIDEwMDApXG4gICAgLy8gbG9hZCBuZXcgcGFnZSBhdCBlbmQgb2YgY291bnRkb3duXG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXJQbGF5ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgY29uc3QgY29tcHV0ZXJDb29yZCA9IGNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICAgIHBsYXllcjJTaGlwQ29vcmRzLnB1c2goY29tcHV0ZXJDb29yZClcbiAgICB9XG4gIH1cblxuICAvLyB0aGlzIGlzIHJlYWxseSBncm9zcy5cbiAgZnVuY3Rpb24gZGVjaWRlUGFnZVRvUmVuZGVyKGN1cnJlbnRQbGF5ZXIsIG5leHRQbGF5ZXIpIHtcbiAgICBpZiAoY3VycmVudFBsYXllci5nYW1lYm9hcmQucmVtYWluaW5nU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIuaXNDb21wdXRlcikge1xuICAgICAgICBwbGFjZUNvbXB1dGVyU2hpcHMoY3VycmVudFBsYXllcilcbiAgICAgICAgZmlyZUN1c3RvbUV2ZW50KFwiR2FtZS5zd2l0Y2hQbGF5ZXJcIiwge30sIGRlY2lkZVBhZ2VUb1JlbmRlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXh0UGxheWVyLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgICByZW5kZXJTaGlwUGFnZShjdXJyZW50UGxheWVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhc3NEZXZpY2VBbmRMb2FkUGFnZShyZW5kZXJTaGlwUGFnZSwgY3VycmVudFBsYXllcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKSB7XG4gICAgICByZW5kZXJXaW5QYWdlKG5leHRQbGF5ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50UGxheWVyLmlzQ29tcHV0ZXIpIHtcbiAgICAgICAgbmV4dFBsYXllci5nYW1lYm9hcmQucmVjaWV2ZUF0dGFjayhcInJhbmRvbVwiKVxuICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXCJHYW1lLnN3aXRjaFBsYXllclwiLCB7fSwgZGVjaWRlUGFnZVRvUmVuZGVyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5leHRQbGF5ZXIuaXNDb21wdXRlcikge1xuICAgICAgICAgIHJlbmRlckhpdFBhZ2UoY3VycmVudFBsYXllciwgbmV4dFBsYXllcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXNzRGV2aWNlQW5kTG9hZFBhZ2UocmVuZGVySGl0UGFnZSwgY3VycmVudFBsYXllciwgbmV4dFBsYXllcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdGFydEdhbWVcIiwgcmVuZGVyUGxheWVyUGFnZSlcbiAgZnVuY3Rpb24gcmVuZGVyUGxheWVyUGFnZSgpIHtcbiAgICBib2R5LmlubmVySFRNTCA9IGBcbiAgICA8aGVhZGVyPlxuICAgICAgPGgxPldlbGNvbWUgdG8gQmF0dGxlU2hpcDwvaDE+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8Zm9ybT5cbiAgICAgIDxsYWJlbCBmb3I9J3BsYXllcjEnIGhpZGRlbj5QbGF5ZXIxPC9sYWJlbD5cbiAgICAgIDxpbnB1dCBpZD0ncGxheWVyMScgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1BsYXllciAxJz5cblxuICAgICAgPGxhYmVsIGZvcj0ncGxheWVyMicgaGlkZGVuPlBsYXllcjI8L2xhYmVsPlxuICAgICAgPGlucHV0IGlkPSdwbGF5ZXIyJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nUGxheWVyIDInPlxuXG4gICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPlBsYXkgQWdhaW5zdCBDb21wdXRlcjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICBcbiAgICBgXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIilcbiAgICBjb25zdCBpbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpXVxuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChpbnB1dHMuZXZlcnkoKGlucHV0KSA9PiBpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSkge1xuICAgICAgICBmaXJlQ3VzdG9tRXZlbnQoXG4gICAgICAgICAgXCJHYW1lLmluaXRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwbGF5ZXIxOiBbaW5wdXRzWzBdLnZhbHVlLCAxXSxcbiAgICAgICAgICAgIC8vIHBsYXllcjI6IFtpbnB1dHNbMV0udmFsdWUsIDIsIHRydWVdIC8vdHJ1ZSBjYW4gYmUgcGFzc2VkIHRvIG1ha2UgYSBjb21wdXRlciBwbGF5ZXJcbiAgICAgICAgICAgIHBsYXllcjI6IFtpbnB1dHNbMV0udmFsdWUsIDJdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVuZGVyU2hpcFBhZ2VcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ICE9PSBcIlBsYXkgQWdhaW5zdCBDb21wdXRlclwiKSByZXR1cm5cbiAgICAgIGZpcmVDdXN0b21FdmVudChcbiAgICAgICAgXCJHYW1lLmluaXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHBsYXllcjE6IFtcIllvdVwiLCAxLCBmYWxzZV0sXG4gICAgICAgICAgLy8gcGxheWVyMjogW2lucHV0c1sxXS52YWx1ZSwgMiwgdHJ1ZV0gLy90cnVlIGNhbiBiZSBwYXNzZWQgdG8gbWFrZSBhIGNvbXB1dGVyIHBsYXllclxuICAgICAgICAgIHBsYXllcjI6IFtcIkNvbXB1dGVyXCIsIDIsIHRydWVdLFxuICAgICAgICB9LFxuICAgICAgICByZW5kZXJTaGlwUGFnZVxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJTaGlwUGFnZShwbGF5ZXIpIHtcbiAgICBib2R5LmlubmVySFRNTCA9IGBcbiAgICA8aGVhZGVyPlxuICAgICAgPGgxPkJhdHRsZXNoaXA8L2gxPlxuICAgIDwvaGVhZGVyPlxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwbGF5LWFyZWFcIj5cbiAgICAgIDxkaXYgaWQ9XCJib2FyZFwiPlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkEzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkczXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkozXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaWQ9XCJzaGlwc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLXNoaXA9J2NhcnJpZXInPmNhcnJpZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNoaXBcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1zaGlwPSdiYXR0bGVzaGlwJz5iYXR0bGVzaGlwPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIGRhdGEtc2hpcD0nY3J1aXNlcic+Y3J1aXNlcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcFwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLXNoaXA9J3N1Ym1hcmluZSc+c3VibWFyaW5lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIGRhdGEtc2hpcD0nZGVzdHJveWVyJz5kZXN0cm95ZXI8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9yaWVudGF0aW9uLXRvZ2dsZVwiPmhvcml6b250YWw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gaWQ9J2ZpbmlzaC1idXR0b24nPkZpbmlzaDwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5gXG5cbiAgICBwbGFjZVNoaXBMaXN0ZW5lcnMocGxheWVyKVxuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlT3JpZW50YXRpb25UZXh0KGUpIHtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKVxuXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcInZlcnRpY2FsXCJcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcInZlcnRpY2FsXCIpKVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcImhvcml6b250YWxcIlxuICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4gc2hpcC5jbGFzc0xpc3QudG9nZ2xlKFwidmVydGljYWxcIikpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHVybldoaXRlQ2VsbHNHcmF5KGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIikpIHJldHVyblxuICAgIGlmIChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwiXCIpIHtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmF5XCJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0dXJuR3JheUNlbGxzV2hpdGUoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZFwiKSkgcmV0dXJuXG4gICAgaWYgKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gXCJsaWdodGdyYXlcIikge1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXNoQ2VsbFJlZChlKSB7XG4gICAgbGV0IGN1cnJlbnRDb2xvciA9IGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgIGlmIChjdXJyZW50Q29sb3IgPT09IFwibGlnaHRncmF5XCIpIGN1cnJlbnRDb2xvciA9IFwiXCJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Y29yYWxcIlxuICAgIHNldFRpbWVvdXQoKCkgPT4gKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGN1cnJlbnRDb2xvciksIDI1MClcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcExpc3RlbmVycyhwbGF5ZXIpIHtcbiAgICBsZXQgZHJhZ2dlZFxuICAgIGxldCB0b3VjaExvY2F0aW9uXG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NoaXBzXCIpXG4gICAgY29uc3Qgc2hpcEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkXCIpXG4gICAgY29uc3Qgb3JpZW50YXRpb25Ub2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9yaWVudGF0aW9uLXRvZ2dsZVwiKVxuICAgIGNvbnN0IGZpbmlzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmluaXNoLWJ1dHRvblwiKVxuICAgIC8vIGNvbnN0IGFib3J0ID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgICBvcmllbnRhdGlvblRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlT3JpZW50YXRpb25UZXh0KVxuICAgIHNoaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgKGUpID0+IChkcmFnZ2VkID0gZS50YXJnZXQpKVxuXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbnRlclwiLCB0dXJuV2hpdGVDZWxsc0dyYXkpXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB0dXJuR3JheUNlbGxzV2hpdGUpXG4gICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gYm9hcmQpIHJldHVyblxuICAgICAgY29uc3QgZGF0YUtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpXG4gICAgICBjb25zdCBzaGlwTmFtZSA9IGRyYWdnZWQudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25Ub2dnbGUudGV4dENvbnRlbnRcbiAgICAgIGNvbnN0IGNvb3Jkc1RvSGlnaGxpZ2h0ID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgIHNoaXBOYW1lLFxuICAgICAgICBkYXRhS2V5LFxuICAgICAgICBvcmllbnRhdGlvblxuICAgICAgKVxuXG4gICAgICBpZiAoY29vcmRzVG9IaWdobGlnaHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAocGxheWVyLnBsYXllck51bSA9PT0gMSkge1xuICAgICAgICAgIHBsYXllcjFTaGlwQ29vcmRzLnB1c2goY29vcmRzVG9IaWdobGlnaHQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyMlNoaXBDb29yZHMucHVzaChjb29yZHNUb0hpZ2hsaWdodClcbiAgICAgICAgfVxuXG4gICAgICAgIGhpZ2hsaWdodFNoaXBzR3JheShwbGF5ZXIpXG4gICAgICAgIGRyYWdnZWQucmVtb3ZlKClcbiAgICAgICAgLy8gcHVzaCB0byBlYWNoIHBsYXllcidzIHNoaXAgY29vcmRzLiBNYXggc2hpcHMgY29vcmRzID09PSA1XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbGFzaENlbGxSZWQoZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgc2hpcEVsZW1zLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZSkgPT4ge1xuICAgICAgICBkcmFnZ2VkID0gZS50YXJnZXRcbiAgICAgICAgdG91Y2hMb2NhdGlvbiA9IGUudGFyZ2V0VG91Y2hlc1swXVxuICAgICAgICBjb25zdCBhbGxDb29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvb3JkXCIpXG4gICAgICAgIGNvbnN0IGhvdmVyZWRFbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChcbiAgICAgICAgICB0b3VjaExvY2F0aW9uLnBhZ2VYLFxuICAgICAgICAgIHRvdWNoTG9jYXRpb24ucGFnZVlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChob3ZlcmVkRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJjb29yZFwiKSkge1xuICAgICAgICAgIGFsbENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvb3JkLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJncmF5XCIpXG4gICAgICAgICAgICAgIGNvb3JkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCJcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb2xvciA9IGhvdmVyZWRFbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvclxuXG4gICAgICAgICAgaWYgKG9yaWdpbmFsQ29sb3IgIT09IFwiZ3JheVwiKVxuICAgICAgICAgICAgaG92ZXJlZEVsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyYXlcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvb3JkLnN0eWxlLmJhY2tncm91bmRDb2xvciAhPT0gXCJncmF5XCIpXG4gICAgICAgICAgICAgIGNvb3JkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCJcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyb3BFbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChcbiAgICAgICAgICB0b3VjaExvY2F0aW9uLnBhZ2VYLFxuICAgICAgICAgIHRvdWNoTG9jYXRpb24ucGFnZVlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChkcm9wRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJjb29yZFwiKSkge1xuICAgICAgICAgIGNvbnN0IGRhdGFLZXkgPSBkcm9wRWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKVxuICAgICAgICAgIGNvbnN0IHNoaXBOYW1lID0gZHJhZ2dlZC50ZXh0Q29udGVudFxuICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25Ub2dnbGUudGV4dENvbnRlbnRcbiAgICAgICAgICBjb25zdCBjb29yZHNUb0hpZ2hsaWdodCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgICBkYXRhS2V5LFxuICAgICAgICAgICAgb3JpZW50YXRpb25cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoY29vcmRzVG9IaWdobGlnaHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHBsYXllci5wbGF5ZXJOdW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgcGxheWVyMVNoaXBDb29yZHMucHVzaChjb29yZHNUb0hpZ2hsaWdodClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBsYXllcjJTaGlwQ29vcmRzLnB1c2goY29vcmRzVG9IaWdobGlnaHQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZ2hsaWdodFNoaXBzR3JheShwbGF5ZXIpXG4gICAgICAgICAgICBkcmFnZ2VkLnJlbW92ZSgpXG4gICAgICAgICAgICAvLyBwdXNoIHRvIGVhY2ggcGxheWVyJ3Mgc2hpcCBjb29yZHMuIE1heCBzaGlwcyBjb29yZHMgPT09IDVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxhc2hDZWxsUmVkKHsgdGFyZ2V0OiBkcm9wRWxlbSB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5yZW1haW5pbmdTaGlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gc3dpdGNocGxheWVyIGV2ZW50XG4gICAgICAgIGZpcmVDdXN0b21FdmVudChcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHt9LCBkZWNpZGVQYWdlVG9SZW5kZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckhpdFBhZ2UoY3VycmVudFBsYXllciwgbmV4dFBsYXllcikge1xuICAgIGJvZHkuaW5uZXJIVE1MID0gYFxuICAgIDxzZWN0aW9uIGNsYXNzPSdib2FyZC1oZWFkaW5ncyc+XG4gICAgICA8aDE+WW91ciBCb2FyZDwvaDE+XG4gICAgICA8aDE+RW5lbXkgQm9hcmQ8L2gxPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGlkPVwicGxheS1hcmVhXCI+XG4gICAgICA8ZGl2IGlkPVwiYm9hcmRcIj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQTVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkE3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQThcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJBOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkExMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkIzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJCOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkI5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQjEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkMyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkM4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiQzlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJDMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJENlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQ3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRDhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJEOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkQxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkUzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFNVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJFOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkU5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRTEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkYyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkY4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRjlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJGMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkc3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiRzhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJHOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkcxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDFcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIMlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkgzXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDRcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJINVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg2XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDdcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJIOFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkg5XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSDEwXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkkyXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTNcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJNFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk1XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTZcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJN1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkk4XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSTlcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJJMTBcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxXCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjJcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKM1wiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko0XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjVcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKNlwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIko3XCIgY2xhc3M9XCJjb29yZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGRhdGEta2V5PVwiSjhcIiBjbGFzcz1cImNvb3JkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1rZXk9XCJKOVwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBkYXRhLWtleT1cIkoxMFwiIGNsYXNzPVwiY29vcmRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5gXG5cbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIilcbiAgICBjb25zdCBoaXRCb2FyZCA9IGJvYXJkLmNsb25lTm9kZSh0cnVlKVxuICAgIGhpdEJvYXJkLmlkID0gXCJoaXQtYm9hcmRcIlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheS1hcmVhXCIpLmFwcGVuZENoaWxkKGhpdEJvYXJkKVxuXG4gICAgaGlnaGxpZ2h0U2hpcHNHcmF5KGN1cnJlbnRQbGF5ZXIpXG4gICAgaGlnaGxpZ2h0SGl0c0FuZE1pc3NlcyhjdXJyZW50UGxheWVyLCBib2FyZClcbiAgICBoaWdobGlnaHRIaXRzQW5kTWlzc2VzKG5leHRQbGF5ZXIsIGhpdEJvYXJkKVxuICAgIHBsYWNlSGl0TGlzdGVuZXJzKG5leHRQbGF5ZXIsIGhpdEJvYXJkKVxuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0SGl0c0FuZE1pc3NlcyhwbGF5ZXIsIGRvbWJvYXJkKSB7XG4gICAgY29uc3QgYm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkXG5cbiAgICBmb3IgKGNvbnN0IGNvb3JkIGluIGJvYXJkKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9tYm9hcmQucXVlcnlTZWxlY3RvcihgLmNvb3JkW2RhdGEta2V5PScke2Nvb3JkfSddYClcbiAgICAgIGlmIChib2FyZFtjb29yZF0gPT09IFwibWlzc1wiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrcmVkXCJcbiAgICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRdID09PSBcImhpdFwiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJkYXJrZ3JlZW5cIlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodFNoaXBzR3JheShwbGF5ZXIpIHtcbiAgICBpZiAocGxheWVyLnBsYXllck51bSA9PT0gMSkge1xuICAgICAgcGxheWVyMVNoaXBDb29yZHMuZm9yRWFjaCgoc2hpcENvb3JkcykgPT4ge1xuICAgICAgICBzaGlwQ29vcmRzLmZvckVhY2goKGhpdGJveENvb3JkKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNvb3JkW2RhdGEta2V5PScke2hpdGJveENvb3JkfSddYFxuICAgICAgICAgIClcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXIyU2hpcENvb3Jkcy5mb3JFYWNoKChzaGlwQ29vcmRzKSA9PiB7XG4gICAgICAgIHNoaXBDb29yZHMuZm9yRWFjaCgoaGl0Ym94Q29vcmQpID0+IHtcbiAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuY29vcmRbZGF0YS1rZXk9JyR7aGl0Ym94Q29vcmR9J11gXG4gICAgICAgICAgKVxuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCJcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VIaXRMaXN0ZW5lcnMobmV4dFBsYXllciwgaGl0Qm9hcmQpIHtcbiAgICBjb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbmlzaC1idXR0b25cIilcbiAgICBjb25zdCBoaXRBYm9ydCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgIGxldCBoaXRTdGF0dXNcblxuICAgIC8vIGFsbG93cyBhdHRhY2tpbmcgYW5kIGNvbG9ycyBjZWxscyByZWQgKG1pc3MpIG9yIGdyZWVuIChoaXQpXG5cbiAgICBoaXRCb2FyZC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YUtleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpXG4gICAgICAgIGlmIChkYXRhS2V5ID09PSBudWxsKSByZXR1cm5cblxuICAgICAgICBoaXRTdGF0dXMgPSBuZXh0UGxheWVyLmdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKGRhdGFLZXkpXG4gICAgICAgIGlmIChoaXRTdGF0dXMgPT09IDApIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImRhcmtyZWRcIlxuICAgICAgICAgIGhpdEFib3J0LmFib3J0KClcbiAgICAgICAgICB3YWl0T25lU2Vjb25kKFxuICAgICAgICAgICAgZmlyZUN1c3RvbUV2ZW50LFxuICAgICAgICAgICAgXCJHYW1lLnN3aXRjaFBsYXllclwiLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBkZWNpZGVQYWdlVG9SZW5kZXJcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSBpZiAoaGl0U3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgaGl0QWJvcnQuYWJvcnQoKVxuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZGFya2dyZWVuXCJcbiAgICAgICAgICB3YWl0T25lU2Vjb25kKFxuICAgICAgICAgICAgZmlyZUN1c3RvbUV2ZW50LFxuICAgICAgICAgICAgXCJHYW1lLnN3aXRjaFBsYXllclwiLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBkZWNpZGVQYWdlVG9SZW5kZXJcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmxhc2hDZWxsUmVkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbDogaGl0QWJvcnQuc2lnbmFsIH1cbiAgICApXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgRE9NQ29udHJvbGxlclxuIiwiaW1wb3J0IFBsYXllckZhY3RvcnkgZnJvbSBcIi4vUGxheWVyRmFjdG9yeVwiXG5cbmNvbnN0IEdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcGxheWVyMVxuICBsZXQgcGxheWVyMlxuICBsZXQgY3VycmVudFBsYXllclxuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IG5ldyBDdXN0b21FdmVudChcInN0YXJ0R2FtZVwiLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgZGV0YWlsOiB7fSxcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChzdGFydEdhbWUpXG4gICAgLy8gRE9NQ29udHJvbGxlci5yZW5kZXJQbGF5ZXJwYWdlXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiR2FtZS5pbml0XCIsIGluaXQpXG4gIGZ1bmN0aW9uIGluaXQoZSkge1xuICAgIHBsYXllcjEgPSBQbGF5ZXJGYWN0b3J5KC4uLmUuZGV0YWlsLnBsYXllcjEpXG4gICAgcGxheWVyMiA9IFBsYXllckZhY3RvcnkoLi4uZS5kZXRhaWwucGxheWVyMilcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIxKVxuICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgaWYgKGUuZGV0YWlsLmNhbGxiYWNrRnVuYykgZS5kZXRhaWwuY2FsbGJhY2tGdW5jKGN1cnJlbnRQbGF5ZXIpXG4gICAgLy8gRE9NQ29udHJvbGxlci5yZW5kZXJTaGlwUGFnZVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkdhbWUuc3dpdGNoUGxheWVyXCIsIHN3aXRjaFBsYXllcilcbiAgZnVuY3Rpb24gc3dpdGNoUGxheWVyKGUpIHtcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMSkge1xuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllcjJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjIpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgfVxuXG4gICAgaWYgKGUuZGV0YWlsLmNhbGxiYWNrRnVuYykge1xuICAgICAgbGV0IG5leHRQbGF5ZXJcblxuICAgICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllcjEpIHtcbiAgICAgICAgbmV4dFBsYXllciA9IHBsYXllcjJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFBsYXllciA9PT0gcGxheWVyMikge1xuICAgICAgICBuZXh0UGxheWVyID0gcGxheWVyMVxuICAgICAgfVxuXG4gICAgICBlLmRldGFpbC5jYWxsYmFja0Z1bmMoY3VycmVudFBsYXllciwgbmV4dFBsYXllcilcbiAgICB9XG5cbiAgICAvLyBET01Db250cm9sbGVyLnJlbmRlclNoaXBQYWdlLCBET01Db250cm9sbGVyLnJlbmRlckhpdFBhZ2VcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQsXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVxuIiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9Cb2FyZEZhY3RvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5ZXJGYWN0b3J5KG5hbWUsIHBsYXllck51bSwgaXNDb21wdXRlciA9IGZhbHNlKSB7XG4gIGlmIChcbiAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiBpc0NvbXB1dGVyICE9PSBcImJvb2xlYW5cIiB8fFxuICAgIChwbGF5ZXJOdW0gIT09IDEgJiYgcGxheWVyTnVtICE9PSAyKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGdhbWVib2FyZCA9IEJvYXJkRmFjdG9yeSgpXG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoe1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWVcbiAgICB9LFxuICAgIGdldCBwbGF5ZXJOdW0oKSB7XG4gICAgICByZXR1cm4gcGxheWVyTnVtXG4gICAgfSxcbiAgICBnZXQgaXNDb21wdXRlcigpIHtcbiAgICAgIHJldHVybiBpc0NvbXB1dGVyXG4gICAgfSxcbiAgICBnZXQgZ2FtZWJvYXJkKCkge1xuICAgICAgcmV0dXJuIGdhbWVib2FyZFxuICAgIH0sXG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwRmFjdG9yeShsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA8IDIgfHwgbGVuZ3RoID4gNSkgcmV0dXJuXG5cbiAgY29uc3QgaGl0Ym94ZXMgPSBfY3JlYXRlSGl0Ym94ZXMoKVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVIaXRib3hlcygpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgICAgaGl0OiAoKSA9PiBoaXQoaSksXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpdChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSBoaXRib3hlcy5sZW5ndGggfHwgaW5kZXggPCAwKSByZXR1cm5cbiAgICBoaXRib3hlc1tpbmRleF0uaXNIaXQgPSB0cnVlXG4gICAgcmV0dXJuIGhpdGJveGVzLm1hcCgoaGl0Ym94KSA9PiB7XG4gICAgICByZXR1cm4geyAuLi5oaXRib3ggfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZ2V0IGhpdGJveGVzKCkge1xuICAgICAgcmV0dXJuIGhpdGJveGVzLm1hcCgoaGl0Ym94KSA9PiAoe1xuICAgICAgICBnZXQgaXNIaXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGhpdGJveC5pc0hpdFxuICAgICAgICB9LFxuICAgICAgICBoaXQ6IGhpdGJveC5oaXQsXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICBpZiAoaGl0Ym94ZXMuZXZlcnkoKGhpdGJveCkgPT4gaGl0Ym94LmlzSGl0ID09PSB0cnVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgfSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vbW9kdWxlcy9HYW1lLmpzXCJcbmltcG9ydCBET01Db250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvRE9NQ29udHJvbGxlclwiXG5cbkdhbWUuc3RhcnQoKVxuIl0sIm5hbWVzIjpbIlNoaXBGYWN0b3J5IiwiQm9hcmRGYWN0b3J5Iiwic2hpcHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJyZW1haW5pbmdTaGlwcyIsIk9iamVjdCIsImtleXMiLCJwbGFjZWRTaGlwcyIsImJvYXJkIiwiQTEiLCJBMiIsIkEzIiwiQTQiLCJBNSIsIkE2IiwiQTciLCJBOCIsIkE5IiwiQTEwIiwiQjEiLCJCMiIsIkIzIiwiQjQiLCJCNSIsIkI2IiwiQjciLCJCOCIsIkI5IiwiQjEwIiwiQzEiLCJDMiIsIkMzIiwiQzQiLCJDNSIsIkM2IiwiQzciLCJDOCIsIkM5IiwiQzEwIiwiRDEiLCJEMiIsIkQzIiwiRDQiLCJENSIsIkQ2IiwiRDciLCJEOCIsIkQ5IiwiRDEwIiwiRTEiLCJFMiIsIkUzIiwiRTQiLCJFNSIsIkU2IiwiRTciLCJFOCIsIkU5IiwiRTEwIiwiRjEiLCJGMiIsIkYzIiwiRjQiLCJGNSIsIkY2IiwiRjciLCJGOCIsIkY5IiwiRjEwIiwiRzEiLCJHMiIsIkczIiwiRzQiLCJHNSIsIkc2IiwiRzciLCJHOCIsIkc5IiwiRzEwIiwiSDEiLCJIMiIsIkgzIiwiSDQiLCJINSIsIkg2IiwiSDciLCJIOCIsIkg5IiwiSDEwIiwiSTEiLCJJMiIsIkkzIiwiSTQiLCJJNSIsIkk2IiwiSTciLCJJOCIsIkk5IiwiSTEwIiwiSjEiLCJKMiIsIkozIiwiSjQiLCJKNSIsIko2IiwiSjciLCJKOCIsIko5IiwiSjEwIiwiX2ZpbmRJbnZhbGlkQ29vcmRzIiwic2hpcExlbmd0aCIsIm9yaWVudGF0aW9uIiwiYmFkSW5kZXhlcyIsImV4Y2x1c2lvbnMiLCJwdXNoIiwiaSIsImxlbmd0aCIsImV4Y2x1c2lvbiIsImtleSIsImVuZHNXaXRoIiwic3RhcnRzV2l0aCIsImluY2x1ZGVzIiwiX2ZpbmRTaGlwSW5kZXhlcyIsImdvb2RDb29yZHMiLCJsZXR0ZXJzIiwiY2hhciIsImNoYXJBdCIsIm51bSIsIk51bWJlciIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwic2hpcEFyZWEiLCJpbmRleE9mIiwiX2NvbGxpc2lvbkNoZWNrIiwiaXNFbXB0eSIsImNvb3JkcyIsImV2ZXJ5IiwiX2NoZWNrUGxhY2VtZW50Iiwic2hpcCIsImhpdGJveGVzIiwidmFsaWRDb29yZHMiLCJfZmluZFZhbGlkQ29vcmRzIiwiaW52YWxpZEFycmF5IiwidmFsaWRNb3ZlcyIsIl9wbGFjZVJhbmRvbSIsIm9yaWVudGF0aW9ucyIsInJhbmRvbU9yaWVudGF0aW9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tU2hpcCIsInJhbmRvbVZhbGlkQ29vcmRzIiwicGxhY2VTaGlwIiwic29tZSIsImFyZyIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiLCJzaGlwSW5kZXgiLCJzcGxpY2UiLCJzaGlwSW5kZXhlcyIsIl9hdHRhY2tSYW5kb21Db29yZCIsInByb3AiLCJpc0hpdCIsInJhbmRvbVZhbGlkQ29vcmQiLCJyZWNpZXZlQXR0YWNrIiwiaGl0IiwicmVzZXQiLCJmcmVlemUiLCJuZXdCb2FyZCIsImFsbFNoaXBzU3VuayIsInZhbHVlcyIsImhpdGJveCIsIkRPTUNvbnRyb2xsZXIiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyMVNoaXBDb29yZHMiLCJwbGF5ZXIyU2hpcENvb3JkcyIsInJlbmRlcldpblBhZ2UiLCJ3aW5uZXIiLCJpbm5lckhUTUwiLCJ3aW5NZXNzYWdlIiwibmFtZSIsInBsYXlBZ2FpbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsIndpbm5lckVsZW0iLCJ0ZXh0Q29udGVudCIsInBsYXlBZ2FpbkJ1dHRvbiIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5R2FtZUFnYWluIiwiZmlyZUN1c3RvbUV2ZW50IiwiZGV0YWlsT2JqIiwiY2FsbGJhY2tGdW5jIiwiZXZ0IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIndhaXRPbmVTZWNvbmQiLCJhcmdzIiwic2V0VGltZW91dCIsInBhc3NEZXZpY2VBbmRMb2FkUGFnZSIsInBhZ2VDYWxsYmFjayIsInBhZ2VBcmdzIiwiY291bnQiLCJjb3VudERvd25TZWN0aW9uIiwiaGVhZGVyIiwiY291bnRkb3duRWxlbSIsImlkIiwiaW50ZXJ2YWxJRCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInBsYWNlQ29tcHV0ZXJTaGlwcyIsImNvbXB1dGVyUGxheWVyIiwiY29tcHV0ZXJDb29yZCIsImdhbWVib2FyZCIsImRlY2lkZVBhZ2VUb1JlbmRlciIsImN1cnJlbnRQbGF5ZXIiLCJuZXh0UGxheWVyIiwiaXNDb21wdXRlciIsInJlbmRlclNoaXBQYWdlIiwicmVuZGVySGl0UGFnZSIsInJlbmRlclBsYXllclBhZ2UiLCJmb3JtIiwiaW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJwbGF5ZXIxIiwicGxheWVyMiIsInRhcmdldCIsInBsYXllciIsInBsYWNlU2hpcExpc3RlbmVycyIsImNoYW5nZU9yaWVudGF0aW9uVGV4dCIsImZvckVhY2giLCJ0b2dnbGUiLCJ0dXJuV2hpdGVDZWxsc0dyYXkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInR1cm5HcmF5Q2VsbHNXaGl0ZSIsImZsYXNoQ2VsbFJlZCIsImN1cnJlbnRDb2xvciIsImRyYWdnZWQiLCJ0b3VjaExvY2F0aW9uIiwic2hpcEVsZW1zIiwib3JpZW50YXRpb25Ub2dnbGUiLCJmaW5pc2hCdXR0b24iLCJkYXRhS2V5IiwiZ2V0QXR0cmlidXRlIiwic2hpcE5hbWUiLCJjb29yZHNUb0hpZ2hsaWdodCIsInBsYXllck51bSIsImhpZ2hsaWdodFNoaXBzR3JheSIsInJlbW92ZSIsInRhcmdldFRvdWNoZXMiLCJhbGxDb29yZHMiLCJob3ZlcmVkRWxlbSIsImVsZW1lbnRGcm9tUG9pbnQiLCJwYWdlWCIsInBhZ2VZIiwiY29udGFpbnMiLCJjb29yZCIsIm9yaWdpbmFsQ29sb3IiLCJkcm9wRWxlbSIsImhpdEJvYXJkIiwiY2xvbmVOb2RlIiwiaGlnaGxpZ2h0SGl0c0FuZE1pc3NlcyIsInBsYWNlSGl0TGlzdGVuZXJzIiwiZG9tYm9hcmQiLCJjZWxsIiwic2hpcENvb3JkcyIsImhpdGJveENvb3JkIiwiaGl0QWJvcnQiLCJBYm9ydENvbnRyb2xsZXIiLCJoaXRTdGF0dXMiLCJhYm9ydCIsInNpZ25hbCIsIlBsYXllckZhY3RvcnkiLCJHYW1lIiwic3RhcnQiLCJzdGFydEdhbWUiLCJpbml0IiwiY29uc29sZSIsImxvZyIsInN3aXRjaFBsYXllciIsIl9jcmVhdGVIaXRib3hlcyIsImFycmF5IiwiaW5kZXgiLCJtYXAiLCJpc1N1bmsiXSwic291cmNlUm9vdCI6IiJ9