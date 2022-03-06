# uniswap-v2-deploy

# hardhat.config.js.bak
require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    compilers: [
      { version: "0.5.16", settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        } 
      },{ version: "0.6.6", settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ],
  },
  networks: {
    ganache: {
      url: `http://localhost:7545`,
      accounts: [``]
    }
  }
};

// npx hardhat compile 
// npx hardhat run ./scripts/ganache/deploy_erc20.js --network ganache