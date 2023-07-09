const { Schema, Types } = require('mongoose')

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },

        reactionText: {
            type: String,
            required: true,
            maxLength: 140
        },
        username: {
            type: String,
            required: true,
        },

        creationDate: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleDateString()
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
)

module.exports = reactionSchema