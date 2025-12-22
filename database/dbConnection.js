const mongoose = require("mongoose")

function dbConnection() {
    mongoose.connect("mongodb+srv://fateha:fatehajahan@cluster0.liaz7.mongodb.net/goinnoviorTask?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log('db conneted'));
}

module.exports = dbConnection;