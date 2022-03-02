MYMAC070:crypto-bots tanvir.alam$ npx hardhat run scripts/deployCryptoBotsNFT.js --network rinkeby
Error: insufficient funds for intrinsic transaction cost (error={"name":"ProviderError","code":-32000,"_isProviderError":true}, method="sendTransaction", transaction=undefined, code=INSUFFICIENT_FUNDS, version=providers/5.5.3)
    at Logger.makeError (/Users/tanvir.alam/projects/crypto-projects/crypto-bots/node_modules/@ethersproject/logger/src.ts/index.ts:225:28)
    at Logger.throwError (/Users/tanvir.alam/projects/crypto-projects/crypto-bots/node_modules/@ethersproject/logger/src.ts/index.ts:237:20)
    at checkError (/Users/tanvir.alam/projects/crypto-projects/crypto-bots/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:53:16)
    at /Users/tanvir.alam/projects/crypto-projects/crypto-bots/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:215:24
    at processTicksAndRejections (internal/process/task_queues.js:93:5) {
  reason: 'insufficient funds for intrinsic transaction cost',
  code: 'INSUFFICIENT_FUNDS',
  error: ProviderError: insufficient funds for gas * price + value
      at HttpProvider.request (/Users/tanvir.alam/projects/crypto-projects/crypto-bots/node_modules/hardhat/src/internal/core/providers/http.ts:49:19)
      at LocalAccountsProvider.request (/Users/tanvir.alam/projects/crypto-projects/crypto-bots/node_modules/hardhat/src/internal/core/providers/accounts.ts:182:36)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)
      at EthersProviderWrapper.send (/Users/tanvir.alam/projects/crypto-projects/crypto-bots/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20),
  method: 'sendTransaction',
  transaction: undefined
}

Problem
-----------
Rinkeby Faucet did not work.

How solved
----------------

Used Ropsten Test Network
loaded test ether from 
https://faucet.metamask.io/



Command Ran
-----------
npx create-react-app crypto-bots
npm i -D hardhat
npx hardhat
npm i @openzeppelin/contracts
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
npm i -D dotenv
npx hardhat clean
npx hardhat compile
npx hardhat run scripts/deployCryptoBotsNFT.js --network rinkeby
npx hardhat run scripts/deployCryptoBotsNFT.js --network ropsten
npm i -D @nomiclabs/hardhat-etherscan
npx hardhat verify --network ropsten 0xf909c6e736252a3bbAFE73503B4aF1aba4509e8B
npm run start
npx hardhat verify --network rinkeby 0xFBb0b7c320AAdA50f99a615bb9A958815CC71309 


Background Image Credit:
Yog Joshi Art
@YogJoshiArt



IPFS
-------

1.Downloaded few free images.
2. Created account in https://www.pinata.cloud/
3. Uploaded the entire image folder
4. Got a CID like this QmRNknvBDZLzYMKzok948rVCxVnUoUZVbCnq6Foey9tXK9

IPFS MetaData Format


OpenSea MetaData Format
{
  "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
  "external_url": "https://openseacreatures.io/3", 
  "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
  "name": "Dave Starbelly",
  "attributes": [ ... ], 
}

Original Pinata URL "https://gateway.pinata.cloud/ipfs/QmRNknvBDZLzYMKzok948rVCxVnUoUZVbCnq6Foey9tXK9/1.png"
In JSON we do "image": "ipfs://QmRNknvBDZLzYMKzok948rVCxVnUoUZVbCnq6Foey9tXK9/1.png",

CID of JSON folder "QmRDEhce1xfQXifQtgzTBdLkj1G4HEB5R5YiqrA6SXEtX7"
is to be used as base uri

https://www.rinkebyfaucet.com/ worked
0xFBb0b7c320AAdA50f99a615bb9A958815CC71309