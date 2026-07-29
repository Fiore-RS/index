import type { CategoriaKey } from "./categories";

export interface Ficha {
  numero: string; // "000", "001"... se muestra como F.numero
  titulo: string;
  descripcion: string;
  categoria: CategoriaKey;
  anio: string;
  url: string;
  featured?: boolean; // true solo en el portfolio
}

// Para agregar una GitHub Page nueva, agregá un objeto acá.
// El grid y la numeración se acomodan solos.
export const fichas: Ficha[] = [
  {
    numero: "000",
    titulo: "Portfolio",
    descripcion: "Diseño y desarrollo UX/UI — trabajo seleccionado",
    categoria: "herramienta",
    anio: "2026",
    url: "https://TU-USUARIO.github.io/portfolio",
    featured: true,
  },
  {
    numero: "001",
    titulo: "ReadingJournal",
    descripcion: "Tracker de lecturas, full-stack",
    categoria: "app",
    anio: "2026",
    url: "https://TU-USUARIO.github.io/reading-journal",
  },
  {
    numero: "002",
    titulo: "Proyecto B",
    descripcion: "Breve descripción del proyecto",
    categoria: "academico",
    anio: "2025",
    url: "https://TU-USUARIO.github.io/proyecto-b",
  },
];
