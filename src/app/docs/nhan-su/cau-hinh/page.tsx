import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function CauHinhPage() {
  const content = `
# Cấu hình hệ thống nhân sự

## Tổng quan
Phần cấu hình hệ thống nhân sự cho phép quản trị viên thiết lập các danh mục và tham số cần thiết để vận hành hiệu quả hệ thống quản lý nhân sự.

## Đối tượng sử dụng
Chỉ người dùng có vai trò "Quản trị viên hệ thống" mới có thể truy cập và thay đổi các cấu hình này.

## Truy cập chức năng
Trên giao diện menu chính chọn **Menu >> Nhân viên >> Cấu hình**

## Các danh mục cấu hình

### 1. Danh mục lý do nghỉ việc

**Mục đích**: Quản lý các lý do nghỉ việc của nhân sự để thống kê và phân tích.

#### Truy cập
Chọn **"Cấu hình"** -> **"Lý do nghỉ việc"**

![Danh sách lý do nghỉ việc](/images/25_li_do_nghi_viec_list.png)

#### Thông tin cấu hình
- **Tên lý do**: Tên đầy đủ của lý do nghỉ việc
- **Mã lý do**: Mã viết tắt (nếu có)
- **Mô tả**: Mô tả chi tiết về lý do
- **Loại**: Phân loại lý do (tự nguyện, sa thải, hết hạn hợp đồng...)
- **Trạng thái**: Kích hoạt/Không kích hoạt

#### Các thao tác
- **Thêm mới**: Tạo lý do nghỉ việc mới
- **Chỉnh sửa**: Cập nhật thông tin lý do
- **Xóa**: Xóa lý do không còn sử dụng
- **Lưu trữ**: Lưu trữ lý do không còn dùng nhưng cần giữ lại
- **Nhân bản**: Sao chép lý do để tạo lý do mới
- **Import/Export**: Nhập/xuất danh sách từ Excel

### 2. Danh mục vị trí công việc (chức vụ)

**Mục đích**: Quản lý các vị trí công việc và chức vụ trong công ty.

#### Truy cập
Chọn **"Cấu hình"** -> **"Vị trí công việc"**

![Danh sách vị trí công việc](/images/26_vi_tri_cong_viec_list.png)

#### Thông tin cấu hình
- **Tên chức vụ**: Tên đầy đủ của chức vụ
- **Mã chức vụ**: Mã viết tắt
- **Cấp bậc**: Cấp độ trong hệ thống phân cấp
- **Phòng ban**: Phòng ban áp dụng chức vụ này
- **Mô tả công việc**: Mô tả nhiệm vụ và trách nhiệm
- **Yêu cầu**: Yêu cầu về trình độ, kinh nghiệm

#### Các thao tác
- **Thêm mới**: Tạo chức vụ mới
- **Chỉnh sửa**: Cập nhật thông tin chức vụ
- **Xóa**: Xóa chức vụ không còn sử dụng
- **Phân cấp**: Thiết lập mối quan hệ cấp trên - cấp dưới
- **Import/Export**: Nhập/xuất danh sách từ Excel

### 3. Danh mục loại việc làm

**Mục đích**: Phân loại các loại hình việc làm trong công ty.

#### Truy cập
Chọn **"Cấu hình"** -> **"Loại việc làm"**

![Danh sách loại việc làm](/images/27_loai_viec_lam_list.png)

#### Thông tin cấu hình
- **Tên loại việc làm**: Tên đầy đủ
- **Mã loại**: Mã viết tắt
- **Mô tả**: Mô tả chi tiết về loại việc làm
- **Tính chất**: Toàn thời gian, bán thời gian, thời vụ
- **Chế độ**: Chế độ làm việc và phúc lợi áp dụng

#### Các loại việc làm phổ biến
- **Nhân viên chính thức**: Hợp đồng lao động không xác định thời hạn
- **Nhân viên thử việc**: Hợp đồng thử việc
- **Nhân viên hợp đồng**: Hợp đồng có thời hạn
- **Nhân viên bán thời gian**: Làm việc không toàn thời gian
- **Thực tập sinh**: Sinh viên thực tập
- **Cộng tác viên**: Làm việc theo dự án

### 4. Danh mục lịch làm việc

**Mục đích**: Quản lý các khung giờ làm việc để áp dụng cho hợp đồng lao động.

#### Truy cập
Chọn **"Cấu hình"** -> **"Lịch làm việc"**

![Danh sách lịch làm việc](/images/28_lich_lam_viec_list.png)

#### Thông tin cấu hình
- **Tên lịch làm việc**: Tên mô tả lịch làm việc
- **Mã lịch**: Mã viết tắt
- **Tổng giờ/tuần**: Tổng số giờ làm việc trong tuần
- **Số ngày làm việc**: Số ngày làm việc trong tuần
- **Mô tả**: Mô tả chi tiết về lịch làm việc

#### Thiết lập chi tiết lịch làm việc
Cho phép thiết lập khung giờ làm việc cụ thể cho từng ngày:

![Chi tiết lịch làm việc](/images/29_lich_lam_viec_chi_tiet.png)

![Header lịch làm việc](/images/30_lich_lam_viec_header.png)

#### Thông tin khung giờ
- **Ngày trong tuần**: Thứ 2 đến Chủ nhật
- **Giờ bắt đầu**: Giờ bắt đầu ca làm việc
- **Giờ kết thúc**: Giờ kết thúc ca làm việc
- **Giờ nghỉ trưa**: Thời gian nghỉ trưa (nếu có)
- **Tổng giờ làm**: Tổng số giờ làm việc trong ngày

#### Xem hợp đồng áp dụng
Có thể xem các hợp đồng lao động nào đang sử dụng lịch làm việc này:

![Danh sách hợp đồng lịch làm việc](/images/31_lich_lam_viec_hop_dong_list.png)

## Quy trình cấu hình hệ thống

### Bước 1: Thiết lập danh mục cơ bản
1. Cấu hình các lý do nghỉ việc phổ biến
2. Thiết lập cấu trúc chức vụ trong công ty
3. Định nghĩa các loại việc làm

### Bước 2: Thiết lập lịch làm việc
1. Tạo các mẫu lịch làm việc chuẩn
2. Thiết lập khung giờ cho từng ngày
3. Kiểm tra tính hợp lý của lịch làm việc

### Bước 3: Áp dụng vào hệ thống
1. Gán lịch làm việc cho hợp đồng lao động
2. Áp dụng chức vụ cho nhân viên
3. Sử dụng trong quy trình nghỉ việc

### Bước 4: Kiểm tra và điều chỉnh
1. Theo dõi việc sử dụng các danh mục
2. Điều chỉnh khi có thay đổi quy định
3. Cập nhật theo nhu cầu thực tế

## Các thao tác chung

### Import dữ liệu
- Tải template Excel từ hệ thống
- Điền thông tin theo đúng format
- Upload file và kiểm tra dữ liệu
- Xác nhận import vào hệ thống

### Export dữ liệu
- Chọn các bản ghi cần xuất
- Chọn định dạng file (Excel, CSV)
- Tải file về máy tính
- Sử dụng cho mục đích báo cáo

### Sao lưu và khôi phục
- Backup định kỳ các cấu hình
- Lưu trữ phiên bản cũ khi thay đổi
- Khôi phục khi cần thiết
- Đồng bộ giữa các môi trường

## Lưu ý quan trọng

### Quy tắc cấu hình
- Không xóa danh mục đang được sử dụng
- Kiểm tra tác động trước khi thay đổi
- Backup trước khi cập nhật lớn
- Test trên môi trường thử nghiệm

### Bảo mật
- Chỉ quản trị viên mới có quyền cấu hình
- Lưu lại lịch sử thay đổi
- Phân quyền truy cập chi tiết
- Kiểm soát việc import/export

### Hiệu suất
- Tối ưu số lượng danh mục
- Xóa các mục không sử dụng
- Đánh index cho tìm kiếm nhanh
- Monitor hiệu suất hệ thống
  `

  const cauHinhImages = [
    '/images/25_li_do_nghi_viec_list.png',
    '/images/26_vi_tri_cong_viec_list.png',
    '/images/27_loai_viec_lam_list.png',
    '/images/28_lich_lam_viec_list.png',
    '/images/29_lich_lam_viec_chi_tiet.png',
    '/images/30_lich_lam_viec_header.png',
    '/images/31_lich_lam_viec_hop_dong_list.png'
  ]

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Cấu hình hệ thống nhân sự
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn cấu hình các danh mục và tham số hệ thống quản lý nhân sự
          </p>
        </div>
        
        <MarkdownRenderer 
          content={content} 
          images={cauHinhImages}
          className="max-w-none"
        />
      </div>
    </DocsLayout>
  )
}
