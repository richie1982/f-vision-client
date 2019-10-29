import React, { useState } from 'react'
import '../index.css'

const baseUrl = "http://localhost:3001/comment"

const Form3 = (props) => {

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

    const [ comment, setComment ] = useState("")

    const clearState = () => {
        setComment("")
    }

    const createProfile = () => {
        return fetch(baseUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: props.userId,
                comment: comment,
            })
        }).then(resp => resp.json())
    }

    const handleSubmit = () => {
        createProfile()
        clearState()
        props.setStep(1)
        props.setUserId("")
    }

    return(
        <div className={props.step === 3 ? "form" : null} style={{marginTop: "4px"}}>
            <div className="header">
                <h3 className="header-text">Step 3: Final comments</h3>   
            </div>
            <div style={props.step === 3 ? inputStyle : offMode}>
                <div>
                    <h5>Comments</h5>
                    <textarea className="text-area"
                        onChange={(e) => {setComment(e.target.value)}}
                        value={comment}
                    />
                </div>
            </div>
            <div style={props.step === 3 ? buttonPostion : offMode}>
                <button className="button"
                onClick={() => handleSubmit()}
                >Next ></button>
            </div>
        </div>
    )
}

export default Form3