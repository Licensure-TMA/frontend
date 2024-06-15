import { useContract } from 'hooks/useContract';
import { useTonConnect } from 'hooks/useTonConnect';
import { createContext, useState, useEffect, ReactNode } from 'react';
import { License } from 'wrappers/Main';

interface LicensesContextType {
  licenses: License[];
  loading: boolean;
  fetchLicenses: () => void;
}

export const LicensesContext = createContext<LicensesContextType>({
  licenses: [],
  loading: true,
  fetchLicenses: () => {}
});

interface Props {
  children: ReactNode;
}

export const LicensesProvider = ({ children }: Props) => {
  const { connected } = useTonConnect();
  const { mainContract } = useContract();
  const [licenses, setLicenses] = useState<Array<License>>([]);
  const [loading, setLoading] = useState(true);

  const fetchLicenses = async () => {
    setLoading(true);
    try {
      if (connected && mainContract) {
        const { map } = await mainContract.getArrayOfLicenses();
        setLicenses(map.values());
      }
    } catch (error) {
      console.error('[LicenseContext][error]:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLicenses();
    // fetchLicenses(); // Initial fetch
    // const interval = setInterval(fetchLicenses, 10000); // Fetch every 60 seconds
    // return () => clearInterval(interval); // Clean up interval on unmount
  }, [connected, mainContract]);

  return (
    <LicensesContext.Provider value={{ licenses, loading, fetchLicenses }}>
      {children}
    </LicensesContext.Provider>
  );
};
