export function ArchitectureDiagramBlock({ labels }: { labels: string[] }) {
  return (
    <div className="architecture-block" role="img" aria-label="Architecture and governance model">
      <div className="architecture-connector" />
      {labels.map((label, index) => (
        <div className="architecture-layer" key={label}>
          <span>{String(index + 1).padStart(2, '0')}</span>{label}
        </div>
      ))}
    </div>
  );
}
