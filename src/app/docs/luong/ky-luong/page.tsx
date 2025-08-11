import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function KyLuongPage() {
  const content = `
# Quản lý kỳ lương

**Mục đích:** Quản lý các kỳ tính lương, thiết lập chu kỳ trả lương và xử lý dữ liệu lương theo từng kỳ.

**Đối tượng:** Cán bộ Quản trị, Kế toán và Trưởng phòng Nhân sự.

## Chức năng chính

- Tạo và quản lý kỳ lương mới
- Thiết lập chu kỳ trả lương (tháng, quý, năm)
- Sao chép và nhân bản kỳ lương
- Import/Export dữ liệu kỳ lương
- Theo dõi trạng thái xử lý lương

## Tạo kỳ lương mới

### Bước 1: Thiết lập thông tin cơ bản
- **Tên kỳ lương:** Đặt tên mô tả cho kỳ lương (VD: "Lương tháng 12/2024")
- **Thời gian:** Chọn khoảng thời gian tính lương
- **Loại kỳ lương:** Lương tháng, thưởng, phụ cấp đặc biệt
- **Trạng thái:** Khởi tạo, Đang xử lý, Hoàn thành

### Bước 2: Cấu hình tham số
- **Ngày công chuẩn:** Số ngày làm việc trong kỳ
- **Hệ số lương:** Áp dụng hệ số điều chỉnh nếu có
- **Các khoản phụ cấp:** Thiết lập phụ cấp áp dụng trong kỳ
- **Khấu trừ:** Cấu hình các khoản khấu trừ (BHXH, thuế, vay...)

### Bước 3: Chọn đối tượng áp dụng
- **Tất cả nhân viên:** Áp dụng cho toàn bộ công ty
- **Theo phòng ban:** Chọn các phòng ban cụ thể
- **Theo nhân viên:** Chọn danh sách nhân viên riêng lẻ
- **Theo hợp đồng:** Áp dụng theo loại hợp đồng lao động

## Quản lý kỳ lương

### Danh sách kỳ lương
- Xem tất cả các kỳ lương đã tạo
- Lọc theo thời gian, trạng thái, phòng ban
- Sắp xếp theo ngày tạo, tên kỳ lương
- Tìm kiếm nhanh theo từ khóa

### Chỉnh sửa kỳ lương
- Cập nhật thông tin kỳ lương
- Thay đổi danh sách nhân viên áp dụng
- Điều chỉnh tham số tính lương
- Thêm/bớt các khoản phụ cấp, khấu trừ

### Sao chép kỳ lương
- Nhân bản từ kỳ lương trước đó
- Giữ nguyên cấu hình và tham số
- Tự động cập nhật thời gian mới
- Tiết kiệm thời gian thiết lập

## Import/Export dữ liệu

### Import dữ liệu kỳ lương
- **Định dạng file:** Excel (.xlsx), CSV
- **Cấu trúc dữ liệu:** Theo mẫu chuẩn của hệ thống
- **Kiểm tra dữ liệu:** Xác thực trước khi import
- **Xử lý lỗi:** Báo cáo và sửa lỗi dữ liệu

### Export dữ liệu kỳ lương
- **Xuất danh sách:** Tất cả kỳ lương hoặc theo bộ lọc
- **Định dạng:** Excel, PDF, CSV
- **Nội dung:** Thông tin chi tiết hoặc tóm tắt
- **Mục đích:** Báo cáo, lưu trữ, chia sẻ

## Xử lý và tính toán lương

### Tính toán tự động
- Áp dụng công thức tính lương theo kỳ
- Tính toán dựa trên dữ liệu chấm công
- Xử lý các khoản phụ cấp, thưởng
- Tự động khấu trừ các khoản bắt buộc

### Kiểm tra và xác nhận
- Xem trước kết quả tính lương
- So sánh với kỳ lương trước
- Phát hiện bất thường và cảnh báo
- Xác nhận trước khi hoàn tất

### Phê duyệt kỳ lương
- Gửi yêu cầu phê duyệt
- Quy trình phê duyệt nhiều cấp
- Ghi chú và ý kiến phê duyệt
- Thông báo kết quả phê duyệt

## Báo cáo kỳ lương

### Báo cáo tổng hợp
- Tổng chi phí lương theo kỳ
- Phân tích theo phòng ban
- So sánh với các kỳ trước
- Biểu đồ thống kê trực quan

### Báo cáo chi tiết
- Danh sách nhân viên trong kỳ
- Chi tiết từng khoản lương
- Thông tin khấu trừ và thực lĩnh
- Xuất file để lưu trữ

## Lưu ý quan trọng

### Trước khi tạo kỳ lương
- Đảm bảo dữ liệu chấm công đã đầy đủ
- Kiểm tra thông tin hợp đồng nhân viên
- Xác nhận các khoản phụ cấp, thưởng
- Cập nhật thay đổi về thuế, BHXH

### Trong quá trình xử lý
- Thường xuyên sao lưu dữ liệu
- Kiểm tra tính chính xác của phép tính
- Xử lý kịp thời các trường hợp đặc biệt
- Đảm bảo bảo mật thông tin lương

### Sau khi hoàn thành
- Lưu trữ dữ liệu kỳ lương
- Thông báo kết quả cho nhân viên
- Chuẩn bị cho kỳ lương tiếp theo
- Đánh giá và cải thiện quy trình
  `

  const kyLuongImages = [
    '/images/53_ky_luong_danh_sach.png',
    '/images/54_tao_ky_luong_moi.png',
    '/images/55_cau_hinh_ky_luong.png',
    '/images/56_import_export_ky_luong.png',
    '/images/57_tinh_toan_luong.png',
    '/images/58_bao_cao_ky_luong.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý kỳ lương
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn quản lý kỳ lương trong hệ thống ERP
          </p>
        </div>
        
        <MarkdownRenderer 
          content={content} 
          images={kyLuongImages}
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
