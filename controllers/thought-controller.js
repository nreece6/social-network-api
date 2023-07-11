const { Thought, User, Reaction } = require('../models')
const { Types }= require('mongoose')

const ThoughtController = {
    async getAllThoughts(req, res) {
        try { 
            const allThoughts = await Thought.find({})
            res.json(allThoughts)
        } catch (err) {
            res.status(500).json(err)
    }
    },
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            if (!thought) {
                res.status(404).json({ message: 'Thought not found' })
            } res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async createNewThought(req, res) {
        try {
            const thought = await Thought.create(req.body)
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId })
            res.status(200).json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {new: true})
        
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' })
        }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {runValidators: true, new: true}
            )
        if (!thought) {
            res.status(404).json({ message: 'Thought not found' })
        }
        res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {runValidators: true, new: true}
            )
            if (!thought) {
                res.status(404).json({ message: 'Thought not found' })
            }
            res.json(thought)
            } catch (err) {
                res.status(500).json(err)
            }
        }
    }
}

module.exports = ThoughtController