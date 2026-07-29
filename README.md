# index

Índice de mis GitHub Pages: portfolio, apps y proyectos, en formato de fichero de biblioteca.

## Antes de arrancar

Reemplazá `TU-USUARIO` por tu usuario real de GitHub en:

- `package.json` → `"homepage"`
- `src/data/fichas.ts` → las URLs de las fichas

`vite.config.ts` (`base: "/index/"`) e `index.html` ya están configurados para un repo llamado `index`.

## Desarrollo local

```powershell
npm install
npm run dev
```

## Crear el repo y publicarlo

1. En GitHub, creá un repo nuevo llamado **index**, público, **sin** inicializarlo con README, .gitignore ni licencia (ya los trae este proyecto — inicializarlo en GitHub genera conflictos al hacer el primer push).
2. En esta carpeta:

```powershell
git init
git add .
git commit -m "primer commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/index.git
git push -u origin main
```

3. Publicá con:

```powershell
npm run deploy
```

Esto compila (`predeploy` corre `npm run build` automáticamente) y publica `dist` en la rama `gh-pages` vía el paquete `gh-pages`.

4. En GitHub → Settings → Pages, elegí como fuente la rama `gh-pages`, carpeta `/ (root)`. El sitio queda en `https://TU-USUARIO.github.io/index`.

## Agregar una ficha nueva

Editá `src/data/fichas.ts` y agregá un objeto al array. El grid, la numeración (`F.00X`) y el color de pestaña por categoría se acomodan solos. Categoría nueva → agregala en `src/data/categories.ts` con su propio color.
