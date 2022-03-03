const { expect } = require('chai');

describe("My first Contract", function () {

    it("should return correct name and symbol", async function () {
        const MyContract = await hre.ethers.getContractFactory("MyContract");

        const myContractDeployed = await MyContract.deploy("MyFirstContract", "MFC");

        await myContractDeployed.deployed();

        expect(await myContractDeployed.name()).to.equal("MyFirstContract");
        expect(await myContractDeployed.symbol()).to.equal("MFC");
    });

    it("should return fail name", async function () {
        const MyContract = await hre.ethers.getContractFactory("MyContract");

        const myContractDeployed = await MyContract.deploy("MyFirstContract", "MFC");

        await myContractDeployed.deployed();

        expect(await myContractDeployed.name()).to.equal("Contract");
    });

});