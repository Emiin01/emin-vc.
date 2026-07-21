"use client";

import { useEffect, useState } from "react";
import { useAnimatedNumber } from "@/hooks/use-animated-number";
import { cn } from "@/lib/utils";

const COINS = [
  { symbol: "BTC", basePrice: 67000.0 },
  { symbol: "ETH", basePrice: 3500.0 },
  { symbol: "SOL", basePrice: 170.0 },
  { symbol: "ARB", basePrice: 1.8 },
  { symbol: "MATIC", basePrice: 0.9 },
  { symbol: "LDO", basePrice: 2.4 },
  { symbol: "FXS", basePrice: 5.2 },
] as const;

function decimalsFor(base: number) {
  return base < 1 ? 3 : 2;
}

function CoinRow({ symbol, basePrice }: { symbol: string; basePrice: number }) {
  const [price, setPrice] = useState(basePrice);
  const [change, setChange] = useState(0);
  const animatedPrice = useAnimatedNumber(price, 500);
  const decimals = decimalsFor(basePrice);

  useEffect(() => {
    const id = setInterval(() => {
      const pct = Math.random() * 4 - 2;
      setChange(pct);
      setPrice(basePrice * (1 + pct / 100));
    }, 5000 + Math.random() * 800);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <tr className="border-b border-dotted border-white/10 last:border-none">
      <td className="py-2.5 text-white/90 font-medium">{symbol}</td>
      <td className="py-2.5 text-right tabular-nums text-gold-soft/90">
        ${animatedPrice.toFixed(decimals)}
      </td>
      <td
        className={cn(
          "py-2.5 text-right tabular-nums text-[11px]",
          change >= 0 ? "text-green-300/80" : "text-rose-300/80"
        )}
      >
        {change >= 0 ? "+" : ""}
        {change.toFixed(1)}%
      </td>
    </tr>
  );
}

export function PortfolioTicker() {
  return (
    <div className="relative rounded-xl border border-white/10 bg-neutral-900/85 p-5 shadow-2xl overflow-hidden h-full flex flex-col">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4">
        Portfolio
      </div>
      <table className="w-full text-xs flex-1">
        <thead>
          <tr className="border-b border-white/15 text-white/40 text-[10px] uppercase tracking-wide">
            <th className="text-left font-medium pb-1.5">Coin</th>
            <th className="text-right font-medium pb-1.5">Price (USD)</th>
            <th className="text-right font-medium pb-1.5">24h</th>
          </tr>
        </thead>
        <tbody>
          {COINS.map((c) => (
            <CoinRow key={c.symbol} symbol={c.symbol} basePrice={c.basePrice} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
