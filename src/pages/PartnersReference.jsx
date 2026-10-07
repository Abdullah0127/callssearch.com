import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero.jsx';
import { partnerNames } from '../data/referenceContent.js';

export default function PartnersReference() {
  const [query, setQuery] = useState('');
  const [letter, setLetter] = useState('All');
  const filtered = useMemo(() => partnerNames.filter((name) => name.toLowerCase().includes(query.toLowerCase()) && (letter === 'All' || name.toUpperCase().startsWith(letter))), [query, letter]);

  return <>
    <PageHero label="OUR PARTNERS" title="Trusted Legal &" italic="Service Partners" body="We work with trusted legal and service partners to connect you with the support you need. The following is a list of our partners." />
    <section className="reference-partners section"><div className="reference-partner-controls"><span className="eyebrow"><i /> PARTNER DIRECTORY</span><label className="partner-search-label">Search partners<input className="partner-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by name" /></label><div className="letters">{['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((item) => <button type="button" className={letter === item ? 'selected' : ''} onClick={() => setLetter(item)} key={item}>{item}</button>)}</div><p>{filtered.length} partners</p></div><div className="partner-directory reference-partner-list">{filtered.map((name, index) => <article className="partner-row" key={`${name}-${index}`}><span>{String(index + 1).padStart(3, '0')}</span><strong>{name}</strong><ArrowUpRight size={16} /></article>)}{filtered.length === 0 && <p>No partners match your search.</p>}</div></section>
  </>;
}
