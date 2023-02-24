const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const maxAge = 3 * 24 * 60 * 60

const handelErrors = (err) => {
    //console.log(err.message, err.code)

    let errors = { email: '', password: '' }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
        return errors
    }
    if (err.code == 11000) {
        errors.email = 'That email is already registerd'
        return errors
    }
    if (err.message == 'email is incorrect') {
        errors.email = 'This email is not registerd'
        return errors
    }
    if (err.message == 'password is incorrect') {
        errors.password = 'Password is incorrect'
        return errors
    }
    if (err.message == 'please enter your email') {
        errors.email = 'Please enter your email'
        return errors
    }
}
const key = process.env.SecretKey
const createjwt = function (id) {
    return jwt.sign({ id }, `${key}`, {
        expiresIn: maxAge
    })
}
const RegisterPage = async (req, res) => {

    if (req.body.password == req.body.repassword) {
        const { username, email, password } = req.body
        const user = new User({ username, email, password })
        user.save()
            .then(userReg => {
                let role = ""
                if (user.role && user.role == "admin") { role = user.role; }
                const token = createjwt(userReg._id)
                res.status(200).send({ message: 'Registerd', accessToken: token, user: { id: userReg._id, username: userReg.username, role: role } })
            })
            .catch((err) => {
                const errors = handelErrors(err)
                res.status(404).send({ errors })
            })
    } else {
        const errors = { email: '', password: 'Password does not match' }
        res.status(404).send({ errors })
    }

}
const SignIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = createjwt(user._id)
        let role = ""
        if (user.role && user.role == "admin") { role = user.role; }
        res.status(200).send({ message: 'Logged In', accessToken: token, user: { id: user._id, username: user.username, role: role } })
    } catch (error) {
        const errors = handelErrors(error)
        res.status(404).send({ errors })
    }

}
const SignOut = (req, res) => {
    res.send({ message: 'Client Loged Out', accessToken: '' })
}
const Users = (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then(result => {
            const arr = []
            result.forEach(value => {
                value.password = ''
                arr.push(value)
            })
            res.status(200).send(arr)
        })
        .catch(err => res.status(404).send(err))
}
const oneUser = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.password = ''
            const newUser = { _id: user._id, email: user.email, username: user.username, langs: user.langs, accounts: user.accounts, phoneNumber: user.phoneNumber }
            res.status(200).send(newUser)
        })
        .catch(err => res.status(404).send(err))
}
const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(response => { res.status(200).send(response) })
        .catch(err => console.log(err))
}
const checkedUser = (req, res, next) => {
    const token = req.headers.jwt;
    if (token) {
        jwt.verify(token, `${key}`, async (err, decodedtoken) => {

            if (err) {
                res.status(404)

            } else {
                const user = await User.findById(decodedtoken.id)
                res.status(200).send({ message: 'Logged In', accessToken: token, user: { id: user._id, username: user.username } })
            }
        })
    } else {
        res.status(404)
    }
}

module.exports = {
    RegisterPage,
    SignIn,
    SignOut,
    Users,
    oneUser,
    updateUser,
    checkedUser
}


