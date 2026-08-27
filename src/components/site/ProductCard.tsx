import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { productImage } from "@/data/images";
import type { Product } from "@/data/products";
import { useSite } from "@/lib/site-state";

export function ProductCard({ product }: { product: Product }) {
  const { price, setActiveProductId } = useSite();

  return (
    <button
      onClick={() => setActiveProductId(product.id)}
      className="group block w-full text-left surface-card overflow-hidden transition-shadow hover:shadow-[var(--shadow-lift)] cursor-pointer"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-secondary">
        <img
          src={productImage(product.image)}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur">
          {product.brand}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-base leading-tight">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.benefit}</p>
        <div className="flex items-center justify-between pt-1 text-sm">
          <span className="font-semibold">{price(product.price)}</span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Star className="size-3.5 fill-clay text-clay" />
            {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </button>
  );
}
