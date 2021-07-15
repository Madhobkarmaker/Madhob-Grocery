import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const { onCanceled, onClicked, icon, title } = props;
  return (
    <div className={classes.customBtn}>
      <button
        onClick={onCanceled ? onCanceled : onClicked}
        className={"button-default button-default:hover m-5"}
      >
        <i>{icon ? icon : ""}</i>
        <span className="fw-500 fs-16 ps-2"> {title} </span>
      </button>
    </div>
  );
};

export default Button;
