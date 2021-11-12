# DEPLOY INFINITE MUTANT CATS

## Usage

Deployed address on Ropsten: [0xD29E7D689096a4bb3E6bb549EFb7d23645905C6A](https://ropsten.etherscan.io/address/0xD29E7D689096a4bb3E6bb549EFb7d23645905C6A)

Head to etherscan

https://ropsten.etherscan.io/address/0xD29E7D689096a4bb3E6bb549EFb7d23645905C6A#writeContract

![image](https://user-images.githubusercontent.com/93621943/141387626-404ba46c-4f11-474c-b591-3b772fca23c4.png)

Add your address and mint a cat!

## Deployment

Clone this repo

Create an env file with the deatils of your accounts:

.env file required to look something like this:

```
ROPSTEN_PUBLIC_KEY=...
ROPSTEN_PRIVATE_KEY=...
ALCHEMY_API=...
ETHERSCAN_API_KEY=...
```

Install dependencies

```
yarn
```

Deploy contract

```
yarn hardhat run --network ropsten scripts/deploy.ts
```

Verify on etherscan

```
yarn hardhat verify --network ropsten  DEPLOYED_CONTRACT_ADDRESS
```
