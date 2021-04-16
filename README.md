# Solidity Testing:
It is important for testing Solidity smart contracts before deploying them in to mainnet. Because the smart contract code is immutable.

Truffle uses the [Mocha](https://mochajs.org/) testing framework and [Chai](https://www.chaijs.com/) for assertions to provide you with a solid framework from which to write your JavaScript tests.

Example practises from homepage: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
# How to run:
## Compile smart contracts:
```bash
$ truffle compile

Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/SimpleSmartContract.sol
> Artifacts written to /Users/macos/Code/CodeForFun/solidity-samples/solidity-testing/build/contracts
> Compiled successfully using:
   - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang
```
## Deploy smart contracts:
```bash
$ truffle migrate

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x22f64fc60a542752aa989e4f512d95d5f993ece7e576a808c9b43c6d72be47f0
   > Blocks: 0            Seconds: 0
   > contract address:    0x093F4E52dE6431c922DD9Ad9948b449dDD7Ecd84
   > block number:        11
   > block timestamp:     1618356858
   > account:             0xb5A0E70a9B6D74ab466642b6C55C07fC6f537e24
   > balance:             99.92767882
   > gas used:            244300 (0x3ba4c)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.004886 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:            0.004886 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.004886 ETH


macos@macOS solidity-testing % truffle test
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

```
## Test smart contracts:
```
$ truffle test
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: SimpleSmartContract
0x204D5CAA78C64AD0f296bD971d8887D281927E1b
    ✓ Should deploy smart contract properly


  1 passing (36ms)
```

# Some notes:

```javascript
const simpleSmartContract = await SimpleSmartContract.deployed();
```
deployed() DOES NOT deploy a contract by itself. It only return you a Javascript object pointing to an already deployed smart contract.

The files in `migrations` folder are used to defined what should be deployed.