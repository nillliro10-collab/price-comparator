# Resumen Ejecutivo: Motor de Comparación de Precios y Afiliación

Hola,

Te escribo para presentarte en detalle la infraestructura tecnológica y el modelo de negocio del proyecto en el que estamos trabajando. Hemos construido un **comparador de precios automatizado** diseñado desde cero para escalar y monetizar a través de redes de afiliación (actualmente AWIN / Zalando, con miras a expandirnos).

A continuación te detallo cómo funciona el negocio, la arquitectura técnica que lo sostiene y las medidas de seguridad que hemos implementado.

---

## 1. El Modelo de Negocio: Cómo hacemos dinero

Nuestro enfoque es la monetización pasiva mediante **Marketing de Afiliación**.

*   **El Problema:** El usuario quiere unas zapatillas concretas (ej. *Nike Air Force 1*), en una talla específica, pero los precios y el stock varían enormemente entre Zalando, JD Sports, FootLocker, etc.
*   **Nuestra Solución:** Una plataforma que consolida el catálogo de todas estas tiendas y le muestra al usuario en qué tienda está su talla exacta al precio más bajo.
*   **La Monetización:** No vendemos producto ni gestionamos envíos. Redirigimos la intención de compra del usuario hacia la tienda final mediante **enlaces de afiliado con parámetros de tracking (deeplinks)**. Cada vez que el usuario hace clic y compra, la red de afiliación (como AWIN) nos paga una comisión. 
*   **El Diferenciador:** Nos alejamos del modelo tradicional de "blogs de reseñas". Generamos miles de **páginas SEO transaccionales de alta intención de compra** de forma programática (ej. `/nike/air-force-1/talla-42`). Atacamos el *long-tail* donde la conversión es altísima.

## 2. Estado Actual y Siguientes Pasos

**¿Qué tenemos hoy?**
Ya no es una idea en papel; es un motor funcional desplegado en la nube (**Vercel**).
1.  Hemos desarrollado un **Importer Automatizado** (vía Cronjobs). La plataforma se conecta cada 6 horas a los feeds en crudo (CSV) de las redes de afiliación, los procesa, limpia y actualiza los precios y el stock en nuestra base de datos sin intervención humana.
2.  Tenemos las rutas SEO dinámicas preparadas y el sitemap configurándose automáticamente para que Google empiece a indexar nuestro catálogo masivo.

**¿Qué queremos hacer a continuación?**
*   **Integración de mercados secundarios:** Queremos ir más allá de las tiendas tradicionales y empezar a parsear ofertas de plataformas de segunda mano como **Wallapop** o **Vinted**. Si logramos cruzar el precio "Retail" con el precio "Segunda Mano" en la misma comparativa, el valor aportado al usuario se multiplica y nuestro posicionamiento SEO se vuelve invencible.
*   **Matching Inteligente:** Implementar algoritmos de deduplicación avanzados basados en EAN para garantizar que estamos comparando peras con peras en catálogos desestructurados.
*   **Optimización de CTR:** Mejorar las métricas de conversión refinando dónde y cómo ponemos nuestros botones de "Ver Oferta".

## 3. Seguridad y Arquitectura de Backend

No hemos construido un MVP frágil; hemos diseñado una arquitectura lista para producción con los siguientes estándares:

*   **Infraestructura:** Desplegado en **Vercel** con un entorno *Serverless*, lo que significa que la plataforma escala instantáneamente si recibimos picos de tráfico.
*   **Backend y Base de Datos:** Usamos **Next.js (App Router)** junto con **Prisma ORM** y **SQLite**. Todo el código está tipado estrictamente con TypeScript.
*   **Seguridad del Panel de Administración:** Hemos protegido el panel de control (`/admin`) mediante autenticación **Basic Auth** a nivel de Middleware. Ningún rastreador ni usuario no autorizado puede acceder al centro de mandos ni ejecutar importaciones.
*   **Validación de Datos (Scorched Earth):** Para evitar inyecciones de datos corruptos desde los feeds de AWIN, utilizamos **Zod** como barrera de seguridad. Si una fila del CSV no cumple estrictamente el esquema (precios válidos, URLs reales, formatos correctos), el sistema rechaza esa fila en lugar de corromper la base de datos de producción.

En resumen: tenemos una máquina construida para ingerir datos masivos, cruzarlos, exponerlos a Google mediante SEO programático y cobrar comisiones de forma automatizada, todo bajo una infraestructura blindada.
