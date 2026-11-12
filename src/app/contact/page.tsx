import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { office } from "@/lib/office";
import {
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact VR Distribution in Dubai for consumer electronics sourcing, brand availability, pricing and international shipping.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Sales & Inquiries",
    value: "sales@vr-international.ae",
    link: "mailto:sales@vr-international.ae",
  },
  { icon: MapPin, label: "Office", value: office.address, link: office.mapsUrl },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", link: null },
];

const benefits = ["CIF / DDP pricing"];

const certifications = [
  "IEC Registered Exporter",
  "GST Registered",
  "RCMC (Export Promotion Council)",
  "FIEO Member",
  "AD Code Registered",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Get a customized quotation within 24 hours. Tell us what you need, and we will find the best sourcing solution for you."
        imageSrc="/images/heroes/contact.jpg"
        imageAlt="Modern office"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-900 mb-8">
                  Send Us an Inquiry
                </h2>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-6 border border-brand-100 shadow-elevated">
                  <h3 className="font-display font-bold text-brand-900 mb-5 text-lg">
                    Contact Details
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((c) => (
                      <div key={c.label} className="flex gap-3">
                        <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <c.icon className="w-4 h-4 text-brand-500" />
                        </div>
                        <div>
                          <div className="text-[10px] text-brand-400 font-medium uppercase tracking-wide">
                            {c.label}
                          </div>
                          {c.link ? (
                            <a
                              href={c.link}
                              className="text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                            >
                              {c.value}
                            </a>
                          ) : (
                            <div className="text-sm font-semibold text-brand-800">
                              {c.value}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-accent-50 rounded-2xl p-6 border border-accent-100">
                  <h3 className="font-display font-bold text-brand-900 mb-4 text-lg">
                    Why Contact Us?
                  </h3>
                  <ul className="space-y-2.5 text-sm text-brand-700">
                    {benefits.map((b) => (
                      <li key={b} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                  <h3 className="font-display font-bold text-brand-900 mb-4 text-lg">
                    Certifications
                  </h3>
                  <ul className="space-y-2 text-sm text-brand-700">
                    {certifications.map((c) => (
                      <li key={c} className="flex gap-2.5 items-start">
                        <Shield className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24" aria-labelledby="office-map-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-brand-200 bg-brand-50">
            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 id="office-map-title" className="font-display text-2xl font-bold text-brand-900">Visit Our Office</h2>
                <address className="not-italic text-sm text-brand-600 leading-relaxed mt-3 max-w-lg">{office.address}</address>
              </div>
              <a href={office.mapsUrl} target="_blank" rel="noopener noreferrer" className="button-primary self-start md:self-center">Open in Google Maps <MapPin className="w-4 h-4" aria-hidden="true" /></a>
            </div>
            <iframe src={office.embedUrl} title="VR Distribution office map — HDS Tower, Cluster F, Dubai" className="w-full h-[320px] md:h-[440px] border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
