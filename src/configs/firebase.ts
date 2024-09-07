import dotenv from 'dotenv'

dotenv.config()

console.log({ fireConfig: process.env.FIREBASE_CONFIG })

export default {
  serviceAccount: JSON.parse(process.env.FIREBASE_CONFIG as string),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
}
