"use client";
import Link from "next/link";
import Image from "@/components/AssetImage";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links=[{href:"/",label:"Home"},{href:"/about",label:"About us"},{href:"/products",label:"Our brands"},{href:"/markets",label:"Markets"},{href:"/contact",label:"Contact"}];
export default function Navbar(){
 const [open,setOpen]=useState(false);const pathname=usePathname();
 useEffect(()=>{setOpen(false)},[pathname]);
 return <header className="site-header"><nav className="site-shell header-inner" aria-label="Main navigation"><Link href="/" className="header-logo" aria-label="VR Distribution home"><Image src="/logo.svg" alt="V R International DMCC" width={215} height={80} priority className="object-contain" /></Link><div className="desktop-nav">{links.map(l=><Link key={l.href} href={l.href} aria-current={pathname===l.href?'page':undefined} className={pathname===l.href?'nav-active':''}>{l.label}</Link>)}</div><Link href="/contact" className="header-quote">Let’s talk <ArrowUpRight size={16}/></Link><button type="button" className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-navigation">{open?<X/>:<Menu/>}</button></nav>{open&&<nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)} aria-current={pathname===l.href?'page':undefined}>{l.label}<ArrowUpRight size={16}/></Link>)}</nav>}</header>;
}
