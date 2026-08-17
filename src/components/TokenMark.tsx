import Image from "next/image";

export function TokenMark({
  src,
  alt,
  size = 56,
  className = "",
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  const classes = `rounded-full ${className}`;

  if (src.endsWith(".gif")) {
    return (
      // Animated GIF — next/image would flatten the motion.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} width={size} height={size} className={classes} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={classes}
    />
  );
}
