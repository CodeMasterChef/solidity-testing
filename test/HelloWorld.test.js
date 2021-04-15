const HelloWorld = artifacts.require('HelloWorld');

contract('HelloWorld', () => {
  it('should return Hello World', async () => {
    const helloWorld = await HelloWorld.deployed();
    const message = await helloWorld.hello();
    // OR: assert(message === 'Hello World');
    assert.equal(message, 'Hello World');
  })
})