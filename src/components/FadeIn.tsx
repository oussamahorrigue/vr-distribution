import type { ReactNode } from 'react';
interface FadeInProps { children:ReactNode; delay?:number; direction?:'up'|'left'|'right'|'none'; className?:string; }
// Keep all content visible in the static HTML, including without JavaScript.
export default function FadeIn({children,className}:FadeInProps){return <div className={className}>{children}</div>;}
