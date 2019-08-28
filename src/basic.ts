/**
 * Baisc Compare Function
 * @desczh
 * 基本的比较函数
 * @since 0.2.0
 * @file
 *
 */

/**
 * equals
 * @desczh
 * 相等
 * @example
 * import {eq} from 'mocoolka-predicate'
 * assert(eq('a')('a'))
 * assert(eq(1)(1))
 * assert(eq(true)(true))
 * assert(!eq('a')('b'))
 * assert(!eq(1)(2))
 * assert(!eq(true)(false))
 * @since 0.2.0
 */
export const eq = <A = number | string | boolean>(y: A) => (x: A) => x === y
/**
 * non equals
 * @desczh
 * 不相等
 * @example
 * import {not_eq} from 'mocoolka-predicate'
 * assert(!not_eq('a')('a'))
 * assert(!not_eq(1)(1))
 * assert(!not_eq(true)(true))
 * assert(not_eq('a')('b'))
 * assert(not_eq(1)(2))
 * assert(not_eq(true)(false))
 * @since 0.2.0
 */
export const not_eq = <A = number | string | boolean>(y: A) => (x: A) => x !== y
/**
 * less than
 * @desczh
 * 小于
 * @example
 * import {lt} from 'mocoolka-predicate'
 * assert(lt('b')('a'))
 * assert(lt(2)(1))
 * assert(!lt('a')('a'))
 * assert(!lt('a')('b'))
 * assert(!lt(1)(1))
 * assert(!lt(1)(2))
 * @since 0.2.0
 */
export const lt = <A = number | string>(y: A) => (x: A) => x < y
/**
 * greater than
 * @desczh
 * 大于
 * @example
 * import {gt} from 'mocoolka-predicate'
 * assert(!gt('b')('a'))
 * assert(!gt(2)(1))
 * assert(!gt('a')('a'))
 * assert(gt('a')('b'))
 * assert(!gt(1)(1))
 * assert(gt(1)(2))
 * @since 0.2.0
 */
export const gt = <A = number | string>(y: A) => (x: A) => x > y
/**
 * less than Or equals
 * @desczh
 * 小于等于
 * @example
 * import {lte} from 'mocoolka-predicate'
 * assert(lte('b')('a'))
 * assert(lte(2)(1))
 * assert(lte('a')('a'))
 * assert(!lte('a')('b'))
 * assert(lte(1)(1))
 * assert(!lte(1)(2))
 * @since 0.2.0
 */
export const lte = <A = number | string>(y: A) => (x: A) => x <= y
/**
 * greater than Or equals
 * @desczh
 * 大于等于
 * @example
 * import {gte} from 'mocoolka-predicate'
 * assert(!gte('b')('a'))
 * assert(!gte(2)(1))
 * assert(gte('a')('a'))
 * assert(gte('a')('b'))
 * assert(gte(1)(1))
 * assert(gte(1)(2))
 * @since 0.2.0
 */
export const gte = <A = number | string>(y: A) => (x: A) => x >= y
/**
 * between low and hi
 * @desczh
 * 大于等于low，小于等于hi
 * @example
 * import {between} from 'mocoolka-predicate'
 * assert(between({ hi: 'c', low: 'a' })('b'))
 * assert(between({ hi: 'c', low: 'a' })('a'))
 * assert(between({ hi: 'c', low: 'a' })('c'))
 * assert(!between({ hi: 'c', low: 'a' })('d'))
 * assert(between({ hi: 3, low: 1 })(2))
 * assert(between({ hi: 3, low: 1 })(3))
 * assert(between({ hi: 3, low: 1 })(1))
 * assert(!between({ hi: 3, low: 1 })(4))
 * @since 0.2.0
 */
export const between = <A = number | string>({ low, hi }: { low: A, hi: A }) => (x: A) => x >= low && x <= hi
