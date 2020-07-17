require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember clump grace fortune swift sniff'; 
let testAccounts = [
"0x8175fa95eeb02e10bc6284fd0ab5c6ac46164fac6413fc6ba9f76c3c4d8c9c40",
"0x452734be3742a192808aeb88886c087a3916f5fcac37531b11fd7736348b2684",
"0x809608291f2749a75a983f58f98015caa1298ddd4657ce50a807ef8ac8d3ca0b",
"0xeff8d923f603e3fe8c47e8a6b9edd4a4257319190c9f3d85e460f3183a7b5bee",
"0x59ba382b101ae67e76d4593f1a15f9185aa713ca420aad32a12510d4b12af6d1",
"0xbf4a981c0554fe4f4a56110c4b8c9775cd17a3d8fd2978785c25d88508b17c36",
"0x5f303db5ad933af9fae93cfbd77a5b8206aa3b79ed17d906c5c905ba20aea44c",
"0x12ce006e8adcea5ebf7d4ebbfc46256df5493a7a947d6299ccffcb1b2386fc40",
"0x54395213ed522e6a851f184a410af5214f81865be673db3ba338385ad68e5646",
"0x7bb8b2f78772efa8cec412bd29b1963ec592b315fadd922569a7eb8b6550bb3c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
