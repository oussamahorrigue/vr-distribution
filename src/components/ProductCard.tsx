import Image from "@/components/AssetImage";

export default function ProductCard({name, imageSrc}: {name:string; imageSrc:string}) {
  return <article className="brand-card">
    <div className="brand-card-image"><Image src={imageSrc} alt={`${name} brand logo`} width={180} height={180} sizes="180px" className="object-contain" style={imageSrc.endsWith(".svg") || imageSrc.endsWith("/ninja.png") ? { width: 112, height: 112 } : undefined} /></div>
    <div className="brand-card-label"><h2>{name}</h2></div>
  </article>;
}
