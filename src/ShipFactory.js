export default function ShipFactory(length) {
  if (length <= 0 || length > 5) return

  const hitboxes = []

  for (let i = 0; i < length; i++) {
    hitboxes.push({ hit: false })
  }

  function hit(index) {
    if (index >= hitboxes.length || index < 0) return
    hitboxes[index].hit = true
    return [...hitboxes]
  }
  /*
  Ship = {
    length, 
    hitboxes: [{hit: false}, {hit: false}, {hit: false}]
    hit(),
    isSunk
  }
  */

  return {
    get hitboxes() {
      return [...hitboxes]
    },
    get isSunk() {
      if (hitboxes.every((hitbox) => hitbox.hit === true)) {
        return true
      } else {
        return false
      }
    },
    hit,
  }
}
