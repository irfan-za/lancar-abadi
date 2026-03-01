import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfflineProduct } from "@/types/product";

export default function ProductCard({
  slug,
  title,
  descriptions,
  image_urls,
}: OfflineProduct) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md"
    >
      <div className="relative aspect-square bg-muted">
        <Image
          src={image_urls?.[0] || "/images/meta-image.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {descriptions?.join(" ")}
        </p>

        <Button className="flex items-center gap-1 text-sm font-medium text-primary-foreground transition-colors group-hover:gap-2">
          Lihat Detail
          <ArrowRight className="h-4 w-4 transition-transform" />
        </Button>
      </div>
    </Link>
  );
}
