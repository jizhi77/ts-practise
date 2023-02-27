// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
  user: {
    name: string;
  }
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
/**
 * 1、keyof 表示 interface 中所有的的 key
 * 2、extends 表示约束
 *    SomeType extends OtherType ? TrueType : FalseType;
 * 3、[key]: 动态 key 值
 * 4、[key in T]：遍历泛型的 key
 * 5、T[key]：泛型对应 key 的类型
 */
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k]
}
