const router = require("express").Router()
const { isAuthenticated } = require("./../middlewares/jwt.middleware")
const Item = require("./../models/Item.model")
const Rating = require("./../models/Rating.model")



// LISTA DE ITEMS ///////////////////////

router.get("/getAllItems", (req, res) => {
    Item
        .find()
        .select("name description img owner")
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get(`/getUserItems/:id`, (req, res) => {
    const { id } = req.params
    Item
        .find({owner: id})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// DETALLES DE ITEM SELECCIONADO ///////////////////////

router.get("/getOneItem/:item_id", (req, res) => {
    const { item_id } = req.params
    const itemFind = Item.findById(item_id)
    const ratingsByItem = Rating.find({ item: item_id }).populate('user')

    Promise.all([itemFind, ratingsByItem])
        .then(([item, ratings]) => {
            const { _id, description, img, likes, location, name, owner, size } = item
            const formattedRatings = ratings.map(({ comment, item, user, _id }) => {
                const { imgProfile, username, _id: userId } = user

                return {
                    comment,
                    item,
                    user: {
                        username,
                        imgProfile,
                        _id: userId
                    },
                    _id
                }

            })

            res.json({
                item: { _id, description, img, likes, location, name, owner, size },
                ratings: formattedRatings
            })
        })
        .catch(err => res.status(500).json(err))
})



// CREAR ITEMS ///////////////////////

router.post("/createItem", isAuthenticated, (req, res) => {
    // const { name, img, description, location, size } = req.body
    const item = { ...req.body, owner: req.payload._id }

    Item
        .create(item)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// DAR LIKE A UN ITEM ///////////////////////

router.put("/updateLikeToItem/:itemId", isAuthenticated, (req, res) => {
    const { itemId } = req.params
    const { _id: user } = req.payload
    const { like } = req.body

    const updateMethod = like
        ? Item.findByIdAndUpdate(itemId, { $addToSet: { likes: { user } } }, { new: true })
        : Item.findByIdAndUpdate(itemId, { $pull: { likes: { user } } }, { new: true })

    updateMethod
        .then((response) => res.json(response))
        .catch(err => res.status(400).json(err))
})



// EDITAR ITEMS ///////////////////////

router.put("/editItem/:item_id", isAuthenticated, (req, res) => {
    const { item_id } = req.params
    const item = { ...req.body, owner: req.payload._id }

    Item
        .findByIdAndUpdate(item_id, item)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// ELIMINAR ITEMS ///////////////////////

router.delete("/deleteItem/:item_id", isAuthenticated, (req, res) => {
    const { item_id } = req.params

    Item
        .findByIdAndDelete(item_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router