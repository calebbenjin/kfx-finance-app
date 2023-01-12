import React from 'react';
import { useField } from 'formik';
import FormError from './FormError';
import Input from './common/Input';

type InputProps = {
  ariaLabel: string,
  name: string,
  type: string,
  placeholder: string
}

const FormInput = ({
  ariaLabel,
  name,
  type,
  placeholder
}: InputProps) => {
  const [field, meta] = useField(name);
  return (
    <>
      <Input
        field={field}
        ariaLabel={ariaLabel}
        name={field.name}
        type={type}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <FormError text={meta.error}></FormError>
      ) : null}
    </>
  );
};

export default FormInput;
