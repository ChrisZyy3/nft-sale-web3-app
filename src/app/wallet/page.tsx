"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletPage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium">Wallet</h1>
        <ConnectButton />
      </div>
      <Card className="bg-card/80 border-white/10">
        <CardContent className="p-0">
          <div className="divide-y divide-white/10">
            <Row title="My balance" hint="View on-chain balance" />
            <Row title="My assets" hint="NFTs and tokens" />
            <Row title="My friend" hint="Referrals" />
            <Row title="My NFT" hint="Owned collectibles" />
            <Row title="My order" hint="Orders & receipts" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Row({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="px-4 py-4 flex items-center justify-between">
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-foreground/60">{hint}</div>
      </div>
      <span className="text-[--accent-11]">→</span>
    </div>
  );
}

