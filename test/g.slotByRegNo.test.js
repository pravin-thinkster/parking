let expect = require('chai').expect;
let parking = require('../Controller/ParkingConroller');

describe('slot_number_for_registration_number KA-01-HH-9999', async function () {
    it('should show slot numbers of park KA-01-HH-9999 car', async function () {
        var result = await parking.getSlotNumberFromRegNo('KA-01-HH-9999');
        var preResult = 2
        expect(result).to.be.equal(preResult);
      });
});