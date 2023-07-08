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

    deleteUserById(req, res) {
        User.findOneAndDelete(req.params.id) 
        .then(userData => {
            if (!userData) {
                return res.status(404).json({ message: 'User not found '})
            }
        })
        .catch(err => res.status(500).json(err))
    },
    addFriend(req, res) {
        User.findONeandUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body.friendId || req.params.friendId}},
            { new: true }
        )
        .then(userData => {
            if (!userData) {
                return res.status(404).json({ message: 'User not found' })
            }
            res.json(userData)
        })
        .catch(errr => res.status(500).json(err))
    },

    removeFriend({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: params.friendId } },
          { new: true }
        )
          .then((savedUserData) => {
            if (!savedUserData) {
              return res.status(404).json({ message: "No user with this id!" })
            }
            // check if friend was removed
            const removed = !savedUserData.friends.includes(params.friendId)
            // return response with appropriate message
            if (removed) {
              res.json({ message: "Friend removed successfully!", savedUserData })
            } else {
              res.json(savedUserData);
            }
          })
          .catch((err) => res.status(400).json(err))
      },
    
}

module.exports = UserController
