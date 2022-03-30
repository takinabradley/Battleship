/**
 * @jest-environment jsdom
 */

import Game from "./Game"

test("Game.start fires a 'startGame' event", () => {
  const listener = jest.fn(() => "x")
  document.addEventListener("startGame", listener)

  Game.start()

  expect(listener).toBeCalled()
})

test("Game.init event can be used to set players", () => {
  const callBack = jest.fn((player) => player)
  const evt = new CustomEvent("Game.init", {
    bubbles: true,
    detail: {
      player1: "greg",
      player2: "may",
      callbackFunc: callBack,
    },
  })
  document.dispatchEvent(evt)
  expect(callBack).toBeCalledWith(
    expect.objectContaining({
      name: "greg",
    })
  )
})

test("Game.switchPlayer event can be used to switch players", () => {
  const initEvt = new CustomEvent("Game.init", {
    bubbles: true,
    detail: {
      player1: "greg",
      player2: "may",
    },
  })
  document.dispatchEvent(initEvt)

  const callBack = jest.fn((player) => player)
  const switchEvt = new CustomEvent("Game.switchPlayer", {
    bubbles: true,
    detail: {
      callbackFunc: callBack,
    },
  })

  document.dispatchEvent(switchEvt)
  expect(callBack).toBeCalledWith(
    expect.objectContaining({
      name: "may",
    }),
    expect.objectContaining({
      name: "greg",
    })
  )
})
