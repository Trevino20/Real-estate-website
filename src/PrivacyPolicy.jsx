import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1 className="policy-main-title">Privacy Policy</h1>
        <p className="policy-intro">
          This Privacy Policy explains how we collect, use, and protect your personal information
          submitted via the website forms. We are committed to safeguarding your privacy and
          ensuring your data is handled responsibly.
        </p>

        <div className="policy-section">
          <h2 className="policy-section-title">Data Collected</h2>
          <p className="policy-section-body">
            We collect your name, phone number, and country code to process your enquiry. In some
            cases, we may also collect your email address if provided voluntarily. This information
            is collected solely through the enquiry and contact forms available on this website.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-title">Use of Data</h2>
          <p className="policy-section-body">
            Your data is used solely to contact you regarding the project and is not shared with
            third parties unless required to fulfill your request. We may use your contact
            information to send you relevant project updates, pricing information, and promotional
            offers related to Trident Vrindavan.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-title">Retention</h2>
          <p className="policy-section-body">
            Data is retained only as long as necessary to serve your enquiry. Once your request has
            been fulfilled or you have opted out of further communication, your personal data will
            be securely deleted from our records within a reasonable timeframe.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-title">Data Security</h2>
          <p className="policy-section-body">
            We implement appropriate technical and organisational measures to protect your personal
            information against unauthorised access, alteration, disclosure, or destruction. However,
            no method of transmission over the internet is completely secure, and we cannot guarantee
            absolute security.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-title">Your Rights</h2>
          <p className="policy-section-body">
            You have the right to request access to the personal data we hold about you, request
            corrections, or ask for its deletion. To exercise these rights, please contact us
            directly via the enquiry form on the website.
          </p>
        </div>

        <Link to="/" className="policy-back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
