// import math from './math-esm.mjs'
import * as math from './math-esm.mjs'

// or we can use same names in the structure

import {add, subtract} from './math-esm.mjs'

// 4th way of exporting ES-6 Modules this is destructuring method
const { add, subtract} = math

// console.log(add(8,7))
// console.log(subtract(8,7))

// console.log(math.add(8,9))
// console.log(math.subtract(8,9))

console.log(add(8,6))
console.log(subtract(8,6))