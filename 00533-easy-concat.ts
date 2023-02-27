// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]


// ============= Your Code Here =============
/**
 * 1、T extends any[]：约束 T 为数组类型
 * 2、[...T]：解构数组
 */
type Concat<T extends any[], U extends any[]> = [...T, ...U]
