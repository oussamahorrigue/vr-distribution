"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import Image from "@/components/AssetImage";

const brands = ["asus", "canon", "bose", "intel", "dyson", "garmin"];

export default function BrandMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="brand-marquee-wrapper">
      <div className={`brand-marquee${paused ? " is-paused" : ""}`}>
        <div className="brand-marquee-track">
          {[false, true].map(duplicate => (
            <div className="brand-marquee-group" key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {brands.map(brand => (
                <div className="brand-marquee-item" key={brand}>
                  <Image src={`/images/products/${brand}.png`} alt={duplicate ? "" : brand.toUpperCase()} width={140} height={140} sizes="140px" className="brand-logo" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="brand-motion-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? "Resume brand animation" : "Pause brand animation"} aria-pressed={paused}>
        {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}
