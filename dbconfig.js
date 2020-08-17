const mongoose = require('mongoose');
const config = require('./config');

const mongoDbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
}

let mongoUrl;

if (config.DB_HOST && config.DB_PORT && config.DB_NAME) {
  mongoUrl = process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME
}


const connect = () => {
  mongoose.connect(mongoUrl || 'mongodb://127.0.0.1:27017/contacts',
    mongoDbOptions, (err) => {
      if (err) console.log(err)
      else console.log('MONGOOSE CONNECTED')
    })
}

module.exports = connect;