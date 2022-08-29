let expect = require('chai').expect;
let parking = require('../Controller/ParkingConroller');

describe('slot_numbers_for_cars_with_colour white', async function () {
    it('should show slot numbers of white cars', async function () {
        var result = await parking.getSlotNumbersFromColor('White');
        var preResult = '1,2'
        console.log(result);
        expect(result).to.be.equal(preResult);
      });
});