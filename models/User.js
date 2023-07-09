const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            max_length: 50
        },

        email: {
            type: String,
            required: true,
            unique: true,

        },

        friends: [
            {
                type: Schema.Types.ObjectId,
            ref: 'Thought',
        }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model('User', userSchema)

module.exports = User