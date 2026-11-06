import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Explore consumer electronics, IT hardware and household appliance brands available through VR Distribution in Dubai.",
};
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "AMD",
    imageSrc: "/images/products/amd.png",
  },
  {
    name: "ASUS",
    imageSrc: "/images/products/asus.png",
  },
  {
    name: "Bose",
    imageSrc: "/images/products/bose.png",
  },
  {
    name: "Braun",
    imageSrc: "/images/products/braun.png",
  },
  {
    name: "Canon",
    imageSrc: "/images/products/canon.png",
  },
  {
    name: "Corsair",
    imageSrc: "/images/products/corsair.png",
  },
  {
    name: "De’Longhi",
    imageSrc: "/images/products/delonghi.png",
  },
  {
    name: "DJI",
    imageSrc: "/images/products/dji.png",
  },
  {
    name: "Dyson",
    imageSrc: "/images/products/dyson.png",
  },
  {
    name: "Epson",
    imageSrc: "/images/products/epson.png",
  },
  {
    name: "Fitbit",
    imageSrc: "/images/products/fitbit.png",
  },
  {
    name: "Fujifilm",
    imageSrc: "/images/products/fujifilm.png",
  },
  {
    name: "Garmin",
    imageSrc: "/images/products/garmin.png",
  },
  {
    name: "Gigabyte",
    imageSrc: "/images/products/gigabyte.png",
  },
  {
    name: "GoPro",
    imageSrc: "/images/products/gopro.png",
  },
  {
    name: "HyperX",
    imageSrc: "/images/products/hyper.png",
  },
  {
    name: "Intel",
    imageSrc: "/images/products/intel.png",
  },
  {
    name: "Jabra",
    imageSrc: "/images/products/jabra.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="The brands you know. A partner you can trust."
        subtitle="Explore our consumer electronics and household appliance range. Contact our team for current availability, specifications and pricing."
        imageSrc="/images/heroes/about-story.jpg"
        imageAlt="Product warehouse"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.05} className="h-full">
                <ProductCard {...p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Looking for a specific product?
            </h2>
            <p className="text-brand-400 mb-8 text-lg">
              We source from a network of Top consumer Electronic Brands.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-900 font-semibold px-8 py-3.5 rounded-full hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 group"
            >
              Contact Us!
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
