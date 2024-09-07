import { Router } from 'express'
import { firebase } from '../../connections/firebase.js'
import guard from '../../auth/firebase-auth-guard.js'
import { execute } from '../../middlewares/common-controler.js'
import { createUser, getUserDetails } from './handlers.js'
const router = Router()

router.post('/', guard(), execute(createUser))
router.get('/me', guard(), execute(getUserDetails))

router.get('/', async (req, res) => {
  const user = await firebase.auth.getUserByEmail('zainkh210615@gmail.com')

  res.send(user)
})

export default router
