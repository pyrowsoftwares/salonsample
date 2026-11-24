import React, { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  wrapperClassName?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
  className,
  wrapperClassName,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName || ""}`}>
      <img
        src={hasError ? fallbackSrc : imgSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${className || ""}`}
        loading="lazy"
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setImgSrc(fallbackSrc);
          }
        }}
        {...props}
      />
    </div>
  );
}
