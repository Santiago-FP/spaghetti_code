const usersServices = require('./users.services')
const router = require('express').Router()


router.get('/',usersServices.getAllUsers)
router.post('/',usersServices.postUser)

router.get('/:id',usersServices.getUserById)
router.patch('/:id',usersServices.patchUser)
router.delete('/:id',usersServices.removeUser)

module.exports = router