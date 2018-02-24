let express = require('express')
let router = express.Router()
let apiController = require('../controllers/apiController')


router.get("/", apiController.index)
router.get("/userdata", apiController.getUserData)
router.get("/search", apiController.search)

module.exports = router