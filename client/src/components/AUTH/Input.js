import React,{useState} from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const handleShowPassword=()=>{
  alert('Shows password on Click of the icon');
}

const Input = (props) => {
  // console.log('Half property value: '+props.half);
  return (
      <Grid item xs={12} sm={props.half ? 6 : 12} >
        <TextField 
        name={props.name}
        onChange={props.handleChange}
        variant='outlined'
        required
        fullWidth
        label={props.label}
        autoFocus={props.autoFocus}
        type={props.type}
        InputProps={props.name === 'password' ? {
          endAdornment:(
            <InputAdornment position='end'>
              <IconButton onClick={props.handleShowPassword}>
                {props.type=== 'password'? <Visibility/> : <VisibilityOff/>}
              </IconButton>
            </InputAdornment>
          )
        }:null}
        />
      </Grid>
  )
}

export default Input;
