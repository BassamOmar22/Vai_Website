type SectionHeaderProps = {
  eyebrow: string;
  title?: string;
  heading?: string;
  body?: string;
};

export function SectionHeader({ eyebrow, title, heading, body }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title ?? heading}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
