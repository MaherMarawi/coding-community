

const mongoose = require('mongoose')

const uri = process.env.uri

mongoose.connect(uri, {
    useNewUrlParser: true,
    UseCreateIndexes: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('DB is connected ...'))
    .catch(err => console.log(err))