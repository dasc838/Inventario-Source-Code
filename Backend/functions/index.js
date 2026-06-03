const functions = require("firebase-functions");
const app = require('./src/config/server');
require('./src/app/rutas/auth')(app);

exports.app = functions.https.onRequest(app);