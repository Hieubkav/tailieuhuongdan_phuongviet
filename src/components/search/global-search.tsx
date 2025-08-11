'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, FileText, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { VisuallyHidden } from '@/components/ui/visually-hidden'
import { cn } from '@/lib/utils'

interface SearchResult {
  title: string
  content: string
  url: string
  section: string
  highlight: string
}

// Mock search data - trong thực tế sẽ được load từ API hoặc static data
const searchData: SearchResult[] = [
  {
    title: 'Đăng nhập hệ thống',
    content: 'Cho phép người dùng đăng nhập vào hệ thống để sử dụng phần mềm. Truy cập tại địa chỉ: http://163.61.72.139/web/login',
    url: '/docs/login',
    section: 'Hướng dẫn cơ bản',
    highlight: 'đăng nhập'
  },
  {
    title: 'Quản lý nhân viên',
    content: 'Quản lý thông tin nhân viên (thêm, sửa, xóa, hợp đồng, phiếu lương, đóng góp, phụ cấp, khoản vay)',
    url: '/docs/nhan-su/nhan-vien',
    section: 'Quản lý nhân sự',
    highlight: 'nhân viên'
  },
  {
    title: 'Quản lý hợp đồng',
    content: 'Quản lý hợp đồng lao động (lịch làm việc, lương cơ bản, lương BHXH, cấu trúc lương)',
    url: '/docs/nhan-su/hop-dong',
    section: 'Quản lý nhân sự',
    highlight: 'hợp đồng'
  },
  {
    title: 'Chấm công nhân viên',
    content: 'Xem chi tiết chấm công, chấm công tự động, tạo lịch trình chấm công',
    url: '/docs/cham-cong/nhan-vien',
    section: 'Quản lý chấm công',
    highlight: 'chấm công'
  },
  {
    title: 'Báo cáo chấm công',
    content: 'Báo cáo chấm công (xuất Excel chi tiết, tổng hợp, hàng tháng)',
    url: '/docs/cham-cong/bao-cao',
    section: 'Quản lý chấm công',
    highlight: 'báo cáo'
  },
  {
    title: 'Quản lý nghỉ phép',
    content: 'Quản lý, cập nhật nghỉ phép cho nhân viên theo nhân viên/phòng ban/công ty',
    url: '/docs/cham-cong/nghi-phep',
    section: 'Quản lý chấm công',
    highlight: 'nghỉ phép'
  },
  {
    title: 'Phiếu lương',
    content: 'Quản lý phiếu lương chi tiết (tính toán, hủy, gửi qua Zalo, in hàng loạt)',
    url: '/docs/luong/phieu-luong',
    section: 'Quản lý lương',
    highlight: 'phiếu lương'
  },
  {
    title: 'Kỳ lương',
    content: 'Quản lý kỳ lương (thêm, sửa, xóa, nhân bản, import, export)',
    url: '/docs/luong/ky-luong',
    section: 'Quản lý lương',
    highlight: 'kỳ lương'
  }
]

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.section.toLowerCase().includes(searchQuery.toLowerCase())
    )

    setResults(filtered)
    setSelectedIndex(0)
  }, [])

  useEffect(() => {
    performSearch(query)
  }, [query, performSearch])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[selectedIndex]) {
        handleResultClick(results[selectedIndex])
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleResultClick = (result: SearchResult) => {
    router.push(result.url)
    setIsOpen(false)
    setQuery('')
  }

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        >
          <Search className="mr-2 h-4 w-4" />
          <span className="hidden lg:inline-flex">Tìm kiếm tài liệu...</span>
          <span className="inline-flex lg:hidden">Tìm kiếm...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-0">
        <VisuallyHidden asChild>
          <DialogTitle>Search Documentation</DialogTitle>
        </VisuallyHidden>
        <div className="px-4 pt-4 pb-2">
          <h2 className="text-sm font-medium">Tìm kiếm tài liệu</h2>
        </div>
        <div className="px-4">
          <Input
            placeholder="Nhập từ khóa để tìm kiếm..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            autoFocus
          />
        </div>
        <ScrollArea className="max-h-96">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => (
                <button
                  key={result.url}
                  className={cn(
                    'w-full text-left p-3 rounded-md hover:bg-accent transition-colors',
                    index === selectedIndex && 'bg-accent'
                  )}
                  onClick={() => handleResultClick(result)}
                >
                  <div className="flex items-start gap-3">
                    <FileText className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-medium truncate">{result.title}</h4>
                        <ArrowRight className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{result.section}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{result.content}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : query ? (
            <div className="p-8 text-center text-sm text-muted-foreground">
              Không tìm thấy kết quả nào cho &quot;{query}&quot;
            </div>
          ) : (
            <div className="p-8 text-center text-sm text-muted-foreground">
              Nhập từ khóa để bắt đầu tìm kiếm
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
