let expect = require('chai').expect;
let parking = require('../Controller/ParkingConroller');

describe('create_parking_lot 6', async function () {
    it('Should create 6 parking slot', async function () {
        var positive = 'Created a parking lot with 6 slots';
        var result = await parking.create(6);
        console.log(result);
        expect(result).to.be.equal(positive)
    })
});