const DOMController = (function () {
  const body = document.querySelector("body")

  document.addEventListener("startGame", renderPlayerPage)

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

  function renderPlayerPage() {
    body.innerHTML = `
    <h1>Welcome to BattleShip</h1>

    <form>
      <label for='player1'>Player1</label>
      <input id='player1'>

      <label for='player2'>Player2</label>
      <input id='player2'>

      <button>Submit</button>
    </form>`

    const form = document.querySelector("form")
    const inputs = [...document.querySelectorAll("input")]

    form.addEventListener("submit", (e) => {
      e.preventDefault()
      if (inputs.every((input) => input.value.length > 0)) {
        fireCustomEvent(
          "Game.init",
          {
            player1: inputs[0].value,
            player2: inputs[1].value,
          },
          renderShipPage
        )
        /*
        // initGame event
        const player1 = PlayerFactory(inputs[0].value)
        const player2 = PlayerFactory(inputs[1].value)
        Game.init(player1, player2)

        // start game event
        renderShipPage(Game.currentPlayer)
        */
      }
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
        <div class="ship" draggable="true">carrier</div>
        <div class="ship" draggable="true">battleship</div>
        <div class="ship" draggable="true">cruiser</div>
        <div class="ship" draggable="true">submarine</div>
        <div class="ship" draggable="true">destroyer</div>
      </div>
    </section>

    <section class="buttons">
      <button class="orientation-toggle">horizontal</button>
      <h2>Buttons n' stuff</h2>
      <button id='finish-button'>Finish</button>
    </section>`

    console.log(body)
    placeShipListeners(player)
  }

  function changeOrientationText(e) {
    if (e.target.textContent === "horizontal") {
      e.target.textContent = "vertical"
    } else if (e.target.textContent === "vertical") {
      e.target.textContent = "horizontal"
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

  function highlightCoordsGreen(coordsToHighlight) {
    const elems = []
    coordsToHighlight.forEach((coord) => {
      const elem = document.querySelector(`.coord[data-key="${coord}"]`)
      elems.push(elem)
    })

    elems.forEach((elem) => {
      elem.style.backgroundColor = "green"
    })
  }
  function placeShipListeners(player) {
    let dragged
    const ships = document.querySelector("#ships")
    const board = document.querySelector("#board")
    const orientationToggle = document.querySelector(".orientation-toggle")
    const finishButton = document.querySelector("#finish-button")
    const abort = new AbortController()

    orientationToggle.addEventListener("click", changeOrientationText, {
      signal: abort.signal,
    })
    ships.addEventListener("dragstart", (e) => (dragged = e.target), {
      signal: abort.signal,
    })

    board.addEventListener("dragover", (e) => e.preventDefault(), {
      signal: abort.signal,
    })
    board.addEventListener("dragenter", turnWhiteCellsGray, {
      signal: abort.signal,
    })
    board.addEventListener("dragleave", turnGrayCellsWhite, {
      signal: abort.signal,
    })
    board.addEventListener(
      "drop",
      function (e) {
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
          highlightCoordsGreen(coordsToHighlight)
        } else {
          flashCellRed(e)
        }
      },
      { signal: abort.signal }
    )

    finishButton.addEventListener(
      "click",
      () => {
        if (player.gameboard.remainingShips.length === 0) {
          // switchplayer event
          fireCustomEvent("Game.switchPlayer", {}, decidePageToRender)
          abort.abort()
        }
      },
      { signal: abort.signal }
    )
  }

  function decidePageToRender(newPlayer) {
    if (newPlayer.gameboard.remainingShips.length > 0) {
      renderShipPage(newPlayer)
    } else {
      renderHitPage(newPlayer)
    }
  }

  function renderHitPage(player) {
    body.innerHTML = ""
  }

  function renderWinPage(winner) {}

  return {
    renderPlayerPage,
    renderShipPage,
    placeShipListeners,
    renderHitPage,
    renderWinPage,
  }
})()

export default DOMController
