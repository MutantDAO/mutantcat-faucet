import { expect } from "chai";
import { ethers } from "hardhat";
import { MutantCats as MutCats } from "../typechain-types";

const TESTADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
describe("Greeter", function () {
  this.timeout(2000000000000);
  it("Should return mutantcats", async function () {
    const MutantCats = await ethers.getContractFactory("MutantCats");
    const cats = (await MutantCats.deploy()) as MutCats;

    await cats.deployed();
    for (let i = 1; i < 10005; i++) {
      await (await cats.mint(TESTADDRESS)).wait();

      const uri = await cats.tokenURI(i);
      console.log(uri);
      expect(uri).to.equal(
        `ipfs://QmXZEBJJ6d9D6DU9yYQG1pJMKsUYcUso662HAgyo1wjWoa/${
          (i % 9999) + 1
        }.json`
      );
    }
  });
});
