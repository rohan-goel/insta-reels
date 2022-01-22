import React from 'react'
import {useState,useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { database,storage } from '../firebase';



function SignUp() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [file,setFile] = useState(null);
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false)
  const history = useHistory();
  const { signup } = useContext(AuthContext);
  
  const handleClick = async() => {
    if(file==null){
        setError("Please upload profile image first");
        setTimeout(()=>{
            setError('')
        },2000)
        return;
    }
    try{
        setError('')
        setLoading(true)
        let userObj = await signup(email,password)
        let uid = userObj.user.uid
        const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file);
        uploadTask.on('state_changed', fn1, fn2, fn3);
      
        // on state change fn1
        function fn1(snapshot){
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            console.log(`Upload is ${progress} done.`)
        }
        // on error fn2
        function fn2(error){
            setError(error);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false)
            return;
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url);
                database.users.doc(uid).set({
                    email:email,
                    userId:uid,
                    fullname:name,
                    profileUrl:url,
                    createdAt:database.getTimeStamp()
                })
            })
            setLoading(false);
            history.push('/')
        }
    }catch(err){
        setError(err);
        setTimeout(()=>{
            setError('')
        },2000)
    }
}

  return (
    <div className='signup-wrapper' style={{height: "100vh",alignItems: "center",display: "flex",flexDirection:'column', justifyContent: "center"}}>
      <Card sx={{ maxWidth: 450 }}>      
        <CardContent>
          <Typography sx={{mx:'auto', width:'100%', textAlign: 'center'}} gutterBottom variant="h5" component="div">
            Instagram
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: 16 }} color='grey'>Sign up to see photos and videos from your friends.</Typography>
          {error!=='' && <Alert severity="error" sx={{ fontSize: 16 }}>{error}</Alert>}

          <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" fullWidth='true' size="small" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <TextField id="outlined-basic" label="Password" margin="dense" variant="outlined" fullWidth='true' size="small" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <TextField id="outlined-basic" label="Full Name" margin="dense" variant="outlined" fullWidth='true' size="small" value={name} onChange={(e) => setName(e.target.value)}/>
          <Button color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon />} component="label">
            Upload Profile Image
            <input type="file" accept="image/*" hidden onChange={(e)=>setFile(e.target.files[0])} />
          </Button>
        </CardContent>
        <CardActions>
          <Button color="primary" fullWidth={true} variant="contained"  disabled={loading} onClick={handleClick}> 
            Sign up
          </Button>
        </CardActions>
        <CardContent>
          <Typography  sx={{ textAlign: 'center', fontSize: 16 }}>
            By signing up, you agree to our Terms, Conditions and Cookies policy.
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ height: '5vh', textAlign:'center',  maxWidth: 450  }} style={{alignItems: "center",display: "flex",flexDirection:'column', justifyContent: "center", width:'100%'}}>
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
