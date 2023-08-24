import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import Swal from 'sweetalert2'

const PasswordGenerator = () => {
    const [fivePasswords, setFivePasswords] = useState([]);
  const [password, setPassword] = useState("");
  const [lastPasswords, setLastPasswords] = useState([]);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);

  useEffect(() => {
    if(!localStorage.hasOwnProperty("lastPasswords")){
        localStorage.setItem("lastPasswords", JSON.stringify(lastPasswords));
    }else {
        setLastPasswords(JSON.parse(localStorage.getItem("lastPasswords")))
    }
  }, []);

  useEffect(() => {
   
    setFivePasswords(JSON.parse(localStorage.getItem("lastPasswords")))
    
  }, [lastPasswords]);

  const generatePassword = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+{}[]:;<>,.?/~";
   
    let allChars = characters;
    let newPassword = "";

    // Check user preferences
    if (includeNumbers) allChars += numbers;
    if (includeSpecialChars) allChars += specialChars;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }

    setPassword(newPassword);
    setLastPasswords((preState) => {
      return [newPassword, ...preState.slice(0, 4)];
    });
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New Password has been Generated',
        showConfirmButton: false,
        timer: 1500
      })

    let listOfPass = JSON.parse(localStorage.getItem("lastPasswords"))
    
    listOfPass=[newPassword,...lastPasswords.slice(0, 4)]
      localStorage.setItem("lastPasswords", JSON.stringify(listOfPass));
    
  };

  const copyToClipboard = (index) => {
    navigator.clipboard.writeText(lastPasswords?.[index]);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'copied Successfully',
        showConfirmButton: false,
        timer: 1500,
        width:"300px"
      })
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    // Allow only numeric characters
    if (/^[0-9]*$/.test(newValue)) {
      setPasswordLength(newValue);
    }
  };

  return (
    <div className="password-generator" style={{marginTop:"10px",overflow:"scroll",height:"90vh"}} >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} rowSpacing={2}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4">Choose Password Combination</Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <FormControlLabel
              disabled
              control={<Checkbox defaultChecked />}
              label="Alphabets"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  onClick={(e) => {
                    setIncludeNumbers(e.target.checked);
                  }}
                />
              }
              label="Numbers"
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  onClick={(e) => {
                    setIncludeSpecialChars(e.target.checked);
                  }}
                />
              }
              label="Special Characters"
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              id="outlined-basic"
              label="Password Length"
              variant="outlined"
              defaultValue={passwordLength}
              onChange={handleInputChange}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </Grid>

          <Grid item xs={6} md={3}>
            <Button
              variant="contained"
              onClick={() => {
                generatePassword();
              }}
            >
              Generate Password
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="30px"
       
      >
        <Card sx={{ width: "30%" }}  boxShadow="  rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px">
          <CardContent>
          <Typography variant="h5">Last Five Passwords</Typography>
         
              { fivePasswords.map((pw, index) => (
                 <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="30px"
        key={index}
        padding={"5px 15px"}
     
        // border="1px solid grey"
        boxShadow=" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      >
         <Typography  variant="h6">{index+1} </Typography> 
                <Typography  variant="h6">{pw} </Typography> 
                <Tooltip title="Copy to clipboard" placement="top-start"><ContentCopyIcon font="medium"onClick={()=>{copyToClipboard(index)}}/></Tooltip>
            </Box>
              ))}
          
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default PasswordGenerator;
