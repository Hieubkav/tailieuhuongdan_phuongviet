import { DocsLayout } from '@/components/layout/docs-layout'
import { MarkdownRenderer } from '@/components/markdown-renderer'

export default function LoginPage() {
  const content = `
# Chức năng đăng nhập hệ thống

**Mục đích:** Cho phép người dùng đăng nhập vào hệ thống để sử dụng phần mềm.

**Đối tượng sử dụng:** Tất cả người dùng.

**Truy cập:** Tại địa chỉ: \`http://163.61.72.139/web/login\`.

**Ghi chú:** Sau khi đăng nhập, giao diện sẽ hiển thị các phân hệ tùy vai trò. Người dùng có thể vào **"Thông tin của tôi"** để cập nhật tên, mật khẩu, thông tin cá nhân.

## Logo công ty

Hệ thống hiển thị logo của Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt.

![Logo Phương Việt](/images/01_logo_PV.png)

## Giao diện đăng nhập

Giao diện đăng nhập với các trường thông tin cần thiết.

![Giao diện đăng nhập](/images/02_dang_nhap_MinhDuc.png)

## Hướng dẫn đăng nhập

1. **Truy cập hệ thống:** Mở trình duyệt và truy cập địa chỉ \`http://163.61.72.139/web/login\`
2. **Nhập thông tin:** Điền tên đăng nhập và mật khẩu đã được cấp
3. **Đăng nhập:** Nhấn nút "Đăng nhập" để vào hệ thống
4. **Chuyển hướng:** Hệ thống sẽ tự động chuyển đến trang chủ

## Trang chủ hệ thống

Sau khi đăng nhập thành công, người dùng sẽ được chuyển đến trang chủ ERP.

![Trang chủ ERP](/images/03_trang_chu_erp.png)

## Quản lý tài khoản

### Menu tài khoản

Người dùng có thể truy cập menu tài khoản để quản lý thông tin cá nhân.

![Menu tài khoản dropdown](/images/04_menu_tai_khoan_dropdown.png)

### Bảo mật tài khoản

Giao diện để cập nhật thông tin bảo mật tài khoản.

![Bảo mật tài khoản](/images/05_bao_mat_tai_khoan.png)

## Chức năng đăng xuất

**Mục đích:** Cho phép người dùng đăng xuất khi không sử dụng.

**Thao tác:** Tại giao diện trang chủ, chọn **Đăng xuất** từ menu tài khoản.

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
