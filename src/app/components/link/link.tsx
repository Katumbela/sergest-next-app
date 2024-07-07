import { ReactNode } from "react";

interface CTProps {
  children: ReactNode;
  className?: string;
  to?: string;
}

export function LinkTo({ children, to, className }: CTProps) {
  return (
    <a
      href={to}
      className={` py-1 transition-all border-b-4 border-white  hover:border-primary  ${className} `}
    >
      {children}
    </a>
  );
}
