var admin = require("firebase-admin");
var serviceAccount = require("path-to-your-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-firebase-database-url.firebaseio.com",
});

const db = admin.firestore();
module.exports = db;
