'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageDisplayProps {
  src: string
  alt?: string
  caption?: string
  className?: string
}

export function ImageDisplay({ src, alt, caption, className = '' }: ImageDisplayProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError || !src) {
    return null
  }

  return (
    <span className={`block my-6 md:my-8 group ${className}`}>
      <span className="block border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <span className="block relative bg-muted/20">
          <Image
            src={src}
            alt={alt || 'Hình ảnh minh họa'}
            width={1200}
            height={800}
            className="w-full h-auto max-w-full object-contain"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </span>
        {(alt || caption) && (
          <span className="block p-3 md:p-4 bg-card">
            <span className="block text-xs md:text-sm text-muted-foreground text-center">
              {caption || alt}
            </span>
          </span>
        )}
      </span>
    </span>
  )
}
