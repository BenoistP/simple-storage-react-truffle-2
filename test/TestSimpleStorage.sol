
// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.21 <0.7.0;
pragma solidity >=0.4.21 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";

contract TestSimpleStorage {

uint constant val89 = 89;

  function testItStoresAValue() public {
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

   simpleStorage.set(val89);

    uint expected = val89;

    Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
  }

}
