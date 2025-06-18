export default function LargeComponent() {
  return (
    <div style={{ marginTop: 32, padding: 24, background: "#f0f0f0", borderRadius: 8 }}>
      <h2>Componente Grande</h2>
      <p>
        Este es un componente cargado de forma dinámica (lazy loading) usando <code>next/dynamic</code>.
        Así se mejora el rendimiento inicial de la página.
      </p>
    </div>
  );
}