"use client";

import type { LucideIcon } from "lucide-react";
import {
  Clover,
  Feather,
  Gem,
  Sparkles,
  Star,
} from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type PresaleItem = {
  id: string;
  maxSupply: number;
  minted: number;
  priceEth: number;
  accent: string;
  icon: LucideIcon;
  iconBg: string;
  iconTint: string;
};

const presaleItems: PresaleItem[] = [
  {
    id: "001",
    maxSupply: 1000,
    minted: 290,
    priceEth: 0.015,
    accent: "from-emerald-500/35 via-emerald-500/15 to-transparent",
    icon: Sparkles,
    iconBg: "bg-emerald-500/15",
    iconTint: "text-emerald-100",
  },
  {
    id: "002",
    maxSupply: 1000,
    minted: 480,
    priceEth: 0.015,
    accent: "from-sky-400/40 via-emerald-500/10 to-transparent",
    icon: Gem,
    iconBg: "bg-sky-500/15",
    iconTint: "text-sky-100",
  },
  {
    id: "003",
    maxSupply: 1000,
    minted: 160,
    priceEth: 0.015,
    accent: "from-purple-500/30 via-emerald-500/10 to-transparent",
    icon: Star,
    iconBg: "bg-purple-500/15",
    iconTint: "text-purple-100",
  },
  {
    id: "004",
    maxSupply: 1000,
    minted: 320,
    priceEth: 0.015,
    accent: "from-amber-400/35 via-emerald-500/10 to-transparent",
    icon: Feather,
    iconBg: "bg-amber-400/15",
    iconTint: "text-amber-100",
  },
  {
    id: "005",
    maxSupply: 1000,
    minted: 780,
    priceEth: 0.015,
    accent: "from-rose-400/35 via-emerald-500/10 to-transparent",
    icon: Clover,
    iconBg: "bg-rose-400/15",
    iconTint: "text-rose-100",
  },
];

export default function PresalePage() {
  const { isConnected } = useAccount();

  return (
    <div className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden bg-[#05060A] text-white">
      <BackgroundAura />
      <main className="relative mx-auto flex w-full max-w-xl flex-col gap-8 px-6 pb-24 pt-12">
        <header className="flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-emerald-200">
                NFT
              </span>
              <h1 className="text-3xl font-semibold uppercase tracking-[0.2em] text-white">
                Presale
              </h1>
              <p className="max-w-sm text-sm leading-relaxed text-white/65">
                Secure your Hash Butterfly editions before the public drop and unlock early community rewards.
              </p>
            </div>
            <ConnectPill />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/60">
            Limited series minting event
          </p>
        </header>
        <section className="flex flex-col gap-3">
          {presaleItems.map((item) => {
            const mintedPercent = Math.min(100, (item.minted / item.maxSupply) * 100);

            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_40px_120px_-60px_rgba(16,185,129,0.55)]"
              >
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-60`} aria-hidden />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-4">
                      <span className={`relative grid size-12 place-items-center overflow-hidden rounded-2xl border border-emerald-400/30 ${item.iconBg}`}>
                        <item.icon className={`size-6 ${item.iconTint}`} strokeWidth={1.5} />
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-[0.5em] text-emerald-200/70">Hash Butterfly</span>
                        <span className="text-lg font-semibold uppercase tracking-[0.2em] text-white">{item.id}</span>
                      </span>
                    </span>
                    <Button
                      type="button"
                      disabled={!isConnected}
                      className="rounded-full border border-emerald-400/50 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[#041710] shadow-[0_20px_50px_-28px_rgba(74,222,128,0.9)] transition hover:from-emerald-300 hover:via-emerald-400 hover:to-emerald-300 disabled:border-emerald-400/30 disabled:from-emerald-500/30 disabled:via-emerald-500/30 disabled:to-emerald-500/30 disabled:text-emerald-100/70"
                    >
                      Buy
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1">
                      Number {item.maxSupply.toLocaleString("en-US")}
                    </span>
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1">
                      Price {item.priceEth.toFixed(3)} Ξ
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Progress
                      value={mintedPercent}
                      className="h-1.5 bg-white/10 [&>[data-slot=progress-indicator]]:bg-emerald-400"
                    />
                    <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.35em] text-white/50">
                      <span>Minted</span>
                      <span>
                        {item.minted.toLocaleString("en-US")} / {item.maxSupply.toLocaleString("en-US")}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}

function ConnectPill() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        authenticationStatus,
        mounted,
        openAccountModal,
        openChainModal,
        openConnectModal,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              } as const,
            })}
          >
            {!connected ? (
              <button
                type="button"
                onClick={openConnectModal}
                className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-100"
              >
                Connect
              </button>
            ) : chain.unsupported ? (
              <button
                type="button"
                onClick={openChainModal}
                className="rounded-full border border-red-400/60 bg-red-500/10 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-red-200 transition hover:border-red-300 hover:bg-red-500/20"
              >
                Wrong network
              </button>
            ) : (
              <button
                type="button"
                onClick={openAccountModal}
                className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-100"
              >
                {account.displayName}
              </button>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

function BackgroundAura() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-emerald-500/25 blur-[120px]" aria-hidden />
      <div className="absolute right-[-120px] top-10 h-80 w-80 rounded-full bg-emerald-400/15 blur-[140px]" aria-hidden />
      <div className="absolute bottom-[-160px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" aria-hidden />
      <div className="absolute inset-x-10 top-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
    </div>
  );
}
