import React from 'react';
import './StudentList.css';
import { StudentTable } from '../Components/StudentTable';

export const StudentList = ({ students, setStudents }) => {


    return (
        <>
            <h1>Student List</h1>
            {/* <div className='studentList'>
            {
            students && students.map((std)=>(
                <div key={std.id} className='student'>
                    <h2>Name :{std.name}</h2>
                    <p>Age :{std.age}</p>
                    <p>RollNo :{std.rollNumber}</p>
                </div>
            ))
            }
        </div> */}
            <StudentTable students={students} setStudents={setStudents} />
        </>
    )
}
