import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';

export default function UpdateStudentDialogBox({ currentStudent, isDialogBoxOpen, handleDialogBoxClose, handleChangeDailogBox,handleStudentSave }) {

    return (
        <Dialog
            open={isDialogBoxOpen}
            onClose={handleDialogBoxClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle>Update Student</DialogTitle>
            <DialogContent>
                <TextField
                    margin='dense'
                    name='name'
                    label='Student Name'
                    type='text'
                    fullWidth
                    value={currentStudent?.name || ''}
                    onChange={handleChangeDailogBox}
                />
                <TextField
                    margin='dense'
                    name='age'
                    label='Student Age'
                    type='number'
                    fullWidth
                    value={currentStudent?.age || ''}
                    onChange={handleChangeDailogBox}
                />
                <TextField
                    margin='dense'
                    name='rollNumber'
                    label='Student Roll No'
                    type='number'
                    fullWidth
                    value={currentStudent?.rollNumber || ''}
                    onChange={handleChangeDailogBox}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogBoxClose}>Cancel</Button>
                <Button onClick={handleStudentSave}>Update</Button>
            </DialogActions>
        </Dialog>
    );
}
