import React from "react";
import { ErrorIcon } from "./Icons";

const InputError = (props) => {
  return (
    <>
      {props.error && (
        <div className="text-red-500">
          <span className="inline">
            <ErrorIcon /> {props.value}.
          </span>
        </div>
      )}
    </>
  );
};

export default InputError;
