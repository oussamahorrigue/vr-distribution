import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const origin = 'https://oussamahorrigue.github.io';
export const metadata: Metadata = {
  title: { default: 'VR Distribution | Consumer Electronics & Global Trade', template: '%s | VR Distribution' },
  description: 'Dubai-based sourcing and distribution of consumer electronics, IT components and small household appliances for international businesses.',
  metadataBase: new URL(origin),
  openGraph: { title: 'VR Distribution', description: 'Leading brands. Global reach. Your next move.', url: `${origin}${basePath}/`, siteName: 'VR Distribution', type: 'website', images: [{url: `${basePath}/og-image.jpg`, width:1200, height:630, alt:'VR Distribution'}] },
  twitter: {card:'summary_large_image', title:'VR Distribution', images:[`${basePath}/og-image.jpg`]},
  icons: { icon: `${basePath}/favicon.ico`, apple: `${basePath}/apple-touch-icon.png` },
  manifest: `${basePath}/site.webmanifest`,
};
const jsonLd = {'@context':'https://schema.org','@type':'Organization',name:'VR Distribution',url:`${origin}${basePath}/`,logo:`${origin}${basePath}/logo.svg`,email:'info@vrdistribution.ae',address:{'@type':'PostalAddress',addressLocality:'Dubai',addressCountry:'AE'}};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body className="min-h-screen flex flex-col font-sans"><a href="#main-content" className="skip-link">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} /><Navbar /><main id="main-content" className="flex-1">{children}</main><Footer /><WhatsAppButton /></body></html>;
}
