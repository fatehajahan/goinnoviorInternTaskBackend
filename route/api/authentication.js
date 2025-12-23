const express = require("express")
const { registrationCtrl, loginCtrl, getAllUser } = require("../../controllers/authenticationCtrl")

const route = express.Router()

route.post("/registration", registrationCtrl)
route.post("/login", loginCtrl)
route.get("/allusers", getAllUser)
module.exports = route