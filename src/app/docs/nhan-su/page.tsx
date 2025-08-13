import Link from 'next/link'
import { Users, Building2, CreditCard, Settings, FileText, ArrowRight } from 'lucide-react'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function NhanSuPage() {
  const content = `
# Tổng quan hệ thống quản lý nhân sự

## Mục đích {#muc-dich}
Hệ thống quản lý nhân sự cho phép người dùng quản lý toàn bộ thông tin nhân sự của công ty một cách hiệu quả và chuyên nghiệp.

## Đối tượng sử dụng {#doi-tuong-su-dung}
- **Quản trị viên hệ thống**: Có quyền truy cập và cấu hình toàn bộ hệ thống
- **Cán bộ nhân sự**: Quản lý thông tin nhân viên, hợp đồng, phòng ban
- **Kế toán**: Quản lý tạm ứng, lương và các khoản phụ cấp
- **Trưởng phòng**: Xem thông tin nhân viên trong phòng ban

## Truy cập chức năng {#truy-cap-chuc-nang}
Trên giao diện menu chính chọn **Menu >> Nhân viên**

## Tính năng chính của hệ thống

### 🔍 Tìm kiếm và lọc dữ liệu
- Tìm kiếm theo nhiều tiêu chí: tên, mã nhân viên, phòng ban, chức vụ
- Lọc theo trạng thái: đang làm việc, nghỉ việc, thử việc
- Sắp xếp theo các trường dữ liệu khác nhau

### 📊 Hiển thị giao diện linh hoạt
- **Chế độ Kanban**: Hiển thị dưới dạng thẻ, dễ dàng theo dõi
- **Chế độ danh sách**: Hiển thị dạng bảng với đầy đủ thông tin
- **Tùy chỉnh số lượng**: Điều chỉnh số bản ghi hiển thị trên mỗi trang

### 📈 Import/Export dữ liệu
- **Import**: Nhập dữ liệu hàng loạt từ file Excel
- **Export**: Xuất dữ liệu ra file Excel để báo cáo
- **Template**: Cung cấp mẫu file Excel chuẩn

## Các chức năng chính

### 👥 [Quản lý nhân viên](/docs/nhan-su/nhan-vien)
- Thêm, sửa, xóa thông tin nhân viên
- Quản lý hồ sơ cá nhân và công việc
- Theo dõi lịch sử làm việc

### 📄 [Quản lý hợp đồng](/docs/nhan-su/hop-dong)
- Tạo và quản lý hợp đồng lao động
- Thiết lập lương và chế độ làm việc
- Theo dõi thời hạn hợp đồng

### 🏢 [Quản lý phòng ban](/docs/nhan-su/phong-ban)
- Tổ chức cấu trúc phòng ban
- Phân bổ nhân sự theo phòng ban
- Quản lý cấp bậc và quyền hạn

### 💰 [Quản lý tạm ứng](/docs/nhan-su/tam-ung)
- Xử lý yêu cầu tạm ứng lương
- Theo dõi và kiểm soát các khoản ứng
- Tích hợp với hệ thống tính lương

### ⚙️ [Cấu hình hệ thống](/docs/nhan-su/cau-hinh)
- Thiết lập danh mục lý do nghỉ việc
- Quản lý vị trí công việc và chức vụ
- Cấu hình loại việc làm và lịch làm việc

## Hướng dẫn sử dụng nhanh

### Bước 1: Truy cập hệ thống
1. Đăng nhập vào hệ thống ERP
2. Chọn **Menu >> Nhân viên** từ menu chính
3. Hệ thống hiển thị giao diện quản lý nhân sự

### Bước 2: Chọn chức năng cần sử dụng
- **Nhân viên**: Quản lý thông tin cá nhân và hồ sơ
- **Hợp đồng**: Quản lý hợp đồng lao động
- **Phòng ban**: Tổ chức cấu trúc công ty
- **Tạm ứng**: Xử lý các khoản ứng trước
- **Cấu hình**: Thiết lập danh mục hệ thống

### Bước 3: Thực hiện các tác vụ
Sử dụng các chức năng theo hướng dẫn chi tiết trong từng phần tương ứng.

---

## Chi tiết các chức năng

### 📋 Quản lý nhân viên {#quan-ly-nhan-vien}

**Mục đích**: Quản lý toàn bộ thông tin nhân viên trong công ty.

**Đối tượng**: Cán bộ Quản trị.

#### Chức năng chính

- Quản lý nhân viên (thêm, sửa, xóa, hợp đồng, phiếu lương, đóng góp, phụ cấp, khoản vay)
- Quản lý hợp đồng lao động (lịch làm việc, lương cơ bản, lương BHXH, cấu trúc lương)
- Quản lý phòng ban và vị trí công việc
- Tạm ứng lương và các khoản ứng khác

#### Giao diện chính

**1. Giao diện Kanban**: Hiển thị nhân viên dưới dạng thẻ trực quan
![Giao diện Kanban nhân viên](/images/06_nhan_vien_kanban.png)

**2. Menu lọc và nhóm**: Công cụ lọc dữ liệu mạnh mẽ
![Menu lọc và nhóm](/images/07_nhan_vien_filter_group_menu.png)

**3. Chế độ xem**: Chuyển đổi giữa các chế độ hiển thị
![Nút chế độ xem](/images/08_nhan_vien_view_buttons.png)

**4. Danh sách nhân viên**: Hiển thị dạng bảng với đầy đủ thông tin
![Danh sách nhân viên](/images/09_nhan_vien_list.png)

#### Các thao tác chính

**Quản lý thông tin nhân viên**
![Form chi tiết nhân viên](/images/10_nhan_vien_chi_tiet_form.png)

**Lưu ý quan trọng**:
- **Mã nhân viên**: Mã định danh duy nhất cho mỗi nhân viên
- **ID máy chấm công**: Đặt giống mã nhân viên để đồng bộ dữ liệu chấm công

**Quản lý thông tin liên quan**
![Thanh tabs](/images/11_nhan_vien_tabs_bar.png)

Các tab thông tin chi tiết:
- **Hợp đồng lao động**: Xem và quản lý các hợp đồng đã ký
- **Phiếu lương**: Theo dõi lịch sử lương các tháng
- **Đóng góp**: Quản lý các khoản đóng góp BHXH, BHYT
- **Phụ cấp**: Theo dõi các khoản phụ cấp được hưởng
- **Khoản vay**: Quản lý các đợt tạm ứng lương

**Menu tác vụ nâng cao**
![Menu tác vụ](/images/12_nhan_vien_tac_vu_menu.png)

**Import dữ liệu hàng loạt**
![Modal import nhân viên](/images/13_import_nhan_vien_modal.png)

**Các thao tác chính**:
- **Thêm nhân viên mới:** Nhập đầy đủ thông tin cá nhân và công việc
- **Chỉnh sửa thông tin:** Cập nhật thông tin khi có thay đổi
- **Xóa nhân viên:** Xóa nhân viên không còn làm việc
- **Import/Export:** Nhập và xuất dữ liệu nhân viên từ Excel
- **Tạo hợp đồng:** Lập hợp đồng lao động cho nhân viên

### 📄 Quản lý hợp đồng {#quan-ly-hop-dong}

**Mục đích**: Quản lý hợp đồng lao động cho từng nhân viên.

**Truy cập**: **Nhân viên** → **Hợp đồng**

#### Các loại hợp đồng

**Hợp đồng không xác định thời hạn**: Dành cho nhân viên chính thức, không có thời hạn cụ thể

**Hợp đồng có xác định thời hạn**: Hợp đồng có thời hạn từ 12-36 tháng

**Hợp đồng thử việc**: Thời hạn thử việc từ 1-6 tháng tùy vị trí

**Hợp đồng thời vụ**: Dành cho công việc có tính chất thời vụ, ngắn hạn

#### Giao diện chính
![Danh sách hợp đồng](/images/14_hop_dong_list.png)

#### Form chi tiết hợp đồng
![Chi tiết hợp đồng](/images/15_hop_dong_chi_tiet.png)

**Các trường thông tin quan trọng**:
- **Lịch làm việc**: Chọn khung giờ làm việc áp dụng
- **Lương cơ bản**: Mức lương để tính toán lương tháng
- **Lương BHXH**: Mức lương đóng bảo hiểm xã hội
- **Cấu trúc lương**: Công thức tính lương áp dụng

#### Quy trình quản lý

**1. Tạo hợp đồng mới**
1. Vào menu "Nhân sự" → "Quản lý hợp đồng"
2. Click "Thêm hợp đồng mới"
3. Chọn nhân viên và loại hợp đồng
4. Điền thông tin chi tiết hợp đồng
5. Lưu và in hợp đồng

**2. Theo dõi hợp đồng**
- Xem danh sách tất cả hợp đồng
- Lọc theo trạng thái, loại hợp đồng
- Cảnh báo hợp đồng sắp hết hạn
- Theo dõi lịch sử thay đổi

**3. Gia hạn hợp đồng**
1. Chọn hợp đồng cần gia hạn
2. Click "Gia hạn hợp đồng"
3. Cập nhật thông tin mới
4. Xác nhận và lưu

#### Menu tác vụ
![Menu tác vụ hợp đồng](/images/16_hop_dong_tac_vu_menu.png)

### 🏢 Quản lý phòng ban {#quan-ly-phong-ban}

**Mục đích**: Tổ chức cấu trúc phòng ban và phân bổ nhân sự.

**Truy cập**: **Nhân viên** → **Phòng ban**

#### Giao diện Kanban
![Kanban phòng ban](/images/17_phong_ban_kanban.png)

#### Các tính năng chính
- Tạo và quản lý cấu trúc phòng ban
- Phân bổ nhân viên theo phòng ban
- Thiết lập cấp bậc và quyền hạn
- Import/Export dữ liệu phòng ban

#### Quy trình quản lý phòng ban

**1. Tạo phòng ban mới**
1. Vào menu "Nhân sự" → "Quản lý phòng ban"
2. Click "Thêm phòng ban mới"
3. Nhập tên phòng ban và mô tả
4. Chọn phòng ban cấp trên (nếu có)
5. Thiết lập quyền hạn và trách nhiệm
6. Lưu thông tin

**2. Phân bổ nhân sự**
- Kéo thả nhân viên giữa các phòng ban
- Thiết lập vai trò và chức vụ
- Quản lý cấp bậc trong phòng ban
- Theo dõi số lượng nhân sự

**3. Quản lý cấu trúc**
- Tạo sơ đồ tổ chức
- Thiết lập mối quan hệ cấp trên - cấp dưới
- Quản lý quyền truy cập theo phòng ban
- Báo cáo cơ cấu tổ chức

### 💰 Quản lý tạm ứng {#quan-ly-tam-ung}

**Mục đích**: Quản lý các khoản tạm ứng lương hằng tháng của nhân viên.

**Truy cập**: **Nhân viên** → **Tạm ứng**

![Menu tạm ứng](/images/18_tam_ung_menu.png)

#### Các chức năng chính

**1. Cấu hình tự động**
![Danh sách cấu hình tạm ứng](/images/19_cau_hinh_tam_ung_list.png)

Thiết lập quy tắc tự động cho việc tạm ứng:
- Tỷ lệ tạm ứng theo lương cơ bản
- Thời gian cho phép tạm ứng trong tháng
- Giới hạn số tiền tạm ứng tối đa
- Quy định về hoàn trả

**2. Quản lý đợt ứng lương**
![Danh sách đợt ứng lương](/images/20_dot_ung_luong_list.png)
![Chi tiết đợt ứng lương](/images/21_dot_ung_luong_chi_tiet.png)

Quy trình tạo đợt ứng lương:
1. Tạo đợt ứng lương mới
2. Chọn nhân viên tham gia
3. Thiết lập số tiền ứng cho từng người
4. Phê duyệt và thực hiện chi trả
5. Theo dõi và báo cáo

**3. Theo dõi khoản ứng**
![Danh sách khoản ứng](/images/22_khoan_ung_list.png)

Quản lý chi tiết các khoản ứng:
- Lịch sử tạm ứng của từng nhân viên
- Trạng thái hoàn trả
- Số dư còn lại cần trừ vào lương
- Cảnh báo quá hạn hoàn trả

**4. Xuất báo cáo**
![Xuất Excel đợt ứng lương](/images/23_dot_ung_luong_xuat_excel.png)
![Danh sách ứng lương Excel](/images/24_danh_sach_ung_luong_excel.png)

Các loại báo cáo:
- Báo cáo tổng hợp tạm ứng theo tháng
- Danh sách nhân viên có khoản ứng
- Báo cáo hoàn trả và số dư
- Thống kê xu hướng tạm ứng

### ⚙️ Cấu hình hệ thống

**Mục đích**: Thiết lập các danh mục và tham số cần thiết cho hệ thống nhân sự.

**Truy cập**: **Nhân viên** → **Cấu hình**

#### Các danh mục cấu hình

**1. Lý do nghỉ việc**
![Danh sách lý do nghỉ việc](/images/25_li_do_nghi_viec_list.png)

**2. Vị trí công việc (chức vụ)**
![Danh sách vị trí công việc](/images/26_vi_tri_cong_viec_list.png)

**3. Loại việc làm**
![Danh sách loại việc làm](/images/27_loai_viec_lam_list.png)

**4. Lịch làm việc**
![Danh sách lịch làm việc](/images/28_lich_lam_viec_list.png)
![Chi tiết lịch làm việc](/images/29_lich_lam_viec_chi_tiet.png)
![Header lịch làm việc](/images/30_lich_lam_viec_header.png)
![Danh sách hợp đồng lịch làm việc](/images/31_lich_lam_viec_hop_dong_list.png)

[👉 Xem hướng dẫn chi tiết](/docs/nhan-su/cau-hinh)

## Import/Export dữ liệu

### Import dữ liệu hàng loạt
**Mục đích**: Nhập dữ liệu nhân viên từ file Excel.

![Menu Import/Export nhân viên](/images/32_nhan_vien_import_export_menu.png)
![Lựa chọn kế hoạch](/images/33_nhan_vien_start_plan_selection.png)

### Export dữ liệu
**Mục đích**: Xuất dữ liệu ra file Excel để báo cáo.

![Menu hành động nhân viên](/images/34_nhan_vien_hanh_dong_menu.png)
![Modal xuất dữ liệu nhân viên](/images/35_nhan_vien_xuat_du_lieu_modal.png)

---

## Lưu ý quan trọng

### Bảo mật và phân quyền
- ✅ Phân quyền truy cập phù hợp cho từng vai trò
- ✅ Tuân thủ quy định về bảo mật thông tin cá nhân
- ✅ Lưu trữ lịch sử thay đổi dữ liệu

### Quản lý dữ liệu
- ✅ Backup dữ liệu thường xuyên
- ✅ Kiểm tra kỹ thông tin trước khi lưu
- ✅ Đồng bộ dữ liệu giữa các module

### Hiệu suất hệ thống
- ✅ Tối ưu hóa tốc độ truy vấn
- ✅ Quản lý dung lượng file đính kèm
- ✅ Monitor hiệu suất hệ thống

## Hỗ trợ và liên hệ

Nếu cần hỗ trợ thêm về hệ thống quản lý nhân sự, vui lòng liên hệ:

**Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt**
- 📧 Email: phuongviet.ite@gmail.com
- 📞 Điện thoại: 0706 780 790
- 🏢 Địa chỉ: Số 133/2A Trần Hưng Đạo, P. Ninh Kiều, TP. Cần Thơ
### ⚙️ Cấu hình phần hệ nhân sự {#cau-hinh-phan-he-nhan-su}

**Mục đích**: Thiết lập các danh mục và tham số cấu hình cho hệ thống nhân sự.

#### Các danh mục cấu hình

##### 1. Danh mục lý do nghỉ việc {#danh-muc-ly-do-nghi-viec}

Quản lý các lý do nghỉ việc để phân loại và thống kê:

**Lý do tích cực:**
- Thăng tiến công việc
- Cơ hội phát triển tốt hơn
- Chuyển công tác
- Học tập, nâng cao trình độ

**Lý do cá nhân:**
- Lý do gia đình
- Sức khỏe
- Chuyển nơi ở
- Kết hôn, sinh con

**Lý do tiêu cực:**
- Không hài lòng với lương
- Môi trường làm việc
- Áp lực công việc
- Xung đột với đồng nghiệp

##### 2. Quản lý danh mục vị trí công việc (chức vụ) {#quan-ly-vi-tri-cong-viec}

Thiết lập cơ cấu tổ chức và vị trí công việc:

**Cấp lãnh đạo:**
- Tổng Giám đốc, Phó Tổng Giám đốc
- Giám đốc, Phó Giám đốc
- Trưởng phòng, Phó phòng

**Cấp quản lý:**
- Trưởng nhóm, Team Leader
- Supervisor, Quản lý dự án
- Chuyên viên cao cấp

**Cấp nhân viên:**
- Chuyên viên, Nhân viên
- Thực tập sinh, Công nhân
- Nhân viên bán thời gian

##### 3. Quản lý danh mục loại việc làm {#quan-ly-loai-viec-lam}

Phân loại nhân viên theo tính chất công việc:

**Theo thời gian:**
- Toàn thời gian: 8 giờ/ngày, 5-6 ngày/tuần
- Bán thời gian: 4-6 giờ/ngày hoặc 2-3 ngày/tuần
- Theo ca: Ca sáng, ca chiều, ca đêm

**Theo hợp đồng:**
- Chính thức: Hợp đồng lao động dài hạn
- Thử việc: Giai đoạn thử việc 1-6 tháng
- Hợp đồng: Có thời hạn xác định

**Theo địa điểm:**
- Tại văn phòng: Làm việc tại trụ sở công ty
- Từ xa: Làm việc tại nhà hoặc địa điểm khác
- Hybrid: Kết hợp văn phòng và từ xa

##### 4. Quản lý danh mục lịch làm việc {#quan-ly-lich-lam-viec}

Thiết lập các mẫu lịch làm việc:

**Lịch hành chính:**
- Thứ 2 - Thứ 6: 8:00 - 17:00
- Nghỉ trưa: 12:00 - 13:00
- Thứ 7, CN: Nghỉ

**Lịch ca sáng:**
- Ca làm việc: 6:00 - 14:00
- Nghỉ giữa ca: 10:00 - 10:15
- Áp dụng: Thứ 2 - Thứ 7

**Lịch ca chiều:**
- Ca làm việc: 14:00 - 22:00
- Nghỉ giữa ca: 18:00 - 18:30
- Áp dụng: Thứ 2 - Thứ 7

**Lịch ca đêm:**
- Ca làm việc: 22:00 - 6:00
- Nghỉ giữa ca: 2:00 - 2:30
- Phụ cấp: +30%

### 📥 Import dữ liệu vào phần mềm {#import-du-lieu}

**Mục đích**: Nhập dữ liệu nhân sự từ file Excel vào hệ thống ERP.

#### Các loại dữ liệu có thể import

**Thông tin cơ bản:**
- Danh sách nhân viên mới
- Thông tin cá nhân
- Thông tin liên hệ
- Địa chỉ thường trú
- Trình độ học vấn

**Thông tin công việc:**
- Vị trí công việc
- Phòng ban
- Ngày bắt đầu làm việc
- Loại hợp đồng
- Mức lương

**Dữ liệu chấm công:**
- Lịch sử chấm công
- Giờ làm việc
- Nghỉ phép
- Tăng ca
- Đi muộn, về sớm

#### Quy trình import

**Bước 1: Chuẩn bị file dữ liệu**
1. Tải template Excel từ hệ thống
2. Điền dữ liệu theo đúng format
3. Kiểm tra và làm sạch dữ liệu
4. Lưu file với định dạng .xlsx hoặc .csv

**Bước 2: Thực hiện import**
1. Vào menu "Nhân sự" → "Import dữ liệu"
2. Chọn loại dữ liệu cần import
3. Upload file đã chuẩn bị
4. Mapping các cột dữ liệu
5. Preview và kiểm tra
6. Thực hiện import

### 📤 Export dữ liệu ra file {#export-du-lieu}

**Mục đích**: Xuất dữ liệu nhân sự từ hệ thống ERP ra các định dạng file khác nhau.

#### Các định dạng file hỗ trợ

- **Excel (.xlsx)**: Phù hợp cho báo cáo, phân tích dữ liệu
- **CSV (.csv)**: Định dạng đơn giản, tương thích cao
- **PDF (.pdf)**: Báo cáo chính thức, không chỉnh sửa
- **JSON (.json)**: Tích hợp với hệ thống khác

#### Các loại dữ liệu có thể export

**Danh sách nhân viên:**
- Thông tin cá nhân đầy đủ
- Thông tin công việc hiện tại
- Lịch sử công tác
- Trình độ học vấn
- Thông tin liên hệ

**Báo cáo tổng hợp:**
- Cơ cấu nhân sự
- Thống kê theo phòng ban
- Báo cáo tuổi nghề
- Phân tích tỷ lệ nghỉ việc
- Dashboard tổng quan

#### Quy trình export

**Bước 1: Chọn dữ liệu cần export**
1. Vào menu "Nhân sự" → "Export dữ liệu"
2. Chọn loại báo cáo/dữ liệu
3. Thiết lập bộ lọc (phòng ban, thời gian, trạng thái)

**Bước 2: Cấu hình export**
1. Chọn định dạng file output
2. Chọn các cột dữ liệu cần xuất
3. Thiết lập format hiển thị
4. Cấu hình tên file và thư mục lưu

**Bước 3: Thực hiện export**
1. Preview dữ liệu trước khi xuất
2. Click "Export" để bắt đầu
3. Chờ hệ thống xử lý
4. Download file kết quả

  `

  const modules = [
    {
      title: 'Quản lý nhân viên',
      description: 'Quản lý thông tin nhân viên, hợp đồng và dữ liệu cá nhân',
      icon: Users,
      href: '#quan-ly-nhan-vien',
      color: 'bg-blue-500'
    },
    {
      title: 'Quản lý hợp đồng',
      description: 'Quản lý hợp đồng lao động, lương và chế độ làm việc',
      icon: FileText,
      href: '#quan-ly-hop-dong',
      color: 'bg-green-500'
    },
    {
      title: 'Quản lý phòng ban',
      description: 'Tổ chức cấu trúc phòng ban và phân bổ nhân sự',
      icon: Building2,
      href: '#quan-ly-phong-ban',
      color: 'bg-purple-500'
    },
    {
      title: 'Quản lý tạm ứng',
      description: 'Quản lý các khoản tạm ứng lương và ứng trước',
      icon: CreditCard,
      href: '#quan-ly-tam-ung',
      color: 'bg-orange-500'
    },
    {
      title: 'Cấu hình hệ thống',
      description: 'Thiết lập danh mục và tham số hệ thống nhân sự',
      icon: Settings,
      href: '#cau-hinh-phan-he-nhan-su',
      color: 'bg-gray-500'
    }
  ]

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Quản lý nhân sự
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn chi tiết về quản lý thông tin nhân sự trong hệ thống ERP
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.href} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${module.color} text-white`}>
                    <module.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3">
                  {module.description}
                </CardDescription>
                <Link href={module.href}>
                  <Button variant="outline" className="w-full group-hover:bg-accent">
                    Xem chi tiết
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Content */}
        <div className="border-t pt-8">
          <MarkdownRenderer
            content={content}
            className="max-w-none"
          />
        </div>
      </div>
    </DocsLayout>
  )
}
