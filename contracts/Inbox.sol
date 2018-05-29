pragma solidity ^0.4.17;
contract Inbox {
    string public message;

    // constructor
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    // modify message
    function setMessage(string newMessage) public {
        message = newMessage;
    }

}
