require('dotenv').config();
const mongoose = require('mongoose'),
nodemailer = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport')

const userSchema = new mongoose.Schema({
    email: {type: String},
    secret: {type: Number}
})

userSchema.statics.sendEmail = async function (email, message) {
    let transport = nodemailer.createTransport(smtpTransport({
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    }))

    const info = await transport.sendMail({
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: `SecretCode: ${message}`,
        text: message
    }, (err, sent)=>{
        if(err){
            console.log('error send email')     
        }else{
            console.log('succesfully sent', sent)
        }
    })
}

const User = mongoose.model('user', userSchema)

module.exports = User;