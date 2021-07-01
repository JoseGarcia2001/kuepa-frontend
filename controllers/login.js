const loginRouter = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

loginRouter.post('/', async (req, res, next) => {
  try {
    const { user, password } = req.body

    if (!user || !password) throw new Error()

    const findedUser = await User.findOne({ user })

    if (!findedUser) res.status(401).json({ error: 'The username and password do not match' })

    const match = await bcrypt.compare(password, findedUser.password)

    if (match) {
      const { _id, user, name, role } = findedUser
      const token = jwt.sign({ _id, user }, process.env.JWT_SECRET)

      res.status(202).json({ token, data: { _id, user, name, role } })
    } else { res.status(401).json({ error: 'The username and password do not match' }) }
  } catch (error) {
    next(error)
  }
})

module.exports = loginRouter
