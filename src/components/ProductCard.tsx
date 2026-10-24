import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  imageSrc: string;
}

export default function ProductCard({ name, imageSrc }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-brand-100 overflow-hidden card-hover flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent h-20" />
      </div>
    </div>
  );
}
