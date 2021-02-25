import React, { useState } from "react";
import { Button, IconButton, Input, TextField, InputLabel, NativeSelect, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Checkbox } from '@material-ui/core';
import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

export default function Form2(){
  const classes = useStyles();
  const [school, setschool] = useState('')
  const [errorschool, setErrorschool] = useState('')

  const [Scores, setscores] = useState('')
  const [errorscores, setErrorscores] = useState('')

  const [course, setcourse] = useState('')
  const [errorcourse, setErrorcourse] = useState('') 

  const [Backlogs, setsBacklogs] = useState('')
  const [errorBacklogs, setErrorBacklogs] = useState('')

  const [contry,setcontry]=useState(false)
  const [errcontry,errsetcontry]=useState('')

  const [Program,setProgram]=useState(false)
  const [errProgram,errsetProgram]=useState('')

  const [Discipline,setDiscipline]=useState(false)
  const [errDiscipline,errsetDiscipline]=useState('')

  const [precollage,setprecollage]=useState(false)
  const [errprecollage,errsetprecollage]=useState('')

  const [Intaken,setIntaken]=useState(false)
  const [errIntaken,errsetIntaken]=useState('') 

  const handleSchoolname = e => {
    setschool(e.target.value)
    if(!/[A-za-z0-9]{2,255}/.test(school))
      setErrorschool("Please enter valid school/College name")
    else
      setErrorschool(" ")
  }

  const handleCourse = e => {
    setcourse(e.target.value)
    if(!/[A-za-z0-9]{2,255}/.test(course))
     setErrorcourse("Please enter valid Course name")
    else
      setErrorcourse(" ")
  }

  const handleScores = e => {
    setscores(e.target.value)
    if(!/[0-9]{1}[.][0-9]{2,5}/.test(Scores))
      setErrorscores("Please enter valid SGPA name")
    else
      setErrorscores(" ")
  }

  const handleBacklogs = e => {
    setsBacklogs(e.target.value)
    if(!/[0-9]{0,2}/.test(Backlogs))
      setErrorBacklogs("Please enter valid Backlogs name")
    else
      setErrorBacklogs(" ")
  }

  const onSubmit =() =>{

    if(Intaken === false){
      errsetIntaken("please select intaken year")
      return false
    }
      
    if(precollage === false){
      errsetprecollage("please select any pre-collage")
      return false
    }

    if(Discipline === false){
      errsetDiscipline("please select any Discipline")
      return false
    }

    if(contry === false){
      errsetcontry("please select any contry")
      return false
    }

    if(Program === false){
      errsetProgram("please select any Program")
      return false
    }

    if(!/[0-9]{1}[.][0-9]{2}/.test(Scores)){
      setErrorscores("Please enter valid SGPA name")
      return false
    }

    if(!/[0-9]{1,2}/.test(Backlogs)){
      setErrorBacklogs("Please enter valid Backlogs name")
      return false
    }

    if(!/[A-za-z0-9]{2,255}/.test(course)){
      setErrorcourse("Please enter valid Course name")
      return false
    }

     if(!/[A-za-z0-9]{2,255}/.test(school)){
      setErrorschool("Please enter valid school/College name")
      return false
    }
    return true
  }
  const show = s =>(
      <div>
      <h3 style={{ color: "#f50057" }}>My Aspirations</h3>
      <h6 style={{ color: "#000" }}>Tell us more about yourself, set your preferences and answer some <br />quetions about study abroad aspirations.</h6>
      <ol>
        <li>Countries you wish to</li>
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('USA')} />}
          label="USA"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('Canada')} />}
          label="Canada"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('United Kingdom')} />}
          label="United Kingdom"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('Australia')} />}
          label="Australia"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('New Zealand')} />}
          label="New Zealand"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('Japan')} />}
          label="Japan"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('Germany')} />}
          label="Germany"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('Poland')} />}
          label="Poland"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('Malaysia')} />}
          label="Malaysia"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setcontry('Singapore')} />}
          label="Singapore"
        />
        <br/>
        {errcontry}
        <li>Discipline you wish to</li>
          university<br />
        <RadioGroup style={{flexDirection: 'row'}} aria-label="university">
          <FormControlLabel value="Under Graduate" control={<Radio className={classes.radiobox} onClick={() => setDiscipline('Under Graduate')} />} label="Under Graduate" />
          <FormControlLabel value="Graduate" control={<Radio className={classes.radiobox} onClick={() => setDiscipline('Graduate')} />} label="Graduate" />
          <FormControlLabel value="Doctral" control={<Radio className={classes.radiobox} onClick={() => setDiscipline('Doctral')} />} label="Doctral" />
        </RadioGroup>
        <br />
        {errDiscipline}
          pre-collage<br />
        <RadioGroup style={{flexDirection: 'row'}} aria-label="precollage">
          <FormControlLabel value="Diploma" control={<Radio className={classes.radiobox} onClick={() => setDiscipline('Diploma')} />} label="Diploma" />
          <FormControlLabel value="Advanced" control={<Radio className={classes.radiobox} onClick={() => setDiscipline('Advanced')} />} label="Advanced" />
        </RadioGroup><br/>
        {errprecollage}
        <li>Program you wish to</li>
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('Engineering')} />}
          label="Engineering"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('Computer')} />}
          label="Computer"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('Cyber')} />}
          label="Cyber"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('data Science')} />}
          label="Data Science"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('Education')} />}
          label="Education"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('Law')} />}
          label="Law"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('Business')} />}
          label="Business"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('Psychology')} />}
          label="Psychology"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('Mechanical')} />}
          label="Mechanical"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setProgram('Medicine')} />}
          label="Medicine"
        /><br/>
        {errProgram}
        <li>Intaken planened?</li>
        <FormControlLabel
          control={<Checkbox onClick={() => setIntaken('2021')} />}
          label="2021"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setIntaken('2022')} />}
          label="2022"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setIntaken('2023')} />}
          label="2023"
        />
        <FormControlLabel
          control={<Checkbox onClick={() => setIntaken('2024')} />}
          label="2024"
        /><br/>
        {errIntaken}
        <li>Your Academia</li>
        <TextField className={classes.inputbox} onChange={handleSchoolname} id="standard-basic" label="School/College" /><br />
        {errorschool ? (<div>{errorschool}</div>) : ''}
        <TextField className={classes.inputbox} onChange={handleCourse} id="standard-basic" label="Course Studied" /><br />
        {errorcourse ? (<div>{errorcourse}</div>) : ''}
        <TextField className={classes.inputbox} onChange={handleScores} id="standard-basic" label="Scores" /><br />
        {errorscores ? (<div>{errorscores}</div>) : ''}
        <TextField className={classes.inputbox} onChange={handleBacklogs} type="number" id="standard-basic" label="Backlogs" /><br />
        {errorBacklogs ? (<div>{errorBacklogs}</div>) : ''}
      </ol>
      <Button variant="contained" color="secondary" component="span" onClick={onSubmit}>
      complete profile
      </Button>
    </div>
    )
    return (
      <div>
       {show()}
      </div>
    )
}