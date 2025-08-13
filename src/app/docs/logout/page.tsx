import { Metadata } from 'next'
import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export const metadata: Metadata = {
  title: 'Chức năng đăng xuất hệ thống | Tài liệu ERP',
  description: 'Hướng dẫn sử dụng chức năng đăng xuất hệ thống ERP',
}

export default function LogoutPage() {
  const content = `
# 2. Chức năng đăng xuất hệ thống

## 2.1. Mục đích {#muc-dich}

Chức năng đăng xuất hệ thống được thiết kế để:

- Đảm bảo tính bảo mật của tài khoản người dùng
- Ngăn chặn việc truy cập trái phép khi rời khỏi máy tính
- Kết thúc phiên làm việc một cách an toàn
- Giải phóng tài nguyên hệ thống

## 2.2. Đối tượng sử dụng {#doi-tuong-su-dung}

Chức năng đăng xuất áp dụng cho tất cả người dùng hệ thống:

- **Quản trị viên hệ thống:** Đăng xuất sau khi hoàn thành công việc quản trị
- **Nhân viên phòng nhân sự:** Đăng xuất khi kết thúc ca làm việc
- **Kế toán:** Đăng xuất để bảo mật thông tin tài chính
- **Quản lý:** Đăng xuất khi rời khỏi vị trí làm việc

## 2.3. Truy cập chức năng {#truy-cap-chuc-nang}

### Các cách đăng xuất khỏi hệ thống:

#### Cách 1: Đăng xuất từ menu người dùng

1. Click vào avatar/tên người dùng ở góc phải màn hình
2. Chọn "Đăng xuất" từ menu dropdown
3. Xác nhận đăng xuất nếu được yêu cầu

#### Cách 2: Đăng xuất từ menu chính

1. Vào menu "Hệ thống"
2. Chọn "Đăng xuất"
3. Hệ thống sẽ tự động chuyển về trang đăng nhập

#### Cách 3: Tự động đăng xuất

- Hệ thống sẽ tự động đăng xuất sau thời gian không hoạt động (thường là 30 phút)
- Cảnh báo sẽ xuất hiện trước khi đăng xuất tự động

> **⚠️ Lưu ý quan trọng:**
>
> - Luôn đăng xuất khi rời khỏi máy tính
> - Lưu công việc trước khi đăng xuất
> - Không chia sẻ thông tin đăng nhập với người khác
> - Đăng xuất hoàn toàn khỏi trình duyệt nếu sử dụng máy tính chung

## Hướng dẫn đăng xuất chi tiết

1. **Lưu công việc:** Đảm bảo tất cả dữ liệu đã được lưu
2. **Đóng các cửa sổ:** Đóng tất cả cửa sổ popup và dialog đang mở
3. **Chọn đăng xuất:** Sử dụng một trong các cách đăng xuất ở trên
4. **Xác nhận:** Xác nhận đăng xuất nếu hệ thống yêu cầu
5. **Kiểm tra:** Đảm bảo đã được chuyển về trang đăng nhập

## Lưu ý bảo mật

- Không chia sẻ thông tin đăng nhập với người khác
- Đăng xuất khi không sử dụng để bảo mật
- Thay đổi mật khẩu định kỳ
- Báo ngay cho quản trị viên nếu có vấn đề đăng nhập
- Sử dụng trình duyệt được hỗ trợ (Chrome, Firefox, Edge)
  `

  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Đăng xuất hệ thống
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn đăng xuất khỏi hệ thống ERP một cách an toàn
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
