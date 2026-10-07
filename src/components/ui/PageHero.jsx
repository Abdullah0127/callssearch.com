import React from 'react';
import { Eyebrow } from './Primitives.jsx';
export default function PageHero({label,title,italic,body}){return <section className="page-hero"><Eyebrow>{label}</Eyebrow><h1>{title}<br/><em>{italic}</em></h1>{body&&<p>{body}</p>}<div className="page-hero-bottom"><span>MOTOR VEHICLE CLAIM</span><span>â€” A CLEARER WAY FORWARD</span></div></section>}

