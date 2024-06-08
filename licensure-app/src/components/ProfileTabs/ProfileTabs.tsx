import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { CustomTabPanel } from './CustomTabPanel';
import { tabs } from 'consts/consts';

export const ProfileTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map(tab => <Tab label={tab} key={tab} />)}
      </Tabs>

      {tabs.map((tab, index) => <CustomTabPanel value={value} key={tab} index={index} />)}
    </div>
  );
};