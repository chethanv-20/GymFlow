const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('C:/Users/CHETHAN V/Desktop/project/project_mongo/middleware/models/User.js');

const secret = process.env.JWT_SECRET;

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('lastname', 'Last name is required').not().isEmpty(),
    check('email', 'Please insert a valid email').isEmail(),
    check('phone', 'Please insert a phone').not().isEmpty(),
    check('password', 'Please insert a password with 6 o more characters').isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { name, lastname, email, phone, password } = req.body

        try {
            let user = await User.findOne({ email });

            if (user) {
                res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            user = new User({
                name,
                lastname,
                email,
                phone,
                password
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                secret,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token })
                }
            );

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

module.exports = router;