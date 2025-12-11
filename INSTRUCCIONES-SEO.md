# 📱 Instrucciones para SEO y WhatsApp Preview

## ✅ Cambios aplicados

He agregado todos los meta tags necesarios para SEO y redes sociales en `src/index.html`:
- Meta tags básicos de SEO
- Open Graph tags (para WhatsApp, Facebook)
- Twitter Cards
- Imagen de preview configurada

## 📸 Cómo subir tu imagen para WhatsApp

### Paso 1: Preparar la imagen

1. **Tamaño recomendado**: 1200 x 630 píxeles (formato horizontal)
2. **Formato**: JPG o PNG
3. **Nombre**: `preview.jpg` (o `preview.png`)
4. **Contenido sugerido**: 
   - Logo o título de tu proyecto
   - Texto principal: "Heurísticas de Usabilidad de Nielsen"
   - Diseño atractivo con colores de tu marca

### Paso 2: Subir la imagen

1. Copia tu imagen `preview.jpg` a la carpeta:
   ```
   c:\Users\Fr4nk\Documents\Nuevo-proyect\02-ui-componentes\public\assets\
   ```

2. La imagen debe quedar en:
   ```
   public/assets/preview.jpg
   ```

### Paso 3: Subir a GitHub

```powershell
# En la terminal de tu proyecto:
git add .
git commit -m "Agregar SEO y preview image para redes sociales"
git push origin main
```

### Paso 4: Verificar en GitHub Pages

1. Espera 2-3 minutos a que se despliegue
2. Visita tu página: https://miguelv145.github.io/02-ui-componentes/
3. Prueba compartir el link en WhatsApp

## 🧪 Probar antes de subir

Puedes probar cómo se verá en WhatsApp/Facebook usando:
- https://www.opengraph.xyz/
- https://developers.facebook.com/tools/debug/

Solo pega tu URL de GitHub Pages y verás el preview.

## 🎨 Crear imagen fácilmente (SIN código)

Puedes crear la imagen usando:
1. **Canva** (gratis): https://www.canva.com/
   - Busca plantilla "Open Graph" o crea 1200x630px
   - Agrega texto y diseño
   - Descarga como JPG

2. **Photopea** (gratis, como Photoshop online): https://www.photopea.com/
   - Crea nuevo proyecto 1200x630px
   - Diseña tu imagen
   - Exportar como JPG

3. **Paint** (Windows, muy básico):
   - Crear imagen 1200x630
   - Agregar texto
   - Guardar como JPG

## 📝 Personalizar textos

Si quieres cambiar el título o descripción que aparece en WhatsApp, edita en `src/index.html`:

```html
<!-- Cambiar título -->
<meta property="og:title" content="TU TÍTULO AQUÍ">

<!-- Cambiar descripción -->
<meta property="og:description" content="TU DESCRIPCIÓN AQUÍ">
```

## ⚙️ Actualizar URL del proyecto

Si tu repositorio de GitHub no es `miguelv145/02-ui-componentes`, actualiza las URLs en `src/index.html`:

Busca y reemplaza:
```
https://miguelv145.github.io/02-ui-componentes/
```

Por tu URL real:
```
https://TU-USUARIO.github.io/TU-REPO/
```

## 🚀 Desplegar a GitHub Pages

Si aún no lo has configurado:

1. En tu repositorio de GitHub → Settings → Pages
2. Source: "GitHub Actions" o "Deploy from branch: main"
3. Si usas branch, selecciona la carpeta `/root` o `/docs`

## ❓ Problemas comunes

### La imagen no aparece en WhatsApp
- Espera 5-10 minutos después de subir
- WhatsApp cachea las previews, usa un link diferente para probar
- Verifica que la imagen esté en `public/assets/preview.jpg`
- La URL debe ser la completa de GitHub Pages

### Los cambios no se reflejan
- Haz un "hard refresh" (Ctrl + F5) en el navegador
- Limpia el caché de WhatsApp
- Verifica que hiciste `git push` correctamente

### La imagen es muy pesada
- Comprímela en https://tinypng.com/
- Mantén el tamaño bajo 500KB
