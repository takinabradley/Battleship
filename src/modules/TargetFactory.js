export default function TargetFactory(ship) {
  const targets = []

  for (let i = 0; i < ship.hitboxes.length; i++) {
    targets.push(
      Object.freeze({
        get isHit() {
          return ship.hitboxes[i].isHit
        },
        hit: ship.hitboxes[i].hit,
      })
    )
  }

  return targets
}
