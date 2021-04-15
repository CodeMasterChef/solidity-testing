const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
    it('Should add element to ids array', async () => {
        const advancedStorage = await AdvancedStorage.deployed();
        const value = 12;
        const element = await advancedStorage.ids(0);
        assert.equal(element, value);
        // OR using toNumber() for big number
        //assert(element.toNumber() === value);
    })

})