const { Schema, model } = require("mongoose")

const ratingSchema = new Schema(
    {
        comment: String,
        rating: Boolean,
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: "Item"
        }
    },
    {
        timestamps: true
    }
)

const Rating = model("Rating", ratingSchema)

Rating.syncIndexes()

module.exports = Rating