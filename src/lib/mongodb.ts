import mongoose from 'mongoose'

// Simple connection cache without global types
let cachedConnection: typeof mongoose | null = null
let connectionPromise: Promise<typeof mongoose> | null = null

async function connectDB() {
  // Check for MongoDB URI at runtime, not at import time
  if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env')
  }

  const MONGODB_URI = process.env.MONGODB_URI

  if (cachedConnection) {
    return cachedConnection
  }

  if (!connectionPromise) {
    const opts = {
      bufferCommands: false,
    }

    connectionPromise = mongoose.connect(MONGODB_URI, opts)
  }

  try {
    cachedConnection = await connectionPromise
  } catch (e) {
    connectionPromise = null
    throw e
  }

  return cachedConnection
}

export default connectDB 