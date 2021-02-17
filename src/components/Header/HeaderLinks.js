/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import profileImage from "assets/img/faces/avatar.jpg";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Study "
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
         
          dropdownList={[
            <Link to='/modules' className={classes.dropdownLink}>
              DropedownItem1
            </Link>,
            <a
              href=""
              target="_blank"
              className={classes.dropdownLink}
            >
              DropedownItem2
            </a>
          ]}
        />
      
      </ListItem>
      <ListItem className={classes.listItem}>
      <CustomDropdown
          noLiPadding
          buttonText="How it Works "
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
         
          dropdownList={[
            <Link to="/components" className={classes.dropdownLink}>
              DropedownItem1
            </Link>,
            <a
              href=""
              target="_blank"
              className={classes.dropdownLink}
            >
              DropedownItem1
            </a>
          ]}
        />
          
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Resources "
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
         
          dropdownList={[
            <Link to="/components" className={classes.dropdownLink}>
              DropedownItem1
            </Link>,
            <a
              href=""
              target="_blank"
              className={classes.dropdownLink}
            >
              DropedownItem2
            </a>
          ]}
        />
        </ListItem>
         <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Discover "
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
         
          dropdownList={[
            <Link to="/components" className={classes.dropdownLink}>
              DropedownItem1
            </Link>,
            <a
              href=""
              target="_blank"
              className={classes.dropdownLink}
            >
              DropedownItem2
            </a>
          ]}
        />
        </ListItem>
        <ListItem className={classes.listItem}>
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="primary"
                    dropdownHeader="My Account"
                    buttonText={
                      <img
                        src={profileImage}
                        className={classes.img}
                        alt="profile"
                        width="40x"
                      />
                    }
                    buttonProps={{
                      className:
                        classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent"
                    }}
                    dropdownList={[
                      "Me",
                      "Settings and other stuff",
                      "Sign out"
                    ]}
                  />
                </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href=""
          color="warning"
          round
        >
          Free Lesson
        </Button>
      </ListItem>
      
    </List>
  );
}
