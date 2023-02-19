const jwt = require('jsonwebtoken')
const User = require('../models/userSchema')
const key = process.env.SecretKey

const requireAuth = (req, res, next) => {
    const token = req.headers.jwt
    if (token) {
        jwt.verify(token, `${key}`, (err, decodedtoken) => {
            if (err) {
                res.send('LoginPage')
            } else {
                next()
            }
        })
    } else {
        res.send('LoginPage')
    }
}
const notrequireAuth = (req, res, next) => {
    const token = req.headers.jwt
    if (token) {
        jwt.verify(token, `${key}`, (err, decodedtoken) => {
            if (err) {
                next()
            } else {
                res.send('HomePage')
            }
        })
    } else {
        next()
    }
}
// const checkedUser = (req, res, next) => {
//     const token = req.params.token
//     if (token) {
//         jwt.verify(token, key, async (err, decodedtoken) => {
//             if (err) {
//                 res.status(404)
                
//             } else {
//                 const user = await User.findById(decodedtoken.id)
//                 res.staus(200).send(user)
//             }
//         })
//     } else {
//         res.status(404)
//     }
// }
module.exports = { 
    requireAuth,
    notrequireAuth
}