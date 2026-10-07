import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown, ShieldCheck, Clock3, HeartHandshake } from 'lucide-react';
import { referenceFAQs, referenceServices } from '../data/referenceContent.js';
import ClaimFormSection from '../components/home/ClaimFormSection.jsx';

const supportPoints = [
  ['Trusted Expertise', 'Our team brings years of experience in handling accident claims with care and professionalism.'],
  ['Customer Centric Support', 'We focus on your peace of mind by offering clear communication and dependable guidance throughout the process.'],
  ['Claim Assistance', 'Our team supports you through each stage of the claim process, helping to make it more straightforward and manageable.'],
  ['Free Consultation', 'Begin with a no-obligation consultation to explore your claim options and discuss possible next steps.']
];

const claimTypeImages = {
  'Road Traffic Accidents': {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80',
    alt: 'Car travelling on a road'
  },
  'Work Accidents': {
    src: 'https://images.unsplash.com/photo-1762073574572-31cf6d0ebba4?auto=format&fit=crop&w=700&q=80',
    alt: 'Construction worker wearing safety gear at a work site'
  },
  'Motorbike Accidents': {
    src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=700&q=80',
    alt: 'Motorcycle on the road'
  },
  'Military Claims': {
    src: 'https://images.unsplash.com/photo-1768932080391-b20b91a4ab73?auto=format&fit=crop&w=700&q=80',
    alt: 'Service member in military uniform saluting'
  },
  'Medical Negligence': {
    src: 'https://images.unsplash.com/photo-1758691461957-474a7686e388?auto=format&fit=crop&w=700&q=80',
    alt: 'Doctor speaking with a patient during a consultation'
  },
  'Occupiers Liability': {
    src: 'https://images.unsplash.com/photo-1490085964525-79c2e1236eca?auto=format&fit=crop&w=700&q=80',
    alt: 'Apartment building and premises'
  },
  'Cycling Accidents': {
    src: 'https://images.unsplash.com/photo-1765808925935-e4fab8f2f6c5?auto=format&fit=crop&w=700&q=80',
    alt: 'Cyclist riding a bicycle on a road'
  },
  'Dental Negligence': {
    src: 'https://images.unsplash.com/photo-1662837625421-5fd8ed6131a0?auto=format&fit=crop&w=700&q=80',
    alt: 'Dentist examining a patient'
  }
};

export default function HomeReference() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className="hero reference-hero home-hero-v2">
        <div className="hero-copy">
          <span className="eyebrow"><i /> EXPERT MOTOR VEHICLE &amp; ACCIDENT CLAIM SUPPORT</span>
          <h1>Claim With<br /><em>Confidence.</em></h1>
          <p className="hero-subtitle">No Win No Fee. No Hidden Extras.</p>
          <p className="hero-text">Reliable motor vehicle accident claims and legal support. Fast approvals, expert guidance, and dedicated support every step of the way. We simplify the process so you can focus on recovery.</p>
          <div className="hero-buttons"><Link className="button button-dark" to="/claim">Claim Now <ArrowUpRight size={16} /></Link><a className="text-link" href="#how-it-works">How it works <ArrowRight size={15} /></a></div>
          <div className="hero-reassurance"><span><b>01</b> Fast approvals</span><span><b>02</b> Expert guidance</span><span><b>03</b> Dedicated support</span></div>
        </div>
        <div className="home-hero-visual">
          <div className="home-hero-photo"><img src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1800&q=85" alt="A motor vehicle on an open road" /><span className="home-photo-index">MOTOR VEHICLE CLAIM <i> / </i> 01</span><div className="home-photo-caption"><span>NO WIN NO FEE</span><span>NO HIDDEN EXTRAS</span></div></div>
          <div className="home-review-card"><div className="review-card-top"><span>GOOGLE REVIEWS</span><span>4.8 <b>★★★★★</b></span></div><div className="review-card-bottom"><ShieldCheck size={18} /><span>Trusted claim assistance<br /><strong>Here when you need us</strong></span><ArrowUpRight size={16} /></div></div>
          <span className="home-hero-vertical">CLEAR GUIDANCE · SUPPORT THROUGH EVERY STEP</span>
          <span className="home-hero-orbit" aria-hidden="true" />
        </div>
      </section>

      <section className="reference-trust"><div className="trust-heading">We help you connect with the best lawyers in your country</div><div className="trust-stat"><strong>4.8 <span>★★★★★</span></strong><small>Google Reviews · Trusted reviews</small></div><div className="trust-stat"><strong>11+ <span>Years</span></strong><small>Years Experience</small></div><div className="trust-stat"><strong>1000+</strong><small>Claims Assisted</small></div></section>

      <section className="feature-band"><article><span className="eyebrow"><i /> TRUSTED CLAIM ASSISTANCE</span><h2>Get the Support<br /><em>You Deserve.</em></h2><h3>Expert Guidance. No Upfront Cost.</h3><p>Our team handles your motor vehicle claim with care and professionalism. From first contact to resolution, we keep you informed and supported at every step.</p><Link to="/claim" className="text-link">Start Your Claim <ArrowUpRight size={15} /></Link></article><article><span className="eyebrow"><i /> FAST &amp; TRANSPARENT</span><h2>We Simplify<br /><em>the Process.</em></h2><h3>Quick Evaluations. Clear Communication.</h3><p>Fast claim evaluations and straightforward advice. We explain your options in plain language so you can make confident decisions about your accident claim.</p><Link to="/claim" className="text-link">Claim Now <ArrowUpRight size={15} /></Link></article><article><span className="eyebrow"><i /> HERE WHEN YOU NEED US</span><h2>24/7 Claim<br /><em>Support.</em></h2><h3>Round-the-Clock Assistance.</h3><p>Start your motor vehicle claim whenever you're ready. Our team is here to answer your questions and guide you through the process with care and expertise.</p><Link to="/claim" className="text-link">Get Started <ArrowUpRight size={15} /></Link></article></section>

      <section className="process reference-process" id="how-it-works"><div className="process-image"><img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85" alt="A person reviewing documents" /><div className="process-image-tag">SIMPLE PROCESS</div></div><div className="process-content"><span className="eyebrow"><i /> SIMPLE PROCESS</span><h2>How it<br /><em>works.</em></h2><p className="section-lede">Get the support you need in three straightforward steps—from checking your eligibility to connecting with a lawyer, with no financial risk.</p><div className="steps"><div className="step"><span>01</span><div><h3>Check your eligibility</h3><p>Submit our quick form and we'll confirm if you qualify for a no win no fee claim—usually within minutes.</p></div><ArrowUpRight size={17} /></div><div className="step"><span>02</span><div><h3>Get matched with a lawyer</h3><p>We connect you with an experienced personal injury lawyer who will fight for the compensation you deserve.</p></div><ArrowUpRight size={17} /></div><div className="step"><span>03</span><div><h3>No upfront fees</h3><p>No win, no fee. You only pay if we win your case—so you can focus on recovery, not costs.</p></div><ArrowUpRight size={17} /></div></div><Link to="/claim" className="button button-dark">Check Your Eligibility <ArrowRight size={15} /></Link></div></section>

      <section className="services section reference-why"><div className="services-head"><div><span className="eyebrow"><i /> WHY CHOOSE US</span><h2>For Your Motor<br /><em>Vehicle Claim Needs.</em></h2></div><p>We focus on guiding you through the claim process with clarity and efficiency, providing dependable support throughout your journey.</p></div><h3 className="reference-subhead">What we offer</h3><div className="reference-support-grid">{supportPoints.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><ShieldCheck size={18} /><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="reference-metrics"><div><strong>0</strong><span>Claims Assisted</span></div><div><strong>Free</strong><span>Consultation</span></div><div><strong>0</strong><span>Support</span></div></div></section>

      <section className="specialist-section"><div className="specialist-copy"><span className="eyebrow"><i /> PERSONAL INJURY SPECIALISTS</span><h2>Experienced lawyers.<br /><em>People who care.</em></h2><p>A highly experienced team of lawyers who care about our clients and aim to achieve the best results and compensation.</p><Link to="/claim" className="button button-light">Claim Now <ArrowUpRight size={15} /></Link></div><div className="specialist-image"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="Legal professionals working together" /><div className="specialist-seal"><span>EXPERT<br />LEGAL<br /><em>SUPPORT</em></span></div></div><div className="specialist-bottom"><div><HeartHandshake size={18} /><span><b>No Win No Fee, No Hidden Extras</b><small>When we say 'No Win No Fee' we mean it. No hidden extras, no unexpected charges.</small></span></div><div><Clock3 size={18} /><span><b>High Success Rate</b><small>We put in the time and effort to make your case as good as it can be, helping you to rebuild your life.</small></span><strong className="success-rate">95%*</strong></div></div></section>

      <section className="claim-types section"><div className="services-head"><div><span className="eyebrow"><i /> WHAT WE HANDLE</span><h2>All Types of Personal<br /><em>Injury Claims Handled.</em></h2></div><p>We assist with road traffic, motor vehicle, and a wide range of accident and injury claims. Whatever your situation, we help you understand your options and connect you with the right expertise.</p></div><div className="claim-type-grid">{referenceServices.map(([title, description], index) => { const image = claimTypeImages[title]; return <article key={title}><span className="claim-type-number">0{index + 1}</span><div className="claim-type-image"><img src={image?.src} alt={image?.alt ?? title} loading="lazy" /></div><h3>{title}</h3><p>{description}</p></article>; })}</div></section>

      <ClaimFormSection />

      <section className="faq section reference-faq"><div className="faq-side"><span className="eyebrow"><i /> FAQ'S</span><h2>Frequently Asked<br /><em>Questions.</em></h2><p>Helpful answers about how the claim process works and what to expect.</p><a href="tel:18442282372" className="text-link">(844) 228-2372 <ArrowUpRight size={15} /></a></div><div className="faq-list">{referenceFAQs.map(([question, answer], index) => <div className={`faq-row ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section className="cta reference-attorney"><div><span className="eyebrow"><i /> WANNA TALK TO US?</span><h2>Talk With<br /><em>An Attorney.</em></h2></div><div className="cta-aside"><p>We're here to answer your questions and provide expert guidance on your motor vehicle claim. Reach out today for personalized assistance!</p><div className="cta-contact"><a href="mailto:info@motorvehicleclaim.com">Email Address&nbsp; info@motorvehicleclaim.com</a><a href="tel:18442282372">Phone&nbsp; (844) 228-2372</a></div><Link className="button button-light" to="/contact">Contact Us <ArrowUpRight size={15} /></Link></div></section>
    </>
  );
}
