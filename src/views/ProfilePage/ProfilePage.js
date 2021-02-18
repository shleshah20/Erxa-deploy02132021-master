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
    month.push(<option className={classNames(classes.fildinput)} key={index}>{value} </option>)
  }
  for (let i = 1; i <= 31; i++) {
    day.push(<option className={classNames(classes.fildinput)} >{i} </option>)
  }
  for (let i = 1900; i < 2020; i++) {
    year.push(<option className={classNames(classes.fildinput)} >{i} </option>)
  }
  // const imageClasses = classNames(
  //   classes.imgRaised,
  //   classes.imgRoundedCircle,
  //   classes.imgFluid
  // );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const [showInitialDisplay, setShowInitialDisplay] = useState(true)

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
          <TextField id="standard-basic" label="Mobile Number" type="number" validations={["required", "min: 10", "max: 10"]} /><br />
        </div>
        <div style={{ width: '100%' }}>
          <TextField id="standard-select" select label="Day">
            {day}
          </TextField>
          <TextField id="standard-select" select label="Month">
            {month}
          </TextField>
          <TextField id="standard-select" select label="Year">
            {year}
          </TextField>
        </div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel value="female" control={<Radio />} label="Male" />
            <FormControlLabel value="male" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl><br />
        <FormControl component="fieldset">
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup aria-label="status" name="status1">
            <FormControlLabel value="Single" control={<Radio />} label="Single" />
            <FormControlLabel value="Married" control={<Radio />} label="Married" />
          </RadioGroup>
        </FormControl><br />
        <TextField id="standard-basic" label="Nick Name" /><br />
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
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file"><br />
          <img src="" alt="" />
          <Button variant="contained" color="secondary" component="span">
            Upload
        </Button>
        </label><br />
        <Button type="submit" variant="contained" color="secondary" component="span">
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
          <li >Countries you wish to</li>
          <FormControlLabel
            control={<Checkbox />}
            label="USA"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Canada"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="United Kingdom"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Australia"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="New Zealand"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Japan"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Germany"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Poland"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Malaysia"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Singapore"
          />
          <li>Discipline you wish to</li>
            university<br />
          <RadioGroup aria-label="Discipline">
            <FormControlLabel value="Under Graduate" control={<Radio />} label="Under Graduate" />
            <FormControlLabel value="Graduate" control={<Radio />} label="Graduate" />
            <FormControlLabel value="Doctral" control={<Radio />} label="Doctral" />
          </RadioGroup>
          <br />
            pre-collage<br />
          <RadioGroup aria-label="Discipline">
            <FormControlLabel value="Diploma" control={<Radio />} label="Diploma" />
            <FormControlLabel value="Advanced" control={<Radio />} label="Advanced" />
          </RadioGroup>
          <li>Program you wish to</li>
          <FormControlLabel
            control={<Checkbox />}
            label="Engineering"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Computer"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Cyber"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Data Science"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Education"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Law"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Business"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Psychology"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Mechanical"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Medicine"
          />
          <li>Intaken planened?</li>
          <FormControlLabel
            control={<Checkbox />}
            label="2021"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="2022"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="2023"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="2024"
          />
          <li>Your Academia</li>
          <TextField id="standard-basic" label="School/College" /><br />
          <TextField id="standard-basic" label="Course Studied" /><br />
          <TextField id="standard-basic" label="Scores" /><br />
          <TextField id="standard-basic" label="Backlogs" /><br />
        </ol>
        <Button variant="contained" color="secondary" component="span">complete profile</Button>
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
