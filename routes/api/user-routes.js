const router = require('express').Router()
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller')

router.route('/').get(getAllUsers).post(createUser)

router.route('/:userID').get(getUserById).put(updateUserById).delete(deleteUserById)

router.route().post().delete()

module.exports = router