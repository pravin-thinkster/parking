let expect = require('chai').expect;
let parking = require('../Controller/ParkingConroller');

describe('status', async function () {
    it('should show all status', async function () {
        var positive = 5;
        var result = await parking.status('status');
        console.log(`Total car is present :- ${result}`);
        expect(result).to.be.equal(positive)
    })
});