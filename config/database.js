const crypto = require('crypto').randomBytes(256).toString('hex');
/*
   Provides cryptographic functionality
   (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)
*/

// Exporting config object
module.exports = {
   uri: "mongodb://localhost:27017/mean-application", // Database URI and database name
   secret: crypto, // Crypto created secret
   db: "mean-application" // database name
};