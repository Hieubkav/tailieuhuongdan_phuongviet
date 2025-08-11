import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function ChamCongPage() {
  const content = `
# Quản lý chấm công

**Mục đích:** Quản lý thông tin chấm công của nhân viên.

**Đối tượng:** Cán bộ Quản trị và Nhân viên.

## Tổng quan chức năng

Hệ thống quản lý chấm công cung cấp các chức năng chính sau:

- Xem chi tiết chấm công
- Chấm công tự động (tạo lịch, xem nhật ký)
- Báo cáo chấm công (xuất Excel chi tiết, tổng hợp, hàng tháng)
- Kiểm tra đi trễ/về sớm và xuất báo cáo
- Quản lý nghỉ phép

## 1. Quản lý nghỉ phép

### Trang chủ nghỉ phép

Giao diện tổng quan về tình hình nghỉ phép của công ty.

![Trang chủ nghỉ phép](/images/36_nghi_phep_trang_chu.png)

### Lọc đơn nghỉ phép

Các tùy chọn lọc để tìm kiếm đơn nghỉ phép.

![Lọc đơn nghỉ phép](/images/37_don_nghi_phep_filter_list.png)

### Danh sách đơn nghỉ phép

Hiển thị tất cả đơn nghỉ phép trong hệ thống.

![Danh sách đơn nghỉ phép](/images/38_don_nghi_phep_list.png)

### Phê duyệt đơn nghỉ phép

Giao diện để phê duyệt hoặc từ chối đơn nghỉ phép.

![Phê duyệt đơn nghỉ phép](/images/39_don_nghi_phep_phe_duyet.png)

### Phân tích nghỉ phép

Báo cáo thống kê về tình hình nghỉ phép.

![Phân tích nghỉ phép](/images/40_phan_tich_nghi_phep.png)

## 2. Chấm công nhân viên

### Danh sách chấm công

Hiển thị thông tin chấm công của tất cả nhân viên.

![Danh sách chấm công](/images/41_cham_cong_list.png)

### Menu lọc và nhóm chấm công

Các tùy chọn để lọc và nhóm dữ liệu chấm công.

![Menu lọc chấm công](/images/42_cham_cong_filter_group_menu.png)

### Nút chế độ xem chấm công

Chuyển đổi giữa các chế độ xem khác nhau.

![Nút chế độ xem chấm công](/images/43_cham_cong_view_buttons.png)

### Danh sách chấm công nhân viên

Thông tin chi tiết chấm công của từng nhân viên.

![Danh sách chấm công nhân viên](/images/44_cham_cong_nhan_vien_list.png)

### Chi tiết chấm công

Xem thông tin chi tiết về giờ vào, giờ ra của nhân viên.

![Chi tiết chấm công](/images/45_cham_cong_chi_tiet.png)

## 3. Lịch trình chấm công

### Tạo lịch trình chấm công

Modal để tạo lịch trình chấm công mới.

![Tạo lịch trình chấm công](/images/46_tao_lich_trinh_cham_cong_modal.png)

### Danh sách lịch trình

Quản lý các lịch trình chấm công đã tạo.

![Danh sách lịch trình chấm công](/images/47_lich_trinh_cham_cong_list.png)

## 4. Báo cáo chấm công

### Menu báo cáo

Truy cập các loại báo cáo chấm công khác nhau.

![Menu báo cáo chấm công](/images/48_cham_cong_bao_cao_menu.png)

### Modal báo cáo chấm công

Giao diện để tạo báo cáo chấm công.

![Modal báo cáo chấm công](/images/49_bao_cao_cham_cong_modal.png)

### Hướng dẫn báo cáo

Hướng dẫn cách sử dụng chức năng báo cáo.

![Hướng dẫn báo cáo chấm công](/images/50_bao_cao_cham_cong_huong_dan.png)

### Báo cáo chi tiết Excel

Xuất báo cáo chấm công chi tiết ra file Excel.

![Báo cáo chấm công chi tiết Excel](/images/51_bao_cao_cham_cong_chi_tiet_excel.png)

### Báo cáo tổng hợp Excel

Báo cáo tổng hợp chấm công theo kỳ.

![Báo cáo chấm công tổng hợp Excel](/images/52_bao_cao_cham_cong_tong_hop_excel.png)

### Báo cáo hàng tháng

Modal để tạo báo cáo chấm công hàng tháng.

![Modal báo cáo chấm công hàng tháng](/images/53_bao_cao_cham_cong_hang_thang_modal.png)

### Hướng dẫn mẫu báo cáo

Hướng dẫn về mẫu báo cáo hàng tháng.

![Hướng dẫn mẫu báo cáo hàng tháng](/images/54_bao_cao_cham_cong_hang_thang_huong_dan_mau.png)

### Bảng chấm công giờ Excel

Mẫu bảng chấm công theo giờ xuất ra Excel.

![Bảng chấm công giờ Excel](/images/55_bang_cham_cong_gio_excel.png)

## 5. Theo dõi đi trễ/về sớm

### Danh sách theo dõi

Theo dõi tình hình đi trễ và về sớm của nhân viên.

![Danh sách theo dõi đi trễ/về sớm](/images/56_late_early_tracking_list.png)

### Chi tiết theo dõi

Thông tin chi tiết về các trường hợp đi trễ/về sớm.

![Chi tiết theo dõi đi trễ/về sớm](/images/57_late_early_tracking_detail.png)

### Báo cáo đi trễ/về sớm

Modal để tạo báo cáo về tình hình đi trễ/về sớm.

![Báo cáo đi trễ/về sớm](/images/58_bao_cao_di_tre_ve_som_modal.png)

## Quy trình chấm công

### 1. Chấm công hàng ngày
- Nhân viên chấm công vào/ra theo giờ quy định
- Hệ thống tự động ghi nhận thời gian
- Kiểm tra và xử lý các trường hợp bất thường

### 2. Quản lý nghỉ phép
- Nhân viên tạo đơn xin nghỉ phép
- Quản lý phê duyệt đơn nghỉ phép
- Cập nhật số ngày phép còn lại

### 3. Báo cáo định kỳ
- Xuất báo cáo chấm công hàng tháng
- Phân tích tình hình đi trễ/về sớm
- Tổng hợp dữ liệu cho tính lương

## Lưu ý quan trọng

- Chấm công đúng giờ quy định của công ty
- Tạo đơn nghỉ phép trước khi nghỉ
- Kiểm tra thông tin chấm công định kỳ
- Báo cáo kịp thời khi có sự cố với thiết bị chấm công
- Tuân thủ quy định về giờ làm việc và nghỉ ngơi
  `

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý chấm công
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn chi tiết về quản lý chấm công và nghỉ phép trong hệ thống ERP
          </p>
        </div>
        
        <MarkdownRenderer 
          content={content} 
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
