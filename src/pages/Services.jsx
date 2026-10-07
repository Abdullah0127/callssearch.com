import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/siteContent.js';
import PageHero from '../components/ui/PageHero.jsx';
import { Eyebrow, Button } from '../components/ui/Primitives.jsx';
import CTA from '../components/ui/CTA.jsx';
export default function Services(){return <><PageHero label="OUR SERVICES" title="Expert support for" italic="what comes next." body="Free eligibility conversations, access to experienced legal support, and a clear explanation of your options."/><section className="service-directory section"><div className="directory-intro"><Eyebrow>AREAS OF SUPPORT</Eyebrow><p>Explore the areas our legal partners may be able to help with. If youâ€™re unsure where your situation fits, just ask.</p><Button>Discuss your situation</Button></div><div>{services.map((s,i)=><Link className="directory-row" to="/contact" key={s}><span>0{i+1}</span><h2>{s}</h2><ArrowUpRight size={20}/></Link>)}</div></section><CTA/></>}


