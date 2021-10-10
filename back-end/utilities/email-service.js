const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const { constants, message } = require('../config');

const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USERNAME,
    SMTP_PASSWORD,
} = constants;

const nodemailerConnection = () => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: false,
            auth: {
                user: SMTP_USERNAME,
                pass: SMTP_PASSWORD,
            },
        });

        // verify connection configuration
        transporter.verify((error, success) => error ? reject(error) : resolve(transporter));
    })
}

const sendEmail = (connectionInstnace, emailData) => {
    return new Promise(async(resolve, reject) => {
        const { user, link } = emailData;
        user.title = "Oticon";
        user.link = link;
        user.subject = 'Account Verification Email';
        const templateBody = await ejs.renderFile(path.join(__dirname, "../views/user-email.ejs"), user);
        const message = {
            from: '"Oticon" info@oticon.com',
            to: user.email,
            subject: 'Account Verification Email',
            headers: {
                "X-Laziness-level": 1000,
                charset: "UTF-8"
            },
            attachments: [{
                filename: "logo.png",
                path: (path.join(__dirname, "../views/logo.png")),
                cid: "logo"
            }],
            html: templateBody
        };
        connectionInstnace.sendMail(message, (error, response) => error ? reject(error) : resolve(true));
    })
}

module.exports = {
            nodemailerConnection,
            sendEmail,
        }