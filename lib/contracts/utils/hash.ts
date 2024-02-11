var CryptoJS = require("crypto-js");
import { ethers } from "ethers";

// 1. Import the contracts 
import { items } from "@/lib/contracts/src/solide/erc404"

// 2. Create a new page
export const generatePlayIds = () => {
    const data: Record<string, string> = {}
    items.map((item) => {
        const id = enc(JSON.stringify(item))
        // console.log(id)
        // console.log(ethers.id(id))

        data[ethers.id(id)] = id
    })

    console.log(data)
}


// Utils

const SECRET = 'solide'
export function enc(plainText: string) {
    var b64 = CryptoJS.AES.encrypt(plainText, SECRET).toString();
    var e64 = CryptoJS.enc.Base64.parse(b64);
    var eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
}

export function dec(cipherText: string) {
    var reb64 = CryptoJS.enc.Hex.parse(cipherText);
    var bytes = reb64.toString(CryptoJS.enc.Base64);
    var decrypt = CryptoJS.AES.decrypt(bytes, SECRET);
    var plain = decrypt.toString(CryptoJS.enc.Utf8);
    return plain;
}


