import Link from 'next/link'
import { Shield, Minus, BarChart3, Settings, Heart, UserCheck } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function DongGopPage() {
  const content = `
# 5.3.5. Quản lý đóng góp từ lương

## Tổng quan
Hệ thống quản lý đóng góp từ lương cho phép thiết lập và quản lý các khoản đóng góp bắt buộc và tự nguyện từ lương của nhân viên.

## Cấu trúc chức năng

### 5.3.5.1. Loại đóng góp
### 5.3.5.2. Báo cáo đóng góp

---

## 5.3.5.1. Loại đóng góp

### Mục đích
Chức năng này để thực hiện quản lý các khoản đóng góp từ nhân viên, bao gồm bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp và các khoản đóng góp khác.

### Đối tượng sử dụng
- **Cán bộ Quản trị**: Thiết lập và quản lý toàn bộ hệ thống
- **Kế toán**: Tính toán và xử lý các khoản đóng góp
- **HR**: Đăng ký và theo dõi cho nhân viên

### Truy cập chức năng
Trên giao diện phần mềm, chọn **"Đóng góp từ lương"** → **"Loại đóng góp"**. Hệ thống hiển thị giao diện quản lý.

### Giao diện chính
Hiển thị danh sách tất cả các loại đóng góp đã được thiết lập trong hệ thống.

### Các thao tác có thể thực hiện
- **Thêm mới**: Tạo loại đóng góp mới
- **Sửa**: Chỉnh sửa thông tin loại đóng góp
- **Xóa**: Xóa loại đóng góp không còn sử dụng
- **Nhân bản (sao chép)**: Sao chép cấu hình loại đóng góp
- **Import dữ liệu**: Nhập dữ liệu từ file Excel
- **Export dữ liệu**: Xuất dữ liệu ra file Excel

### Chi tiết thêm mới loại đóng góp

#### Thông tin cơ bản
Chọn **"Mới"** để tạo loại đóng góp mới:

**📝 Tên loại đóng góp**: 
- Nhập tên mô tả cho loại đóng góp
- Ví dụ: "BHXH", "BHYT", "BHTN", "Công đoàn"
- Tên phải rõ ràng, dễ hiểu

**🔢 Mã loại đóng góp**: 
- Nhập mã viết tắt cho loại đóng góp
- Ví dụ: "BHXH", "BHYT", "BHTN", "CĐ"
- Mã duy nhất trong hệ thống

**📊 Tỷ lệ đóng góp**: 
- Thiết lập tỷ lệ phần trăm đóng góp
- BHXH: 8%, BHYT: 1.5%, BHTN: 1%
- Có thể thiết lập theo quy định pháp luật

**💰 Mức lương tối thiểu**: 
- Mức lương tối thiểu để tính đóng góp
- Áp dụng cho các khoản bảo hiểm
- Theo quy định của nhà nước

**💵 Mức lương tối đa**: 
- Mức lương tối đa để tính đóng góp
- Giới hạn trần đóng góp
- Theo quy định pháp luật hiện hành

**🔒 Bắt buộc**: 
- Chọn nếu đây là khoản đóng góp bắt buộc
- Tự động áp dụng cho tất cả nhân viên
- Không thể từ chối hoặc hủy bỏ

**📋 Mô tả**: 
- Mô tả chi tiết về loại đóng góp
- Quy định và điều kiện áp dụng
- Lợi ích và quyền lợi được hưởng

### Các loại đóng góp phổ biến

#### Bảo hiểm bắt buộc
- **BHXH (8%)**: Bảo hiểm xã hội theo Luật BHXH
- **BHYT (1.5%)**: Bảo hiểm y tế theo Luật BHYT
- **BHTN (1%)**: Bảo hiểm thất nghiệp theo Luật BHTN
- **Công đoàn (1%)**: Phí công đoàn (nếu tham gia)

#### Bảo hiểm tự nguyện
- **Bảo hiểm nhân thọ**: Bảo hiểm tự nguyện
- **Bảo hiểm tai nạn**: Bảo hiểm tai nạn 24/24
- **Bảo hiểm sức khỏe**: Bảo hiểm y tế bổ sung
- **Quỹ hưu trí**: Quỹ hưu trí tự nguyện

#### Các khoản đóng góp khác
- **Quỹ phúc lợi**: Quỹ phúc lợi công ty
- **Quỹ từ thiện**: Đóng góp từ thiện
- **Tiết kiệm**: Tiết kiệm qua lương
- **Vay mua nhà**: Trả góp vay mua nhà

### Đăng ký đóng góp cho nhân viên

#### Chi tiết đăng ký đóng góp
Chọn **"Đăng ký đóng góp"** để áp dụng cho nhân viên:

**🏷️ Loại đóng góp**: 
- Chọn loại đóng góp cần đăng ký
- Hiển thị thông tin chi tiết và tỷ lệ
- Áp dụng quy tắc đã thiết lập

**💰 Mức đóng góp**: 
- Tự động tính theo tỷ lệ hoặc nhập cố định
- Có thể điều chỉnh cho từng nhân viên
- Kiểm tra giới hạn tối thiểu/tối đa

**📅 Ngày bắt đầu**: 
- Ngày bắt đầu đóng góp
- Ảnh hưởng đến kỳ lương tương ứng
- Thường là đầu tháng hoặc ngày ký hợp đồng

**📅 Ngày kết thúc**: 
- Ngày kết thúc đóng góp (nếu có)
- Có thể để trống cho đóng góp vô thời hạn
- Tự động ngừng từ ngày này

**👥 Chọn nhân viên**: 
- Chọn các nhân viên để áp dụng
- Có thể chọn theo phòng ban, loại hợp đồng
- Lọc theo điều kiện cụ thể

### Menu tác vụ loại đóng góp
Chọn vào loại đóng góp để hiển thị các tác vụ:
- **Xem danh sách nhân viên**: Ai đang đóng góp
- **Đăng ký hàng loạt**: Áp dụng cho nhiều nhân viên
- **Cập nhật tỷ lệ**: Thay đổi tỷ lệ đóng góp
- **Báo cáo**: Thống kê đóng góp theo loại

---

## 5.3.5.2. Báo cáo đóng góp

### Mục đích
Chức năng này để thực hiện xuất các báo cáo đóng góp từ lương, phục vụ cho việc quyết toán và báo cáo với cơ quan chức năng.

### Truy cập chức năng
Trên giao diện phần mềm, chọn **"Đóng góp từ lương"** → **"Báo cáo"**. Hệ thống hiển thị giao diện báo cáo.

### Các loại báo cáo

#### Báo cáo theo nhân viên
- **Bảng kê đóng góp**: Chi tiết đóng góp của từng nhân viên
- **Lịch sử đóng góp**: Theo dõi lịch sử đóng góp
- **Tổng số tiền đóng**: Tổng tiền đã đóng trong kỳ
- **So sánh các kỳ**: So sánh giữa các tháng/quý

#### Báo cáo theo loại đóng góp
- **Tổng thu BHXH**: Tổng số tiền thu BHXH
- **Tổng thu BHYT**: Tổng số tiền thu BHYT
- **Tổng thu BHTN**: Tổng số tiền thu BHTN
- **Các khoản khác**: Tổng các khoản đóng góp khác

#### Báo cáo cho cơ quan chức năng
- **Báo cáo BHXH**: Báo cáo cho BHXH tỉnh/thành phố
- **Báo cáo thuế**: Báo cáo cho cơ quan thuế
- **Báo cáo lao động**: Báo cáo cho Sở Lao động
- **Báo cáo thống kê**: Báo cáo cho Tổng cục Thống kê

#### Báo cáo tổng hợp
- **Tổng chi phí đóng góp**: Tổng chi phí công ty
- **Phân bổ theo phòng ban**: Chi phí theo phòng ban
- **Xu hướng theo thời gian**: Phân tích xu hướng
- **Dự báo chi phí**: Dự báo chi phí tương lai

### Xuất báo cáo
- **Chọn loại báo cáo**: Chọn từ danh sách có sẵn
- **Thiết lập tham số**: Thời gian, phòng ban, loại đóng góp
- **Xem trước**: Preview báo cáo trước khi xuất
- **Xuất file**: Xuất ra Excel, PDF hoặc XML

## Quy trình quản lý đóng góp

### Bước 1: Thiết lập loại đóng góp
1. **Nghiên cứu quy định**: Tìm hiểu quy định pháp luật
2. **Thiết lập tham số**: Cấu hình tỷ lệ, giới hạn
3. **Tạo trong hệ thống**: Nhập thông tin vào hệ thống
4. **Kiểm tra tính toán**: Test tính toán chính xác

### Bước 2: Đăng ký cho nhân viên
1. **Xác định đối tượng**: Ai phải đóng góp gì
2. **Đăng ký hàng loạt**: Áp dụng cho nhiều nhân viên
3. **Kiểm tra thông tin**: Đảm bảo thông tin chính xác
4. **Kích hoạt**: Bắt đầu tính từ kỳ lương tương ứng

### Bước 3: Theo dõi và quản lý
1. **Giám sát hàng tháng**: Theo dõi số liệu đóng góp
2. **Cập nhật thay đổi**: Điều chỉnh khi có thay đổi
3. **Kiểm tra tuân thủ**: Đảm bảo tuân thủ quy định
4. **Xử lý ngoại lệ**: Xử lý các trường hợp đặc biệt

### Bước 4: Báo cáo và quyết toán
1. **Tạo báo cáo định kỳ**: Báo cáo hàng tháng/quý
2. **Nộp cho cơ quan**: Nộp báo cáo đúng hạn
3. **Quyết toán năm**: Thực hiện quyết toán cuối năm
4. **Lưu trữ hồ sơ**: Lưu trữ theo quy định

## Tích hợp với các module khác

### Tích hợp với module lương
- **Tự động khấu trừ**: Tự động trừ vào lương
- **Hiển thị trên phiếu lương**: Thể hiện chi tiết
- **Ảnh hưởng đến thuế**: Giảm thu nhập chịu thuế
- **Báo cáo tổng hợp**: Tích hợp vào báo cáo lương

### Tích hợp với module nhân sự
- **Tự động đăng ký**: Đăng ký khi có nhân viên mới
- **Cập nhật thay đổi**: Cập nhật khi thay đổi hợp đồng
- **Ngừng đóng góp**: Tự động ngừng khi nghỉ việc
- **Lịch sử hồ sơ**: Ghi nhận vào hồ sơ nhân viên

### Tích hợp với module kế toán
- **Hạch toán tự động**: Tự động tạo bút toán
- **Phân bổ chi phí**: Phân bổ theo phòng ban
- **Theo dõi công nợ**: Theo dõi nợ với BHXH
- **Báo cáo tài chính**: Ảnh hưởng đến báo cáo

### Tích hợp với hệ thống bên ngoài
- **Kết nối BHXH**: Kết nối với hệ thống BHXH
- **Báo cáo điện tử**: Nộp báo cáo qua mạng
- **Đồng bộ dữ liệu**: Đồng bộ với cơ quan chức năng
- **API tích hợp**: Tích hợp với hệ thống khác

## Lưu ý quan trọng

### Tuân thủ pháp luật
- **Luật BHXH**: Tuân thủ Luật Bảo hiểm xã hội
- **Luật BHYT**: Tuân thủ Luật Bảo hiểm y tế
- **Luật BHTN**: Tuân thủ Luật Bảo hiểm thất nghiệp
- **Nghị định hướng dẫn**: Theo dõi các nghị định mới

### Quản lý rủi ro
- **Rủi ro tuân thủ**: Đảm bảo tuân thủ đầy đủ
- **Rủi ro tính toán**: Kiểm tra tính toán chính xác
- **Rủi ro báo cáo**: Báo cáo đúng hạn, đầy đủ
- **Rủi ro thanh toán**: Đảm bảo thanh toán đúng hạn

### Bảo mật và kiểm soát
- **Phân quyền**: Kiểm soát quyền truy cập
- **Audit log**: Ghi nhận mọi thay đổi
- **Backup dữ liệu**: Sao lưu thường xuyên
- **Kiểm tra định kỳ**: Review và kiểm tra định kỳ

### Cập nhật và bảo trì
- **Theo dõi quy định**: Cập nhật quy định mới
- **Nâng cấp hệ thống**: Cập nhật tính năng mới
- **Đào tạo nhân viên**: Đào tạo sử dụng hệ thống
- **Hỗ trợ kỹ thuật**: Hỗ trợ khi có vấn đề
  `

  const features = [
    {
      title: 'BHXH - BHYT - BHTN',
      description: 'Quản lý các khoản bảo hiểm bắt buộc theo quy định',
      icon: Shield,
      color: 'bg-blue-500',
      badge: 'Bắt buộc'
    },
    {
      title: 'Đóng góp tự nguyện',
      description: 'Quản lý các khoản đóng góp tự nguyện của nhân viên',
      icon: Heart,
      color: 'bg-green-500',
      badge: 'Tự nguyện'
    },
    {
      title: 'Đăng ký hàng loạt',
      description: 'Đăng ký đóng góp cho nhiều nhân viên cùng lúc',
      icon: UserCheck,
      color: 'bg-purple-500',
      badge: 'Hàng loạt'
    },
    {
      title: 'Báo cáo cơ quan',
      description: 'Xuất báo cáo cho BHXH, thuế và các cơ quan chức năng',
      icon: BarChart3,
      color: 'bg-orange-500',
      badge: 'Chính thức'
    }
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý đóng góp từ lương
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn quản lý các khoản đóng góp BHXH, BHYT, BHTN và các khoản khác từ lương
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
                    {feature.badge}
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
            className="max-w-none"
          />
        </div>
      </div>
    </DocsLayout>
  )
}
