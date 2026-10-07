import { termsIntro, termsSections, privacyIntro, privacySections } from '../data/legalReference.js';

function SectionText({ content }) {
  if (!Array.isArray(content)) return <p>{content}</p>;
  return <div className="legal-subsections">{content.map(([heading, text]) => <section key={heading}><h3>{heading}</h3><p>{text}</p></section>)}</div>;
}

function LegalDocument({ title, intro, sections }) {
  return <><section className="page-hero legal-page-hero"><span className="eyebrow"><i /> MOTOR VEHICLE CLAIM</span><h1>{title}</h1><p>Last updated: 2026</p></section><section className="legal-section section"><nav className="legal-nav"><span className="eyebrow"><i /> ON THIS PAGE</span>{sections.map(([heading], index) => <a href={`#legal-section-${index}`} key={heading}>{String(index + 1).padStart(2, '0')} &nbsp; {heading}</a>)}</nav><div className="legal-content"><p className="legal-intro">{intro}</p>{sections.map(([heading, body], index) => <article id={`legal-section-${index}`} key={heading}><span>SECTION {String(index + 1).padStart(2, '0')}</span><h2>{heading}</h2><SectionText content={body} /></article>)}</div></section></>;
}

export default function LegalReference({ privacyPage = false }) {
  return privacyPage ? <LegalDocument title="Privacy Policy" intro={privacyIntro} sections={privacySections} /> : <LegalDocument title="Terms and Conditions" intro={termsIntro} sections={termsSections} />;
}
