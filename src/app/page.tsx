import Link from 'next/link'
import { FileText, Users, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Tài liệu hướng dẫn sử dụng
          </h1>
          <h2 className="text-2xl text-muted-foreground mb-6">
            Hệ thống quản trị tổng thể doanh nghiệp (ERP)
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hướng dẫn chi tiết về cách sử dụng phần mềm ERP của Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt
          </p>
          <Link href="/docs">
            <Button size="lg" className="text-lg px-8 py-3">
              <FileText className="mr-2 h-5 w-5" />
              Bắt đầu đọc tài liệu
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Quản lý nhân sự
              </CardTitle>
              <CardDescription>
                Quản lý thông tin nhân viên, hợp đồng, phòng ban và tạm ứng
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs/nhan-su">
                <Button variant="outline" className="w-full">
                  Xem chi tiết
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                Quản lý chấm công
              </CardTitle>
              <CardDescription>
                Chấm công nhân viên, lịch trình làm việc và báo cáo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs/cham-cong">
                <Button variant="outline" className="w-full">
                  Xem chi tiết
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Quản lý lương
              </CardTitle>
              <CardDescription>
                Phiếu lương, kỳ lương và các báo cáo liên quan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs/luong">
                <Button variant="outline" className="w-full">
                  Xem chi tiết
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Thông tin liên hệ</CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <div className="space-y-2">
                <p><strong>Công ty:</strong> TNHH Công nghệ Thông tin và Môi trường Phương Việt</p>
                <p><strong>Địa chỉ:</strong> Số 133/2A Trần Hưng Đạo, P. Ninh Kiều, TP. Cần Thơ</p>
                <p><strong>Điện thoại:</strong> 0706 780 790</p>
                <p><strong>Email:</strong> phuongviet.ite@gmail.com</p>
                <p><strong>Phiên bản:</strong> 1.0 – 01/08/2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
