import { FichaGrid } from "./components/FichaGrid";

function App() {
  return (
    <div className="min-h-screen px-4 py-14 sm:py-20">
      <header className="mx-auto mb-10 max-w-3xl">
        <p className="font-mono text-xs text-ink-muted">catálogo</p>
        <h1 className="mt-1 font-display text-3xl font-medium text-ink sm:text-4xl">
          Fiorella — índice de proyectos
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          Un fichero de todo lo que voy construyendo, del portfolio para acá.
        </p>
      </header>

      <FichaGrid />

      <footer className="mx-auto mt-14 max-w-3xl border-t border-dashed border-line pt-4">
        <p className="font-mono text-[11px] text-ink-muted">
          actualizado a mano, ficha por ficha
        </p>
      </footer>
    </div>
  );
}

export default App;
