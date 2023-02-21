

const mongoose = require('mongoose')

const Db_URL = process.env.Db_URL
const userName = process.env.userName
const password = process.env.pass

mongoose.connect(Db_URL, {
    useNewUrlParser: true,
    UseCreateIndexes: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('DB is connected ...'))
    .catch(err => console.log(err))