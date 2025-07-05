const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.deployContract("Voting", [
    ["Alice", "Bob", "Charlie"], // Adaylar burada
  ]);
  await Voting.waitForDeployment();

  console.log("Voting contract deployed to:", await Voting.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
