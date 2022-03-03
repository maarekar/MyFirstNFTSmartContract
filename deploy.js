async function main () {
    const MyContract = await hre.ethers.getContractFactory("MyContract");

    const myContractDeployed = await MyContract.deploy("MyFirstContract", "MFC");

    await myContractDeployed.deployed();

    console.log("deployed MyContract to: ", myContractDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });