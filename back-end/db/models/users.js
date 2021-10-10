/**
 * @file users.js
 * @summary Defines user schema
 * */

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const { message, constants } = require('../../config');

const { REGEX_PATTERN } = constants;

const validateEmail = email => REGEX_PATTERN.EMAIL.test(email);

const userSchema = new Schema({
    first_name: {
        type: String,
        trim: true,
        required: [true, message.USER_FIRST_NAME_REQUIRED],
    },
    last_name: {
        type: String,
        trim: true,
        required: [true, message.USER_LAST_NAME_REQUIRED],
    },
    active: {
        type: Boolean,
        default: false,
    },
    occupation: {
        type: String,
        trim: true,
        required: [true, message.USER_OCCUPATION_REQUIRED],
    },
    role: {
        type: String,
        trim: true,
        enum: ['admin', 'user'],
        required: [true, message.USER_ROLE_REQUIRED],
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: [true, message.USER_EMAIL_REQUIRED],
        validate: [validateEmail, message.INVALID_USER_EMAIL],
    },
    password: {
        type: String,
        trim: true,
        required: [true, message.USER_PASSWORD_REQUIRED],
    },
    email_verification_hash: {
        type: String,
        trim: true,
    },
    avatar: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
},
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
);


userSchema.pre('save', async function(next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
})

module.exports = {
    Users: model('Users', userSchema),
};
