const AdvancedStorage = artifacts.require('AdvancedStorage');

contract('AdvancedStorage', () => {
  it('Should add element to ids array', async () => {
    const advancedStorage = await AdvancedStorage.deployed();
    const value = 10;
    await advancedStorage.add(value);
    const element = await advancedStorage.ids(0);
    assert.equal(element, value);
    // OR using toNumber() for big number
    //assert(element.toNumber() === value);
  })

  it('Should get element from ids array', async () => {
    const advancedStorage = await AdvancedStorage.deployed();
    const value = 20;
    await advancedStorage.add(value);
    const element = await advancedStorage.get(1);
    assert.equal(element.toNumber(), value);
  })

  it('Should return length of ids array', async () => {
    const advancedStorage = await AdvancedStorage.deployed();
    const length = await advancedStorage.length();
    assert.equal(length, 2);
  })



})