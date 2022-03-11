export default function ShipFactory(length) {
  if (length <= 0 || length > 5) return

  const hitboxes = _createHitboxes()

  function _createHitboxes() {
    const array = []
    for (let i = 0; i < length; i++) {
      array.push({ hit: false })
    }
    return array
  }

  function hit(index) {
    if (index >= hitboxes.length || index < 0) return
    hitboxes[index].hit = true
    return [...hitboxes]
  }

  return {
    get hitboxes() {
      return hitboxes.map((hitbox) => {
        return { ...hitbox }
      })
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
