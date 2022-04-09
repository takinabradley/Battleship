const DOMController = (function () {
  const body = document.querySelector("body")
  const player1ShipCoords = []
  const player2ShipCoords = []

  function renderWinPage(winner) {
    body.innerHTML = ""
    let winMessage
    if (winner.name === "You") {
      winMessage = "You win!"
    } else {
      winMessage = `${winner.name} wins!`
    }

    const playAgain = document.createElement("section")
    playAgain.classList.add("play-again")
    body.appendChild(playAgain)
    const winnerElem = document.createElement("h2")
    winnerElem.classList.add("winner")
    winnerElem.textContent = winMessage
    const playAgainButton = document.createElement("button")
    playAgainButton.textContent = "Play Again"
    playAgainButton.classList.add("againBtn")
    playAgain.append(winnerElem, playAgainButton)

    playAgainButton.addEventListener("click", playGameAgain)
  }

  function playGameAgain() {
    player1ShipCoords.length = 0
    player2ShipCoords.length = 0

    fireCustomEvent("startGame", {})
  }

  // needs an expect player detail?
  function fireCustomEvent(name, detailObj, callbackFunc) {
    const evt = new CustomEvent(name, {
      bubbles: true,
      detail: detailObj,
    })

    if (callbackFunc) {
      evt.detail.callbackFunc = callbackFunc
    }

    document.dispatchEvent(evt)
  }

  function waitOneSecond(callbackFunc, ...args) {
    setTimeout(() => callbackFunc(...args), 1000)
  }

  function passDeviceAndLoadPage(pageCallback, ...pageArgs) {
    // paint screen
    let count = 3
    body.innerHTML = ``
    const countDownSection = document.createElement("section")
    countDownSection.classList.add("countdown")
    body.appendChild(countDownSection)

    const header = document.createElement("h1")
    header.textContent = "Please Pass The Device"

    const countdownElem = document.createElement("p")
    countdownElem.id = "countdown"
    countdownElem.textContent = count

    countDownSection.append(header, countdownElem)

    // countdown screen
    const intervalID = setInterval(() => {
      if (count === 1) {
        pageCallback(...pageArgs)
        clearInterval(intervalID)
      } else {
        countdownElem.textContent = --count
      }
    }, 1000)
    // load new page at end of countdown
  }

  function placeComputerShips(computerPlayer) {
    for (let i = 0; i < 5; i++) {
      const computerCoord = computerPlayer.gameboard.placeShip(
        null,
        null,
        null,
        true
      )
      player2ShipCoords.push(computerCoord)
    }
  }

  // this is really gross.
  function decidePageToRender(currentPlayer, nextPlayer) {
    if (currentPlayer.gameboard.remainingShips.length > 0) {
      if (currentPlayer.isComputer) {
        placeComputerShips(currentPlayer)
        fireCustomEvent("Game.switchPlayer", {}, decidePageToRender)
      } else {
        if (nextPlayer.isComputer) {
          renderShipPage(currentPlayer)
        } else {
          passDeviceAndLoadPage(renderShipPage, currentPlayer)
        }
      }
    } else if (currentPlayer.gameboard.allShipsSunk) {
      renderWinPage(nextPlayer)
    } else {
      if (currentPlayer.isComputer) {
        nextPlayer.gameboard.recieveAttack("random")
        fireCustomEvent("Game.switchPlayer", {}, decidePageToRender)
      } else {
        if (nextPlayer.isComputer) {
          renderHitPage(currentPlayer, nextPlayer)
        } else {
          passDeviceAndLoadPage(renderHitPage, currentPlayer, nextPlayer)
        }
      }
    }
  }

  document.addEventListener("startGame", renderPlayerPage)
  function renderPlayerPage() {
    body.innerHTML = `
    <header>
      <h1>Welcome to BattleShip</h1>
    </header>

    <form>
      <label for='player1' hidden>Player1</label>
      <input id='player1' type='text' placeholder='Player 1'>

      <label for='player2' hidden>Player2</label>
      <input id='player2' type='text' placeholder='Player 2'>

      <button>Submit</button>
      <button type='button'>Play Against Computer</button>
    </form>
    
    `

    const form = document.querySelector("form")
    const inputs = [...document.querySelectorAll("input")]

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      if (inputs.every((input) => input.value.length > 0)) {
        fireCustomEvent(
          "Game.init",
          {
            player1: [inputs[0].value, 1],
            // player2: [inputs[1].value, 2, true] //true can be passed to make a computer player
            player2: [inputs[1].value, 2],
          },
          renderShipPage
        )
      }
    })

    form.addEventListener("click", (e) => {
      if (e.target.textContent !== "Play Against Computer") return
      fireCustomEvent(
        "Game.init",
        {
          player1: ["You", 1, false],
          // player2: [inputs[1].value, 2, true] //true can be passed to make a computer player
          player2: ["Computer", 2, true],
        },
        renderShipPage
      )
    })
  }

  function renderShipPage(player) {
    body.innerHTML = `
    <header>
      <h1>Battleship</h1>
    </header>

    <section id="play-area">
      <div id="board">
        <div data-key="A1" class="coord"></div>
        <div data-key="A2" class="coord"></div>
        <div data-key="A3" class="coord"></div>
        <div data-key="A4" class="coord"></div>
        <div data-key="A5" class="coord"></div>
        <div data-key="A6" class="coord"></div>
        <div data-key="A7" class="coord"></div>
        <div data-key="A8" class="coord"></div>
        <div data-key="A9" class="coord"></div>
        <div data-key="A10" class="coord"></div>

        <div data-key="B1" class="coord"></div>
        <div data-key="B2" class="coord"></div>
        <div data-key="B3" class="coord"></div>
        <div data-key="B4" class="coord"></div>
        <div data-key="B5" class="coord"></div>
        <div data-key="B6" class="coord"></div>
        <div data-key="B7" class="coord"></div>
        <div data-key="B8" class="coord"></div>
        <div data-key="B9" class="coord"></div>
        <div data-key="B10" class="coord"></div>

        <div data-key="C1" class="coord"></div>
        <div data-key="C2" class="coord"></div>
        <div data-key="C3" class="coord"></div>
        <div data-key="C4" class="coord"></div>
        <div data-key="C5" class="coord"></div>
        <div data-key="C6" class="coord"></div>
        <div data-key="C7" class="coord"></div>
        <div data-key="C8" class="coord"></div>
        <div data-key="C9" class="coord"></div>
        <div data-key="C10" class="coord"></div>

        <div data-key="D1" class="coord"></div>
        <div data-key="D2" class="coord"></div>
        <div data-key="D3" class="coord"></div>
        <div data-key="D4" class="coord"></div>
        <div data-key="D5" class="coord"></div>
        <div data-key="D6" class="coord"></div>
        <div data-key="D7" class="coord"></div>
        <div data-key="D8" class="coord"></div>
        <div data-key="D9" class="coord"></div>
        <div data-key="D10" class="coord"></div>

        <div data-key="E1" class="coord"></div>
        <div data-key="E2" class="coord"></div>
        <div data-key="E3" class="coord"></div>
        <div data-key="E4" class="coord"></div>
        <div data-key="E5" class="coord"></div>
        <div data-key="E6" class="coord"></div>
        <div data-key="E7" class="coord"></div>
        <div data-key="E8" class="coord"></div>
        <div data-key="E9" class="coord"></div>
        <div data-key="E10" class="coord"></div>

        <div data-key="F1" class="coord"></div>
        <div data-key="F2" class="coord"></div>
        <div data-key="F3" class="coord"></div>
        <div data-key="F4" class="coord"></div>
        <div data-key="F5" class="coord"></div>
        <div data-key="F6" class="coord"></div>
        <div data-key="F7" class="coord"></div>
        <div data-key="F8" class="coord"></div>
        <div data-key="F9" class="coord"></div>
        <div data-key="F10" class="coord"></div>

        <div data-key="G1" class="coord"></div>
        <div data-key="G2" class="coord"></div>
        <div data-key="G3" class="coord"></div>
        <div data-key="G4" class="coord"></div>
        <div data-key="G5" class="coord"></div>
        <div data-key="G6" class="coord"></div>
        <div data-key="G7" class="coord"></div>
        <div data-key="G8" class="coord"></div>
        <div data-key="G9" class="coord"></div>
        <div data-key="G10" class="coord"></div>

        <div data-key="H1" class="coord"></div>
        <div data-key="H2" class="coord"></div>
        <div data-key="H3" class="coord"></div>
        <div data-key="H4" class="coord"></div>
        <div data-key="H5" class="coord"></div>
        <div data-key="H6" class="coord"></div>
        <div data-key="H7" class="coord"></div>
        <div data-key="H8" class="coord"></div>
        <div data-key="H9" class="coord"></div>
        <div data-key="H10" class="coord"></div>

        <div data-key="I1" class="coord"></div>
        <div data-key="I2" class="coord"></div>
        <div data-key="I3" class="coord"></div>
        <div data-key="I4" class="coord"></div>
        <div data-key="I5" class="coord"></div>
        <div data-key="I6" class="coord"></div>
        <div data-key="I7" class="coord"></div>
        <div data-key="I8" class="coord"></div>
        <div data-key="I9" class="coord"></div>
        <div data-key="I10" class="coord"></div>

        <div data-key="J1" class="coord"></div>
        <div data-key="J2" class="coord"></div>
        <div data-key="J3" class="coord"></div>
        <div data-key="J4" class="coord"></div>
        <div data-key="J5" class="coord"></div>
        <div data-key="J6" class="coord"></div>
        <div data-key="J7" class="coord"></div>
        <div data-key="J8" class="coord"></div>
        <div data-key="J9" class="coord"></div>
        <div data-key="J10" class="coord"></div>
      </div>

      <div id="ships">
        <div class="ship" draggable="true" data-ship='carrier'>carrier</div>
        <div class="ship" draggable="true" data-ship='battleship'>battleship</div>
        <div class="ship" draggable="true" data-ship='cruiser'>cruiser</div>
        <div class="ship" draggable="true" data-ship='submarine'>submarine</div>
        <div class="ship" draggable="true" data-ship='destroyer'>destroyer</div>
      </div>
    </section>

    <section class="buttons">
      <button class="orientation-toggle">horizontal</button>
      <button id='finish-button'>Finish</button>
    </section>`

    placeShipListeners(player)
  }

  function changeOrientationText(e) {
    const ships = document.querySelectorAll(".ship")

    if (e.target.textContent === "horizontal") {
      e.target.textContent = "vertical"
      ships.forEach((ship) => ship.classList.toggle("vertical"))
    } else if (e.target.textContent === "vertical") {
      e.target.textContent = "horizontal"
      ships.forEach((ship) => ship.classList.toggle("vertical"))
    }
  }

  function turnWhiteCellsGray(e) {
    if (e.target === document.querySelector("#board")) return
    if (e.target.style.backgroundColor === "") {
      e.target.style.backgroundColor = "lightgray"
    }
  }

  function turnGrayCellsWhite(e) {
    if (e.target === document.querySelector("#board")) return
    if (e.target.style.backgroundColor === "lightgray") {
      e.target.style.backgroundColor = ""
    }
  }

  function flashCellRed(e) {
    let currentColor = e.target.style.backgroundColor
    if (currentColor === "lightgray") currentColor = ""
    e.target.style.backgroundColor = "lightcoral"
    setTimeout(() => (e.target.style.backgroundColor = currentColor), 250)
  }

  function placeShipListeners(player) {
    let dragged
    let touchLocation
    const ships = document.querySelector("#ships")
    const shipElems = document.querySelectorAll(".ship")
    const board = document.querySelector("#board")
    const orientationToggle = document.querySelector(".orientation-toggle")
    const finishButton = document.querySelector("#finish-button")
    // const abort = new AbortController()

    orientationToggle.addEventListener("click", changeOrientationText)
    ships.addEventListener("dragstart", (e) => (dragged = e.target))

    board.addEventListener("dragover", (e) => e.preventDefault())
    board.addEventListener("dragenter", turnWhiteCellsGray)
    board.addEventListener("dragleave", turnGrayCellsWhite)
    board.addEventListener("drop", function (e) {
      if (e.target === board) return
      const dataKey = e.target.getAttribute("data-key")
      const shipName = dragged.textContent
      const orientation = orientationToggle.textContent
      const coordsToHighlight = player.gameboard.placeShip(
        shipName,
        dataKey,
        orientation
      )

      if (coordsToHighlight.length > 0) {
        if (player.playerNum === 1) {
          player1ShipCoords.push(coordsToHighlight)
        } else {
          player2ShipCoords.push(coordsToHighlight)
        }

        highlightShipsGray(player)
        dragged.remove()
        // push to each player's ship coords. Max ships coords === 5
      } else {
        flashCellRed(e)
      }
    })

    shipElems.forEach((ship) => {
      ship.addEventListener("touchmove", (e) => {
        dragged = e.target
        touchLocation = e.targetTouches[0]
        const allCoords = document.querySelectorAll(".coord")
        const hoveredElem = document.elementFromPoint(
          touchLocation.pageX,
          touchLocation.pageY
        )

        if (hoveredElem.classList.contains("coord")) {
          allCoords.forEach((coord) => {
            if (coord.style.backgroundColor !== "gray")
              coord.style.backgroundColor = ""
          })

          const originalColor = hoveredElem.style.backgroundColor

          if (originalColor !== "gray")
            hoveredElem.style.backgroundColor = "lightgray"
        } else {
          allCoords.forEach((coord) => {
            if (coord.style.backgroundColor !== "gray")
              coord.style.backgroundColor = ""
          })
        }
      })

      ship.addEventListener("touchend", () => {
        const dropElem = document.elementFromPoint(
          touchLocation.pageX,
          touchLocation.pageY
        )

        if (dropElem.classList.contains("coord")) {
          const dataKey = dropElem.getAttribute("data-key")
          const shipName = dragged.textContent
          const orientation = orientationToggle.textContent
          const coordsToHighlight = player.gameboard.placeShip(
            shipName,
            dataKey,
            orientation
          )

          if (coordsToHighlight.length > 0) {
            if (player.playerNum === 1) {
              player1ShipCoords.push(coordsToHighlight)
            } else {
              player2ShipCoords.push(coordsToHighlight)
            }

            highlightShipsGray(player)
            dragged.remove()
            // push to each player's ship coords. Max ships coords === 5
          } else {
            flashCellRed({ target: dropElem })
          }
        }
      })
    })

    finishButton.addEventListener("click", () => {
      if (player.gameboard.remainingShips.length === 0) {
        // switchplayer event
        fireCustomEvent("Game.switchPlayer", {}, decidePageToRender)
      }
    })
  }

  function renderHitPage(currentPlayer, nextPlayer) {
    body.innerHTML = `
    <section class='board-headings'>
      <h1>Your Board</h1>
      <h1>Enemy Board</h1>
    </section>

    <section id="play-area">
      <div id="board">
        <div data-key="A1" class="coord"></div>
        <div data-key="A2" class="coord"></div>
        <div data-key="A3" class="coord"></div>
        <div data-key="A4" class="coord"></div>
        <div data-key="A5" class="coord"></div>
        <div data-key="A6" class="coord"></div>
        <div data-key="A7" class="coord"></div>
        <div data-key="A8" class="coord"></div>
        <div data-key="A9" class="coord"></div>
        <div data-key="A10" class="coord"></div>

        <div data-key="B1" class="coord"></div>
        <div data-key="B2" class="coord"></div>
        <div data-key="B3" class="coord"></div>
        <div data-key="B4" class="coord"></div>
        <div data-key="B5" class="coord"></div>
        <div data-key="B6" class="coord"></div>
        <div data-key="B7" class="coord"></div>
        <div data-key="B8" class="coord"></div>
        <div data-key="B9" class="coord"></div>
        <div data-key="B10" class="coord"></div>

        <div data-key="C1" class="coord"></div>
        <div data-key="C2" class="coord"></div>
        <div data-key="C3" class="coord"></div>
        <div data-key="C4" class="coord"></div>
        <div data-key="C5" class="coord"></div>
        <div data-key="C6" class="coord"></div>
        <div data-key="C7" class="coord"></div>
        <div data-key="C8" class="coord"></div>
        <div data-key="C9" class="coord"></div>
        <div data-key="C10" class="coord"></div>

        <div data-key="D1" class="coord"></div>
        <div data-key="D2" class="coord"></div>
        <div data-key="D3" class="coord"></div>
        <div data-key="D4" class="coord"></div>
        <div data-key="D5" class="coord"></div>
        <div data-key="D6" class="coord"></div>
        <div data-key="D7" class="coord"></div>
        <div data-key="D8" class="coord"></div>
        <div data-key="D9" class="coord"></div>
        <div data-key="D10" class="coord"></div>

        <div data-key="E1" class="coord"></div>
        <div data-key="E2" class="coord"></div>
        <div data-key="E3" class="coord"></div>
        <div data-key="E4" class="coord"></div>
        <div data-key="E5" class="coord"></div>
        <div data-key="E6" class="coord"></div>
        <div data-key="E7" class="coord"></div>
        <div data-key="E8" class="coord"></div>
        <div data-key="E9" class="coord"></div>
        <div data-key="E10" class="coord"></div>

        <div data-key="F1" class="coord"></div>
        <div data-key="F2" class="coord"></div>
        <div data-key="F3" class="coord"></div>
        <div data-key="F4" class="coord"></div>
        <div data-key="F5" class="coord"></div>
        <div data-key="F6" class="coord"></div>
        <div data-key="F7" class="coord"></div>
        <div data-key="F8" class="coord"></div>
        <div data-key="F9" class="coord"></div>
        <div data-key="F10" class="coord"></div>

        <div data-key="G1" class="coord"></div>
        <div data-key="G2" class="coord"></div>
        <div data-key="G3" class="coord"></div>
        <div data-key="G4" class="coord"></div>
        <div data-key="G5" class="coord"></div>
        <div data-key="G6" class="coord"></div>
        <div data-key="G7" class="coord"></div>
        <div data-key="G8" class="coord"></div>
        <div data-key="G9" class="coord"></div>
        <div data-key="G10" class="coord"></div>

        <div data-key="H1" class="coord"></div>
        <div data-key="H2" class="coord"></div>
        <div data-key="H3" class="coord"></div>
        <div data-key="H4" class="coord"></div>
        <div data-key="H5" class="coord"></div>
        <div data-key="H6" class="coord"></div>
        <div data-key="H7" class="coord"></div>
        <div data-key="H8" class="coord"></div>
        <div data-key="H9" class="coord"></div>
        <div data-key="H10" class="coord"></div>

        <div data-key="I1" class="coord"></div>
        <div data-key="I2" class="coord"></div>
        <div data-key="I3" class="coord"></div>
        <div data-key="I4" class="coord"></div>
        <div data-key="I5" class="coord"></div>
        <div data-key="I6" class="coord"></div>
        <div data-key="I7" class="coord"></div>
        <div data-key="I8" class="coord"></div>
        <div data-key="I9" class="coord"></div>
        <div data-key="I10" class="coord"></div>

        <div data-key="J1" class="coord"></div>
        <div data-key="J2" class="coord"></div>
        <div data-key="J3" class="coord"></div>
        <div data-key="J4" class="coord"></div>
        <div data-key="J5" class="coord"></div>
        <div data-key="J6" class="coord"></div>
        <div data-key="J7" class="coord"></div>
        <div data-key="J8" class="coord"></div>
        <div data-key="J9" class="coord"></div>
        <div data-key="J10" class="coord"></div>
      </div>
    </section>`

    const board = document.querySelector("#board")
    const hitBoard = board.cloneNode(true)
    hitBoard.id = "hit-board"
    document.querySelector("#play-area").appendChild(hitBoard)

    highlightShipsGray(currentPlayer)
    highlightHitsAndMisses(currentPlayer, board)
    highlightHitsAndMisses(nextPlayer, hitBoard)
    placeHitListeners(nextPlayer, hitBoard)
  }

  function highlightHitsAndMisses(player, domboard) {
    const board = player.gameboard.board

    for (const coord in board) {
      const cell = domboard.querySelector(`.coord[data-key='${coord}']`)
      if (board[coord] === "miss") {
        cell.style.backgroundColor = "darkred"
      } else if (board[coord] === "hit") {
        cell.style.backgroundColor = "darkgreen"
      }
    }
  }

  function highlightShipsGray(player) {
    if (player.playerNum === 1) {
      player1ShipCoords.forEach((shipCoords) => {
        shipCoords.forEach((hitboxCoord) => {
          const cell = document.querySelector(
            `.coord[data-key='${hitboxCoord}']`
          )
          cell.style.backgroundColor = "gray"
        })
      })
    } else {
      player2ShipCoords.forEach((shipCoords) => {
        shipCoords.forEach((hitboxCoord) => {
          const cell = document.querySelector(
            `.coord[data-key='${hitboxCoord}']`
          )
          cell.style.backgroundColor = "gray"
        })
      })
    }
  }

  function placeHitListeners(nextPlayer, hitBoard) {
    const finishButton = document.querySelector("#finish-button")
    const hitAbort = new AbortController()
    let hitStatus

    // allows attacking and colors cells red (miss) or green (hit)

    hitBoard.addEventListener(
      "click",
      (e) => {
        const dataKey = e.target.getAttribute("data-key")
        if (dataKey === null) return

        hitStatus = nextPlayer.gameboard.recieveAttack(dataKey)
        if (hitStatus === 0) {
          e.target.style.backgroundColor = "darkred"
          hitAbort.abort()
          waitOneSecond(
            fireCustomEvent,
            "Game.switchPlayer",
            {},
            decidePageToRender
          )
        } else if (hitStatus === 1) {
          hitAbort.abort()
          e.target.style.backgroundColor = "darkgreen"
          waitOneSecond(
            fireCustomEvent,
            "Game.switchPlayer",
            {},
            decidePageToRender
          )
        } else {
          flashCellRed(e)
        }
      },
      { signal: hitAbort.signal }
    )
  }
})()

export default DOMController
