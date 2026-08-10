import Script from "next/script";

// Live intake form hosted by CaseClimb (LeadConnector). form_embed.js auto-resizes
// the iframe to fit the form. Rendered on a light card so the form stays legible
// on the dark page regardless of the form's own background.
export function ContactFormEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-2xl">
      <iframe
        src="https://services.caseclimb.com/widget/form/SFokfAZtreKsEB2KNGU1"
        style={{ width: "100%", height: 640, border: "none", borderRadius: 8 }}
        id="inline-SFokfAZtreKsEB2KNGU1"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form (Tegnelia & DeBose, APC)"
        data-height="541"
        data-layout-iframe-id="inline-SFokfAZtreKsEB2KNGU1"
        data-form-id="SFokfAZtreKsEB2KNGU1"
        title="Website Form (Tegnelia & DeBose, APC)"
      />
      <Script src="https://services.caseclimb.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
