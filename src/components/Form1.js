import React, { useState } from 'react'
import '../index.css'

const baseUrl = "http://localhost:3001/"

const Form1 = (props) => {

    const inputStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    }

    const offMode ={
        display: 'none',
    }

    const buttonPostion = {
        alignSelf: 'flex-end', 
        marginTop: '50px',
    }

    const [ firstName, setFirstName ] = useState("")
    const [ surName, setSurName ] = useState("")
    const [ email, setEmail ] = useState("")

    const clearState = () => {
        setFirstName("")
        setSurName("")
        setEmail("")
    }

    const createProfile = () => {
        return fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: firstName,
                surname: surName,
                email: email
            })
        })
        .then(resp => resp.json())
        .then(data => props.setUserId(data._id))
    }

    const handleSubmit = () => {
        createProfile()
        clearState()
        props.setStep(2)
    }

    return(
        
        <div className={props.step === 1 ? "form" : null} style={null}>
            <div className="header">
                <h3 className="header-text">Step 1: Your details</h3>   
            </div>
            <div style={props.step === 1 ? inputStyle : offMode}>
                <div>
                    <h5>First Name</h5>
                    <input className="input-box"
                        onChange={(e) => {setFirstName(e.target.value)}}
                        value={firstName}
                    />
                </div>
                <div>
                    <h5>Surname</h5>
                    <input className="input-box"
                        onChange={(e) => {setSurName(e.target.value)}}
                        value={surName}
                    />
                </div>
                <div>
                    <h5>Email Address</h5>
                    <input className="input-box"
                        onChange={(e) => {setEmail(e.target.value)}}
                        value={email}
                        type="email"
                    />
                </div>
            </div>
            <div style={props.step === 1 ? buttonPostion : offMode}>
                <button className="button"
                onClick={() => handleSubmit()}
                >Next ></button>
            </div>
        </div>
    )
}

export default Form1