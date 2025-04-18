'use client'

import withAuth from "@/hocs/withAuth";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Trang chủ"
  }, []);

  return (
    <h1 className="text-center text-2xl my-4 font-bold">WEBSITE TRỢ LỰC SALES</h1>
  );
}

const HomeWithAuth = withAuth(Home);
export default HomeWithAuth;