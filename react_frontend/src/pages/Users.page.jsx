import React, { useEffect, useState } from 'react'
import "../App.css"

const Users = () => {

    const [data, setData] = useState([]);

    // useEffect() is a hook that allows you to perform side effects in functional components
    // Side effects are actions that your component takes that affect things outside of your component
    // The only argument to useEffect() is a callback function
    // The callback function is executed after the component is rendered
    // Here, we are using useEffect() to fetch data from the server when the component is rendered or when the component is loaded.

    const editUser = (index) => {

        // Using promt to get the new name, username of the user

        let name = prompt("Enter the new name. Keep it empty to keep the same name.");
        let username = prompt("Enter the new username. Keep it empty to keep the same username.");

        let newData = data[index];

        if(name !== "") 
        {
            newData.name = name;
        }

        if(username !== "")
        {
            newData.username = username;
        }

        const url="http://localhost:3000";

        fetch(url + "/edit-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data: newData, index})
        })
        .then(responce => responce.json())
        .then(() => {

            // Updating the data in the frontend

            setData(data.map((d, i) => {
                if(i === index)
                    return newData;
                return d;
            }))

        })

    }

    const deleteUser = (index) => {

        const url="http://localhost:3000";

        fetch(url + "/delete-data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({index})
        })
        .then(responce => responce.json())
        .then(() => {

            // Updating the data in the frontend

            setData(data.filter((d, i) => i !== index))

        })

    }

    useEffect(() => {

        const url="http://localhost:3000";

        fetch(url + "/get-data")
        .then(responce => responce.json())
        .then(({data}) => {

            setData(data)

        })

    }, [])

    return (
        <div>

            <table border={1} cellPadding={10} cellSpacing={0}>

                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        data.map((d, i) => {

                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{d.name}</td>
                                    <td>{d.username}</td>
                                    <td style={{display: "flex", justifyContent: "space-around", gap: "10px"}}>
                                        <button onClick={() => editUser(i)}>Edit</button>
                                        <button onClick={() => deleteUser(i)}>Delete</button>
                                    </td>

                                </tr>
                            )

                        })
                    }

                </tbody>

            </table>

        </div>
    )
}

export default Users