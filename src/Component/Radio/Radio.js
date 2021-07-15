import React from "react";
import classes from "./Radio.module.css";

const Radio = (props) => {
  const { onChecked, value, type, label } = props;
  return (
    <div className="m-5">
      {props.label ? (
        <label className={classes.container}>
          <span className="fs-16 fw-400 ps-3">{label}</span>
          <input
            className={classes.regularCheckbox}
            onClick={onChecked}
            value={value}
            type={type}
          />
          <span className={classes.checkmark}></span>
        </label>
      ) : (
        ""
      )}
    </div>
  );
};

export default Radio;
