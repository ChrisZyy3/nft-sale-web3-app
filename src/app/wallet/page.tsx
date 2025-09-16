"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  ArrowRight,
  Boxes,
  ReceiptText,
  Sparkles,
  Users2,
  Wallet2,
} from "lucide-react";

const walletItems = [
  {
    title: "My balance",
    description: "Wallet overview and recent activity",
    icon: Wallet2,
    accent: "from-emerald-500/40 via-emerald-500/20 to-transparent",
  },
  {
    title: "My assets",
    description: "Tokens and collectibles in your vault",
    icon: Boxes,
    accent: "from-sky-500/25 via-emerald-500/20 to-transparent",
  },
  {
    title: "My friend",
    description: "Invite friends and share ecosystem rewards",
    icon: Users2,
    accent: "from-purple-500/25 via-emerald-500/15 to-transparent",
  },
  {
    title: "My NFT",
    description: "Manage your Hash Butterfly editions",
    icon: Sparkles,
    accent: "from-emerald-500/30 via-lime-400/30 to-transparent",
  },
  {
    title: "My order",
    description: "Track purchases across the metaverse mall",
    icon: ReceiptText,
    accent: "from-amber-400/30 via-emerald-500/15 to-transparent",
  },
];

export default function WalletPage() {
  return (
    <div className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden bg-[#05060A] text-white">
      <BackgroundAura />
      <div className="relative mx-auto flex w-full max-w-xl flex-col gap-8 px-6 pb-24 pt-12">
        <header className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-emerald-200">
                Wallet
              </span>
              <h1 className="text-3xl font-semibold uppercase tracking-[0.2em] text-white">
                Hash Butterfly
              </h1>
              <p className="text-sm leading-relaxed text-white/65">
                Welcome to the Hash Butterfly Metaverse Ecology
              </p>
            </div>
            <WalletConnectButton />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/60">
            Manage digital identity and experiences
          </p>
        </header>
        <section className="flex flex-col gap-3">
          {walletItems.map((item) => (
            <button
              key={item.title}
              type="button"
              className="group relative flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-left shadow-[0_30px_90px_-60px_rgba(16,185,129,0.65)] transition hover:border-emerald-400/40 hover:bg-emerald-500/10"
            >
              <span className="flex items-center gap-4">
                <span className="relative grid size-12 place-items-center overflow-hidden rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-100">
                  <span className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-60`} aria-hidden />
                  <item.icon className="relative size-5" strokeWidth={1.5} />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-base font-semibold uppercase tracking-[0.12em] text-white">
                    {item.title}
                  </span>
                  <span className="text-xs text-white/60">{item.description}</span>
                </span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-emerald-200 transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </section>
      </div>
    </div>
  );
}

function WalletConnectButton() {
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
