import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function LoginPage() {
  const content = `
# Chức năng đăng nhập hệ thống

## 1.1. Mục đích {#muc-dich}
Cho phép người dùng đăng nhập vào hệ thống để sử dụng phần mềm.

## 1.2. Đối tượng sử dụng {#doi-tuong-su-dung}
Tất cả người dùng có thể thao tác trên chức năng này.

## 1.3. Truy cập chức năng {#truy-cap-chuc-nang}

### Địa chỉ truy cập hệ thống
Hệ thống phần mềm tại địa chỉ: \`http://163.61.72.139/web/login\`

### Giao diện đăng nhập
Hệ thống hiển thị giao diện đăng nhập với các trường thông tin cần thiết:

![Logo Phương Việt](/images/01_logo_PV.png)

![Giao diện đăng nhập](/images/02_dang_nhap_MinhDuc.png)

### Giao diện sau khi đăng nhập hệ thống
Tùy theo vai trò người dùng mà hệ thống sẽ hiển thị các phân hệ theo đúng chức năng nhiệm vụ:

![Trang chủ ERP](/images/03_trang_chu_erp.png)

### Cập nhật thông tin cá nhân
Ngoài ra, người dùng có thể cập nhật thông tin cá nhân, chọn vào chức năng **"Thông tin của tôi"** trên góc phải màn hình:

![Menu tài khoản dropdown](/images/04_menu_tai_khoan_dropdown.png)

Cập nhật các thông tin cần thiết, như tên, mật khẩu,...

![Bảo mật tài khoản](/images/05_bao_mat_tai_khoan.png)

## Hướng dẫn đăng nhập chi tiết

1. **Truy cập hệ thống:** Mở trình duyệt và truy cập địa chỉ \`http://163.61.72.139/web/login\`
2. **Nhập thông tin:** Điền tên đăng nhập và mật khẩu đã được cấp
3. **Đăng nhập:** Nhấn nút "Đăng nhập" để vào hệ thống
4. **Chuyển hướng:** Hệ thống sẽ tự động chuyển đến trang chủ

# 2. Chức năng đăng xuất hệ thống

## 2.1. Mục đích
Cho phép người dùng đăng xuất ra khỏi hệ thống khi không sử dụng.

## 2.2. Đối tượng sử dụng
Tất cả người dùng có thể thao tác trên chức năng này.

## 2.3. Truy cập chức năng
Tại giao diện trang chủ, người dùng chọn vào đăng xuất ra khỏi hệ thống.

## Lưu ý quan trọng

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
            Đăng nhập hệ thống
          </h1>
          <p className="text-muted-foreground">
            Hướng dẫn đăng nhập vào hệ thống ERP
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
