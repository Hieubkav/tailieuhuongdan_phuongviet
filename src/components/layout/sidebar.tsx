'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { sidebarItems, type SidebarItem } from './sidebar-data'


interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [currentHash, setCurrentHash] = useState('')

  // Listen for hash changes to update active states
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash)
    }

    // Set initial hash
    updateHash()

    // Listen for hash changes
    window.addEventListener('hashchange', updateHash)

    return () => {
      window.removeEventListener('hashchange', updateHash)
    }
  }, [])

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.title)
    const hasChildren = item.items && item.items.length > 0

    // Check if this is an anchor link (contains #) and is for the current page
    const isAnchorLink = item.href?.includes('#')
    const currentPagePath = pathname.split('#')[0]
    const linkPagePath = item.href?.split('#')[0]
    const isSamePage = currentPagePath === linkPagePath
    const itemHash = item.href?.includes('#') ? '#' + item.href.split('#')[1] : ''
    const isActive = pathname === item.href || (isAnchorLink && isSamePage && currentHash === itemHash)

    if (hasChildren) {
      return (
        <div key={item.title}>
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start px-2 py-2 h-auto font-medium hover:bg-accent/50 transition-colors text-left min-h-[2.5rem]',
              level === 0 && 'text-base font-semibold',
              level === 1 && 'ml-2 text-base font-medium',
              level === 2 && 'ml-4 text-sm',
              level >= 3 && 'ml-6 text-sm'
            )}
            onClick={() => toggleExpanded(item.title)}
          >
            {level === 0 && item.icon && <item.icon className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />}
            <span className="flex-1 text-left leading-relaxed whitespace-normal break-words">{item.title}</span>
            <ChevronRight
              className={cn(
                'h-4 w-4 transition-transform text-muted-foreground',
                isExpanded && 'rotate-90'
              )}
            />
          </Button>
          {isExpanded && item.items && (
            <div className="mt-1 space-y-1">
              {item.items.map(subItem => renderSidebarItem(subItem, level + 1))}
            </div>
          )}
        </div>
      )
    }

    // For anchor links on the same page, use anchor navigation
    if (isAnchorLink && isSamePage) {
      return (
        <a key={item.href} href={item.href || '#'}>
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start px-2 py-2 h-auto font-medium hover:bg-accent/50 transition-colors text-left min-h-[2.5rem]',
              level === 0 && 'text-base font-semibold',
              level === 1 && 'ml-3 text-base py-2',
              level === 2 && 'ml-5 text-sm py-2',
              level >= 3 && 'ml-7 text-sm py-1.5',
              isActive && 'bg-accent text-accent-foreground font-semibold border-l-2 border-primary'
            )}
          >
            {level === 0 && item.icon && <item.icon className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />}
            <span className="leading-relaxed whitespace-normal break-words">{item.title}</span>
          </Button>
        </a>
      )
    }

    // For different pages, use Next.js Link
    return (
      <Link key={item.href} href={item.href || '#'}>
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start px-2 py-2 h-auto font-medium hover:bg-accent/50 transition-colors text-left min-h-[2.5rem]',
            level === 0 && 'text-base font-semibold',
            level === 1 && 'ml-3 text-base py-2',
            level === 2 && 'ml-5 text-sm py-2',
            level >= 3 && 'ml-7 text-sm py-1.5',
            isActive && 'bg-accent text-accent-foreground font-semibold border-l-2 border-primary'
          )}
        >
          {level === 0 && item.icon && <item.icon className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" />}
          <span className="leading-relaxed whitespace-normal break-words">{item.title}</span>
        </Button>
      </Link>
    )
  }

  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-2 py-2">
        <div className="px-1 py-1">
          <h2 className="mb-3 px-2 text-base font-semibold tracking-tight text-foreground">
            📚 Tài liệu hướng dẫn
          </h2>
          <ScrollArea className="h-[calc(100vh-7rem)]">
            <div className="space-y-1">
              {sidebarItems.map(item => renderSidebarItem(item))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
