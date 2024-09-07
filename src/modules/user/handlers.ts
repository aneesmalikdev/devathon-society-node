import { UserModel } from '../../models/user-model.js'

export function createUser(ctx: any, payload: any) {
  const user = new UserModel({ ...payload })

  return user
}
