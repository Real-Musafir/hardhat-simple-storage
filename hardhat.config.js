require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_RUL = process.env.RINKEBY_RPC_RUL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/HNHfuJ4Brhv9JB0YG8V-PDJ-RryCDBlv",
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
  },
  allowUnlimitedContractSize: true,
  solidity: "0.8.9",
};
