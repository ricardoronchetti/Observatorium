const router = require("express").Router()
const bcrypt = require("bcryptjs")
const User = require("../models/User.model")
const jwt = require("jsonwebtoken")

const saltRounds = 10

router.put("/editProfile", (req, res) => {
    const { email, username, password, imgProfile } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: "La contraseña tiene que tener mínimo 3 letras" })
        return
    }

    User
        .findOne({ username })
        .then((foundUser) => {
            if (foundUser && email != foundUser.email) {
                res.status(400).json({ message: "El usuario ya existe" })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const passwordHash = bcrypt.hashSync(password, salt)

            return User.findOneAndUpdate({email},{ passwordHash, username, imgProfile }, {new: true})
        })
        .then((createdUser) => {
            const { email, username, imgProfile, _id } = createdUser
            const payload = { _id, username, email, imgProfile }

            const authToken = jwt.sign(
                payload,
                process.env.TOKEN_SECRET,
                { algorithm: "HS256", expiresIn: "6h" }
            )
            res.status(200).json({ authToken })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Error de servidor" })
        })
})


router.delete("/deleteUser/:user_id", (req, res) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err =>res.status(500).json(err))
})

module.exports = router