import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function BaoCaoChamCongPage() {
  const content = `
# Báo cáo chấm công

**Mục đích:** Tạo và xuất báo cáo chấm công chi tiết cho nhân viên, phòng ban hoặc toàn công ty.

**Đối tượng:** Cán bộ Quản trị, Trưởng phòng và Kế toán.

## Chức năng chính

- Xuất báo cáo chấm công theo Excel chi tiết
- Báo cáo tổng hợp theo tháng, quý, năm
- Phân tích thống kê thời gian làm việc
- Báo cáo nghỉ phép và đi trễ về sớm
- Xuất báo cáo theo nhân viên hoặc phòng ban

## Các loại báo cáo

### 1. Báo cáo chi tiết
- Thông tin chấm công từng ngày của nhân viên
- Giờ vào, giờ ra, tổng thời gian làm việc
- Thời gian nghỉ trưa, làm thêm giờ
- Ghi chú và trạng thái chấm công

### 2. Báo cáo tổng hợp
- Tổng số giờ làm việc trong tháng
- Số ngày làm việc thực tế
- Số ngày nghỉ phép, nghỉ ốm
- Thống kê đi trễ, về sớm

### 3. Báo cáo phân tích
- Biểu đồ thống kê theo thời gian
- So sánh hiệu suất giữa các phòng ban
- Xu hướng chấm công theo tháng
- Phân tích năng suất làm việc

## Cách xuất báo cáo

### Bước 1: Chọn loại báo cáo
- Truy cập menu "Chấm công" → "Báo cáo"
- Chọn loại báo cáo cần xuất
- Thiết lập các tham số lọc

### Bước 2: Thiết lập bộ lọc
- **Thời gian:** Chọn khoảng thời gian cần báo cáo
- **Nhân viên:** Chọn nhân viên hoặc phòng ban cụ thể
- **Định dạng:** Excel, PDF hoặc CSV
- **Chi tiết:** Mức độ chi tiết của báo cáo

### Bước 3: Xuất và tải về
- Nhấn "Xuất báo cáo"
- Chờ hệ thống xử lý dữ liệu
- Tải file báo cáo về máy tính
- Kiểm tra và xác nhận thông tin

## Các trường dữ liệu trong báo cáo

### Thông tin cơ bản
- Mã nhân viên, Họ tên
- Phòng ban, Chức vụ
- Ngày chấm công
- Giờ vào, Giờ ra

### Thông tin chi tiết
- Tổng giờ làm việc
- Giờ làm thêm
- Thời gian nghỉ trưa
- Số phút đi trễ/về sớm

### Thống kê tháng
- Tổng ngày làm việc
- Tổng giờ làm việc
- Số ngày nghỉ phép
- Số lần đi trễ

## Tùy chỉnh báo cáo

### Thiết lập mẫu báo cáo
- Tạo mẫu báo cáo tùy chỉnh
- Chọn các trường dữ liệu hiển thị
- Định dạng giao diện báo cáo
- Lưu mẫu để sử dụng lại

### Lập lịch báo cáo tự động
- Thiết lập báo cáo định kỳ
- Gửi email báo cáo tự động
- Lưu trữ báo cáo theo thời gian
- Thông báo khi có báo cáo mới

## Lưu ý quan trọng

- Kiểm tra dữ liệu chấm công trước khi xuất báo cáo
- Đảm bảo thời gian báo cáo chính xác
- Xác nhận thông tin nhân viên và phòng ban
- Lưu trữ báo cáo để tra cứu sau này
- Bảo mật thông tin chấm công của nhân viên
  `

  const baoCaoImages = [
    '/images/48_bao_cao_cham_cong_menu.png',
    '/images/49_bao_cao_chi_tiet_filter.png',
    '/images/50_bao_cao_tong_hop.png',
    '/images/51_xuat_excel_bao_cao.png',
    '/images/52_thong_ke_cham_cong.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Báo cáo chấm công
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn tạo và xuất báo cáo chấm công trong hệ thống ERP
          </p>
        </div>
        
        <MarkdownRenderer 
          content={content} 
          images={baoCaoImages}
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
