import { ImageIcon } from "lucide-react";
import logoAsset from "@/assets/longli-logo.jpg.asset.json";

export function ProductImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  watermark = true,
}: {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  watermark?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`.trim()}>
        <img src={src} alt={alt} className={imgClassName} />
        {watermark && (
          <>
            {/* Top-right brand badge — covers any pre-existing third-party logos / stray AI text */}
            <div className="pointer-events-none absolute top-2 right-2 bg-white/95 backdrop-blur-sm rounded-md px-2 py-1 shadow-md flex items-center gap-1.5 border border-white">
              <img src={logoAsset.url} alt="LONGLI" className="h-5 w-auto object-contain" />
              <span className="text-[10px] font-bold tracking-wider text-[#1e3a8a]">LONGLI</span>
            </div>
            {/* Bottom-left subtle watermark */}
            <div className="pointer-events-none absolute bottom-2 left-2 opacity-70">
              <div className="bg-white/85 rounded px-1.5 py-0.5 shadow-sm">
                <img src={logoAsset.url} alt="" className="h-4 w-auto object-contain" />
              </div>
            </div>
          </>
        )}
      </div>
    );
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
