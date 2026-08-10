import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Legal disclaimer and attorney advertising notice for Tegnelia & DeBose, APC (EmailMyLawyer.com), a San Diego criminal defense law firm.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="August 2026" crumbLabel="Disclaimer" href="/disclaimer">
      <p>
        <strong>Attorney Advertising.</strong> This website is intended for general informational
        purposes only and may be considered attorney advertising under the rules of the State Bar
        of California. It is not intended to be a solicitation in any jurisdiction where {site.legalName}{" "}
        is not authorized to practice.
      </p>

      <h2>No Legal Advice</h2>
      <p>
        The information provided on this website does not, and is not intended to, constitute legal
        advice. All content is for general informational purposes only. Laws change and vary by
        jurisdiction and by the specific facts of each case. You should consult a licensed attorney
        for advice regarding your individual situation.
      </p>

      <h2>No Attorney–Client Relationship</h2>
      <p>
        Viewing this website, contacting us through it, or submitting information does not create an
        attorney–client relationship between you and {site.legalName}. An attorney–client
        relationship is formed only after we have conducted a conflicts check and both parties have
        signed a written engagement agreement. Please do not send us confidential information until
        such a relationship has been established.
      </p>

      <h2>No Guarantee of Results</h2>
      <p>
        Any references to prior case results, outcomes, or client experiences are provided for
        illustration only. Every case is different and is decided on its own facts and law.
        <strong> Past results do not guarantee, warrant, or predict a similar outcome in any future
        case.</strong> Testimonials appearing on this site are individual experiences and are not a
        guarantee of results.
      </p>

      <h2>Third-Party Content & Links</h2>
      <p>
        This website may contain links to third-party websites. Such links are provided for
        convenience only and do not constitute an endorsement. We are not responsible for the
        content, accuracy, or practices of any third-party website.
      </p>

      <h2>Jurisdiction</h2>
      <p>
        {site.legalName} is a professional law corporation located in San Diego, California, and its
        attorneys are licensed to practice law in the State of California.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this disclaimer, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
        <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </LegalPage>
  );
}
