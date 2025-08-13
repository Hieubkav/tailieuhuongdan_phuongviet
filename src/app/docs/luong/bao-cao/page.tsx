import Link from 'next/link'
import { BarChart3, CreditCard, FileText, Download, TrendingUp, Building } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function BaoCaoLuongPage() {
  const content = `
# 5.3.6. Báo cáo lương

## Tổng quan
Hệ thống báo cáo lương cung cấp các loại báo cáo chi tiết và tổng hợp, phục vụ cho việc quản lý, thanh toán lương và báo cáo với các cơ quan chức năng.

## Cấu trúc chức năng

### 5.3.6.1. Báo cáo chuyển lương ngân hàng
### 5.3.6.2. Báo cáo tổng hợp tiền lương

---

## 5.3.6.1. Báo cáo chuyển lương ngân hàng

### Mục đích
Chức năng này để thực hiện xuất các báo cáo phục vụ chuyển lương qua ngân hàng, đảm bảo việc chi trả lương chính xác và kịp thời.

### Điều kiện sử dụng
- **Đợt lương đã được phê duyệt**: Chỉ xuất báo cáo khi đợt lương đã được phê duyệt chính thức
- **Thông tin ngân hàng đầy đủ**: Nhân viên đã cung cấp đầy đủ thông tin tài khoản ngân hàng
- **Dữ liệu chính xác**: Đã kiểm tra và xác nhận tính chính xác của dữ liệu lương

### Truy cập chức năng
Trên giao diện phần mềm, chọn **"Báo cáo"** → **"Báo cáo chuyển lương ngân hàng"**. Hệ thống hiển thị giao diện báo cáo.

### Giao diện báo cáo

#### Thiết lập tham số báo cáo
- **Chọn kỳ lương**: Chọn kỳ lương cần xuất báo cáo
- **Chọn phòng ban**: Lọc theo phòng ban cụ thể (nếu cần)
- **Chọn ngân hàng**: Lọc theo ngân hàng cụ thể
- **Loại báo cáo**: Chọn định dạng báo cáo phù hợp

#### Xem các báo cáo chuyển lương
Hệ thống hiển thị danh sách các báo cáo có thể xuất:

**📊 Báo cáo tổng hợp**:
- Tổng số nhân viên nhận lương qua ngân hàng
- Tổng số tiền cần chuyển khoản
- Phân chia theo từng ngân hàng
- Thống kê theo phòng ban

**📋 Danh sách chi tiết**:
- Thông tin chi tiết từng nhân viên
- Số tài khoản và tên ngân hàng
- Số tiền thực lĩnh cần chuyển
- Ghi chú đặc biệt (nếu có)

### Xuất file Excel theo ngân hàng

#### Cấu trúc file Excel
Trong file Excel được phân loại thành các sheet theo từng ngân hàng:

**📄 Sheet theo ngân hàng**:
- **Sheet Vietcombank**: Danh sách nhân viên có tài khoản Vietcombank
- **Sheet BIDV**: Danh sách nhân viên có tài khoản BIDV
- **Sheet Agribank**: Danh sách nhân viên có tài khoản Agribank
- **Sheet Techcombank**: Danh sách nhân viên có tài khoản Techcombank

**📄 Sheet không có ngân hàng**:
- Danh sách nhân viên chưa có thông tin ngân hàng
- Cần chi trả bằng tiền mặt
- Yêu cầu cập nhật thông tin tài khoản

#### Thông tin trong mỗi sheet
- **STT**: Số thứ tự
- **Mã nhân viên**: Mã định danh nhân viên
- **Họ tên**: Họ tên đầy đủ
- **Số tài khoản**: Số tài khoản ngân hàng
- **Số tiền**: Số tiền thực lĩnh
- **Ghi chú**: Các ghi chú đặc biệt

### Quy trình chuyển lương

#### Bước 1: Chuẩn bị dữ liệu
1. **Kiểm tra đợt lương**: Đảm bảo đã phê duyệt
2. **Xác minh thông tin**: Kiểm tra thông tin ngân hàng
3. **Đối chiếu số liệu**: So sánh với bảng lương gốc
4. **Phê duyệt cuối cùng**: Xác nhận trước khi chuyển

#### Bước 2: Xuất báo cáo
1. **Chọn tham số**: Thiết lập các tham số báo cáo
2. **Tạo báo cáo**: Hệ thống tự động tạo báo cáo
3. **Kiểm tra preview**: Xem trước nội dung báo cáo
4. **Xuất file**: Tải file Excel về máy tính

#### Bước 3: Xử lý chuyển khoản
1. **Phân loại theo ngân hàng**: Sử dụng các sheet riêng biệt
2. **Tạo lệnh chuyển khoản**: Tạo file lệnh cho từng ngân hàng
3. **Thực hiện chuyển khoản**: Gửi lệnh đến ngân hàng
4. **Theo dõi kết quả**: Kiểm tra trạng thái chuyển khoản

#### Bước 4: Xác nhận và hoàn tất
1. **Nhận xác nhận**: Nhận xác nhận từ ngân hàng
2. **Cập nhật trạng thái**: Cập nhật trạng thái đã chi trả
3. **Thông báo nhân viên**: Thông báo lương đã được chuyển
4. **Lưu trữ hồ sơ**: Lưu trữ các chứng từ liên quan

---

## 5.3.6.2. Báo cáo tổng hợp tiền lương

### Mục đích
Chức năng này để thực hiện xuất các báo cáo tổng hợp tiền lương theo kỳ, phục vụ cho việc quản lý, phân tích và báo cáo với lãnh đạo.

### Truy cập chức năng
Trên giao diện phần mềm, chọn **"Báo cáo"** → **"Xuất ra Excel"**. Hệ thống hiển thị giao diện lựa chọn báo cáo.

### Chọn các thông tin cần xuất báo cáo

#### Báo cáo tổng hợp tiền lương (theo kỳ lương)

**📊 Thông tin tổng hợp**:
- **Tổng số nhân viên**: Số lượng nhân viên trong kỳ lương
- **Tổng quỹ lương**: Tổng số tiền lương cần chi trả
- **Tổng các khoản khấu trừ**: BHXH, BHYT, BHTN, thuế TNCN
- **Tổng thực lĩnh**: Số tiền thực tế nhân viên nhận được

**📈 Phân tích theo cấu trúc**:
- **Theo phòng ban**: Phân tích quỹ lương theo từng phòng ban
- **Theo chức vụ**: Phân tích theo cấp bậc chức vụ
- **Theo loại hợp đồng**: Phân chia theo loại hợp đồng lao động
- **Theo độ tuổi**: Thống kê theo nhóm tuổi

**📋 So sánh và xu hướng**:
- **So sánh với kỳ trước**: Tăng/giảm so với kỳ lương trước
- **So sánh cùng kỳ năm trước**: Xu hướng theo năm
- **Tỷ lệ tăng trưởng**: Tỷ lệ tăng trưởng quỹ lương
- **Dự báo kỳ sau**: Dự báo cho kỳ lương tiếp theo

#### Báo cáo chi tiết tiền lương (theo kỳ lương)

**👤 Thông tin nhân viên**:
- **Mã nhân viên**: Mã định danh duy nhất
- **Họ tên**: Họ tên đầy đủ của nhân viên
- **Phòng ban**: Phòng ban công tác
- **Chức vụ**: Vị trí công việc hiện tại

**💰 Chi tiết lương**:
- **Lương cơ bản**: Mức lương cơ bản theo hợp đồng
- **Các khoản phụ cấp**: Chi tiết từng loại phụ cấp
- **Thưởng**: Các khoản thưởng trong kỳ
- **Làm thêm giờ**: Tiền làm thêm giờ

**➖ Chi tiết khấu trừ**:
- **BHXH (8%)**: Bảo hiểm xã hội
- **BHYT (1.5%)**: Bảo hiểm y tế
- **BHTN (1%)**: Bảo hiểm thất nghiệp
- **Thuế TNCN**: Thuế thu nhập cá nhân
- **Tạm ứng**: Các khoản tạm ứng đã nhận
- **Các khoản khác**: Phạt, vay, đóng góp...

**💵 Kết quả cuối cùng**:
- **Tổng thu nhập**: Tổng các khoản thu nhập
- **Tổng khấu trừ**: Tổng các khoản bị trừ
- **Thực lĩnh**: Số tiền thực tế nhận được
- **Phương thức chi trả**: Chuyển khoản/tiền mặt

### Các loại báo cáo khác

#### Báo cáo theo thời gian
- **Báo cáo tháng**: Báo cáo lương hàng tháng
- **Báo cáo quý**: Tổng hợp theo quý
- **Báo cáo năm**: Báo cáo tổng kết năm
- **Báo cáo tùy chỉnh**: Theo khoảng thời gian tùy chọn

#### Báo cáo theo đối tượng
- **Báo cáo theo phòng ban**: Chi tiết từng phòng ban
- **Báo cáo theo chức vụ**: Phân tích theo cấp bậc
- **Báo cáo theo nhân viên**: Chi tiết cá nhân
- **Báo cáo theo dự án**: Phân bổ chi phí theo dự án

#### Báo cáo chuyên biệt
- **Báo cáo thuế TNCN**: Cho cơ quan thuế
- **Báo cáo BHXH**: Cho bảo hiểm xã hội
- **Báo cáo lao động**: Cho sở lao động
- **Báo cáo nội bộ**: Cho ban lãnh đạo

### Quy trình tạo báo cáo

#### Bước 1: Xác định nhu cầu
1. **Mục đích sử dụng**: Báo cáo cho ai, mục đích gì
2. **Thời gian**: Kỳ báo cáo cần thiết
3. **Phạm vi**: Toàn công ty hay từng phòng ban
4. **Định dạng**: Excel, PDF hay in giấy

#### Bước 2: Thiết lập tham số
1. **Chọn loại báo cáo**: Tổng hợp hay chi tiết
2. **Chọn kỳ lương**: Tháng/quý/năm cần báo cáo
3. **Chọn đối tượng**: Phòng ban, nhân viên cụ thể
4. **Chọn nội dung**: Các thông tin cần hiển thị

#### Bước 3: Tạo và kiểm tra
1. **Tạo báo cáo**: Hệ thống tự động tạo báo cáo
2. **Xem trước**: Preview nội dung báo cáo
3. **Kiểm tra số liệu**: Đối chiếu với dữ liệu gốc
4. **Điều chỉnh**: Sửa đổi nếu cần thiết

#### Bước 4: Xuất và sử dụng
1. **Xuất file**: Tải về máy tính
2. **Chia sẻ**: Gửi cho người có liên quan
3. **Lưu trữ**: Lưu trữ theo quy định
4. **Theo dõi**: Theo dõi việc sử dụng báo cáo

## Tính năng nâng cao

### Báo cáo tự động
- **Lập lịch báo cáo**: Tự động tạo báo cáo định kỳ
- **Gửi email**: Tự động gửi báo cáo qua email
- **Thông báo**: Cảnh báo khi có báo cáo mới
- **Lưu trữ**: Tự động lưu trữ báo cáo

### Phân tích dữ liệu
- **Dashboard**: Bảng điều khiển trực quan
- **Biểu đồ**: Hiển thị dữ liệu bằng biểu đồ
- **Xu hướng**: Phân tích xu hướng theo thời gian
- **So sánh**: So sánh giữa các kỳ, phòng ban

### Tùy chỉnh báo cáo
- **Template**: Tạo mẫu báo cáo riêng
- **Định dạng**: Tùy chỉnh định dạng hiển thị
- **Logo**: Thêm logo công ty
- **Chữ ký**: Thêm chữ ký điện tử

### Bảo mật báo cáo
- **Phân quyền**: Kiểm soát quyền truy cập
- **Mã hóa**: Mã hóa file báo cáo
- **Watermark**: Thêm watermark bảo mật
- **Audit log**: Ghi nhận việc truy cập báo cáo

## Lưu ý quan trọng

### Tính chính xác
- **Kiểm tra dữ liệu**: Đảm bảo dữ liệu chính xác
- **Đối chiếu**: So sánh với các nguồn khác
- **Xác minh**: Xác minh với phòng ban liên quan
- **Phê duyệt**: Có sự phê duyệt trước khi sử dụng

### Bảo mật thông tin
- **Thông tin nhạy cảm**: Bảo vệ thông tin lương
- **Phân quyền**: Chỉ người có quyền mới xem
- **Lưu trữ an toàn**: Lưu trữ file báo cáo an toàn
- **Xóa khi hết hạn**: Xóa báo cáo khi không cần

### Tuân thủ quy định
- **Quy định nội bộ**: Tuân thủ quy định công ty
- **Pháp luật**: Tuân thủ quy định pháp luật
- **Chuẩn mực**: Theo chuẩn mực kế toán
- **Audit**: Chuẩn bị cho việc kiểm toán

### Hiệu quả sử dụng
- **Đúng mục đích**: Sử dụng đúng mục đích
- **Kịp thời**: Tạo báo cáo đúng thời gian
- **Đầy đủ**: Cung cấp đủ thông tin cần thiết
- **Dễ hiểu**: Trình bày rõ ràng, dễ hiểu
  `

  const features = [
    {
      title: 'Chuyển lương ngân hàng',
      description: 'Xuất báo cáo phục vụ chuyển lương qua ngân hàng',
      icon: CreditCard,
      color: 'bg-blue-500',
      badge: 'Ngân hàng'
    },
    {
      title: 'Báo cáo tổng hợp',
      description: 'Báo cáo tổng hợp tiền lương theo kỳ và phòng ban',
      icon: BarChart3,
      color: 'bg-green-500',
      badge: 'Tổng hợp'
    },
    {
      title: 'Báo cáo chi tiết',
      description: 'Báo cáo chi tiết từng nhân viên với đầy đủ thông tin',
      icon: FileText,
      color: 'bg-purple-500',
      badge: 'Chi tiết'
    },
    {
      title: 'Xuất đa định dạng',
      description: 'Xuất báo cáo ra Excel, PDF và các định dạng khác',
      icon: Download,
      color: 'bg-orange-500',
      badge: 'Linh hoạt'
    }
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Báo cáo lương
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn tạo và xuất các loại báo cáo lương chi tiết và tổng hợp
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
