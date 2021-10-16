module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 6721975,
      gasPrice: 1000000000, //1gwei
    }
  },
  compilers: {
    solc: {
      version: "0.8.7",
      settings: {
        optimizer: {
        enabled: true, // Default: false
        runs: 200 // Default: 200
        }
      }
    }
  }
};
