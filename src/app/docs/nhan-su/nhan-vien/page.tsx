import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function NhanVienPage() {
  const content = `
# Quản lý nhân viên

**Mục đích:** Quản lý thông tin nhân viên của công ty.

**Đối tượng:** Cán bộ Quản trị.

## Chức năng chính

- Quản lý nhân viên (thêm, sửa, xóa, hợp đồng, phiếu lương, đóng góp, phụ cấp, khoản vay)
- Quản lý hợp đồng lao động (lịch làm việc, lương cơ bản, lương BHXH, cấu trúc lương)
- Quản lý phòng ban và vị trí công việc
- Tạm ứng lương và các khoản ứng khác

## Giao diện quản lý nhân viên

### 1. Giao diện Kanban
Hiển thị danh sách nhân viên dưới dạng thẻ, dễ dàng theo dõi và quản lý.

### 2. Giao diện danh sách
Hiển thị thông tin nhân viên dưới dạng bảng với các chức năng lọc và tìm kiếm.

### 3. Form chi tiết nhân viên
Cho phép xem và chỉnh sửa thông tin chi tiết của từng nhân viên.

## Các thao tác chính

- **Thêm nhân viên mới:** Nhập đầy đủ thông tin cá nhân và công việc
- **Chỉnh sửa thông tin:** Cập nhật thông tin khi có thay đổi
- **Xóa nhân viên:** Xóa nhân viên không còn làm việc
- **Import/Export:** Nhập và xuất dữ liệu nhân viên từ Excel
- **Tạo hợp đồng:** Lập hợp đồng lao động cho nhân viên

## Lưu ý quan trọng

- Cần kiểm tra kỹ thông tin trước khi lưu
- Backup dữ liệu thường xuyên
- Phân quyền truy cập phù hợp cho từng vai trò
  `

  const nhanVienImages = [
    '/images/06_nhan_vien_kanban.png',
    '/images/07_nhan_vien_filter_group_menu.png',
    '/images/08_nhan_vien_view_buttons.png',
    '/images/09_nhan_vien_list.png',
    '/images/10_nhan_vien_chi_tiet_form.png',
    '/images/11_nhan_vien_tabs_bar.png',
    '/images/12_nhan_vien_tac_vu_menu.png',
    '/images/13_import_nhan_vien_modal.png',
    '/images/32_nhan_vien_import_export_menu.png',
    '/images/33_nhan_vien_start_plan_selection.png',
    '/images/34_nhan_vien_hanh_dong_menu.png',
    '/images/35_nhan_vien_xuat_du_lieu_modal.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý nhân viên
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn quản lý thông tin nhân viên trong hệ thống ERP
          </p>
        </div>
        
        <MarkdownRenderer 
          content={content} 
          images={nhanVienImages}
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
