const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", function () {
  let simpleStorageFactory, simplStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simplStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favourite number 0", async function () {
    const currentValue = await simplStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Should update when we call store", async function () {
    const expectedValue = "7";
    const transactionResponse = await simplStorage.store(expectedValue);
    await transactionResponse.wait(1);
    const currentValue = await simplStorage.retrieve();

    assert.equal(currentValue.toString(), expectedValue);
  });
});
