import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './CreateStudent.css';

export const CreateStudent = ({readStudent}) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [isCreatingStudent,setIsCreatingStudent] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsCreatingStudent(true);
            await addDoc(collection(db, 'students'), {
                rollNumber:Number(rollNumber),
                name: name,
                age: Number(age)
            })
            setRollNumber("");
            setName("");
            setAge("");
            setIsCreatingStudent(false);
            readStudent();
        }
        catch (error) {
            console.log("error :" , error.message);
            setIsCreatingStudent(false);
        }

    }
    return (
        <div className='formContainer'>
            <form className='stdForm' onSubmit={handleSubmit}>
                <h3>CREATE STUDENT</h3>
                <p>
                    <label htmlFor="stdName">Name :</label><br />
                    <input
                        type="text"
                        placeholder='Enter Student Name'
                        id='stdName'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </p>
                <p>
                    <label htmlFor="stdAge">Age :</label><br />
                    <input
                        type="number"
                        placeholder='Enter Student Age'
                        id='stdAge'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required />
                </p>
                <p>
                    <label htmlFor="stdAge">RollNumber :</label><br />
                    <input
                        type="number"
                        placeholder='Enter Roll Number '
                        id='stdAge'
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                        required />
                </p>
                <p>
                    <button
                        className='createBtn'
                        type='submit'
                    >{isCreatingStudent ? "Creating....":"Create"}</button>
                </p>
            </form>
        </div>
    )
}
