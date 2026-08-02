import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: "primary" | "secondary" };

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const styles = variant === "primary" ? "bg-mint text-ink hover:bg-[#a5ffe1]" : "border border-white/15 bg-white/[.03] text-cloud hover:border-mint/60 hover:text-mint";
  return <a className={`inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-mint focus:ring-offset-2 focus:ring-offset-ink ${styles} ${className}`} {...props}>{children}<span aria-hidden>↗</span></a>;
}
