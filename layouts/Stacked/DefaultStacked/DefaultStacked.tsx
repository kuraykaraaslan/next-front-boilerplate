/* 
    DefaultStacked.tsx
    created: 01/02/2024
    author: @kuraykaraaslan

    Copyright © 2024 Your Company. All rights reserved.
*/

import "./style.css";

import DefaultHeader from "@/components/Header/DefaultHeader";
import TopHeader from "@/components/Header/TopHeader";
import MiddleHeader from "@/components/Header/MiddleHeader";
import DefaultFooter from "@/components/Footers/DefaultFooter";


export default function DefaultStacked({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body  style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                    <TopHeader/>
                    <MiddleHeader/>
                    <DefaultHeader/>
                    <div style={{ flex: 1 }} className="min-h-[calc(100vh-3rem)]">
                        {/* [children] */}
                        {children}
                    </div>
                    <DefaultFooter/>
            </body>
        </html>
    );
}
