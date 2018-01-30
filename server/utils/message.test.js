const expect = require('expect');
const {generateMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let res = generateMessage('admin','Gday');
        expect(res.from).toBe('admin');
        expect(res.text).toBe('Gday');
        expect(typeof res.createdAt).toBe('number');
    });

});