const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kseniyamelnnik@gmail.com",
        pass: "xfiwyrynsrytvuxj"
    }
});

app.post('/sendMessage', async function (req, res){

    const {message, name, email} = req.body
    
    let info = await transporter.sendMail({
        from: 'HR WANTS ME',
        to: "kseniyamelnnik@gmail.com",
        subject: "opportunity",
        html: `<div> 
        <b>Соообщение с Вашего portfolio page</b>
        </div>
        <div>name: ${name}</div>
        <div>contact: ${email}</div>
        <div>${message}</div>
        `
    })
    res.send('Success')
});

app.listen(3010, function() {
    console.log ('Example app listening on port 3010!')
})