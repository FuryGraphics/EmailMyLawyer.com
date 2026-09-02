import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for EmailMyLawyer.com (Tegnelia & DeBose, APC). How we collect, use, and protect the information you share with our San Diego law firm.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 2026" crumbLabel="Privacy Policy" href="/privacy-policy">
      <p>
        {site.legalName} ("we," "us," or "our"), operating as {site.brand}, respects your privacy
        and is committed to protecting the personal information you share with us. This Privacy
        Policy explains what information we collect, how we use it, and the choices you have. It
        applies to our website and the services we provide.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Information you provide.</strong> Your name, phone number, email address, and
          the details of your legal matter when you contact us, request a consultation, or submit
          a form.
        </li>
        <li>
          <strong>Automatically collected information.</strong> Standard analytics data such as IP
          address, browser type, pages visited, and referring pages, collected through tools like
          Google Analytics.
        </li>
        <li>
          <strong>Cookies.</strong> Small files stored on your device that help the site function
          and help us understand how visitors use it.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and provide legal consultations and services.</li>
        <li>To communicate with you about your matter and our services.</li>
        <li>To improve our website, content, and client experience.</li>
        <li>To comply with legal and ethical obligations.</li>
      </ul>

      <h2>How We Share Information</h2>
      <p>
        We do not sell your personal information. We may share information with trusted service
        providers who help us operate our website and practice (such as analytics or hosting
        providers), and when required by law or to protect our rights. Communications about your
        legal matter are handled consistent with our professional and ethical obligations.
      </p>

      <h2>Confidentiality</h2>
      <p>
        Contacting us or submitting a form does not, by itself, create an attorney–client
        relationship. Please do not send confidential or time-sensitive information through the
        website until such a relationship has been established in writing.
      </p>

      <h2>Data Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards to protect your
        information. However, no method of transmission over the internet is completely secure,
        and we cannot guarantee absolute security.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may opt out of non-essential cookies through your browser settings and may request
        that we update or delete the information you have provided by contacting us. California
        residents may have additional rights under applicable state law.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may link to third-party sites. We are not responsible for the privacy
        practices or content of those sites.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with an updated effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
        <a href={site.phoneHref}>{site.phone}</a>, or by mail at {site.address.full}.
      </p>
    </LegalPage>
  );
}
