import {
    contains, notContains, ins, notIn, startsWith, endsWith, endsWithOption,
    notStartsWith, notEndsWith, maxLength, minLength, match, isEmail,
    isIpV4, isIpV6, isUUID, isUrl, endsIn, endsInOption
} from '../string'
import {
    some, none
} from 'fp-ts/lib/Option';
import * as assert from 'assert'


describe('string', () => {
    it('maxLength', () => {
        assert(maxLength(3)('123'))
        assert(!maxLength(3)('1234'))
    })
    it('minLength', () => {
        assert(minLength(3)('123'))
        assert(!minLength(3)('12'))
    })
    it('match', () => {
        assert(match(/^A/)('AB'))
        assert(!match(/^A/)('12'))
    })
    it('isEmail', () => {
        assert(isEmail('a@mail.com'))
        assert(!isEmail('12'))
    })
    it('isIpV4', () => {
        assert(isIpV4('8.8.8.8'))
        assert(!isIpV4('12'))
    })
    it('isIpV6', () => {
        assert(isIpV6('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2'))
        assert(!isIpV6('8.8.8.8'))
    })
    it('isUrl', () => {
        expect(isUrl('http://bing.com'))
        expect(!isUrl('8.8.8.8'))
    })
    it('isUUID', () => {
        assert(isUUID('00000000-0000-0000-0000-000000000000'))
        assert(!isUUID('8.8.8.8'))
    })
    it('contains', () => {
        assert(contains('firstColorHover')('firstColorHover'));
        assert(contains('Color')('firstColorHover'));
        assert(contains('er')('firstColorHover'));
        assert(contains('fi')('firstColorHover'));
        assert(!contains('abc')('firstColorHover'))
    });
    it('notContains', () => {
        assert(!notContains('firstColorHover')('firstColorHover'))
        assert(!notContains('Color')('firstColorHover'))
        assert(!notContains('er')('firstColorHover'))
        assert(!notContains('fi')('firstColorHover'))
        assert(notContains('abc')('firstColorHover'));
    });
    it('ins', () => {
        assert(ins(['firstColorHover', 'b'])('firstColorHover'));
        assert(!ins(['firstColorHover1', 'b'])('firstColorHover'))
    });
    it('notIn', () => {
        assert(!notIn(['firstColorHover', 'b'])('firstColorHover'))
        assert(notIn(['firstColorHover1', 'b'])('firstColorHover'));
    });
    it('startsWith', () => {


        assert(startsWith('firstColorHover')('firstColorHover'));
        assert(startsWith('firstColorHove')('firstColorHover'));
        assert(startsWith('a')('ab'));
        assert(startsWith('a')('ba')===false);
        assert(startsWith('b')('firstColorHover')===false);
    });
    it('notStartsWith', () => {
        assert(notStartsWith('firstColorHover')('firstColorHover')===false);
        assert(notStartsWith('firstColorHove')('firstColorHover')===false);
        assert(notStartsWith('b')('firstColorHover'));
    });
    it('endsWith', () => {
        assert(endsWith('firstColorHover')('firstColorHover'))
        assert(endsWith('b')('ab'))
        assert(endsWith('b')('ab1')===false);

        assert(endsWith('abc')('babcd')===false);
        assert(endsWith('abc')('babccabc'))
        assert(endsWith('Hover')('firstColorHover'));
        assert(endsWith('b')('firstColorHover')===false);
        assert(endsWith('end_with')('a_endwith')===false);
        assert(endsWith('start_with')('a_endwith')===false);
        assert(endsWith('dddddddddd')('a_endwith')===false);
    });
    it('endsWithOption', () => {
        expect(endsWithOption('firstColorHover')('firstColorHover')).toEqual(some(''));
        expect(endsWithOption('b')('ab')).toEqual(some('a'));
        assert(endsWithOption('b')('ab1') === none);

        assert(endsWithOption('abc')('babcd') === none);
        expect(endsWithOption('abc')('babccabc')).toEqual(some('babcc'));

        expect(endsWithOption('_end_with')('a_end_with')).toEqual(some('a'));
        assert(endsWithOption('start_with')('a_endwith') === none);
        assert(endsWithOption('dddddddddd')('a_endwith') === none);
    });

    it('endsIn', () => {
        assert(endsIn(['start_with', 'end_with'])('a_start_with'))
        assert(endsIn(['start_with', 'end_with'])('a_end_with'))
        assert(!endsIn(['start_with', 'end_with'])('a_endwith'))
        assert(!endsIn(['start_with', 'end_with'])(''))

    });
    it('endsInOption', () => {
        assert(endsInOption(['_start_with', '_end_with'])('') == none);
        expect(endsInOption(['_start_with', '_end_with'])('a_start_with')).toEqual(some({ start: 'a', end: '_start_with' }));
        expect(endsInOption(['_start_with', '_end_with'])('a_end_with')).toEqual(some({ start: 'a', end: '_end_with' }));
        expect(endsInOption(['_start_with', '_end_with'])('a_endwith') == none);
       

    });
    it('notEndsWith', () => {
        assert(!notEndsWith('firstColorHover')('firstColorHover'))
        assert(!notEndsWith('Hover')('firstColorHover'))
        assert(notEndsWith('b')('firstColorHover'))
    });
});