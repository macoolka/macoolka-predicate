import { eq, not_eq, lt, lte, gt, gte, between } from '../basic'
import * as assert from 'assert'
describe('logic', () => {
    it('eq', () => {
        assert(eq('a')('a'))
        assert(eq(1)(1))
        assert(eq(true)(true))
        assert(!eq('a')('b'))
        assert(!eq(1)(2))
        assert(!eq(true)(false))

    })
    it('not_eq', () => {
        assert(!not_eq('a')('a'))
        assert(!not_eq(1)(1))
        assert(!not_eq(true)(true))
        assert(not_eq('a')('b'))
        assert(not_eq(1)(2))
        assert(not_eq(true)(false))
    })
    it('lt', () => {
        assert(lt('b')('a'))
        assert(lt(2)(1))
        assert(!lt('a')('a'))
        assert(!lt('a')('b'))
        assert(!lt(1)(1))
        assert(!lt(1)(2))
    })
    it('lte', () => {
        assert(lte('b')('a'))
        assert(lte(2)(1))
        assert(lte('a')('a'))
        assert(!lte('a')('b'))
        assert(lte(1)(1))
        assert(!lte(1)(2))
    })
    it('gt', () => {
        assert(!gt('b')('a'))
        assert(!gt(2)(1))
        assert(!gt('a')('a'))
        assert(gt('a')('b'))
        assert(!gt(1)(1))
        assert(gt(1)(2))
    })
    it('gte', () => {
        assert(!gte('b')('a'))
        assert(!gte(2)(1))
        assert(gte('a')('a'))
        assert(gte('a')('b'))
        assert(gte(1)(1))
        assert(gte(1)(2))
    })
    it('between', () => {
        assert(between({ hi: 'c', low: 'a' })('b'))
        assert(between({ hi: 'c', low: 'a' })('a'))
        assert(between({ hi: 'c', low: 'a' })('c'))
        assert(!between({ hi: 'c', low: 'a' })('d'))
        assert(between({ hi: 3, low: 1 })(2))
        assert(between({ hi: 3, low: 1 })(3))
        assert(between({ hi: 3, low: 1 })(1))
        assert(!between({ hi: 3, low: 1 })(4))
    })
})