"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/nft/presale", label: "NFT", icon: NftIcon },
  { href: "/mall", label: "Mall", icon: MallIcon },
  { href: "/wallet", label: "Wallet", icon: WalletIcon },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 border-t border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <ul className="grid grid-cols-4 h-16">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <li key={href} className="flex items-center justify-center">
              <Link
                href={href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 text-xs",
                  active ? "text-primary" : "text-foreground/60"
                )}
              >
                <Icon active={active} />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function HomeIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={cn(active ? "stroke-primary" : "stroke-current")}> 
      <path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function NftIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={cn(active ? "stroke-primary" : "stroke-current")}> 
      <path d="M7 7h10v10H7z" strokeWidth="1.5"/>
      <path d="M9 9h6v6H9z" strokeWidth="1.5"/>
    </svg>
  );
}

function MallIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={cn(active ? "stroke-primary" : "stroke-current")}> 
      <path d="M4 10h16v9H4z" strokeWidth="1.5"/>
      <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeWidth="1.5"/>
    </svg>
  );
}

function WalletIcon({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={cn(active ? "stroke-primary" : "stroke-current")}> 
      <path d="M3 7a2 2 0 0 1 2-2h12v4H5a2 2 0 0 1-2-2Zm0 4a2 2 0 0 1 2-2h14v8H5a2 2 0 0 1-2-2v-4Z" strokeWidth="1.5"/>
      <circle cx="16" cy="13" r="1.25" fill="currentColor"/>
    </svg>
  );
}
