const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
    it('Should add element to ids array', async () => {
        const advancedStorage = await AdvancedStorage.deployed();
        const id = 10;
        await advancedStorage.add(id);
        const element = await advancedStorage.ids(0);
        // Use toNumber() for BigNumber (uint from Solidity will return the BigNumber)
        /* BN {
            negative: 0,
            words: [ 10, <1 empty item> ],
            length: 1,
            red: null
          } */
        assert.equal(element.toNumber(), id);
        // OR use like below because .equal() supports BN comparation.
        // assert.equal(element, id);
    })

    it('Should return an element from ids array', async () => {
        const advancedStorage = await AdvancedStorage.deployed();
        const id = 20;
        await advancedStorage.add(id);
        const element = await advancedStorage.get(1);
        assert.equal(element.toNumber(), id);
    })


    it('Should return all elements of ids array', async () => {
        const advancedStorage = await AdvancedStorage.deployed();
        const rawIds = await advancedStorage.getAll();
        // convert BigNumber[] to Javacript array (number[])
        const ids = rawIds.map(id => id.toNumber());
        assert.deepEqual(ids, [10, 20]);
    })

    it('Should return the length of ids array', async () => {
        const advancedStorage = await AdvancedStorage.deployed();
        const length = await advancedStorage.length();
        assert.equal(length, 2);
    })



})