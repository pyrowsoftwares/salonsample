import React, { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  wrapperClassName?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  className,
  wrapperClassName,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#241E1A] ${wrapperClassName || ""}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${className || ""}`}
          loading="lazy"
          onError={() => setHasError(true)}
          {...props}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#241E1A] to-[#34302D] text-[#FAF7F2]">
          <span className="text-2xl text-[#A87556] mb-2 font-serif">✦</span>
          <span className="text-xs uppercase tracking-widest text-[#DED3C5]/80 font-sans font-medium line-clamp-2">
            {alt || "Aurel Studio"}
          </span>
        </div>
      )}
    </div>
  );
}
