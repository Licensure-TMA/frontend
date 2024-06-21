import { ActiveTab } from './ActiveTab';
import { PurchaseTab } from './PurchaseTab';
import { SaleTab } from './SaleTab';

const mapValueToTab = {
  0: <ActiveTab />,
  1: <PurchaseTab />,
  2: <SaleTab />
};

interface TabPanelProps {
  index: number;
  value: number;
}

export const CustomTabPanel = (props: TabPanelProps) => {
  const { value, index } = props;

  // @ts-expect-error
  const tab = mapValueToTab[value];

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ marginTop: '32px', height: '90%' }}
    >
      {tab}
    </div>
  );
};