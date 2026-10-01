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
    football: {
      label: "Football Intelligence · data path",
      footer: "Public web path remains read-only",
      nodes: [
        ["01", "Source research"],
        ["02", "QA-approved package"],
        ["03", "PostgreSQL publication"],
        ["04", "Current / public read models"],
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
    football: {
      label: "Football Intelligence · flujo de datos",
      footer: "La web pública sigue read-only",
      nodes: [
        ["01", "Investigación"],
        ["02", "Paquete aprobado por QA"],
        ["03", "Publicación en PostgreSQL"],
        ["04", "Read models públicos"],
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
