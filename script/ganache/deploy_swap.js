const {ethers} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const admin = deployer;
    console.log("admin:", admin.address);

    // 部署Factory
    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    const factory = await UniswapV2Factory.deploy(admin.address);
    await factory.deployed();
    console.log("factory deployed to: ", factory.address);
    // return;

    // Factory address : 0xef9B5468e41fF5d7255eB2D36e7a3eDAbc20EF49
    // WETH address: 0xCC3F7EC0814fc128712CeC90909E8505AEab261F
    // 部署router
    let factoryAddr = factory.address;
    let wethAddr = "0xCC3F7EC0814fc128712CeC90909E8505AEab261F";
    const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
    const uniswapV2Router02 = await UniswapV2Router02.deploy(factoryAddr, wethAddr);
    await uniswapV2Router02.deployed();
    console.log("uniswapV2Router02 deployed to: ", uniswapV2Router02.address);
    return;

    // uniswapV2Router02 deployed to:  0x03474fd89E69e0a7Aa563AB9Fa3706e65780F596
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });