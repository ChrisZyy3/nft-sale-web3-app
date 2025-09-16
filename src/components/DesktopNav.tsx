"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home" },
  { href: "/nft/presale", label: "NFT" },
  { href: "/mall", label: "Mall" },
  { href: "/wallet", label: "Wallet" },
];

export default function DesktopNav() {
  const pathname = usePathname();
  return (
    <header className="hidden md:block sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-background/70">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-6">
        <div className="font-semibold">Hash Butterfly</div>
        <nav className="flex items-center gap-4 text-sm">
          {items.map((it) => {
            const active = pathname === it.href || pathname.startsWith(it.href + "/");
            return (
              <Link key={it.href} href={it.href} className={cn("hover:text-primary/80", active ? "text-primary" : "text-foreground/70")}>{it.label}</Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

