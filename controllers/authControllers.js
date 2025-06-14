const authModel = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class authController {
    login = async (req, res) => {
        const { email, password } = req.body
        if (!email) {
            return res.status(400).json({ message: 'Please provide your email'})
        }
        if (!email) {
            return res.status(400).json({ message: 'Please provide your password'})
        }

        try {
            const user = await authModel.findOne({ email }).select('+password')
            if (user) {
                const match = await bcrypt.compare(password,user.password)
                if (match) {
                    const obj = {
                        id : user.id,
                        name : user.name,
                        category : user.category,
                        role : user.role
                    }
                    const token = await jwt.sign(obj, process.env.secret, {
                        expiresIn: process.env.exp_time
                    })
                    return res.status(200).json({ message: 'login success', token})
                } else {
                    return res.status(400).json({ message: 'invalid password'})
                }
            } else {
                return res.status(400).json({ message: 'user not found'})
            }
        } catch (error) {
            console.log(error)
        }

    }
}

module.exports = new authController()