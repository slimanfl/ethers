//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract Message {
  string private message;
  constructor(string memory _message) {
      console.log("Deploying a Message with message:", _message);
      message = _message;
  }
  function Msg() public view returns (string memory) {
      return message;
  }
  function setMsg(string memory _message) public {
      console.log("Changing message from '%s' to '%s'", message, _message);
      message = _message;
  }
}