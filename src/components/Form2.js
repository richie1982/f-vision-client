import React, { useState } from 'react'
import '../index.css'

const baseUrl = "http://localhost:3001/"

const Form2 = (props) => {

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
    }

    const [ telephone, setTelephone ] = useState("")
    const [ gender, setGender ] = useState("male")
    const [ dateOfBirth, setDateOfBirth ] = useState("")

    const clearState = () => {
        setTelephone("")
        setGender("")
        setDateOfBirth("")
    }

    const createProfile = () => {
        return fetch(baseUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.userId,
                telephone: telephone,
                gender: gender,
                dateOfBirth: dateOfBirth
            })
        }).then(resp => resp.json())
    }

    const handleSubmit = () => {
        createProfile()
        clearState()
        props.setStep(3)
    }

    return(
        <div className={props.step === 2 ? "form" : null} style={{marginTop: "4px"}}>
            <div className="header">
                <h3 className="header-text">Step 2: More comments</h3>   
            </div>
            <form style={props.step === 2 ? inputStyle : offMode}>
                <div>
                    <h5>Telephone Number</h5>
                    <input className="input-box"
                        onChange={(e) => {setTelephone(e.target.value)}}
                        value={telephone}
                        type="number"
                    />
                </div>
                <div>
                    <h5>Gender</h5>
                    <select className="drop-down"
                        onChange={(e) => {setGender(e.target.value)}}
                        value={gender}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                </form>
                <div style={props.step === 2 ? {display: "block"} : {display: "none"}}>
                    <h5>Date of Birth</h5>
                    <input className="input-box"
                        onChange={(e) => {setDateOfBirth(e.target.value)}}
                        value={dateOfBirth}
                        type="date"
                    />
                </div>
            <div style={props.step === 2 ? buttonPostion : offMode}>
                <button className="button"
                onClick={() => handleSubmit()}
                >Next ></button>
            </div>
        </div>
    )
}

export default Form2