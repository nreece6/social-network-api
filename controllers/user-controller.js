const { User } = require('../models')

const UserController = {
    getAllUsers(req, res) {
        User.find({})
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err))
    },

    getUserById(req, res) {
        User.findById(req.params.userId)
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err))
    },

    createUser(req, res) {
        User.create(req.body)
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err))
    },

    updateUserById(req, res) {
        User.findOneAndUpdate(req.params.id, req.body, {new: true})
        .then(userData => {
            if (!userData) {
                return res.status(404).json({ message: 'User not found' })
            }
            res.json(userData)
            
        })
        .catch(err => res.status(500).json(err))
    },
}
