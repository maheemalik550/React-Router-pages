import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';


export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
return <>

<div className='flex justify-center text-center mt-10' >

<div style={{width:"50%"}} className='bg-white pt-11 pb-10'>
<h1 style={{fontSize:"30px",fontWeight:"bold"}} >Login </h1>
<TextField id="outlined-basic" label="Email" variant="outlined" sx={{backgroundColor:"#FAF9F6	",color:"white"}} />
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
      <Button sx={{backgroundColor:"darkblue"}}  variant="contained">login</Button>
</div>
 </div>

  
</>
}
    