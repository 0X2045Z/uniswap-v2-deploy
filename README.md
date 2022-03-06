# uniswap-v2-deploy
First time when you cloned this project.You should execute’sh init.sh’,and chose ‘Create an empty hardhat.config.js’.

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
// npx hardhat run ./script/ganache/deploy_swap.js --network ganache