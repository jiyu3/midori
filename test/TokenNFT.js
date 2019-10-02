const TokenNFT = artifacts.require('TokenNFT.sol');

contract('TokenNFT', function ([creator, ...accounts]) {
    const name = "Midori:CERT";
    const symbol = "MDRC"

    it("confirm contract...", async () => {
        const tokenNFTInstance = await TokenNFT.deployed();
        let tokenName = await tokenNFTInstance.name();
        let tokenSymbol = await tokenNFTInstance.symbol();

        // mintWithTokenURIのテスト
        const tokenId = 1;
        const tokenURI = "https://dummy-token-1";
        tokenNFTInstance.mintWithTokenURI(creator, tokenId, tokenURI)
        let tokenURIInstance = await tokenNFTInstance.tokenURI(tokenId);

        // tokenIdの2を発行してaccounts[1]に割り当てる
        let tokenId2 = 2
        let tokenURI2 = "https://dummy-token-2"
        tokenNFTInstance.mintWithTokenURI(accounts[1], tokenId2, tokenURI2)
        let tokenURIInstance2 = await tokenNFTInstance.tokenURI(tokenId2)

        assert.equal(tokenName, name, "Name isn't the same.");
        assert.equal(tokenSymbol, symbol, "Symbol isn't the same.");
        assert.equal(tokenURIInstance, tokenURI, "tokenURI isn't the same.");
        assert.equal(tokenURIInstance2, tokenURI2, "tokenURI2 isn't the same.")

        // 権限の確認
        let owner = await tokenNFTInstance.ownerOf(tokenId);
        let owner2 = await tokenNFTInstance.ownerOf(tokenId2)
        let minter = await tokenNFTInstance.isMinter(creator);
        let notMinter = await tokenNFTInstance.isMinter(accounts[1]);

        assert.equal(creator, owner, "Account isn't the same.");
        assert.notEqual(creator, owner2, "Creator and token owner is same.");
        assert.equal(owner2, accounts[1], "Account isn't the same.");
        assert.equal(creator, owner, "Account isn't the same.");
        assert.equal(minter, true, "Creator isn't Minter")
        assert.equal(notMinter, false, "Account1 is Minter")
    });
});
