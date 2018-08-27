var TokenERC20 = artifacts.require("./TokenERC20.sol");

module.exports = function(deployer) {
  deployer.deploy(TokenERC20, 9780000, "007", "007");
};
