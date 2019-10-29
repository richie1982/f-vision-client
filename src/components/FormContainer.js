import React, { useState } from 'react';
import Form1 from './Form1'
import Form2 from './Form2';
import Form3 from './Form3';
import '../index.css'

const FormContainer = () => {

    const [ step, setStep ] = useState(1)
    const [ userId, setUserId ] = useState("")

    return(
        <div className="container">
            <Form1 step={step} setStep={setStep} userId={userId} setUserId={setUserId}/>
            <Form2 step={step} setStep={setStep} userId={userId} setUserId={setUserId}/>
            <Form3 step={step} setStep={setStep} userId={userId} setUserId={setUserId}/>
        </div>
    )
}

export default FormContainer