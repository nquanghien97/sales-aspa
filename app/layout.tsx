'use client'

import "./globals.css";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";
import { useAuthStore } from "@/zustand/auth.store";
import "react-datepicker/dist/react-datepicker.css";
import { useFileCategories } from "@/zustand/file-categories";
import { generateMenuSidebar } from "@/utils/generateMenuSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { getMe } = useAuthStore();
  const { getFileCategories, fileCategories } = useFileCategories()

  useEffect(() => {
    (async () => {
      await getMe()
    })()
  }, [getMe])

  useEffect(() => {
    (async () => {
      await getFileCategories()
    })()
  }, [getFileCategories])

  const menuSidebar = generateMenuSidebar(fileCategories)

  return (
    <html lang="en">
      <body
        className={`bg-[#faf2de] font-normal`}
      >
        {pathname.startsWith('/login') ? (
          children
        ) : (
          <div className="flex">
            <Sidebar menuSidebar={menuSidebar}  />
            <main className="bg-[#faf2de] w-[calc(100%-240px)] h-screen">
              {children}
            </main>
          </div>
        )}
        <ToastContainer />
      </body>
    </html>
  );
}
