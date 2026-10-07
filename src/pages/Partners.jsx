import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { partnerNames } from '../data/partners.js';
import PageHero from '../components/ui/PageHero.jsx';
import { Eyebrow } from '../components/ui/Primitives.jsx';
import CTA from '../components/ui/CTA.jsx';
export default function Partners(){const[q,setQ]=useState('');const[letter,setLetter]=useState('All');const visible=partnerNames.filter(p=>p.toLowerCase().includes(q.toLowerCase())&&(letter==='All'||p.toUpperCase().startsWith(letter)));return <><PageHero label="OUR NETWORK" title="The right support," italic="together." body="We work with a network of legal professionals to help people find experienced support for their claim."/><section className="partners-section section"><div className="partners-intro"><Eyebrow>LEGAL PARTNERS</Eyebrow><p>Our current partner directory is being confirmed. Contact us and we can discuss the available options for your situation.</p><input className="partner-search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search partners" aria-label="Search partners"/></div><div className="partner-directory"><div className="letters">{['All',...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map(l=><button className={letter===l?'selected':''} onClick={()=>setLetter(l)} key={l}>{l}</button>)}</div><div className="partner-list">{visible.map((p,i)=><div className="partner-row" key={p}><span>{String(i+1).padStart(2,'0')}</span><strong>{p}</strong><span>Legal partner</span><ArrowUpRight size={17}/></div>)}{visible.length===0&&<p>Partner listings will appear here once the current directory has been verified. Please <Link to="/contact">contact us</Link> to discuss available support.</p>}</div></div></section><CTA/></>}

