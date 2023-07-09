const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema (
    {
        thoughtValue: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 140,
        },
        
        creationDate: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString()
        },
        username: {
            type: String,
            required: true,
        },

        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false
    }
    
)

thoughtSchema.virtuals('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema)

module.exports = Thought