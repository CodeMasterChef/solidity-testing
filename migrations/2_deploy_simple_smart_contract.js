const SimpleSmartContract = artifacts.require('SimpleSmartContract');
const HelloWorld = artifacts.require('HelloWorld');
const SimpleStorage = artifacts.require('SimpleStorage');

module.exports = function (deployer) {
  deployer.deploy(SimpleSmartContract);
  deployer.deploy(HelloWorld);
  deployer.deploy(SimpleStorage);
};
