// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Crud {
    struct User {
        uint id;
        string name;
    }
    User[] public users;
    uint nextId = 1;

    function create(string memory _name) public {
        users.push(User(nextId , _name));
        nextId++;
    }

    function read(uint _id) public view returns(uint , string memory) {
    
    }
}