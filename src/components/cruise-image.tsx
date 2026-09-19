"use client";

import { ViewTransition } from "react";
import Image from "next/image";

export function CruiseImage({
  slug,
  src,
  alt,
  fill = false,
  priority = false,
  sizes,
  className,
  width,
  height,
}: {
  slug: string;
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <ViewTransition name={`cruise-image-${slug}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={className}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={className}
        />
      )}
    </ViewTransition>
  );
}
