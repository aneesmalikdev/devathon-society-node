import { NextFunction, Request, Response } from 'express'

function guard(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization
  console.log({ token })
}

export default guard
