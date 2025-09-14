export default function MallPage() {
  const items = Array.from({ length: 8 }, (_, i) => ({ id: i + 1 }));
  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <h1 className="text-xl font-medium mb-4">Mall</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.id} className="space-y-2">
            <div className="aspect-square rounded-md bg-white/5" />
            <div className="text-xs text-foreground/60">HASH BUTTERFLY T-SHIRT</div>
            <div className="text-sm font-medium">$79.00</div>
          </div>
        ))}
      </div>
    </div>
  );
}

