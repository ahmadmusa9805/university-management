import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  await mongoose.connect(config.db_url as string)

  app.listen(config.port, () => {
    console.log(`application is listening on port ${config.port}`)
  })
}

main()
