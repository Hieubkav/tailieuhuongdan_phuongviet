import Link from 'next/link'
import { TrendingUp, TrendingDown, Plus, Minus, FileText, Upload } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function TangTruPage() {
  const content = `
# 5.3.3. Quản lý các khoản tăng, trừ khác

## Mục đích
Chức năng này để thực hiện quản lý các khoản tăng trừ lương của nhân viên ngoài lương cơ bản và phụ cấp thường xuyên.

## Đối tượng sử dụng
- **Cán bộ Quản trị**: Quản lý toàn bộ các khoản tăng trừ
- **Kế toán**: Xử lý và tính toán các khoản
- **Trưởng phòng**: Đề xuất các khoản cho nhân viên

## Truy cập chức năng
Trên giao diện phần mềm, chọn **"Các khoản tăng, trừ khác"**. Hệ thống hiển thị giao diện quản lý.

## Giao diện chính

### Danh sách các khoản tăng, trừ
Hiển thị tất cả các khoản tăng trừ đã được thiết lập trong hệ thống.

### Các thao tác có thể thực hiện
- **Thêm mới**: Tạo khoản tăng/trừ mới cho nhân viên
- **Sửa**: Chỉnh sửa thông tin khoản tăng/trừ
- **Xóa**: Xóa khoản tăng/trừ không còn sử dụng
- **Nhân bản (sao chép)**: Sao chép khoản tăng/trừ cho nhiều nhân viên
- **Import dữ liệu**: Nhập dữ liệu từ file Excel
- **Export dữ liệu**: Xuất dữ liệu ra file Excel

## Chi tiết thêm mới khoản tăng/trừ lương

### Thông tin cơ bản
Chọn **"Mới"** để tạo khoản tăng/trừ mới. Hệ thống hiển thị form nhập liệu:

#### Các trường thông tin quan trọng:

**👤 Nhân viên**: 
- Chọn nhân viên cần áp dụng khoản tăng/trừ
- Có thể chọn nhiều nhân viên cùng lúc
- Tìm kiếm nhanh theo tên hoặc mã nhân viên

**📅 Kỳ lương**: 
- Chọn thời gian để xác định tăng/trừ trong kỳ lương đó
- Có thể áp dụng cho nhiều kỳ lương
- Thiết lập thời gian hiệu lực

**💰 Các khoản cộng khác**: 
- Nhập số tiền cần cộng thêm vào lương
- Ví dụ: thưởng đột xuất, hỗ trợ đặc biệt, bồi thường
- Có thể nhập theo số tiền cố định hoặc phần trăm lương

**💸 Các khoản trừ khác**: 
- Nhập số tiền cần trừ khỏi lương
- Ví dụ: phạt vi phạm, khấu trừ thiệt hại, vay công ty
- Tính toán tự động dựa trên quy tắc đã thiết lập

### Các loại khoản tăng, trừ phổ biến

#### Khoản tăng (cộng thêm)
- **Thưởng đột xuất**: Thưởng cho thành tích đặc biệt
- **Hỗ trợ đặc biệt**: Hỗ trợ trong trường hợp khó khăn
- **Bồi thường**: Bồi thường làm thêm giờ, ngày lễ
- **Thưởng dự án**: Thưởng hoàn thành dự án
- **Hoa hồng**: Hoa hồng bán hàng, môi giới
- **Phụ cấp tạm thời**: Phụ cấp công tác, đi công tác

#### Khoản trừ (khấu trừ)
- **Phạt vi phạm**: Phạt đi trễ, vi phạm nội quy
- **Khấu trừ thiệt hại**: Bồi thường thiệt hại tài sản
- **Vay công ty**: Trừ dần các khoản vay từ công ty
- **Tạm ứng**: Trừ các khoản tạm ứng đã nhận
- **Bảo hiểm bổ sung**: Các khoản bảo hiểm tự nguyện
- **Đoàn phí**: Phí đoàn thể, công đoàn

## Quy trình xử lý

### Bước 1: Xác định nhu cầu
1. **Phân tích yêu cầu**: Xác định loại khoản tăng/trừ cần thiết
2. **Đối tượng áp dụng**: Xác định nhân viên được áp dụng
3. **Thời gian hiệu lực**: Thiết lập kỳ lương áp dụng
4. **Mức độ tác động**: Tính toán số tiền hoặc tỷ lệ

### Bước 2: Tạo khoản tăng/trừ
1. **Nhập thông tin cơ bản**: Tên, mô tả, loại khoản
2. **Thiết lập tham số**: Số tiền, tỷ lệ, công thức tính
3. **Chọn đối tượng**: Nhân viên, phòng ban áp dụng
4. **Xác nhận và lưu**: Kiểm tra thông tin trước khi lưu

### Bước 3: Phê duyệt và áp dụng
1. **Gửi phê duyệt**: Trình cấp có thẩm quyền phê duyệt
2. **Xem xét và duyệt**: Cấp quản lý xem xét và quyết định
3. **Áp dụng vào lương**: Tích hợp vào kỳ lương tương ứng
4. **Thông báo nhân viên**: Thông báo cho nhân viên biết

### Bước 4: Theo dõi và kiểm soát
1. **Theo dõi thực hiện**: Giám sát việc áp dụng các khoản
2. **Kiểm tra tính chính xác**: Đối chiếu với dữ liệu gốc
3. **Điều chỉnh nếu cần**: Sửa đổi khi có sai sót
4. **Báo cáo định kỳ**: Tổng hợp báo cáo cho lãnh đạo

## Import dữ liệu bằng Excel

### Chuẩn bị file Excel
1. **Tải template**: Tải mẫu file Excel từ hệ thống
2. **Điền thông tin**: Nhập đầy đủ thông tin theo format
3. **Kiểm tra dữ liệu**: Đảm bảo dữ liệu chính xác và đầy đủ
4. **Lưu file**: Lưu file với định dạng Excel (.xlsx)

### Thực hiện import
1. **Chọn chức năng Import**: Nhấn nút "Import dữ liệu"
2. **Upload file**: Chọn file Excel đã chuẩn bị
3. **Kiểm tra preview**: Xem trước dữ liệu sẽ được import
4. **Xác nhận import**: Thực hiện import vào hệ thống

### Xử lý lỗi import
- **Dữ liệu trùng lặp**: Hệ thống cảnh báo và đề xuất xử lý
- **Format sai**: Hướng dẫn sửa format cho đúng
- **Thiếu thông tin**: Liệt kê các trường bắt buộc còn thiếu
- **Giá trị không hợp lệ**: Kiểm tra và sửa các giá trị sai

## Báo cáo và thống kê

### Báo cáo theo nhân viên
- **Tổng khoản tăng**: Tổng các khoản được cộng thêm
- **Tổng khoản trừ**: Tổng các khoản bị khấu trừ
- **Ảnh hưởng đến lương**: Mức độ tác động lên lương thực lĩnh
- **Lịch sử thay đổi**: Theo dõi các thay đổi theo thời gian

### Báo cáo theo kỳ lương
- **Tổng chi phí tăng**: Tổng số tiền các khoản tăng trong kỳ
- **Tổng số tiền trừ**: Tổng số tiền các khoản trừ trong kỳ
- **Phân tích theo loại**: Phân loại theo từng loại khoản
- **So sánh các kỳ**: So sánh với các kỳ lương trước

### Báo cáo tổng hợp
- **Xu hướng theo thời gian**: Phân tích xu hướng tăng/giảm
- **Phân tích theo phòng ban**: So sánh giữa các phòng ban
- **Top nhân viên**: Danh sách nhân viên có nhiều khoản tăng/trừ
- **Hiệu quả chính sách**: Đánh giá hiệu quả các chính sách

## Tích hợp với các module khác

### Tích hợp với module lương
- **Tự động tính vào lương**: Các khoản được tính tự động
- **Hiển thị trong phiếu lương**: Thể hiện rõ ràng trên phiếu lương
- **Ảnh hưởng đến thuế**: Tính toán thuế TNCN chính xác
- **Báo cáo tổng hợp**: Tích hợp vào báo cáo lương tổng thể

### Tích hợp với module nhân sự
- **Liên kết hồ sơ nhân viên**: Kết nối với thông tin cá nhân
- **Theo dõi kỷ luật**: Liên quan đến các quyết định kỷ luật
- **Đánh giá hiệu suất**: Kết hợp với kết quả đánh giá
- **Lịch sử công tác**: Ghi nhận vào hồ sơ nhân viên

### Tích hợp với module kế toán
- **Hạch toán tự động**: Tự động tạo bút toán kế toán
- **Phân bổ chi phí**: Phân bổ chi phí theo phòng ban
- **Báo cáo tài chính**: Ảnh hưởng đến báo cáo tài chính
- **Kiểm soát ngân sách**: Theo dõi và kiểm soát ngân sách

## Lưu ý quan trọng

### Quy định pháp luật
- **Tuân thủ Luật Lao động**: Đảm bảo các khoản hợp pháp
- **Quy định về thuế**: Tính thuế TNCN đúng quy định
- **Bảo hiểm xã hội**: Ảnh hưởng đến mức đóng BHXH
- **Hợp đồng lao động**: Phù hợp với điều khoản hợp đồng

### Kiểm soát và phê duyệt
- **Phân quyền rõ ràng**: Ai có quyền tạo, duyệt, sửa đổi
- **Quy trình phê duyệt**: Thiết lập quy trình phê duyệt chặt chẽ
- **Giới hạn thẩm quyền**: Quy định mức thẩm quyền theo cấp
- **Audit trail**: Lưu trữ lịch sử mọi thay đổi

### Bảo mật thông tin
- **Mã hóa dữ liệu**: Bảo vệ thông tin lương nhạy cảm
- **Phân quyền truy cập**: Chỉ người có quyền mới xem được
- **Backup định kỳ**: Sao lưu dữ liệu thường xuyên
- **Log hoạt động**: Ghi nhận mọi hoạt động trên hệ thống
  `

  const features = [
    {
      title: 'Khoản tăng lương',
      description: 'Quản lý các khoản thưởng, hỗ trợ, bồi thường đặc biệt',
      icon: TrendingUp,
      color: 'bg-green-500',
      badge: 'Cộng thêm'
    },
    {
      title: 'Khoản trừ lương',
      description: 'Quản lý các khoản phạt, khấu trừ, vay công ty',
      icon: TrendingDown,
      color: 'bg-red-500',
      badge: 'Khấu trừ'
    },
    {
      title: 'Import Excel',
      description: 'Nhập dữ liệu hàng loạt từ file Excel',
      icon: Upload,
      color: 'bg-blue-500',
      badge: 'Hàng loạt'
    },
    {
      title: 'Báo cáo chi tiết',
      description: 'Xuất báo cáo và thống kê các khoản tăng trừ',
      icon: FileText,
      color: 'bg-purple-500',
      badge: 'Phân tích'
    }
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý khoản tăng, trừ khác
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn quản lý các khoản tăng trừ lương đặc biệt ngoài lương cơ bản
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
