require('@nomiclabs/hardhat-waffle')
module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/eWKKelA9R0Gh1vM6UvX2amsQo4xsC-uY',
      accounts: [
        '2cc4c02b267c372e31ff44d09b6bd80f703c1fa6418d5e3fb95bfd429a137d1b',
      ],
    },
  },
}