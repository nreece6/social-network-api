const router = require('express').Router()

const userRoutes = require('./user-routes')
const thoughtRoutes = require('./thought-routes')

// /api/user
router.use('/user', userRoutes)
// /api/thought
router.use('/thought', thoughtRoutes)

module.exports = router