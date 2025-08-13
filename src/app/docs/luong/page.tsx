import Link from 'next/link'
import { FileText, Calculator, TrendingUp, Gift, Minus, BarChart3, Settings, ArrowRight } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function LuongPage() {
  const content = `
# 5. Quản lý bảng lương

## 5.1. Mục đích {#muc-dich}
Cho phép người dùng quản lý Lương của nhân sự một cách toàn diện, chính xác và hiệu quả.

## 5.2. Đối tượng sử dụng {#doi-tuong-su-dung}
Người dùng có vai trò **"Cán bộ Quản trị"** có thể thao tác trên chức năng này.

## 5.3. Truy cập chức năng {#truy-cap-chuc-nang}
Trên giao diện menu chính chọn **Menu >> Bảng lương**

Hệ thống hiển thị phân hệ Bảng lương với đầy đủ các chức năng quản lý lương.

## Các tiện ích trên phần mềm

### 🔍 Tìm kiếm theo nhiều tiêu chí
- Tìm theo tên nhân viên, mã nhân viên
- Lọc theo phòng ban, chức vụ
- Tìm theo kỳ lương, trạng thái
- Tìm theo mức lương, loại hợp đồng

### 📊 Hiển thị giao diện linh hoạt
- **Số mẫu tin trên 1 trang**: Tùy chỉnh số lượng hiển thị
- **Dạng danh sách**: Hiển thị dạng bảng chi tiết
- **Dạng kanban**: Hiển thị dạng thẻ trực quan

## Người dùng có thể thực hiện các thao tác như sau

### 📋 Phiếu lương nhân viên {#phieu-luong-nhan-vien}

**Mục đích**: Quản lý phiếu lương chi tiết từng nhân viên.

**Chức năng chính:**
- Tạo phiếu lương cho từng nhân viên
- Xem chi tiết các khoản thu nhập và khấu trừ
- In phiếu lương cá nhân
- Gửi phiếu lương qua email
- Lưu trữ lịch sử phiếu lương

**Thông tin trong phiếu lương:**
- Thông tin cá nhân nhân viên
- Lương cơ bản và các phụ cấp
- Thưởng và các khoản thu nhập khác
- Các khoản khấu trừ (thuế, bảo hiểm)
- Thực lĩnh cuối cùng

**Quy trình tạo phiếu lương:**
1. Vào menu "Bảng lương" → "Phiếu lương nhân viên"
2. Chọn kỳ lương và nhân viên
3. Hệ thống tự động tính toán dựa trên dữ liệu chấm công
4. Kiểm tra và điều chỉnh nếu cần
5. Phê duyệt và in phiếu lương

### 💰 Quản lý bảng lương/kỳ lương/tháng lương {#quan-ly-ky-luong}

**Mục đích**: Quản lý kỳ lương và bảng lương tổng hợp.

**Các loại kỳ lương:**
- **Kỳ lương tháng**: Lương hàng tháng cho nhân viên
- **Kỳ lương tuần**: Lương theo tuần (nếu áp dụng)
- **Kỳ lương dự án**: Lương theo dự án cụ thể
- **Kỳ lương thưởng**: Thưởng định kỳ hoặc đột xuất

**Quy trình quản lý kỳ lương:**

**1. Tạo kỳ lương mới**
1. Vào menu "Bảng lương" → "Quản lý kỳ lương"
2. Click "Tạo kỳ lương mới"
3. Thiết lập thông tin kỳ lương:
   - Tên kỳ lương
   - Thời gian áp dụng
   - Phòng ban/nhân viên áp dụng
   - Công thức tính lương
4. Lưu và kích hoạt

**2. Tính lương tự động**
1. Chọn kỳ lương cần tính
2. Click "Tính lương tự động"
3. Hệ thống sẽ:
   - Lấy dữ liệu chấm công
   - Áp dụng công thức lương
   - Tính các khoản phụ cấp
   - Tính các khoản khấu trừ
   - Tạo bảng lương tổng hợp

**3. Kiểm tra và điều chỉnh**
1. Xem bảng lương tổng hợp
2. Kiểm tra từng nhân viên
3. Điều chỉnh nếu có sai sót
4. Phê duyệt bảng lương

**4. Chốt kỳ lương**
1. Kiểm tra cuối cùng
2. Chốt kỳ lương (không thể sửa)
3. Xuất báo cáo
4. Chuyển khoản lương

### ➕➖ Quản lý các khoản tăng, trừ khác {#quan-ly-tang-tru}

**Mục đích**: Xử lý các khoản thu nhập và khấu trừ đặc biệt ngoài lương cơ bản.

**Các khoản tăng (thu nhập thêm):**
- **Thưởng hiệu suất**: Thưởng dựa trên KPI
- **Thưởng dự án**: Thưởng hoàn thành dự án
- **Thưởng lễ tết**: Thưởng các dịp đặc biệt
- **Làm thêm giờ**: Tính theo giờ tăng ca
- **Phụ cấp đặc biệt**: Phụ cấp tạm thời

**Các khoản trừ (khấu trừ):**
- **Đi muộn/về sớm**: Phạt vi phạm kỷ luật
- **Vắng mặt**: Trừ lương nghỉ không phép
- **Tạm ứng**: Trừ các khoản đã ứng trước
- **Bồi thường**: Trừ các khoản bồi thường
- **Khấu trừ khác**: Các khoản khấu trừ đặc biệt

**Quy trình quản lý:**

**1. Thêm khoản tăng/trừ**
1. Vào menu "Bảng lương" → "Khoản tăng/trừ"
2. Chọn "Thêm mới"
3. Nhập thông tin:
   - Loại khoản (tăng/trừ)
   - Nhân viên áp dụng
   - Số tiền
   - Lý do
   - Kỳ lương áp dụng
4. Lưu và phê duyệt

**2. Áp dụng vào lương**
- Hệ thống tự động tính vào kỳ lương
- Hiển thị chi tiết trong phiếu lương
- Ghi nhận vào báo cáo lương

### 🎁 Quản lý phụ cấp lương {#quan-ly-phu-cap}

**Mục đích**: Thiết lập và quản lý các loại phụ cấp cho nhân viên.

#### Phụ cấp lương {#phu-cap-luong}

**Các loại phụ cấp phổ biến:**
- **Phụ cấp chức vụ**: Theo vị trí quản lý
- **Phụ cấp trách nhiệm**: Theo mức độ trách nhiệm
- **Phụ cấp độc hại**: Môi trường làm việc đặc biệt
- **Phụ cấp ca đêm**: Làm việc ca đêm
- **Phụ cấp đi lại**: Chi phí đi lại
- **Phụ cấp ăn trưa**: Hỗ trợ ăn trưa
- **Phụ cấp điện thoại**: Hỗ trợ liên lạc
- **Phụ cấp xăng xe**: Chi phí đi lại

**Cách tính phụ cấp:**
- **Cố định**: Số tiền cố định hàng tháng
- **Theo %**: Phần trăm của lương cơ bản
- **Theo ngày công**: Tính theo số ngày làm việc
- **Theo giờ**: Tính theo số giờ làm việc

#### Loại phụ cấp {#loai-phu-cap}

**Phân loại theo tính chất:**
- **Phụ cấp bắt buộc**: Theo quy định pháp luật
- **Phụ cấp tự nguyện**: Theo chính sách công ty
- **Phụ cấp tạm thời**: Có thời hạn cụ thể
- **Phụ cấp thường xuyên**: Áp dụng lâu dài

**Quy trình thiết lập:**
1. Vào menu "Bảng lương" → "Phụ cấp" → "Loại phụ cấp"
2. Tạo loại phụ cấp mới
3. Thiết lập công thức tính
4. Áp dụng cho nhân viên/nhóm nhân viên

#### Báo cáo phụ cấp {#bao-cao-phu-cap}

**Các loại báo cáo:**
- Báo cáo tổng hợp phụ cấp theo tháng
- Báo cáo chi tiết phụ cấp từng nhân viên
- Báo cáo so sánh phụ cấp theo phòng ban
- Báo cáo xu hướng phụ cấp theo thời gian

### 🏛️ Quản lý đóng góp từ lương {#quan-ly-dong-gop}

**Mục đích**: Xử lý các khoản đóng góp bảo hiểm và thuế từ lương.

#### Loại đóng góp {#loai-dong-gop}

**Các loại đóng góp chính:**

**Bảo hiểm xã hội (BHXH):**
- Tỷ lệ: 8% lương đóng BHXH (nhân viên)
- Tỷ lệ: 17.5% lương đóng BHXH (công ty)
- Mức tối đa: 20 lần lương tối thiểu vùng

**Bảo hiểm y tế (BHYT):**
- Tỷ lệ: 1.5% lương đóng BHXH (nhân viên)
- Tỷ lệ: 3% lương đóng BHXH (công ty)

**Bảo hiểm thất nghiệp (BHTN):**
- Tỷ lệ: 1% lương đóng BHXH (nhân viên)
- Tỷ lệ: 1% lương đóng BHXH (công ty)
- Mức tối đa: 20 lần lương tối thiểu vùng

**Thuế thu nhập cá nhân (TNCN):**
- Áp dụng theo biểu thuế lũy tiến
- Giảm trừ gia cảnh: 11,000,000 VNĐ/tháng
- Giảm trừ người phụ thuộc: 4,400,000 VNĐ/người/tháng

**Công đoàn:**
- Tỷ lệ: 1% lương cơ bản (công ty đóng)

#### Báo cáo đóng góp {#bao-cao-dong-gop}

**Các loại báo cáo:**
- Báo cáo tổng hợp đóng góp BHXH, BHYT, BHTN
- Báo cáo thuế TNCN chi tiết
- Báo cáo đóng góp theo phòng ban
- Báo cáo so sánh đóng góp theo tháng

### 📊 Báo cáo lương {#bao-cao-luong}

**Mục đích**: Tạo và xuất các loại báo cáo lương.

#### Báo cáo chuyển lương ngân hàng {#bao-cao-chuyen-luong-ngan-hang}

**Mục đích**: Tạo file chuyển lương qua ngân hàng.

**Thông tin trong báo cáo:**
- Danh sách nhân viên nhận lương qua ngân hàng
- Số tài khoản và tên ngân hàng
- Số tiền chuyển cho từng nhân viên
- Tổng số tiền cần chuyển
- Mã giao dịch và ngày chuyển

**Định dạng file:**
- Excel (.xlsx): Cho ngân hàng xử lý
- CSV (.csv): Tương thích với nhiều hệ thống
- TXT (.txt): Định dạng chuẩn ngân hàng

**Quy trình tạo báo cáo:**
1. Vào menu "Bảng lương" → "Báo cáo" → "Chuyển lương ngân hàng"
2. Chọn kỳ lương
3. Chọn ngân hàng (nếu có nhiều ngân hàng)
4. Kiểm tra danh sách nhân viên
5. Xuất file theo định dạng yêu cầu
6. Gửi file cho ngân hàng

#### Báo cáo tổng hợp tiền lương {#bao-cao-tong-hop-tien-luong}

**Mục đích**: Báo cáo tổng hợp chi phí lương của công ty.

**Nội dung báo cáo:**
- Tổng chi phí lương theo phòng ban
- Phân tích cơ cấu lương (cơ bản, phụ cấp, thưởng)
- So sánh với kỳ trước
- Tỷ lệ chi phí lương/doanh thu
- Dự báo chi phí lương tháng tới

**Các loại báo cáo:**
- Báo cáo tháng: Chi tiết theo tháng
- Báo cáo quý: Tổng hợp theo quý
- Báo cáo năm: Phân tích cả năm
- Báo cáo so sánh: So sánh nhiều kỳ

### ⚙️ Cấu hình phần hệ bảng lương {#cau-hinh-phan-he-luong}

**Mục đích**: Thiết lập cấu trúc và quy tắc tính lương.

#### Cấu trúc lương {#cau-truc-luong}

**Các thành phần lương:**

**Lương cơ bản:**
- Lương theo hợp đồng lao động
- Cơ sở để tính các khoản khác
- Có thể điều chỉnh theo thời gian

**Phụ cấp:**
- Phụ cấp chức vụ
- Phụ cấp trách nhiệm
- Phụ cấp đặc thù nghề nghiệp
- Phụ cấp sinh hoạt

**Thưởng:**
- Thưởng hiệu suất (KPI)
- Thưởng dự án
- Thưởng đột xuất
- Thưởng lễ tết

**Các khoản khấu trừ:**
- Bảo hiểm (BHXH, BHYT, BHTN)
- Thuế thu nhập cá nhân
- Tạm ứng lương
- Các khoản phạt

**Công thức tính lương:**
\`\`\`
Thực lĩnh = Lương cơ bản + Phụ cấp + Thưởng + Tăng ca - Khấu trừ - Thuế TNCN
\`\`\`

#### Quy tắc lương {#quy-tac-luong}

**Quy tắc tính lương cơ bản:**
- Lương theo ngày công: Lương cơ bản / 26 ngày * số ngày làm việc
- Lương theo giờ: Lương cơ bản / 208 giờ * số giờ làm việc
- Lương theo sản phẩm: Đơn giá * số lượng sản phẩm

**Quy tắc tính tăng ca:**
- Ngày thường: 150% lương giờ
- Cuối tuần: 200% lương giờ
- Ngày lễ: 300% lương giờ
- Ca đêm: +30% lương giờ

**Quy tắc tính phụ cấp:**
- Phụ cấp cố định: Số tiền cố định
- Phụ cấp theo %: % của lương cơ bản
- Phụ cấp theo ngày công: Phụ cấp / 26 * số ngày làm việc

**Quy tắc nghỉ phép:**
- Nghỉ phép có lương: Không trừ lương
- Nghỉ không phép: Trừ lương theo ngày
- Nghỉ ốm: Theo quy định BHXH

**Thiết lập quy tắc:**
1. Vào menu "Bảng lương" → "Cấu hình" → "Quy tắc lương"
2. Chọn loại quy tắc cần thiết lập
3. Nhập công thức tính toán
4. Test với dữ liệu mẫu
5. Áp dụng cho nhân viên/nhóm nhân viên
6. Lưu và kích hoạt

  `

  const modules = [
    {
      title: 'Phiếu lương nhân viên',
      description: 'Quản lý phiếu lương chi tiết từng nhân viên',
      icon: FileText,
      href: '#phieu-luong-nhan-vien',
      color: 'bg-blue-500'
    },
    {
      title: 'Quản lý kỳ lương',
      description: 'Quản lý bảng lương và kỳ lương tổng hợp',
      icon: Calculator,
      href: '#quan-ly-ky-luong',
      color: 'bg-green-500'
    },
    {
      title: 'Khoản tăng/trừ',
      description: 'Quản lý các khoản tăng, trừ khác',
      icon: TrendingUp,
      href: '#quan-ly-tang-tru',
      color: 'bg-purple-500'
    },
    {
      title: 'Phụ cấp lương',
      description: 'Thiết lập và quản lý phụ cấp',
      icon: Gift,
      href: '#quan-ly-phu-cap',
      color: 'bg-orange-500'
    },
    {
      title: 'Đóng góp từ lương',
      description: 'Xử lý BHXH, BHYT, BHTN và thuế',
      icon: Minus,
      href: '#quan-ly-dong-gop',
      color: 'bg-red-500'
    },
    {
      title: 'Báo cáo lương',
      description: 'Xuất các loại báo cáo lương',
      icon: BarChart3,
      href: '#bao-cao-luong',
      color: 'bg-indigo-500'
    },
    {
      title: 'Cấu hình hệ thống',
      description: 'Thiết lập cấu trúc và quy tắc lương',
      icon: Settings,
      href: '#cau-hinh-phan-he-luong',
      color: 'bg-gray-500'
    }
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý bảng lương
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn chi tiết về quản lý bảng lương và tính toán lương trong hệ thống ERP
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((module) => (
            <Card key={module.href} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className={`p-2 rounded-lg ${module.color} text-white w-fit`}>
                  <module.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">
                  {module.description}
                </CardDescription>
                <a href={module.href}>
                  <Button variant="outline" className="w-full group-hover:bg-accent">
                    Xem chi tiết
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
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
