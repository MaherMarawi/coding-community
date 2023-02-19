

const mongoose = require('mongoose')

const atlasDB = process.env.Db_URL
const userName = process.env.userName
const password = process.env.pass

mongoose.connect(atlasDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('DB is connected ...'))
    .catch(err => console.log(err))