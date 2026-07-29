import { fichas } from "../data/fichas";
import { FichaCard } from "./FichaCard";

export function FichaGrid() {
  const featured = fichas.find((f) => f.featured);
  const resto = fichas.filter((f) => !f.featured);
  const siguienteNumero = String(fichas.length).padStart(3, "0");

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      {featured && <FichaCard ficha={featured} index={0} />}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {resto.map((ficha, i) => (
          <FichaCard key={ficha.numero} ficha={ficha} index={i + 1} />
        ))}

        <div className="flex min-h-[130px] items-center justify-center rounded border border-dashed border-line p-5">
          <p className="font-mono text-[11px] text-ink-muted">
            próxima ficha F.{siguienteNumero}
          </p>
        </div>
      </div>
    </div>
  );
}
