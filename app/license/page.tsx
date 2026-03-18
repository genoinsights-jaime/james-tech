import { LegalPage } from "@/components/site/legal-page";
import { licenseDocument } from "@/lib/legal-content";

export default function LicensePage() {
  return <LegalPage document={licenseDocument} />;
}
