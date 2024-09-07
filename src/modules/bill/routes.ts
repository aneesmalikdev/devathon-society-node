import { Router } from 'express'

import guard from '../../auth/firebase-auth-guard.js'
import { execute } from '../../middlewares/common-controler.js'

const router = Router()

router.post('/', guard(), execute(() => {}))

export default router
