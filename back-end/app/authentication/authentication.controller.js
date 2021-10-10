const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { validationResult } = require('express-validator');
const { Users } = require('../../db/models');
const { 
    getDocument,
    updateDocument,
    createDocument,
} = require("../../db/controllers");
const { constants, message } = require('../../config');
const { createToken } = require('../middlewares/authentication');
const { catchFunction } = require('../../utilities/common-utils');
const { nodemailerConnection, sendEmail } = require('../../utilities/email-service');

const { SUCCESS, ERROR } = constants;

module.exports = function (app) {
    app.login = async (req, res) => {
        try {
            // check request middleware error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: errors.array({ onlyFirstError: true })[0].msg,
                });
            };

            // convert email to lowercase letters
            req.body.email = (req.body.email).toLowerCase();
            const { email, password } = req.body;

            const userData = await getDocument( Users, { email });

            if (!userData) {
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: message.INVALID_EMAIL_PASSWORD,
                });
            };

            if (userData && !userData.active) {
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: message.USER_NOT_ACTIVE,
                });
            }

            const isMatch = await bcrypt.compare(password, userData.password);

            if(!isMatch){
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: message.INVALID_EMAIL_PASSWORD,
                });
            };

            // these fields should remove from userData object before token generation
            delete userData.password;
            delete userData.first_name;
            delete userData.last_name;
            delete userData.email;

            const token = await createToken(userData);

            return res.status(SUCCESS.CODE).send({
                message: message.USER_LOGIN_SUCCESSFULLY,
                status: 1,
                data: {
                    user: userData,
                    token,
                }, 
            });

        } catch (loginError) {
            return catchFunction({
                res,
                requestId: req._id,
                fileName: 'authentication.controller.js',
                methodName: 'login',
                error: loginError,
            });
        }
    };

    app.signUp = async (req,res) => {
        try {
            // check request middleware error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: errors.array({ onlyFirstError: true })[0].msg,
                });
            };
            const userData = req.body;
            const email_verification_hash = crypto.randomBytes(128).toString('hex');
            userData.email_verification_hash = email_verification_hash;
            const connection = await nodemailerConnection();
            const link="http://"+req.get('host')+"/verify?id="+email_verification_hash;
            await sendEmail(connection, {
                user: userData,
                link,
            });
            await createDocument(Users, userData);
            return res.status(SUCCESS.CODE).send({
                message: message.USER_EMAIL_LINK_SENT_SUCCESSFULLY,
                status: 1,
            });
        } catch (signupError) {
            return catchFunction({
                res,
                requestId: req._id,
                fileName: 'authentication.controller.js',
                methodName: 'signUp',
                error: signupError,
            });
        }
    };

    app.verify = async (req,res) => {
        try {
            // validate request
            const { id } = req.query;
            if (!id) {
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: message.INVALID_VERIFICATION_REQUEST,
                });
            }
            const user = await getDocument(Users, {
                email_verification_hash: id,
            });
            if (!user) {
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: message.VERIFICATION_LINK_EXPIRED,
                });
            }
            // update active field in user document
            await updateDocument(Users, { _id: user._id }, {
                active: true,
                email_verification_hash: null,
            });
            return res.status(SUCCESS.CODE).send({
                message: message.USER_EMAIL_VERIFIED,
                status: 1,
            });
        } catch (verifyError) {
            return catchFunction({
                res,
                requestId: req._id,
                fileName: 'authentication.controller.js',
                methodName: 'verify',
                error: verifyError,
            });
        }
    };
    
};