import { Stack } from '@mui/material';
import { CreateLicenseButton } from 'components/CreateLicenseButton/CreateLicenseButton';
import { Header } from 'components/Header/Header';
import { ProfileTabs } from 'components/ProfileTabs/ProfileTabs';

export const Profile = () => {
  return (
    <>
      <Header />
      <Stack spacing={4} padding={4}>
        <CreateLicenseButton />
        <ProfileTabs />
      </Stack>
    </>
  );
};