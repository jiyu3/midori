# ERC20, ERC721 Token

ERC20, ERC721トークンを発行する。

## Environment
solidity-0.5.0
truffle@5.0.33
openzeppelin-solidity@2.3.0
ganache-cli@6.6.0

## Setup

```
npm install -g truffle
npm install -g ganache-cli
npm install
```

.secretファイルにウォレットのパスフレーズを記載(localの場合は必要なし)
.infuraKeyファイルに接続するネットワークのinfuraのIDを記載(localの場合は必要なし)

truffle-config.jsのgasとgasPriceは適切な値をetherscanなどで確認してセットする。
https://etherscan.io/

## Test

### local環境
```
ganache-cli
truffle test --network development
```

### Testnet Ropsten
デプロイされるので注意
```
truffle test --network ropsten
```

## Migrate and Deploy
networkを用途によって変更
mainnetにデプロイするには以下のコマンド
```
truffle migrate --network mainnet
```
