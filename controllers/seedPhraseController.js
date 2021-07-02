import { generateMnemonic, mnemonicToSeed } from "bip39";
import hdkey from "hdkey";
import {
  privateToPublic,
  publicToAddress,
  toChecksumAddress,
} from "ethereumjs-util";

export const generateSeedPhrase = async (req, res) => {
  try {
    const mnemonic = await generateMnemonic();
    console.log(mnemonic);
    res.status(200).json(mnemonic);
    // console.log("hello");
  } catch (error) {
    console.log(error);
  }
};

export const createWallet = async (req, res) => {
  try {
    const mnemonic = `${req.body[0]} ${req.body[1]} ${req.body[2]} ${req.body[3]} ${req.body[4]} ${req.body[5]} ${req.body[6]} ${req.body[7]} ${req.body[8]} ${req.body[9]} ${req.body[10]} ${req.body[11]}`;
    const seed = await mnemonicToSeed(mnemonic);
    const root = hdkey.fromMasterSeed(seed);
    // window.bip39 = bip39;
    const masterPrivateKey = root.privateKey.toString("hex");
    const addrNode = root.derive("m/44'/60'/0'/0/0");
    const pubKey = privateToPublic(addrNode._privateKey);
    const privateKey = addrNode.privateKey.toString("hex");
    const addr = publicToAddress(pubKey).toString("hex");
    const address = toChecksumAddress(`0x${addr}`);
    console.log(masterPrivateKey);
    console.log(privateKey);
    console.log(address);
  } catch (error) {
    console.log(error);
  }
};
