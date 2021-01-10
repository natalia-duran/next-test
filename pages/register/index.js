import React, { useState } from 'react';
import FormLayout from '../../components/FormLayout/FormLayout';
import Step1 from '../../components/Steps/Step1';
import Step2 from '../../components/Steps/Step2';
import Step3 from '../../components/Steps/Step3';
import Success from '../../components/Steps/Success';

const Register = () => {

    const [step, setStep] = useState(1);
    const [form, setForm] = useState({});


    const handleData = (obj) => {
        setForm({ ...form, ...obj });
    }

    const displayData = () => {
        console.log(form);
    }

    const handleSteps = () => {
        setStep( step + 1 );
    };

    const handlePreview = () => {
        setStep( step - 1 );
    };


    return (
        <>
         <h2>Step {step}</h2>

         { step === 1 && <Step1 handler={handleData} stepsCouter={handleSteps} /> }
         { step === 2 && <Step2 handler={handleData} stepsCouter={handleSteps} /> }
         { step === 3 && <Step3 handler={handleData} stepsCouter={handleSteps} /> }
         { step > 3 && <Success /> }

         { step < 1 && <button onClick={handlePreview}>preview</button> }
         
         <button onClick={displayData}>ver data</button>
        </>
    )
}

Register.Layout = FormLayout;

export default Register;
