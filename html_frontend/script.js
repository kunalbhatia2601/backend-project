function register()
{

    const url = "http://localhost:3000";

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;

    // fetch is used to send the data to the server.
    // It takes two parameters, the URL and an object.
    // The object contains the method, headers and body.
    // The method is POST, the headers contain the content type and the body contains the data that is to be sent to the server.
    // The data is sent in the form of a JSON object.
    // The response from the server is converted to JSON format.
    // If the response is successful, an alert is displayed and the input fields are cleared.
    // If there is an error, an alert is displayed.

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
        document.getElementById("name").value = "";
        document.getElementById("pass").value = "";
        document.getElementById("username").value = "";
    })
    .catch((e) => {
        alert("Some Error")
    })

}

function getUsers()
{

    const url="http://localhost:3000";

    // fetch is used to get the data from the server.
    // It takes the URL as a parameter.
    // The response from the server is converted to JSON format.
    // The data is displayed in a table format.
    // The table is displayed in the div with the id "table".
    // The table contains the S. No., Name and Username of the users.

    fetch(url + "/get-data")
    .then(responce => responce.json())
    .then(({data}) => {

        let table = `
            <table border=1 cellPadding=10 cellSpacing=0>
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
            <tbody>`;
        
        data.map((d, i) => {
            table += "<tr><td>" + (i+1) + "</td><td>" + d.name + "</td><td>" + d.username + "</td></tr>";
        })
        
        table += "</tbody></table>";

        document.getElementById("table").innerHTML = table;

    })

}