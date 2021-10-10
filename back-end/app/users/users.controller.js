const { Users } = require('../../db/models');
const { validationResult } = require('express-validator');
const { 
    getDocumentById,
    getAllDocuments,
    updateDocument,
    deleteDocument,
} = require("../../db/controllers");
const { constants, message } = require('../../config');
const { catchFunction } = require('../../utilities/common-utils');

const { SUCCESS, ERROR } = constants;

module.exports = function (app) {
    app.getUser = async function (req, res) {
        try {
            // check request middleware error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: errors.array({ onlyFirstError: true })[0].msg,
                });
            };
            const { userId } = req.params;
            const result = await getDocumentById(Users, userId);
            return res.status(SUCCESS.CODE).send({
                status: 1,
                data: result,
            });
        } catch (getUserError) {
            return catchFunction({
                res,
                requestId: req._id,
                fileName: 'users.controller.js',
                methodName: 'getUser',
                error: getUserError,
            });
        }
    };

    app.getUsers = async function (req, res) {
        try {
            const result = await getAllDocuments(Users);
            return res.status(SUCCESS.CODE).send({
                status: 1,
                data: result,
            });
        } catch (getUsersError) {
            return catchFunction({
                res,
                requestId: req._id,
                fileName: 'users.controller.js',
                methodName: 'getUsers',
                error: getUsersError,
            });
        }
    };

    app.updateUser = async function (req, res) {
        try {
            // check request middleware error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: errors.array({ onlyFirstError: true })[0].msg,
                });
            };
            const { userId } = req.params;
            const data = req.body;

            // can not change email, password & user role
            if (data && data.email) delete data.email;
            if (data && data.password) delete data.password;
            if (data && data.role) delete data.role;

            console.log("data :", data);

            const updateUserResult = await updateDocument( Users, { _id: userId }, data);
            return res.status(SUCCESS.CODE).send({
                message: message.UPDATED_SUCCESSFULLY,
                status: 1,
                data: updateUserResult,
            });
        } catch (updateUserError) {
            return catchFunction({
                res,
                requestId: req._id,
                fileName: 'users.controller.js',
                methodName: 'updateUser',
                error: updateUserError,
            });
        }
    };

    app.deleteUser = async function (req, res) {
        try {
            // check request middleware error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(ERROR.BAD_REQUEST.CODE).send({
                    status: 0,
                    message: errors.array({ onlyFirstError: true })[0].msg,
                });
            };
            const { userId } = req.params;
            const deleteUserResult = await deleteDocument( Users, userId);
            return res.status(SUCCESS.CODE).send({
                message: message.DELETED_SUCCESSFULLY,
                status: 1,
                data: deleteUserResult,
            });
        } catch (deleteUserError) {
            return catchFunction({
                res,
                requestId: req._id,
                fileName: 'users.controller.js',
                methodName: 'deleteUser',
                error: deleteUserError,
            });
        }
    };
};