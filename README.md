# Tercer Congreso Internacional — sitio web

Sitio estático responsive preparado para publicarse gratuitamente con **GitHub Pages**.

## Archivos
- `index.html`: página principal.
- `convocatoria.html`: página de información de convocatoria.
- `styles.css`: estilos y diseño responsive.
- `script.js`: menú móvil, año automático y formulario de interés.
- `assets/`: favicon y ficha provisional descargable.

## Publicar en GitHub Pages
1. Crea un repositorio público en GitHub, por ejemplo `congreso-humanidades`.
2. Sube el contenido de esta carpeta a la raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, guarda.
6. GitHub publicará el sitio en `https://TU-USUARIO.github.io/congreso-humanidades/`.
   Si el repositorio se llama `TU-USUARIO.github.io`, la dirección será `https://TU-USUARIO.github.io/`.

## Configuración antes de publicar
- En `script.js`, cambia `CONGRESS_CONFIG.email` por el correo real del comité organizador.
- En `index.html`, actualiza fecha, sede y modalidad.
- Sustituye los ejes temáticos provisionales por los aprobados por el comité.
- Sustituye `assets/convocatoria-placeholder.txt` por el PDF oficial y actualiza el enlace en `index.html`.
- Completa la página `convocatoria.html` con fechas, extensión, formato, criterios y cuotas (si aplican).
- Añade institución organizadora, logotipos, comité científico, ponentes y programa cuando estén confirmados.

## Formulario
El formulario de interés usa `mailto:`: prepara un correo en la aplicación de correo del visitante. No almacena datos ni requiere servidor. Para registro real con almacenamiento, conecta un formulario externo (por ejemplo Google Forms) o un endpoint propio y cambia el comportamiento en `script.js`.

## Gratuito
GitHub Pages permite alojar este sitio como página estática desde un repositorio público. La dirección `github.io` es un subdominio gratuito; un dominio propio normalmente tiene costo.
