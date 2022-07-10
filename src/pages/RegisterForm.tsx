import { makeStyles } from '@mui/styles';
import { Paper,Grid, TextField, Button, Alert, AlertColor} from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";

type RegisterValue = {
  number ?: number,
  cvv ?: number,
  date ?: string
}

const useStyles = makeStyles({
  header:{
    textAlign: 'center', 
    marginBottom: '50px'
  },
  cardNumber:{
    width: '52%'
  },
  cvvInput:{
    marginRight: '10px', 
    marginBottom: '10px'
  },
  btnRegister:{
    color: 'black',
    marginRight: "10px",
    width: '50%',
    border: '1px solid gray'
  }
});
//Card Registration Page
function RegisterForm(): JSX.Element{
    const [values, setValues] = useState<RegisterValue | null>(null);
    const [alert,setAlert] = useState<{message: string, type: AlertColor}>({message: '', type: 'error'});
    const classes = useStyles();

    return (
        <>
          <div className="App">
            <Header />
            <div>
              <div className={classes.header}>Welcome !!!</div>
              <Paper>
                <Grid container spacing={3} direction={'column'} >
                  <Grid item xs={12}>
                    <TextField label="Credit Card number" type="number" className={classes.cardNumber} onChange={(event) => {
                      const regex = /^([a-z0-9]){1,16}$/i;
                      console.log(JSON.stringify(values))
                      if (regex.test(event.target.value)) {
                        setAlert({message:'', type: 'info'});
                        setValues({...values, number: parseInt(event.target.value)});
                      }else{
                        setAlert({message:'Card number should be maxlength: 16', type: 'error'});                  
                      }
                    }}></TextField>
                  </Grid>

                  <Grid item xs={6} columns={{ xs: 4, md: 12 }}>              
                      <TextField label="CVV" type="number" className={classes.cvvInput} onChange={(event) => {
                        const regex = /^([a-z0-9]){1,3}$/i;
                        if (regex.test(event.target.value)) {
                          setAlert({message:'', type: 'info'});
                          setValues({...values, cvv: parseInt(event.target.value)});
                        }else{
                          setAlert({message:'CVV should be maxlength: 3', type: 'error'});                  
                        }
                      }}>                
                      </TextField>
                      <TextField label="Expiry" type="text" className={classes.cvvInput}  onChange={(event) => {
                        const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
                        if (regex.test(event.target.value)) {
                          setAlert({message:'', type: 'info'});
                          setValues({...values, date: event.target.value});
                        }else{
                          setAlert({message:'Expiry Date should in format: MM/YY', type: 'error'});                  
                        }
                      }}></TextField>              
                  </Grid>              
                  
                  <Grid item xs={12}>
                    <Button className={classes.btnRegister} onClick={() => {
                      if(!values?.cvv || !values?.date || !values?.number){
                        setAlert({message:'Please enter required values', type: 'error'});
                      }else{
                        setAlert({message:`Registration successful and card details: ${JSON.stringify(values)}`, type: 'info'});
                      }
                    }}> Submit </Button>
                  </Grid>
                  
                  {alert?.message &&
                    <Grid item xs={12}>
                      <Alert color={alert?.type}>{alert?.message}</Alert>
                    </Grid>
                  }
                </Grid>
              </Paper>
            </div>   
          </div>     
      </>
    )
}

export default RegisterForm;