# Hướng dẫn thiết lập GitHub Actions cho Vercel Deployment

## 🚀 Tổng quan

Dự án này đã được cấu hình với GitHub Actions để tự động deploy lên Vercel khi:
- **Push lên branch `main`/`master`**: Deploy production
- **Tạo Pull Request**: Deploy preview và comment link preview vào PR

## 📋 Các bước thiết lập

### 1. Lấy thông tin từ Vercel

Truy cập [Vercel Dashboard](https://vercel.com/dashboard) và làm theo các bước:

#### a) Lấy Vercel Token
1. Vào **Settings** → **Tokens**
2. Tạo token mới với tên `GitHub Actions`
3. Copy token này (chỉ hiển thị 1 lần)

#### b) Lấy Project ID và Org ID
1. Vào project của bạn trên Vercel
2. Vào **Settings** → **General**
3. Copy **Project ID**
4. Copy **Team ID** (nếu là personal account thì là **User ID**)

### 2. Cấu hình GitHub Secrets

Vào repository GitHub → **Settings** → **Secrets and variables** → **Actions**

Thêm các secrets sau:

| Secret Name | Giá trị | Mô tả |
|-------------|---------|-------|
| `VERCEL_TOKEN` | Token từ bước 1a | Token để authenticate với Vercel |
| `VERCEL_PROJECT_ID` | Project ID từ bước 1b | ID của project trên Vercel |
| `VERCEL_ORG_ID` | Org/User ID từ bước 1b | ID của organization/user |

### 3. Cấu hình Vercel Project (Tùy chọn)

Để đảm bảo workflow hoạt động tốt nhất:

1. Vào Vercel project → **Settings** → **Git**
2. Tắt **Automatic deployments from Git** (để GitHub Actions quản lý)
3. Vào **Settings** → **Functions** → kiểm tra **Node.js Version** = 20.x

### 4. Test workflow

1. Tạo một commit nhỏ và push lên branch `main`
2. Kiểm tra tab **Actions** trên GitHub để xem workflow chạy
3. Tạo Pull Request để test preview deployment

## 🔧 Cấu trúc Workflow

### Workflow 1: `vercel-deploy.yml` (Đơn giản)
- Deploy cơ bản với npm
- Phù hợp cho dự án nhỏ

### Workflow 2: `ci-cd.yml` (Nâng cao)
- Sử dụng Bun (nhanh hơn npm)
- Kiểm tra chất lượng code (ESLint, TypeScript)
- Comment preview URL vào Pull Request
- Tạo deployment status

## 🐛 Troubleshooting

### Lỗi thường gặp:

1. **"VERCEL_TOKEN not found"**
   - Kiểm tra lại secret đã được thêm chưa
   - Đảm bảo tên secret chính xác

2. **"Project not found"**
   - Kiểm tra `VERCEL_PROJECT_ID` và `VERCEL_ORG_ID`
   - Đảm bảo token có quyền truy cập project

3. **Build failed**
   - Kiểm tra code có lỗi syntax không
   - Đảm bảo dependencies đầy đủ trong package.json

### Debug workflow:
```bash
# Chạy local để test
bun install
bun run lint
bun run build
```

## 📝 Lưu ý

- Workflow sẽ tự động chạy khi push code
- Preview deployment chỉ tạo cho Pull Request
- Production deployment chỉ từ branch main/master
- Mỗi deployment sẽ có URL riêng biệt

## 🔗 Links hữu ích

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel GitHub Integration](https://vercel.com/docs/deployments/git/vercel-for-github)
