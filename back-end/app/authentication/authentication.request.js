const { body } = require('express-validator');
const { Users } = require('../../db/models');
const { 
    getDocument,
} = require("../../db/controllers");
const { message, constants } = require('../../config');

const { REGEX_PATTERN, USER_ROLES } = constants;

const validate = (method) => {
    if (method === 'login') {
        return [
            body('email').exists().withMessage(message.INVALID_EMAIL_PASSWORD)
                .isEmail().withMessage(message.INVALID_EMAIL_PASSWORD)
                .custom(value => value.length >= 1 && value.length <= 255).withMessage(message.INVALID_EMAIL_PASSWORD),
            body('password').exists().withMessage(message.INVALID_EMAIL_PASSWORD)
                .matches(REGEX_PATTERN.PASSWORD, "i").withMessage(message.INVALID_EMAIL_PASSWORD)
                .custom(value => value.length >= 1 && value.length <= 255).withMessage(message.INVALID_EMAIL_PASSWORD)
        ]
    }
    if (method === 'sign-up') {
        return [
            body('first_name').exists().withMessage(message.USER_FIRST_NAME_REQUIRED)
                .custom(value => value.length >= 1 && value.length <= 255).withMessage(message.PLEASE_CHECK_INPUT_LENGTH),
            body('last_name').exists().withMessage(message.USER_LAST_NAME_REQUIRED)
                .custom(value => value.length >= 1 && value.length <= 255).withMessage(message.PLEASE_CHECK_INPUT_LENGTH),
            body('occupation').exists().withMessage(message.USER_OCCUPATION_REQUIRED)
                .custom(value => value.length >= 1 && value.length <= 255).withMessage(message.PLEASE_CHECK_INPUT_LENGTH),
            body('role').exists().withMessage(message.USER_ROLE_REQUIRED)
                .custom(value => value.length >= 1 && value.length <= 255).withMessage(message.PLEASE_CHECK_INPUT_LENGTH)
                .custom(value => {
                    const validRole = USER_ROLES.includes(value);
                    if(!validRole){
                        return Promise.reject(message.USER_ROLE_IS_NOT_VALID);
                    }
                    return true;
                }),
            body('email').exists().withMessage(message.USER_EMAIL_REQUIRED)
                .isEmail().withMessage(message.INVALID_EMAIL_ADDRESS)
                .custom(value => value.length >= 1 && value.length <= 255).withMessage(message.INVALID_EMAIL_ADDRESS)
                .custom(value => {
                    return getDocument(Users, {email: value}).then((user) => {
                        if(user){
                            return Promise.reject(message.USER_ALREADY_EXISTS);
                        }
                        return true;
                    })
                }),
            body('password').exists().withMessage(message.USER_PASSWORD_REQUIRED)
                .matches(REGEX_PATTERN.PASSWORD, "i").withMessage(message.INVALID_PASSWORD_PATTERN)
                .custom(value => value.length >= 1 && value.length <= 255).withMessage(message.INVALID_PASSWORD_PATTERN)
        ]
    }
}

module.exports = { validate }