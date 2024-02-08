const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

// const Profile = require('../../models/Profile');
const Profile = require('C:/Users/CHETHAN V/Desktop/project/project_mongo/middleware/models/Profile.js');
// const User = require('../../models/User');
const User = require('C:/Users/CHETHAN V/Desktop/project/project_mongo/middleware/models/User.js');

// @route   GET api/Profile/Profile
// @desc    GET current Profiles profile
// @access  Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', 'name');

        if (!profile) {
            return res.status(400).json({
                msg: 'There is a no Profile for this user'
            })
        }

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/Profile/Profile
// @desc    Create or Update Profile profile
// @access  Private

router.post('/', [auth,
    [
        check('weight', 'Weight is required')
            .not()
            .isEmpty(),
        check('height', 'Height is required')
            .not()
            .isEmpty(),
        check('age', 'Age is required')
            .not()
            .isEmpty(),
        check('waistdiameter', 'Waistdiameter is required')
            .not()
            .isEmpty(),
        check('shoulderdiameter', 'Shoulderdiameter is required')
            .not()
            .isEmpty(),
        check('chestdiameter', 'Chestdiameter is required')
            .not()
            .isEmpty(),
        check('legsdiameter', 'Legsdiameter is required')
            .not()
            .isEmpty()
    ]
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            weight,
            height,
            age,
            waistdiameter,
            shoulderdiameter,
            chestdiameter,
            legsdiameter
        } = req.body;

        //Build Profile object
        const profileFields = {};
        profileFields.user = req.user.id;
        profileFields.weight = weight;
        profileFields.height = height;
        profileFields.age = age;
        profileFields.waistdiameter = waistdiameter;
        profileFields.shoulderdiameter = shoulderdiameter;
        profileFields.chestdiameter = chestdiameter;
        profileFields.legsdiameter = legsdiameter;

        try {
            let profile = await Profile.findOne({ user: req.user.id });

            if (profile) {
                //Update
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                );

                return res.json(profile);
            }

            //Create
            profile = new Profile(profileFields);

            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error');
        }
    }
);


module.exports = router;