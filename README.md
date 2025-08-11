# Website Tài liệu ERP - Phương Việt

Website tài liệu hướng dẫn sử dụng hệ thống quản trị tổng thể doanh nghiệp (ERP) của Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt.

## 🚀 Công nghệ sử dụng

- **Framework**: Next.js 15.4.6 với App Router
- **Ngôn ngữ**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Markdown Processing**: react-markdown, remark-gfm, rehype-highlight
- **Icons**: Lucide React

## 🛠️ Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18+
- npm, yarn, pnpm hoặc bun

### Cài đặt dependencies
```bash
cd docs-website
# Khuyến nghị sử dụng bun (nhanh hơn)
bun install

# Hoặc sử dụng npm
npm install
```

### Chạy development server
```bash
# Với bun (khuyến nghị)
bun run dev

# Hoặc với npm
npm run dev
```

Website sẽ chạy tại [http://localhost:3000](http://localhost:3000)

### Build cho production
```bash
# Với bun
bun run build
bun run start

# Hoặc với npm
npm run build
npm start
```

## 🚀 Deployment

### Tự động deploy với GitHub Actions
Dự án đã được cấu hình để tự động deploy lên Vercel:

- **Push lên `main`**: Deploy production tự động
- **Tạo Pull Request**: Deploy preview tự động + comment link

### Setup GitHub Actions (Một lần duy nhất)
1. **Thêm GitHub Secrets:**
   - Vào repo → Settings → Secrets and variables → Actions
   - Thêm: `VERCEL_TOKEN`, `VERCEL_PROJECT_ID`, `VERCEL_ORG_ID`
   - Chi tiết: xem file `.github/SETUP_DEPLOYMENT.md`

2. **Workflow sẽ tự động chạy** khi push code

### Manual deploy (Tùy chọn)
```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📝 Tính năng chính

- ✅ Giao diện responsive giống Next.js docs
- ✅ Hiển thị nội dung markdown với syntax highlighting
- ✅ Hình ảnh tích hợp đúng vị trí trong nội dung
- ✅ Navigation sidebar với menu đa cấp
- ✅ Tìm kiếm global với shortcut Ctrl/Cmd + K
- ✅ Dark/Light mode support
- ✅ SEO optimized
- ✅ TypeScript support
- ✅ Zero hydration errors
- ✅ WCAG accessibility compliant
- ✅ Screen reader friendly

## 📞 Hỗ trợ

**Công ty TNHH Công nghệ Thông tin và Môi trường Phương Việt**
- 📍 Địa chỉ: Số 133/2A Trần Hưng Đạo, P. Ninh Kiều, TP. Cần Thơ
- 📞 Điện thoại: 0706 780 790
- 📧 Email: phuongviet.ite@gmail.com
