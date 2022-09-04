import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
            {/* Will add search icon later */}
        <input placeholder='Search...' className='search'></input>
        <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>Add</Button>
        <Button variant="outlined" startIcon={<EditIcon />} >Edit</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
        
        </Stack>

        
      
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            <form>
                <input className='user-form' placeholder='First Name'></input>
                <input className='user-form' placeholder='Last Name'></input>
                <input className='user-form' placeholder='Email'></input>
                <input className='user-form' placeholder='Phone'></input>
                <input className='user-form' placeholder='Location'></input>
                <input className='user-form' placeholder='Hobby'></input>
                <Button variant="contained">Add</Button>
            </form>

          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
