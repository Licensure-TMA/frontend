import { TextField } from '@mui/material';
import { ChangeEventHandler, useState } from 'react';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TitleInput = ({ value, onChange, setIsError }: Props) => {
  const [error, setError] = useState('');

  const validate = (value: string) => {
    if (value.length < 10 || value.length > 100) return 'Title must be more than 10 and less than 100 characters';
    return '';
  };

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    onChange(event);
    const updatedError = validate(event.target.value);
    setError(updatedError);
    if (setIsError) setIsError(Boolean(updatedError));
  };
  return (
    <TextField label="Title" required value={value} onChange={handleChange} error={Boolean(error)} helperText={error} />
  );
};