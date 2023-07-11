const router = require('express').Router()

const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller')

router.route('/').get(getAllThoughts).post(createNewThought)

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought)

router.route('/:thoughtId/reactions').post(createReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router