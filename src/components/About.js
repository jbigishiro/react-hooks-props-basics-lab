import React from "react";
import Links from "./Links";
import user from "../data/user";

function BioCondition(props) {
  if (!props.bio) {
    return null;
  } else {
    return <p>{props.bio}</p>;
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <BioCondition bio={user.bio} />

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default About;
