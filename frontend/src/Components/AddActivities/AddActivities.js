import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
/*import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';*/

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addActivities } from '../../Redux/actions/activitieActions';
import { TextareaAutosize } from '@mui/material';


const theme = createTheme();

export default function AddActivitie() {

 const dispatch = useDispatch()
 const navigate = useNavigate()
 const [image, setImage] = React.useState("")
 const [name, setName] = React.useState("")
 const [description, setDescription] = React.useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file",image)
    data.append("name",name)
    data.append("description", description)
   /* console.log({
      name: data.get('name'),
     description: data.get('description'), });*/

    dispatch(addActivities(data, navigate))
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ADD Activitie
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <p>Titre :</p>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e)=>setName(e.target.value)}
                />
              </Grid>
        
              <Grid item xs={12}>
                <p>Description :</p>
                <TextareaAutosize
                  required
                  fullWidth
                  id="description"
                  label="description"
                  name="description"
                  type= "String"
                  onChange={(e)=>setDescription(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  id="file"
                  label="file"
                  name="file"
                  type= "file"
                  onChange={(e)=>setImage(e.target.files[0])}
                />
                
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ADD ACTIVITIE
            </Button>
      
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}