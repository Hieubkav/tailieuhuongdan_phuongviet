import Link from 'next/link'
import { Eye, Settings, BarChart3, Calendar, Clock, ArrowRight } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ChamCongPage() {
  const content = `
# 4. Quản lý chấm công

## 4.1. Mục đích {#muc-dich}
Quản lý thông tin chấm công của nhân viên một cách hiệu quả, chính xác và tự động hóa.

## 4.2. Đối tượng sử dụng {#doi-tuong-su-dung}
- **Cán bộ Quản trị**: Quản lý toàn bộ hệ thống chấm công
- **Trưởng phòng**: Theo dõi chấm công nhân viên trong phòng ban
- **Nhân viên**: Xem thông tin chấm công cá nhân
- **Kế toán**: Sử dụng dữ liệu chấm công để tính lương

## 4.3. Truy cập chức năng {#truy-cap-chuc-nang}
Trên giao diện menu chính chọn **Menu >> Chấm công**

## Tổng quan hệ thống

Hệ thống quản lý chấm công cung cấp giải pháp toàn diện cho việc theo dõi thời gian làm việc của nhân viên:

### 🎯 Mục tiêu chính
- **Tự động hóa**: Giảm thiểu thao tác thủ công trong việc chấm công
- **Chính xác**: Đảm bảo dữ liệu chấm công chính xác và đáng tin cậy
- **Minh bạch**: Cung cấp thông tin rõ ràng cho nhân viên và quản lý
- **Hiệu quả**: Tối ưu hóa quy trình quản lý thời gian làm việc

### 👁️ Xem chấm công chi tiết của nhân sự {#xem-cham-cong-chi-tiet}

**Mục đích**: Xem và phân tích thông tin chấm công chi tiết của từng nhân viên.

**Đối tượng**: Cán bộ Quản trị, Trưởng phòng.

#### Chức năng chính

- Xem thông tin chấm công theo ngày, tuần, tháng
- Phân tích giờ vào, giờ ra, tổng thời gian làm việc
- Theo dõi tình hình đi trễ, về sớm, nghỉ phép
- Xuất báo cáo chi tiết theo nhiều định dạng

#### Giao diện xem chấm công

**1. Bộ lọc thông tin**
- Chọn nhân viên cụ thể hoặc phòng ban
- Lọc theo khoảng thời gian
- Lọc theo trạng thái (đi trễ, về sớm, bình thường)

**2. Hiển thị dữ liệu**
- Bảng chi tiết theo ngày với giờ vào/ra
- Tổng hợp thời gian làm việc
- Thống kê vi phạm và ngoại lệ
- Biểu đồ trực quan

**3. Các thao tác**
- Chỉnh sửa thông tin chấm công (nếu có quyền)
- Thêm ghi chú giải trình
- Xuất báo cáo Excel/PDF
- In phiếu chấm công

### ⚙️ Chấm công tự động {#cham-cong-tu-dong}

**Mục đích**: Thiết lập và quản lý hệ thống chấm công tự động.

#### Các phương thức chấm công

**🔍 Vân tay**
- Độ chính xác cao
- Không thể gian lận
- Tốc độ nhận diện nhanh
- Phù hợp môi trường văn phòng

**👤 Nhận diện khuôn mặt**
- Không cần tiếp xúc
- Vệ sinh, an toàn
- Có thể đeo khẩu trang
- Tích hợp camera AI

**💳 Thẻ từ/RFID**
- Chi phí thấp
- Dễ triển khai
- Tốc độ quét nhanh
- Có thể tích hợp thẻ nhân viên

**📱 Mobile App**
- Chấm công từ xa
- GPS tracking
- Selfie xác thực
- Phù hợp nhân viên di động

#### Thiết lập hệ thống

**1. Cấu hình thiết bị chấm công**
1. Vào menu "Chấm công" → "Cấu hình thiết bị"
2. Thêm thiết bị mới (tên, loại, IP, vị trí)
3. Test kết nối và đồng bộ dữ liệu
4. Kích hoạt thiết bị

**2. Đăng ký thông tin nhân viên**
1. Vào "Quản lý nhân viên" → "Thông tin chấm công"
2. Chọn nhân viên cần đăng ký
3. Thực hiện đăng ký sinh trắc học
4. Kiểm tra và xác nhận

**3. Thiết lập quy tắc chấm công**
- Giờ làm việc chuẩn
- Thời gian buffer cho phép
- Quy định nghỉ trưa
- Tính toán tăng ca
- Xử lý ngày nghỉ

#### Quy trình chấm công tự động

**Luồng xử lý tự động:**
1. **Nhận diện**: Thiết bị nhận diện nhân viên
2. **Xác thực**: Kiểm tra thông tin trong database
3. **Ghi nhận**: Lưu thời gian chấm công
4. **Tính toán**: Tự động tính giờ làm việc
5. **Cảnh báo**: Thông báo nếu có vi phạm
6. **Đồng bộ**: Cập nhật vào hệ thống trung tâm

**Xử lý các trường hợp đặc biệt:**

**Quên chấm công:**
- Tự động gửi thông báo nhắc nhở
- Cho phép bổ sung chấm công
- Yêu cầu xác nhận từ quản lý
- Ghi log để kiểm tra

**Chấm công sai:**
- Cho phép chỉnh sửa trong ngày
- Yêu cầu lý do chỉnh sửa
- Lưu lịch sử thay đổi
- Thông báo cho HR

### 📊 Báo cáo chấm công {#bao-cao-cham-cong}

**Mục đích**: Tạo và xuất các loại báo cáo chấm công.

#### Các loại báo cáo

##### 📊 Xuất báo cáo chấm công {#xuat-bao-cao-cham-cong}

**Báo cáo tổng hợp:**
- Tổng hợp chấm công theo tháng
- Thống kê giờ làm việc
- Báo cáo tăng ca
- Tỷ lệ đi muộn/về sớm
- Thống kê nghỉ phép

**Báo cáo chi tiết:**
- Bảng chấm công từng nhân viên
- Lịch sử chấm công hàng ngày
- Chi tiết giờ vào/ra
- Thời gian nghỉ giữa ca
- Ghi chú và điều chỉnh

**Báo cáo ngoại lệ:**
- Danh sách đi muộn
- Danh sách về sớm
- Quên chấm công
- Chấm công bất thường
- Vi phạm quy định

**Báo cáo phân tích:**
- Xu hướng chấm công
- So sánh theo phòng ban
- Hiệu suất làm việc
- Phân tích theo thời gian
- Dashboard tổng quan

**Quy trình xuất báo cáo:**

**Bước 1: Chọn loại báo cáo**
1. Vào menu "Chấm công" → "Báo cáo" → "Xuất báo cáo"
2. Chọn template báo cáo (tổng hợp, chi tiết, vi phạm, tùy chỉnh)

**Bước 2: Thiết lập bộ lọc**
- Thời gian: từ ngày - đến ngày, tháng/năm cụ thể
- Đối tượng: tất cả nhân viên, theo phòng ban, nhân viên cụ thể
- Tiêu chí khác: trạng thái, loại vi phạm

**Bước 3: Cấu hình báo cáo**
1. Chọn các cột dữ liệu hiển thị
2. Thiết lập format hiển thị
3. Chọn định dạng xuất file
4. Thiết lập tên file và thư mục

**Bước 4: Preview và xuất file**
1. Xem trước báo cáo
2. Kiểm tra dữ liệu
3. Điều chỉnh nếu cần
4. Xuất file và download

##### 📋 Xuất báo cáo chấm công hàng tháng {#xuat-bao-cao-hang-thang}

**Nội dung báo cáo tháng:**

**Thông tin cơ bản:**
- Tổng số ngày làm việc trong tháng
- Số ngày công thực tế của từng NV
- Tổng giờ làm việc chuẩn
- Tổng giờ làm việc thực tế
- Hiệu suất làm việc (%)

**Thời gian làm việc:**
- Giờ làm việc bình thường
- Giờ tăng ca trong tuần
- Giờ tăng ca cuối tuần/lễ
- Giờ làm việc ban đêm
- Tổng thời gian có mặt

**Vi phạm và ngoại lệ:**
- Số lần đi muộn
- Số lần về sớm
- Số lần quên chấm công
- Nghỉ không phép
- Các vi phạm khác

**Nghỉ phép và vắng mặt:**
- Nghỉ phép có lương
- Nghỉ phép không lương
- Nghỉ ốm
- Nghỉ thai sản
- Công tác, đào tạo

**Quy trình tạo báo cáo tháng:**

**Bước 1: Chuẩn bị dữ liệu**
1. Kiểm tra tính đầy đủ của dữ liệu chấm công
2. Xử lý các trường hợp chấm công thiếu/sai
3. Cập nhật thông tin nghỉ phép, công tác
4. Xác nhận các điều chỉnh chấm công
5. Đóng dữ liệu chấm công tháng

**Bước 2: Tạo báo cáo**
1. Vào menu "Chấm công" → "Báo cáo tháng"
2. Chọn tháng/năm cần báo cáo
3. Chọn phạm vi báo cáo (toàn công ty, phòng ban, nhóm)
4. Thiết lập các tham số báo cáo

**Bước 3: Kiểm tra và xác nhận**
1. Preview báo cáo trước khi xuất
2. Kiểm tra các số liệu tổng hợp
3. So sánh với tháng trước
4. Xác nhận tính chính xác
5. Xuất báo cáo cuối cùng

##### 🚫 Kiểm tra đi trễ về sớm {#kiem-tra-di-tre-ve-som}

**Mục đích**: Theo dõi và kiểm tra tình trạng đi trễ, về sớm của nhân viên.

**Tiêu chí đánh giá:**

**Đi trễ:**
- Trễ 1-15 phút: Nhắc nhở
- Trễ 16-30 phút: Cảnh cáo
- Trễ 31-60 phút: Phạt tiền
- Trễ > 60 phút: Nghỉ 0.5 ngày

**Về sớm:**
- Sớm 1-15 phút: Nhắc nhở
- Sớm 16-30 phút: Trừ lương
- Sớm 31-60 phút: Trừ 0.25 ngày
- Sớm > 60 phút: Trừ 0.5 ngày

**Cách kiểm tra:**

**1. Kiểm tra theo ngày**
1. Vào menu "Chấm công" → "Kiểm tra vi phạm"
2. Chọn ngày cần kiểm tra
3. Hệ thống hiển thị danh sách vi phạm
4. Xem chi tiết và xử lý từng trường hợp

**2. Kiểm tra theo khoảng thời gian**
1. Chọn "Báo cáo vi phạm theo khoảng thời gian"
2. Thiết lập từ ngày - đến ngày
3. Chọn bộ lọc (phòng ban, loại vi phạm, mức độ)
4. Xem báo cáo tổng hợp

**3. Kiểm tra theo nhân viên**
1. Vào "Hồ sơ nhân viên" → "Lịch sử chấm công"
2. Chọn nhân viên cần kiểm tra
3. Xem chi tiết lịch sử vi phạm và xu hướng

**Dashboard theo dõi:**
- Số lượng đi trễ hôm nay
- Số lượng về sớm hôm nay
- Tỷ lệ vi phạm tháng
- Tỷ lệ tuân thủ kỷ luật
- Top nhân viên vi phạm nhiều nhất

**Quy trình xử lý vi phạm:**
1. **Phát hiện vi phạm**: Hệ thống tự động ghi nhận
2. **Thông báo**: Gửi email/SMS cho nhân viên và quản lý
3. **Giải trình**: Nhân viên cung cấp lý do (nếu có)
4. **Đánh giá**: Quản lý trực tiếp xem xét
5. **Quyết định**: Áp dụng biện pháp xử lý phù hợp
6. **Ghi nhận**: Lưu vào hồ sơ nhân viên

**Các biện pháp xử lý:**

**Mức độ nhẹ:**
- Nhắc nhở bằng lời
- Gửi email cảnh báo
- Ghi nhận vào sổ theo dõi
- Yêu cầu cam kết cải thiện

**Mức độ nặng:**
- Cảnh cáo bằng văn bản
- Trừ lương theo quy định
- Ảnh hưởng đến đánh giá KPI
- Xem xét kỷ luật lao động

##### 📤 Xuất báo cáo đi trễ/về sớm {#xuat-bao-cao-di-tre-ve-som}

**Mục đích**: Tạo và xuất báo cáo chi tiết về vi phạm đi trễ/về sớm.

**Các loại báo cáo:**

**Báo cáo tổng hợp:**
- Thống kê tổng số vi phạm
- Phân loại theo mức độ nghiêm trọng
- So sánh theo phòng ban
- Xu hướng theo thời gian
- Top nhân viên vi phạm nhiều

**Báo cáo chi tiết:**
- Danh sách từng lần vi phạm
- Thông tin nhân viên vi phạm
- Thời gian và mức độ vi phạm
- Lý do giải trình (nếu có)
- Biện pháp xử lý đã áp dụng

**Báo cáo phân tích:**
- Phân tích nguyên nhân vi phạm
- Hiệu quả các biện pháp xử lý
- Dự báo xu hướng
- Đề xuất cải thiện
- So sánh với kỳ trước

**Báo cáo cá nhân:**
- Lịch sử vi phạm cá nhân
- Tần suất và mức độ
- Xu hướng cải thiện
- Ghi chú và cam kết
- Đánh giá tổng thể

**Quy trình xuất báo cáo:**

**Bước 1: Chọn loại báo cáo**
1. Vào menu "Chấm công" → "Báo cáo" → "Vi phạm đi trễ/về sớm"
2. Chọn template báo cáo phù hợp

**Bước 2: Thiết lập bộ lọc**
- Thời gian: ngày cụ thể, khoảng thời gian, tháng/quý/năm
- Đối tượng: tất cả nhân viên, theo phòng ban, nhân viên cụ thể
- Loại vi phạm: chỉ đi trễ, chỉ về sớm, cả hai loại
- Mức độ: vi phạm nhẹ, nặng, tất cả mức độ

**Bước 3: Cấu hình báo cáo**
1. Chọn các cột dữ liệu hiển thị
2. Thiết lập format (ngày/giờ, đơn vị thời gian)
3. Chọn định dạng xuất file
4. Thiết lập tên file

**Bước 4: Xuất và chia sẻ**
1. Preview dữ liệu trước khi xuất
2. Xuất file (Excel, PDF, CSV, HTML)
3. Gửi báo cáo qua email (nếu cần)
4. Lưu trữ báo cáo để tham khảo

#### Định dạng file xuất

- **Excel (.xlsx)**: Phù hợp cho phân tích, tính toán
- **PDF (.pdf)**: Báo cáo chính thức, in ấn
- **CSV (.csv)**: Import vào hệ thống khác
- **HTML**: Xem trên web, email

#### Lập lịch báo cáo tự động

- **Hàng ngày**: Báo cáo chấm công ngày (8:00 AM)
- **Hàng tuần**: Tổng hợp tuần (Thứ 2 đầu tuần)
- **Hàng tháng**: Báo cáo tháng (Ngày 1 tháng sau)
- **Theo sự kiện**: Khi có dữ liệu bất thường
- **Tùy chỉnh**: Theo yêu cầu cụ thể

#### Giám sát và cảnh báo

**Dashboard theo dõi real-time:**
- Tỷ lệ chấm công đúng giờ: 95%
- Nhân viên đã chấm công: 247
- Chấm công muộn: 12

**Báo cáo tự động:**
- Báo cáo hàng ngày: Tổng hợp chấm công trong ngày
- Báo cáo tuần: Thống kê vi phạm, tăng ca
- Báo cáo tháng: Phân tích xu hướng chấm công
- Cảnh báo real-time: Thông báo ngay khi có bất thường

**Thiết lập cảnh báo tự động:**
1. Vào "Cấu hình" → "Cảnh báo vi phạm"
2. Thiết lập ngưỡng cảnh báo (số lần vi phạm trong tuần/tháng)
3. Cấu hình thông báo (email, SMS, hệ thống)
4. Lưu và kích hoạt

  `

  const modules = [
    {
      title: 'Xem chấm công chi tiết',
      description: 'Xem và phân tích thông tin chấm công của từng nhân viên',
      icon: Eye,
      href: '#xem-cham-cong-chi-tiet',
      color: 'bg-blue-500'
    },
    {
      title: 'Chấm công tự động',
      description: 'Thiết lập và quản lý hệ thống chấm công tự động',
      icon: Settings,
      href: '#cham-cong-tu-dong',
      color: 'bg-green-500'
    },
    {
      title: 'Báo cáo chấm công',
      description: 'Tạo và xuất các loại báo cáo chấm công',
      icon: BarChart3,
      href: '#bao-cao-cham-cong',
      color: 'bg-purple-500'
    }
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý chấm công
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn chi tiết về quản lý chấm công và nghỉ phép trong hệ thống ERP
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
