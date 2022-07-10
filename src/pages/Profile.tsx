import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  root:{
    textAlign: 'center',
      width: '80%',
      marginLeft: '60px',
      alignContent: 'center',
      display: 'flex',
  },
  submit:{
    color: 'primary',
    border: '1px solid gray',
    marginRight: "10px"
  }
});

//Profile Page
function Profile(): JSX.Element{
  const navigate = useNavigate();
  const classes = useStyles();
    return(
       <>
         <React.Fragment>
          <Header />
          <div className={classes.root}>
          <Grid container spacing={3}>            
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.submit}>Submit</Button>
              <Button onClick={(()=>{navigate('/')})} className={classes.submit}>Back</Button>
            </Grid>
          </Grid>
          </div>
        </React.Fragment>      
       </>
    )
}

export default Profile;