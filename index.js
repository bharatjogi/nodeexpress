

const cors = require("cors");
const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "bharatjogi.07@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR Bharat" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "bharatjogi.07@gmail.com",
    pass: "ktbnlfeaabdgizosno",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});
app.listen(5001, () => console.log("Server Running"));

// const mysql =require("mysql");
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "mlm"
//   });
 
// app.get("/",(req,resp)=>{
//     con.connect(function(err) {
//         if (err) throw err;
//         con.query("SELECT * FROM users", function (err, result, fields) {
//           if (err) throw err;
//           resp.send(result)
//         //   result.forEach(element => {
//         //    resp.send(element)
//         //   });
         
//         });
//       });
    
// }).listen(5001);
