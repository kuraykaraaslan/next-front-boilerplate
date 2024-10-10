/* 
    DefaultStacked.tsx
    created: 07/10/2024
    author: @kuraykaraaslan

    Copyright © 2024 Kuray.dev 
*/


import DefaultNavbar from "@/components/Navbar";
import MiddleNavbar from "@/components/MiddleNavbar";
import Footer from "@/components/Footer";
import TopNavbar from "@/components/TopNavbar";


export default function FrontendLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body  style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                    <TopNavbar/>
                    <MiddleNavbar/>
                    <DefaultNavbar/>
                    <div style={{ flex: 1 }} className="min-h-[calc(100vh-3rem)]">
                        {/* [children] */}
                        {children}
                    </div>
                    <Footer/>
            </body>
        </html>
    );
}
