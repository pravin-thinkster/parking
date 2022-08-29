let expect = require('chai').expect;
let parking = require('../Controller/ParkingConroller');

describe('leave 4', async function () {
    it('should free slot no 4', async function () {
        var positive = 'Slot numbmer 4 is free';
        var result = await parking.leave(4);
        console.log(result);
        expect(result).to.be.equal(positive)
    })
});