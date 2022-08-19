import { ethers } from "hardhat";

async function main() {
 
  const [depolyer] = await ethers.getSigners();

  const NFTwork = await ethers.getContractFactory("NFTwork");
  const nftArt = await NFTwork.deploy("IGWEART", "IGT");

  const result = await nftArt.deployed();



   const repsBefore = (await nftArt.balanceOf(depolyer.address));
   console.log("bal before the mint ", repsBefore);
    
    const tokenURI = "https://app.pinata.cloud/pinmanager/Qmf52jt5cc31X4ZJsQQEat9ELN7VcFn98H2NFob8Ehn5iZ"
    const tx = await nftArt.connect(depolyer).mint(tokenURI);

    const resAfter = (await nftArt.balanceOf(depolyer.address));
    console.log("bal after the mint ", resAfter);

    
  console.log("IGWEART NFT SAMPLE : ", result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
