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
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editActivitie, getOneActivitie } from '../../Redux/actions/activitieActions';
import { TextareaAutosize } from '@mui/material';


const theme = createTheme();

export default function EditActivitie() {

 const dispatch = useDispatch()
 const navigate = useNavigate()
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarger);
    
    // console.log({
    //   name: data.get('name'),
    //   description: data.get('description'),
    // });

    dispatch(editActivitie(id,updatedActivitie, navigate))
  };
const {id}=useParams();
const oldActivitie = useSelector((state) => state.activitieReducer.oneActivitie);
  const [updatedActivitie, setUpdatedActivitie] = React.useState(oldActivitie);
  
  React.useEffect(() => {
    dispatch(getOneActivitie(id));
  }, [id]);
  React.useEffect(() => {
    setUpdatedActivitie(oldActivitie);
  }, [oldActivitie]);


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
            EDIT Activitie
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <p>Titre :</p>
                <TextField
                  onChange={(e) =>
                    setUpdatedActivitie({
                      ...updatedActivitie,
                      name: e.target.value,
                    })}
                    value={updatedActivitie.name}
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
        
              <Grid item xs={12}>
                <p>Description :</p>
                <TextareaAutosize
                   onChange={(e) =>
                    setUpdatedActivitie({
                      ...updatedActivitie,
                      description: e.target.value,
                    })
                  }
                  value={updatedActivitie.description}
                  required
                  fullWidth
                  id="description"
                  label="description"
                  name="description"
                  type="String"
                />
                <TextField
                 onChange={(e) =>
                    setUpdatedActivitie({
                      ...updatedActivitie,
                      image: e.target.value,
                    })
                  }
                  value={updatedActivitie.image}
                  required
                  fullWidth
                  id="file"
                  label="file"
                  name="file"
                  type="file"
                />
                
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SAVE ACTIVITIE
            </Button>
      
          </Box>
        </Box>
        <Link to='/activitielist'>  <Button
              type="cancel"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              CANCEL
            </Button></Link>
      </Container>
    </ThemeProvider>
  );
}
