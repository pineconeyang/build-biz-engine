import { ImageIcon } from "lucide-react";

export function ProductImage({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  if (src) {
    return <img src={src} alt={alt} className={`${className} ${imgClassName}`.trim()} />;
  }
  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-secondary to-muted text-muted-foreground`.trim()}
      role="img"
      aria-label={`${alt} — image coming soon`}
    >
      <ImageIcon className="w-10 h-10 opacity-40" />
      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">Image coming soon</span>
    </div>
  );
}
