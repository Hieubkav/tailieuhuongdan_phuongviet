import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Clock, DollarSign, FileText, ArrowRight } from 'lucide-react'

export default function DocsPage() {
  const content = `
# Tài liệu hướng dẫn sử dụng ERP

**Phần mềm hệ thống quản trị tổng thể doanh nghiệp (ERP)**

*Phiên bản 1.0 – 01/08/2025*

## Giới thiệu

Hệ thống ERP của Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt là giải pháp quản lý tổng thể doanh nghiệp, tích hợp các chức năng:

- **Quản lý nhân sự**: Thông tin nhân viên, hợp đồng, phòng ban
- **Quản lý chấm công**: Chấm công, nghỉ phép, báo cáo
- **Quản lý lương**: Tính lương, phiếu lương, kỳ lương

## Logo công ty

![Logo Phương Việt](/images/01_logo_PV.png)

## Thông tin liên hệ

**Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt**

- **Địa chỉ:** Số 133/2A Trần Hưng Đạo, P. Ninh Kiều, TP. Cần Thơ
- **Điện thoại:** 0706 780 790
- **Email:** phuongviet.ite@gmail.com

---

## Hướng dẫn sử dụng nhanh

### Bước 1: Đăng nhập hệ thống
Truy cập địa chỉ hệ thống và đăng nhập bằng tài khoản được cấp.

### Bước 2: Làm quen với giao diện
Khám phá các menu và chức năng chính của hệ thống.

### Bước 3: Thực hiện các tác vụ
Sử dụng các chức năng theo hướng dẫn chi tiết trong từng phần.
  `

  const modules = [
    {
      title: 'Hướng dẫn cơ bản',
      description: 'Đăng nhập, đăng xuất và làm quen với hệ thống',
      icon: FileText,
      href: '/docs/login',
      color: 'bg-blue-500'
    },
    {
      title: 'Quản lý nhân sự',
      description: 'Quản lý nhân viên, hợp đồng, phòng ban và tạm ứng',
      icon: Users,
      href: '/docs/nhan-su',
      color: 'bg-green-500'
    },
    {
      title: 'Quản lý chấm công',
      description: 'Chấm công, nghỉ phép, lịch trình và báo cáo',
      icon: Clock,
      href: '/docs/cham-cong',
      color: 'bg-orange-500'
    },
    {
      title: 'Quản lý lương',
      description: 'Tính lương, phiếu lương, kỳ lương và báo cáo',
      icon: DollarSign,
      href: '/docs/luong',
      color: 'bg-purple-500'
    }
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Tài liệu hướng dẫn sử dụng ERP
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn chi tiết về cách sử dụng hệ thống quản trị tổng thể doanh nghiệp
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <Card key={module.href} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${module.color} text-white`}>
                    <module.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {module.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Link href={module.href}>
                  <Button variant="outline" className="w-full group-hover:bg-accent">
                    Xem hướng dẫn
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <MarkdownRenderer
          content={content}
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
