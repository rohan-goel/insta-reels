import React from 'react'
import { useContext,useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link,useHistory} from  'react-router-dom';
import Alert from '@mui/material/Alert';


function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const history = useHistory();
  const { login } = useContext(AuthContext);
  
  const handleClick = async() => {
    try{
        setError('');
        setLoading(true)
        await login(email,password);
        setLoading(false);
        history.push('/')
    }catch(err){
      setError(err);
      console.log(err)
        setTimeout(()=>{
            setError('')
        },2000);
        setLoading(false);
    }
}
  return (
    <div className='login-wrapper' style={{height: "100vh",alignItems: "center",display: "flex",flexDirection:'column', justifyContent: "center"}}>
      <Card sx={{ maxWidth: 450 }}>      
        <CardContent>
          <Typography sx={{mx:'auto', width:'100%', textAlign: 'center'}} gutterBottom variant="h5" component="div">
            Instagram
          </Typography>
          {error!='' && <Alert severity="error" sx={{ fontSize: 16 }}>{error}</Alert>}
          <TextField id="outlined-basic" label="Enter Email" variant="outlined" margin="dense" fullWidth='true' size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <TextField id="outlined-basic" label="Password" margin="dense" variant="outlined" fullWidth='true' size="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <Typography color="primary" variant="subtitle1">
              Forget Password ?
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" fullWidth={true} variant="contained" onClick={handleClick} disabled={loading}>
            LOG IN
          </Button>
        </CardActions>
       
      </Card>
      <Card variant="outlined" sx={{ height: '5vh', textAlign: 'center', maxWidth: 450 }} style={{ alignItems: "center", display: "flex", flexDirection: 'column', justifyContent: "center", width: '100%' }}>
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
