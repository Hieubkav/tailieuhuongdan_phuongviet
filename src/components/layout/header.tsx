'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Menu, FileText, Users, Clock, DollarSign, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { GlobalSearch } from '@/components/search/global-search'
import { cn } from '@/lib/utils'

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
          <SheetContent side="left" className="w-80 p-0">
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

interface SidebarItem {
  title: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
  items?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Tổng quan',
    href: '/docs',
    icon: FileText,
  },
  {
    title: 'Hướng dẫn cơ bản',
    icon: FileText,
    items: [
      {
        title: 'Đăng nhập hệ thống',
        href: '/docs/login',
      },
    ],
  },
  {
    title: 'Quản lý nhân sự',
    href: '/docs/nhan-su',
    icon: Users,
    items: [
      {
        title: 'Tổng quan nhân sự',
        href: '/docs/nhan-su',
      },
      {
        title: 'Quản lý nhân viên',
        href: '/docs/nhan-su/nhan-vien',
      },
      {
        title: 'Quản lý hợp đồng',
        href: '/docs/nhan-su/hop-dong',
      },
    ],
  },
  {
    title: 'Quản lý chấm công',
    href: '/docs/cham-cong',
    icon: Clock,
    items: [
      {
        title: 'Tổng quan chấm công',
        href: '/docs/cham-cong',
      },
      {
        title: 'Chấm công nhân viên',
        href: '/docs/cham-cong/nhan-vien',
      },
      {
        title: 'Nghỉ phép',
        href: '/docs/cham-cong/nghi-phep',
      },
    ],
  },
  {
    title: 'Quản lý lương',
    href: '/docs/luong',
    icon: DollarSign,
    items: [
      {
        title: 'Tổng quan lương',
        href: '/docs/luong',
      },
      {
        title: 'Phiếu lương',
        href: '/docs/luong/phieu-luong',
      },
      {
        title: 'Kỳ lương',
        href: '/docs/luong/ky-luong',
      },
    ],
  },
]

function MobileNav({ onLinkClick }: { onLinkClick: () => void }) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(['Quản lý nhân sự'])

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
              'w-full justify-start px-3 py-2.5 h-auto font-medium text-sm hover:bg-accent/50 transition-colors',
              level > 0 && 'ml-4 text-xs'
            )}
            onClick={() => toggleExpanded(item.title)}
          >
            {item.icon && <item.icon className="mr-3 h-4 w-4 text-muted-foreground" />}
            <span className="flex-1 text-left">{item.title}</span>
            <ChevronRight
              className={cn(
                'h-4 w-4 transition-transform text-muted-foreground',
                isExpanded && 'rotate-90'
              )}
            />
          </Button>
          {isExpanded && (
            <div className="ml-2 mt-1 space-y-1">
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
            'w-full justify-start px-3 py-2.5 h-auto font-medium text-sm hover:bg-accent/50 transition-colors',
            level > 0 && 'ml-6 text-xs py-2',
            isActive && 'bg-accent text-accent-foreground font-semibold border-l-2 border-primary'
          )}
        >
          {item.icon && <item.icon className="mr-3 h-4 w-4 text-muted-foreground" />}
          {item.title}
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
          <ScrollArea className="h-[calc(100vh-16rem)]">
            <div className="space-y-2">
              {sidebarItems.map(item => renderSidebarItem(item))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
