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
