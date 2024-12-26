const express=require("express")
const cors = require("cors")
const bodyparser = require("body-parser")


const app=express();
// Express is a web application framework for Node.js.
// It is used to build web applications and APIs.
// It provides a set of features for building web applications and APIs, such as routing, middleware etc.

app.use(cors());
// CORS is Middleware that acts as security feature implemented in browsers.
// It is used to allow the client to access the resources from the server on a different domain.
// It is used to enable the cross-origin resource sharing policy.

app.use(bodyparser.json());
// Body-parser is a middleware that is used to parse the incoming request body and make it available under req.body property.
// It is used to extract the data from the incoming request and store it in the req.body object.

let data = [];
// Data is an array that is used to store the data that is sent by the client.


app.get("/", (req, res) => {
    res.send("Hello Server");
})


// app.post is used to handle the POST request from the client.
// It takes two parameters, the route and a callback function.
// The callback function takes two parameters, the request and response.
// The request parameter is used to get the data sent by the client and the response parameter is used to send the response to the client.
app.post("/send-data", (req, res) => {

    data.push(req.body);

    return res.json({msg : "User Registered"});

})


// app.get is used to handle the GET request from the client.
// It takes two parameters, the route and a callback function.
// The callback function takes two parameters, the request and response.
// The request parameter is used to get the data sent by the client and the response parameter is used to send the response to the client.
app.get("/get-data", (req, res) => {

    return res.status(200).json({data});

})


app.post("/edit-data", (req, res) => {

    let {data: newData, index} = req.body;

    data[index] = newData;

    return res.json({msg: "Data Updated"});

})

app.post("/delete-data", (req, res) => {

    let {index} = req.body;

    data = data.filter((d, i) => i !== index);

    return res.json({msg: "Data Deleted"});

})


// app.listen is used to start the server on the specified port.
// It takes two parameters, the port number and a callback function.
// The callback function is executed when the server is started.
app.listen(3000, () => {
    console.log("Server is Running 3000");
})