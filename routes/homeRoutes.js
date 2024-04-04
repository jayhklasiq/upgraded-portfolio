const express = require("express")
const router = new express.Router()
const homeController = require("../controllers/homeController")

router.get("/", homeController.homepage)

router.get("/portfolio", homeController.portfolio)

router.get("/cv", homeController.cv)


module.exports = router;