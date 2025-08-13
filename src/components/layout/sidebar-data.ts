import { FileText, Users, Clock, DollarSign } from 'lucide-react'

export interface SidebarItem {
  title: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
  items?: SidebarItem[]
}

export const sidebarItems: SidebarItem[] = [
  {
    title: '1. Chức năng đăng nhập hệ thống',
    icon: FileText,
    items: [
      {
        title: '1.1. Mục đích',
        href: '/docs/login#muc-dich',
      },
      {
        title: '1.2. Đối tượng sử dụng',
        href: '/docs/login#doi-tuong-su-dung',
      },
      {
        title: '1.3. Truy cập chức năng',
        href: '/docs/login#truy-cap-chuc-nang',
      },
    ],
  },
  {
    title: '2. Chức năng đăng xuất hệ thống',
    icon: FileText,
    items: [
      {
        title: '2.1. Mục đích',
        href: '/docs/logout#muc-dich',
      },
      {
        title: '2.2. Đối tượng sử dụng',
        href: '/docs/logout#doi-tuong-su-dung',
      },
      {
        title: '2.3. Truy cập chức năng',
        href: '/docs/logout#truy-cap-chuc-nang',
      },
    ],
  },
  {
    title: '3. Quản lý nhân sự',
    href: '/docs/nhan-su',
    icon: Users,
    items: [
      {
        title: '3.1. Mục đích',
        href: '/docs/nhan-su#muc-dich',
      },
      {
        title: '3.2. Đối tượng sử dụng',
        href: '/docs/nhan-su#doi-tuong-su-dung',
      },
      {
        title: '3.3. Truy cập chức năng',
        href: '/docs/nhan-su#truy-cap-chuc-nang',
        items: [
          {
            title: '3.3.1. Quản lý nhân viên',
            href: '/docs/nhan-su#quan-ly-nhan-vien',
          },
          {
            title: '3.3.2. Quản lý hợp đồng',
            href: '/docs/nhan-su#quan-ly-hop-dong',
          },
          {
            title: '3.3.3. Quản lý phòng ban',
            href: '/docs/nhan-su#quan-ly-phong-ban',
          },
          {
            title: '3.3.4. Quản lý tạm ứng',
            href: '/docs/nhan-su#quan-ly-tam-ung',
          },
          {
            title: '3.3.5. Cấu hình phần hệ nhân sự',
            href: '/docs/nhan-su#cau-hinh-phan-he-nhan-su',
            items: [
              {
                title: '3.3.5.1. Danh mục lý do nghỉ việc',
                href: '/docs/nhan-su#danh-muc-ly-do-nghi-viec',
              },
              {
                title: '3.3.5.2. Quản lý danh mục vị trí công việc (chức vụ)',
                href: '/docs/nhan-su#quan-ly-vi-tri-cong-viec',
              },
              {
                title: '3.3.5.3. Quản lý danh mục loại việc làm',
                href: '/docs/nhan-su#quan-ly-loai-viec-lam',
              },
              {
                title: '3.3.5.4. Quản lý Danh mục lịch làm việc',
                href: '/docs/nhan-su#quan-ly-lich-lam-viec',
              },
            ],
          },
          {
            title: '3.3.6. Import dữ liệu vào phần mềm',
            href: '/docs/nhan-su#import-du-lieu',
          },
          {
            title: '3.3.7. Export dữ liệu ra file',
            href: '/docs/nhan-su#export-du-lieu',
          },
        ],
      },
    ],
  },
  {
    title: '4. Quản lý chấm công',
    href: '/docs/cham-cong',
    icon: Clock,
    items: [
      {
        title: '4.1. Mục đích',
        href: '/docs/cham-cong#muc-dich',
      },
      {
        title: '4.2. Đối tượng sử dụng',
        href: '/docs/cham-cong#doi-tuong-su-dung',
      },
      {
        title: '4.3. Truy cập chức năng',
        href: '/docs/cham-cong#truy-cap-chuc-nang',
        items: [
          {
            title: '4.3.1. Xem chấm công chi tiết của nhân sự',
            href: '/docs/cham-cong#xem-cham-cong-chi-tiet',
          },
          {
            title: '4.3.2. Chấm công tự động',
            href: '/docs/cham-cong#cham-cong-tu-dong',
          },
          {
            title: '4.3.3. Báo cáo chấm công',
            href: '/docs/cham-cong#bao-cao-cham-cong',
            items: [
              {
                title: '4.3.3.1. Xuất báo cáo chấm công',
                href: '/docs/cham-cong#xuat-bao-cao-cham-cong',
              },
              {
                title: '4.3.3.2. Xuất báo cáo chấm công hàng tháng',
                href: '/docs/cham-cong#xuat-bao-cao-hang-thang',
              },
              {
                title: '4.3.3.3. Kiểm tra đi trễ về sớm',
                href: '/docs/cham-cong#kiem-tra-di-tre-ve-som',
              },
              {
                title: '4.3.3.4. Xuất báo cáo đi trễ/về sớm',
                href: '/docs/cham-cong#xuat-bao-cao-di-tre-ve-som',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: '5. Quản lý bảng lương',
    href: '/docs/luong',
    icon: DollarSign,
    items: [
      {
        title: '5.1. Mục đích',
        href: '/docs/luong#muc-dich',
      },
      {
        title: '5.2. Đối tượng sử dụng',
        href: '/docs/luong#doi-tuong-su-dung',
      },
      {
        title: '5.3. Truy cập chức năng',
        href: '/docs/luong#truy-cap-chuc-nang',
        items: [
          {
            title: '5.3.1. Phiếu lương nhân viên',
            href: '/docs/luong#phieu-luong-nhan-vien',
          },
          {
            title: '5.3.2. Quản lý bảng lương/kỳ lương/tháng lương',
            href: '/docs/luong#quan-ly-ky-luong',
          },
          {
            title: '5.3.3. Quản lý các khoản tăng, trừ khác',
            href: '/docs/luong#quan-ly-tang-tru',
          },
          {
            title: '5.3.4. Quản lý phụ cấp lương',
            href: '/docs/luong#quan-ly-phu-cap',
            items: [
              {
                title: '5.3.4.1. Phụ cấp lương',
                href: '/docs/luong#phu-cap-luong',
              },
              {
                title: '5.3.4.2. Loại phụ cấp',
                href: '/docs/luong#loai-phu-cap',
              },
              {
                title: '5.3.4.3. Báo cáo phụ cấp',
                href: '/docs/luong#bao-cao-phu-cap',
              },
            ],
          },
          {
            title: '5.3.5. Quản lý đóng góp từ lương',
            href: '/docs/luong#quan-ly-dong-gop',
            items: [
              {
                title: '5.3.5.1. Loại đóng góp',
                href: '/docs/luong#loai-dong-gop',
              },
              {
                title: '5.3.5.2. Báo cáo đóng góp',
                href: '/docs/luong#bao-cao-dong-gop',
              },
            ],
          },
          {
            title: '5.3.6. Báo cáo lương',
            href: '/docs/luong#bao-cao-luong',
            items: [
              {
                title: '5.3.6.1. Báo cáo chuyển lương ngân hàng',
                href: '/docs/luong#bao-cao-chuyen-luong-ngan-hang',
              },
              {
                title: '5.3.6.2. Báo cáo tổng hợp tiền lương',
                href: '/docs/luong#bao-cao-tong-hop-tien-luong',
              },
            ],
          },
          {
            title: '5.3.7. Cấu hình phần hệ bảng lương',
            href: '/docs/luong#cau-hinh-phan-he-luong',
            items: [
              {
                title: '5.3.7.1. Cấu trúc lương',
                href: '/docs/luong#cau-truc-luong',
              },
              {
                title: '5.3.7.2. Quy tắc lương',
                href: '/docs/luong#quy-tac-luong',
              },
            ],
          },
        ],
      },
    ],
  },
]
