const {ethers} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const admin = deployer;
    console.log("admin:", admin.address);

    // 部署WETH
    // WETH address: 0xCC3F7EC0814fc128712CeC90909E8505AEab261F
    const WETH = await ethers.getContractFactory("WETH9");
    const weth = await WETH.deploy();
    await weth.deployed();
    console.log("weth deployed to: ", weth.address);
    return;
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });