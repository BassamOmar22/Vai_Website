export function ArchitectureDiagramBlock({ route = 'ARCHITECTURE-GOVERNANCE' }: { route?: string }) {
  return (
    <div className="architecture-block" role="img" aria-label="Architecture and governance diagram placeholder">
      {['AG03 DATA_LAYER', 'AG03 DECISION_LAYER', 'AG03 WORKFLOW_LAYER', 'AG03 GOVERNANCE_LAYER'].map((label) => (
        <div className="architecture-layer" key={label}>
          [Awaiting VAI master copy: {route} {label}]
        </div>
      ))}
    </div>
  );
}
