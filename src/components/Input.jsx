import React, { useEffect, useRef } from "react";
import InputError from "./InputError";

const Input = (props) => {
  let defaultStyle = "focus:border-violet-700 focus:ring-violet-950";
  let errorStyle = "focus:border-red-700 focus:ring-red-950";
  const inputRef = useRef(null);
  
  useEffect(() => {
    // Focus the input element if there's an error
    if (props.name && props.error) {
      inputRef.current?.focus();
    }
  }, [props.error, props.name]);

  return (
    <div className="mt-3 inline-flex flex-col gap-2">
      <input
        type={props.type}
        ref={inputRef}
        className={`rounded-lg outline-none border border-gray-200 
        focus-within:outline-none focus:ring-2 focus:ring-opacity-20 focus:shadow-md
        w-full p-3 ${props.error ? errorStyle : defaultStyle}`}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        autoFocus={props.autofocus}
        name={props.name}
      />

      {props.error && <InputError error={true} value={props.error} />}
    </div>
  );
};

export default Input;
