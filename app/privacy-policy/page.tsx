import { LegalPage } from "@/components/site/legal-page";
import { privacyPolicyDocument } from "@/lib/legal-content";

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicyDocument} />;
}
