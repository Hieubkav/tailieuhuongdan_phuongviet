import Link from 'next/link'
import { Calendar, FileText, BarChart3, Users, Clock, CheckCircle, XCircle } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function NghiPhepPage() {
  const content = `
# 1. Quản lý nghỉ phép

## 1.1. Mục đích
Cho phép người dùng quản lý và cập nhật nghỉ phép cho nhân viên một cách hiệu quả và chuyên nghiệp.

## 1.2. Đối tượng sử dụng
Người dùng có vai trò **"Cán bộ Quản trị"** có thể thao tác trên chức năng này.

## 1.3. Truy cập chức năng
Trên giao diện menu chính chọn **Menu >> Nghỉ phép**

Hệ thống hiển thị phân hệ Nghỉ phép với các chức năng chính:
- **Quản lý nghỉ phép**: Tạo, duyệt và theo dõi đơn nghỉ phép
- **Báo cáo nghỉ phép**: Thống kê và phân tích dữ liệu nghỉ phép

---

## 1.3.1. Quản lý nghỉ phép

**Mục đích**: Chức năng này để thực hiện cập nhật nghỉ phép của nhân viên.

Trên giao diện phần mềm, chọn **"Quản lý"** → **"Nghỉ phép"**. Hệ thống hiển thị giao diện:

### Giao diện chính

#### Trang chủ nghỉ phép
Hiển thị tổng quan về tình hình nghỉ phép của toàn công ty.

![Trang chủ nghỉ phép](/images/36_nghi_phep_trang_chu.png)

#### Lọc và tìm kiếm đơn nghỉ phép
- **Lưu ý quan trọng**: Cần xóa bộ lọc **"Chờ tôi"** để hiển thị danh sách tất cả nhân viên nghỉ phép của công ty.

![Lọc đơn nghỉ phép](/images/37_don_nghi_phep_filter_list.png)

#### Danh sách đơn nghỉ phép
Hiển thị tất cả đơn nghỉ phép với thông tin chi tiết và trạng thái.

![Danh sách đơn nghỉ phép](/images/38_don_nghi_phep_list.png)

### Thêm mới đơn nghỉ phép

Giao diện tạo đơn nghỉ phép mới với các thông tin chi tiết:

![Phê duyệt đơn nghỉ phép](/images/39_don_nghi_phep_phe_duyet.png)

#### Các trường thông tin quan trọng:

**🔧 Phương thức nghỉ phép**:
- **Nhân viên**: Nghỉ phép cho một nhân viên cụ thể
- **Phòng ban**: Nghỉ phép cho toàn bộ phòng ban
- **Công ty**: Nghỉ phép cho toàn công ty (ngày lễ, tết)

**👤 Nhân viên**: Chọn tên nhân viên cần nghỉ phép (khi chọn phương thức "Nhân viên")

**📅 Ngày**: Ngày bắt đầu nghỉ phép

**🕐 Nửa ngày**: Tích chọn nếu nhân viên chỉ nghỉ ½ ngày (sáng hoặc chiều)

**⏱️ Tổng thời gian**: Hệ thống tự động hiển thị số ngày sẽ nghỉ dựa trên thông tin đã nhập

---

## 1.3.2. Báo cáo nghỉ phép

**Mục đích**: Chức năng này để thực hiện báo cáo nghỉ phép của nhân viên.

Trên giao diện phần mềm, chọn **"Quản lý"** → **"Nghỉ phép"**. Hệ thống hiển thị giao diện báo cáo:

### Phân tích nghỉ phép
Báo cáo thống kê chi tiết về tình hình nghỉ phép của công ty.

![Phân tích nghỉ phép](/images/40_phan_tich_nghi_phep.png)

## Các loại nghỉ phép

### Nghỉ phép năm
- **Quyền lợi:** 12 ngày/năm (theo Luật Lao động)
- **Điều kiện:** Làm việc đủ 12 tháng
- **Tích lũy:** Có thể chuyển sang năm sau (tối đa 3 ngày)
- **Thanh toán:** Được trả lương đầy đủ

### Nghỉ ốm
- **Quyền lợi:** Theo chế độ BHXH
- **Điều kiện:** Có giấy nghỉ ốm của bác sĩ
- **Mức trả:** 75% lương (từ ngày thứ 4)
- **Thời hạn:** Tối đa 180 ngày/năm

### Nghỉ thai sản
- **Nữ:** 6 tháng (4 tháng sau sinh + 2 tháng trước sinh)
- **Nam:** 5 ngày nghỉ khi vợ sinh con
- **Mức trả:** 100% lương từ quỹ BHXH
- **Điều kiện:** Đóng BHXH đủ 6 tháng

### Nghỉ hiếu hỷ
- **Cưới:** 3 ngày
- **Tang:** 3 ngày (bố mẹ, vợ/chồng, con)
- **Tang:** 1 ngày (ông bà, anh chị em)
- **Mức trả:** 100% lương

### Nghỉ không lương
- **Điều kiện:** Có lý do chính đáng
- **Phê duyệt:** Cần sự đồng ý của quản lý
- **Thời hạn:** Tùy theo quy định công ty
- **Quyền lợi:** Không được trả lương

## Quy trình xin nghỉ phép

### 1. Tạo đơn xin nghỉ phép
- Đăng nhập vào hệ thống
- Chọn "Tạo đơn nghỉ phép"
- Điền đầy đủ thông tin:
  - Loại nghỉ phép
  - Thời gian nghỉ (từ ngày - đến ngày)
  - Lý do nghỉ phép
  - Người thay thế (nếu có)

### 2. Gửi đơn phê duyệt
- Kiểm tra lại thông tin
- Gửi đơn cho người quản lý trực tiếp
- Hệ thống tự động thông báo

### 3. Theo dõi trạng thái
- **Chờ phê duyệt:** Đơn đang được xem xét
- **Đã phê duyệt:** Được chấp nhận nghỉ phép
- **Từ chối:** Không được chấp nhận (có ghi chú lý do)
- **Hủy:** Nhân viên tự hủy đơn

### 4. Thực hiện nghỉ phép
- Bàn giao công việc cho người thay thế
- Cập nhật tiến độ công việc
- Thông báo với đồng nghiệp liên quan

## Quy trình phê duyệt (dành cho quản lý)

### 1. Nhận thông báo
- Email thông báo có đơn mới
- Thông báo trong hệ thống
- Kiểm tra danh sách đơn chờ phê duyệt

### 2. Xem xét đơn nghỉ phép
- Kiểm tra lý do nghỉ phép
- Xem xét tình hình công việc
- Đánh giá khả năng thay thế
- Kiểm tra số ngày phép còn lại

### 3. Quyết định phê duyệt
- **Phê duyệt:** Nếu đáp ứng điều kiện
- **Từ chối:** Nếu không phù hợp (ghi rõ lý do)
- **Yêu cầu bổ sung:** Nếu thiếu thông tin

### 4. Thông báo kết quả
- Hệ thống tự động thông báo cho nhân viên
- Cập nhật lịch làm việc
- Thông báo cho phòng ban liên quan

## Báo cáo nghỉ phép

### Báo cáo theo nhân viên
- Tổng số ngày nghỉ phép đã sử dụng
- Số ngày phép còn lại
- Lịch sử nghỉ phép
- Phân loại theo loại nghỉ phép

### Báo cáo theo phòng ban
- Tình hình nghỉ phép của phòng ban
- So sánh giữa các phòng ban
- Xu hướng nghỉ phép theo thời gian
- Tác động đến năng suất

### Báo cáo tổng hợp
- Thống kê toàn công ty
- Phân tích theo mùa, tháng
- Dự báo nhu cầu nghỉ phép
- Đề xuất chính sách

## Lưu ý quan trọng

### Cho nhân viên
- Tạo đơn nghỉ phép trước ít nhất 3 ngày
- Đảm bảo bàn giao công việc đầy đủ
- Kiểm tra số ngày phép còn lại
- Tuân thủ quy định về nghỉ phép

### Cho quản lý
- Xem xét đơn trong vòng 24 giờ
- Đảm bảo công bằng trong phê duyệt
- Cân nhắc tình hình công việc
- Ghi rõ lý do khi từ chối

### Cho HR
- Cập nhật chính sách nghỉ phép
- Theo dõi và báo cáo định kỳ
- Xử lý các trường hợp đặc biệt
- Đảm bảo tuân thủ pháp luật
  `

  const features = [
    {
      title: 'Tạo đơn nghỉ phép',
      description: 'Tạo đơn xin nghỉ phép cho nhân viên, phòng ban hoặc toàn công ty',
      icon: FileText,
      color: 'bg-blue-500',
      status: 'Hoạt động'
    },
    {
      title: 'Phê duyệt đơn',
      description: 'Xem xét và phê duyệt các đơn nghỉ phép của nhân viên',
      icon: CheckCircle,
      color: 'bg-green-500',
      status: 'Quan trọng'
    },
    {
      title: 'Theo dõi trạng thái',
      description: 'Theo dõi trạng thái đơn nghỉ phép: chờ duyệt, đã duyệt, từ chối',
      icon: Clock,
      color: 'bg-orange-500',
      status: 'Thường xuyên'
    },
    {
      title: 'Báo cáo thống kê',
      description: 'Phân tích và báo cáo tình hình nghỉ phép của công ty',
      icon: BarChart3,
      color: 'bg-purple-500',
      status: 'Định kỳ'
    }
  ]

  const nghiPhepImages = [
    '/images/36_nghi_phep_trang_chu.png',
    '/images/37_don_nghi_phep_filter_list.png',
    '/images/38_don_nghi_phep_list.png',
    '/images/39_don_nghi_phep_phe_duyet.png',
    '/images/40_phan_tich_nghi_phep.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý nghỉ phép
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn chi tiết về quản lý nghỉ phép và phê duyệt đơn nghỉ phép trong hệ thống ERP
          </p>
        </div>

        {/* Quick Features Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${feature.color} text-white`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.status}
                  </Badge>
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
            images={nghiPhepImages}
            className="max-w-none"
          />
        </div>
      </div>
    </DocsLayout>
  )
}
