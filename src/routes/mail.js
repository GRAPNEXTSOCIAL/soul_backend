const express = require("express");
const mail = new express.Router();
const nodemailer = require("nodemailer");


require("dotenv").config();




// send mail
mail.post("/register",  (req, res) => {
    
    let { name } = req.body;
    let { number } = req.body;
    let { email } = req.body;
    let { message } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Sending Email With React And Nodejs",
            html: '<h2>Congratulation! <span style="color:green">You successfully sent Email<span></h2> <br/><p> Thank You for contacting us,we will get back to you shortly. </p>'
        };

        const mailOptions1 = {
            from: email,
            to: process.env.EMAIL,
            subject: `Mail From ${email}`,
            html: `<h2>Name: ${name}<h2> <h2>Phone Number: ${number}</h2> <p>${message}</p>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

        transporter.sendMail(mailOptions1, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


module.exports = mail;