import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function PhongBanPage() {
  const content = `
# Quản lý phòng ban

## Mục đích
Chức năng này để thực hiện quản lý nhân sự theo phòng ban, tổ chức cấu trúc phòng ban trong công ty.

## Đối tượng sử dụng
Người dùng có vai trò "Cán bộ Quản trị" có thể thao tác trên chức năng này.

## Truy cập chức năng
Trên giao diện menu chính chọn **Menu >> Nhân viên >> Phòng ban**

## Giao diện chính

### Giao diện Kanban phòng ban
Hiển thị cấu trúc phòng ban dưới dạng Kanban, giúp dễ dàng theo dõi và quản lý cấu trúc tổ chức.

![Kanban phòng ban](/images/17_phong_ban_kanban.png)

### Các tính năng chính

#### 1. Quản lý cấu trúc phòng ban
- **Tạo phòng ban mới**: Thêm phòng ban với thông tin đầy đủ
- **Chỉnh sửa thông tin**: Cập nhật tên, mô tả, người phụ trách
- **Xóa phòng ban**: Xóa phòng ban không còn sử dụng
- **Sắp xếp cấu trúc**: Tổ chức phòng ban theo cấp bậc

#### 2. Quản lý nhân viên trong phòng ban
- **Xem danh sách nhân viên**: Hiển thị tất cả nhân viên thuộc phòng ban
- **Chuyển nhân viên**: Di chuyển nhân viên giữa các phòng ban
- **Phân quyền**: Thiết lập quyền hạn theo phòng ban
- **Báo cáo**: Thống kê nhân sự theo phòng ban

#### 3. Các thao tác hỗ trợ
- **Tìm kiếm**: Tìm kiếm phòng ban theo nhiều tiêu chí
- **Lọc dữ liệu**: Lọc theo trạng thái, loại phòng ban
- **Sắp xếp**: Sắp xếp theo tên, ngày tạo, số lượng nhân viên
- **Xuất báo cáo**: Export danh sách phòng ban ra Excel

## Hướng dẫn sử dụng chi tiết

### Tạo phòng ban mới
1. Nhấn nút **"Tạo mới"** trên giao diện chính
2. Điền thông tin phòng ban:
   - **Tên phòng ban**: Tên đầy đủ của phòng ban
   - **Mã phòng ban**: Mã viết tắt (nếu có)
   - **Mô tả**: Mô tả chức năng, nhiệm vụ
   - **Phòng ban cha**: Chọn phòng ban cấp trên (nếu có)
   - **Người phụ trách**: Chọn trưởng phòng
3. Nhấn **"Lưu"** để hoàn tất

### Chỉnh sửa thông tin phòng ban
1. Nhấn vào phòng ban cần chỉnh sửa
2. Chọn **"Chỉnh sửa"** từ menu tác vụ
3. Cập nhật thông tin cần thiết
4. Nhấn **"Lưu"** để xác nhận

### Quản lý nhân viên trong phòng ban
1. Nhấn vào phòng ban cần quản lý
2. Chọn tab **"Nhân viên"**
3. Xem danh sách nhân viên hiện tại
4. Thực hiện các thao tác:
   - **Thêm nhân viên**: Chọn từ danh sách nhân viên chưa có phòng ban
   - **Chuyển nhân viên**: Di chuyển sang phòng ban khác
   - **Xóa khỏi phòng ban**: Gỡ nhân viên khỏi phòng ban

## Các chức năng nâng cao

### Import/Export dữ liệu
- **Import**: Nhập danh sách phòng ban từ file Excel
- **Export**: Xuất danh sách phòng ban ra file Excel
- **Template**: Tải template Excel để import dữ liệu

### Lưu trữ và khôi phục
- **Lưu trữ**: Lưu trữ phòng ban không còn hoạt động
- **Khôi phục**: Khôi phục phòng ban đã lưu trữ
- **Xóa vĩnh viễn**: Xóa hoàn toàn khỏi hệ thống

### Báo cáo và thống kê
- **Báo cáo cấu trúc**: Sơ đồ tổ chức công ty
- **Thống kê nhân sự**: Số lượng nhân viên theo phòng ban
- **Báo cáo hiệu suất**: Đánh giá hiệu quả hoạt động

## Lưu ý quan trọng

### Quy tắc quản lý
- Mỗi nhân viên chỉ thuộc một phòng ban tại một thời điểm
- Phòng ban cha không thể bị xóa khi còn phòng ban con
- Cần có ít nhất một người phụ trách cho mỗi phòng ban

### Bảo mật và phân quyền
- Chỉ quản trị viên mới có thể tạo/xóa phòng ban
- Trưởng phòng có quyền quản lý nhân viên trong phòng ban
- Lưu trữ lịch sử thay đổi cấu trúc tổ chức

### Backup và khôi phục
- Backup dữ liệu phòng ban thường xuyên
- Kiểm tra tính nhất quán của cấu trúc tổ chức
- Có kế hoạch khôi phục khi cần thiết
  `

  const phongBanImages = [
    '/images/17_phong_ban_kanban.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý phòng ban
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn quản lý cấu trúc phòng ban và tổ chức nhân sự trong hệ thống ERP
          </p>
        </div>
        
        <MarkdownRenderer 
          content={content} 
          images={phongBanImages}
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
