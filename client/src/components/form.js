import React, { useState } from 'react';

export default function Form(){
    const[doctorName, setName] = useState("");
    const[patientName, setPName] = useState("");
    const[patientAge, setAge] = useState("");
    const[recordingDate, setDate] = useState("");

    const collectData = async(e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:4000/' , {
            method: 'post',
            body: JSON.stringify({doctorName,patientName,patientAge,recordingDate}),
            headers :{
                'Content-Type' : 'application/json'
            },
        });
        result = await result.json;
        localStorage.setItem("users" , JSON.stringify(result));
    }

    return (
        <form onSubmit = {collectData}>
        <input
            type="text"
            name="doctorName"
            placeholder="Doctor's Name"
            value={doctorName}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="text"
            name="patientName"
            placeholder="Patient's Name"
            value={patientName}
            onChange={(e) => setPName(e.target.value)}
        />
        <input
            type="number"
            name="patientAge"
            placeholder="Patient's Age"
            value={patientAge}
            onChange={(e) => setAge(e.target.value)}
        />
        <input
            type="date"
            name="recordingDate"
            placeholder="Recording Date"
            value={recordingDate}
            onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Submit</button>
        </form>
    );
};
