# Hướng dẫn Deployment

## 🚀 Deployment Options

### 1. Vercel (Khuyến nghị)

Vercel là platform tốt nhất cho Next.js apps:

```bash
# Cài đặt Vercel CLI
npm i -g vercel

# Deploy
vercel

# Hoặc deploy production
vercel --prod
```

### 2. Netlify

```bash
# Build project
npm run build

# Upload thư mục .next/static và out/ lên Netlify
```

### 3. Docker

Tạo file `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### 4. VPS/Server thông thường

```bash
# 1. Clone repository
git clone <your-repo-url>
cd docs-website

# 2. Cài đặt dependencies
npm install

# 3. Build project
npm run build

# 4. Chạy với PM2
npm install -g pm2
pm2 start npm --name "docs-website" -- start

# 5. Setup nginx reverse proxy
# /etc/nginx/sites-available/docs-website
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Environment Variables

Tạo file `.env.local`:

```env
# Production settings
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📝 Pre-deployment Checklist

- [ ] Kiểm tra tất cả links hoạt động
- [ ] Kiểm tra responsive design trên mobile/tablet
- [ ] Kiểm tra performance với Lighthouse
- [ ] Kiểm tra SEO metadata
- [ ] Test build locally: `npm run build && npm start`
- [ ] Kiểm tra tất cả hình ảnh load đúng
- [ ] Kiểm tra dark/light mode

## 🔍 Monitoring & Analytics

### Google Analytics (Optional)

Thêm vào `src/app/layout.tsx`:

```tsx
import Script from 'next/script'

// Trong component
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🚨 Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build
```

### Image Loading Issues

- Kiểm tra đường dẫn hình ảnh trong `public/images/`
- Đảm bảo tên file không có ký tự đặc biệt
- Kiểm tra permissions của thư mục

### Performance Issues

```bash
# Analyze bundle
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

## 📊 Performance Optimization

- Sử dụng Next.js Image component cho tối ưu hình ảnh
- Enable compression trong production
- Sử dụng CDN cho static assets
- Implement proper caching headers
