import { UserModel } from '../../models/user-model.js'
import { RequestAuth } from '../../types/common-types.js'

export function createUser(ctx: RequestAuth, payload: any) {
  const user = new UserModel({ ...payload })

  return user
}

export async function getUserDetails(ctx: RequestAuth, payload: any) {
  const userId = ctx.userId

  if (!userId) return { user: null }

  const user = await UserModel.findById(userId)
  if (!user) return { user: user }
}
