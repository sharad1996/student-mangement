const dotenv = require('dotenv')

dotenv.config()

const {
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env

const config = {
  DB_HOST,
  DB_NAME,
  DB_PORT
}

module.exports = config