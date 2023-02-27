// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


// ============= Your Code Here =============
/**
 * 1、readonly：只读关键字，定义 key 为只读
 * 2、keyof 表示 T 的 key
 * 3、[key in keyof T]：表示遍历泛型 key
 * 4、T[key]：表示取泛型 T 的字段类型
 */
type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}
