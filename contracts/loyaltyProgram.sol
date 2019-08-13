pragma solidity ^0.5.0;

contract loyaltyProgram {
    mapping (address => uint) private balances;
    address public owner;
    string name;
    uint number;

    constructor() public payable {
        /* Set the owner to the creator of this contract */
        owner = msg.sender;
    }
    
    /// Join a customer with the loyalty program
    function join() public returns (uint){
        address user = msg.sender;
        return user.balance;
    }

    /// Reads balance of the account requesting
    function balance() public view returns (uint) {
        return balances[msg.sender];
    }
    function test(string memory _name, uint _number) public {
        name = _name;
        number= _number;
        join();
    }
}