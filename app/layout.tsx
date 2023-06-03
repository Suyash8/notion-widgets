import { Inter } from "next/font/google";
import { ContainerProps } from "@/components/Types";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: ContainerProps) => {
  return (
    <div
      className={`text-[38px] font-karla font-normal bg-[#191919] ${inter.className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
