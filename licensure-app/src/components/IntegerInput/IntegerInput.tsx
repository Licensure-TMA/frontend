import { TextField } from '@mui/material';
import { ChangeEventHandler, useState } from 'react';

interface Props {
  label: string;
  value: number | string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IntegerInput = ({ label, value, onChange, setIsError }: Props) => {
  const [error, setError] = useState('');

  const validate = (value: number) => {
    if (Number.isNaN(value) || !Number.isInteger(value)) return 'Only integers can be entered';
    if (value <= 0) return 'The entered value must be greater than 0';
    return '';
  };

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    onChange(event);
    const numberValue = parseFloat(event.target.value);
    const updatedError = validate(numberValue);
    setError(updatedError);
    if (setIsError) setIsError(Boolean(updatedError));
  };

  return (
    <TextField label={label} type='number' value={value} onChange={handleChange} required error={Boolean(error)} helperText={error} />
  );
};