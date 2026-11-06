import Image from "@/components/AssetImage";

interface PageHeroProps { title: string; subtitle: string; imageSrc: string; imageAlt: string; }
export default function PageHero({title, subtitle, imageSrc, imageAlt}: PageHeroProps) {
  return <section className="page-hero"><div className="site-shell page-hero-grid"><div><p className="eyebrow">VR DISTRIBUTION / DUBAI, UAE</p><h1>{title}</h1><p className="page-subtitle">{subtitle}</p></div><div className="page-hero-photo"><Image src={imageSrc} alt={imageAlt} fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" /></div></div></section>;
}
