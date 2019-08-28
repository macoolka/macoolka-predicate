/**
 * Type Predicate
 * @desczh
 * 类型判断集合
 * @file
 * @since 0.2.0
 */
import { monoidAny, getFunctionMonoid, fold } from 'fp-ts/lib/Monoid'
import { Predicate, not, Refinement } from 'fp-ts/lib/function'
import { Maybe, AtLeastOne, NonEmptyArray } from 'macoolka-typescript'
import { Option } from 'fp-ts/lib/Option'

export interface PredicateOption<A, B> {
    (a: A): Option<B>
}
export {
    Predicate
}
const foldOr = fold(getFunctionMonoid(monoidAny)<any>())

/**
 * get type name
 * @typezh
 * 得到类型的名字
 * @example
 * import {getTypeName} from 'macoolka-predicate'
 * assert(getTypeName({})==='Object');
 * @param value
 * @since 0.2.0
 */
export const getTypeName = (value: unknown): string => {
    const typeofObj = typeof value
    if (typeofObj !== 'object' && typeofObj !== 'function') {
        return typeofObj
    }

    if (isNull(value)) {
        return 'null'
    }

    if (typeofObj === 'function') {
        return typeofObj
    }
    return Object.prototype.toString.call(value).slice(8, -1)
}

/**
 * Determines whether the passed value is given typen name.
 * @desczh
 * 判断是否输入值为指定的类型名
 * @example
 * import { isTypeName } from 'macoolka-predicate'
 * assert(isTypeName('Object')({}));
 * @since 0.2.0
 */
export const isTypeName = <T>(strTypeName: string): Refinement<unknown, T> =>
    (a: unknown): a is T => getTypeName(a) === strTypeName

/**
 * Determines whether the passed value is Argument.
 * @desczh
 * 判断是否输入值为`Argument`
 *
 * @since 0.2.0
 */
export const isArguments = isTypeName('Arguments')

/*
 * Determines whether the passed value is an Array.
 */
/**
 * Determines whether the passed value is Array.
 * @desczh
 * 判断是否输入值为`Array`
 * @example
 * import { isArray } from 'macoolka-predicate'
 *
 * assert(isArray([]))
 * assert(!isArray({}))
 * @since 0.2.0
 */
export const isArray = <T>(a: unknown): a is Array<T> => getTypeName(a) === 'Array'
/**
 * Determines whether the passed value is ArrayLike.
 * @desczh
 * 判断是否输入值为`ArrayLike`
 * @example
 * import { isArrayLike } from 'macoolka-predicate'
 * assert(isArrayLike([]))
 * assert(isArrayLike({ length: 8 }))
 * assert(!isArrayLike({}));
 * @since 0.2.0
 */
export const isArrayLike = (value: any) => value && typeof value.length === 'number'
/*
 * Determines whether the passed value is a Boolean instance.
 */
/**
 * Determines whether the passed value is Boolean.
 * @desczh
 * 判断是否输入值为`Boolean`
 * @example
 * import { isBoolean } from 'macoolka-predicate'
 * assert(isBoolean(true))
 * assert(!isBoolean(1))
 *
 * @since 0.2.0
 */
export const isBoolean: Refinement<unknown, boolean> =
    (a: unknown): a is boolean => 'boolean' === getTypeName(a)
/*
 * Determines whether the passed value is a Symbol instance.
 */
/**
 * Determines whether the passed value is symbol.
 * @desczh
 * 判断是否输入值为`symbol`
 * @example
 * import { isSymbol } from 'macoolka-predicate'
 * const a=Symbol('A')
 * assert(isSymbol(a))
 * assert(!isSymbol('b'))
 * @since 0.2.0
 */
export const isSymbol: Refinement<unknown, symbol> =
    (a: unknown): a is symbol => (typeof a) === 'symbol'

/**
 * Determines whether the passed value is Date.
 * @desczh
 * 判断是否输入值为`Date`
 * @example
 * import { isDate } from 'macoolka-predicate'
 * assert(isDate(new Date()))
 * assert(!isDate('a'))
 * @since 0.2.0
 */
export const isDate: Refinement<unknown, Date> = (a: unknown): a is Date => 'Date' === getTypeName(a)

/**
 * Determines whether the passed value is Empty.
 * @desczh
 * 判断是否输入值为`Empty`
 * @example
 * import { isEmpty } from 'macoolka-predicate'
 * assert(isEmpty(''))
 * assert(isEmpty(undefined))
 * assert(isEmpty(null))
 * assert(isEmpty({}))
 * assert(isEmpty([]))
 * assert(!isEmpty(['1']))
 * assert(!isEmpty({ a: 1 }))
 * @since 0.2.0
 */
export function isEmpty<T>(val: Maybe<T>): val is (undefined | null) {
    if (val == null) {
        return true
    } else if (typeof val === 'string') {
        return val.trim().length === 0
    } else if (typeof val === 'object') {
        return Object.keys(val).length === 0
    } else {
        return false
    }
}

/**
 * Determines whether the passed value is non Empty.
 * @desczh
 * 判断是否输入值为非空
 * @example
 * import { notEmpty } from 'macoolka-predicate'
 * assert(!notEmpty(''))
 * assert(!notEmpty(undefined))
 * assert(!notEmpty(null))
 * assert(!notEmpty({}))
 * assert(!notEmpty([]))
 * assert(notEmpty(['1']))
 * assert(notEmpty({ a: 1 }))
 * @since 0.2.0
 */
export function notEmpty<T>(val: Maybe<T>): val is T {
    return (not(isEmpty))(val)
}

/**
 * Determines whether the passed value is Empty Array.
 * @desczh
 * 判断是否输入值为`Empty Array`
 * @example
 * import { isEmptyArray } from 'macoolka-predicate'
 * assert(isEmptyArray([]))
 * assert(isEmptyArray(undefined))
 * assert(isEmptyArray(null))
 * assert(!isEmptyArray(['1']))
 * @since 0.2.0
 */
export const isEmptyArray = (val: unknown): boolean => {
    return isArray(val) && val.length === 0
}

/**
 * Determines whether the passed value is Non Empty Array.
 * @desczh
 * 判断是否输入值为`Non Empty Array`
 * @example
 * import { notEmptyArray } from 'macoolka-predicate'
 * assert(!notEmptyArray([]))
 * assert(!notEmptyArray(undefined))
 * assert(!notEmptyArray(null))
 * assert(notEmptyArray(['1']))
 * @since 0.2.0
 */
export const notEmptyArray = <T>(val: unknown): val is NonEmptyArray<T> => isArray(val) && val.length > 0

/**
 * Determines whether the passed value is Empty Record.
 * @desczh
 * 判断是否输入值为`Empty Record`
 * @example
 * import { isEmptyRecord } from 'macoolka-predicate'
 * assert(isEmptyRecord({}))
 * assert(isEmptyRecord(undefined))
 * assert(isEmptyRecord(null))
 * assert(!isEmptyRecord({ a: 1 }))
 * @since 0.2.0
 */
export const isEmptyRecord = (val: unknown): boolean => {
    return isObject(val) && Object.keys(val).length === 0

}

/**
 * Determines whether the passed value is Non Empty Record.
 * @desczh
 * 判断是否输入值为`Non Empty Record`
 * @example
 * import { notEmptyRecord } from 'macoolka-predicate'
 * assert(!notEmptyRecord({}))
 * assert(!notEmptyRecord(undefined))
 * assert(!notEmptyRecord(null))
 * assert(notEmptyRecord({ a: 1 }))
 * @since 0.2.0
 */
export const notEmptyRecord = <T>(val: Maybe<T>): val is AtLeastOne<T> => isObject(val) && Object.keys(val).length > 0

/**
 * Determines whether the passed value is Error.
 * @desczh
 * 判断是否输入值为`Error`
 * @example
 * import { isError } from 'macoolka-predicate'
 * assert(isError(new Error('')))
 * assert(!isError(''))
 * @since 0.2.0
 */
export const isError: Refinement<unknown, Error> =
    (a: unknown): a is Error => 'Error' === getTypeName(a)

/**
 * Determines whether the passed value is Finite.
 * @desczh
 * 判断是否输入值为`Finite`
 * @example
 * import { isFinite } from 'macoolka-predicate'
 * assert(isFinite(Number.MAX_VALUE))
 * assert(isFinite(Number.MIN_VALUE))
 * assert(isFinite('1'))
 * assert(!isFinite('a'))
 * @since 0.2.0
 */
export const isFinite: Predicate<unknown> = (val) => {

    return isString(val) && val !== ''
        ? Number.isFinite(parseFloat(val))
        : isNumber(val)
            ? Number.isFinite(val)
            : false

}

/**
 * Determines whether the passed value is Function.
 * @desczh
 * 判断是否输入值为`Function`
 * @example
 * import { isFunction } from 'macoolka-predicate'
 * assert(isFunction(() => void 0))
 * assert(!isFunction(1))
 * @since 0.2.0
 */
export const isFunction: Refinement<unknown, Function> =
    (a: unknown): a is Function => 'function' === getTypeName(a)

/**
 * Determines whether the passed value is Integer.
 * @desczh
 * 判断是否输入值为`Integer`
 * @example
 * import { isInteger } from 'macoolka-predicate'
 * assert(isInteger(1))
 * assert(!isInteger(1.1))
 * @since 0.2.0
 */
export const isInteger: Predicate<unknown> = (val: unknown) => {
    return isNumber(val) && (val % 1 === 0)
}

const REAL_ITERATOR_SYMBOL = Symbol.iterator
const getIterator = (iterable: any) => {
    const iteratorFn = notMaybe(iterable) &&
        ((iterable)[REAL_ITERATOR_SYMBOL])
    if (typeof iteratorFn === 'function') {
        return iteratorFn
    }
}
/**
 * Determines whether the passed value is Iterable.
 * @desczh
 * 判断是否输入值为`Iterable`
 * @example
 * import { isIterable } from 'macoolka-predicate'
 * assert(isIterable([]))
 * assert(!isIterable({}))
 * @since 0.2.0
 */
export const isIterable: Refinement<unknown, Iterable<unknown>> =
    (a: unknown): a is Iterable<unknown> => {
        return notMaybe(a) && (typeof getIterator(a) === 'function')
    }

/**
 * Determines whether the passed value is Iterator.
 * @desczh
 * 判断是否输入值为`Iterator`
 * @example
 * import { isIterator } from 'macoolka-predicate'
 * assert(isIterator({ next: () => void 0 }))
 * assert(!isIterator({}))
 * @since 0.2.0
 */
export const isIterator: Refinement<any, Iterator<unknown>> =
    <T>(a: any): a is Iterator<T> => {
        return a && typeof a.next === 'function'
    }

/**
 * Determines whether the passed value is NaN.
 * @desczh
 * 判断是否输入值为`NaN`
 * @example
 * import { isNaN } from 'macoolka-predicate'
 * assert(isNaN('a'))
 * assert(!isNaN(1));
 * @since 0.2.0
 */
export const isNaN = (val: unknown) => !isNumber(val) || $isNaN(Number(val))


/*tslint:disable */
const $isNaN = (val: unknown) => val != val;

/**
 * Determines whether the passed value is number.
 * @desczh
 * 判断是否输入值为`isNumber`
 * @example
 * import { isObject } from 'macoolka-predicate'
 * assert(isNumber(1))
 * assert(!isNumber('1'))
 * @since 0.2.0
 */
export const isNumber: Refinement<unknown, number> = (a: unknown): a is number => 'number' === getTypeName(a);


/**
 * Determines whether the passed value is a object.
 * @desczh
 * 判断是否输入值为`Object`
 * @example
 * import { isObject } from 'macoolka-predicate'
 * assert(isObject({}))
 * assert(isObject({ a: 1 }))
 * assert(!isObject(2))
 * @since 0.2.0
 */
export const isObject = (a: unknown): a is object => 'Object' === getTypeName(a);


/**
 * Determines whether the passed value is a RegExp.
 * @desczh
 * 判断是否输入值为`RegExp`
 * @example
 * import { isRegExp } from 'macoolka-predicate'
 * assert(isRegExp(/^a/))
 * assert(!isRegExp(1))
 * @since 0.2.0
 */
export const isRegExp: Refinement<unknown, RegExp> = (a): a is RegExp => 'RegExp' === getTypeName(a);
/**
 * Determines whether the passed value is same type
 * @desczh
 * 判断是否输入值为相同类型
 * @example
 * import { isString } from 'macoolka-predicate'
 * 
 * assert(isSameType('a', '3'));
 * assert(isSameType({ a: 1 }, { b: 2 }));
 * assert(!isSameType('a', { b: 2 }))
 * assert(!isSameType(1, false))
 * @since 0.2.0
 */
export const isSameType = (a: unknown, b: unknown) => getTypeName(a) === getTypeName(b);

/**
 * Determines whether the passed value is a string
 * @desczh
 * 判断是否输入值是否为`string`
 * @example
 * import { isString } from 'macoolka-predicate'
 * assert(isString('a'))
 * assert(!isString(1))
 * 
 * @since 0.2.0
 */

export const isString: Refinement<unknown, string> = (a: unknown): a is string => typeof a === 'string';



const UNDEF: any = undefined;


/**
 * Determines whether the passed value is a undefined .
 * @desczh
 * 判断是否输入值是否为`undefined`
 * @example
 * import { isUndefined } from 'macoolka-predicate'
 * import * as assert from 'assert'
 * 
 * assert(isUndefined(undefined))
 * assert(!isUndefined(null))
 * 
 * @since 0.2.0 
 */
export const isUndefined: Refinement<unknown, undefined> = (val): val is undefined => val === UNDEF;
/**
 * Determines whether the passed value is null.
 * @desczh
 * 判断是否输入值是否为`null`
 * @example
 * import { isNull } from 'macoolka-predicate'
 * import * as assert from 'assert'
 * assert(isNull(null))
 * assert(!isNull(undefined))
 * 
 * @since 0.2.0 
 */
export const isNull = <T>(val: T | null): val is null => val === null;
/**
 * Determines whether the passed value is null or undefined.
 * @desczh
 * 判断是否输入值是否为`null`或者`undefined`
 * @example
 * import { isMaybe } from 'macoolka-predicate'
 * import * as assert from 'assert'
 * 
 * assert(isMaybe(undefined))
 * assert(isMaybe(null))
 * assert(!isMaybe(''))
 * 
 * @since 0.2.0 
 */
export function isMaybe<T>(value: Maybe<T>): value is (null | undefined) {
    return foldOr([isNull, isUndefined])(value)
}
/**
 * Determines whether the passed value is not null or undefined.
 * @desczh
 * 判断是否输入值不为`null`或者`undefined`
 * @example
 * import { notMaybe } from 'macoolka-predicate'
 * import * as assert from 'assert'
 * assert(!notMaybe(undefined))
 * assert(!notMaybe(null))
 * assert(notMaybe(''))
 * 
 * @since 0.2.0 
 */
export function notMaybe<T>(value: Maybe<T>): value is T {
    return !foldOr([isNull, isUndefined])(value)
}
