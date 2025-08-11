import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function NhanSuPage() {
  const content = `
# Quản lý nhân sự

**Mục đích:** Quản lý thông tin nhân sự của công ty.

**Đối tượng:** Cán bộ Quản trị.

## Tổng quan chức năng

Hệ thống quản lý nhân sự cung cấp các chức năng chính sau:

- Quản lý nhân viên (thêm, sửa, xóa, hợp đồng, phiếu lương, đóng góp, phụ cấp, khoản vay)
- Quản lý hợp đồng lao động (lịch làm việc, lương cơ bản, lương BHXH, cấu trúc lương)
- Quản lý phòng ban
- Quản lý tạm ứng (cấu hình, đợt ứng lương, khoản ứng, xuất Excel)
- Quản lý danh mục (lý do nghỉ việc, vị trí công việc, loại việc làm, lịch làm việc)
- Import/Export dữ liệu

## 1. Quản lý nhân viên

### Giao diện Kanban

Giao diện Kanban hiển thị danh sách nhân viên dưới dạng thẻ, giúp dễ dàng theo dõi và quản lý.

![Giao diện Kanban nhân viên](/images/06_nhan_vien_kanban.png)

### Menu lọc và nhóm

Hệ thống cung cấp các tùy chọn lọc và nhóm dữ liệu linh hoạt.

![Menu lọc và nhóm](/images/07_nhan_vien_filter_group_menu.png)

### Các nút chế độ xem

Người dùng có thể chuyển đổi giữa các chế độ xem khác nhau.

![Nút chế độ xem](/images/08_nhan_vien_view_buttons.png)

### Danh sách nhân viên

Hiển thị thông tin nhân viên dưới dạng bảng với đầy đủ thông tin.

![Danh sách nhân viên](/images/09_nhan_vien_list.png)

### Form chi tiết nhân viên

Form cho phép xem và chỉnh sửa thông tin chi tiết của từng nhân viên.

![Form chi tiết nhân viên](/images/10_nhan_vien_chi_tiet_form.png)

### Thanh tabs

Các tab để tổ chức thông tin nhân viên theo từng nhóm.

![Thanh tabs](/images/11_nhan_vien_tabs_bar.png)

### Menu tác vụ

Menu cung cấp các tác vụ có thể thực hiện với nhân viên.

![Menu tác vụ](/images/12_nhan_vien_tac_vu_menu.png)

### Import nhân viên

Chức năng import dữ liệu nhân viên từ file Excel.

![Modal import nhân viên](/images/13_import_nhan_vien_modal.png)

## 2. Quản lý hợp đồng

### Danh sách hợp đồng

Hiển thị tất cả hợp đồng lao động trong hệ thống.

![Danh sách hợp đồng](/images/14_hop_dong_list.png)

### Chi tiết hợp đồng

Xem và chỉnh sửa thông tin chi tiết của hợp đồng.

![Chi tiết hợp đồng](/images/15_hop_dong_chi_tiet.png)

### Menu tác vụ hợp đồng

Các tác vụ có thể thực hiện với hợp đồng.

![Menu tác vụ hợp đồng](/images/16_hop_dong_tac_vu_menu.png)

## 3. Quản lý phòng ban

### Giao diện Kanban phòng ban

Hiển thị cấu trúc phòng ban dưới dạng Kanban.

![Kanban phòng ban](/images/17_phong_ban_kanban.png)

## 4. Quản lý tạm ứng

### Menu tạm ứng

Truy cập các chức năng liên quan đến tạm ứng lương.

![Menu tạm ứng](/images/18_tam_ung_menu.png)

### Cấu hình tạm ứng

Thiết lập các thông số cho việc tạm ứng lương.

![Danh sách cấu hình tạm ứng](/images/19_cau_hinh_tam_ung_list.png)

### Đợt ứng lương

Quản lý các đợt ứng lương cho nhân viên.

![Danh sách đợt ứng lương](/images/20_dot_ung_luong_list.png)

![Chi tiết đợt ứng lương](/images/21_dot_ung_luong_chi_tiet.png)

### Khoản ứng

Quản lý các khoản ứng cụ thể.

![Danh sách khoản ứng](/images/22_khoan_ung_list.png)

### Xuất Excel

Xuất dữ liệu đợt ứng lương ra file Excel.

![Xuất Excel đợt ứng lương](/images/23_dot_ung_luong_xuat_excel.png)

![Danh sách ứng lương Excel](/images/24_danh_sach_ung_luong_excel.png)

## 5. Quản lý danh mục

### Lý do nghỉ việc

Quản lý danh sách các lý do nghỉ việc.

![Danh sách lý do nghỉ việc](/images/25_li_do_nghi_viec_list.png)

### Vị trí công việc

Quản lý các vị trí công việc trong công ty.

![Danh sách vị trí công việc](/images/26_vi_tri_cong_viec_list.png)

### Loại việc làm

Phân loại các loại việc làm.

![Danh sách loại việc làm](/images/27_loai_viec_lam_list.png)

### Lịch làm việc

Quản lý lịch làm việc của công ty.

![Danh sách lịch làm việc](/images/28_lich_lam_viec_list.png)

![Chi tiết lịch làm việc](/images/29_lich_lam_viec_chi_tiet.png)

![Header lịch làm việc](/images/30_lich_lam_viec_header.png)

![Danh sách hợp đồng lịch làm việc](/images/31_lich_lam_viec_hop_dong_list.png)

## 6. Import/Export dữ liệu

### Menu Import/Export

Truy cập các chức năng import và export dữ liệu nhân viên.

![Menu Import/Export nhân viên](/images/32_nhan_vien_import_export_menu.png)

### Lựa chọn kế hoạch

Chọn kế hoạch để bắt đầu quá trình import/export.

![Lựa chọn kế hoạch](/images/33_nhan_vien_start_plan_selection.png)

### Menu hành động

Các hành động có thể thực hiện với dữ liệu nhân viên.

![Menu hành động nhân viên](/images/34_nhan_vien_hanh_dong_menu.png)

### Modal xuất dữ liệu

Giao diện để xuất dữ liệu nhân viên.

![Modal xuất dữ liệu nhân viên](/images/35_nhan_vien_xuat_du_lieu_modal.png)

## Lưu ý quan trọng

- Cần phân quyền truy cập phù hợp cho từng vai trò
- Backup dữ liệu thường xuyên
- Kiểm tra kỹ thông tin trước khi lưu
- Tuân thủ quy định về bảo mật thông tin cá nhân
  `

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý nhân sự
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn chi tiết về quản lý thông tin nhân sự trong hệ thống ERP
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
