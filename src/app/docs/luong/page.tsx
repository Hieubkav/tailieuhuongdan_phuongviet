import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function LuongPage() {
  const content = `
# Quản lý lương

**Mục đích:** Quản lý bảng lương của nhân sự.

**Đối tượng:** Cán bộ Quản trị và Kế toán.

## Tổng quan chức năng

Hệ thống quản lý lương cung cấp các chức năng chính sau:

- Quản lý kỳ lương (thêm, sửa, xóa, nhân bản, import, export)
- Quản lý phiếu lương chi tiết (tính toán, hủy, gửi qua Zalo, in hàng loạt)
- Cấu hình lương (cấu trúc lương, quy tắc lương, ghi nhận đóng góp)

## 1. Quản lý phiếu lương

### Danh sách phiếu lương nhân viên

Hiển thị tất cả phiếu lương của nhân viên theo kỳ.

![Danh sách phiếu lương nhân viên](/images/59_phieu_luong_nhan_vien_list.png)

### Menu lọc và nhóm phiếu lương

Các tùy chọn để lọc và nhóm dữ liệu phiếu lương.

![Menu lọc phiếu lương](/images/60_phieu_luong_filter_group_menu.png)

### Nút chế độ xem phiếu lương

Chuyển đổi giữa các chế độ xem khác nhau cho phiếu lương.

![Nút chế độ xem phiếu lương](/images/61_phieu_luong_view_buttons.png)

## 2. Quản lý kỳ lương

### Danh sách kỳ lương

Quản lý các kỳ tính lương trong hệ thống.

![Danh sách kỳ lương](/images/62_ky_luong_list.png)

### Chi tiết kỳ lương

Xem và chỉnh sửa thông tin chi tiết của kỳ lương.

![Chi tiết kỳ lương](/images/63_ky_luong_chi_tiet.png)

## 3. Chi tiết phiếu lương

### Modal chi tiết phiếu lương

Hiển thị thông tin chi tiết về phiếu lương của nhân viên.

![Modal chi tiết phiếu lương](/images/64_phieu_luong_chi_tiet_modal.png)

### Menu tác vụ phiếu lương

Các tác vụ có thể thực hiện với phiếu lương.

![Menu tác vụ phiếu lương](/images/65_phieu_luong_action_menu.png)

### Menu hành động phiếu lương

Các hành động khác có thể thực hiện với phiếu lương.

![Menu hành động phiếu lương](/images/66_phieu_luong_hanh_dong_menu.png)

## 4. In và xuất phiếu lương

### Menu in phiếu lương

Các tùy chọn in phiếu lương.

![Menu in phiếu lương](/images/67_phieu_luong_in_menu.png)

### Menu xuất phiếu lương

Các tùy chọn xuất phiếu lương ra file.

![Menu xuất phiếu lương](/images/68_phieu_luong_export_menu.png)

### Modal xuất phiếu lương

Giao diện để xuất phiếu lương với các tùy chọn chi tiết.

![Modal xuất phiếu lương](/images/69_phieu_luong_export_modal.png)

## Cấu trúc lương

### Các khoản thu

**Lương cơ bản:**
- Lương theo hợp đồng lao động
- Được tính theo ngày công thực tế

**Phụ cấp:**
- Phụ cấp chức vụ
- Phụ cấp độc hại
- Phụ cấp đi lại
- Phụ cấp ăn trưa
- Các phụ cấp khác

**Thưởng:**
- Thưởng KPI
- Thưởng dự án
- Thưởng lễ tết
- Thưởng đột xuất

**Làm thêm giờ:**
- Tính theo giờ làm thêm thực tế
- Áp dụng hệ số theo quy định

### Các khoản khấu trừ

**Bảo hiểm bắt buộc:**
- Bảo hiểm xã hội (8%)
- Bảo hiểm y tế (1.5%)
- Bảo hiểm thất nghiệp (1%)

**Thuế thu nhập cá nhân:**
- Tính theo bậc thuế lũy tiến
- Áp dụng các khoản giảm trừ

**Các khoản khác:**
- Tạm ứng lương
- Khoản vay công ty
- Phạt vi phạm
- Các khoản khấu trừ khác

## Quy trình tính lương

### 1. Chuẩn bị dữ liệu
- Thu thập dữ liệu chấm công
- Cập nhật thông tin hợp đồng
- Kiểm tra các khoản phụ cấp, thưởng
- Xác nhận các khoản tạm ứng, khoản vay

### 2. Tính toán lương
- Tạo kỳ lương mới
- Áp dụng công thức tính lương
- Tính toán các khoản thu, khấu trừ
- Kiểm tra và điều chỉnh nếu cần

### 3. Kiểm tra và phê duyệt
- Đối chiếu dữ liệu với các phòng ban
- Kiểm tra tính chính xác của phiếu lương
- Lãnh đạo phê duyệt bảng lương
- Xử lý các trường hợp đặc biệt

### 4. Chi trả lương
- Xuất danh sách chuyển khoản
- Thực hiện chuyển khoản lương
- In phiếu lương cho nhân viên
- Lưu trữ hồ sơ lương

### 5. Báo cáo và thống kê
- Tạo báo cáo tổng hợp lương
- Phân tích chi phí nhân sự
- Báo cáo thuế thu nhập cá nhân
- Báo cáo bảo hiểm xã hội

## Các chức năng nâng cao

### Gửi phiếu lương qua Zalo
- Tích hợp với Zalo Business
- Gửi phiếu lương trực tiếp cho nhân viên
- Bảo mật thông tin cá nhân

### In hàng loạt
- In nhiều phiếu lương cùng lúc
- Tùy chỉnh định dạng in
- Xuất file PDF hàng loạt

### Import/Export dữ liệu
- Import dữ liệu từ Excel
- Export báo cáo ra nhiều định dạng
- Đồng bộ với các hệ thống khác

## Lưu ý quan trọng

### Bảo mật thông tin
- Phân quyền truy cập nghiêm ngặt
- Mã hóa dữ liệu lương
- Audit log mọi thao tác

### Tuân thủ pháp luật
- Tuân thủ Luật Lao động
- Đúng quy định về thuế TNCN
- Đầy đủ các khoản bảo hiểm

### Backup và lưu trữ
- Backup dữ liệu định kỳ
- Lưu trữ hồ sơ theo quy định
- Khôi phục dữ liệu khi cần thiết

### Kiểm soát chất lượng
- Kiểm tra chéo dữ liệu
- Xác minh với nhân viên
- Đối chiếu với kế toán tổng hợp
  `

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý lương
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn chi tiết về quản lý lương và phiếu lương trong hệ thống ERP
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
