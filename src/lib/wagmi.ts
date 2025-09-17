import { getDefaultConfig } from "@rainbow-me/rainbowkit";
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

// RainbowKit provides a helper to create a Wagmi config with sensible defaults
export const wagmiConfig = getDefaultConfig({
  appName: "NFT Sale DApp",
  projectId: walletConnectProjectId,
  chains,
  ssr: true,
});

