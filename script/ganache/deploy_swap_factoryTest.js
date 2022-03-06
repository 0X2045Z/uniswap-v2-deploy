const {ethers} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const admin = deployer;
    console.log("admin:", admin.address);

    /**
     * Factory address : 0xef9B5468e41fF5d7255eB2D36e7a3eDAbc20EF49
     */

    // 连接合约
    let factoryAddr = "0xef9B5468e41fF5d7255eB2D36e7a3eDAbc20EF49";
    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    const factory = await UniswapV2Factory.attach(factoryAddr);
    console.log("factory address: ", factory.address);
    return;
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });