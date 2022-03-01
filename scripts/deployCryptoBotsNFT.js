const hre = require("hardhat");

async function main() {
  

  // We get the contract to deploy
  const CryptoBotsNFT = await hre.ethers.getContractFactory("CryptoBotsNFT");
  const cryptoBotsNFT = await CryptoBotsNFT.deploy();

  await cryptoBotsNFT.deployed();

  console.log("CryptoBotsNFT deployed to:", cryptoBotsNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
