const expect = require('expect');

const {isRealString} = require('./validation');

describe ('isRealString', () => {
    it('should reject non-string values', () => {
        let str = 0;
        expect(isRealString(str)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        let str = '      ';
        expect(isRealString(str)).toBe(false);
    });

    it('should allow string non-space characters', () => {
        let str1 = 'string1';
        let str2 = 'st   ring2';
        expect(isRealString(str1)).toBe(true);
        expect(isRealString(str2)).toBe(true);
    });
})