import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function TamUngPage() {
  const content = `
# Quản lý tạm ứng

## Mục đích
Chức năng này để thực hiện quản lý tạm ứng lương hằng tháng của từng nhân viên, giúp theo dõi và kiểm soát các khoản ứng trước.

## Đối tượng sử dụng
Người dùng có vai trò "Cán bộ Quản trị" và "Kế toán" có thể thao tác trên chức năng này.

## Truy cập chức năng
Trên giao diện menu chính chọn **Menu >> Nhân viên >> Tạm ứng**

![Menu tạm ứng](/images/18_tam_ung_menu.png)

## Các chức năng chính

### 1. Cấu hình tạm ứng tự động

**Mục đích**: Thiết lập cấu hình để hệ thống tự động tạo các đợt tạm ứng theo hằng tháng.

#### Truy cập
Chọn **"Cấu hình"** từ menu tạm ứng

![Danh sách cấu hình tạm ứng](/images/19_cau_hinh_tam_ung_list.png)

#### Các thao tác
- **Tạo cấu hình mới**: Thiết lập quy tắc tạm ứng tự động
- **Chỉnh sửa cấu hình**: Cập nhật thông tin cấu hình
- **Kích hoạt/Tắt**: Bật/tắt cấu hình tự động
- **Xóa cấu hình**: Xóa cấu hình không còn sử dụng

#### Thông tin cấu hình
- **Tên cấu hình**: Tên mô tả cho cấu hình
- **Chu kỳ**: Hằng tháng, quý, năm
- **Ngày thực hiện**: Ngày trong tháng thực hiện tạm ứng
- **Tỷ lệ tạm ứng**: Phần trăm lương được phép tạm ứng
- **Đối tượng áp dụng**: Phòng ban, nhóm nhân viên cụ thể

### 2. Quản lý đợt ứng lương

**Mục đích**: Quản lý các đợt ứng lương theo từng tháng, theo dõi tình hình tạm ứng.

#### Truy cập
Chọn **"Đợt ứng lương"** từ menu tạm ứng

![Danh sách đợt ứng lương](/images/20_dot_ung_luong_list.png)

#### Tạo đợt ứng lương mới
1. Nhấn nút **"Tạo mới"**
2. Điền thông tin đợt ứng:
   - **Tháng/năm**: Tháng thực hiện tạm ứng
   - **Mô tả**: Mô tả cho đợt ứng lương
   - **Ngày bắt đầu**: Ngày bắt đầu nhận đăng ký
   - **Ngày kết thúc**: Ngày kết thúc nhận đăng ký
   - **Trạng thái**: Mở/Đóng đăng ký

![Chi tiết đợt ứng lương](/images/21_dot_ung_luong_chi_tiet.png)

#### Quản lý đợt ứng lương
- **Mở đăng ký**: Cho phép nhân viên đăng ký tạm ứng
- **Đóng đăng ký**: Ngừng nhận đăng ký mới
- **Duyệt hàng loạt**: Duyệt tất cả đăng ký tạm ứng
- **Xuất báo cáo**: Export danh sách tạm ứng

### 3. Quản lý khoản ứng

**Mục đích**: Xem chi tiết danh sách nhân sự tạm ứng tiền và quản lý từng khoản ứng cụ thể.

#### Truy cập
Chọn **"Khoản ứng"** từ menu tạm ứng

![Danh sách khoản ứng](/images/22_khoan_ung_list.png)

#### Các thao tác
- **Xem chi tiết**: Xem thông tin chi tiết khoản ứng
- **Duyệt khoản ứng**: Phê duyệt yêu cầu tạm ứng
- **Từ chối**: Từ chối yêu cầu tạm ứng
- **Chỉnh sửa số tiền**: Điều chỉnh số tiền tạm ứng
- **Hủy khoản ứng**: Hủy khoản ứng đã duyệt

#### Thông tin khoản ứng
- **Nhân viên**: Thông tin người yêu cầu tạm ứng
- **Số tiền yêu cầu**: Số tiền nhân viên muốn tạm ứng
- **Số tiền duyệt**: Số tiền thực tế được duyệt
- **Lý do**: Lý do tạm ứng
- **Trạng thái**: Chờ duyệt/Đã duyệt/Từ chối
- **Ngày duyệt**: Ngày phê duyệt khoản ứng

## Quy trình xử lý tạm ứng

### Bước 1: Thiết lập cấu hình
1. Tạo cấu hình tạm ứng tự động
2. Thiết lập tỷ lệ và chu kỳ tạm ứng
3. Kích hoạt cấu hình

### Bước 2: Tạo đợt ứng lương
1. Hệ thống tự động tạo đợt (nếu có cấu hình)
2. Hoặc tạo thủ công theo nhu cầu
3. Mở đăng ký cho nhân viên

### Bước 3: Nhân viên đăng ký
1. Nhân viên truy cập hệ thống
2. Đăng ký tạm ứng với số tiền mong muốn
3. Ghi rõ lý do tạm ứng

### Bước 4: Duyệt và xử lý
1. Quản lý xem xét các yêu cầu
2. Duyệt hoặc từ chối từng khoản
3. Điều chỉnh số tiền nếu cần

### Bước 5: Xuất báo cáo và thanh toán
1. Xuất danh sách Excel để ký xác nhận
2. Thực hiện thanh toán cho nhân viên
3. Cập nhật trạng thái đã thanh toán

## Xuất báo cáo và xử lý

### Xuất danh sách Excel
Để nhân sự ký xác nhận thực tế đã tạm ứng tiền:

![Xuất Excel đợt ứng lương](/images/23_dot_ung_luong_xuat_excel.png)

### Kết quả file Excel
File Excel chứa đầy đủ thông tin để nhân viên ký xác nhận:

![Danh sách ứng lương Excel](/images/24_danh_sach_ung_luong_excel.png)

### Xử lý sau khi có chữ ký
1. Cập nhật số tiền thực nhận tạm ứng vào hệ thống
2. Chọn nút **"Duyệt tất cả khoản ứng"**
3. Hệ thống ghi nhận và khấu trừ khi tính lương tháng

## Tích hợp với hệ thống lương

### Khấu trừ tự động
- Hệ thống tự động khấu trừ khoản tạm ứng khi tính lương
- Hiển thị chi tiết trong phiếu lương
- Cập nhật số dư nợ của nhân viên

### Báo cáo tổng hợp
- Báo cáo tạm ứng theo tháng/quý/năm
- Thống kê theo phòng ban
- Phân tích xu hướng tạm ứng

## Lưu ý quan trọng

### Quy định tạm ứng
- Số tiền tạm ứng không vượt quá 80% lương cơ bản
- Mỗi nhân viên chỉ được tạm ứng một lần trong tháng
- Phải có lý do chính đáng cho việc tạm ứng

### Kiểm soát rủi ro
- Theo dõi tỷ lệ tạm ứng của từng nhân viên
- Cảnh báo khi tạm ứng quá mức cho phép
- Kiểm tra khả năng thanh toán trước khi duyệt

### Bảo mật thông tin
- Chỉ người có quyền mới xem được thông tin tạm ứng
- Lưu trữ lịch sử thay đổi
- Backup dữ liệu thường xuyên
  `

  const tamUngImages = [
    '/images/18_tam_ung_menu.png',
    '/images/19_cau_hinh_tam_ung_list.png',
    '/images/20_dot_ung_luong_list.png',
    '/images/21_dot_ung_luong_chi_tiet.png',
    '/images/22_khoan_ung_list.png',
    '/images/23_dot_ung_luong_xuat_excel.png',
    '/images/24_danh_sach_ung_luong_excel.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý tạm ứng
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn quản lý tạm ứng lương và các khoản ứng trước cho nhân viên
          </p>
        </div>
        
        <MarkdownRenderer 
          content={content} 
          images={tamUngImages}
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
