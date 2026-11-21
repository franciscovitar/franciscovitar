import styles from "./SystemVisual.module.scss";

const visuals = {
  en: {
    overview: {
      label: "Engineering loop",
      footer: "Build → verify → ship → learn",
      nodes: [
        ["Product", "Interfaces people can actually use"],
        ["Data", "Sources, persistence and authority"],
        ["Quality", "Tests, QA and failure visibility"],
        ["AI", "Tool orchestration with review boundaries"],
      ],
    },
    vida: {
      label: "Vida 2.0 · system map",
      footer: "Private sources stay private",
      nodes: [
        ["01", "Notion · Sheets · Calendar"],
        ["02", "Typed adapters"],
        ["03", "Authenticated product surfaces"],
        ["04", "Safe-write policy boundaries"],
      ],
    },
    library: {
      label: "Library Network API · loan lifecycle",
      footer: "One copy · one active loan",
      nodes: [
        ["01", "Loan request + idempotency key"],
        ["02", "Lock copy + validate state"],
        ["03", "Transactional transfer records"],
        ["04", "Receive · use · return · close"],
      ],
    },
    webhook: {
      label: "Webhook Recovery Lab · delivery path",
      footer: "At-least-once transport · idempotent effect",
      nodes: [
        ["01", "Signed event + HMAC check"],
        ["02", "Durable inbox + job"],
        ["03", "Worker lease + delivery"],
        ["04", "Retry · dead-letter · replay"],
      ],
    },
    pas: {
      label: "Personal AI System · control path",
      footer: "AI output is not treated as proof",
      nodes: [
        ["01", "User goal"],
        ["02", "Routing + permissions"],
        ["03", "Canonical evidence"],
        ["04", "Verified state update"],
      ],
    },
    mediterranea: {
      label: "La Mediterránea · commerce path",
      footer: "Prepared payment boundary ≠ live payment",
      nodes: [
        ["01", "Storefront"],
        ["02", "Server checkout quote"],
        ["03", "Supabase + RLS"],
        ["04", "Admin / payment boundaries"],
      ],
    },
  },
  es: {
    overview: {
      label: "Loop de ingeniería",
      footer: "Construir → verificar → entregar → aprender",
      nodes: [
        ["Producto", "Interfaces útiles para personas reales"],
        ["Datos", "Fuentes, persistencia y autoridad"],
        ["Calidad", "Tests, QA y fallas visibles"],
        ["IA", "Orquestación con revisión explícita"],
      ],
    },
    vida: {
      label: "Vida 2.0 · mapa del sistema",
      footer: "Los datos privados siguen privados",
      nodes: [
        ["01", "Notion · Sheets · Calendar"],
        ["02", "Adaptadores tipados"],
        ["03", "Superficies autenticadas"],
        ["04", "Políticas para escrituras seguras"],
      ],
    },
    library: {
      label: "Library Network API · ciclo de préstamo",
      footer: "Un ejemplar · un préstamo activo",
      nodes: [
        ["01", "Solicitud + clave de idempotencia"],
        ["02", "Lock del ejemplar + validación"],
        ["03", "Transferencia transaccional"],
        ["04", "Recibir · usar · devolver · cerrar"],
      ],
    },
    webhook: {
      label: "Webhook Recovery Lab · flujo de entrega",
      footer: "Entrega al menos una vez · efecto idempotente",
      nodes: [
        ["01", "Evento firmado + verificación HMAC"],
        ["02", "Inbox + job durables"],
        ["03", "Lease de worker + entrega"],
        ["04", "Reintento · dead-letter · replay"],
      ],
    },
    pas: {
      label: "Personal AI System · flujo de control",
      footer: "La salida de IA no cuenta como prueba",
      nodes: [
        ["01", "Objetivo"],
        ["02", "Routing + permisos"],
        ["03", "Evidencia canónica"],
        ["04", "Estado verificado"],
      ],
    },
    mediterranea: {
      label: "La Mediterránea · flujo comercial",
      footer: "Integración preparada ≠ pago live",
      nodes: [
        ["01", "Storefront"],
        ["02", "Quote validada por servidor"],
        ["03", "Supabase + RLS"],
        ["04", "Límites admin / pagos"],
      ],
    },
  },
};

export default function SystemVisual({
  kind = "overview",
  compact = false,
  className = "",
  lang = "en",
}) {
  const language = visuals[lang] ? lang : "en";
  const visual = visuals[language][kind] || visuals[language].overview;

  return (
    <div
      className={[
        styles.frame,
        styles[kind],
        compact ? styles.compact : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={visual.label}
    >
      <div className={styles.windowBar}>
        <div className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span>{visual.label}</span>
      </div>

      <div className={styles.canvas}>
        <div className={styles.flow}>
          {visual.nodes.map(([key, value], index) => (
            <div className={styles.flowItem} key={key + value}>
              <div className={styles.node}>
                <span className={styles.nodeKey}>{key}</span>
                <strong>{value}</strong>
              </div>
              {index < visual.nodes.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <span />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.pulse} aria-hidden="true" />
        {visual.footer}
      </div>
    </div>
  );
}
