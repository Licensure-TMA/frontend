import { TonConnectButton } from '@tonconnect/ui-react';
import { styled } from 'styled-components';

export const TonConnectButtonCustom = styled(TonConnectButton)`
  button {
    background: white;

    div {
      color: #1876d2;
    }

    path {
      fill: #1876d2;
    }
  }
`;