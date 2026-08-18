import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "ghost" | "teal";
  external?: boolean;
  download?: string | boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "gold",
  external,
  download,
  className = "",
}: Props) {
  const styles = {
    gold: "bg-[linear-gradient(180deg,#f3dc97,#c9a047)] text-[#1a1408] hover:brightness-110",
    teal: "bg-[#1ad4c8] text-[#05211f] hover:bg-[#43e4da]",
    ghost:
      "border border-[rgba(243,234,216,0.18)] text-[#f3ead8] hover:border-[#1ad4c8] hover:text-white",
  }[variant];

  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition ${styles} ${className}`;

  if (download) {
    return (
      <a
        href={href}
        download={download === true ? true : download}
        className={cls}
      >
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
