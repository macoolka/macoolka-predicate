import {
    isMaybe, notMaybe, isUndefined, isNull, isString, isNumber,
    isBoolean, isObject, isError, isRegExp, isInteger, isNaN, isSameType,
    getTypeName, isArray, isArrayLike, isTypeName, isSymbol, isDate, isEmpty,
    notEmpty, isEmptyArray, isFunction, isFinite, isIterable, isIterator, isEmptyRecord, notEmptyRecord, notEmptyArray
} from '../type'
import * as assert from 'assert'
describe('predicate', () => {

    it('getTypeName', () => {
        assert(getTypeName({}) === 'Object');
        assert(getTypeName(null) === 'null');
    });
    it('isTypeName', () => {
        assert(isTypeName('Object')({}));
    });
    it('isSymbol', () => {
        const a = Symbol('A')
        assert(isSymbol(a))
        assert(!isSymbol('b'))
    });
    it('isArray', () => {
        assert(isArray([]))
        assert(!isArray({}))
    });

    it('isArrayLike', () => {
        assert(isArrayLike([]))
        assert(isArrayLike({ length: 8 }))
        assert(!isArrayLike({}));
    });
    it('isBoolean', () => {
        assert(isBoolean(true))
        assert(!isBoolean(1))
    });
    it('isRegExp', () => {
        assert(isRegExp(/^a/))
        assert(!isRegExp(1))
    });
    it('isDate', () => {
        assert(isDate(new Date()))
        assert(!isDate('a'))
    });
    it('isEmpty', () => {
        assert(isEmpty(''))
        assert(isEmpty(undefined))
        assert(isEmpty(null))
        assert(!isEmpty(1))
        assert(isEmpty({}))
        assert(isEmpty([]))
        assert(!isEmpty(['1']))
        assert(!isEmpty({ a: 1 }))
    });

    it('notEmpty', () => {
        assert(!notEmpty(''))
        assert(!notEmpty(undefined))
        assert(!notEmpty(null))
        assert(!notEmpty({}))
        assert(!notEmpty([]))
        assert(notEmpty(['1']))
        assert(notEmpty({ a: 1 }))
    });
    it('isEmptyArray', () => {
        assert(isEmptyArray([]))
        assert(!isEmptyArray(['1']))
    });
    it('notEmptyArray', () => {
        assert(!notEmptyArray([]))
        assert(notEmptyArray(['1']))
    });
    it('isEmptyRecord', () => {
        assert(isEmptyRecord({}))
        assert(!isEmptyRecord({ a: 1 }))
    });
    it('notEmptyRecord', () => {
        assert(!notEmptyRecord({}))
        assert(notEmptyRecord({ a: 1 }))

    });
    it('isFinite', () => {
        assert(isFinite(Number.MAX_VALUE))
        assert(isFinite(Number.MIN_VALUE))
        assert(isFinite('1'))
        assert(isFinite(Number(1)))
        assert(!isFinite(true))
        assert(!isFinite('a'))
    });
    it('isFunction', () => {
        assert(isFunction(() => void 0))
        assert(!isFunction(1))
    });
    it('isInteger', () => {
        assert(isInteger(1))
        assert(!isInteger(1.1))
    });
    it('isIterable', () => {
        assert(isIterable([]))
        assert(!isIterable({}))
    });
    it('isIterator', () => {
        assert(isIterator({ next: () => void 0 }))
        assert(!isIterator({}))
    });
    it('isError', () => {
        assert(isError(new Error('')))
        assert(!isError(''))
    });
    it('isNaN', () => {
        assert(isNaN('a'))
        assert(!isNaN(1));
    });
    it('isNumber', () => {
        assert(isNumber(1))
        assert(!isNumber('1'))
    });

    it('isObject', () => {
        assert(isObject({}))
        assert(isObject({ a: 1 }))
        assert(!isObject(2))
    });

    it('isSameType', () => {
        assert(isSameType('a', '3'));
        assert(isSameType({ a: 1 }, { b: 2 }));
        assert(!isSameType('a', { b: 2 }))
        assert(!isSameType(1, false))
    });
    it('isString', () => {
        assert(isString('a'))
        assert(!isString(1))
    });
    it('isNull', () => {
        assert(isNull(null))
        assert(!isNull(undefined))
    });
    it('isUndefined', () => {
        assert(isUndefined(undefined))
        assert(!isUndefined(null))
    });
    it('isMaybe', () => {
        assert(isMaybe(undefined))
        assert(isMaybe(null))
        assert(!isMaybe(''))
    });
    it('notMaybe', () => {
        assert(!notMaybe(undefined))
        assert(!notMaybe(null))
        assert(notMaybe(''))
    });

});
