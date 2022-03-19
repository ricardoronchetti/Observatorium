const { Schema, model } = require("mongoose")

const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Es obligatorio poner el nombre del elemento"]
        },
        img: {
            type: String,
            required: [true, "Es obligatorio poner la imagen del elemento"]
        },
        description: {
            type: String,
            required: [true, "Es obligatorio poner la descripción del elemento"]
        },
        location: {
            type: String,
        },
        size: {
            type: String
        },
        likes: [{
            user: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }],
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

const Item = model("Item", itemSchema)

Item.syncIndexes()

module.exports = Item
