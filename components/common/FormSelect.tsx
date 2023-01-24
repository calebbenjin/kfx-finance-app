import { useField } from 'formik';
import React from 'react';
import FormError from '../FormError';

type SelectProps = {
  name: string,
  field: any,
  meta: any,
  children: React.ReactNode | React.ReactElement
}

const FormSelect = ({ field, meta, ...props }: SelectProps) => {
  // const [field, meta] = useField(props);
  
  return (
    <div className="mb-4">
      <select
        {...field}
        {...props}
        className={`rounded-none relative block w-full px-3 py-2 sm:pr-4 sm:py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 ${
          meta.touched && meta.error ? 'border-red-500' : ''
        }`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        <FormError text={meta.error}></FormError>
      ) : null}
    </div>
  );
};

export default FormSelect;
