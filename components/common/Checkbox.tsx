import React from 'react';


type InputProps = {
  ariaLabel?: string,
  name: string,
  type: string,
  placeholder: string,
  field?: any
}

const Checkbox = ({ ariaLabel, name, type, placeholder, field }: InputProps) => (
  <input
    {...field}
    aria-label={ariaLabel}
    name={name}
    type={type}
    placeholder={placeholder}
  />
);

export default Checkbox;
