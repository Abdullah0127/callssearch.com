import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import PageHero from '../components/ui/PageHero.jsx';

const values = [
  ['Trust', 'Transparent communication at every step.'],
  ['Efficiency', 'Streamlined processes for faster outcomes.'],
  ['Support', 'Dependable guidance when you need it most.'],
  ['Expertise', 'Specialist knowledge in motor vehicle and accident claims.']
];

const advantages = [
  ['Fast Claim Evaluation', 'We prioritise quick eligibility checks and claim assessments so you get answers without long waits. Our team works efficiently to move your motor vehicle claim forward.'],
  ['Expert Claim & Legal Support', 'Get guidance from professionals who understand motor vehicle and accident claims. We connect you with qualified lawyers who fight for the compensation you deserve.'],
  ['No Win No Fee', 'Free consultation with no obligation. You only pay if we win your case—no hidden extras. We believe you shouldn’t have to worry about costs when seeking help.'],
  ['24/7 Claim Support', 'We’re here when you need us, 24/7. Submit your details anytime and our team will get back to you. You’re not alone in the process.']
];

export default function AboutReference() {
  return <>
    <PageHero label="ABOUT US" title="Your Partner in" italic="Accident Claims" body="We’re here to take the stress out of claiming. From fast checks to expert support—no win no fee, no hidden extras." />
    <section className="reference-about-intro section"><div><span className="eyebrow"><i /> OUR MISSION</span><span className="about-index">01</span></div><div><span className="eyebrow"><i /> WHAT WE DO</span><h2>Clear guidance.<br /><em>Confident claims.</em></h2><p>We guide you through motor vehicle and accident claims with clarity, professionalism, and no win no fee support.</p><p>Motor Vehicle Claim specialises in reliable motor vehicle accident claim support and legal guidance. We simplify the claims process with fast eligibility checks, expert advice, and dedicated support so you get the compensation you deserve without hassle or hidden costs.</p><p>We are committed to trust and transparency. Our team guides you through every stage of your claim—from initial enquiry to resolution—with clear communication and professional care. No win no fee means you can pursue your claim with confidence.</p></div></section>
    <section className="reference-values"><div><span className="eyebrow"><i /> OUR MISSION</span><h2>What matters<br /><em>at every step.</em></h2></div><div className="reference-value-list">{values.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div><Check size={16} /></article>)}</div></section>
    <section className="about-stat-band"><div><strong>0</strong><span>Claims Assisted</span></div><div><strong>Free</strong><span>Consultation</span></div><div><strong>0</strong><span>Support</span></div></section>
    <section className="reference-advantages section"><div className="services-head"><div><span className="eyebrow"><i /> WHY CHOOSE US</span><h2>Why Choose<br /><em>Motor Vehicle Claim</em></h2></div><p>We make motor vehicle and accident claims simple, transparent, and stress-free—with no win no fee and no hidden extras.</p></div><p className="confidential-line">No obligation <b>•</b> 100% confidential</p><div className="reference-support-grid">{advantages.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="cta reference-attorney"><div><span className="eyebrow"><i /> GET IN TOUCH</span><h2>Ready to Start Your<br /><em>Motor Vehicle Claim?</em></h2></div><div className="cta-aside"><p>Complete our quick form to check if you qualify for a free, no-obligation consultation. We're here to help with your motor vehicle or accident claim—no win no fee.</p><div className="cta-contact"><a href="mailto:info@motorvehicleclaim.com">Email us&nbsp; info@motorvehicleclaim.com</a><a href="tel:18442282372">Phone&nbsp; (844) 228-2372</a></div><Link to="/claim" className="button button-light">Claim Now <ArrowUpRight size={15} /></Link></div></section>
  </>;
}
