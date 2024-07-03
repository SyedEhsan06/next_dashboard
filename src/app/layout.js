import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextBoard",
  description: "Next.js Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#151c2c] text-white`}>
        <div className="flex h-screen">
          <aside className="w-1/4 bg-[#182237] text-white p-4 m-4">
            <Sidebar/>
          </aside>
          <main className="flex-1 m-4 flex flex-col gap-4">
            <header className="p-4 bg-[#182237] rounded-lg">
              Navbar
            </header>
            <div className="p-4 flex-grow bg-[#182237] rounded-lg">
              {children}
            </div>
          </main> 
        </div>
      </body>
    </html>
  );
}