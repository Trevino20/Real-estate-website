import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1 className="policy-main-title">Terms &amp; Conditions</h1>
        <p className="policy-intro">
          These Terms &amp; Conditions govern the use of this website and any interactions related to
          project information, enquiries, and submissions. By using this website, you agree to these
          terms.
        </p>

        <div className="policy-section">
          <h2 className="policy-section-title">Use of Information</h2>
          <p className="policy-section-body">
            All content is provided for informational purposes only and is subject to change without
            prior notice. The information presented on this website, including pricing, floor plans,
            specifications, and availability, is indicative and may be revised by the developer at
            any time without prior intimation.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-title">Enquiries</h2>
          <p className="policy-section-body">
            By submitting forms on this website, you consent to being contacted via phone, SMS, or
            email at the details provided. You acknowledge that such communication is initiated by
            your enquiry and agree to receive relevant information from our team regarding the
            project.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-title">Liability</h2>
          <p className="policy-section-body">
            No warranties are provided regarding the accuracy, completeness, or availability of
            content on this website. The website owner and the developer are not liable for any
            losses, damages, or expenses resulting from reliance on the information herein. All
            decisions based on this information are made at the user's own risk.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-title">Intellectual Property</h2>
          <p className="policy-section-body">
            All content, images, logos, and materials displayed on this website are the intellectual
            property of Trident Group Real Estate and may not be reproduced, distributed, or used
            without prior written permission.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-title">Modifications</h2>
          <p className="policy-section-body">
            We reserve the right to modify these Terms &amp; Conditions at any time. Continued use
            of the website after any such changes constitutes your acceptance of the new terms.
          </p>
        </div>

        <Link to="/" className="policy-back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default TermsAndConditions;
