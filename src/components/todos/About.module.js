import React from "react";

import classes from "./About.module.css";

import Profile from "../icons/Profile";
import Tree from "../icons/Tree";
import HideBtn from "../UI/HideBtn";

export default function About(props) {

  function onHideSidebarHandler() {
    props.onHideSidebar('about')
  }

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.head}>
        <HideBtn onClick={onHideSidebarHandler} rotate={props.rotate}></HideBtn>
        <Tree/>
        <h2>About this app</h2>
      </div>
      <Profile />

      <p className={classes.text}>
        This is a To-Do Application built with React for the purpose of
        displaying my front end knowledge.
      </p>
      <div className={classes.github}><a href="https://github.com/stefanhrnjak">github.com/stefanhrnjak</a></div>
      
    </div>
  );
}
