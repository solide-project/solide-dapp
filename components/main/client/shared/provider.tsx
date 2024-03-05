'use client';

import * as React from 'react';
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
} from "@thirdweb-dev/react";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="ab14b40d36ff74d335ca18558a3859b2"
      // locale={en()}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet(),
        walletConnect(),
        localWallet(),
      ]}
    >
      {children}
    </ThirdwebProvider>
  );
}
