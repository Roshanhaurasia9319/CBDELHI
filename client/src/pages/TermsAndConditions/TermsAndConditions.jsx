import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p className="effective-date">Effective Date: 09/06/2025</p>

      <section>
        <h2>1. Eligibility</h2>
        <p>You must be at least 18 years old to use this website. By accessing the site, you confirm that you are legally eligible to use the service.</p>
      </section>

      <section>
        <h2>2. Use of Website</h2>
        <p>You agree to use this website for lawful purposes only and in a way that does not harm or impair the site or its users.</p>
      </section>

      <section>
        <h2>3. User Content</h2>
        <p>You are solely responsible for any content you post. You agree not to post content that is illegal, defamatory, or violates third-party rights.</p>
      </section>

      <section>
        <h2>4. Prohibited Activities</h2>
        <p>Do not use this site for illegal purposes, uploading malware, or violating laws. Automated data extraction is also prohibited.</p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>All content is owned by cbdelhi.in or its licensors. You may not reproduce or distribute content without permission.</p>
      </section>

      <section>
        <h2>6. Third-Party Links</h2>
        <p>We are not responsible for content or privacy practices of external websites linked from our site.</p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>We are not liable for damages from use of this site. We provide no guarantees of service availability or accuracy.</p>
      </section>

      <section>
        <h2>8. Privacy</h2>
        <p>Your use of the site is also subject to our Privacy Policy.</p>
      </section>

      <section>
        <h2>9. Changes to Terms</h2>
        <p>We may modify these terms at any time. Continued use of the site implies acceptance of updated terms.</p>
      </section>

      <section>
        <h2>10. Governing Law</h2>
        <p>These terms are governed by the laws of India, and disputes will be settled in Delhi courts.</p>
      </section>

      <p className="closing-text">If you do not agree to these Terms, please do not use this website.</p>
    </div>
  );
};

export default TermsAndConditions;
