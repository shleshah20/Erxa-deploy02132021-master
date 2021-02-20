import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton, Input, TextField, InputLabel, NativeSelect, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Checkbox } from '@material-ui/core';
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

// import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const day = [];
  const month = [];
  const year = [];

  for (const [index, value] of months.entries()) {
    month.push(<option key={index}>{value} </option>)
  }
  for (let i = 1; i <= 31; i++) {
    day.push(<option >{i} </option>)
  }
  for (let i = 1900; i < 2020; i++) {
    year.push(<option >{i} </option>)
  }
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const [showInitialDisplay, setShowInitialDisplay] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState('')
  const [errorPhone, setErrorPhone] = useState('')

  const handlePhoneNumber = e => {
    setPhoneNumber(e.target.value)
    if(!/[0-9]{9}/.test(phoneNumber))
      setErrorPhone("Please enter a valid Phone number!")
    else
      setErrorPhone(" ")
  }

  const [name, setname] = useState('')
  const [errorName, setErrorName] = useState('')

  const handleName = e => {
    setname(e.target.value)
    if(!/[A-za-z]{255}/.test(name))
      setErrorName("Please enter valid nick name")
    else
      setErrorName(" ")
  }

  const [gendercheck,genderuncheck]=useState(false)
  const [errgendercheck,errgenderuncheck]=useState('')

  const [marriagecheck,marriaguncheck]=useState(false)
  const [errmarriagecheck,errmarriaguncheck]=useState('')

  const onContinue = () => {
    if(!/[0-9]{9}/.test(phoneNumber))
      setErrorPhone("Please enter a valid Phone number!")

    if(!/[A-za-z]{255}/.test(name))
      setErrorName("Please enter valid nick name")

    if(gendercheck === false)
      errgenderuncheck("Please select a gender!")

    if(marriagecheck === false)
      errmarriaguncheck("please select a status")
  }

  const [school, setschool] = useState('')
  const [errorschool, setErrorschool] = useState('')

  const handleSchoolname = e => {
    setname(e.target.value)
    if(!/[A-za-z0-9]{255}/.test(school))
      setErrorschool("Please enter valid school/College name")
    else
      setErrorschool(" ")
  }

  const [course, setcourse] = useState('')
  const [errorcourse, setErrorcourse] = useState('')

  const handleCourse = e => {
    setname(e.target.value)
    if(!/[A-za-z0-9]{255}/.test(course))
     setErrorcourse("Please enter valid Course name")
    else
      setErrorcourse(" ")
  }

  const [Scores, setscores] = useState('')
  const [errorscores, setErrorscores] = useState('')

  const handleScores = e => {
    setname(e.target.value)
    if(!/[0-9]{1}[.][0-9]{2}/.test(Scores))
      setErrorscores("Please enter valid SGPA name")
    else
      setErrorscores(" ")
  }

  const [Backlogs, setsBacklogs] = useState('')
  const [errorBacklogs, setErrorBacklogs] = useState('')

  const handleBacklogs = e => {
    setname(e.target.value)
    if(!/[0-9]{1,2}/.test(Backlogs))
      setErrorBacklogs("Please enter valid Backlogs name")
    else
      setErrorBacklogs(" ")
  }

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

  const onSubmit =() =>{

    if(Intaken === false)
      errsetIntaken("please select intaken year")

    if(precollage === false)
      errsetprecollage("please select any pre-collage")

    if(Discipline === false)
      errsetDiscipline("please select any Discipline")

    if(contry === false)
      errsetcontry("please select any contry")

    if(Program === false)
      errsetProgram("please select any Program")

    if(!/[0-9]{1}[.][0-9]{2}/.test(Scores))
      setErrorscores("Please enter valid SGPA name")

    if(!/[0-9]{1,2}/.test(Backlogs))
      setErrorBacklogs("Please enter valid Backlogs name")

    if(!/[A-za-z0-9]{255}/.test(course))
      setErrorcourse("Please enter valid Course name")

     if(!/[A-za-z0-9]{255}/.test(school))
      setErrorschool("Please enter valid school/College name")
  }

  const initialDisplay = () => {
    return (
      <form onSubmit={() => setShowInitialDisplay(false)}>
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
          {errorPhone ? (<div>{errorPhone}</div>) : ''}
        </div>
        <div style={{ width: '100%' }}>
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
          </TextField>
        </div>
        <FormControl component="fieldset">
          <FormLabel component="gender">Gender</FormLabel>
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
         {errorName ? (<div>{errorName}</div>) : ''}
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
        </Button>
        </label>
        <label htmlFor="icon-button-file"><br />
          <img src="" alt="img will display here" />
          <Button variant="contained" color="secondary" component="span">
            Upload
        </Button>
        </label><br />
        <Button type="submit" variant="contained" color="secondary" component="span" onClick={onContinue}>
          continue
      </Button>
      </form>
    )
  }
  const finalDisplay = () => {
    return (
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
  }
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "primary"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/landing-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                {
                  showInitialDisplay ? initialDisplay() : finalDisplay()
                }
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
