const qr = require('qrcode');
const fs = require('fs');

const url = 'https://host-it-backend.onrender.com/';

qr.toFile('./qr_code.png', url, (err) => {
  if (err) {
    console.error('Error generating QR code:', err);
    return;
  }
  console.log('QR code generated successfully');
});