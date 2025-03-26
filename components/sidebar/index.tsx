'use client';

import { MenuType } from '@/constants/menu_sidebar';
import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/zustand/auth.store';
import { Button } from '../ui/Button';
import ArrowRight from '@/assets/icons/ArrowRight';
import ChangePassword from '../change-password';
import Link from 'next/link';

interface SidebarProps {
  menuSidebar?: MenuType[]
}
function Sidebar(props: SidebarProps) {
  const { menuSidebar } = props;
  const router = useRouter();
  const { me } = useAuthStore();

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);

  const logOut = () => {
    Cookies.remove('token');
    router.push('/login');
  };

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderMenuItem = (menu: MenuType) => (
    <div key={menu.title} className="mb-2">
      {menu.children ? (
        <div>
          <div
            className="flex items-center justify-between gap-1 p-2 hover:text-[#716aca] font-bold cursor-pointer uppercase"
          >
            <Link href={menu.url} className="flex items-center gap-1 duration-300">
              {menu.icon}
              {menu.title}
            </Link>
            <div className="flex-1 flex justify-end" onClick={() => toggleMenu(menu.title)}>
              <ArrowRight width={16} height={16} className={`${openMenus[menu.title] ? 'rotate-90' : ''} duration-300`} />
            </div>
          </div>
          {openMenus[menu.title] && (
            <ul className="pl-2" key={menu.title}>
              {menu.children?.map((child) => (
                <li key={child.title}>{renderMenuItem(child)}</li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="flex items-center">
          {!menu.icon && <span className="text-xl pl-2">•</span>}
          <SidebarItem menu={menu} />
        </div>
      )}
    </div>
  );

  return (
    <>
      <ChangePassword open={isOpenChangePassword} onClose={() => setIsOpenChangePassword(false)} />
      <div className="w-[240px] fixed h-screen border-r border-[#ccc]">
        <div className="p-2 py-4 bg-[#2563eb] text-white text-center">
          {me?.fullName}
        </div>
        <div className="bg-[#f8e2b2] h-[calc(100%-56px)] overflow-x-hidden overflow-y-auto flex flex-col">
          <div className="py-2 flex-1 text-sm">
            {menuSidebar?.map((menu) => (
              me && menu.allowRole?.includes(me?.role) && renderMenuItem(menu)
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="primary" onClick={() => setIsOpenChangePassword(true)}>
              Đổi mật khẩu
            </Button>
          </div>

          <div className="flex justify-center py-4">
            <Button variant="primary" onClick={logOut}>
              Đăng xuất
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[240px]" />
    </>
  );
}

export default Sidebar;

