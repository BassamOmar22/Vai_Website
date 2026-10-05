type MethodStepProps = {
  step: string;
  title: string;
  body: string;
};

export function MethodStep({ step, title, body }: MethodStepProps) {
  return (
    <article className="method-step">
      <div className="step-index">{step}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
