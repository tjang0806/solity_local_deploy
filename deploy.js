
//--------------------private key case--------------------------------
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');

const Web3 = require('web3');
// created by compile script
const { interface, bytecode } = require('./compile');

// specifying the provider with two parameter
// 1.private key
// 2.url where to deploy (http://localhost:8545/ is the ganache's url)
const provider = new HDWalletProvider(
  'fabd0ab7fac67f1c3aa6e2a3a78eec384ca7ab6bae9e3a4467fa262757509d5c',
  'http://localhost:6545/'
);
------------------------------------------------------------------------
//------------------------ mnemonic case -------------------------------
//using mnemonic
//const HDWalletProvider = require('truffle-hdwallet-provider');
/*const provider = new HDWalletProvider(
  //'stumble region click broccoli pupil one tag boost whip spin over live',
  'http://localhost:8545/'
);*/
//const web3 = new Web3(provider);
//-----------------------------------------------------------------------

const web3 = new Web3(provider);

// deploy script
// it is async
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  //account's ether amount
  //const etherAmount =  await web3.fromWei(eth.getBalance(eth.coinbase), "ether");

  // display account
  console.log('attempting to deploy from account ' + accounts[0] );

  // in data, I add '0x' to save gas(found from stackoverflow)
      //it wiill assume the bytecode in hexadecimal
      //if you do not add it, it consider bytecode as string. Then change the string to hex
  // for contructor, I need to add initial message. Therefore I add 'hello world'
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode, arguments:['hello world']})
    .send({gas: '1000000', from: accounts[0]});

  // display address of contract in ganache
  console.log('Contrat deployed to ', result.options.address);

  // terminate script
  process.exit()
};
deploy();
