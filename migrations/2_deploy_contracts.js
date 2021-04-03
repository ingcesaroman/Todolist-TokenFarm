const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function (deployer, network, accounts ) {
  //Deploy Mock DAI token
  await deployer.deploy(DaiToken);
  const daiToken = await DaiToken.deployed()

  //Deploy Dapp Token
  await deployer.deploy(DappToken);
  const dappToken = await DappToken.deployed()

  //Deploy TokenFarm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed();

  //Tranfer all Dapps tokens to TokenFarm (1 million) $1,000,000.[00] x18
  await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')

  //Tranfer 100 Mock DAI tokens to investor (second account from ganache) $100,[00] x18 
  await daiToken.transfer(accounts[1], '100000000000000000000') 
}
