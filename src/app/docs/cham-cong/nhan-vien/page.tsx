import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function ChamCongNhanVienPage() {
  const content = `
# Chấm công nhân viên

**Mục đích:** Quản lý thời gian làm việc và chấm công của nhân viên.

**Đối tượng:** Cán bộ Quản trị và Nhân viên.

## Chức năng chính

- Xem danh sách chấm công của tất cả nhân viên
- Chấm công cho nhân viên (vào/ra)
- Xem chi tiết thời gian làm việc
- Tạo lịch trình chấm công
- Báo cáo chấm công theo kỳ

## Giao diện chấm công

### 1. Danh sách chấm công
Hiển thị thông tin chấm công của tất cả nhân viên theo ngày, tuần, tháng.

### 2. Chi tiết chấm công
Xem thông tin chi tiết về giờ vào, giờ ra, tổng thời gian làm việc.

### 3. Lịch trình chấm công
Tạo và quản lý lịch trình làm việc cho từng nhân viên hoặc phòng ban.

## Các thao tác chính

- **Chấm công vào:** Ghi nhận thời gian bắt đầu làm việc
- **Chấm công ra:** Ghi nhận thời gian kết thúc làm việc
- **Chỉnh sửa chấm công:** Điều chỉnh thời gian khi có sai sót
- **Tạo báo cáo:** Xuất báo cáo chấm công theo kỳ
- **Phân tích dữ liệu:** Thống kê thời gian làm việc, đi trễ, về sớm

## Nghỉ phép

### Quản lý đơn nghỉ phép
- Tạo đơn xin nghỉ phép
- Phê duyệt đơn nghỉ phép
- Theo dõi số ngày phép còn lại
- Phân tích thống kê nghỉ phép

## Lưu ý quan trọng

- Chấm công đúng giờ quy định
- Kiểm tra thông tin trước khi lưu
- Báo cáo kịp thời khi có vấn đề
- Tuân thủ quy định về giờ làm việc
  `

  const chamCongImages = [
    '/images/36_nghi_phep_trang_chu.png',
    '/images/37_don_nghi_phep_filter_list.png',
    '/images/38_don_nghi_phep_list.png',
    '/images/39_don_nghi_phep_phe_duyet.png',
    '/images/40_phan_tich_nghi_phep.png',
    '/images/41_cham_cong_list.png',
    '/images/42_cham_cong_filter_group_menu.png',
    '/images/43_cham_cong_view_buttons.png',
    '/images/44_cham_cong_nhan_vien_list.png',
    '/images/45_cham_cong_chi_tiet.png',
    '/images/46_tao_lich_trinh_cham_cong_modal.png',
    '/images/47_lich_trinh_cham_cong_list.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Chấm công nhân viên
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn sử dụng chức năng chấm công trong hệ thống ERP
          </p>
        </div>
        
        <MarkdownRenderer 
          content={content} 
          images={chamCongImages}
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
