/**
 * String predicate collection.
 * @desczh
 * 文本predicate函数集合
 * @since 0.2.0
 * @file
 */
import { not } from './logic'
import * as Option from 'fp-ts/lib/Option'
const url = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
const ipV4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
const ipV6 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
/**
 * Determines whether the given string length less equals than given value.
 * @desczh
 * 判断文本长度是否小于等于输入的最大长度
 * @example
 * import { maxLength } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(maxLength(3)('123'))
 * assert(!maxLength(3)('1234'))
 * @since 0.2.0
 */
export const maxLength = (length: number) => (a: string) => a.length <= length
/**
 * Determines whether the given string length great equals than given value.
 * @desczh
 * 判断文本长度是否大于等于输入的最小长度
 * @example
 * import { minLength } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(minLength(3)('123'))
 * assert(!minLength(3)('12'))
 * @since 0.2.0
 */
export const minLength = (length: number) => (a: string) => a.length >= length
/**
 * Determines whether the given string match `regexp`.
 * @desczh
 * 判断文本是否匹配正则表达式
 * @example
 * import { match } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(match(/^A/)('AB'))
 * assert(!match(/^A/)('12'))
 * @since 0.2.0
 */
export const match = (reg: RegExp) => (a: string) => reg.test(a)
/**
 * Determines whether the given string is `Url`.
 * @desczh
 * 判断文本是否为`Url`
 * @example
 * import { isUrl } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * expect(isUrl('http://bing.com'))
 * expect(!isUrl('8.8.8.8'))
 * @since 0.2.0
 */
export const isUrl = match(url)
/**
 * Determines whether the given string is `IPV6`.
 * @desczh
 * 判断文本是否为`IPV6`
 * @example
 * import { isIpV6 } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(isIpV6('2409:8a15:244a:a780:b0f5:8e9a:2c2e:5ce2'))
 * assert(!isIpV6('8.8.8.8'))
 * @since 0.2.0
 */
export const isIpV6 = match(ipV6)
/**
 * Determines whether the given string is `UUID`.
 * @desczh
 * 判断文本是否为`UUID`
 * @example
 * import { isUrl } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(isUUID('00000000-0000-0000-0000-000000000000'))
 * assert(!isUUID('8.8.8.8'))
 * @since 0.2.0
 */
export const isUUID = match(UUID)
/**
 * Determines whether the given string is `Email`.
 * @param value
 * 判断文本是否为`Email`
 * @example
 * import { isEmail } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(isEmail('a@mail.com'))
 * assert(!isEmail('12'))
 * @since 0.2.0
 */
export const isEmail = match(email)
/**
 * Determines whether the given string is `IPV4`.
 * @param value
 * 判断文本是否为`IPV4`
 * @example
 * import { isIpV4 } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(isIpV4('8.8.8.8'))
 * assert(!isIpV4('12'))
 * @since 0.2.0
 */
export const isIpV4 = match(ipV4)

/**
 * Determines whether the given string ends with given suffix.
 * @param value
 * 判断文本是否以给定的字符结尾
 * @example
 * import { endsWith } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(endsWith('b')('ab'))
 * assert(endsWith('b')('ab1')===false);
 * @since 0.2.0
 */
export const endsWith = (suffix: string) => (str: string) => str.length >= suffix.length &&
    str.indexOf(suffix, str.length - suffix.length) === str.length - suffix.length
/**
 * Determines whether the given string ends with given suffix.
 * remove given suffix when ture
 * @param value
 * 判断文本是否以给定的字符结尾,如果是，移除结尾字符
 * @example
 * import { endsWithOption } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * expect(endsWithOption('firstColorHover')('firstColorHover')).toEqual(some(''));
 * expect(endsWithOption('b')('ab')).toEqual(some('a'));
 * assert(endsWithOption('b')('ab1') === none);
 * @since 0.2.0
 */
export const endsWithOption = (suffix: string) => (str: string) =>
    endsWith(suffix)(str) ?
        Option.some(str.substring(0, str.length - suffix.length))
        : Option.none

/**
 * Determines whether the given string ends with given suffix array.
 * @param value
 * 判断文本是否以给定的字符结尾.
 * @example
 * import { endsIn } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(endsIn(['start_with', 'end_with'])('a_start_with'))
 * assert(endsIn(['start_with', 'end_with'])('a_end_with'))
 * assert(!endsIn(['start_with', 'end_with'])('a_endwith'))
 * assert(!endsIn(['start_with', 'end_with'])(''))
 * @since 0.2.0
 */
export const endsIn = (suffix: Array<string>) => (str: string) =>
    suffix.some(a => endsWith(a)(str))
/**
 * Determines whether the given string ends with given suffix array.
 * split given string when ture
 * @param value
 * 判断文本是否以给定的字符结尾,如果是，拆分给定的文本.
 * @example
 * import { endsInOption } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(endsInOption(['_start_with', '_end_with'])('') == none);
 * expect(endsInOption(['_start_with', '_end_with'])('a_start_with')).toEqual(some({ start: 'a', end: '_start_with' }));
 * expect(endsInOption(['_start_with', '_end_with'])('a_end_with')).toEqual(some({ start: 'a', end: '_end_with' }));
 * expect(endsInOption(['_start_with', '_end_with'])('a_endwith') == none);
 * @since 0.2.0
 */
export const endsInOption = (suffix: Array<string>) => (str: string) => {
    for (const a of suffix) {
        const result = endsWithOption(a)(str)
        if (Option.isSome(result)) {
            return Option.some({
                start: result.value,
                end: a
            })
        }

    }
    return Option.none
}

/**
 * Determines whether the given string non ends with given suffix.
 * @param value
 * 判断文本是否没有以给定的字符结尾.
 * @example
 * import { notEndsWith } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(!notEndsWith('firstColorHover')('firstColorHover'))
 * assert(!notEndsWith('Hover')('firstColorHover'))
 * assert(notEndsWith('b')('firstColorHover'))
 * @since 0.2.0
 */

export const notEndsWith = (substring: string) => not(endsWith(substring))

/**
 * Determines whether the given string contain passed string.
 * @param value
 * 判断文本是否包含给定的字符.
 * @example
 * import { contains } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(contains('firstColorHover')('firstColorHover'));
 * assert(contains('Color')('firstColorHover'));
 * assert(contains('er')('firstColorHover'));
 * assert(contains('fi')('firstColorHover'));
 * assert(!contains('abc')('firstColorHover'))
 * @since 0.2.0
 */
export const contains = (substring: string) => (str: string) =>
    str.indexOf(substring, 0) !== -1
/**
 * Determines whether the given string be contained in  with passed string array.
 * @param value
 * 判断文本是否在给定的数组中.
 * @example
 * import { ins } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(ins(['firstColorHover', 'b'])('firstColorHover'));
 * assert(!ins(['firstColorHover1', 'b'])('firstColorHover'))
 * });
 * @since 0.2.0
 */
export const ins = (v: Array<string>) => (str: string) =>
    v.includes(str)

/**
 * Determines whether the given string be not contained in  with passed string array.
 * @param value
 * 判断文本是否不在给定的数组中.
 * @example
 * import { notIn } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(!notIn(['firstColorHover', 'b'])('firstColorHover'))
 * assert(notIn(['firstColorHover1', 'b'])('firstColorHover'));
 * @since 0.2.0
 */
export const notIn = (a: Array<string>) => (str: string) =>
    !ins(a)(str)

/**
 * Determines whether the given string non contain passed string.
 * @param value
 * 判断文本是否不包含给定的字符.
 * @example
 * import { notContains } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(!notContains('firstColorHover')('firstColorHover'))
 * assert(!notContains('Color')('firstColorHover'))
 * assert(!notContains('er')('firstColorHover'))
 * @since 0.2.0
 */
export const notContains = (substring: string) => not(contains(substring))

/**
 * Determines whether the given string start with given suffix.
 * @param value
 * 判断文本是否以给定的字符开头
 * @example
 * import { startsWith } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(startsWith('a')('ab'));
 * assert(startsWith('a')('ba')===false);
 * assert(startsWith('b')('firstColorHover')===false);
 * @since 0.2.0
 */
export const startsWith = (suffix: string) => (str: string) => {

    return str.length >= suffix.length && str.indexOf(suffix) === 0
}

/**
 * Determines whether the given string non start with given suffix.
 * @param value
 * 判断文本是否不以给定的字符开头
 * @example
 * import { notStartsWith } from 'mocoolka-predicate'
 * import * as assert from 'assert'
 * assert(notStartsWith('firstColorHove')('firstColorHover')===false);
 * assert(notStartsWith('b')('firstColorHover'));
 * @since 0.2.0
 */
export const notStartsWith = (substring: string) => not(startsWith(substring))
