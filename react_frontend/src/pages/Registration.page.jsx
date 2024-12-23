import React, { useState } from 'react'
import InputBox from '../components/InputBox.component'

function Registration() {

    // useState() is a hook that allows you to have state variables in functional components
    // The only argument to useState() is the initial state
    // useState() returns an array with two elements
    // The first element is the current state value
    // The second element is a state setter function
    // You can call this function from anywhere in your component to update the state

    const [name, setname] = useState("");
    const [pass, setpass] = useState("");
    const [username, setusername] = useState("");

    function register()
    {

        const url="http://localhost:3000";

        // fetch() is a web API that is used to make network requests
        // It takes two arguments, the URL of the resource you want to fetch and an optional object that allows you to configure the request
        // fetch() returns a promise that resolves to the Response to that request, whether it is successful or not
        // You can use the .then() method to access the response data
        // The .then() method takes a callback function that takes the response as an argument
        // You can use the .catch() method to handle errors

        fetch(url + "/send-data", {

            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({name, username, pass})

        })
        .then((responce) => responce.json())
        .then(d => {
            alert("User Registered");
            setname("");
            setpass("");
            setusername("");
        })
        .catch((e) => {
            alert("Some Error")
        })

    }


    return (
        <div>

            <InputBox 
                type="text" 
                placeholder="name" 
                id="name" 
                value={name} 
                fxn={setname} 
            />

            <InputBox 
                type="text" 
                placeholder="username" 
                id="username" 
                value={username} 
                fxn={setusername} 
            />

            <InputBox 
                type="password" 
                placeholder="password" 
                id="pass" 
                value={pass}
                fxn={setpass} 
            />

            <br/>

            <button onClick={() => register()}>Register</button>

        </div>
    )
}

export default Registration
