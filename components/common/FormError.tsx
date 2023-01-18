import React from 'react';

type ErrorProps = {
  text: string
}

const FormError = ({ text }: ErrorProps) => (
  <span className="text-red-500 text-sm">{text}</span>
);

export default FormError;
