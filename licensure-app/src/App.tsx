import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import ConnectionStatus from './components/Check';
import { useTonConnect } from './hooks/useTonConnect';

const App: React.FC = () => {
  const {connected} = useTonConnect()
  
  return (
    <>
      <Header />
      <Main />
      <ConnectionStatus isConnected={connected} />
      <Footer />
    </>
  );
};

export default App;