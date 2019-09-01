const TokenNFT = artifacts.require("./TokenNFT.sol");

module.exports = async(deployer, network, accounts) => {
    await deployer.deploy(TokenNFT);
};
