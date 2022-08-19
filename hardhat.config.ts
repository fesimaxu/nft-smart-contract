import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

require('dotenv').config();


const { API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
   networks: {
    hardhat: {},
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/f02904b738024f4fabbabdb404d4c0f4",
      accounts: ["bde66b5a1eca5fc91aeb23e06bff90c39baa4ef0e3dd2a5a91fdaf4352b71606"]
    }
  }
};

export default config;
