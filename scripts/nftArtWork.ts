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

//   opensea account url
//  https://testnets.opensea.io/account

// contract address on rinkeby testnet
// 0x249af4ec8935a984a79a45fd5ea277bfa30136e1

// Transaction hash 
// 0x9f4b1c1155fa97dedb50ad024a24f3db132a5be6722b5a17ba00d03173fd920b
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
