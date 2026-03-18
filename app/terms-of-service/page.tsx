import { LegalPage } from "@/components/site/legal-page";
import { termsOfServiceDocument } from "@/lib/legal-content";

export default function TermsOfServicePage() {
  return <LegalPage document={termsOfServiceDocument} />;
}
