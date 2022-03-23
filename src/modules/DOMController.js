const DOMController = (function () {
  function renderPlayerPage() {}

  function renderShipPage(player) {}

  function placeShipListeners(player) {
    let dragged
    const ships = document.querySelector("#ships")
    const board = document.querySelector("#board")
    const orientationToggle = document.querySelector(".orientation-toggle")

    orientationToggle.addEventListener("click", (e) => {
      if (e.target.textContent === "horizontal") {
        e.target.textContent = "vertical"
      } else if (e.target.textContent === "vertical") {
        e.target.textContent = "horizontal"
      }
    })

    ships.addEventListener("dragstart", function (e) {
      dragged = e.target
    })

    board.addEventListener("dragover", (e) => e.preventDefault())
    board.addEventListener("dragenter", (e) => {
      if (e.target.style.backgroundColor === "") {
        e.target.style.backgroundColor = "lightgray"
      }
    })
    board.addEventListener("dragleave", (e) => {
      if (e.target.style.backgroundColor === "lightgray") {
        e.target.style.backgroundColor = ""
      }
    })
    board.addEventListener("drop", function (e) {
      const dataKey = e.target.getAttribute("data-key")
      const shipName = dragged.textContent
      const orientation = orientationToggle.textContent
      const coordsToHighlight = player.gameboard.placeShip(
        shipName,
        dataKey,
        orientation
      )
      if (coordsToHighlight.length) {
        const elems = []
        coordsToHighlight.forEach((coord) => {
          const elem = document.querySelector(`.coord[data-key="${coord}"]`)
          elems.push(elem)
        })

        elems.forEach((elem) => {
          elem.style.backgroundColor = "green"
        })
      } else {
        let currentColor = e.target.style.backgroundColor
        if (currentColor === "lightgray") currentColor = ""
        e.target.style.backgroundColor = "lightcoral"
        setTimeout(() => (e.target.style.backgroundColor = currentColor), 250)
      }
    })
  }

  function renderHitPage(player) {}

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
