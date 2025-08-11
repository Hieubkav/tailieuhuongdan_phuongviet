'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronRight, FileText, Users, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

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

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
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
          {isExpanded && item.items && (
            <div className="ml-2 mt-1 space-y-1">
              {item.items.map(subItem => renderSidebarItem(subItem, level + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link key={item.href} href={item.href || '#'}>
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
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-4 px-4 text-lg font-semibold tracking-tight text-foreground">
            📚 Tài liệu hướng dẫn
          </h2>
          <ScrollArea className="h-[calc(100vh-8rem)] px-1">
            <div className="space-y-2">
              {sidebarItems.map(item => renderSidebarItem(item))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
