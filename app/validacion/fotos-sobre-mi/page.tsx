import {
  getBrandPhotos,
  getPhotoUrl,
  recommendedAboutJaimePhotos,
} from "@/lib/brand-photo-bank";

function groupLabel(group: string) {
  return group === "." ? "Sin carpeta" : group;
}

export default async function AboutPhotoValidationPage() {
  const photos = await getBrandPhotos();

  const grouped = photos.reduce<Record<string, typeof photos>>((acc, photo) => {
    acc[photo.group] ??= [];
    acc[photo.group].push(photo);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-[#05070c] px-5 py-10 text-white md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-12">
        <section className="space-y-5">
          <div className="space-y-3">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
              Validacion
            </p>
            <h1 className="max-w-[920px] font-sans text-[40px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[64px]">
              Opciones de foto para la seccion Sobre mi.
            </h1>
            <p className="max-w-[920px] font-sans text-[18px] leading-[1.5] tracking-[-0.02em] text-white/78">
              Arriba te dejo una shortlist curada solo con fotos donde apareces vos explicando.
              Abajo queda todo el banco agrupado por carpeta para revisar alternativas.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
                Recomendadas
              </p>
              <h2 className="font-sans text-[28px] font-semibold tracking-[-0.04em] md:text-[40px]">
                Shortlist inicial
              </h2>
            </div>
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/52">
              {recommendedAboutJaimePhotos.length} candidatas
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {recommendedAboutJaimePhotos.map((photo, index) => (
              <article
                key={photo.relativePath}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getPhotoUrl(photo.relativePath)}
                    alt={photo.title}
                    className="h-full w-full object-cover"
                    style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                  />
                </div>
                <div className="space-y-4 px-5 py-5 md:px-6 md:py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
                        Opcion {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-sans text-[24px] font-semibold tracking-[-0.04em] text-white">
                        {photo.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-[#4F82FF]/30 bg-[#4F82FF]/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#9BB8FF]">
                      Sobre mi
                    </span>
                  </div>
                  <p className="max-w-[720px] font-sans text-[17px] leading-[1.55] tracking-[-0.02em] text-white/75">
                    {photo.note}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                    {photo.relativePath}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
              Banco completo
            </p>
            <h2 className="font-sans text-[28px] font-semibold tracking-[-0.04em] md:text-[40px]">
              Todas las fotos disponibles
            </h2>
          </div>

          {Object.entries(grouped).map(([group, items]) => (
            <section key={group} className="space-y-4">
              <div className="flex items-end justify-between gap-6">
                <h3 className="font-sans text-[22px] font-semibold tracking-[-0.03em] text-white">
                  {groupLabel(group)}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                  {items.length} fotos
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((photo) => (
                  <article
                    key={photo.relativePath}
                    className="overflow-hidden rounded-[22px] border border-white/8 bg-white/[0.02]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getPhotoUrl(photo.relativePath)}
                        alt={photo.filename}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-2 px-4 py-4">
                      <p className="font-sans text-[16px] font-medium leading-[1.35] tracking-[-0.02em] text-white">
                        {photo.filename}
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/42">
                        {photo.relativePath}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </main>
  );
}
