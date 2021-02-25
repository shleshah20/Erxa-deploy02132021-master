import React, { useState, useEffect } from "react";
import { Button, IconButton, Input, TextField, InputLabel, NativeSelect, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Checkbox } from '@material-ui/core';
import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { makeStyles } from "@material-ui/core/styles";
import  Form2 from "./form2.js";

const useStyles = makeStyles(styles);

const day = [];
const month = [];
const year = [];

export default function Form1(){
  const classes = useStyles();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [phoneNumber, setPhoneNumber] = useState('')
  const [errorPhone, setErrorPhone] = useState('')

  const [name, setname] = useState('')
  const [errorName, setErrorName] = useState('')

  const [gendercheck,genderuncheck]=useState(false)
  const [errgendercheck,errgenderuncheck]=useState('')

  const [marriagecheck,marriaguncheck]=useState(false)
  const [errmarriagecheck,errmarriaguncheck]=useState('')

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    for (const [index, value] of months.entries()) {
      month.push(<option key={index}>{value} </option>)
    }
    for (let i = 1; i <= 31; i++) {
      day.push(<option >{i} </option>)
    }
    for (let i = 1900; i < 2020; i++) {
      year.push(<option >{i} </option>)
    }
  },[])

  const handlePhoneNumber = e => {
    setPhoneNumber(e.target.value)
    if(!/[0-9]{9}/.test(phoneNumber))
      setErrorPhone("Please enter a valid Phone number!")
    else
      setErrorPhone(" ")
  }

  const handleName = e => {
    setname(e.target.value)
    if(!/[A-za-z]{2,255}/.test(name))
      setErrorName("Please enter valid nick name")
    else
      setErrorName(" ")
  }

  const onContinue = () => {
    if(!/[0-9]{9}/.test(phoneNumber)){
      setErrorPhone("Please enter a valid Phone number!")
      return false
    }

    if(!/[A-za-z]{2,255}/.test(name)){
      setErrorName("Please enter valid nick name")
      return false
    }

    if(gendercheck === false){
      errgenderuncheck("Please select a gender!")
      return false
    }

    if(marriagecheck === false){
      errmarriaguncheck("please select a status")
      return false
    }

    setRedirect('true')
  }
  return(
  <div>
    <form>
        <div>
          <h3 style={{ color: "#f50057" }}>Personal Profile</h3>
          <h6 style={{ color: "#000" }}>Tell us more about yourself, set your preferences and answer some <br />quetions about study abroad aspirations.</h6>
          <TextField
            select
            label="ISD"
            SelectProps={{
              native: true,
            }}
          >
            <option value="+91">India(+91)</option>
            <option value="+968">Oman(+968)</option>
          </TextField>
          <TextField className={classes.inputbox} onChange={handlePhoneNumber} id="standard-basic" label="Mobile Number" type="number" /><br />
          <br/>{errorPhone ? (<div>{errorPhone}</div>) : ''}
        </div>
      <div style={{ width: '550',margin:'5 auto' }}>
        <TextField
          select
          label="day"
          SelectProps={{
            native: true,
          }}
        >
          {day}
        </TextField>
        <TextField
          select
          label="month"
          SelectProps={{
            native: true,
          }}
        >
          {month}
        </TextField>
        <TextField
          select
          label="year"
          SelectProps={{
            native: true,
          }}
        >
          {year}
        </TextField><br/>
      </div><br/>
      <FormControl component="fieldset" style={{marginTop:'2'}}>
        <FormLabel component="legend" style={{marginTop:'2'}}>Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" style={{flexDirection: 'row'}}>
          <FormControlLabel value="female" control={<Radio onClick={() => genderuncheck('male')} />} label="Male" />
          <FormControlLabel className={classes.radiobox} value="male" control={<Radio onClick={() => genderuncheck('female')} />} label="Female" />
        </RadioGroup>
      </FormControl><br />
      {errgendercheck}<br/>
      <FormControl component="fieldset">
        <FormLabel component="legend">Status</FormLabel>
        <RadioGroup aria-label="status" name="status1" style={{flexDirection: 'row'}}>
          <FormControlLabel value="Single" control={<Radio className={classes.radiobox} onClick={() => marriaguncheck('single')} />} label="Single" />
          <FormControlLabel value="Married" control={<Radio className={classes.radiobox} onClick={() => marriaguncheck('Married')} />} label="Married" />
        </RadioGroup>
      </FormControl><br />
      {errmarriagecheck}<br/>
      <TextField className={classes.inputbox} onChange={handleName} id="standard-basic" label="Nick Name" /><br />
       {errorName ? (<div>{errorName}</div>) : ''}<br/>
      <input
         accept="image/*"
         className={classes.input}
         id="contained-button-file"
         multiple
         type="file"
       />     
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="secondary" component="span">
          Brows
      </Button><br/>
      </label>
      <label htmlFor="icon-button-file"><br />
        <img src="" alt="img will display here" />
        <br />
        <br />
        <br />
        <Button variant="contained" color="secondary" component="span">
          Upload
      </Button><br/>
      </label>
      <br/><Button type="submit" variant="contained" color="secondary" component="span" onClick={onContinue}>
        continue
      </Button><br/>
    </form>
    {
      redirect ? <Form2 /> : ""
    }
  </div>
  )
}