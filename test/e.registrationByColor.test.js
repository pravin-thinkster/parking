let expect = require('chai').expect;
let parking = require('../Controller/ParkingConroller');

describe('registration_numbers_for_cars_with_colour white', async function () {
    it('should show registration numbers of white cars', async function () {
        var result = await parking.getRegistrationNumbersFromColor('White');
        var preResult = 'KA-01-HH-1234,KA-01-HH-9999'
        console.log(result);
        expect(result).to.be.equal(preResult);
      });
});