import Link from 'next/link'
import { Eye, Search, Filter, Calendar, Clock, Users } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function ChiTietChamCongPage() {
  const content = `
# 4.3.1. Xem chấm công chi tiết của nhân sự

## Mục đích
Cho phép người dùng xem thông tin chấm công chi tiết của từng nhân viên, bao gồm giờ vào, giờ ra, tổng thời gian làm việc và các thông tin liên quan.

## Đối tượng sử dụng
- **Cán bộ Quản trị**: Xem toàn bộ thông tin chấm công
- **Trưởng phòng**: Xem chấm công nhân viên trong phòng ban
- **Nhân viên**: Xem chấm công cá nhân

## Truy cập chức năng
Trên giao diện menu chính chọn **Menu >> Chấm công >> Xem chi tiết**

## Giao diện chính

### Danh sách chấm công tổng quan
Hiển thị thông tin chấm công của tất cả nhân viên theo ngày, tuần, tháng.

![Danh sách chấm công](/images/41_cham_cong_list.png)

### Menu lọc và nhóm dữ liệu
Các tùy chọn để lọc và nhóm dữ liệu chấm công theo nhiều tiêu chí.

![Menu lọc chấm công](/images/42_cham_cong_filter_group_menu.png)

### Nút chế độ xem
Chuyển đổi giữa các chế độ xem khác nhau: danh sách, lịch, biểu đồ.

![Nút chế độ xem chấm công](/images/43_cham_cong_view_buttons.png)

### Danh sách chấm công nhân viên
Thông tin chi tiết chấm công của từng nhân viên.

![Danh sách chấm công nhân viên](/images/44_cham_cong_nhan_vien_list.png)

### Chi tiết chấm công cá nhân
Xem thông tin chi tiết về giờ vào, giờ ra của từng nhân viên.

![Chi tiết chấm công](/images/45_cham_cong_chi_tiet.png)

## Các tính năng chính

### 1. Tìm kiếm và lọc dữ liệu

#### Tìm kiếm theo nhiều tiêu chí
- **Tên nhân viên**: Tìm theo họ tên hoặc mã nhân viên
- **Phòng ban**: Lọc theo phòng ban cụ thể
- **Thời gian**: Chọn khoảng thời gian xem chấm công
- **Trạng thái**: Lọc theo trạng thái chấm công (đúng giờ, trễ, sớm)

#### Nhóm dữ liệu
- **Theo phòng ban**: Nhóm nhân viên theo phòng ban
- **Theo ngày**: Nhóm theo ngày trong tuần
- **Theo ca làm việc**: Nhóm theo ca sáng, chiều, tối
- **Theo trạng thái**: Nhóm theo trạng thái chấm công

### 2. Chế độ xem đa dạng

#### Chế độ danh sách
- Hiển thị dạng bảng với đầy đủ thông tin
- Sắp xếp theo các cột khác nhau
- Phân trang để xem nhiều bản ghi

#### Chế độ lịch
- Hiển thị chấm công theo lịch tháng
- Dễ dàng theo dõi xu hướng chấm công
- Đánh dấu các ngày nghỉ, lễ tết

#### Chế độ biểu đồ
- Thống kê trực quan bằng biểu đồ
- Phân tích xu hướng theo thời gian
- So sánh giữa các phòng ban

### 3. Thông tin chi tiết

#### Thông tin cơ bản
- **Mã nhân viên**: Mã định danh duy nhất
- **Họ tên**: Tên đầy đủ của nhân viên
- **Phòng ban**: Phòng ban công tác
- **Chức vụ**: Vị trí công việc hiện tại

#### Thông tin chấm công
- **Ngày chấm công**: Ngày thực hiện chấm công
- **Giờ vào**: Thời gian bắt đầu làm việc
- **Giờ ra**: Thời gian kết thúc làm việc
- **Tổng giờ làm**: Tổng thời gian làm việc trong ngày

#### Thông tin bổ sung
- **Giờ nghỉ trưa**: Thời gian nghỉ trưa
- **Giờ làm thêm**: Thời gian làm thêm giờ
- **Trạng thái**: Đúng giờ, đi trễ, về sớm
- **Ghi chú**: Các ghi chú đặc biệt

## Phân tích dữ liệu chấm công

### Thống kê theo nhân viên
- **Tỷ lệ đúng giờ**: Phần trăm ngày chấm công đúng giờ
- **Số lần đi trễ**: Tổng số lần đi trễ trong kỳ
- **Số lần về sớm**: Tổng số lần về sớm trong kỳ
- **Tổng giờ làm việc**: Tổng thời gian làm việc

### Thống kê theo phòng ban
- **Hiệu suất chấm công**: So sánh giữa các phòng ban
- **Xu hướng theo thời gian**: Phân tích xu hướng chấm công
- **Nhân viên xuất sắc**: Danh sách nhân viên chấm công tốt
- **Cần cải thiện**: Danh sách cần theo dõi đặc biệt

### Báo cáo tổng hợp
- **Báo cáo hàng ngày**: Tình hình chấm công trong ngày
- **Báo cáo tuần**: Tổng hợp theo tuần
- **Báo cáo tháng**: Phân tích chi tiết theo tháng
- **Báo cáo năm**: Xu hướng dài hạn

## Quy trình xem chấm công

### Bước 1: Truy cập hệ thống
1. Đăng nhập vào hệ thống ERP
2. Chọn **Menu >> Chấm công >> Xem chi tiết**
3. Hệ thống hiển thị giao diện chấm công

### Bước 2: Thiết lập bộ lọc
1. Chọn khoảng thời gian cần xem
2. Lọc theo phòng ban (nếu cần)
3. Chọn nhân viên cụ thể (nếu cần)
4. Áp dụng bộ lọc

### Bước 3: Xem thông tin
1. Chọn chế độ xem phù hợp
2. Xem thông tin tổng quan
3. Click vào nhân viên để xem chi tiết
4. Phân tích dữ liệu theo nhu cầu

### Bước 4: Xuất báo cáo
1. Chọn dữ liệu cần xuất
2. Chọn định dạng file (Excel, PDF)
3. Tải file về máy tính
4. Sử dụng cho mục đích báo cáo

## Lưu ý quan trọng

### Quyền truy cập
- **Quản trị viên**: Xem toàn bộ dữ liệu chấm công
- **Trưởng phòng**: Chỉ xem nhân viên trong phòng ban
- **Nhân viên**: Chỉ xem chấm công cá nhân
- **Kế toán**: Xem để tính lương

### Bảo mật thông tin
- Dữ liệu chấm công được mã hóa
- Lưu trữ lịch sử truy cập
- Kiểm soát quyền xuất dữ liệu
- Backup định kỳ

### Độ chính xác
- Đồng bộ với thiết bị chấm công
- Kiểm tra dữ liệu định kỳ
- Xử lý các trường hợp bất thường
- Cập nhật thông tin kịp thời

## Xử lý sự cố

### Dữ liệu không chính xác
1. Kiểm tra kết nối thiết bị chấm công
2. Đồng bộ lại dữ liệu từ máy chấm công
3. Chỉnh sửa thủ công nếu cần thiết
4. Ghi chú lý do chỉnh sửa

### Thiếu dữ liệu chấm công
1. Kiểm tra nhật ký hệ thống
2. Liên hệ nhân viên xác nhận
3. Bổ sung dữ liệu thủ công
4. Cập nhật quy trình chấm công

### Hiệu suất hệ thống
1. Tối ưu hóa truy vấn dữ liệu
2. Phân trang khi xem nhiều bản ghi
3. Sử dụng cache cho dữ liệu thường xuyên
4. Monitor hiệu suất hệ thống
  `

  const features = [
    {
      title: 'Tìm kiếm nâng cao',
      description: 'Tìm kiếm chấm công theo nhiều tiêu chí: nhân viên, phòng ban, thời gian',
      icon: Search,
      color: 'bg-blue-500'
    },
    {
      title: 'Lọc và nhóm',
      description: 'Lọc dữ liệu và nhóm theo phòng ban, ca làm việc, trạng thái',
      icon: Filter,
      color: 'bg-green-500'
    },
    {
      title: 'Xem đa dạng',
      description: 'Chế độ xem danh sách, lịch, biểu đồ cho phân tích trực quan',
      icon: Eye,
      color: 'bg-purple-500'
    },
    {
      title: 'Theo dõi thời gian',
      description: 'Theo dõi giờ vào, giờ ra, tổng thời gian làm việc chi tiết',
      icon: Clock,
      color: 'bg-orange-500'
    }
  ]

  const chamCongImages = [
    '/images/41_cham_cong_list.png',
    '/images/42_cham_cong_filter_group_menu.png',
    '/images/43_cham_cong_view_buttons.png',
    '/images/44_cham_cong_nhan_vien_list.png',
    '/images/45_cham_cong_chi_tiet.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Xem chấm công chi tiết
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn xem và phân tích thông tin chấm công chi tiết của nhân viên
          </p>
        </div>

        {/* Quick Features Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className={`p-2 rounded-lg ${feature.color} text-white w-fit`}>
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Content */}
        <div className="border-t pt-8">
          <MarkdownRenderer 
            content={content} 
            images={chamCongImages}
            className="max-w-none"
          />
        </div>
      </div>
    </DocsLayout>
  )
}
