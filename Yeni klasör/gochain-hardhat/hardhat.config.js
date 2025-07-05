require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/V7kGY2TmZdALu7fxNHt-ZEUVBZtmOVvd", // BURAYA RPC YAPİŞTIR
      accounts: ["0xed997ac2969644628b0fd0795262d692722955583855c52231311a9d7434c2e1"], // METAMASK PRIVATE KEY
      chainId: 11155111,
    },
  },
};
