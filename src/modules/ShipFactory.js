export default function ShipFactory(length) {
  if (length < 2 || length > 5) return

  const hitboxes = _createHitboxes()

  function _createHitboxes() {
    const array = []
    for (let i = 0; i < length; i++) {
      array.push({
        isHit: false,
        hit: () => hit(i),
      })
    }
    return array
  }

  function hit(index) {
    if (index >= hitboxes.length || index < 0) return
    hitboxes[index].isHit = true
    return hitboxes.map((hitbox) => {
      return { ...hitbox }
    })
  }

  return Object.freeze({
    get hitboxes() {
      return hitboxes.map((hitbox) => {
        // return { ...hitbox }
        /* This might make it so I don't need to use TargetFactory */
        return {
          get isHit() {
            return hitbox.isHit
          },
          hit: hitbox.hit,
        }
      })
    },
    get isSunk() {
      if (hitboxes.every((hitbox) => hitbox.isHit === true)) {
        return true
      } else {
        return false
      }
    },
  })
}
