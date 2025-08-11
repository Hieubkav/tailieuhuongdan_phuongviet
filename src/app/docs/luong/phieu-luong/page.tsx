import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function PhieuLuongPage() {
  const content = `
# Quản lý phiếu lương

**Mục đích:** Quản lý và tính toán lương cho nhân viên.

**Đối tượng:** Cán bộ Quản trị và Kế toán.

## Chức năng chính

- Tạo và quản lý phiếu lương nhân viên
- Tính toán lương theo công thức đã định
- Quản lý kỳ lương (tháng, quý, năm)
- Xuất báo cáo lương
- In phiếu lương cho nhân viên

## Giao diện quản lý lương

### 1. Danh sách phiếu lương
Hiển thị tất cả phiếu lương theo kỳ, có thể lọc theo nhân viên, phòng ban.

### 2. Chi tiết phiếu lương
Xem thông tin chi tiết về các khoản thu, khấu trừ, lương thực lĩnh.

### 3. Kỳ lương
Quản lý các kỳ tính lương, thiết lập thời gian và quy tắc tính lương.

## Các thao tác chính

- **Tạo phiếu lương:** Tính toán lương cho nhân viên theo kỳ
- **Chỉnh sửa phiếu lương:** Điều chỉnh các khoản khi cần thiết
- **Phê duyệt lương:** Xác nhận phiếu lương trước khi chi trả
- **In phiếu lương:** Xuất phiếu lương để giao cho nhân viên
- **Xuất báo cáo:** Tạo báo cáo tổng hợp lương theo kỳ

## Cấu trúc lương

### Các khoản thu
- Lương cơ bản
- Phụ cấp (chức vụ, độc hại, đi lại...)
- Thưởng (KPI, dự án, lễ tết...)
- Làm thêm giờ

### Các khoản khấu trừ
- Bảo hiểm xã hội (8%)
- Bảo hiểm y tế (1.5%)
- Bảo hiểm thất nghiệp (1%)
- Thuế thu nhập cá nhân
- Tạm ứng, khoản vay
- Các khoản khác

## Quy trình tính lương

1. **Chuẩn bị dữ liệu:** Chấm công, hợp đồng, phụ cấp
2. **Tính toán:** Áp dụng công thức tính lương
3. **Kiểm tra:** Đối chiếu và xác minh kết quả
4. **Phê duyệt:** Lãnh đạo phê duyệt phiếu lương
5. **Chi trả:** Chuyển khoản hoặc chi tiền mặt

## Lưu ý quan trọng

- Kiểm tra kỹ dữ liệu chấm công trước khi tính lương
- Cập nhật đầy đủ thông tin hợp đồng và phụ cấp
- Backup dữ liệu trước khi thực hiện tính lương
- Tuân thủ quy định pháp luật về lương và thuế
  `

  const luongImages = [
    '/images/59_phieu_luong_nhan_vien_list.png',
    '/images/60_phieu_luong_filter_group_menu.png',
    '/images/61_phieu_luong_view_buttons.png',
    '/images/62_ky_luong_list.png',
    '/images/63_ky_luong_chi_tiet.png',
    '/images/64_phieu_luong_chi_tiet_modal.png',
    '/images/65_phieu_luong_action_menu.png',
    '/images/66_phieu_luong_hanh_dong_menu.png',
    '/images/67_phieu_luong_in_menu.png',
    '/images/68_phieu_luong_export_menu.png',
    '/images/69_phieu_luong_export_modal.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý phiếu lương
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn quản lý và tính toán lương nhân viên trong hệ thống ERP
          </p>
        </div>
        
        <MarkdownRenderer 
          content={content} 
          images={luongImages}
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
