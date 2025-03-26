'use client';

import { MenuType } from '@/constants/menu_sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface SidebarItemProps {
  menu: MenuType
}

function SidebarItem(props: SidebarItemProps) {
  const { menu } = props
  const pathname = usePathname()

  const isPathActive = pathname === menu.url

  return (
    <Link className={`flex items-center gap-1 p-2 hover:text-[#716aca] font-bold duration-300 uppercase ${isPathActive ? 'text-[#716aca]' : ''}`} href={menu.url}>
      {menu.icon}
      {menu.title}
    </Link>
  )
}

export default SidebarItem