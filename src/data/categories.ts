export type CategoriaKey = "app" | "herramienta" | "academico" | "experimento";

interface CategoriaInfo {
  label: string;
  tab: string; // clase de fondo para la pestaña
  text: string; // clase de color de texto
}

// Agregar una categoría nueva es agregar una entrada acá.
// El color de la pestaña se toma de la paleta definida en tailwind.config.js
export const categorias: Record<CategoriaKey, CategoriaInfo> = {
  app: { label: "app", tab: "bg-bosque", text: "text-bosque" },
  herramienta: { label: "herramienta", tab: "bg-terracota", text: "text-terracota" },
  academico: { label: "académico", tab: "bg-mostaza", text: "text-mostaza" },
  experimento: { label: "experimento", tab: "bg-ink-muted", text: "text-ink-muted" },
};
