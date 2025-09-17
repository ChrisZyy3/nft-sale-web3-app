import type { SVGProps } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const featureCards = [
  {
    slug: "nft",
    badge: "NFT",
    title: "Hash butterfly digital art piece",
    description:
      "Collect generative wings minted on-chain and unlock privileges across the Hash Butterfly metaverse.",
    href: "/nft/presale",
    cta: "Go to presale",
    gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
  },
  {
    slug: "mall",
    badge: "Mall",
    title: "Hash Butterfly is superlative",
    description:
      "Experience curated drops, IRL collaborations and lifestyle products inspired by the Hash Butterfly IP.",
    href: "/mall",
    cta: "Enter mall",
    gradient: "from-emerald-500/15 via-emerald-500/5 to-purple-500/15",
  },
];

const tokenStats = [
  { label: "Token name", value: "BUTTERFLY" },
  { label: "Public chain", value: "Ethereum chain" },
  { label: "Issuance quantity", value: "8.00 trillion" },
];

const asciiRows = Array.from({ length: 10 }, () => "11111111111111111111111111111111111111");

export default function Home() {
  return (
    <div className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden bg-[#05060A] text-white">
      <BackgroundAura />
      <main className="relative mx-auto flex w-full max-w-xl flex-col gap-10 px-6 pb-24 pt-12">
        <Hero />
        <section className="space-y-4">
          {featureCards.map((feature) => (
            <article
              key={feature.slug}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_-60px_rgba(16,185,129,0.45)]"
            >
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${feature.gradient} opacity-60`}
                aria-hidden
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-emerald-200/80">
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-semibold">
                    {feature.badge}
                  </span>
                  <span className="font-semibold tracking-[0.5em] text-emerald-200/70">Hash Butterfly</span>
                </div>
                <h2 className="text-xl font-semibold uppercase tracking-[0.15em] text-white sm:text-2xl">
                  {feature.title}
                </h2>
                <p className="text-sm leading-relaxed text-white/70">{feature.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="group mt-2 inline-flex w-max items-center gap-3 rounded-full border-emerald-400/60 bg-emerald-500/10 px-6 py-5 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-100"
                >
                  <Link href={feature.href}>
                    {feature.cta}
                    <ArrowRight className="size-4 -translate-y-px transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <Sparkles className="absolute -right-6 -top-6 size-20 text-emerald-400/40" aria-hidden />
            </article>
          ))}
        </section>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" aria-hidden />
          <div className="space-y-4">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-emerald-200/80">
              <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-semibold">
                Ecosystem
              </span>
              <span className="tracking-[0.5em] text-emerald-200/70">Hash Butterfly</span>
            </span>
            <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white sm:text-2xl">
              Hash Butterfly ecosystem
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              A connected universe where NFTs, commerce and the community intersect. Explore exclusive launches, immersive
              storytelling and the loyalty economy surrounding the Hash Butterfly IP.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {tokenStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-left shadow-[0_20px_60px_-40px_rgba(74,222,128,0.6)]"
                >
                  <div className="text-[0.6rem] uppercase tracking-[0.4em] text-white/40">{stat.label}</div>
                  <div className="mt-2 text-lg font-semibold uppercase tracking-[0.1em] text-emerald-200">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.35),_transparent_60%)] opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-10 flex select-none flex-col items-center text-[0.65rem] font-mono uppercase tracking-[0.75em] text-emerald-500/15">
        {asciiRows.map((row, index) => (
          <span key={`${row}-${index}`} className="leading-4">
            {row}
          </span>
        ))}
      </div>
      <div className="relative mx-auto flex max-w-sm flex-col items-center gap-6">
        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.6em] text-emerald-200">
          Hash Butterfly
        </div>
        <ButterflyMark className="size-28 text-emerald-300 drop-shadow-[0_0_32px_rgba(74,222,128,0.45)]" />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.2em] text-white sm:text-4xl">
            Hash butterfly ecosystem
          </h1>
          <p className="text-sm leading-relaxed text-white/70">
            Metaverse IP for digital art, curated commerce and community rewards. Built mobile-first for the next generation of
            Web3 explorers.
          </p>
        </div>
      </div>
    </section>
  );
}

function BackgroundAura() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-emerald-500/25 blur-[120px]" aria-hidden />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-emerald-400/20 blur-[120px]" aria-hidden />
      <div className="absolute -bottom-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" aria-hidden />
      <div className="absolute inset-x-12 top-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
    </div>
  );
}

function ButterflyMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M32 36c6.5-9.5 14-14.5 19-16 2.5 5.5-1.5 12.5-6 15.5 5 2 9.5 7.5 8 11.5-4.5-.2-9.5-3.7-12.5-7.2-1.4 3.4-2.9 8.4-4.5 12.4-1.5-4-3-9-4-12.4-3 3.5-8 7-12.5 7.2-1.5-4 3-9.5 8-11.5-4.5-3-8.5-10-6-15.5 5 1.5 12.5 6.5 19 16Z"
        fill="currentColor"
        fillOpacity={0.12}
      />
      <path
        d="M32 34c6-8 12-12.5 16.5-13.5 2 4.5-1.2 10-5 12 4.3 1.8 8.2 6.6 7 9.5-3.8-.3-8.2-3.5-11-6.5-1.2 3.1-2.5 7-3.6 10.4-1.2-3.4-2.4-7.3-3.6-10.4-2.8 3-7.2 6.2-11 6.5-1.2-2.9 2.7-7.7 7-9.5-3.8-2-7-7.5-5-12 4.5 1 10.5 5.5 16.5 13.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={26} cy={23} r={2.8} fill="currentColor" />
      <circle cx={38} cy={23} r={2.8} fill="currentColor" />
      <path
        d="M30.5 18.5c1.1-1 2.9-1 4 0"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}
