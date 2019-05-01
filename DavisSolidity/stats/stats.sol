// https://medium.com/coinmonks/solidity-import-in-vs-code-the-right-way-82baa1cc5a71
pragma solidity ^0.5.2;

import './node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol';

contract stats is SafeMath {

function checking () {
    console.log("hello");
}
checking();
}

