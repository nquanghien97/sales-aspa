import BanIcon from "@/assets/icons/BanIcon";
import ChildrenIcon from "@/assets/icons/ChildrenIcon";
import FilesIcon from "@/assets/icons/FilesIcon";
import ProposalIcon from "@/assets/icons/Proposal";
import UsersIcon from "@/assets/icons/UsersIcon";
import WomenIcon from "@/assets/icons/WomenIcon";

export const menu_sidebar = [
  {
    title: 'INSIGHT CỦA BÉ',
    url: '/insight-cua-be',
    icon: <ChildrenIcon width={20} height={20} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'INSIGHT CỦA MẸ',
    url: '/insight-cua-me',
    icon: <WomenIcon width={20} height={20} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Giới thiệu giải pháp',
    url: '/gioi-thieu-giai-phap',
    icon: <WomenIcon width={20} height={20} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Chốt',
    url: '/chot',
    icon: <WomenIcon width={20} height={20} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Giải đáp khách hàng',
    url: '/giai-dap-khach-hang',
    icon: <BanIcon width={20} height={20} />,
    allowRole: ['ADMIN', 'USER']
  },
  {
    title: 'Quản lý người dùng',
    url: '/quan-ly-nguoi-dung',
    icon: <UsersIcon width={20} height={20} />,
    allowRole: ['ADMIN']
  },
  {
    title: 'Quản lý tư liệu',
    url: '#',
    icon: <FilesIcon width={20} height={20} />,
    allowRole: ['ADMIN', 'USER'],
    children: [
      {
        title: 'Chính sách bán hàng',
        url: '/chinh-sach-ban-hang',
        allowRole: ['ADMIN', 'USER']
      },
      {
        title: 'Sản phẩm',
        url: '/san-pham',
        allowRole: ['ADMIN', 'USER']
      },
      {
        title: 'Giấy tờ sản phẩm',
        url: '/giay-to-san-pham',
        allowRole: ['ADMIN', 'USER']
      },
      {
        title: 'Feedback KH',
        url: '/feedbacks-khach-hang',
        allowRole: ['ADMIN', 'USER']
      }
    ]
  },
  {
    title: 'Đề xuất',
    url: '/de-xuat',
    icon: <ProposalIcon width={20} height={20} />,
    allowRole: ['ADMIN', 'USER']
  }
]