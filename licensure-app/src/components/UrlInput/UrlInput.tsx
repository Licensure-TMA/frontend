import { TextField } from '@mui/material';
import { ChangeEventHandler, useState } from 'react';

const urlRegExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/;

interface Props {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UrlInput = ({ label, value, onChange, setIsError }: Props) => {
  const [error, setError] = useState('');

  const validate = (value: string) => {
    if (!urlRegExp.test(value)) return 'Only links can be entered';
    return '';
  };

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    onChange(event);
    const updatedError = validate(event.target.value);
    setError(updatedError);
    if (setIsError) setIsError(Boolean(updatedError));
  };

  return (
    <TextField label={label} required type='url' value={value} onChange={handleChange} error={Boolean(error)} helperText={error} />
  );
};