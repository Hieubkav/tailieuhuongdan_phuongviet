import Link from 'next/link'
import { Settings, Calculator, Layers, Code, FileText, Zap } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function CauHinhLuongPage() {
  const content = `
# 5.3.7. Cấu hình phân hệ bảng lương

## Tổng quan
Phần cấu hình phân hệ bảng lương cho phép thiết lập các thành phần cơ bản để tính toán lương, bao gồm cấu trúc lương và quy tắc lương.

## Cấu trúc chức năng

### 5.3.7.1. Cấu trúc lương
### 5.3.7.2. Quy tắc lương

---

## 5.3.7.1. Cấu trúc lương

### Mục đích
Chức năng này để thực hiện quản lý cấu trúc lương, định nghĩa các thành phần tạo nên bảng lương và cách thức tính toán.

### Đối tượng sử dụng
- **Quản trị viên hệ thống**: Thiết lập và cấu hình toàn bộ
- **Cán bộ nhân sự**: Quản lý và điều chỉnh cấu trúc
- **Kế toán trưởng**: Phê duyệt và kiểm soát

### Truy cập chức năng
Trên giao diện phần mềm, chọn **"Cấu hình"** → **"Cấu trúc lương"**. Hệ thống hiển thị giao diện quản lý cấu trúc lương.

### Giao diện chính
Hiển thị danh sách tất cả các cấu trúc lương đã được thiết lập trong hệ thống.

### Các thao tác có thể thực hiện
- **Thêm mới**: Tạo cấu trúc lương mới
- **Sửa**: Chỉnh sửa cấu trúc lương hiện có
- **Xóa**: Xóa cấu trúc lương không còn sử dụng
- **Nhân bản (sao chép)**: Sao chép cấu trúc để tạo mới
- **Import dữ liệu**: Nhập cấu trúc từ file Excel
- **Export dữ liệu**: Xuất cấu trúc ra file Excel

### Chi tiết thêm mới cấu trúc lương

#### Thông tin cơ bản
Chọn **"Mới"** để tạo cấu trúc lương mới:

**📝 Tên cấu trúc lương**: 
- Nhập tên mô tả cho cấu trúc lương
- Ví dụ: "Cấu trúc lương nhân viên văn phòng", "Cấu trúc lương công nhân"
- Tên phải rõ ràng, phản ánh đúng đối tượng áp dụng

**🔢 Mã cấu trúc**: 
- Nhập mã viết tắt cho cấu trúc lương
- Ví dụ: "CLNV", "CLCN"
- Mã duy nhất trong hệ thống

**📋 Mô tả**: 
- Mô tả chi tiết về cấu trúc lương
- Đối tượng áp dụng và điều kiện
- Các thành phần chính của cấu trúc

**⚙️ Quy tắc lương**: 
- Chọn nhiều quy tắc lương để tạo thành cấu trúc
- Mỗi quy tắc đại diện cho một thành phần tính lương
- Có thể sắp xếp thứ tự ưu tiên các quy tắc

### Các thành phần cấu trúc lương

#### Thành phần thu nhập
- **Lương cơ bản**: Mức lương theo hợp đồng lao động
- **Phụ cấp chức vụ**: Phụ cấp theo vị trí công việc
- **Phụ cấp khác**: Các loại phụ cấp đặc biệt
- **Thưởng KPI**: Thưởng theo hiệu suất công việc
- **Làm thêm giờ**: Tiền làm thêm giờ theo quy định
- **Thưởng dự án**: Thưởng hoàn thành dự án

#### Thành phần khấu trừ
- **BHXH (8%)**: Bảo hiểm xã hội
- **BHYT (1.5%)**: Bảo hiểm y tế
- **BHTN (1%)**: Bảo hiểm thất nghiệp
- **Thuế TNCN**: Thuế thu nhập cá nhân
- **Tạm ứng**: Các khoản tạm ứng đã nhận
- **Phạt**: Các khoản phạt vi phạm

#### Thành phần tính toán
- **Thu nhập chịu thuế**: Tổng thu nhập trừ các khoản không chịu thuế
- **Thu nhập sau thuế**: Thu nhập sau khi trừ thuế TNCN
- **Thực lĩnh**: Số tiền cuối cùng nhân viên nhận được

### Quy trình thiết lập cấu trúc lương

#### Bước 1: Phân tích yêu cầu
1. **Xác định đối tượng**: Cấu trúc lương cho nhóm nào
2. **Phân tích thành phần**: Các khoản thu nhập và khấu trừ
3. **Quy định pháp luật**: Tuân thủ các quy định hiện hành
4. **Chính sách công ty**: Phù hợp với chính sách nội bộ

#### Bước 2: Thiết kế cấu trúc
1. **Liệt kê thành phần**: Danh sách tất cả thành phần
2. **Xác định công thức**: Công thức tính cho từng thành phần
3. **Thiết lập mối quan hệ**: Quan hệ giữa các thành phần
4. **Kiểm tra logic**: Đảm bảo logic tính toán đúng

#### Bước 3: Tạo quy tắc lương
1. **Tạo quy tắc**: Tạo quy tắc cho từng thành phần
2. **Test quy tắc**: Kiểm tra tính toán của quy tắc
3. **Điều chỉnh**: Sửa đổi nếu có sai sót
4. **Phê duyệt**: Xin phê duyệt từ cấp có thẩm quyền

#### Bước 4: Tạo cấu trúc lương
1. **Nhập thông tin**: Nhập tên và mô tả cấu trúc
2. **Chọn quy tắc**: Chọn các quy tắc lương phù hợp
3. **Sắp xếp thứ tự**: Sắp xếp thứ tự thực hiện
4. **Lưu và kích hoạt**: Lưu cấu trúc và kích hoạt sử dụng

---

## 5.3.7.2. Quy tắc lương

### Mục đích
Chức năng này để thực hiện quản lý quy tắc lương, định nghĩa các công thức tính toán cụ thể cho từng thành phần trong bảng lương.

### Đối tượng sử dụng
- **Quản trị viên hệ thống**: Tạo và quản lý quy tắc
- **Chuyên viên IT**: Hỗ trợ kỹ thuật và debug
- **Kế toán**: Xác minh tính chính xác

### Truy cập chức năng
Trên giao diện phần mềm, chọn **"Cấu hình"** → **"Quy tắc lương"**. Hệ thống hiển thị giao diện quản lý quy tắc lương.

### Giao diện chính
Hiển thị danh sách tất cả các quy tắc lương đã được thiết lập trong hệ thống.

### Các thao tác có thể thực hiện
- **Thêm mới**: Tạo quy tắc lương mới
- **Sửa**: Chỉnh sửa quy tắc lương hiện có
- **Xóa**: Xóa quy tắc lương không còn sử dụng
- **Nhân bản (sao chép)**: Sao chép quy tắc để tạo mới
- **Test**: Kiểm tra tính toán của quy tắc
- **Import dữ liệu**: Nhập quy tắc từ file
- **Export dữ liệu**: Xuất quy tắc ra file

### Chi tiết thêm mới quy tắc lương

#### Thông tin cơ bản
Chọn **"Mới"** để tạo quy tắc lương mới:

**📝 Tên quy tắc**: 
- Nhập tên mô tả cho quy tắc lương
- Ví dụ: "Tính lương cơ bản", "Tính thuế TNCN"
- Tên phải rõ ràng, phản ánh chức năng

**🔢 Mã quy tắc**: 
- Nhập mã viết tắt cho quy tắc
- Ví dụ: "LCB", "THUE_TNCN"
- Mã duy nhất trong hệ thống

**📊 Loại quy tắc**: 
- **Thu nhập**: Quy tắc tính các khoản thu nhập
- **Khấu trừ**: Quy tắc tính các khoản khấu trừ
- **Tính toán**: Quy tắc tính toán trung gian
- **Kết quả**: Quy tắc tính kết quả cuối cùng

**🧮 Tính toán**: 
- **Biểu thức tính toán**: Công thức để tính toán quy tắc lương
- Sử dụng các biến, hằng số và phép toán
- Có thể tham chiếu đến các quy tắc khác
- Hỗ trợ các hàm tính toán phức tạp

### Ngôn ngữ biểu thức tính toán

#### Biến hệ thống
- **LUONG_CO_BAN**: Lương cơ bản từ hợp đồng
- **NGAY_CONG_CHUAN**: Số ngày công chuẩn trong tháng
- **NGAY_CONG_THUC_TE**: Số ngày công thực tế
- **GIO_LAM_THEM**: Số giờ làm thêm
- **HE_SO_LUONG**: Hệ số lương (nếu có)

#### Hằng số
- **TY_LE_BHXH**: 0.08 (8%)
- **TY_LE_BHYT**: 0.015 (1.5%)
- **TY_LE_BHTN**: 0.01 (1%)
- **LUONG_TOI_THIEU**: Mức lương tối thiểu vùng

#### Phép toán
- **Cộng (+)**: Phép cộng
- **Trừ (-)**: Phép trừ
- **Nhân (*)**: Phép nhân
- **Chia (/)**: Phép chia
- **Lũy thừa (**)**: Phép lũy thừa
- **Modulo (%)**: Phép chia lấy dư

#### Hàm tính toán
- **MAX(a, b)**: Giá trị lớn nhất
- **MIN(a, b)**: Giá trị nhỏ nhất
- **ROUND(x, n)**: Làm tròn đến n chữ số
- **IF(điều_kiện, giá_trị_đúng, giá_trị_sai)**: Hàm điều kiện
- **SUM(danh_sách)**: Tổng các giá trị

### Ví dụ biểu thức tính toán

#### Tính lương cơ bản theo ngày công
\`\`\`
LUONG_CO_BAN * NGAY_CONG_THUC_TE / NGAY_CONG_CHUAN
\`\`\`

#### Tính BHXH
\`\`\`
MAX(LUONG_CO_BAN, LUONG_TOI_THIEU) * TY_LE_BHXH
\`\`\`

#### Tính thuế TNCN (đơn giản)
\`\`\`
IF(THU_NHAP_CHIU_THUE > 11000000, 
   (THU_NHAP_CHIU_THUE - 11000000) * 0.1, 
   0)
\`\`\`

#### Tính làm thêm giờ
\`\`\`
GIO_LAM_THEM * LUONG_CO_BAN / (NGAY_CONG_CHUAN * 8) * 1.5
\`\`\`

### Quy trình tạo quy tắc lương

#### Bước 1: Phân tích yêu cầu
1. **Xác định mục đích**: Quy tắc để tính gì
2. **Thu thập thông tin**: Các thông tin đầu vào cần thiết
3. **Nghiên cứu công thức**: Công thức tính toán chuẩn
4. **Xác định điều kiện**: Các điều kiện đặc biệt

#### Bước 2: Thiết kế công thức
1. **Viết công thức**: Viết công thức bằng ngôn ngữ biểu thức
2. **Kiểm tra syntax**: Đảm bảo cú pháp đúng
3. **Test với dữ liệu mẫu**: Kiểm tra với các trường hợp
4. **Tối ưu hóa**: Cải thiện hiệu suất nếu cần

#### Bước 3: Tạo và test quy tắc
1. **Nhập thông tin**: Nhập tên, mã và biểu thức
2. **Lưu quy tắc**: Lưu vào hệ thống
3. **Test tính toán**: Chạy test với dữ liệu thực
4. **Debug**: Sửa lỗi nếu có

#### Bước 4: Triển khai và giám sát
1. **Áp dụng vào cấu trúc**: Sử dụng trong cấu trúc lương
2. **Giám sát kết quả**: Theo dõi kết quả tính toán
3. **Điều chỉnh**: Sửa đổi nếu cần thiết
4. **Tài liệu hóa**: Ghi chép lại cho việc bảo trì

## Tích hợp và sử dụng

### Tích hợp với module lương
- **Tính lương tự động**: Sử dụng cấu trúc và quy tắc để tính lương
- **Kiểm tra tính nhất quán**: Đảm bảo tính toán nhất quán
- **Cập nhật real-time**: Cập nhật khi có thay đổi
- **Backup cấu hình**: Sao lưu cấu hình quan trọng

### Quản lý phiên bản
- **Version control**: Quản lý các phiên bản cấu hình
- **Rollback**: Khôi phục phiên bản trước khi cần
- **Change log**: Ghi nhận các thay đổi
- **Approval**: Quy trình phê duyệt thay đổi

### Monitoring và debug
- **Log tính toán**: Ghi nhận quá trình tính toán
- **Error handling**: Xử lý lỗi khi tính toán
- **Performance**: Theo dõi hiệu suất tính toán
- **Alert**: Cảnh báo khi có bất thường

## Lưu ý quan trọng

### Tính chính xác
- **Kiểm tra kỹ lưỡng**: Test với nhiều trường hợp
- **Validation**: Xác minh với chuyên gia
- **Cross-check**: Đối chiếu với tính toán thủ công
- **Documentation**: Tài liệu hóa đầy đủ

### Bảo mật
- **Phân quyền**: Chỉ người có quyền mới sửa được
- **Audit trail**: Ghi nhận mọi thay đổi
- **Backup**: Sao lưu cấu hình thường xuyên
- **Recovery**: Kế hoạch khôi phục khi có sự cố

### Tuân thủ pháp luật
- **Quy định lương**: Tuân thủ quy định về lương
- **Thuế TNCN**: Tính thuế đúng quy định
- **Bảo hiểm**: Đóng bảo hiểm theo luật định
- **Cập nhật**: Cập nhật khi có quy định mới

### Hiệu suất
- **Tối ưu công thức**: Viết công thức hiệu quả
- **Cache**: Sử dụng cache cho tính toán phức tạp
- **Parallel**: Tính toán song song khi có thể
- **Monitor**: Theo dõi thời gian tính toán
  `

  const features = [
    {
      title: 'Cấu trúc lương',
      description: 'Thiết lập cấu trúc lương với các thành phần thu nhập và khấu trừ',
      icon: Layers,
      color: 'bg-blue-500',
      badge: 'Cấu trúc'
    },
    {
      title: 'Quy tắc lương',
      description: 'Định nghĩa công thức tính toán cho từng thành phần lương',
      icon: Calculator,
      color: 'bg-green-500',
      badge: 'Công thức'
    },
    {
      title: 'Biểu thức tính toán',
      description: 'Sử dụng ngôn ngữ biểu thức để tạo công thức phức tạp',
      icon: Code,
      color: 'bg-purple-500',
      badge: 'Nâng cao'
    },
    {
      title: 'Test và debug',
      description: 'Kiểm tra và debug các quy tắc tính toán',
      icon: Zap,
      color: 'bg-orange-500',
      badge: 'Kiểm tra'
    }
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Cấu hình phân hệ bảng lương
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn thiết lập cấu trúc lương và quy tắc tính toán lương
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
