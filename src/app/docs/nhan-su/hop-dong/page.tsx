import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function HopDongPage() {
  const content = `
# Quản lý hợp đồng lao động

**Mục đích:** Quản lý hợp đồng lao động (lịch làm việc, lương cơ bản, lương BHXH, cấu trúc lương).

**Đối tượng:** Cán bộ Quản trị và Nhân sự.

## Tổng quan

Hệ thống quản lý hợp đồng lao động giúp doanh nghiệp:
- Tạo và quản lý các loại hợp đồng lao động
- Thiết lập lịch làm việc cho từng hợp đồng
- Cấu hình lương cơ bản và các khoản phụ cấp
- Quản lý thông tin bảo hiểm xã hội

## Danh sách hợp đồng

Giao diện hiển thị tất cả hợp đồng lao động trong hệ thống với các thông tin cơ bản.

![Danh sách hợp đồng](/images/14_hop_dong_list.png)

## Chi tiết hợp đồng

### Thông tin chi tiết

Form chi tiết hợp đồng cho phép xem và chỉnh sửa đầy đủ thông tin hợp đồng lao động.

![Chi tiết hợp đồng](/images/15_hop_dong_chi_tiet.png)

### Menu tác vụ

Các tác vụ có thể thực hiện với hợp đồng lao động.

![Menu tác vụ hợp đồng](/images/16_hop_dong_tac_vu_menu.png)

## Lịch làm việc

### Danh sách lịch làm việc

Quản lý các lịch làm việc áp dụng cho hợp đồng.

![Danh sách lịch làm việc](/images/28_lich_lam_viec_list.png)

### Chi tiết lịch làm việc

Cấu hình chi tiết về giờ làm việc, nghỉ trưa, và các quy định khác.

![Chi tiết lịch làm việc](/images/29_lich_lam_viec_chi_tiet.png)

### Header lịch làm việc

Thông tin tổng quan về lịch làm việc.

![Header lịch làm việc](/images/30_lich_lam_viec_header.png)

### Danh sách hợp đồng theo lịch

Hiển thị các hợp đồng áp dụng lịch làm việc cụ thể.

![Danh sách hợp đồng lịch làm việc](/images/31_lich_lam_viec_hop_dong_list.png)

## Các loại hợp đồng

### Hợp đồng không xác định thời hạn
- Áp dụng cho nhân viên chính thức
- Không giới hạn thời gian làm việc
- Đầy đủ quyền lợi theo luật lao động

### Hợp đồng xác định thời hạn
- Thời hạn từ 12-36 tháng
- Có thể gia hạn theo quy định
- Phù hợp với công việc có tính chất tạm thời

### Hợp đồng thử việc
- Thời hạn tối đa 60 ngày
- Áp dụng cho nhân viên mới
- Có thể chuyển đổi sang hợp đồng chính thức

### Hợp đồng thời vụ
- Thời hạn dưới 12 tháng
- Phù hợp với công việc theo mùa
- Linh hoạt về thời gian làm việc

## Cấu trúc lương trong hợp đồng

### Lương cơ bản
- Mức lương theo thỏa thuận
- Không thấp hơn lương tối thiểu vùng
- Cơ sở tính các khoản khác

### Phụ cấp
- Phụ cấp chức vụ
- Phụ cấp trách nhiệm
- Phụ cấp độc hại, nguy hiểm
- Phụ cấp đi lại, ăn trưa

### Thưởng
- Thưởng theo KPI
- Thưởng hoàn thành dự án
- Thưởng lễ, tết
- Thưởng đột xuất

## Bảo hiểm xã hội

### Mức đóng bảo hiểm
- Lương đóng BHXH: Theo quy định pháp luật
- Tỷ lệ đóng: 17.5% (DN) + 8% (NV)
- Cập nhật theo thông tư mới nhất

### Quyền lợi BHXH
- Ốm đau, thai sản
- Tai nạn lao động
- Hưu trí, tử tuất
- Thất nghiệp

## Quy trình quản lý hợp đồng

### 1. Tạo hợp đồng mới
- Chọn loại hợp đồng phù hợp
- Điền đầy đủ thông tin nhân viên
- Thiết lập mức lương và phụ cấp
- Chọn lịch làm việc áp dụng

### 2. Phê duyệt hợp đồng
- Kiểm tra tính hợp lệ
- Đối chiếu với quy định pháp luật
- Lãnh đạo phê duyệt
- Thông báo cho nhân viên

### 3. Ký kết hợp đồng
- In hợp đồng theo mẫu
- Ký kết với nhân viên
- Lưu trữ hồ sơ gốc
- Cập nhật trạng thái trong hệ thống

### 4. Theo dõi và gia hạn
- Theo dõi thời hạn hợp đồng
- Thông báo trước khi hết hạn
- Đánh giá hiệu quả làm việc
- Quyết định gia hạn hoặc chấm dứt

## Lưu ý quan trọng

### Tuân thủ pháp luật
- Tuân thủ Bộ luật Lao động
- Cập nhật theo các thông tư mới
- Đảm bảo quyền lợi người lao động

### Quản lý hồ sơ
- Lưu trữ hợp đồng gốc an toàn
- Backup dữ liệu định kỳ
- Phân quyền truy cập hợp lý

### Bảo mật thông tin
- Mã hóa thông tin nhạy cảm
- Kiểm soát quyền truy cập
- Audit log mọi thay đổi
  `

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý hợp đồng lao động
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn quản lý hợp đồng lao động và lịch làm việc
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
