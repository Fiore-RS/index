import type { Ficha } from "../data/fichas";
import { categorias } from "../data/categories";

// rotaciones alternadas para que las fichas se vean "clavadas a mano"
const ROTATIONS = ["-0.6deg", "0.5deg", "-0.4deg", "0.6deg", "-0.3deg", "0.4deg"];

interface Props {
  ficha: Ficha;
  index: number;
}

export function FichaCard({ ficha, index }: Props) {
  const rotation = ROTATIONS[index % ROTATIONS.length];
  const cat = ficha.featured ? null : categorias[ficha.categoria];

  return (
    <a
      href={ficha.url}
      target="_blank"
      rel="noreferrer"
      style={{ transform: `rotate(${rotation})` }}
      className={`group relative block rounded bg-paper transition-transform duration-200 ease-out hover:!rotate-0 hover:-translate-y-1 ${
        ficha.featured
          ? "border-[1.5px] border-ink p-6 sm:p-7"
          : "border border-line p-5"
      }`}
    >
      {/* pestaña de color, tipo carpeta de archivo */}
      <span
        aria-hidden="true"
        className={`absolute left-5 top-0 h-1.5 rounded-b ${
          ficha.featured ? "w-11 bg-terracota" : `w-9 ${cat?.tab}`
        }`}
      />
      {/* perforaciones de tarjetero */}
      <span
        aria-hidden="true"
        className="absolute left-5 top-2.5 h-1.5 w-1.5 rounded-full border border-ink-muted bg-paper"
      />
      <span
        aria-hidden="true"
        className="absolute right-5 top-2.5 h-1.5 w-1.5 rounded-full border border-ink-muted bg-paper"
      />

      <div className="mt-2 flex items-start justify-between gap-2">
        {ficha.featured ? (
          <span className="rounded border border-terracota px-2 py-0.5 font-mono text-[11px] text-terracota">
            obra principal
          </span>
        ) : (
          <span className={`font-mono text-[10px] ${cat?.text}`}>{cat?.label}</span>
        )}
        <span className="font-mono text-[11px] text-ink-muted">F.{ficha.numero}</span>
      </div>

      <p
        className={`font-display font-medium text-ink ${
          ficha.featured ? "mt-3 text-2xl sm:text-[26px]" : "mt-2.5 text-lg"
        }`}
      >
        {ficha.titulo}
      </p>
      <p
        className={`leading-relaxed text-ink-soft ${
          ficha.featured ? "mt-1.5 text-sm" : "mt-1 text-xs"
        }`}
      >
        {ficha.descripcion}
      </p>

      <div className="mt-3 flex items-center justify-between border-t border-dashed border-line pt-2">
        <span className="font-mono text-[10px] text-ink-muted">{ficha.anio}</span>
        <span
          className={`font-mono text-[11px] ${
            ficha.featured ? "text-terracota" : cat?.text
          }`}
        >
          {ficha.featured ? "abrir ↗" : "ver ↗"}
        </span>
      </div>
    </a>
  );
}
