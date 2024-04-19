import { Flag } from 'arena'
import { Creep, StructureTower } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'
import { runTowers } from '@/common/towers'

export function loop () {
  const enemyFlag = getObjectsByPrototype(Flag).find(object => !object.my)!
  const myCreeps = getObjectsByPrototype(Creep).filter(object => object.my)
  const myTowers = getObjectsByPrototype(StructureTower).filter(object => object.my)
  runTowers(myTowers)
  for (const creep of myCreeps) {
    creep.moveTo(enemyFlag)
  }
}
