'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, FileText, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { GlobalSearch } from '@/components/search/global-search'
import { cn } from '@/lib/utils'
import { sidebarItems, type SidebarItem } from '@/components/layout/sidebar-data'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-8">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <FileText className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Tài liệu ERP
            </span>
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-96 p-0">
            <SheetHeader className="sr-only">
              <SheetTitle>Menu điều hướng</SheetTitle>
              <SheetDescription>Menu điều hướng chính của trang web</SheetDescription>
            </SheetHeader>
            <MobileNav onLinkClick={() => setIsOpen(false)} />
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link className="flex items-center space-x-2 md:hidden" href="/">
              <FileText className="h-6 w-6" />
              <span className="font-bold">Tài liệu ERP</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hidden md:block">
              <GlobalSearch />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ onLinkClick }: { onLinkClick: () => void }) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([
    '3. Quản lý nhân sự',
    '3.3. Truy cập chức năng',
    '3.3.5. Cấu hình phần hệ nhân sự'
  ])

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
    const isActive = pathname === item.href

    if (hasChildren) {
      return (
        <div key={item.title}>
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start px-3 py-3 h-auto font-medium hover:bg-accent/50 transition-colors text-left',
              level === 0 && 'text-sm font-semibold',
              level === 1 && 'ml-4 text-sm font-medium',
              level === 2 && 'ml-8 text-sm',
              level >= 3 && 'ml-12 text-xs'
            )}
            onClick={() => toggleExpanded(item.title)}
          >
            {level === 0 && item.icon && <item.icon className="mr-3 h-4 w-4 text-muted-foreground flex-shrink-0" />}
            <span className="flex-1 text-left leading-relaxed">{item.title}</span>
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

    return (
      <Link key={item.href} href={item.href || '#'} onClick={onLinkClick}>
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start px-3 py-3 h-auto font-medium hover:bg-accent/50 transition-colors text-left',
            level === 0 && 'text-sm font-semibold',
            level === 1 && 'ml-6 text-sm py-2.5',
            level === 2 && 'ml-10 text-sm py-2.5',
            level >= 3 && 'ml-14 text-xs py-2',
            isActive && 'bg-accent text-accent-foreground font-semibold border-l-2 border-primary'
          )}
        >
          {level === 0 && item.icon && <item.icon className="mr-3 h-4 w-4 text-muted-foreground flex-shrink-0" />}
          <span className="leading-relaxed">{item.title}</span>
        </Button>
      </Link>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header với logo */}
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center space-x-2" onClick={onLinkClick}>
          <FileText className="h-6 w-6" />
          <span className="font-bold">Tài liệu ERP</span>
        </Link>
      </div>

      {/* Search bar */}
      <div className="p-4 border-b">
        <GlobalSearch />
      </div>

      {/* Navigation menu */}
      <div className="flex-1 overflow-hidden">
        <div className="p-4">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-foreground">
            📚 Tài liệu hướng dẫn
          </h2>
          <ScrollArea className="h-[calc(100vh-14rem)]">
            <div className="space-y-2">
              {sidebarItems.map(item => renderSidebarItem(item))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
