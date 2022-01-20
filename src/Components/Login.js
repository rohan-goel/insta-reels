import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link,useHistory} from  'react-router-dom';


function Login() {
  return (
    <div className='login-wrapper'>
      <Card sx={{ maxWidth: 450 }}>      
        <CardContent>
          <Typography sx={{mx:'auto', width:'100%', textAlign: 'center'}} gutterBottom variant="h5" component="div">
            Instagram
          </Typography>

          <TextField id="outlined-basic" label="Enter Email" variant="outlined" margin="dense" fullWidth='true' size="small"/>
          <TextField id="outlined-basic" label="Password" margin="dense" variant="outlined" fullWidth='true' size="small"/>
          <Typography color="primary" variant="subtitle1">
              Forget Password ?
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" fullWidth={true} variant="contained" > 
            LOG IN
          </Button>
        </CardActions>
       
      </Card>
      <Card variant="outlined" sx={{ height: '5vh', textAlign:'center' }}>
        <CardContent>
            <Typography sx={{ textAlign: 'center', fontSize: 16 }}>
            Don't Have an account ?
            <Link to="/signup" style={{ textDecoration: 'none' }}>Sign up</Link>
            </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
