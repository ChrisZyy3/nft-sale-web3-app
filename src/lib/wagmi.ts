import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  walletConnectWallet,
  coinbaseWallet,
  injectedWallet,
  rabbyWallet,
  okxWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
import { arbitrum, base, mainnet } from "wagmi/chains";

const fallbackProjectId = "11cf43f9159b72fb3a1ca6a26a599305";

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID?.trim() || fallbackProjectId;

if (/^0+$/.test(walletConnectProjectId)) {
  throw new Error(
    "Invalid NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID. Generate a WalletConnect Cloud project ID and expose it as NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID to enable MetaMask and other EVM wallets.",
  );
}

const chains = [mainnet, base, arbitrum] as const;

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        (walletOptions) =>
          metaMaskWallet({
            ...walletOptions,
          }),
        rabbyWallet,
        okxWallet,
        (walletOptions) => coinbaseWallet(walletOptions),
        injectedWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    appName: "Hash Butterfly",
    projectId: walletConnectProjectId,
  },
);

export const wagmiConfig = createConfig({
  chains,
  connectors,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [arbitrum.id]: http(),
  },
});

