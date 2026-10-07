import React from 'react';
import { terms, privacy } from '../data/legalContent.js';
import PageHero from '../components/ui/PageHero.jsx';
import { Eyebrow } from '../components/ui/Primitives.jsx';
export default function Legal({privacyPage=false}){const data=privacyPage?privacy:terms;return <><PageHero label={privacyPage?'YOUR PRIVACY':'IMPORTANT INFORMATION'} title={privacyPage?'Privacy,':'Terms and'} italic={privacyPage?'explained.':'conditions.'} body={privacyPage?'A clear explanation of how information is handled when you use our website.':'Please take a moment to read the terms that apply when using our website.'}/><section className="legal-section section"><nav className="legal-nav"><Eyebrow>ON THIS PAGE</Eyebrow>{data.map(([h],i)=><a href={`#legal-${i}`} key={h}>{String(i+1).padStart(2,'0')} &nbsp; {h}</a>)}</nav><div className="legal-content">{data.map(([h,t],i)=><article id={`legal-${i}`} key={h}><span>SECTION {String(i+1).padStart(2,'0')}</span><h2>{h}</h2><p>{t}</p></article>)}<p className="legal-note">This page is a general website information draft and should be reviewed against the organisationâ€™s current approved policy before publication.</p></div></section></>}

