---
lang: es
title: "Pasarelas de pago en Perú: cuál elegir para tu web"
heading: "Pasarelas de pago en Perú: Niubiz, Culqi, Izipay y Mercado Pago"
description: "Comparación práctica de las pasarelas de pago en Perú para tu tienda online: criterios de elección, integración con Yape y Plin, y las preguntas exactas que debes hacerle a cada proveedor."
pubDate: 2026-06-16
updatedDate: 2026-07-28
service: web
tags: ["Ecommerce", "Pagos", "Perú"]
faqs:
  - q: "¿Cuál es la pasarela de pago más barata en Perú?"
    a: "No hay una respuesta fija: las comisiones se negocian según tu volumen y rubro, y cambian con el tiempo. Pide siempre la tarifa por escrito incluyendo comisión por transacción, cargo fijo, IGV y costo de contracargos, y compara sobre tu volumen mensual real."
  - q: "¿Puedo aceptar Yape y Plin en mi tienda online?"
    a: "Sí. Varias pasarelas ya lo ofrecen dentro de su checkout, y también existe la opción de generar un QR o un enlace de pago. Para el comprador peruano ya es un método esperado, así que vale la pena incluirlo desde el lanzamiento."
  - q: "¿Cuánto demora recibir el dinero de mis ventas?"
    a: "Varía entre 24 horas y una semana según el proveedor y el acuerdo. Es un dato tan importante como la comisión: si tienes que reponer inventario semanalmente, un abono a 7 días te aprieta el flujo de caja."
  - q: "¿Necesito certificación PCI para cobrar con tarjeta?"
    a: "Si usas el checkout alojado o el formulario embebido de la pasarela, los datos de la tarjeta nunca tocan tu servidor y el alcance de PCI se reduce muchísimo. Evita construir tu propio formulario de tarjeta salvo que tengas una razón muy fuerte."
---

Elegir pasarela de pago es una de esas decisiones que parecen técnicas y en realidad son de negocio: afectan tu tasa de conversión, tu flujo de caja y cuánto trabajo manual hace tu equipo cada semana. Esta guía no te va a dar una tabla de comisiones —cambian constantemente y se negocian caso por caso— sino algo más duradero: **cómo decidir y qué preguntar**.

## Los cuatro nombres que vas a evaluar

**Niubiz** (ex Visanet) es el procesador con mayor presencia histórica en el comercio peruano y muy buena aceptación con tarjetas locales. Es la opción más "bancaria" del grupo: sólida, con respaldo, y con un proceso de afiliación más formal.

**Izipay** creció fuerte en comercios pequeños y medianos y tiene una propuesta cómoda para quien además vende presencialmente, porque combina el mundo físico y el online.

**Culqi** es la que suele preferir el equipo técnico: documentación clara, integración rápida y buena experiencia de desarrollador. Si tu tienda es a medida, esto se traduce en menos horas de desarrollo.

**Mercado Pago** aporta dos cosas que las otras no traen de fábrica: la billetera con saldo de usuarios que ya la usan, y cuotas. Si vendes tickets altos, el financiamiento importa.

Y luego está lo que no es exactamente una pasarela pero define la conversión en Perú: **Yape y Plin**. Ignorarlos hoy es dejar ventas en la mesa.

## Los seis criterios que realmente deciden

### 1. Tasa de aprobación

Es el criterio más importante y el que casi nadie evalúa. De poco sirve una comisión 0.3 puntos más baja si rechaza más transacciones legítimas. Pregunta por la tasa de aprobación en tu rubro y, si puedes, corre una prueba en paralelo durante un mes.

### 2. Costo total, no solo la comisión

Suma: comisión porcentual + cargo fijo por transacción + IGV + costo de contracargo + costo de mantenimiento mensual + costo de retiro. Y luego calcúlalo sobre **tu** ticket promedio. Con tickets bajos, el cargo fijo pesa más que el porcentaje; con tickets altos, al revés.

### 3. Plazo de abono

¿24 horas, 48 horas, 7 días? Esto no aparece en los comparativos y es lo que te ahoga o te libera el flujo de caja.

### 4. Métodos de pago cubiertos

Tarjetas de crédito y débito, Yape/Plin, cuotas, pago en efectivo o agentes, transferencias. Cada método que agregas suma conversión, pero también suma casos que tu operación debe manejar.

### 5. Calidad de la integración

Documentación, ambiente de pruebas de verdad, **webhooks** confiables y SDKs mantenidos. Un detalle no negociable: tu tienda debe confirmar el pago por webhook del servidor, nunca por el simple retorno del usuario al navegador. Si no, tendrás pedidos pagados que nunca se registraron.

### 6. Soporte

Cuando un pago falle un sábado, ¿a quién escribes y en cuánto responde? Pregunta por canal y tiempo de respuesta comprometido, no por "soporte 24/7" en la web.

## Cómo lo decidimos nosotros en un proyecto real

1. **Si el cliente ya tiene POS de un banco**, empezamos evaluando la pasarela de ese mismo ecosistema: la afiliación es más simple y la conciliación también.
2. **Si el ticket promedio es alto** (más de S/ 500), priorizamos cuotas.
3. **Si el volumen es bajo y el equipo técnico pequeño**, priorizamos velocidad de integración: salir a producción rápido vale más que ahorrar unas décimas de comisión.
4. **Siempre** incluimos Yape/Plin y un canal de WhatsApp visible para cerrar la venta cuando el pago falle.
5. **Siempre** dejamos la arquitectura preparada para más de una pasarela. No por usarlas todas a la vez, sino para poder cambiar sin reconstruir el checkout.

Ese último punto salva proyectos. La pasarela que elijas hoy puede subirte comisiones, cambiar términos o darte mal servicio. Si tu tienda está acoplada a una sola implementación, migrar cuesta semanas. Si la capa de pagos está bien aislada, cuesta días.

## Preguntas para enviar por correo a cada proveedor

Copia esto tal cual y pídelo por escrito:

1. Comisión por transacción para mi rubro y volumen estimado, con IGV incluido.
2. Cargo fijo por operación, si existe.
3. Costo de afiliación, mantenimiento mensual y retiro de fondos.
4. Plazo de abono a mi cuenta bancaria.
5. Métodos soportados: tarjetas, Yape, Plin, cuotas, efectivo.
6. Tasa de aprobación promedio en mi rubro.
7. Política de contracargos: costo, plazo y quién asume el riesgo.
8. ¿Hay ambiente de pruebas y webhooks documentados?
9. Canal y tiempo de respuesta de soporte.
10. ¿Hay permanencia mínima o penalidad por salir?

Con esas diez respuestas al lado, la decisión se toma sola.

## Un error que cuesta ventas

Muchas tiendas peruanas tienen un checkout de cinco pasos con creación de cuenta obligatoria. Cada paso extra pierde compradores. Antes de optimizar la comisión de tu pasarela —que te puede ahorrar unos cientos de soles al año— optimiza el checkout: acortarlo suele mover la conversión varios puntos, y eso vale mucho más.

---

**¿Estás montando tu tienda?** Integramos pasarelas peruanas, Yape/Plin, envíos y facturación electrónica, con la capa de pagos bien aislada para que puedas cambiar de proveedor sin rehacer nada. Mira [desarrollo web y tiendas online](/es/desarrollo-web/) o empieza por la [guía para crear tu tienda online en Perú](/es/blog/como-crear-una-tienda-online-en-peru/).
