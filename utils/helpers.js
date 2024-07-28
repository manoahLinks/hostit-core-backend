const qr = require('qrcode');
const fs = require('fs');
const ethers = require('ethers')

const generateQr = async (name, url) => {
    // generating qr and saving to file 
    qr.toFile(`.${name}/.png`, url, (err) => {
        if (err) {
          console.error('Error generating QR code:', err);
          return;
        }
        console.log('QR code generated successfully');
      });
} 


 function generateArray(links) {
    return links.map((link) => {
      return {
        isValid: true,
        link: link
      };
    });
  }

const verifyMessage = async (message, signature) => {
    const signer = ethers.verifyMessage(message, signature);
    return signer;
}

const genRandomNumbers = () => {

  const num = []

  for(i = 0; i < 6; i++) {
      num.push(Math.floor(Math.random() * 10));
  }

  return num.join('');
}

module.exports = {
    generateQr,
    generateArray,
    verifyMessage,
    genRandomNumbers
}