/**
 * Logic function about predicate
 * @desczh
 * 逻辑函数
 * @file
 * @since 0.2.0
 */
import { Predicate, Refinement, not as _not } from 'fp-ts/lib/function'
import { monoidAny, getFunctionMonoid, monoidAll, fold } from 'fp-ts/lib/Monoid'
/**
 * Concat Predicate with and
 * @desczh
 * 用`and`连接`Predicate`
 * @example
 * import {and} from 'macoolka-predicate'
 * interface A {
 *   name: string,
 *   age: number
 * }
 * const as: A[] = [
 *    { name: 'a1', age: 20 },
 *    { name: 'a2', age: 20 },
 *    { name: 'a3', age: 28 }
 * ]
 * const isName = (a: A) => a.name === 'a1'
 * const isAge = (a: A) => a.age === 20
 * expect(as.filter(and(isName, isAge)).length).toEqual(1)
 *
 * @since 0.2.0
 */
export const and = <A>(p1: Predicate<A>, p2: Predicate<A>): Predicate<A> => {
    return foldAND([p1, p2])

}
/**
 * Concat Predicate with or
 * @desczh
 * 用`or`连接`Predicate`
 * @example
 * import {or} from 'macoolka-predicate'
 * interface A {
 *   name: string,
 *   age: number
 * }
 * const as: A[] = [
 *    { name: 'a1', age: 20 },
 *    { name: 'a2', age: 20 },
 *    { name: 'a3', age: 28 }
 * ]
 * const isName = (a: A) => a.name === 'a1'
 * const isAge = (a: A) => a.age === 20
 * expect(as.filter(or(isName, isAge)).length).toEqual(2)
 *
 *
 * @since 0.2.0
 */
export function or<A, B1 extends A, B2 extends A>(p1: Refinement<A, B1>, p2: Refinement<A, B2>): Refinement<A, B1 | B2>
export function or<A>(p1: Predicate<A>, p2: Predicate<A>): Predicate<A>
export function or<A>(p1: Predicate<A>, p2: Predicate<A>): Predicate<A> {
    return foldOR([p1, p2])

}
/**
 * fold Predicate with and
 * @desczh
 * `fold` `Predicate` 数组用`and`
 * @example
 * import {foldAND} from 'macoolka-predicate'
 * interface A {
 *   name: string,
 *   age: number
 * }
 * const as: A[] = [
 *    { name: 'a1', age: 20 },
 *    { name: 'a2', age: 20 },
 *    { name: 'a3', age: 28 }
 * ]
 * const isName = (a: A) => a.name === 'a1'
 * const isAge = (a: A) => a.age === 20
 * expect(as.filter(foldAND([isName, isAge])).length).toEqual(1)
 *
 *
 * @since 0.2.0
 */
export const foldAND = <A>(p: Array<Predicate<A>>): Predicate<A> => {
    const a = getFunctionMonoid(monoidAll)<A>()
    return fold(a)(p)

}
/**
 * fold Predicate with or
 * @desczh
 * `fold` `Predicate` 数组用`or`
 * @example
 * import {foldOR} from 'macoolka-predicate'
 * interface A {
 *   name: string,
 *   age: number
 * }
 * const as: A[] = [
 *    { name: 'a1', age: 20 },
 *    { name: 'a2', age: 20 },
 *    { name: 'a3', age: 28 }
 * ]
 * const isName = (a: A) => a.name === 'a1'
 * const isAge = (a: A) => a.age === 20
 * expect(as.filter(foldOR([isName, isAge])).length).toEqual(2)
 *
 *
 * @since 0.2.0
 */
export const foldOR = <A>(p: Array<Predicate<A>>): Predicate<A> => {
    const a = getFunctionMonoid(monoidAny)<A>()
    return fold(a)(p)

}
/**
 * not a Predicate
 * @desczh
 * `Predicate`结果取反
 * @example
 * import {and} from 'macoolka-predicate'
 * interface A {
 *   name: string,
 *   age: number
 * }
 * const as: A[] = [
 *    { name: 'a1', age: 20 },
 *    { name: 'a2', age: 20 },
 *    { name: 'a3', age: 28 }
 * ]
 * const isName = (a: A) => a.name === 'a1'
 * const isAge = (a: A) => a.age === 20
 * expect(as.filter(and(isName, isAge)).length).toEqual(1)
 *
 *
 * @since 0.2.0
 */
export function not<A>(predicate: Predicate<A>): Predicate<A> {
    return _not(predicate)
}
