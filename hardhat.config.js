require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
const API_URL = "https://eth-ropsten.alchemyapi.io/v2/cMw5dxqeUCmZjtsd4Y1aUltDbvPSEMCk";
const PRIVATE_KEY  = "49fba673d36b89273b4546e10c682100aae89ff4af89b505876c8cb23e8d5a11";

module.exports = {
  solidity: {
    
    compilers: [
      {
        version: "0.5.12",
      },
      
      {
        version: "0.6.6",
      },
      {
        version: "0.8.0",
        settings: {},
      },
      {
        version: "0.8.1",
      },
    ],
  },
  defaultNetwork: "ropsten",
   networks: {
     hardhat: {},
     ropsten: {
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`],
     },

   },
};
