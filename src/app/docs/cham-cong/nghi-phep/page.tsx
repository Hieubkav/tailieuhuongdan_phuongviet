import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function NghiPhepPage() {
  const content = `
# Quản lý nghỉ phép

**Mục đích:** Quản lý, cập nhật nghỉ phép cho nhân viên.

**Đối tượng:** Cán bộ Quản trị, Nhân viên.

## Tổng quan chức năng

Hệ thống quản lý nghỉ phép cung cấp các chức năng:
- Quản lý nghỉ phép (theo nhân viên/phòng ban/công ty)
- Tạo và phê duyệt đơn nghỉ phép
- Báo cáo và phân tích nghỉ phép
- Theo dõi số ngày phép còn lại

## Trang chủ nghỉ phép

Giao diện tổng quan hiển thị thống kê về tình hình nghỉ phép của toàn công ty.

![Trang chủ nghỉ phép](/images/36_nghi_phep_trang_chu.png)

## Quản lý đơn nghỉ phép

### Lọc đơn nghỉ phép

Các tùy chọn lọc để tìm kiếm đơn nghỉ phép theo nhiều tiêu chí.

![Lọc đơn nghỉ phép](/images/37_don_nghi_phep_filter_list.png)

### Danh sách đơn nghỉ phép

Hiển thị tất cả đơn nghỉ phép với thông tin chi tiết và trạng thái.

![Danh sách đơn nghỉ phép](/images/38_don_nghi_phep_list.png)

### Phê duyệt đơn nghỉ phép

Giao diện để quản lý phê duyệt hoặc từ chối đơn nghỉ phép.

![Phê duyệt đơn nghỉ phép](/images/39_don_nghi_phep_phe_duyet.png)

## Báo cáo và phân tích

### Phân tích nghỉ phép

Báo cáo thống kê chi tiết về tình hình nghỉ phép của công ty.

![Phân tích nghỉ phép](/images/40_phan_tich_nghi_phep.png)

## Các loại nghỉ phép

### Nghỉ phép năm
- **Quyền lợi:** 12 ngày/năm (theo Luật Lao động)
- **Điều kiện:** Làm việc đủ 12 tháng
- **Tích lũy:** Có thể chuyển sang năm sau (tối đa 3 ngày)
- **Thanh toán:** Được trả lương đầy đủ

### Nghỉ ốm
- **Quyền lợi:** Theo chế độ BHXH
- **Điều kiện:** Có giấy nghỉ ốm của bác sĩ
- **Mức trả:** 75% lương (từ ngày thứ 4)
- **Thời hạn:** Tối đa 180 ngày/năm

### Nghỉ thai sản
- **Nữ:** 6 tháng (4 tháng sau sinh + 2 tháng trước sinh)
- **Nam:** 5 ngày nghỉ khi vợ sinh con
- **Mức trả:** 100% lương từ quỹ BHXH
- **Điều kiện:** Đóng BHXH đủ 6 tháng

### Nghỉ hiếu hỷ
- **Cưới:** 3 ngày
- **Tang:** 3 ngày (bố mẹ, vợ/chồng, con)
- **Tang:** 1 ngày (ông bà, anh chị em)
- **Mức trả:** 100% lương

### Nghỉ không lương
- **Điều kiện:** Có lý do chính đáng
- **Phê duyệt:** Cần sự đồng ý của quản lý
- **Thời hạn:** Tùy theo quy định công ty
- **Quyền lợi:** Không được trả lương

## Quy trình xin nghỉ phép

### 1. Tạo đơn xin nghỉ phép
- Đăng nhập vào hệ thống
- Chọn "Tạo đơn nghỉ phép"
- Điền đầy đủ thông tin:
  - Loại nghỉ phép
  - Thời gian nghỉ (từ ngày - đến ngày)
  - Lý do nghỉ phép
  - Người thay thế (nếu có)

### 2. Gửi đơn phê duyệt
- Kiểm tra lại thông tin
- Gửi đơn cho người quản lý trực tiếp
- Hệ thống tự động thông báo

### 3. Theo dõi trạng thái
- **Chờ phê duyệt:** Đơn đang được xem xét
- **Đã phê duyệt:** Được chấp nhận nghỉ phép
- **Từ chối:** Không được chấp nhận (có ghi chú lý do)
- **Hủy:** Nhân viên tự hủy đơn

### 4. Thực hiện nghỉ phép
- Bàn giao công việc cho người thay thế
- Cập nhật tiến độ công việc
- Thông báo với đồng nghiệp liên quan

## Quy trình phê duyệt (dành cho quản lý)

### 1. Nhận thông báo
- Email thông báo có đơn mới
- Thông báo trong hệ thống
- Kiểm tra danh sách đơn chờ phê duyệt

### 2. Xem xét đơn nghỉ phép
- Kiểm tra lý do nghỉ phép
- Xem xét tình hình công việc
- Đánh giá khả năng thay thế
- Kiểm tra số ngày phép còn lại

### 3. Quyết định phê duyệt
- **Phê duyệt:** Nếu đáp ứng điều kiện
- **Từ chối:** Nếu không phù hợp (ghi rõ lý do)
- **Yêu cầu bổ sung:** Nếu thiếu thông tin

### 4. Thông báo kết quả
- Hệ thống tự động thông báo cho nhân viên
- Cập nhật lịch làm việc
- Thông báo cho phòng ban liên quan

## Báo cáo nghỉ phép

### Báo cáo theo nhân viên
- Tổng số ngày nghỉ phép đã sử dụng
- Số ngày phép còn lại
- Lịch sử nghỉ phép
- Phân loại theo loại nghỉ phép

### Báo cáo theo phòng ban
- Tình hình nghỉ phép của phòng ban
- So sánh giữa các phòng ban
- Xu hướng nghỉ phép theo thời gian
- Tác động đến năng suất

### Báo cáo tổng hợp
- Thống kê toàn công ty
- Phân tích theo mùa, tháng
- Dự báo nhu cầu nghỉ phép
- Đề xuất chính sách

## Lưu ý quan trọng

### Cho nhân viên
- Tạo đơn nghỉ phép trước ít nhất 3 ngày
- Đảm bảo bàn giao công việc đầy đủ
- Kiểm tra số ngày phép còn lại
- Tuân thủ quy định về nghỉ phép

### Cho quản lý
- Xem xét đơn trong vòng 24 giờ
- Đảm bảo công bằng trong phê duyệt
- Cân nhắc tình hình công việc
- Ghi rõ lý do khi từ chối

### Cho HR
- Cập nhật chính sách nghỉ phép
- Theo dõi và báo cáo định kỳ
- Xử lý các trường hợp đặc biệt
- Đảm bảo tuân thủ pháp luật
  `

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý nghỉ phép
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn quản lý nghỉ phép và phê duyệt đơn nghỉ phép
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
