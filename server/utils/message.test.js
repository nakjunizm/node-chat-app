const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let res = generateMessage('admin','Gday');
        expect(res.from).toBe('admin');
        expect(res.text).toBe('Gday');
        expect(typeof res.createdAt).toBe('number');
    });

});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let res = generateLocationMessage('admin',1,2);
        expect(res.from).toBe('admin');
        expect(res.url).toBe(`https://www.google.com/maps?q=1,2`);
    });
});