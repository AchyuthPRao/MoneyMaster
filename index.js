const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { dirname } = require("path");


const app = express();

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended:true}));

app.get("/signin", function(req, res){
    res.sendFile(__dirname + "/home.html");
});

app.post("/signin", function(req, res){

    const firstName = req.body.first; 
    const lastName = req.body.last;
    const email = req.body.email;
     
    var data = {

        members: [
            {
                email_address : email,
                status: "subscribed",
                merge_fields: {
                        FNAME: firstName,
                        LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us13.api.mailchimp.com/3.0/lists/ab30702151";
    
    const options ={
        method : "post",
        auth: "Saakshi:153cb28dd00db4be8846af328cf7179c-us13"
    }

    const request = https.request(url, options, function(response){
        
        if(response.statusCode===200)
        {
            res.sendFile(__dirname + "/signin.html");
        }
       
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
   
});



app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

// API KEY
// 153cb28dd00db4be8846af328cf7179c-us13

// list Id
// ab30702151