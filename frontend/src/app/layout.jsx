import 'regenerator-runtime/runtime'; 
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});




export const metadata = {
  
  
    icons: {
      icon: "/assets/favicon.png",
    },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased scrollbar bg-[#F2FFF9]`}
      >
        {children}
        
      </body>
    </html>
  );
}
