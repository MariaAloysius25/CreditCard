import { Alert, Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import '../App.css';

//Login Page
function Login(): JSX.Element{
    let navigate = useNavigate();
    const [username,setUsername] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [error,setError] = useState<boolean>(false);

    return (
        <div style={{ padding: 30, textAlign: 'center' }} >
          <Header />
          <Paper>
            <Grid container spacing={3} direction={'column'} >
              <Grid item xs={12}>
                <TextField label="Username" onChange={(e) => {setUsername(e.target.value)}}></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password" type={'password'} onChange={(e) => {setPassword(e.target.value)}}></TextField>
              </Grid>
              
              <Grid item xs={12}>
                <Button fullWidth onClick={() => {
                  if(username && password) {
                    navigate(`/registration/${username}`)
                  }else{
                      setError(true);
                  }
                }}> Login </Button>
              </Grid>

                {error &&
                <Grid item xs={12}>
                  <Alert color='error'>Invalid login</Alert>
                </Grid>}
            </Grid>
          </Paper>
        </div>
    );   
}

export default Login;