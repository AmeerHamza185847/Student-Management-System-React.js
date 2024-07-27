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
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const StudentTable = ({ students, setStudents }) => {

    let handleDelete = async (studentId) => {
        const studentDoc = doc(db, 'students', studentId);
        await deleteDoc(studentDoc);
        setStudents(students.filter((std)=> std.id !== studentId))
        console.log("Delete called", studentId);
    }

    let handleEdit = async (studentId) => {
        console.log("edit called", studentId);
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: 800, margin: 'auto', backgroundColor: "#fefede" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight: 'bold'}} align='center'>Roll No</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}} align="center">Name</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}} align="center">Age</TableCell>
                        <TableCell sx={{fontWeight: 'bold'}} align="center">Actions</TableCell>
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