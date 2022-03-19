const router = require("express").Router()

router.use("/items", require("./items.routes"))
router.use("/auth", require("./auth.routes"))
router.use("/upload", require("./upload.routes"))
router.use("/rating", require("./rating.routes"))
router.use("/user", require("./user.routes"))
router.use("/admin", require("./admin.routes"))

module.exports = router