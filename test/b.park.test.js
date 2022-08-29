let expect = require('chai').expect;
let parking = require('../Controller/ParkingConroller');


describe('park KA-01-HH-1234 White', async function () {
    it('should park the car', async function () {
        var positive = 'Allocated slot number: 1';
        var result = await parking.park('KA-01-HH-1234', 'White');
        console.log(result);
        expect(result).to.be.equal(positive)
    })
});

describe('park KA-01-HH-9999 White', async function () {
    it('should park the car', async function () {
        var positive = 'Allocated slot number: 2';
        var result = await parking.park('KA-01-HH-9999', 'White');
        console.log(result);
        expect(result).to.be.equal(positive)
    })
});

describe('park KA-01-BB-5573 Black', async function () {
    it('should park the car', async function () {
        var positive = 'Allocated slot number: 3';
        var result = await parking.park('KA-01-BB-5573', 'Black');
        console.log(result);
        expect(result).to.be.equal(positive)
    })
});


describe('park KA-01-HH-8822 Red', async function () {
    it('should park the car', async function () {
        var positive = 'Allocated slot number: 4';
        var result = await parking.park('KA-01-HH-8822', 'Red');
        console.log(result);
        expect(result).to.be.equal(positive)
    })
});

describe('park KA-01-HH-9911 Green', async function () {
    it('should park the car', async function () {
        var positive = 'Allocated slot number: 5';
        var result = await parking.park('KA-01-HH-9911', 'Green');
        console.log(result);
        expect(result).to.be.equal(positive)
    })
});

describe('park KA-01-BB-8923 Black', async function () {
    it('should park the car', async function () {
        var positive = 'Allocated slot number: 6';
        var result = await parking.park('KA-01-BB-8923', 'Black');
        console.log(result);
        expect(result).to.be.equal(positive)
    })
});