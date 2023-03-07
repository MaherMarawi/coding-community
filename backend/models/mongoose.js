

const mongoose = require('mongoose')

const uri = process.env.uri

mongoose.connect("mongodb+srv://node-test:maher1992@cluster0.sboni.mongodb.net/matrixmaster?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    UseCreateIndexes: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('DB is connected ...'))
    .catch(err => console.log(err))