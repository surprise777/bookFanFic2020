const mongoose = require('mongoose');

/* Connnect to our database */
// Get the URI of the local database, or the one specified on deployment.
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/team19'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));;

module.exports = { mongoose }  // Export the active connection.