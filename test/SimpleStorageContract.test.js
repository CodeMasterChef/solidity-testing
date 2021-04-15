const SimpleStorage = artifacts.require('SimpleStorage');
contract('SimpleStorage', () => {
    it('Should set the value of data variable', async () => {
        const simpleStorage = await SimpleStorage.deployed();
        const value = 'this is sample';
        await simpleStorage.set(value);
        const result = await simpleStorage.get();
        assert.equal(result, value);
    })

    it('Should get the correct value of data variable', async () => {
        const simpleStorage = await SimpleStorage.deployed();
        const value = 'this is sample';
        await simpleStorage.set(value);
        const result = await simpleStorage.get();
        assert.notEqual(result, 'this is not sample');
    })
})