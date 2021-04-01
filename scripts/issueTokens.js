const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(callback){
    // Code goes here..
    let tokenFarm = await TokenFarm.deployed()
    await tokenFarm.issueTokens()

    console.log('Token issued!!!')
    callback()
}