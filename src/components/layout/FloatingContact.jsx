import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Phone, X } from 'lucide-react';
import './FloatingContact.css';

const contactActions = [
  { label: 'Call us', detail: '(844) 228-2372', href: 'tel:18442282372', Icon: Phone },
  { label: 'Email us', detail: 'info@motorvehicleclaim.com', href: 'mailto:info@motorvehicleclaim.com', Icon: Mail },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`floating-contact ${isOpen ? 'is-open' : ''}`} aria-label="Quick contact">
      {isOpen && (
        <div className="floating-contact-actions">
          {contactActions.map(({ label, detail, href, Icon }) => (
            <a className="floating-contact-action" href={href} key={label}>
              <span className="floating-contact-icon"><Icon aria-hidden="true" /></span>
              <span className="floating-contact-label">{label}</span>
              <span className="floating-contact-detail">{detail}</span>
            </a>
          ))}
          <Link className="floating-contact-action" to="/claim" onClick={() => setIsOpen(false)}>
            <span className="floating-contact-icon"><FileText aria-hidden="true" /></span>
            <span className="floating-contact-label">Claim Form</span>
            <span className="floating-contact-detail">go to claim form</span>
          </Link>
        </div>
      )}
      <button
        className="floating-contact-toggle"
        type="button"
        aria-label={isOpen ? 'Close quick contact options' : 'Open quick contact options'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <span aria-hidden="true">?</span>}
      </button>
    </aside>
  );
}
