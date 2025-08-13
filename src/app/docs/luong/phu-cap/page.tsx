import Link from 'next/link'
import { Gift, Settings, BarChart3, UserPlus, DollarSign, Calendar } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function PhuCapPage() {
  const content = `
# 5.3.4. Quản lý phụ cấp lương

## Tổng quan
Hệ thống quản lý phụ cấp lương cho phép thiết lập, quản lý và theo dõi các khoản phụ cấp cho nhân viên một cách linh hoạt và chính xác.

## Cấu trúc chức năng

### 5.3.4.1. Phụ cấp lương
### 5.3.4.2. Loại phụ cấp  
### 5.3.4.3. Báo cáo phụ cấp

---

## 5.3.4.1. Phụ cấp lương

### Mục đích
Chức năng này để thực hiện quản lý các khoản phụ cấp cho nhân viên, bao gồm việc đăng ký, theo dõi và tính toán phụ cấp.

### Truy cập chức năng
Trên giao diện phần mềm, chọn **"Phụ cấp lương"** → **"Phụ cấp"**. Hệ thống hiển thị giao diện quản lý phụ cấp.

### Giao diện chính
Hiển thị danh sách tất cả các khoản phụ cấp đã được đăng ký cho nhân viên trong hệ thống.

### Các thao tác có thể thực hiện
- **Thêm mới**: Tạo khoản phụ cấp mới cho nhân viên
- **Sửa**: Chỉnh sửa thông tin phụ cấp hiện có
- **Xóa**: Xóa khoản phụ cấp không còn áp dụng
- **Nhân bản (sao chép)**: Sao chép phụ cấp cho nhiều nhân viên
- **Import dữ liệu**: Nhập dữ liệu từ file Excel
- **Export dữ liệu**: Xuất dữ liệu ra file Excel

### Chi tiết thêm mới phụ cấp

#### Thông tin cơ bản
Chọn **"Mới"** để tạo phụ cấp mới. Hệ thống hiển thị form với các trường:

**👤 Nhân viên**: 
- Chọn nhân viên được hưởng phụ cấp
- Tìm kiếm nhanh theo tên hoặc mã nhân viên
- Có thể chọn nhiều nhân viên cùng lúc

**🏷️ Loại phụ cấp**: 
- Chọn từ danh sách loại phụ cấp đã được cấu hình
- Ví dụ: phụ cấp chức vụ, độc hại, đi lại, ăn trưa...
- Mỗi loại có quy tắc tính toán riêng

**💰 Số tiền phụ cấp**: 
- Nhập số tiền phụ cấp cho nhân viên đó
- Có thể nhập số tiền cố định hoặc theo tỷ lệ
- Hệ thống tự động tính toán dựa trên quy tắc

**📅 Ngày bắt đầu**: 
- Chọn ngày bắt đầu áp dụng phụ cấp
- Phụ cấp sẽ có hiệu lực từ ngày này
- Ảnh hưởng đến tính lương từ kỳ tương ứng

**📅 Ngày kết thúc**: 
- Chọn ngày ngưng áp dụng phụ cấp
- Có thể để trống nếu áp dụng vô thời hạn
- Hệ thống tự động ngừng tính từ ngày này

### Menu tác vụ phụ cấp
Chọn vào khoản phụ cấp để hiển thị các tác vụ khác:
- **Xem chi tiết**: Xem thông tin đầy đủ
- **Chỉnh sửa**: Cập nhật thông tin
- **Gia hạn**: Gia hạn thời gian áp dụng
- **Tạm dừng**: Tạm dừng phụ cấp
- **Lịch sử**: Xem lịch sử thay đổi

---

## 5.3.4.2. Loại phụ cấp

### Mục đích
Chức năng này để thực hiện quản lý các loại khoản phụ cấp, thiết lập quy tắc và tham số cho từng loại.

### Truy cập chức năng
Trên giao diện phần mềm, chọn **"Phụ cấp lương"** → **"Loại phụ cấp"**. Hệ thống hiển thị giao diện quản lý loại phụ cấp.

### Giao diện chính
Hiển thị danh sách tất cả các loại phụ cấp đã được thiết lập trong hệ thống.

### Các thao tác có thể thực hiện
- **Thêm mới**: Tạo loại phụ cấp mới
- **Sửa**: Chỉnh sửa thông tin loại phụ cấp
- **Xóa**: Xóa loại phụ cấp không còn sử dụng
- **Nhân bản (sao chép)**: Sao chép cấu hình loại phụ cấp
- **Import dữ liệu**: Nhập dữ liệu từ file Excel
- **Export dữ liệu**: Xuất dữ liệu ra file Excel

### Chi tiết thêm mới loại phụ cấp

#### Thông tin cơ bản
Chọn **"Mới"** để tạo loại phụ cấp mới:

**📝 Tên phụ cấp**: 
- Nhập tên mô tả cho loại phụ cấp
- Ví dụ: "Phụ cấp chức vụ", "Phụ cấp độc hại"
- Tên phải rõ ràng, dễ hiểu

**🔢 Mã phụ cấp**: 
- Nhập mã viết tắt cho loại phụ cấp
- Ví dụ: "PCCV", "PCDH"
- Mã duy nhất trong hệ thống

**🔒 Giá trị cố định**: 
- Chọn nếu muốn cố định giá trị cho mọi nhân viên
- Khi chọn, tất cả nhân viên sẽ có cùng mức phụ cấp
- Không chọn nếu muốn linh hoạt theo từng nhân viên

**💵 Giá trị mặc định**: 
- Giá trị áp dụng mặc định cho phụ cấp này
- Sẽ được điền tự động khi tạo phụ cấp mới
- Có thể thay đổi khi đăng ký cho nhân viên

**💸 Chịu thuế**: 
- Chọn nếu phụ cấp này chịu thuế TNCN
- Ảnh hưởng đến tính toán thuế thu nhập cá nhân
- Tuân thủ quy định pháp luật về thuế

### Đăng ký phụ cấp hàng loạt

#### Chi tiết đăng ký phụ cấp
Chọn **"Đăng ký phụ cấp"** để áp dụng cho nhiều nhân viên:

**🏷️ Loại phụ cấp**: 
- Chọn loại phụ cấp cần đăng ký
- Hiển thị thông tin chi tiết loại phụ cấp
- Áp dụng quy tắc đã thiết lập

**💰 Số tiền phụ cấp**: 
- Nhập số tiền phụ cấp chung
- Có thể điều chỉnh riêng cho từng nhân viên
- Tự động áp dụng giá trị mặc định

**📅 Ngày bắt đầu**: 
- Chọn ngày bắt đầu áp dụng cho tất cả
- Có thể điều chỉnh riêng cho từng nhân viên
- Ảnh hưởng đến kỳ lương tương ứng

**📅 Ngày kết thúc**: 
- Chọn ngày ngưng áp dụng (nếu có)
- Có thể để trống cho áp dụng vô thời hạn
- Tự động ngừng tính từ ngày này

**👥 Thêm nhân viên**: 
- Chọn các nhân viên để áp dụng phụ cấp
- Có thể chọn theo phòng ban, chức vụ
- Lọc và tìm kiếm nhanh nhân viên

### Menu tác vụ loại phụ cấp
Chọn vào loại phụ cấp để hiển thị các tác vụ:
- **Xem danh sách nhân viên**: Ai đang hưởng phụ cấp này
- **Đăng ký hàng loạt**: Áp dụng cho nhiều nhân viên
- **Cập nhật giá trị**: Thay đổi mức phụ cấp
- **Báo cáo**: Thống kê phụ cấp theo loại

---

## 5.3.4.3. Báo cáo phụ cấp

### Mục đích
Chức năng này để thực hiện xuất các báo cáo phụ cấp, phân tích và thống kê tình hình phụ cấp trong công ty.

### Truy cập chức năng
Trên giao diện phần mềm, chọn **"Phụ cấp lương"** → **"Báo cáo"**. Hệ thống hiển thị giao diện báo cáo.

### Các loại báo cáo

#### Báo cáo theo nhân viên
- **Danh sách phụ cấp**: Tất cả phụ cấp của nhân viên
- **Tổng tiền phụ cấp**: Tổng số tiền phụ cấp hàng tháng
- **Lịch sử thay đổi**: Theo dõi thay đổi phụ cấp
- **So sánh các kỳ**: So sánh phụ cấp giữa các tháng

#### Báo cáo theo loại phụ cấp
- **Số lượng nhân viên**: Bao nhiêu người hưởng từng loại
- **Tổng chi phí**: Tổng tiền chi cho từng loại phụ cấp
- **Phân tích xu hướng**: Xu hướng tăng/giảm theo thời gian
- **Hiệu quả chính sách**: Đánh giá tác động của phụ cấp

#### Báo cáo tổng hợp
- **Chi phí phụ cấp toàn công ty**: Tổng chi phí phụ cấp
- **Phân bổ theo phòng ban**: Chi phí phụ cấp theo phòng ban
- **Top nhân viên**: Nhân viên có phụ cấp cao nhất
- **Báo cáo tuân thủ**: Kiểm tra tuân thủ chính sách

### Xuất báo cáo
- **Chọn loại báo cáo**: Chọn từ danh sách báo cáo có sẵn
- **Thiết lập tham số**: Thời gian, phòng ban, nhân viên
- **Xem trước**: Preview báo cáo trước khi xuất
- **Xuất file**: Xuất ra Excel, PDF hoặc in trực tiếp

## Quy trình quản lý phụ cấp

### Bước 1: Thiết lập loại phụ cấp
1. **Phân tích nhu cầu**: Xác định các loại phụ cấp cần thiết
2. **Thiết lập quy tắc**: Định nghĩa quy tắc tính toán
3. **Cấu hình hệ thống**: Tạo loại phụ cấp trong hệ thống
4. **Test và kiểm tra**: Kiểm tra tính toán chính xác

### Bước 2: Đăng ký phụ cấp
1. **Xác định đối tượng**: Ai được hưởng phụ cấp nào
2. **Thiết lập mức độ**: Mức phụ cấp cho từng nhân viên
3. **Thời gian áp dụng**: Từ khi nào đến khi nào
4. **Phê duyệt**: Trình cấp có thẩm quyền phê duyệt

### Bước 3: Theo dõi và quản lý
1. **Giám sát thực hiện**: Theo dõi việc áp dụng phụ cấp
2. **Cập nhật thay đổi**: Điều chỉnh khi có thay đổi
3. **Kiểm tra định kỳ**: Review định kỳ tính hợp lý
4. **Báo cáo**: Báo cáo tình hình cho lãnh đạo

### Bước 4: Đánh giá và cải thiện
1. **Phân tích hiệu quả**: Đánh giá tác động của phụ cấp
2. **Thu thập phản hồi**: Lắng nghe ý kiến nhân viên
3. **Điều chỉnh chính sách**: Cải thiện chính sách phụ cấp
4. **Cập nhật hệ thống**: Nâng cấp tính năng khi cần

## Tích hợp với các module khác

### Tích hợp với module lương
- **Tự động tính vào lương**: Phụ cấp được tính tự động
- **Hiển thị trên phiếu lương**: Thể hiện chi tiết từng khoản
- **Ảnh hưởng đến thuế**: Tính thuế TNCN chính xác
- **Báo cáo tổng hợp**: Tích hợp vào báo cáo lương

### Tích hợp với module nhân sự
- **Liên kết với chức vụ**: Phụ cấp theo chức vụ tự động
- **Theo dõi thay đổi**: Cập nhật khi thay đổi vị trí
- **Hồ sơ nhân viên**: Ghi nhận vào hồ sơ cá nhân
- **Đánh giá hiệu suất**: Liên kết với kết quả đánh giá

### Tích hợp với module kế toán
- **Hạch toán tự động**: Tự động tạo bút toán
- **Phân bổ chi phí**: Phân bổ theo phòng ban
- **Kiểm soát ngân sách**: Theo dõi chi phí phụ cấp
- **Báo cáo tài chính**: Ảnh hưởng đến báo cáo

## Lưu ý quan trọng

### Tuân thủ pháp luật
- **Quy định về phụ cấp**: Tuân thủ Luật Lao động
- **Thuế thu nhập**: Tính thuế đúng quy định
- **Bảo hiểm xã hội**: Ảnh hưởng đến mức đóng BHXH
- **Hợp đồng lao động**: Phù hợp với hợp đồng

### Quản lý và kiểm soát
- **Phân quyền**: Ai có quyền tạo, duyệt, sửa
- **Quy trình phê duyệt**: Thiết lập quy trình rõ ràng
- **Kiểm soát chi phí**: Theo dõi và kiểm soát ngân sách
- **Audit**: Kiểm tra và đánh giá định kỳ

### Bảo mật và backup
- **Bảo mật thông tin**: Mã hóa dữ liệu nhạy cảm
- **Phân quyền truy cập**: Kiểm soát quyền truy cập
- **Backup dữ liệu**: Sao lưu thường xuyên
- **Log hoạt động**: Ghi nhận mọi thay đổi
  `

  const features = [
    {
      title: 'Quản lý phụ cấp',
      description: 'Đăng ký và quản lý phụ cấp cho từng nhân viên',
      icon: Gift,
      color: 'bg-blue-500',
      badge: 'Cá nhân'
    },
    {
      title: 'Loại phụ cấp',
      description: 'Thiết lập và cấu hình các loại phụ cấp',
      icon: Settings,
      color: 'bg-green-500',
      badge: 'Cấu hình'
    },
    {
      title: 'Đăng ký hàng loạt',
      description: 'Áp dụng phụ cấp cho nhiều nhân viên cùng lúc',
      icon: UserPlus,
      color: 'bg-purple-500',
      badge: 'Hàng loạt'
    },
    {
      title: 'Báo cáo phụ cấp',
      description: 'Xuất báo cáo và thống kê chi phí phụ cấp',
      icon: BarChart3,
      color: 'bg-orange-500',
      badge: 'Phân tích'
    }
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý phụ cấp lương
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn thiết lập và quản lý các loại phụ cấp lương cho nhân viên
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
