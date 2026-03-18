export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: "Política de Privacidad" | "Términos del Servicio" | "Licencia";
  slug: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicyDocument: LegalDocument = {
  title: "Política de Privacidad",
  slug: "/privacy-policy",
  intro:
    "JamesTech actúa como responsable del tratamiento de los datos personales recabados a través de este sitio web.",
  sections: [
    {
      title: "Datos tratados",
      paragraphs: [
        "Podemos tratar los siguientes datos: nombre, dirección de correo electrónico, nombre de empresa y cualquier información incluida voluntariamente en el mensaje enviado mediante el formulario de contacto.",
      ],
    },
    {
      title: "Base jurídica y finalidad",
      paragraphs: [
        "Tratamos los datos con base en el consentimiento del usuario al enviar formularios, en la aplicación de medidas precontractuales cuando la consulta se vincula con servicios solicitados, en nuestro interés legítimo para administrar y proteger el sitio, y en el cumplimiento de obligaciones legales cuando corresponda.",
        "Las finalidades del tratamiento son responder consultas, gestionar solicitudes comerciales o profesionales, mantener la seguridad del sitio, prevenir abusos y cumplir requerimientos legales o regulatorios.",
      ],
    },
    {
      title: "Comunicación de datos",
      paragraphs: [
        "No vendemos datos personales. Los datos pueden ser compartidos exclusivamente con proveedores que prestan servicios necesarios para el funcionamiento del sitio o la gestión de comunicaciones, bajo obligaciones contractuales de confidencialidad y tratamiento adecuado, o cuando exista obligación legal.",
      ],
    },
    {
      title: "Conservación",
      paragraphs: [
        "Los datos personales se conservarán solo durante el tiempo necesario para cumplir la finalidad para la que fueron recabados, atender consultas, gestionar relaciones precontractuales o contractuales, resolver eventuales reclamos y cumplir obligaciones legales.",
      ],
    },
    {
      title: "Derechos del usuario",
      paragraphs: [
        "El usuario puede solicitar acceso, rectificación, actualización, supresión, limitación del tratamiento, oposición y portabilidad de sus datos cuando resulte aplicable conforme al GDPR u otra normativa vigente. También puede retirar su consentimiento cuando el tratamiento se base en el mismo.",
        "En la medida aplicable bajo CCPA/CPRA, el usuario puede solicitar conocer qué información personal se recopila, acceder a ella, solicitar su eliminación y ejercer el derecho a no ser discriminado por el ejercicio de sus derechos. Dado que no vendemos información personal, no ofrecemos una opción de exclusión de venta.",
      ],
    },
    {
      title: "Contacto",
      paragraphs: [
        "Para ejercer derechos o realizar consultas sobre privacidad, escriba a james.tech.latam@gmail.com. Si considera que sus derechos no han sido atendidos adecuadamente, podrá presentar una reclamación ante la autoridad de control competente.",
      ],
    },
  ],
};

export const termsOfServiceDocument: LegalDocument = {
  title: "Términos del Servicio",
  slug: "/terms-of-service",
  intro:
    "Estos términos regulan el acceso y uso del sitio web de JamesTech. Al navegar o utilizar este sitio, el usuario acepta estos términos.",
  sections: [
    {
      title: "Uso permitido",
      paragraphs: [
        "El usuario se compromete a utilizar el sitio de forma lícita, de buena fe y conforme a su finalidad informativa y de contacto profesional.",
        "Queda prohibido realizar actos que interfieran con el funcionamiento del sitio, intentar acceder sin autorización a sistemas o datos, introducir código malicioso, realizar scraping no autorizado o utilizar el sitio con fines fraudulentos, ilegales o lesivos para terceros.",
      ],
    },
    {
      title: "Cuentas, pagos y contratación",
      paragraphs: [
        "Este sitio no ofrece actualmente creación de cuentas de usuario ni procesamiento directo de pagos. Cualquier contratación de servicios se gestiona por canales externos o comunicaciones directas y podrá estar sujeta a acuerdos particulares adicionales.",
      ],
    },
    {
      title: "Propiedad intelectual",
      paragraphs: [
        "Todos los contenidos del sitio, incluyendo textos, diseños, marcas, logotipos, imágenes, código y demás materiales, son titularidad de JamesTech o se utilizan con autorización de sus respectivos titulares. Ningún uso no autorizado se encuentra permitido.",
      ],
    },
    {
      title: "Limitación de responsabilidad",
      paragraphs: [
        "El sitio se proporciona en su estado disponible. JamesTech no garantiza la disponibilidad ininterrumpida, ausencia de errores o compatibilidad absoluta con todos los dispositivos o navegadores.",
        "En la máxima medida permitida por la ley aplicable, JamesTech no será responsable por daños indirectos, incidentales, especiales, consecuenciales o por lucro cesante derivados del uso o imposibilidad de uso del sitio. Esta limitación no excluye responsabilidades que no puedan excluirse legalmente.",
      ],
    },
    {
      title: "Suspensión o terminación",
      paragraphs: [
        "JamesTech puede restringir o bloquear el acceso al sitio cuando existan usos indebidos, riesgos de seguridad, incumplimientos legales o técnicos, o para tareas de mantenimiento, sin perjuicio de los derechos que correspondan bajo la ley aplicable.",
      ],
    },
    {
      title: "Ley aplicable",
      paragraphs: [
        "Estos términos se interpretan conforme a las leyes de la República Argentina, sin perjuicio de las normas imperativas de protección al consumidor y de protección de datos que resulten aplicables según la residencia del usuario.",
      ],
    },
  ],
};

export const licenseDocument: LegalDocument = {
  title: "Licencia",
  slug: "/license",
  intro:
    "Salvo indicación expresa en contrario, el acceso al sitio no transfiere derechos de propiedad ni concede una licencia amplia sobre sus contenidos.",
  sections: [
    {
      title: "Uso permitido",
      paragraphs: [
        "Se concede al usuario una licencia limitada, no exclusiva, no transferible y revocable para acceder al sitio y utilizar sus contenidos únicamente con fines personales, informativos e internos de evaluación comercial legítima.",
      ],
    },
    {
      title: "Restricciones",
      paragraphs: [
        "No está permitido copiar, reproducir, distribuir, modificar, crear obras derivadas, publicar, sublicenciar, revender, explotar comercialmente, descompilar o reutilizar el contenido del sitio fuera de los casos expresamente autorizados por escrito.",
      ],
    },
    {
      title: "Titularidad",
      paragraphs: [
        "Todos los derechos, títulos e intereses sobre el sitio y sus contenidos pertenecen a JamesTech o a sus licenciantes. La presente licencia no implica cesión ni renuncia de derechos de propiedad intelectual.",
      ],
    },
  ],
};
