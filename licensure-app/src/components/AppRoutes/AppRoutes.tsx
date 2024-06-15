import { Routes, Route } from 'react-router-dom';

import { useTonConnect } from 'hooks/useTonConnect';

import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import { Profile } from 'pages/Profile/Profile';
import { Market } from 'pages/Market/Market';
import { LicensePage } from 'pages/License/License';
import { CreateLicense } from 'pages/CreateLicense/CreateLicense';

export const AppRoutes = () => {
  const { connected } = useTonConnect();

  if (!connected) return (
    <Routes>
      <Route path='*' element={<WelcomePage />}/>
    </Routes>
  );

  return (
    <Routes>
      <Route path='/create-license' element={<CreateLicense />}></Route>
      <Route path='/license' element={<LicensePage />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='*' element={<Market />}></Route>
    </Routes>
  );
};