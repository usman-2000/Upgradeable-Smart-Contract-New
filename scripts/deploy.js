const { ethers, upgrades } = require("hardhat");

async function main() {
  const [Deployer] = await ethers.getSigners();
  console.log("Deployer Contract Address:", Deployer.address);
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying proxy, box implementation, proxy admin");
  const boxProxy = await upgrades.deployProxy(Box, [42], {
    initializer: "store",
  });

  await boxProxy.waitForDeployment();
  // console.log("box: ", boxProxy.waitForDeployment());
  // boxProxy.deployed();
  // await boxProxy.deployTransaction.wait(1);
  console.log("Box proxy deployed to : ",await boxProxy.getAddress());
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
