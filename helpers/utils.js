let search = async (slot, carArray) => {
    const is_slot_exist = carArray.some(car=> car.slot === slot)
    return is_slot_exist;
}


const remove = (slot, carArray) => {
    carArray = carArray.filter(function( obj ) {
        return obj.slot !== slot;
    });
    return carArray;
}
module.exports = {
    search,
    remove
}