import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
}
