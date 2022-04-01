require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth pumpkin under gesture photo equal giant'; 
let testAccounts = [
"0x70be54367cbc50eced51d3e1cb3969fdbd862e07ca0019e310fc08d61a878f00",
"0xd03a4109a57a50e60d101ff15f7c3497a905c2965b0e56d022791f1d9c1ea4dd",
"0x510ea053becd0398136fed33fd66fd4fddbd4f481cf70a4290bab1d03a12009a",
"0x18f646178ed76d05b40b522e99dbb80bf546179f1b2fa7b9b7139fc4326692e9",
"0x8d9d94107b3eaceaf481a62bd9c2bde77947996c4193ea939c04f5906fae95dd",
"0x1f20e22d9994cbc37796e063e0879017509fd0845adeb00baa5c484fab328ade",
"0x9da44436be15d11da8c6ee5044d0576cfab2f8cbf140cf9781b30ebbac8068a1",
"0x23d57cf3805a6faf76b2afcddf762e7c669bb855e9343300fdf8ba65a69c68af",
"0x8387e19645e062d9d1837d28eeeda6cd8f0d91b11c940d63447e492c92b49d3e",
"0x2e0e4cd7140d5ce58f3442947944afe8b0caebe9c46a6a9e0ae70e9be9242687"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

