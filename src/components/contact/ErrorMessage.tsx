import { AlertCircle } from 'lucide-react';

export function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="error-message" role="alert">
      <AlertCircle size={16} />
      {message}
    </p>
  );
}
