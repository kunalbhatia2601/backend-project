import React, { useEffect, useState } from 'react'
import "../App.css"

const Users = () => {

    const [data, setData] = useState([]);

    // useEffect() is a hook that allows you to perform side effects in functional components
    // Side effects are actions that your component takes that affect things outside of your component
    // The only argument to useEffect() is a callback function
    // The callback function is executed after the component is rendered
    // Here, we are using useEffect() to fetch data from the server when the component is rendered or when the component is loaded.

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