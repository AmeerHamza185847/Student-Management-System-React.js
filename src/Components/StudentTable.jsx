import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { deleteDoc, doc, namedQuery, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import UpdateStudentDialogBox from './UpdateStudent';

export const StudentTable = ({ students, setStudents }) => {

    const [currentStudent, setCurrentStudent] = React.useState(null);
    const [isDialogBoxOpen, setIsDialogBoxOpen] = React.useState(false);


    // A function to delete students document 
    let handleDelete = async (studentId) => {
        const studentDoc = doc(db, 'students', studentId);
        await deleteDoc(studentDoc);
        setStudents(students.filter((std) => std.id !== studentId))
        console.log("Delete called", studentId);
    }

    // A function to edit student document
    let handleEdit = async (studentId) => {
        const studentToBeUpdated = students.find((s) => s.id === studentId);
        console.log("studentToBeUpdated :" , studentToBeUpdated);
        setCurrentStudent(studentToBeUpdated);
        setIsDialogBoxOpen(true);
    }

    let handleStudentSave = async () => {
        // Refrence to current student
        const studentDoc = doc(db, 'students', currentStudent.id);
        await updateDoc(studentDoc, {
            name: currentStudent.name,
            age: currentStudent.age,
            rollNumber: currentStudent.rollNumber
        })
        setStudents(students.map(std=> std.id === currentStudent.id ? currentStudent : std));
        handleDialogBoxClose();


    }

    let handleChangeDailogBox = (e) => {
        const { name, value } = e.target;
        setCurrentStudent((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // A function to close updateDialogBox 
    let handleDialogBoxClose = () => {
        setIsDialogBoxOpen(false);
        setCurrentStudent(null);
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ width: 800, margin: 'auto', backgroundColor: "#fefede" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Roll No</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Name</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Age</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow
                                key={student.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {student.rollNumber}
                                </TableCell>
                                <TableCell align="center">{student.name}</TableCell>
                                <TableCell align="center">{student.age}</TableCell>
                                <TableCell align="center">
                                    <MdEdit style={styles.deleteStyle} onClick={() => { handleEdit(student.id) }} />
                                    <MdDelete style={styles.editStyle} onClick={() => { handleDelete(student.id) }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <UpdateStudentDialogBox
                isDialogBoxOpen={isDialogBoxOpen}
                currentStudent={currentStudent}
                handleDialogBoxClose={handleDialogBoxClose}
                handleChangeDailogBox={handleChangeDailogBox}
                handleStudentSave={handleStudentSave}
            />
        </>
    );
}


const styles = {
    editStyle: {
        color: "red",
        marginLeft: "10px",
        fontSize: "1.3rem",
        cursor: "pointer"
    },
    deleteStyle: {
        fontSize: "1.3rem",
        cursor: "pointer"
    }
}