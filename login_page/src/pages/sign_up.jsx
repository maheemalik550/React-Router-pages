import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


export const Sign_up = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return <>

  <div className='flex justify-center text-center mt-10' >
  
  <div style={{width:"50%"}} className='bg-white pt-11 pb-10'>
  <h1 style={{fontSize:"30px",fontWeight:"bold"}} >Sign up </h1>
  <TextField id="outlined-basic" label="Name" variant="outlined" sx={{backgroundColor:"white",color:"white"}} />
        <br />
        <br />
        <TextField id="outlined-basic" label="UserName" variant="outlined" sx={{backgroundColor:"White",color:"white"}} />
        <br />
        <br />
        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{backgroundColor:"White",color:"white"}} />
        <br />
        <br />
        <FormControl sx={{ m: 1, width: '25ch',backgroundColor:"white" }} variant="outlined">
          <InputLabel sx={{color:"Black"}}   htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput 
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> <br />
        <Button sx={{backgroundColor:"darkblue"}}  variant="contained">Sign up</Button>
  </div>
   </div>
  
    
  </>
}
