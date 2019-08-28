import { or, foldOR, and, foldAND,not } from '../logic'
interface A {
    name: string,
    age: number
}
const as: A[] = [
    { name: 'a1', age: 20 },
    { name: 'a2', age: 20 },
    { name: 'a3', age: 28 }
]
const isName = (a: A) => a.name === 'a1'
const isAge = (a: A) => a.age === 20
describe('logic', () => {
    it('foldOR', () => {
        expect(as.filter(foldOR([isName, isAge])).length).toEqual(2)

    })
    it('foldAND', () => {
        expect(as.filter(foldAND([isName, isAge])).length).toEqual(1)
    })
    it('or', () => {
        expect(as.filter(or(isName, isAge)).length).toEqual(2)
    })
    it('and', () => {
        expect(as.filter(and(isName, isAge)).length).toEqual(1)
    })
    it('and', () => {
        expect(as.filter(not(and(isName, isAge))).length).toEqual(2)
    })
})