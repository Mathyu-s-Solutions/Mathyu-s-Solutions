---
lang: es
title: "Chatbot de WhatsApp para empresas en Perú: guía 2026"
heading: "Chatbot de WhatsApp para empresas en Perú: qué es, cuánto cuesta y cómo implementarlo"
description: "Cómo automatizar la atención por WhatsApp con IA en Perú: qué puede y qué no puede hacer un chatbot, costos de la API oficial, tiempos de implementación y errores comunes."
pubDate: 2026-05-20
updatedDate: 2026-07-28
service: ai
tags: ["Inteligencia artificial", "WhatsApp", "Automatización"]
faqs:
  - q: "¿Puedo poner un chatbot en mi WhatsApp normal?"
    a: "No de forma confiable ni permitida. Para automatizar necesitas WhatsApp Business Platform (la API oficial de Meta). Las soluciones que automatizan el WhatsApp común operan fuera de los términos de servicio y te exponen a que bloqueen tu número."
  - q: "¿Cuánto cuesta un chatbot de WhatsApp en Perú?"
    a: "La implementación arranca desde S/ 2,500 (US$ 1,000 fuera de Perú) según integraciones. Aparte tienes dos costos recurrentes: las conversaciones facturadas por Meta y el consumo del modelo de IA, que en volúmenes de PyME suele quedar entre US$ 10 y US$ 60 al mes."
  - q: "¿El chatbot va a inventar respuestas?"
    a: "Puede, si está mal construido. Se evita conectando el modelo únicamente a tu información real (catálogo, precios, políticas), restringiendo el alcance de lo que puede responder y derivando a una persona cuando no tiene una respuesta respaldada."
  - q: "¿Reemplaza a mi equipo de atención?"
    a: "No debería. Lo que hace bien es absorber el 60–80% de consultas repetitivas (precios, horarios, stock, estado de pedido) para que tu equipo dedique el tiempo a lo que sí cierra ventas."
---

En Perú el 90% de las conversaciones comerciales pasa por WhatsApp. También pasa que un negocio pequeño recibe la misma pregunta —"¿cuánto cuesta?", "¿tienen stock?", "¿a qué hora abren?"— cincuenta veces al día, y que las consultas de la noche se responden al día siguiente, cuando el cliente ya compró en otro lado.

Eso es exactamente lo que un chatbot bien hecho resuelve. Y también hay cosas que **no** resuelve. Vamos con las dos.

## Qué puede hacer realmente un chatbot con IA

- **Responder con tu información**, no con generalidades: precios, disponibilidad, horarios, cobertura de envío, políticas de garantía.
- **Atender 24/7**, incluidos fines de semana y feriados, que es cuando más consultas se pierden.
- **Tomar pedidos y reservas** y registrarlos directamente en tu sistema.
- **Consultar el estado de un pedido** con solo el número de orden.
- **Calificar al interesado** antes de pasarlo a una persona: qué necesita, presupuesto, urgencia.
- **Derivar a un humano** en cuanto la conversación se sale del guion o el cliente lo pide.
- **Enviar recordatorios** de citas y avisos de despacho.

Lo que **no** debe hacer: negociar descuentos por su cuenta, dar información legal o médica sensible, o insistir en responder cuando no sabe. Un chatbot que dice "esto se lo confirma un asesor en un momento" es mejor producto que uno que inventa.

## La parte que casi nadie te explica: la API oficial

Para automatizar WhatsApp de forma legítima necesitas **WhatsApp Business Platform** (la API de Meta). Esto implica:

1. Una **cuenta de WhatsApp Business** verificada y un **Business Manager** de Meta.
2. Verificación de tu empresa (te pedirán documentos, por ejemplo la ficha RUC).
3. Un **número dedicado** para el bot. Puedes migrar el que ya usas, pero pierde la app de WhatsApp Business en el celular: la atención pasa a hacerse desde una bandeja web.
4. **Plantillas aprobadas** por Meta para iniciar conversaciones. Dentro de una conversación abierta puedes responder libre; para escribir tú primero, la plantilla tiene que estar aprobada.

Ese punto 3 es el que más sorprende a los dueños de negocio, así que decídelo antes de empezar. Una opción prudente: dejar tu número humano como está y usar un número nuevo para el canal automatizado.

### Costos recurrentes

Meta factura por conversación, con precios distintos para conversaciones de servicio, marketing y utilidad, y con un tramo mensual sin costo. A eso súmale el consumo del modelo de IA, que se cobra por texto procesado y es sorprendentemente barato en volúmenes de PyME. En negocios que hemos implementado, la factura combinada mensual típica está en el rango de **US$ 20 a US$ 120**, dominada por el volumen de conversaciones, no por la IA.

## Cómo se construye uno que funciona

**1. Recolectar la verdad.** Catálogo, precios, políticas, preguntas frecuentes reales. El insumo más valioso son tus últimos 200 chats: ahí está literalmente escrito lo que la gente pregunta.

**2. Base de conocimiento, no memoria del modelo.** La información de tu negocio se guarda aparte y se le entrega al modelo en cada consulta (esto se llama RAG). ¿Por qué importa? Porque así, cuando cambias un precio, actualizas un documento y el bot responde bien **al instante**, sin reentrenar nada.

**3. Reglas y límites.** Qué puede responder, qué debe derivar, qué tono usa, qué nunca dice. Sin esto, tienes un chat genérico y no un asesor de tu negocio.

**4. Integraciones.** Aquí está el valor real: conectar con tu catálogo, tu sistema de pedidos, tu calendario de citas o tu CRM. Un bot que solo conversa es una demo; uno que registra un pedido es una herramienta.

**5. Traspaso a humano.** Bandeja compartida donde tu equipo ve la conversación completa y toma el control cuando hace falta.

**6. Pruebas con gente real.** Dos semanas de conversaciones reales revelan más que un mes de diseño.

## Cronograma realista

| Etapa | Duración |
| --- | --- |
| Verificación de Meta y alta del número | 3 – 10 días |
| Base de conocimiento y reglas | 1 – 2 semanas |
| Integraciones (catálogo, pedidos, CRM) | 1 – 3 semanas |
| Pruebas y ajuste de tono | 1 semana |
| **Total típico** | **4 – 6 semanas** |

## Errores comunes

- **Automatizar antes de ordenar.** Si tus precios no están escritos en ningún lado, el bot no tiene qué responder. Automatizar el caos produce caos más rápido.
- **Ocultar que es un bot.** Di que es un asistente y ofrece pasar con una persona. La gente lo acepta bien; lo que no perdona es sentirse engañada.
- **No medir.** Registra qué preguntan, qué no supo responder y cuántas conversaciones terminaron en venta. Esa lista de "no supo responder" es tu hoja de ruta de mejoras.
- **Elegir la herramienta antes del problema.** Primero define qué consultas quieres absorber; la plataforma se elige después.

## ¿Cómo saber si te conviene?

Haz una cuenta rápida: consultas repetitivas al día × minutos que toma responder cada una × 22 días. Si el resultado supera unas 20 horas al mes, un chatbot se paga solo — y eso sin contar las ventas que hoy pierdes fuera de horario, que en la mayoría de negocios que hemos medido son entre el 15% y el 30% de las consultas totales.

---

**¿Quieres ver cómo se vería con tu información?** Armamos un piloto con tu catálogo real y lo pruebas antes de decidir. Conoce nuestro servicio de [software con inteligencia artificial](/es/software-con-ia/) o escríbenos y lo conversamos.
