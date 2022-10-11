const sgMail = require('@sendgrid/mail');
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
    const mail = { ...data, from: "1303roma01@gmail.com" };
    await sgMail(mail);
    return true;
}

module.exports = sendMail;