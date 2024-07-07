import { ReactNode } from "react";

interface CTProps {
  children: ReactNode;
  className?: string;
}

export function ColoredText({ children, className }: CTProps) {
  return (
    <span
      className={`bg-gradient-to-r ${className} from-sky-700  via-sky-300 to-green-400 text-transparent bg-clip-text animate-gradient`}
    >
      {children}
    </span>
  );
}
