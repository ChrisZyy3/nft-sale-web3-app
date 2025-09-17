import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, base, bsc, mainnet, optimism, polygon, sepolia } from "wagmi/chains";

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

if (!walletConnectProjectId || /^0+$/.test(walletConnectProjectId)) {
  throw new Error(
    "Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID. Generate a WalletConnect Cloud project ID and expose it as NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID to enable MetaMask and other EVM wallets.",
  );
}

const chains = [mainnet, sepolia, polygon, arbitrum, optimism, base, bsc] as const;

// RainbowKit provides a helper to create a Wagmi config with sensible defaults
export const wagmiConfig = getDefaultConfig({
  appName: "NFT Sale DApp",
  projectId: walletConnectProjectId,
  chains,
  ssr: true,
});

