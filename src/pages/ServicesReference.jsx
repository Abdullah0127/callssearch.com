import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/ui/PageHero.jsx';
import { referenceServices } from '../data/referenceContent.js';

const process = [
  ['Check your eligibility', "Submit our quick form and we'll confirm if you qualify for a no win no fee motor vehicle or accident claim—usually within minutes. We review your accident details, fault, and injury status to ensure you get the right support."],
  ['Get matched with a lawyer', 'We connect you with an experienced lawyer who specialises in motor vehicle and accident claims. Our network covers road traffic, workplace, and other personal injury claims nationwide.'],
  ['No win no fee', 'No win, no fee. You only pay if we win your motor vehicle or accident claim—so you can focus on recovery, not costs. Free consultation and no hidden extras.']
];

const offers = [
  ['Trusted Expertise', 'Our team brings years of experience in motor vehicle and accident claims. We work only with qualified lawyers who specialise in personal injury and motor vehicle claims.'],
  ['Customer-Focused Support', 'We focus on your peace of mind with clear communication and dependable guidance throughout your motor vehicle claim. Reach us by email whenever you need answers.'],
  ['End-to-End Claim Assistance', 'We support you through each stage of your motor vehicle or accident claim—from initial submission to settlement. We help gather information, track progress, and keep you informed at every step.'],
  ['Free Consultation', 'Begin with a no-obligation consultation to explore your motor vehicle or accident claim options. No upfront fees—you only pay if you win your case. No win no fee.']
];

export default function ServicesReference() {
  return <>
    <PageHero label="OUR SERVICES" title="Expert Support for" italic="Motor Vehicle & Accident Claims" body="Free eligibility check, no win no fee legal matching, and clear guidance from start to finish. We support road traffic, personal injury, and motor vehicle claims with zero upfront cost." />
    <section className="process reference-process"><div className="process-image"><img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85" alt="Reviewing the details of a claim" /><div className="process-image-tag">SIMPLE PROCESS</div></div><div className="process-content"><span className="eyebrow"><i /> SIMPLE PROCESS</span><h2>How Motor Vehicle<br /><em>Claims Work</em></h2><p className="section-lede">Get the support you need in three straightforward steps—from a free eligibility check to being matched with a lawyer. No win no fee, no financial risk.</p><div className="steps">{process.map(([title, body], index) => <div className="step" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight size={17} /></div>)}</div><Link to="/claim" className="button button-dark">Start Your Claim <ArrowUpRight size={15} /></Link></div></section>
    <section className="reference-advantages section"><div className="services-head"><div><span className="eyebrow"><i /> OUR COMPETITIVE ADVANTAGE</span><h2>For Your Motor<br /><em>Vehicle Claim Needs</em></h2></div><p>We focus on guiding you through the claim process with clarity and efficiency, providing dependable support throughout your journey.</p></div><div className="reference-support-grid">{offers.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="reference-service-directory section"><div className="services-head"><div><span className="eyebrow"><i /> WHAT WE HANDLE</span><h2>Motor Vehicle &amp;<br /><em>Personal Injury Claims</em></h2></div><p>We assist with road traffic, motor vehicle, and a wide range of accident and injury claims. Whatever your situation, we help you understand your options and connect you with the right expertise.</p></div><div className="reference-claim-list">{referenceServices.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={18} /></article>)}</div></section>
    <section className="cta reference-attorney"><div><span className="eyebrow"><i /> GET IN TOUCH</span><h2>Ready to Start<br /><em>Your Claim?</em></h2></div><div className="cta-aside"><p>Complete our quick form to check if you qualify for a free consultation. We're here to help with your motor vehicle or accident claim—no win no fee, no obligation.</p><div className="cta-contact"><a href="mailto:info@motorvehicleclaim.com">Email us&nbsp; info@motorvehicleclaim.com</a><a href="tel:18442282372">Phone&nbsp; (844) 228-2372</a></div><Link to="/claim" className="button button-light">Claim Now <ArrowUpRight size={15} /></Link></div></section>
  </>;
}
