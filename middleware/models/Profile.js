const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    weight: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    waistdiameter: {
        type: String,
        required: true
    },
    shoulderdiameter: {
        type: String,
        required: true
    },
    chestdiameter:{
        type: String,
        required: true
    },
    legsdiameter:{
        type: String,
        required: true
    }
});
module.exports = Profile = mongoose.model('profile', ProfileSchema);