"use client";
import { useState } from 'react';
export default function ReadingTools({ children }: { children: React.ReactNode }) { const [large,setLarge]=useState(false); return <><div className="reading-tools"><button aria-pressed={large} onClick={()=>setLarge(!large)}>Aa {large?'Bežné písmo':'Väčšie písmo'}</button><button onClick={()=>window.print()}>Vytlačiť</button></div><div className={`prayer-text ${large?'large':''}`}>{children}</div></> }
