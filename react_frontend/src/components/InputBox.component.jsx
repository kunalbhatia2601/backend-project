import React from 'react'

const InputBox = ({ type, placeholder = "meri mrji", id, value, fxn }) => {
    return (
        <div style={{marginBottom:"10px"}}>

            <input value={value} onChange={(e) => fxn(e.target.value)} type={type} placeholder={placeholder} id={id}></input>
            
        </div>
    )
}

export default InputBox
