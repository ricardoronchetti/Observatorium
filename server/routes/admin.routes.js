const router = require("express").Router()
const User = require("./../models/User.model")

router.get("/getAllUsers", (req, res) => {
    User
        .find()
        .select("username imgProfile")
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router