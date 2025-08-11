'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

import { rehypeImageWrapper } from '@/lib/rehype-image-wrapper'

interface MarkdownRendererProps {
  content: string
  className?: string
  images?: string[]
}

export function MarkdownRenderer({ content, className, images = [] }: MarkdownRendererProps) {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const handleImageError = (src: string) => {
    setImageErrors(prev => new Set(prev).add(src))
  }

  return (
    <div className={cn('prose prose-slate max-w-none dark:prose-invert', className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeImageWrapper]}
        components={{
          h1: ({ children, ...props }) => (
            <h1 className="text-4xl font-bold tracking-tight mb-6" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-8" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="text-2xl font-semibold tracking-tight mb-3 mt-6" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 className="text-xl font-semibold tracking-tight mb-2 mt-4" {...props}>
              {children}
            </h4>
          ),
          p: ({ children, ...props }) => (
            <p className="leading-7 mb-4" {...props}>
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="my-6 ml-6 list-disc" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="my-6 ml-6 list-decimal" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="mt-2" {...props}>
              {children}
            </li>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote className="mt-6 border-l-2 pl-6 italic" {...props}>
              {children}
            </blockquote>
          ),
          code: ({ children, className, ...props }) => {
            const isInline = !className
            if (isInline) {
              return (
                <code
                  className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
                  {...props}
                >
                  {children}
                </code>
              )
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          pre: ({ children, ...props }) => (
            <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4" {...props}>
              {children}
            </pre>
          ),
          table: ({ children, ...props }) => (
            <div className="my-6 w-full overflow-y-auto">
              <table className="w-full" {...props}>
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }) => (
            <th className="border px-4 py-2 text-left font-bold" {...props}>
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="border px-4 py-2" {...props}>
              {children}
            </td>
          ),
          hr: ({ ...props }) => (
            <hr className="my-8 border-border" {...props} />
          ),
          strong: ({ children, ...props }) => (
            <strong className="font-semibold" {...props}>
              {children}
            </strong>
          ),
          em: ({ children, ...props }) => (
            <em className="italic" {...props}>
              {children}
            </em>
          ),
          img: ({ src, alt, ...props }) => {
            if (!src) return null

            return (
              <Image
                src={src}
                alt={alt || 'Hình ảnh minh họa'}
                width={800}
                height={600}
                className="rounded-lg"
                style={{ width: 'auto', height: 'auto' }}
                {...props}
              />
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
      
      {/* Display images if provided */}
      {images.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">
            Hình ảnh minh họa
          </h2>
          <div className="grid gap-8">
            {images.map((imagePath, index) => {
              if (imageErrors.has(imagePath)) return null

              const fileName = imagePath.split('/').pop()?.replace(/^\d+_/, '').replace(/\.(png|jpg|jpeg|gif|webp)$/i, '') || ''

              return (
                <div key={imagePath} className="group">
                  <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative bg-muted/20">
                      <Image
                        src={imagePath}
                        alt={`Hình ${index + 1}: ${fileName}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto max-w-full object-contain"
                        onError={() => handleImageError(imagePath)}
                        priority={index < 3} // Prioritize first 3 images
                      />
                    </div>
                    <div className="p-4 bg-card">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-sm text-foreground mb-1">
                            Hình {index + 1}
                          </p>
                          <p className="text-sm text-muted-foreground capitalize">
                            {fileName.replace(/_/g, ' ')}
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {imagePath.split('/').pop()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
