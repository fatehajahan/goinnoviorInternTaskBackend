const express = require("express")
const { registrationCtrl, loginCtrl } = require("../../controllers/authenticationCtrl")

const route = express.Router()

route.post("/registration", registrationCtrl)
route.post("/login", loginCtrl)
module.exports = route