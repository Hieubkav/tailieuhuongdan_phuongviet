'use client'

import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
  className?: string
  id?: string
}

export function Heading({ level, children, className, id, ...props }: HeadingProps) {
  // Extract anchor ID from children if it exists
  const processChildren = (children: ReactNode): { text: ReactNode; anchorId?: string } => {
    if (typeof children === 'string') {
      const match = children.match(/^(.*?)\s*\{#([^}]+)\}$/)
      if (match) {
        return {
          text: match[1].trim(),
          anchorId: match[2]
        }
      }
    }
    return { text: children }
  }

  const { text, anchorId } = processChildren(children)
  const finalId = id || anchorId

  const Component = `h${level}` as keyof React.JSX.IntrinsicElements

  const baseClasses = {
    1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
    3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    5: 'scroll-m-20 text-lg font-semibold tracking-tight',
    6: 'scroll-m-20 text-base font-semibold tracking-tight'
  }

  return (
    <Component
      id={finalId}
      className={cn(baseClasses[level], className)}
      {...props}
    >
      {text}
    </Component>
  )
}
