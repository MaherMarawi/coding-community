

const mongoose = require('mongoose')

const atlasDB = process.env.Db_URL
const userName = process.env.userName
const password = process.env.pass

mongoose.connect("mongodb+srv://node-test:maher1992@cluster0.sboni.mongodb.net/matrixmaster?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    UseCreateIndexes: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('DB is connected ...'))
    .catch(err => console.log(err))