import { RESOURCE_ENERGY, TOWER_OPTIMAL_RANGE, TOWER_RANGE } from 'game/constants'
import { Creep, GameObject, StructureTower } from 'game/prototypes'
import { type RoomPosition } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'

export function getAllEnemies () {
  return getObjectsByPrototype(Creep).filter(creep => !creep.my)
}

export function getAllMyCreeps () {
  return getObjectsByPrototype(Creep).filter(creep => creep.my)
}

export function getAllMyTowers () {
  return getObjectsByPrototype(StructureTower).filter(tower => tower.my)
}

export function getAllEnemyTowers () {
  return getObjectsByPrototype(StructureTower).filter(tower => !tower.my)
}

export function getEnemiesInRange (position: RoomPosition, range: number) {
  return getAllEnemies().filter(creep => creep.getRangeTo(position) <= range)
}

export function getClosetEnemyByRange (gameObj: GameObject) {
  return gameObj.findClosestByRange(getAllEnemies())
}

export function getClosetFriendByRange (gameObj: GameObject) {
  return gameObj.findClosestByRange(getAllMyCreeps())
}

export function isTowerCoolingDown (tower: StructureTower) {
  return tower.cooldown > 0
}

export function getTowerEnergy (tower: StructureTower) {
  return tower.store.getUsedCapacity(RESOURCE_ENERGY)
}

export function isTowerEnergyPoor (tower: StructureTower) {
  return getTowerEnergy(tower) ?? 0 < 10
}

export function isTowerAbleToAct (tower: StructureTower) {
  return tower.cooldown > 0 || (getTowerEnergy(tower) ?? 0) < 10
}

export function isTowerEnergyFull (tower: StructureTower) {
  return tower.store.getFreeCapacity(RESOURCE_ENERGY) === 0
}

export function isCreepInReachOfTower (tower: StructureTower, creep: Creep) {
  return creep.getRangeTo(tower) <= TOWER_RANGE
}

/**
 * @param {StructureTower} tower
 * @param {Creep} creep
 */
export function isCreepInOptimalRangeOfTower (tower: StructureTower, creep: Creep) {
  return creep.getRangeTo(tower) <= TOWER_OPTIMAL_RANGE
}
