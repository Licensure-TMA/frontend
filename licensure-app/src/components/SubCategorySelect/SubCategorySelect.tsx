import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';

interface Value {
  value: string;
  label: string;
}

interface Props {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  category: string;
}

export const SubCategorySelect = ({ value, onChange, category }: Props) => {
  const [values, setValues] = useState<Value[]>([]);

  useEffect(() => {
    switch(category) {
    case 'video':
      setValues([
        {value: 'films', label: 'Films'},
        {value: 'series', label: 'Series'},
        {value: 'videoTutorials', label: 'Video tutorials'},
        {value: 'internetVideo', label: 'Internet video'},
      ]);
      break;

    case 'music':
      setValues([
        {value: 'scores', label: 'Scores'},
        {value: 'bits', label: 'Bits'},
        {value: 'sample', label: 'Sample'},
        {value: 'song', label: 'Song'},
        {value: 'musicalComposition', label: 'Musical composition'},
      ]);
      break;

    case 'art':
      setValues([
        {value: 'pictures', label: 'Pictures'},
        {value: 'photos', label: 'Photos'},
        {value: 'sketches', label: 'Sketches'},
      ]);
      break;
    
    default:
    }
  }, [category]);

  return (
    <FormControl fullWidth>
      <InputLabel id="content-subcategory-select-label" required disabled={!category}>Content Subcategory</InputLabel>
      <Select
        labelId="content-subcategory-select-label"
        id="content-subcategory-select"
        value={value}
        label="Content Subcategory"
        onChange={onChange}
        disabled={!category}
      >
        {values.map(({value, label}) => {
          return (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};