

const mongoose = require('mongoose')

const atlasDB = process.env.Db_URL

mongoose.connect(atlasDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('DB is connected ...'))
    .catch(err => console.log(err))