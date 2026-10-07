import Link from 'next/link';
import { notFound } from 'next/navigation';
import { testimonies } from '@/data/content';
export const dynamicParams = false;
// Rezervovaná statická cesta umožní export aj pred pridaním prvého príbehu.
export function generateStaticParams(){ return testimonies.length?testimonies.map(t=>({slug:t.slug})):[{slug:'pripravujeme'}] }
export default async function Testimony({ params }: { params: Promise<{slug:string}> }) {const {slug}=await params;const t=testimonies.find(t=>t.slug===slug);if(!t&&slug!=='pripravujeme')notFound();return <article className="container reading"><Link className="back" href="/#svedectva">← Späť na svedectvá</Link><span className="eyebrow">SVEDectvo BOŽEJ LÁSKY</span><h1>{t?.title??'Svedectvá pripravujeme'}</h1><p>{t?.author}</p><div className="prayer-body">{t?.body??'Tu postupne pribudnú skutočné príbehy. Každý zverejníme so súhlasom jeho autora.'}</div></article> }
