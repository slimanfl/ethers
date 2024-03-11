import { ethers } from "hardhat";

async function main() {
  const Message = await ethers.getContractFactory("Message");
  const message = await Message.deploy("hellow suliman");
  await message.waitForDeployment();
  console.log(
    "deployed contract adress:",
    `${(await message.getAddress()).toString()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
