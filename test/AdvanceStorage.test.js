const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
    let advancedStorage = null;
    let id1 = 10;
    let id2 = 20;
    before(async () => {
        advancedStorage = await AdvancedStorage.deployed();
    })
    it('Should add element to ids array', async () => {
        await advancedStorage.add(id1);
        const element = await advancedStorage.ids(0);
        // Use toNumber() for BigNumber (uint from Solidity will return the BigNumber)
        /* BN {
            negative: 0,
            words: [ 10, <1 empty item> ],
            length: 1,
            red: null
          } */
        assert.equal(element.toNumber(), id1);
        // OR use like below because the .equal() supports BN comparation.
        // assert.equal(element, id);
    })

    it('Should return an element from ids array', async () => {
        await advancedStorage.add(id2);
        const element = await advancedStorage.get(1);
        assert.equal(element.toNumber(), id2);
    })


    it('Should return all elements of ids array', async () => {
        const rawIds = await advancedStorage.getAll();
        // convert BigNumber[] to Javacript array (number[])
        const ids = rawIds.map(id => id.toNumber());
        assert.deepEqual(ids, [id1, id2]);
    })

    it('Should return the length of ids array', async () => {
        const length = await advancedStorage.length();
        assert.equal(length, 2);
    })



})