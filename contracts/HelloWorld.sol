// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
  // Pure functions ensure that they not read or modify the state.
  // Add memory keyword for string parameter, which was introduced in Solidity version 0.5.0
  function hello() pure public returns(string memory) {
    return 'Hello World';
  }
}