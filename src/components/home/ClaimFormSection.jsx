import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const steps = ['Your Details', 'Accident', 'Contact & Consent'];
const options = ['Yes', 'No', 'Not sure'];

export default function ClaimFormSection({ standalone = false }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (step < 3) setStep((current) => current + 1);
    else setSubmitted(true);
  }

  return (
    <section className={`claim-form-section section ${standalone ? 'claim-form-standalone' : ''}`} id="claim-form">
      <div className="claim-form-intro">
        <span className="eyebrow"><i /> GET STARTED</span>
        <h2>Let us know<br />about <em>you.</em></h2>
        <p>Complete the short form below to check if you qualify. If eligible, we'll connect you with a personal injury attorney—often with no upfront fees required.</p>
        <span className="form-assurance">NO OBLIGATION <b>•</b> 100% CONFIDENTIAL</span>
      </div>

      <div className="claim-form-panel">
        {submitted ? (
          <div className="claim-form-success"><span className="eyebrow"><i /> ENQUIRY RECEIVED</span><h3>Thank you.</h3><p>Your details have been recorded for this demo. To reach Motor Vehicle Claim, email info@motorvehicleclaim.com or call (844) 228-2372.</p></div>
        ) : (
          <>
            <div className="claim-stepper" aria-label={`Step ${step} of 3`}>
              {steps.map((label, index) => <div className={step === index + 1 ? 'current' : step > index + 1 ? 'complete' : ''} key={label}><span>{index + 1}</span><b>{label}</b></div>)}
            </div>
            <form onSubmit={handleSubmit}>
              {step === 1 && <div className="claim-fields two-col"><label>First Name<input required name="firstName" placeholder="Your first name" autoComplete="given-name" /></label><label>Last Name<input required name="lastName" placeholder="Your last name" autoComplete="family-name" /></label><label>Email<input required name="email" type="email" placeholder="you@example.com" autoComplete="email" /></label><label>Zipcode<input required name="zipcode" placeholder="12345" autoComplete="postal-code" /></label></div>}
              {step === 2 && <div className="claim-fields two-col"><label>Accident Date<input required name="accidentDate" type="date" /></label><label>Were you Injured?<select required defaultValue=""><option value="" disabled>Select an option</option>{options.map((item) => <option key={item}>{item}</option>)}</select></label><label>Were you at fault?<select required defaultValue=""><option value="" disabled>Select an option</option>{options.map((item) => <option key={item}>{item}</option>)}</select></label><label>Do You Have An Attorney?<select required defaultValue=""><option value="" disabled>Select an option</option>{options.map((item) => <option key={item}>{item}</option>)}</select></label><label>Accident Type<select required defaultValue=""><option value="" disabled>Select an accident type</option><option>Road traffic accident</option><option>Work accident</option><option>Motorbike accident</option><option>Other accident</option></select></label><label>Medical treatment received?<select required defaultValue=""><option value="" disabled>Select an option</option>{options.map((item) => <option key={item}>{item}</option>)}</select></label><label className="field-wide">Accident / Case Description<textarea name="description" rows="3" placeholder="Tell us what happened" /></label></div>}
              {step === 3 && <div className="claim-fields"><label>Phone<input required name="phone" type="tel" placeholder="(555) 123-4567" autoComplete="tel" /></label><label className="consent-field"><input required type="checkbox" /> <span>By submitting this form, you agree to the <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a> that Accident-Claim-Now or their <a href="/partners">Legal Partners</a> may contact you for Personal Injury and Motor Vehicle Accident claims by phone or email. You expressly consent to receive phone calls (including autodialed and/or pre-recorded/artificial voice calls) and emails using automated technology at the phone number and email address you provided, even if it is a wireless number, regardless of whether you are on any Federal or state DNC (Do Not Call) and/or DNE (Do Not Email) list or registry. Such communications are generally made between 8:00 AM and 9:00 PM local time, but you understand and agree that we may occasionally contact you outside these hours if necessary. In addition, you understand and acknowledge that you are over 18 years of age and that your consent is not required as a condition of purchase.</span></label></div>}
              <div className="claim-form-actions">{step > 1 && <button type="button" className="form-back" onClick={() => setStep((current) => current - 1)}><ArrowLeft size={15} /> Back</button>}<button type="submit" className="button button-dark">{step === 3 ? 'Submit Claim' : 'Next'} <ArrowRight size={15} /></button></div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
