import Link from "next/link";
import Image from "@/components/AssetImage";
import BrandMarquee from "@/components/BrandMarquee";
import { ArrowRight, ArrowUpRight, Globe2, Truck, CheckCircle2, Tablet, Monitor, PcCase, Gamepad2, Printer, Camera, Headphones, HardDrive, Cpu, CircuitBoard, Watch, MessagesSquare, FileCheck2, PackageCheck } from "lucide-react";

const categories = [
  { name: "Tablets", detail: "Connected, wherever you work", icon: Tablet },
  { name: "Monitors", detail: "A clearer view of every detail", icon: Monitor },
  { name: "Workstations", detail: "Performance for demanding work", icon: PcCase },
  { name: "Gaming", detail: "Hardware built for play", icon: Gamepad2 },
  { name: "Printers", detail: "Everyday business essentials", icon: Printer },
  { name: "Cameras", detail: "Capture more, create more", icon: Camera },
  { name: "Audio", detail: "Headphones and headsets", icon: Headphones },
  { name: "Storage", detail: "SSD and HDD solutions", icon: HardDrive },
  { name: "Processors", detail: "The power behind your system", icon: Cpu },
  { name: "AI hardware", detail: "Compute for the next generation", icon: CircuitBoard },
  { name: "IT components", detail: "Build, upgrade and connect", icon: Monitor },
  { name: "Watches", detail: "Wearable and fitness technology", icon: Watch },
];
const steps = [
  { title: "Tell us what you need", text: "Share your products, quantities and delivery destination with our team.", icon: MessagesSquare },
  { title: "Receive your quotation", text: "Get product availability, pricing and shipping options tailored to your business.", icon: FileCheck2 },
  { title: "We handle the delivery", text: "Confirm your order and let us coordinate the documentation and logistics.", icon: PackageCheck },
];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="site-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> BASED IN DUBAI. CONNECTED WORLDWIDE.</p>
          <h1>Leading brands.<br />Global reach.<br /><span className="text-accent-700">Your next move.</span></h1>
          <p className="hero-description">Your sourcing partner for consumer electronics, IT components and small household appliances. From Dubai to your business, we keep trade moving.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/products" className="button-primary">Explore our brands <ArrowUpRight size={18} /></Link>
            <Link href="/contact" className="button-secondary">Request a quote <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-assurance"><CheckCircle2 size={16} /> Brand-new products <span /> International delivery</div>
        </div>
        <div className="hero-visual">
          <Image src="/images/heroes/home-hero.jpg" alt="Container ships and cranes at an international shipping port" fill priority sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" />
          <div className="photo-caption"><span className="caption-icon"><Globe2 size={23} /></span><div><strong>Local expertise. Global connections.</strong><p>Consumer electronics, delivered worldwide.</p></div></div>
          <span className="photo-tag">DUBAI, UAE</span>
        </div>
      </div>
    </section>

    <section className="brand-strip" aria-label="Featured brands">
      <div className="site-shell"><p className="eyebrow text-center">A WORLD OF BRANDS. ONE SOURCING PARTNER.</p>
        <BrandMarquee />
      </div>
    </section>

    <section className="section-space bg-brand-50" id="categories">
      <div className="site-shell">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE DISTRIBUTE</p><h2>Technology for every opportunity.</h2></div><p>From everyday essentials to specialist hardware, discover a range built around your business.</p></div>
        <div className="category-grid">{categories.map((c,i) => <Link href="/products" key={c.name} className="category-card"><span className="category-number">{String(i+1).padStart(2,"0")}</span><c.icon className="category-icon" strokeWidth={1.35} aria-hidden="true" /><h3>{c.name}</h3><p>{c.detail}</p><ArrowUpRight className="category-arrow" size={18} /></Link>)}</div>
      </div>
    </section>

    <section className="section-space">
      <div className="site-shell about-grid">
        <div className="about-photo"><Image src="/images/heroes/about-story.jpg" alt="Organized warehouse and distribution operations" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" /><div className="location-note"><span className="status-dot" /> DUBAI, UNITED ARAB EMIRATES</div></div>
        <div><p className="eyebrow">A PARTNER IN YOUR GROWTH</p><h2>Good business starts<br />with the right connection.</h2><p className="mt-6 text-brand-600 leading-relaxed">VR Distribution connects businesses with leading consumer electronics brands. Based in Dubai, we support wholesalers, resellers, corporate gifting and IT infrastructure partners with flexible sourcing and international logistics.</p><div className="benefit-list"><p><Globe2 size={20} /> International sourcing network</p><p><CheckCircle2 size={20} /> Consumer electronics and IT expertise</p><p><Truck size={20} /> Coordinated shipping and documentation</p></div><Link href="/about" className="text-link">Get to know VR Distribution <ArrowRight size={17} /></Link></div>
      </div>
    </section>

    <section className="section-space bg-brand-50 border-t border-brand-100">
      <div className="site-shell"><div className="section-heading"><div><p className="eyebrow">STRAIGHTFORWARD FROM THE START</p><h2>Your next order, made simple.</h2></div><Link href="/contact" className="text-link">Let’s talk business <ArrowUpRight size={18} /></Link></div>
        <div className="process-grid">{steps.map((step,i)=><article className="process-card" key={step.title}><div className="flex justify-between items-center mb-8"><step.icon size={28} strokeWidth={1.4} /><span className="text-brand-400 text-sm">0{i+1}</span></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div>
    </section>

    <section className="cta-section"><div className="site-shell cta-inner"><div><p className="eyebrow text-accent-300">LET’S BUILD SOMETHING TOGETHER</p><h2>Your next opportunity<br />starts with a conversation.</h2><p>Tell us what you’re looking for. Our team will take it from there.</p></div><Link href="/contact" className="button-white">Get in touch <ArrowUpRight size={20} /></Link></div></section>
  </>;
}
