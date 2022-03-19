const router = require("express").Router()
const { isAuthenticated } = require("./../middlewares/jwt.middleware")
const Rating = require("./../models/Rating.model")



// LISTA DE COMENTARIOS ///////////////////////

router.get("/getAllComments", (req, res) => {
    Rating
        .find({ comment: { $exists: true } })
        .select("comment user item")
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get(`/getItemComments/:item_id`, (req, res) => {
    const { item_id } = req.params

    Rating
        .find({item: item_id})
        .populate("user")
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get(`/getUserComments/:userId`, (req, res) => {
    const { userId } = req.params

    Rating
        .find({user: userId})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))

})



// LEER SOLO COMENTARIOS DE UN ITEM ///////////////////////

router.get(`/getItemComments/:ratingId`, (req, res) => {
    const { ratingId } = req.params

    Rating
        .find(ratingId)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// CREAR COMMENTARIO ///////////////////////

router.post(`/createComment/:itemId`, isAuthenticated, async (req, res) => {
    const { itemId } = req.params
    const { comment } = req.body
    const user = req.payload._id

    let newComment = await Rating.create({ comment, user, item: itemId })
    newComment = newComment.populate('user')

    newComment
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// EDITAR COMENTARIOS ///////////////////////

router.put(`/editComment/:id`, isAuthenticated, (req, res) => {
    const { id } = req.params
    const comment = { ...req.body, owner: req.payload._id }

    Rating
        .findByIdAndUpdate(id, comment, {new: true})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// BORRAR COMENTARIO ///////////////////////

router.delete(`/deleteComment/:id`, isAuthenticated, (req, res) => {
    const { id } = req.params

    Rating
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// CREAR ME GUSTA  ///////////////////////

router.post('/addRating/:id', isAuthenticated, (req, res) => {
    const { id } = req.params
    const { username: user } = { ...req.body, owner: req.payload._id }
    const { rating } = req.body

    Rating
        .create({ rating, user })
        .then(() => res.status(200).json())
        .catch(err => res.status(500).json(err))
})

module.exports = router