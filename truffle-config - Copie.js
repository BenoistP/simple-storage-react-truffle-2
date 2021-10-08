const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
console.error("mnemonic = " + mnemonic)
const myInfuraProjectId = "b0905077aa2945e8926ca58ac91c2a39";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts")
  
  ,

  compilers: {
    solc: {
      version: "0.6.11"
    }
  }

  ,

  networks: {

  // GANACHE LOCAL
/*
  development:
   {
    host: "127.0.0.1", // localhost de notre réseau ganache 
    port: 7545, // le port rpc de notre réseau ganache 
    network_id: "3333",// le network id de notre réseau ganache 
   }
*/
/*
    develop: {
      port: 8545
    }
*/
/*
test: {
  provider: function() {
    return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/`+myInfuraProjectId );
  },
  network_id: '*',
}
*/
  } // networks

};
