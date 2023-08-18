// require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/RDP1AXMM3c23vtqIZGNPTZLiwzwP9bQF",
      accounts: [
        "0x10135abea58f71e19f057cdc8f5508be2f8979c85da6d480517387ea5642c8e2",
      ],
    },
  },
  solidity: "0.8.0",
};
