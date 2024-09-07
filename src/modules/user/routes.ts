import { Router } from 'express'
import { firebase } from '../../connections/firebase.js'

const router = Router()

router.post('/')
router.get('/', async (req, res) => {
  const user = await firebase.auth.getUserByEmail('zainkh210615@gmail.com')
  console.log({ user })

  res.send(user)
})

export default router
