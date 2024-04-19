import type { StructureTower } from 'game/prototypes'
import {
  getClosetEnemyByRange,
  getClosetFriendByRange,
  isCreepInOptimalRangeOfTower,
  isCreepInReachOfTower,
  isTowerAbleToAct,
  isTowerEnergyFull
} from '../utils'

function act(tower: StructureTower) {
  if (!isTowerAbleToAct(tower)) {
    return
  }

  const closetEnemy = getClosetEnemyByRange(tower)
  if (isCreepInOptimalRangeOfTower(tower, closetEnemy)) {
    console.log(tower.attack(closetEnemy))
    return
  }

  const closetFriend = getClosetFriendByRange(tower)
  if (isCreepInOptimalRangeOfTower(tower, closetFriend)) {
    console.log(tower.heal(closetFriend))
    return
  }

  if (!isTowerEnergyFull(tower)) {
    return
  }

  if (isCreepInReachOfTower(tower, closetEnemy)) {
    console.log(tower.attack(closetEnemy))
    return
  }

  if (isCreepInReachOfTower(tower, closetFriend)) {
    console.log(tower.heal(closetFriend))
  }
}

interface ProcessedTower extends StructureTower {

}

export function initTowers(towers: StructureTower[]) {

}

export function runTowers(towers: StructureTower[]) {
  towers.forEach((tower) => {
    act(tower)
  })
}
