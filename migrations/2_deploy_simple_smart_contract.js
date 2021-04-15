const SimpleSmartContract = artifacts.require("SimpleSmartContract");
const HelloWorld = artifacts.require('HelloWorld');
module.exports = function (deployer) {
  deployer.deploy(SimpleSmartContract);
  deployer.deploy(HelloWorld);
};
