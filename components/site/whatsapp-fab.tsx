import Image from "next/image";

import { whatsappUrl } from "@/lib/contact-links";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#53d467] shadow-lg transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/assets/whatsapp.svg"
        alt=""
        width={64}
        height={64}
        className="h-full w-full object-contain"
      />
    </a>
  );
}
