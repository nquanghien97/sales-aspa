import BanIcon from "@/assets/icons/BanIcon";
import ChildrenIcon from "@/assets/icons/ChildrenIcon";
import DocumentIcon from "@/assets/icons/DocumentIcon";
import FeedbackIcon from "@/assets/icons/FeedbackIcon";
import FilesIcon from "@/assets/icons/FilesIcon";
import PolicyIcon from "@/assets/icons/PolicyIcon";
import ProductIcon from "@/assets/icons/ProductIcon";
// import ProposalIcon from "@/assets/icons/Proposal";
import UsersIcon from "@/assets/icons/UsersIcon";
import WomenIcon from "@/assets/icons/WomenIcon";
import { FILE_CATEGORY } from "@prisma/client";
import { JSX } from "react";

export interface MenuType {
  title: string;
  url: string;
  icon?: JSX.Element;
  allowRole?: string[];
  children?: MenuType[];
  category?: FILE_CATEGORY
}

export const menu_sidebar: MenuType[] = [
  {
    title: 'INSIGHT KHÁCH HÀNG',
    url: '/insight-khach-hang',
    icon: <ChildrenIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER']
  },
  // {
  //   title: 'INSIGHT CỦA MẸ',
  //   url: '/insight-cua-me',
  //   icon: <WomenIcon width={16} height={16} />,
  //   allowRole: ['ADMIN', 'USER']
  // },
  {
    title: 'Giới thiệu giải pháp',
    url: '/gioi-thieu-giai-phap',
    icon: <WomenIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Chốt',
    url: '/chot',
    icon: <WomenIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Giải đáp khách hàng',
    url: '/giai-dap-khach-hang',
    icon: <BanIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Quản lý người dùng',
    url: '/quan-ly-nguoi-dung',
    icon: <UsersIcon width={16} height={16} />,
    allowRole: ['ADMIN']
  },
  {
    title: 'Quản lý khách hàng',
    url: '/quan-ly-khach-hang',
    icon: <UsersIcon width={16} height={16} />,
    allowRole: ['ADMIN']
  },
  {
    title: 'Quản lý tư liệu',
    url: '#',
    icon: <FilesIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER'],
    children: [
      {
        title: 'Chính sách bán hàng',
        url: '/chinh-sach-ban-hang',
        icon: <PolicyIcon width={16} height={16} />,
        category: 'SALES_POLICY',
        allowRole: ['ADMIN', 'USER'],
      },
      {
        title: 'Sản phẩm',
        url: '/san-pham',
        icon: <ProductIcon width={16} height={16} />,
        category: 'PRODUCTS',
        allowRole: ['ADMIN', 'USER']
      },
      {
        title: 'Giấy tờ sản phẩm',
        url: '/giay-to-san-pham',
        icon: <DocumentIcon width={16} height={16} />,
        category: 'PRODUCT_DOCUMENTS',
        allowRole: ['ADMIN', 'USER']
      },
      {
        title: 'Feedback KH',
        url: '/feedbacks-khach-hang',
        icon: <FeedbackIcon width={16} height={16} />,
        category: 'FEEDBACKS',
        allowRole: ['ADMIN', 'USER']
      }
    ]
  },
  {
    title: 'HƯỚNG DẪN SỬ DỤNG',
    url: '/huong-dan-su-dung',
    icon: <DocumentIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Hồ sơ khách hàng',
    url: '/ho-so-khach-hang',
    icon: <FilesIcon width={16} height={16} />,
    allowRole: ['ADMIN', 'USER'],
  },
]