import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-[calc(100dvh-4rem)] px-6 py-10 mx-auto max-w-3xl">
      <h1 className="text-3xl font-semibold tracking-tight mb-3">Hash Butterfly</h1>
      <p className="text-foreground/70 mb-8">
        Metaverse IP ecosystem — mobile-first NFT presale and commerce experience built with
        Next.js, Tailwind and wagmi.
      </p>
      <div className="flex gap-3">
        <Button asChild>
          <Link href="/nft/presale">Go to Presale</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/wallet">Wallet</Link>
        </Button>
      </div>
    </div>
  );
}

