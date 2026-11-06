import Image from "@/components/AssetImage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({name, imageSrc}: {name:string; imageSrc:string}) {
  return <Link href={`/contact?brand=${encodeURIComponent(name)}`} className="brand-card group" aria-label={`Ask about ${name} products`}>
    <div className="brand-card-image"><Image src={imageSrc} alt={`${name} brand logo`} width={180} height={180} sizes="180px" className="object-contain" /></div>
    <div className="brand-card-label"><h2>{name}</h2><ArrowUpRight size={17} className="text-accent-700" /></div>
  </Link>;
}
