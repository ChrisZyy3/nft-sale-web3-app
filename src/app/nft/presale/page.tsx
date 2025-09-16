"use client";

import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

type PresaleItem = {
  id: string;
  image?: string;
  maxSupply: number;
  minted: number;
  priceEth: number;
};

const mock: PresaleItem[] = [
  { id: "001", maxSupply: 1000, minted: 290, priceEth: 0.015 },
  { id: "002", maxSupply: 1000, minted: 480, priceEth: 0.015 },
  { id: "003", maxSupply: 1000, minted: 160, priceEth: 0.015 },
  { id: "004", maxSupply: 1000, minted: 320, priceEth: 0.015 },
  { id: "005", maxSupply: 1000, minted: 780, priceEth: 0.015 },
];

export default function PresalePage() {
  const { address, isConnected } = useAccount();

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-medium">Presale</h1>
        <div className="hidden md:block">
          <ConnectButton />
        </div>
      </div>
      <div className="md:hidden mb-4">
        <ConnectButton />
      </div>

      <div className="space-y-4">
        {mock.map((item) => (
          <Card key={item.id} className="bg-card/80 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">{item.id}</CardTitle>
              <Button className="bg-primary hover:bg-primary/90" disabled={!isConnected}>
                BUY
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 text-xs text-foreground/70">
                <Badge variant="outline" className="border-primary text-primary">Number {item.maxSupply}</Badge>
                <Badge variant="outline" className="border-primary text-primary">Price {item.priceEth} Ξ</Badge>
              </div>
              <div className="mt-3">
                <Progress value={(item.minted / item.maxSupply) * 100} />
                <div className="mt-1 text-xs text-foreground/60">
                  {item.minted} / {item.maxSupply} minted
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
