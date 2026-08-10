---
lang: es
title: "Cómo crear una tienda online en Perú (guía 2026)"
heading: "Cómo crear una tienda online en Perú: guía paso a paso"
description: "Guía práctica para abrir tu tienda online en Perú: plataforma, pasarela de pago, envíos, facturación electrónica con SUNAT y los errores que hacen fracasar el 80% de los ecommerce."
pubDate: 2026-04-14
updatedDate: 2026-07-28
service: web
tags: ["Ecommerce", "Tienda online", "Perú"]
faqs:
  - q: "¿Necesito RUC para vender por internet en Perú?"
    a: "Si vendes de forma habitual, sí. Necesitas RUC activo y un régimen tributario adecuado (RUS, RER, MYPE Tributario o General según tu nivel de ventas). Además, para emitir comprobantes electrónicos necesitas un proveedor autorizado o el sistema gratuito de SUNAT."
  - q: "¿Cuánto tiempo toma lanzar una tienda online?"
    a: "Con catálogo listo y decisiones tomadas, entre 4 y 8 semanas. Lo que más retrasa un ecommerce no es programar: son las fotos, las fichas de producto y definir las reglas de envío."
  - q: "¿Qué pasarela de pago conviene en Perú?"
    a: "Depende del volumen y de con qué banco trabajas. Niubiz e Izipay tienen buena aceptación con tarjetas locales; Culqi es la integración más simple para desarrolladores; Mercado Pago suma cuotas y billetera. Lo ideal es ofrecer también Yape o Plin, que ya es un método esperado por el comprador peruano."
  - q: "¿Puedo empezar vendiendo solo por WhatsApp?"
    a: "Sí, y es una estrategia sensata para validar. Pero llega un punto en que responder precios y stock uno por uno te limita. La tienda online no reemplaza al WhatsApp: le quita el trabajo repetitivo y te deja cerrar ventas mientras duermes."
---

Abrir una tienda online en Perú es más fácil que nunca. Que **venda** sigue siendo igual de difícil. Esta guía cubre las decisiones que de verdad importan —en el orden en que hay que tomarlas— y los errores que vemos repetirse en proyectos que llegan a nosotros para ser rescatados.

## Paso 1: Antes de la tecnología, define la operación

El error más caro es empezar por la plataforma. Antes de eso, responde por escrito:

- **¿Cuántos productos tienes y con cuántas variantes?** 20 productos con talla y color son 20 productos, no 200. Pero la ficha se construye distinto.
- **¿Cómo entregas?** ¿Envío propio en Lima, courier a provincias, recojo en tienda? ¿Cobras el envío o lo incluyes?
- **¿Quién empaca y despacha?** Un ecommerce sin alguien responsable de la operación diaria muere en el mes dos.
- **¿Emites boleta y factura?** Casi siempre sí. Eso obliga a integrar facturación electrónica.
- **¿Manejas stock en otro sistema?** Si ya usas un ERP o un punto de venta, la tienda tiene que conversar con él o vas a vender lo que no tienes.

## Paso 2: Elige la plataforma con criterio

| Opción | Cuándo conviene | Cuidado con |
| --- | --- | --- |
| **Shopify** | Quieres lanzar rápido, catálogo mediano, poca personalización | Costo mensual + comisiones + apps que se acumulan |
| **WooCommerce** | Ya usas WordPress, quieres control total y bajo costo de licencia | Mantenimiento, seguridad y velocidad son tu responsabilidad |
| **Tienda a medida** | Tu operación tiene reglas propias, integración con ERP, volumen alto | Inversión inicial mayor; exige un proveedor serio |
| **Marketplace (Mercado Libre, Falabella)** | Quieres validar demanda sin construir nada | No es tuyo: no controlas la marca ni los datos del cliente |

Una recomendación honesta: **si estás empezando y tu catálogo es simple, no necesitas una tienda a medida.** Valida primero. La tienda a medida se justifica cuando la plataforma estándar te empieza a estorbar.

## Paso 3: Pagos

En Perú el comprador espera opciones. Un checkout con solo tarjeta pierde ventas.

- **Tarjetas:** Niubiz (ex Visanet), Izipay, Culqi o Mercado Pago. Compara la comisión por transacción, el plazo de abono (24 h vs. 7 días cambia tu flujo de caja) y qué tan buena es su tasa de aprobación con tarjetas peruanas.
- **Yape y Plin:** ya no son opcionales. Para muchos compradores son el método por defecto.
- **Pago contra entrega:** aumenta conversión y también aumenta devoluciones. Úsalo con control.
- **Cuotas sin intereses:** poderoso en tickets altos.

Detalle técnico que ahorra dolores: exige que la pasarela devuelva **webhooks** para confirmar pagos. Si tu tienda depende de que el usuario "regrese" a la página después de pagar, vas a tener pedidos pagados que nunca se registran.

## Paso 4: Facturación electrónica

Si emites comprobantes, tu tienda tiene que integrarse con facturación electrónica (vía un PSE/OSE autorizado o el sistema de SUNAT). Puntos donde la gente tropieza:

- Necesitas **certificado digital** vigente.
- Boleta y factura tienen reglas distintas y campos distintos.
- Las **notas de crédito** para devoluciones también deben emitirse electrónicamente.
- Un pedido cancelado tras el pago exige devolución **y** nota de crédito. Automatiza esto o se convierte en trabajo manual diario.

## Paso 5: Envíos

Define zonas y tarifas antes de programar nada. Lo más común en Perú:

- **Lima Metropolitana:** tarifa plana por distrito o por rango de distancia, con opción de envío el mismo día en zonas cercanas.
- **Provincias:** integración con courier (Olva, Shalom, Urbano) o tarifa fija por región.
- **Envío gratis sobre cierto monto:** es la palanca de ticket promedio más efectiva que existe. Calcula el umbral con tu margen, no al ojo.

## Paso 6: SEO desde el día uno, no después

Una tienda online sin tráfico orgánico depende 100% de pagar publicidad. Lo mínimo indispensable:

- **URLs limpias y estables:** `/zapatillas-running/` y no `/producto?id=482`. Cambiar URLs después cuesta tráfico.
- **Fichas de producto con texto propio.** Copiar la descripción del proveedor te convierte en contenido duplicado frente a otras 40 tiendas.
- **Datos estructurados `Product`** con precio, disponibilidad y moneda: es lo que hace que Google muestre el precio en los resultados.
- **Categorías con contenido**, no solo una grilla de productos.
- **Velocidad.** Las imágenes sin comprimir son la causa número uno de tiendas lentas.
- **Búsqueda interna que funcione**, y revisa qué busca la gente ahí: es tu mejor investigación de palabras clave gratis.

## Paso 7: Mide lo correcto

Instala Google Analytics 4 con ecommerce activado y **Search Console** desde el primer día. Los números que deberías mirar cada semana:

1. Tasa de conversión (visitas → pedidos). Un 1–2% es normal; menos de 0.5% indica un problema de confianza, precio o checkout.
2. Abandono de carrito por paso: te dice exactamente dónde se cae la venta.
3. Ticket promedio.
4. Costo de adquisición si haces publicidad.

## Los 5 errores que hunden tiendas en Perú

1. **Fotos malas.** Es el factor de conversión más subestimado. Invierte en fotografía antes que en publicidad.
2. **Checkout largo.** Cada campo extra cuesta ventas. Pide lo mínimo y no obligues a crear cuenta.
3. **Sin señales de confianza.** RUC visible, razón social, teléfono real, política de devoluciones, reseñas. El comprador peruano desconfía por defecto y hace bien.
4. **Sin WhatsApp visible.** Muchas compras se cierran resolviendo una duda. Deja el botón a la vista.
5. **Lanzar y esperar.** Una tienda sin plan de tráfico —SEO, contenido, redes o pauta— no vende. La tienda es la herramienta, no la estrategia.

---

**¿Quieres lanzar bien desde el inicio?** Construimos tiendas online integradas con pasarelas peruanas, facturación electrónica y couriers, con SEO técnico incluido. Mira el servicio de [desarrollo web y tiendas online](/es/desarrollo-web/) o revisa [cuánto cuesta una página web en Perú](/es/blog/cuanto-cuesta-una-pagina-web-en-peru/) para presupuestar.
