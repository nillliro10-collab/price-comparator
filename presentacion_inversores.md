# Pitch Deck & Documento de Arquitectura: Plataforma de Comparación de Precios y Afiliación

*Este documento está diseñado como guion o estructura base para una presentación (Pitch Deck) ante perfiles técnicos, de negocio o posibles inversores (como tu tío).*

---

## 1. Resumen Ejecutivo y Propuesta de Valor

**La Visión:** Convertirnos en el punto de partida obligatorio para cualquier consumidor que busque comprar zapatillas y moda urbana online, garantizando siempre el mejor precio disponible.

**Qué somos:** Somos una **plataforma tecnológica automatizada (motor de comparación)** que agrega catálogos masivos de las principales tiendas retail y plataformas de afiliación, normaliza los datos y expone los resultados a través de páginas altamente optimizadas para captar tráfico con intención de compra directa.

No somos un e-commerce; no tenemos inventario, ni pasarelas de pago, ni logística, ni devoluciones. Somos una empresa de datos y tráfico que cobra un peaje (comisión) por dirigir compradores cualificados a las tiendas finales.

---

## 2. El Problema y la Oportunidad de Mercado

**El Problema del Consumidor:**
El mercado del calzado y la moda urbana está hiper-fragmentado. Un usuario que busca unas *Nike Air Force 1 Blancas en talla 42* tiene que abrir 10 pestañas distintas (Zalando, JD Sports, FootLocker, Nike oficial) para comprobar precio, coste de envío y, lo más crítico: **disponibilidad de stock real en su talla**. Es un proceso frustrante, lento y manual.

**La Oportunidad:**
Quien resuelve esta fricción, se lleva la venta. Los comparadores de precios tradicionales son lentos, sus datos están desactualizados y no permiten un filtrado preciso por talla a nivel de variante. 

---

## 3. Nuestra Solución: El Comparador

Hemos construido un motor que hace el trabajo sucio por el usuario en milisegundos:
*   **Búsqueda Granular:** Permite al usuario buscar no solo por modelo, sino ver instantáneamente una tabla comparativa de precios para su talla exacta.
*   **Coste Real:** Nuestra comparativa no muestra precios "trampa"; sumamos el precio base más los gastos de envío (`price + shipping`) para dar el precio final absoluto.
*   **Experiencia de Usuario (UX) Brutalista:** Sin fricciones. El usuario entra, ve su talla, ve que Zalando es 5€ más barato, hace clic y compra.

---

## 4. Modelo de Negocio y Monetización (La Máquina de Dinero)

Nuestro modelo es el **Marketing de Afiliación a gran escala**.

1.  **Redes de Afiliación (AWIN, CJ, etc.):** Nos damos de alta como *publishers* en programas de afiliación de grandes retailers (ej. Zalando).
2.  **Generación de Deeplinks:** Cuando un usuario hace clic en nuestro botón "Ver Oferta", no va a la URL limpia. Pasa por nuestra plantilla de ruteo (`deeplinkTemplate`) que inyecta nuestro identificador único (ClickID).
3.  **Comisiones Pasivas:** Si el usuario realiza una compra (o incluso si compra otro producto durante la ventana de cookies de 30 días), nosotros recibimos entre un 5% y un 12% del valor del carrito. 

Es un modelo de **ingresos 100% netos y escalables**, sin riesgo de inventario.

---

## 5. Adquisición de Usuarios (Go-to-Market y SEO Programático)

No dependemos de Ads (pago por clic) para sobrevivir. Nuestra estrategia de adquisición es puramente orgánica y técnica.

**Fase 1: SEO Programático (Escalabilidad de Tráfico)**
En lugar de escribir artículos de blog que nadie lee, hemos desarrollado una arquitectura que genera páginas automáticamente basándose en la base de datos.
*   Interceptamos búsquedas *Long-Tail* (ej. "Nike Air Force 1 talla 42 baratas").
*   El sistema ha generado de golpe el esqueleto para interceptar miles de combinaciones: `[Marca] + [Modelo] + [Talla]`.
*   Estas páginas (ej. `/nike/air-force-1/talla-42`) tienen *Titles* y *Metadatos* dinámicos que inyectan el precio mínimo en tiempo real ("desde 89€"), destrozando el CTR (Click-Through Rate) de la competencia en las SERPs de Google.

**Fase 2: Marketing de Guerrilla (Tráfico Semilla)**
Mientras Google indexa nuestro Sitemap masivo, generamos nuestros primeros clics inyectándonos en comunidades orgánicas (Reddit, Forocoches, TikTok, Discords de Sneakers), actuando como usuarios que aportan valor mediante comparativas reales, generando tracción inicial y retroalimentando nuestro posicionamiento.

---

## 6. Arquitectura Técnica e Infraestructura (Cimientos de Acero)

Este no es un proyecto construido con WordPress; es software *custom* diseñado para rendimiento extremo.

*   **Infraestructura Cloud (Vercel):** Desplegado en un entorno *Serverless* de alta disponibilidad (Next.js App Router). Escalado infinito garantizado: si pasamos de 100 a 100,000 visitas en un día, los servidores se auto-escalan sin que hagamos nada, y pagamos por consumo de milisegundos.
*   **Ingesta de Datos (El "Scorched Earth Importer"):** 
    *   Hemos montado un **Cronjob Automático** que se ejecuta cada 6 horas.
    *   Este sistema se conecta de forma segura a los feeds FTP/HTTP privados de AWIN.
    *   Descarga el CSV completo, lo parsea, lo limpia (normalización de EANs y redondeos matemáticos de precios) y actualiza nuestra base de datos (SQLite vía Prisma ORM).
    *   Es 100% pasivo: el catálogo crece, los precios fluctúan y el stock se agota sin intervención humana.

---

## 7. Seguridad y Resiliencia del Dato

Para ser fiables frente a los usuarios, nuestros datos tienen que ser inmaculados.

*   **Filtro Anti-Basura (Zod Validation):** Los feeds de las marcas a menudo vienen corruptos. Hemos implementado esquemas de validación estrictos. Si una oferta entra con un precio nulo, un formato de URL roto o falta la talla, se descarta y se registra el error. Protegemos la integridad de nuestra base de datos por encima del volumen.
*   **Protección del Backend:** El panel de control y administración de importaciones (`/admin`) está fortificado con **Basic Authentication** a nivel de Middleware en el borde (Edge). Es inaccesible para <i>crawlers</i> o ataques de fuerza bruta comunes.

---

## 8. El Futuro: La Ventaja Competitiva Definitiva (Wallapop & Mercados Secundarios)

El próximo salto tecnológico que nos consolidará como el líder definitivo del nicho es la integración del **Mercado Secundario (Second Hand / Resell)**.

*   **El Plan:** Desarrollaremos web scrapers automatizados (o integraremos APIs) para ingerir ofertas en tiempo real de **Wallapop, Vinted y StockX**.
*   **El Impacto:** Cuando un usuario busque unas zapatillas, nuestra tabla comparativa mostrará en la misma pantalla:
    1.  *Zalando (Nuevo)*: 120€
    2.  *JD Sports (Nuevo)*: 115€
    3.  **Wallapop (Casi Nuevo)**: 45€
*   Este nivel de cruce de datos Retail vs. Second-Hand es un **océano azul**. Multiplica el valor aportado al usuario (ahorro extremo) y crea un foso defensivo inalcanzable para competidores tradicionales. Utilizaremos el **EAN (Código de Barras)** y modelos avanzados de "Smart Matching" para asegurar que la zapatilla de Wallapop es exactamente la misma variante que la de Nike.
