const router = require("express").Router()
const bcrypt = require("bcryptjs")
const User = require("../models/User.model")
const jwt = require("jsonwebtoken")
const { isAuthenticated } = require("../middlewares/jwt.middleware")

const saltRounds = 10



// REGISTRO ///////////////////////

router.post("/signup", (req, res) => {
    const { email, username, password, imgProfile } = req.body

    if (email === "" || username === "" || password === "") {
        res.status(400).json({ message: "Introduce email, nombre de usuario y contraseña" })
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

    if (!emailRegex.test(email)) {
        res.status(400).json({ message: "Introduce un una dirección de email válida" })
        return
    }

    if (password.length < 2) {
        res.status(400).json({ message: "La contraseña tiene que tener mínimo 3 letras" })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {
            if (foundUser) {
                res.status(400).json({ message: "El usuario ya existe" })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const passwordHash = bcrypt.hashSync(password, salt)

            return User.create({ email, passwordHash, username, imgProfile })
        })
        .then((createdUser) => {
            const { email, username, imgProfile, _id } = createdUser
            const user = { email, username, imgProfile, _id }

            res.status(201).json({ user })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Error de servidor" })
        })
})



// INICIO DE SESION ///////////////////////

router.post("/login", (req, res) => {
    const { email, password } = req.body

    if (email === "" || password === "") {
        res.status(400).json({ message: "Introduce email y contraseña" })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {
            if (!foundUser) {
                res.status(400).json({ message: "Usuario no encontrado" })
                return
            }

            if (bcrypt.compareSync(password, foundUser.passwordHash)) {
                const { _id, email, username, imgProfile, role } = foundUser

                const payload = { _id, username, email, imgProfile, role }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: "HS256", expiresIn: "6h" }
                )

                res.status(200).json({ authToken })
            } else {
                res.status(401).json({ message: "No es posible autenticar el usuario" })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Error de servidor" })
        })
})



// AUTENTIFICACIÓN ///////////////////////

router.get("/verify", isAuthenticated, (req, res) => {
    res.status(200).json(req.payload)
})

module.exports = router