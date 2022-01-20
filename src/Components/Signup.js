import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link,useHistory} from  'react-router-dom';


function SignUp() {
  return (
    <div className='signup-wrapper'>
      <Card sx={{ maxWidth: 450 }}>      
        <CardContent>
          <Typography sx={{mx:'auto', width:'100%', textAlign: 'center'}} gutterBottom variant="h5" component="div">
            Instagram
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: 16 }} color='grey'>Sign up to see photos and videos from your friends.</Typography>
          <Alert severity="error" sx={{ fontSize: 16 }}>This is an error alert — check it out!</Alert>

          <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" fullWidth='true' size="small"/>
          <TextField id="outlined-basic" label="Password" margin="dense" variant="outlined" fullWidth='true' size="small"/>
          <TextField id="outlined-basic" label="Full Name" margin="dense" variant="outlined" fullWidth='true' size="small"/>
          <Button color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon />} component="label">
            Upload Profile Image
            <input type="file" accept="image/*" hidden />
          </Button>
        </CardContent>
        <CardActions>
          <Button color="primary" fullWidth={true} variant="contained"  > 
            Sign up
          </Button>
        </CardActions>
        <CardContent>
          <Typography  sx={{ textAlign: 'center', fontSize: 16 }}>
            By signing up, you agree to our Terms, Conditions and Cookies policy.
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ height: '5vh', textAlign:'center' }}>
        <CardContent>
            <Typography sx={{ textAlign: 'center', fontSize: 16 }}>
            Having an account ?
            <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
            </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUp
